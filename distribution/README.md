<!-- SPDX-FileCopyrightText: 2026 BearingPoint GmbH -->
<!-- -->
<!-- SPDX-License-Identifier: Apache-2.0 -->

# Remote Plugins

The CoMPAS nginx container can download external plugins at **container build time** and
serve them directly, so the browser never needs to reach external sources.

## How it works

Plugin entries are read from [`remote-plugins.json`](./remote-plugins.json). 

At build time, the GitHub Actions Build Pipeline downloads the plugins listed in 
[`distribution/remote-plugins.json`](./remote-plugins.json) to the directory 
`/build/external-plugins`. For each plugin, the JavaScript file at `url` is downloaded to `dest`.
Optionally, the build also attempts to download `style.css` (relative to the plugin URL)
to `/build/external-plugins/<DEST_DIRECTORY>/style.css`.

The directory `/external-plugins` and its underlying directories and files are then provided by the
built Docker service at the URL `https://<DOMAIN>/external-plugins`.

## Configuration file format

Plugins are defined in [`remote-plugins.json`](./remote-plugins.json) at the repository root:

```json
{
  "plugins": [
    {
      "name": "Human-readable name shown in build logs",
      "url": "https://example.com/path/to/plugin.js",
      "dest": "relative/dest/within/external-plugins",
      "sha256": "64-character hex SHA-256 digest (leave empty to skip verification)"
    }
  ]
}
```

| Field    | Required | Description                                                                                                                                                                                                    |
| -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`   | ✅       | Displayed in build output for easy identification.                                                                                                                                                             |
| `url`    | ✅       | Full URL of the plugin JavaScript file to download.                                                                                                                                                            |
| `dest`   | ✅       | Destination path **relative to** the `external-plugins/` directory. The path determines the URL at which nginx serves the plugin (e.g. `dest: "my-plugin/index.js"` → `/external-plugins/my-plugin/index.js`). |
| `sha256` | ⚠️       | Hex-encoded SHA-256 digest of the expected file content. Strongly recommended for all production deployments. Leave as `""` to skip integrity verification.                                                    |

## Managing plugins

Use the [`manage-plugins.js`](scripts/manage-plugins.js) helper
(exposed as npm scripts) to manage plugin entries in `remote-plugins.json`.
All URLs must use `https`.

### Add a plugin

```sh
npm run plugins:add -- \
  --name "My Plugin" \
  --url  "https://example.com/path/to/plugin.js" \
  [--allow-insecure]
```

This appends the entry to `remote-plugins.json`.
The plugin is downloaded during the build, its SHA-256 hash is generated
automatically, and the hash is stored in `remote-plugins.json`. Add
`--allow-insecure` to leave `sha256` empty. If `--dest` is omitted it defaults
to the URL path (without the leading `/`). Existing plugins
with the same name, url, or dest are rejected.

### Update a plugin

```sh
npm run plugins:update -- \
  --name "My Plugin" \
  --url <new-url> \
  [--dest <new-dest>] \
  [--allow-insecure]
