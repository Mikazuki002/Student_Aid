import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub Pages URL path:
//   https://Mikazuki002.github.io/Student_Aid/
// When developing locally with F5 the absolute /Student_Aid/ prefix would
// break the dev server, so we only apply it during production builds.
const repoBase = '/Student_Aid/'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? repoBase : '/',
  server: {
    port: 5173,
    open: true,
  },
}))
