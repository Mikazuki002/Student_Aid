import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages uses /Student_Aid/ subpath; Vercel uses root.
// Base path is conditional: dev server always uses root for convenience,
// but build uses /Student_Aid/ for GitHub Pages until Vercel is live.
const repoBase = '/Student_Aid/'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? repoBase : '/',
  server: {
    port: 5173,
    open: true,
  },
}))
