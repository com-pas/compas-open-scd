import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// Local backend (e.g. Compas API) – formerly snowpack routes for /(external-api|proxy)/.*
const proxy = {
  '^/(external-api|proxy)/.*': {
    target: 'http://localhost:8181',
    changeOrigin: true,
  },
};

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
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
