import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  ],
  root: "",
  base: "/",
  resolve: {
    alias: {
      "@": "/src/",
      "@layout": "/src/layout",
      "@components": "/src/components"
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/index.scss" as *;`
      }
    }
  }
})