module.exports = {
  cacheId: 'compas',
  globDirectory: 'dist/',
  globPatterns: [
    'assets/**/*.{js,css,png,jpg,jpeg,gif,webp,svg,ico,woff,woff2,wasm}',
  ],
  maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
  swDest: 'dist/sw.js',
  runtimeCaching: [
    {
      urlPattern: /package\.json\.proxy\.js$/,
      handler: 'NetworkFirst',
    },
    {
      urlPattern: /\/external-plugins\/.*/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'compas-external-plugins',
        fetchOptions: {
          cache: 'reload',
          credentials: 'include',
        },
      },
    },
  ],
  skipWaiting: true,
  clientsClaim: true,
  inlineWorkboxRuntime: true,
  cleanupOutdatedCaches: true,
};
