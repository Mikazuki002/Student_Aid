import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Platform-aware base path:
// - Vercel (detected via VERCEL env var) → root path
// - GitHub Pages (no VERCEL env var) → /Student_Aid/ subpath
// - Dev server → always root for convenience
const repoBase = '/Student_Aid/'

export default defineConfig(({ command }) => {
  const isVercel = process.env.VERCEL === '1'
  const base = command === 'build' && !isVercel ? repoBase : '/'
  
  return {
    plugins: [react()],
    base,
    server: {
      port: 5173,
      open: true,
    },
  }
})
