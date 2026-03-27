export default {
  plugins: ['@snowpack/plugin-typescript'],
  packageOptions: {
    external: [
      '@web/dev-server-core',
      '@web/dev-server-esbuild',
      'esbuild',
      'crypto',
      '@openscd/open-scd-core',
      '@openscd/oscd-scl',
      '@open-wc/scoped-elements',
    ],
  },
  exclude: [
    '**/node_modules/**/*',
    '.editorconfig',
    '.eslintrc.cjs',
    '.travis.yml',
    '**/karma.conf.cjs',
    '**/Dockerfile',
    '**/package*',
    '**/tsconfig.json',
    '**/workbox-config.cjs',
    '**/*.@(spec|test).@(js|mjs)',
    '**/__snapshots__/**/*',
    '**/coverage/**/*',
    '**/out-tsc/**/*',
    '**/test/**/*',
    '.gitignore',
    '**/.git/**',
    '**/.github/**',
    '**/.idea/**',
    '**/web-test-runner.config.mjs',
    '**/oscd-plugins/auto-doc/**/*',
  ],
  workspaceRoot: '../../',
  mount: {
    '../openscd/': '/openscd/',
    '../plugins/': '/plugins/',
    '../external-plugins/': '/external-plugins/',
    './': '/',
  },
  alias: {
    '@openscd/open-scd': '../openscd/',
    '@openscd/plugins': '../plugins/',
    // Snowpack's esinstall doesn't support package.json "exports" subpath maps,
    // so we manually resolve the subpath export to its actual dist file.
    '@openscd/oscd-api/utils.js':
      '../../node_modules/@openscd/oscd-api/dist/utils.js',
  },
  buildOptions: {
    htmlFragments: true,
  },
};

