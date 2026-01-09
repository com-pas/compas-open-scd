
# Build strategy & build tools compas-open-scd

---
## Table of Contents

1. [Current Status and Migration Considerations](#current-status-and-migration-considerations)
2. [Architecture](#architecture)
  - [Snowpack Applications](#snowpack-applications)
  - [TypeScript-Compiled Libraries](#typescript-compiled-libraries)
3. [Build Scripts](#build-scripts)
  - [Main Application](#main-application-packagescompas-open-scd)
  - [Distribution Package](#distribution-package-packagesdistribution)
4. [Snowpack Configuration](#snowpack-configuration)
  - [Main Application Config](#main-application-config-packagescompas-open-scdsnowpackconfigmjs)
  - [Key Configuration Elements](#key-configuration-elements)
5. [Build Flow](#build-flow)
  - [Development Mode](#development-mode-snowpack-dev)
  - [Production Build](#production-build-snowpack-build)
  - [Post-Build: Service Worker Generation](#post-build-service-worker-generation)
6. [Application Entry Point](#application-entry-point)
7. [Monorepo Package Structure](#monorepo-package-structure)
  - [Import Resolution Example](#import-resolution-example)
8. [Development vs Production](#development-vs-production)
9. [Known Issues](#known-issues)
  - [Lit Caching Issue](#lit-caching-issue)
10. [Build Execution Order](#build-execution-order)
11. [Migration Scope Considerations](#migration-scope-considerations)
12. [Related Files](#related-files)
---

This document explains how the current build tool, Snowpack, is setup and used in this project and what the options are to replace Snowpack with another build tool.

### Current status and migration considerations

**Key concerns with continuing to use Snowpack:**

- **No active maintenance** - Security updates and bug fixes are no longer provided
- **Package compatibility issues** - Modern npm packages may not work correctly (see the `lit@2.8.0` cache workaround in build scripts)
- **Limited plugin ecosystem** - Smaller community support compared to modern alternatives
- **Migration path needed** - Technical debt that will eventually require addressing

**Recommended alternatives to investigate:**

1. **[Vite](https://vitejs.dev/)** - Spiritual successor to Snowpack with similar fast unbundled development, better plugin support, and active maintenance
2. **[webpack](https://webpack.js.org/)** - Mature, full-featured bundler with extensive ecosystem
3. **[esbuild](https://esbuild.github.io/)** - Extremely fast bundler written in Go
4. **[rollup](https://rollupjs.org/)** - Optimized for library builds with tree-shaking

## Architecture

`compas-open-scd` is a **monorepo** managed by **Lerna/Nx** with multiple packages. The build architecture uses two different strategies:

### Snowpack applications

Two packages use **Snowpack** to build complete web applications:

1. **`packages/compas-open-scd/`** - Main CoMPAS OpenSCD application

   - **Production application** for CoMPAS-specific use cases
   - Build output used to build the `compas-open-scd` Docker image
   - Deployed to [demo.compas.energy](https://demo.compas.energy)

2. **`packages/distribution/`** - Official OpenSCD distribution
   - OpenSCD without CoMPAS customizations
   - Deployed to `openscd.github.io`
   - [ ] Check if this package can be removed from this repository

### TypeScript-compiled libraries

Other packages are **libraries** compiled with TypeScript only (no Snowpack):

- `@openscd/xml` → Built with `tsc` (⚠️ Being migrated to external npm package)
- `@openscd/core` → Built with `tsc -b` (⚠️ Being migrated to external npm package)
- `@openscd/openscd` → Built with `tsc` (⚠️ Being migrated to external npm package)
- `@openscd/plugins` → Built with `tsc` (⚠️ Being migrated to external npm package)
- `@openscd/forms` → Built with `tsc` (⚠️ Minimal/empty, will follow npm package approach)
- `@openscd/addons` → Built with `tsc` (⚠️ Minimal/empty, will follow npm package approach)
- `@openscd/wizards` → Built with `tsc` (⚠️ Minimal/empty, will follow npm package approach)

**Important:** Despite being built with `tsc`, **Snowpack applications do NOT use the library `dist/` folders**. Instead, Snowpack imports directly from source files (`/src/`) via mount points and aliases. The library builds primarily serve to:

- Validate that libraries compile independently
- Prepare packages for potential npm publishing
- Provide proper IDE/tooling support
- Maintain package boundaries

**Migration Status:** All library packages (`xml`, `core`, `openscd`, `plugins`, `forms`, `addons`, `wizards`) are either being or will be transitioned to external npm packages published from separate repositories. Once complete, **only `compas-open-scd`** (and potentially `distribution`) would need building with a bundler like Snowpack/Vite.

## Build Scripts

### Main application (`packages/compas-open-scd/`)

From [`package.json`](../packages/compas-open-scd/package.json):

```json
{
  "scripts": {
    "build": "npm run doc && npm run build:only && cp .nojekyll build/",
    "build:only": "npx rimraf node_modules/.cache/snowpack/build/lit@2.8.0 && snowpack build && workbox generateSW workbox-config.cjs",
    "start": "npx rimraf node_modules/.cache/snowpack/build/lit@2.8.0 && NODE_OPTIONS=--no-experimental-require-module snowpack dev"
  }
}
```

**Commands:**

- `npm run build` - Full production build including documentation generation
- `npm run build:only` - Build without documentation
- `npm start` - Start development server

**Note:** There's a workaround that removes the cached lit library (`node_modules/.cache/snowpack/build/lit@2.8.0`) before each build or dev server start to avoid caching issues.

### Distribution package (`packages/distribution/`)

```json
{
  "scripts": {
    "build": "snowpack build && workbox generateSW workbox-config.cjs && cp .nojekyll build/",
    "start": "snowpack dev"
  }
}
```

## Snowpack configuration

### Main application config (`packages/compas-open-scd/snowpack.config.mjs`)

```javascript
export default {
  plugins: ["@snowpack/plugin-typescript"],

  packageOptions: {
    external: [
      "@web/dev-server-core",
      "@web/dev-server-esbuild",
      "esbuild",
      "crypto",
      "@openscd/open-scd-core",
      "@openscd/oscd-scl",
    ],
  },

  exclude: [
    "**/node_modules/**/*",
    "**/*.@(spec|test).@(js|mjs)",
    "**/test/**/*",
    "**/coverage/**/*",
    // ... config files, etc.
  ],

  workspaceRoot: "../../",

  mount: {
    "../openscd/": "/openscd/",
    "../plugins/": "/plugins/",
    "../external-plugins/": "/external-plugins/",
    "./": "/",
  },

  alias: {
    "@openscd/open-scd": "../openscd/",
    "@openscd/plugins": "../plugins/",
  },

  buildOptions: {
    htmlFragments: true,
  },
};
```

### Key configuration elements

#### Plugins

- **`@snowpack/plugin-typescript`** - Compiles TypeScript files to JavaScript

#### Package options

**External packages** (not bundled by Snowpack):

- `@web/dev-server-core`, `@web/dev-server-esbuild`, `esbuild` - Development server dependencies
- `crypto` - Node.js built-in module
- `@openscd/open-scd-core`, `@openscd/oscd-scl` - Core libraries

#### Mount points

Mount points map source directories to output URL paths:

| Source Directory       | Output URL Path      | Description                |
| ---------------------- | -------------------- | -------------------------- |
| `../openscd/`          | `/openscd/`          | Core OpenSCD library       |
| `../plugins/`          | `/plugins/`          | Plugins package            |
| `../external-plugins/` | `/external-plugins/` | External plugin submodules |
| `./`                   | `/`                  | Current package root       |

This allows the application to import modules from other packages in the monorepo as if they were served from the same origin.

#### Aliases

Import aliases provide convenient shortcuts:

```javascript
import { something } from "@openscd/open-scd"; // → '../openscd/'
import { plugin } from "@openscd/plugins"; // → '../plugins/'
```

#### Exclude patterns

Files excluded from the build:

- Test files (`**/*.spec.js`, `**/*.test.js`)
- Test directories
- Coverage reports
- Node modules
- Configuration files (tsconfig.json, package.json, etc.)
- Git files and folders

#### Build options

- **`htmlFragments: true`** - Enables building HTML fragments, useful for web components

#### Workspace root

- **`workspaceRoot: "../../"`** - Points to the monorepo root, allowing Snowpack to resolve workspace dependencies

## Build flow

### Development mode (`snowpack dev`)

1. **Clear cache** - Remove problematic lit library cache
2. **Start dev server** - Snowpack serves unbundled ESM modules
3. **On-demand compilation** - TypeScript files compiled as they're requested
4. **Hot Module Replacement** - Changes reflected instantly without full page reload
5. **Module resolution** - Imports resolved via mount points and aliases

### Production build (`snowpack build`)

1. **Clear cache** - Remove problematic lit library cache
2. **TypeScript compilation** - All `.ts` files compiled to `.js`
3. **Module resolution** - Resolve imports from monorepo packages via mount points and aliases
4. **Bundle optimization** - Create optimized bundles while preserving ESM format
5. **Output to `build/`** - Generated files placed in the build directory
6. **Service worker generation** - Workbox creates PWA service worker for offline support

### Post-Build: Service Worker generation

After Snowpack builds, [`workbox-config.cjs`](../packages/compas-open-scd/workbox-config.cjs) configures a Progressive Web App service worker:

```javascript
module.exports = {
  cacheId: `compas-${packageJson.version}`,
  globDirectory: "build/",
  globPatterns: [
    "_snowpack/**/*.{md,js,png,xml,pdf,css,html,info,json,ico,svg,wasm}",
    "public/**/*.{md,js,png,xml,pdf,css,html,info,json,ico,svg,wasm}",
    "src/**/*.{md,js,png,xml,pdf,css,html,info,json,ico,svg,wasm}",
    "plugins/**/*.{md,js,png,xml,pdf,css,html,info,json,ico,svg,wasm}",
    "external-plugins/**/*.{md,js,png,xml,pdf,css,html,info,json,ico,svg,wasm}",
    // ...
  ],
  swDest: "build/sw.js",
  runtimeCaching: [
    {
      urlPattern: /\/(_snowpack|public|src)\/.*/,
      handler: "NetworkFirst",
    },
  ],
};
```

This caches all application resources for offline functionality.

## Application entry point

The [`index.html`](../packages/compas-open-scd/index.html) file serves as the entry point:

```html
<body>
  <open-scd></open-scd>

  <!-- Polyfills for scoped custom elements -->
  <script src="./src/polyfill/scoped-custom-elements-polyfill.js"></script>

  <!-- Prevent duplicate custom element definitions -->
  <script>
    const _customElementsDefine = window.customElements.define;
    window.customElements.define = (name, cl, conf) => {
      if (!customElements.get(name)) {
        _customElementsDefine.call(window.customElements, name, cl, conf);
      }
    };
  </script>

  <!-- Main application module -->
  <script type="module" src="./src/open-scd.js"></script>

  <!-- Initialize application -->
  <script src="./public/init-js/init.js"></script>

  <!-- Register service worker -->
  <script>
    if ("serviceWorker" in navigator)
      navigator.serviceWorker.register("/sw.js");
  </script>
</body>
```

Key elements:

1. **`<open-scd></open-scd>`** - Custom element that renders the application
2. **Polyfills** - Browser compatibility for scoped custom elements
3. **`src/open-scd.js`** - Main TypeScript application (compiled from `open-scd.ts`)
4. **Service worker** - Registered for offline support

## Monorepo package structure

The Snowpack configuration leverages the monorepo structure:

```
packages/
├── compas-open-scd/         # Main app (imports from other packages)
│   ├── src/
│   │   └── open-scd.ts      # Entry point
│   ├── snowpack.config.mjs
│   └── index.html
│
├── openscd/                 # Core library (mounted to /openscd/)
│   └── src/
│       └── open-scd.ts
│
├── plugins/                 # Plugins (mounted to /plugins/)
│   ├── src/
│   └── snowpack.config.mjs
│
└── external-plugins/        # Git submodules (mounted to /external-plugins/)
    ├── oscd-designer/
    ├── oscd-publisher/
    └── ...
```

### Import resolution example

In `packages/compas-open-scd/src/open-scd.ts`:

```typescript
// Alias resolution
import "@openscd/open-scd/src/addons/Waiter.js";
// Resolves to: ../openscd/src/addons/Waiter.js

// Direct path via mount point
import { Plugin } from "@openscd/open-scd/src/plugin.js";
// Resolves to: ../openscd/src/plugin.js
```

## Development vs Production

| Aspect              | Development (`snowpack dev`) | Production (`snowpack build`)     |
| ------------------- | ---------------------------- | --------------------------------- |
| **Module bundling** | Unbundled ESM modules        | Optimized bundles                 |
| **Source maps**     | Inline, detailed             | External, optimized               |
| **Hot reloading**   | Yes                          | N/A                               |
| **File watching**   | Yes                          | N/A                               |
| **Optimization**    | Minimal                      | Full (minification, tree-shaking) |
| **Service worker**  | No                           | Yes (via Workbox)                 |
| **Build time**      | Fast startup                 | Slower but optimized output       |

## Known issues

### Lit caching issue

There's a known issue with Snowpack caching the lit library that causes failures. The workaround is to delete the cache before starting:

```bash
npx rimraf node_modules/.cache/snowpack/build/lit@2.8.0
```

This is automatically included in the `build:only` and `start` scripts.

## Build execution order

This section documents the complete order of operations when executing `npm run build` from the monorepo root.

**Root Command:**

```bash
npm run build
# Executes: NODE_OPTIONS=--no-experimental-require-module npx nx run-many -t build --all --exclude=@openscd/distribution
```

**Execution flow:**

1. **Nx task orchestration**

   - Nx analyzes the dependency graph defined in `nx.json`
   - Determines build order based on package dependencies
   - Runs build tasks in parallel where possible, respecting `dependsOn` constraints

2. **Build target dependencies** (from `nx.json`):

   ```json
   "build": {
     "dependsOn": ["clean", "^clean", "^build"]
   }
   ```

   - `"clean"` - Run own clean task first
   - `"^clean"` - Run clean task of all dependencies first
   - `"^build"` - Build all dependencies before building this package

3. **Package build order** (respecting dependencies):

   **Phase 1: Base libraries** (no dependencies, can run in parallel)

   - `@openscd/xml` → `npm run build` → `tsc` (compiles TypeScript)
   - `@openscd/core` → `npm run build` → `tsc -b` (compiles TypeScript with build mode)
   - `@openscd/forms` → `npm run build` → `tsc` (compiles TypeScript)

   **Phase 2: Higher-Level libraries** (depend on Phase 1)

   - `@openscd/open-scd` → `npm run build` → `tsc` (compiles TypeScript)
     - Depends on: `@openscd/core`, `@openscd/xml`

   **Phase 3: Plugins** (depend on Phase 2)

   - `@openscd/plugins` → `npm run build`:
     1. `npm run doc:clean` → Remove `doc/` directory
     2. `npm run doc:typedoc` → Generate TypeDoc API documentation
     3. `npm run doc:wca` → Generate web component analysis docs
     4. `npm run bundle` → `tsc` (compile TypeScript)

   **Phase 4: Extensions**

   - `@openscd/addons` → `npm run build` → (package-specific build)
   - `@openscd/wizards` → `npm run build` → (package-specific build)

   **Phase 5: Main application** (depends on everything above)

   - `compas-open-scd` → `npm run build`:
     1. `npm run doc` (documentation generation):
        - `npm run doc:clean` → Remove `doc/` directory
        - `npm run doc:typedoc` → Generate TypeDoc API docs from `./src`
        - `npm run doc:wca` → Generate web component analysis docs
     2. `npm run build:only`:
        - `npx rimraf node_modules/.cache/snowpack/build/lit@2.8.0` → Clear problematic cache
        - `snowpack build` → Run Snowpack production build:
          - Compile all TypeScript files to JavaScript
          - Resolve imports from monorepo packages via mount points
          - Bundle and optimize for production
          - Output to `build/` directory
        - `workbox generateSW workbox-config.cjs` → Generate service worker for PWA
     3. `cp .nojekyll build/` → Copy `.nojekyll` file for GitHub Pages

4. **Excluded package:**
   - `@openscd/distribution` is explicitly excluded via `--exclude=@openscd/distribution`

**Key Points:**

- Nx orchestrates the build, not plain npm/lerna
- Packages build in dependency order (topological sort)
- Independent packages can build in parallel
- Caching significantly speeds up subsequent builds
- The main `compas-open-scd` application builds last since it depends on all other packages
- **Important:** Library `dist/` folders are built but NOT used by Snowpack - applications compile from source

**Note on Library Dependencies:** While Nx forces library packages to build, Snowpack applications actually bypass these `dist/` folders entirely and compile directly from source files via mount points. As libraries transition to external npm packages, this build orchestration will become simpler.

## Migration scope considerations

When evaluating build tool replacements for Snowpack, the scope is **focused on application builds only**:

**Primary Migration Target:**

- **`packages/compas-open-scd/`** - Main production application requiring full build pipeline replacement

**Secondary Consideration:**

- **`packages/distribution/`** - May not require migration if retired or can use same tooling as main app

**Out of scope:**

- All library packages (`xml`, `core`, `openscd`, `plugins`, `forms`, `addons`, `wizards`) - Use simple `tsc` compilation and all are being/will be migrated to external npm packages
- No Snowpack dependency for these packages

**Key simplification:** All library packages are transitioning to external npm packages, making the build tool migration a **single-application migration** focused solely on `compas-open-scd`. The build tool evaluation can focus on:

1. Building one TypeScript/web component application (`compas-open-scd`)
2. Handling external plugins (git submodules in `external-plugins/`)
3. Service worker generation for PWA functionality
4. Development server with hot module replacement

This dramatically simplifies the scope from "migrate a monorepo" to "migrate one application".

## Related Files

- [`packages/compas-open-scd/snowpack.config.mjs`](../packages/compas-open-scd/snowpack.config.mjs) - Main app Snowpack config
- [`packages/distribution/snowpack.config.mjs`](../packages/distribution/snowpack.config.mjs) - Distribution Snowpack config
- [`packages/plugins/snowpack.config.mjs`](../packages/plugins/snowpack.config.mjs) - Plugins Snowpack config
- [`packages/compas-open-scd/workbox-config.cjs`](../packages/compas-open-scd/workbox-config.cjs) - Service worker config
- [`packages/compas-open-scd/index.html`](../packages/compas-open-scd/index.html) - Application entry point
- [`package.json`](../package.json) - Root package configuration
- [`packages/compas-open-scd/package.json`](../packages/compas-open-scd/package.json) - Main app package configuration

