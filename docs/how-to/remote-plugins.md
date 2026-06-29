# Remote Plugins

The CoMPAS nginx container can download external plugins at **container build time** and
serve them directly, so the browser never needs to reach external sources.

## How it works

A multi-stage Docker build is used:

1. **`plugin-downloader` stage** – an Alpine container that runs
   [`scripts/download-plugins.sh`](../../scripts/download-plugins.sh).  
   It reads `remote-plugins.json`, downloads every listed plugin with `curl`, and
   optionally verifies the file's SHA-256 digest.  
   - If a download fails, the build fails.
   - If a SHA-256 hash is provided and does not match, the build fails.
2. **Final nginx stage** – the downloaded plugins are copied from the builder stage
   into `/usr/share/nginx/html/external-plugins`, where nginx serves them under the
   `/external-plugins/` URL prefix.

Because the `COPY remote-plugins.json` instruction comes before the download step,
Docker's layer cache is only invalidated for the download stage when
`remote-plugins.json` actually changes.  Updates to the application source alone
will not trigger a re-download of plugin files.

## Configuration file format

Plugins are defined in `remote-plugins.json` at the repository root:

```json
{
  "plugins": [
    {
      "name":   "Human-readable name shown in build logs",
      "url":    "https://example.com/path/to/plugin.js",
      "dest":   "relative/dest/within/external-plugins/plugin.js",
      "sha256": "64-character hex SHA-256 digest (leave empty to skip verification)"
    }
  ]
}
```

| Field    | Required | Description |
|----------|----------|-------------|
| `name`   | ✅       | Displayed in build output for easy identification. |
| `url`    | ✅       | Full URL of the plugin JavaScript file to download. |
| `dest`   | ✅       | Destination path **relative to** the `external-plugins/` directory. The path determines the URL at which nginx serves the plugin (e.g. `dest: "my-plugin/index.js"` → `/external-plugins/my-plugin/index.js`). |
| `sha256` | ⚠️       | Hex-encoded SHA-256 digest of the expected file content. Strongly recommended for all production deployments. Leave as `""` to skip integrity verification. |

## Adding a plugin

1. Find the download URL of the plugin JavaScript bundle.
2. Compute the SHA-256 hash of the file:

   ```sh
   curl -fsSL https://example.com/path/to/plugin.js | sha256sum
   ```

3. Add an entry to `remote-plugins.json`:

   ```json
   {
     "name":   "My Plugin",
     "url":    "https://example.com/path/to/plugin.js",
     "dest":   "my-plugin/plugin.js",
     "sha256": "<output from sha256sum above>"
   }
   ```

4. Register the plugin in `public/public/js/plugins.js` using the local path:

   ```js
   {
     name: 'My Plugin',
     src: '/external-plugins/my-plugin/plugin.js',
     // ...
   }
   ```

5. Rebuild the Docker image to pull in the new plugin:

   ```sh
   docker build -t compas-open-scd .
   ```

## Updating an existing plugin

1. Obtain the new URL (if changed) and compute the new SHA-256 hash as shown above.
2. Update the relevant entry in `remote-plugins.json`.
3. Rebuild the Docker image. Because `remote-plugins.json` has changed, the
   `plugin-downloader` layer is invalidated and all plugins are re-downloaded.

## Security considerations

- **Always** provide a `sha256` hash for plugins used in production.  
  Without a hash, a compromised or changed upstream file would be served silently.
- Pin downloads to a specific version or commit-based URL rather than a moving
  branch name (e.g. prefer a tagged release URL over a `main` branch URL) so that
  rebuilding the image always produces the same result.
- To enforce that every plugin has a SHA-256 hash, pass `REQUIRE_SHA256=true` as a
  Docker build argument:

  ```sh
  docker build --build-arg REQUIRE_SHA256=true -t compas-open-scd .
  ```

  The build will fail immediately for any plugin entry that has an empty `sha256`
  field, making it impossible to accidentally ship un-verified plugins.
