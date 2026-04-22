import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

const skipImageOptimizer = process.env.SKIP_IMAGE_OPTIMIZER === '1'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    !skipImageOptimizer &&
      ViteImageOptimizer({
        png: { quality: 70, compressionLevel: 9 },
        jpeg: { quality: 72 },
        jpg: { quality: 72 },
        webp: { quality: 72 },
        svg: { multipass: true },
      }),
  ],
  server: {
    host: true,
    port: 5182,
    strictPort: true,
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('three')) return 'three'
          if (['react', 'react-dom', 'react-router-dom', 'framer-motion'].some((pkg) => id.includes(`/node_modules/${pkg}/`))) return 'vendor'
        },
      },
    },
  },
})
