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
      "downloadType": "empty, github or azure-devops",
      "tokenEnv": "ENV_TOKEN_VARIABLE",
      "dest": "relative/dest/within/external-plugins",
      "sha256": "64-character hex SHA-256 digest (omit to skip verification for snapshots)"
    }
  ]
}
```

| Field          | Required | Description                                                                                                                                                                                                                           |
|----------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`         | ✅       | Displayed in build output for easy identification.                                                                                                                                                                                    |
| `url`          | ✅       | Full HTTPS URL of the plugin JavaScript file to download.                                                                                                                                                                             |
| `downloadType` | ❌       | Authentication provider: `github` or `azure-devops`. Set with `tokenEnv`. Omit or leave empty for unauthenticated downloads.                                                                                                          |
| `tokenEnv`     | ❌       | Name of the environment variable containing the token used for the authentication. Set with `downloadType`. Omit or leave empty for unauthenticated downloads.                                                                        |
| `dest`         | ✅       | Destination path **relative to** the `external-plugins/` directory. The path determines the URL at which nginx serves the plugin (e.g. `dest: "my-plugin/index.js"` → `/external-plugins/my-plugin/index.js`).                        |
| `sha256`       | ⚠️       | Hex SHA-256 of the JS file. Present and non-empty: integrity check and download cache. `""`: pin intended but digest not filled yet (`plugins:update-empty-hashes`). Omit the field for SNAPSHOT URLs that must always be downloaded. |

## Managing plugins

Use the [`manage-plugins.js`](scripts/manage-plugins.js) helper
(exposed as npm scripts) to manage plugin entries in `remote-plugins.json`.
All URLs must use `https`.

### Optional authentication

Set both `downloadType` and `tokenEnv` on a plugin to enable authentication:

```json
{
  "name": "Private GitHub plugin",
  "url": "https://api.github.com/repos/OWNER/REPO/contents/plugins/index.js?ref=develop",
  "downloadType": "github",
  "tokenEnv": "GITHUB_PLUGIN_TOKEN",
  "dest": "private-plugin/index.js"
}
```

- `downloadType`: `github` (Bearer token, raw file response) or `azure-devops`
  (Basic authentication with an empty username, the PAT as password, and
  `Accept: application/octet-stream` to request raw file content).
- `tokenEnv`: Name of the environment variable containing the token, never the
  token itself. Provide it in the environment of the Node.js process.
- Both fields empty (`""`) or omitted: no authentication, even if a token exists
  in the environment. Existing public plugins remain anonymous.
- Only one field configured: configuration error. Unknown types and invalid
  variable names also fail.

For Azure DevOps, use `"downloadType": "azure-devops"` and, for example,
`"tokenEnv": "AZDO_PAT"`. The URL must return raw file content, for example:
`https://dev.azure.com/ORG/PROJECT/_apis/git/repositories/REPO/items?versionDescriptor.version=develop&versionDescriptor.versionType=branch&download=true&api-version=7.1&path=/plugins/index.js`.

Authenticated downloads reject redirects to prevent token forwarding and only
accept `https://api.github.com` for `github` and `https://dev.azure.com` for
`azure-devops`. Other origins are rejected before any request. A missing
or empty token causes the download to fail; there is no anonymous fallback. The
same authentication applies to the optional sibling `style.css`;
API query parameters such as the branch are preserved. `--allow-insecure` only
controls hash verification, not authentication.

### Configuration validation

`download`, `update-empty-hashes`, and `verify` without `--name` validate every
entry's name, HTTPS URL, authentication settings, and destination path before
any download. Configuration errors are collected and printed together; the
command exits non-zero. `update` validates the resulting entry, and
`verify --name` validates only the selected entry. Invalid settings in unrelated
entries do not block these commands. `list` and `delete` skip entry validation
so invalid settings can be inspected or removed. All commands still require
valid JSON with a `plugins` array.

### Add a plugin

```sh
npm run plugins:add -- \
  --name "My Plugin" \
  --url  "https://example.com/path/to/plugin.js" \
  [--download-type <type> --token-env <ENV_VAR>] \
  [--dest <path>] \
  [--allow-insecure]
```

This appends the entry to `remote-plugins.json` and writes the JS (plus optional
sibling `style.css`) to `distribution/external-plugins` using the URL and
optional authentication. The SHA-256 hash is generated automatically unless
`--allow-insecure` is used, which **omits** `sha256` (snapshot: always
re-downloaded, never cached).
If `--dest` is omitted the destination is inferred from the URL:

