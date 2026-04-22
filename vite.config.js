import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
