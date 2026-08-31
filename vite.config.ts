import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vercel deployment — base path is always '/' (no repository subfolder)
// CI workflow verification: Build check runs on every PR and push to main
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5173,
    open: true,
  },
})
