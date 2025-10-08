// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import { imagetools } from 'vite-imagetools'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    visualizer({ open: true }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
    }),
  ],
  build: {
    minify: 'esbuild',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
})