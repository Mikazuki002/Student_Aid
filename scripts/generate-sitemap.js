// Build-time script to generate sitemap.xml for the 7 real routes.
// Run after `vite build` to create dist/sitemap.xml

import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const baseUrl = 'https://mikazuki002.github.io/Student_Aid'
const routes = [
  '/',
  '/about',
  '/student-support-services',
  '/groundwork-services',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
]

const currentDate = new Date().toISOString().split('T')[0]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

const distPath = join(__dirname, '..', 'dist', 'sitemap.xml')
writeFileSync(distPath, sitemap, 'utf-8')
console.log(`✅ Sitemap generated at ${distPath}`)
