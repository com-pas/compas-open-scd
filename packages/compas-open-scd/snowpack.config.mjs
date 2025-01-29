export default ({
  plugins: ['@snowpack/plugin-typescript'],
  packageOptions : {
    external: ['@web/dev-server-core','@web/dev-server-esbuild','esbuild','crypto'],
  },
  exclude: [
    "**/node_modules/**/*",
    ".editorconfig",
    ".eslintrc.cjs",
    ".travis.yml",
    "**/karma.conf.cjs",
    "**/Dockerfile",
    "**/package*",
    "**/tsconfig.json",
    "**/workbox-config.cjs",
    "**/*.@(spec|test).@(js|mjs)",
    "**/__snapshots__/**/*",
    "**/coverage/**/*",
    "**/out-tsc/**/*",
    "**/test/**/*",
    ".gitignore",
    "**/.git/**",
    "**/.github/**",
    "**/.idea/**",
    "**/web-test-runner.config.mjs",
  ],
  workspaceRoot: "../../",
  mount: {
    '../openscd/': '/openscd/',
    '../plugins/': '/plugins/',
    '../external-plugins/': '/external-plugins/',
    "./": "/",
  },
  alias: {
    '@openscd/open-scd': '../openscd/',
    '@openscd/plugins': '../plugins/',
  },
});

