# Vercel Deployment Guide

## Quick Deploy

1. **Import to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import from GitHub: `Mikazuki002/Student_Aid`

2. **Configure (auto-detected):**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables (optional):**
   - Set `VITE_SITE_URL` to your production domain (e.g., `https://studentaidsupport.com`)
   - This will be used in sitemap.xml generation
   - If not set, defaults to `https://student-aid-support-group.vercel.app`

4. **Deploy:**
   - Click "Deploy"
   - Wait ~60 seconds for first deploy

## Custom Domain Setup

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **Update Sitemap:**
   - Set `VITE_SITE_URL` environment variable to your custom domain
   - Redeploy to regenerate sitemap with new domain

## Verification Checklist

After deployment, verify:

- [ ] Homepage loads at root URL
- [ ] All 7 routes work: `/`, `/about`, `/student-support-services`, `/groundwork-services`, `/contact`, `/privacy-policy`, `/terms-of-service`
- [ ] 404 page shows for invalid routes (e.g., `/does-not-exist`)
- [ ] Sitemap loads at `/sitemap.xml`
- [ ] Robots.txt loads at `/robots.txt`
- [ ] Navigation scrolls to top on page change
- [ ] Contact form validation works
- [ ] Logo displays correctly
- [ ] Mobile menu functions properly
- [ ] All links work (internal and external)
- [ ] Social media previews work (test with Facebook Sharing Debugger or Twitter Card Validator)

## Differences from GitHub Pages

| Aspect | GitHub Pages | Vercel |
|--------|--------------|--------|
| Base path | `/Student_Aid/` | `/` (root) |
| SPA routing | Custom 404.html script | Native rewrites (vercel.json) |
| Build time | ~2 min | ~60 sec |
| Deploy previews | No | Yes (automatic for PRs) |
| Custom domain | Manual DNS | Automatic SSL + DNS |
| Environment variables | No | Yes |

## Rollback

If needed, GitHub Pages deployment is still configured via `.github/workflows/deploy.yml`. To revert:

1. Restore GitHub Pages base path in `vite.config.ts`
2. Add back `public/404.html` SPA fallback
3. Restore SPA restoration script in `index.html`
4. Update sitemap base URL
5. Redeploy via GitHub Actions

## Support

- Vercel Documentation: https://vercel.com/docs
- Vite Documentation: https://vitejs.dev/guide/
- React Router Documentation: https://reactrouter.com/
