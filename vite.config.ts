import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Platform-aware base path:
// - Vercel (VERCEL=1) → root path
// - GitHub Pages (GITHUB_ACTIONS=true) → /Student_Aid/ subpath
// - GreenGeeks / local builds (neither set) → root path
// - Dev server → always root for convenience
const repoBase = '/Student_Aid/'

export default defineConfig(({ command }) => {
  const isVercel = process.env.VERCEL === '1'
  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'
  
  // Only GitHub Pages needs the subpath; Vercel and GreenGeeks both use root
  const base = command === 'build' && isGitHubActions && !isVercel ? repoBase : '/'
  
  return {
    plugins: [react()],
    base,
    server: {
      port: 5173,
      open: true,
    },
  }
})
