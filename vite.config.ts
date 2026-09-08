import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { existsSync } from 'node:fs'

const externalPluginsPath = (existsSync('distribution/external-plugins')
  ? [{ src: 'distribution/external-plugins/**/*', dest: 'external-plugins', rename: { stripBase: 2 } }]
  : [])

export default defineConfig({
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
    port: 8080
  },
  preview: {
    port: 8080
  }
})
