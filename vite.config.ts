import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

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
    port: 8080
  },
  preview: {
    port: 8080
  }
})
