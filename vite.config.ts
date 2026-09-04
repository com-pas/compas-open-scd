import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { existsSync } from 'node:fs'

const externalPluginsPath = (existsSync('distribution/external-plugins')
  ? [{ src: 'distribution/external-plugins/**/*', dest: 'external-plugins', rename: { stripBase: 2 } }]
  : [])

// Local backend (e.g. Compas API) – formerly snowpack routes for /(external-api|proxy)/.*
const proxy = {
  '^/(external-api|proxy)/.*': {
    target: 'http://localhost:8181',
    changeOrigin: true,
  },
};

export default defineConfig({
  // Default 'spa' rewrites missing URLs (including *.js fetches with Accept: */*)
  // to index.html. This app has no path-based client routes.
  appType: 'mpa',
  // Lightning CSS (Vite's default CSS minifier) rewrites light-dark() to
  // var(--lightningcss-light/dark) without defining those vars, which makes
  // background: var(--oscd-secondary) invalid. esbuild leaves light-dark() intact.
  build: {
    cssMinify: 'esbuild',
  },
  plugins: [
    viteStaticCopy({
      targets: [
        ...externalPluginsPath,
        { src: 'packages/external-plugins/**/*', dest: 'external-plugins', rename: { stripBase: 2 } },
        { src: 'packages/external-plugins/IedEditor.js', dest: 'external-plugins', rename: { stripBase: 2 } }
      ]
    })
  ],
  server: {
    port: 8080,
    proxy
  },
  preview: {
    port: 8080,
    proxy,
  }
})
