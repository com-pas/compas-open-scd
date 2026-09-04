const fs = require('fs');
const path = require('path');

// Workarounds until https://jira.clap.bearingpoint.net/browse/OPENSCD-366 is closed and new open-scd is released.
// PR is WIP: https://github.com/com-pas/open-scd/pull/169
fs.copyFileSync(
  'patches/themes.js',
  'node_modules/@compas-oscd/open-scd/dist/themes.js'
);
fs.copyFileSync(
  'patches/menu-tabs.js',
  'node_modules/@compas-oscd/open-scd/dist/addons/menu-tabs/menu-tabs.js'
);

// Vite prebundles @compas-oscd/* into node_modules/.vite and will keep
// serving the unpatched theme until that cache is gone (all platforms).
fs.rmSync(path.join('node_modules', '.vite'), { recursive: true, force: true });