```

The flags `--name` and `--url` are required. The script finds the existing
entry by name, re-downloads the content from the new URL, recomputes `sha256`
automatically unless `--allow-insecure` is used.

### Delete a plugin

```sh
npm run plugins:delete -- --name "My Plugin"
```

Removes the matching entry (case-insensitive by name) from
`remote-plugins.json`.

### List plugins

```sh
npm run plugins:list
```

Prints all plugin entries currently defined in `remote-plugins.json`.

### Verify plugins

```sh
npm run plugins:verify -- [--name <plugin-name>] [--allow-insecure]
```

Downloads every plugin and compares against its stored `sha256`. `--name` selects a specific plugin to verify. 
Empty `sha256` values fail unless `--allow-insecure` is used, which skips the hash
comparison for every selected plugin. Mismatches and empty responses exit non-zero.

### Rebuild the image

After any change, rebuild the Docker image so nginx serves the new file set:

```sh
docker build -f distribution/Dockerfile -t compas-open-scd .
```

## Technical details

### Development details

#### Architecture

The remote plugin system uses a **multi-stage Docker build** and zero-dependency Node.js CLI tooling:

**Stage 1: Plugin Downloader (Alpine Linux)**
- Fetches all plugins listed in `remote-plugins.json` using `curl`
- Validates SHA256 hashes using `openssl` (if provided)
- Stores downloaded files in `/build/external-plugins`
- Fails the build immediately if validation fails or `REQUIRE_SHA256=true` finds an empty hash

**Stage 2: Nginx Server (Debian-based)**
- Copies the entire `dist/` build output (compiled application)
- Copies the downloaded plugins from Stage 1
- Serves both application and plugins from a single nginx instance on port 8080

#### How plugins are registered and loaded

1. **Plugin Metadata**: Each plugin entry in `remote-plugins.json` specifies:
   - `name`: Display name for build logs
   - `url`: HTTPS URL to the plugin JavaScript file (must be absolute and use https://)
   - `dest`: Relative destination path within the `/external-plugins/` directory
   - `sha256`: Optional 64-character hex SHA256 digest for integrity verification

2. **Plugin Registration**: Plugin loading is controlled independently in
   [`public/public/js/plugins.js`](../public/public/js/plugins.js). The
   `manage-plugins.js` helper does not edit this file.

3. **Runtime Loading**: The application dynamically imports plugins from the `src` URLs at runtime

#### Implementation details

**Plugin Download Script** ([`download-plugins.sh`](scripts/download-plugins.sh)):
- Parses JSON configuration using `jq`
- Creates destination directories automatically
- Downloads each plugin with `curl --fail` to abort on HTTP errors
- Validates SHA256 if provided; skips validation if empty
- Respects `REQUIRE_SHA256` environment variable to enforce hash verification

**Plugin Management CLI** ([`manage-plugins.js`](scripts/manage-plugins.js)):
- Pure Node.js (>= 18) with zero external dependencies; uses only built-in modules
- Validates HTTPS URLs and SHA256 digests
- Normalizes destination paths (prevents directory traversal, backslashes, absolute paths)
- Five commands:
  - **add**: Appends plugin to `remote-plugins.json`, downloads content, and computes SHA256
  - **update**: Re-downloads plugin and updates metadata; recomputes SHA256 unless `--allow-insecure`
  - **delete**: Removes a plugin entry from `remote-plugins.json` by name
  - **list**: Prints all configured plugin entries from `remote-plugins.json`
  - **verify**: Downloads all plugins and compares against stored hashes; reports mismatches or empty responses as errors

**Optional Custom Styles**:
If a plugin includes a `style.css` file alongside its `index.js`, the build script automatically copies it:
- Source: `../style.css` (sibling directory to the downloaded file)
- Destination: `<DEST_DIRECTORY>/style.css` in the nginx image

Note that the `sha256` field in `remote-plugins.json` only applies to `index.js`; `style.css` is not verified.

#### Build-time caching and layer optimization

The Dockerfile copies `distribution/remote-plugins.json` before running the download script. This strategy allows Docker layer caching to skip plugin re-downloads when only application code changes, significantly speeding up incremental builds.

#### Environment and requirements

- **Build Host**: Requires `curl`, `jq`, and `openssl` (provided by Alpine Docker image)
- **Plugin Management**: Requires Node.js >= 18.x (for built-in `fetch` API)
- **Configuration Location**: `distribution/remote-plugins.json` must be valid JSON
- **Output Directory**: Plugins copied to `/usr/share/nginx/html/external-plugins` in final image

### Security considerations

- **Always** provide a `sha256` hash for plugins used in production.  
  Without a hash, a compromised or changed upstream file would be served silently.
- Pin downloads to a specific version or commit-based URL rather than a moving
  branch name (e.g. prefer a tagged release URL over a `main` branch URL) so that
  rebuilding the image always produces the same result.
- To enforce that every plugin has a SHA-256 hash, pass `REQUIRE_SHA256=true` as a
  Docker build argument:

  ```sh
  docker build --build-arg REQUIRE_SHA256=true -f distribution/Dockerfile -t compas-open-scd .
  ```

  The build will fail immediately for any plugin entry that has an empty `sha256`
  field, making it impossible to accidentally ship un-verified plugins.

### Manual Validation

  To manually verify the integrity of a plugin file, use the following command:
  
   ```sh
   curl -fsSL https://your-domain.com/path/to/plugin.js | sha256sum
   ```

  to download it and compute its SHA-256 digest in one step. Compare the result against 
  the `sha256` value stored in `remote-plugins.json`. If the digests match, the file is 
  intact and has not been tampered with since the hash was recorded.
