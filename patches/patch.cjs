const fs = require('fs');
const path = require('path');

fs.copyFileSync(
  'patches/themes.js',
  'node_modules/@compas-oscd/open-scd/dist/themes.js'
);

// Vite prebundles @compas-oscd/* into node_modules/.vite and will keep
// serving the unpatched theme until that cache is gone (all platforms).
fs.rmSync(path.join('node_modules', '.vite'), { recursive: true, force: true });
