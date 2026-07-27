import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

function legacyPublicPaths() {
  return {
    name: 'legacy-public-paths',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url?.startsWith('/public/')) req.url = req.url.replace('/public/', '/')
        next()
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url?.startsWith('/public/')) req.url = req.url.replace('/public/', '/')
        next()
      })
    }
  }
}

export default defineConfig({
  plugins: [
    legacyPublicPaths(),
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
