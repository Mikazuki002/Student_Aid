import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel deployment — base path is always '/' (no repository subfolder)
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5173,
    open: true,
  },
})