- GitHub contents API URLs use `<repo>/<file path>` (e.g.
  `/repos/OWNER/REPO/contents/plugins/index.js` → `REPO/plugins/index.js`).
- Azure DevOps items API URLs use `<repo>/<path query parameter>` (e.g.
  `...?path=/plugins/index.js` → `REPO/plugins/index.js`).
- Other URLs use URL path without leading `/` (e.g.
  `https://example.com/path/to/plugin.js` → `path/to/plugin.js`).

For `api.github.com` and `dev.azure.com`, URLs that do not match the expected API
shape cannot be inferred. If no path can be inferred, specify `--dest`. Existing
plugins with the same name, url, or dest are rejected.

To use plugins from private repositories, specify both `--download-type` and
`--token-env`. `--download-type` selects the type of the source and can be
either `github` or `azure-devops`. `--token-env` names the environment variable
containing the token used for the authentication.

### Update a plugin

```sh
npm run plugins:update -- \
  --name "My Plugin" \
  [--url <new-url>] \
  [--download-type <type> --token-env <ENV_VAR>] \
  [--dest <new-dest>] \
  [--allow-insecure]
```

The `--name` flag is required. Specify at least one of `--url`, `--dest`, or
both `--download-type` and `--token-env` flags. Omitted values keep their
current settings. Changing the URL or destination to one already used by
another plugin is rejected.

Pass both authentication flags with non-empty values to set or change the
authentication. To remove authentication, pass both as empty strings:
`npm run plugins:update -- --name "My Plugin" --download-type "" --token-env ""`.

The script finds the existing entry by name, re-downloads the JS into
`distribution/external-plugins` using the URL and optional authentication, and
recomputes `sha256` unless `--allow-insecure` is used (then `sha256` is omitted).

### Download plugins

```sh
npm run plugins:download
```

Writes every plugin from `remote-plugins.json` into `distribution/external-plugins`.
Pinned hashes skip the HTTP fetch when the dest file already matches. Snapshots
(no `sha256` field) are always fetched. Set `REQUIRE_SHA256=true` to fail on
empty or omitted hashes.

### Fill empty hashes

```sh
npm run plugins:update-empty-hashes
```

For every entry whose `sha256` is `""`, downloads the JS and writes the digest.
Entries with no `sha256` field (snapshots) are left unchanged.

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
Empty `sha256` (`""`) fails unless `--allow-insecure` is used. Omitted `sha256` (snapshot) skips the hash
comparison after a successful download. `--allow-insecure` skips hashing for every selected plugin.
Mismatches and empty responses exit non-zero.

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
   - `downloadType`: Optional authentication provider (either 'github' or 'azure-devops')
   - `tokenEnv`: Optional name of the environment variable used for the authenticated download
   - `dest`: Relative destination path within the `/external-plugins/` directory
   - `sha256`: Optional 64-character hex SHA256 digest for integrity verification

2. **Plugin Registration**: Plugin loading is controlled independently in
   [`public/js/plugins.js`](../public/js/plugins.js). The
   `manage-plugins.js` helper does not edit this file.

3. **Runtime Loading**: The application dynamically imports plugins from the `src` URLs at runtime

#### Implementation details

**Plugin Management CLI** ([`manage-plugins.js`](scripts/manage-plugins.js)):
- Pure Node.js (>= 18) with zero external dependencies; uses only built-in modules
- Validates HTTPS URLs and SHA256 digests
- Normalizes destination paths (prevents directory traversal, backslashes, absolute paths)
- Commands:
  - **add**: Appends plugin to `remote-plugins.json`, writes JS under `distribution/external-plugins`, computes SHA256
  - **update**: Re-downloads plugin to disk and updates metadata; recomputes SHA256 unless `--allow-insecure`
  - **update-empty-hashes**: Fills `sha256: ""` entries and writes the JS to disk
  - **delete**: Removes a plugin entry from `remote-plugins.json` by name
  - **list**: Prints all configured plugin entries from `remote-plugins.json`
  - **verify**: Downloads all plugins and compares against stored hashes; reports mismatches or empty responses as errors
  - **download**: Writes every plugin into `distribution/external-plugins` (cached when pinned sha256 matches)

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
- **Windows Local Dev**: `npm run plugins:download` (Node.js; no Git Bash required).
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
