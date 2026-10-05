const packageJson = require('./package.json');

module.exports = {
  cacheId: `compas-${packageJson.version}`,
  globDirectory: 'dist/',
  globPatterns: [
    'src/**/*.{md,js,png,xml,pdf,css,html,info,json,ico,svg,wasm}',
    'plugins/**/*.{md,js,png,xml,pdf,css,html,info,json,ico,svg,wasm}',
    'external-plugins/**/*.{md,js,png,xml,pdf,css,html,info,json,ico,svg,wasm}',
    'ace/**/*.{md,js,png,xml,pdf,css,html,info,json,ico,svg,wasm}',
    'assets/**/*.{md,js,png,xml,pdf,css,html,info,json,ico,svg,wasm}',
    'cim/**/*.{md,js,png,xml,pdf,css,html,info,json,ico,svg,wasm}',
    'conf/**/*.{md,js,png,xml,pdf,css,html,info,json,ico,svg,wasm}',
    'css/**/*.{md,js,png,xml,pdf,css,html,info,json,ico,svg,wasm}',
    'google/**/*.{md,js,png,xml,pdf,css,html,info,json,ico,svg,wasm,woff,woff2,ttf}',
    'init-js/**/*.{md,js,png,xml,pdf,css,html,info,json,ico,svg,wasm}',
    'js/**/*.{md,js,png,xml,pdf,css,html,info,json,ico,svg,wasm}',
    'md/**/*.{md,js,png,xml,pdf,css,html,info,json,ico,svg,wasm}',
    'nsdoc/**/*.{md,js,png,xml,pdf,css,html,info,json,ico,svg,wasm}',
    'polyfill/**/*.{md,js,png,xml,pdf,css,html,info,json,ico,svg,wasm}',
    'xml/**/*.{md,js,png,xml,pdf,css,html,info,json,ico,svg,wasm}',
    '*.{md,json,ico,xml,html,png,svg}',
  ],
  globIgnores: [
    'nsdoc/README.md',
    'pr-*.md',
  ],
  swDest: 'dist/sw.js',
  skipWaiting: true,
  clientsClaim: true,
  inlineWorkboxRuntime: true,
  cleanupOutdatedCaches: true,
};
