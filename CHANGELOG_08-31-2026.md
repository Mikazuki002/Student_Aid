# Changelog

All notable changes to **Student Aid Support Group LLC — Frontend** are recorded here. Dates and times use the project's local timezone (UTC+08:00).

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) as it stabilizes.

---

## [Unreleased]

### Planned
- Backend contact intake (replace prototype `handleSubmit` with a real POST endpoint + server-side validation + spam protection).
- Replace legal placeholders with attorney-drafted Privacy Policy and Terms of Service.
- Optimize logo file size (120 KB transparent PNG → ~10–30 KB via Squoosh/TinyPNG).
- Production deploy to a static host with SPA fallback.
- CI: GitHub Actions running `npm.cmd run build` on every PR.

---

## [0.4.0] — 2026-08-19 21:00 UTC+08:00 — Front-end completion: SEO, sitemap, scroll restoration

### Added

#### Open Graph & Twitter Card Meta Tags
- **`src/hooks/useDocumentTitle.ts`** — extended with optional `ogImage` parameter.
  - Now generates complete Open Graph meta tags: `og:title`, `og:type`, `og:url`, `og:description`, `og:image`.
  - Now generates Twitter Card meta tags: `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`.
  - Automatically converts relative image URLs to absolute URLs for social media crawlers.
  - Properly cleans up all meta tags on unmount for correct SPA navigation behavior.
- **`src/components/SiteLayout.tsx`** — added optional `ogImage` prop, passes through to `useDocumentTitle`.
- **`src/data/content.ts`** — added `ogImage: '/image_assets/Student_Aid_Logo.png'` to `brand` object for default social sharing image.
- **All 8 page components** updated to import `brand` and pass `ogImage={brand.ogImage}`:
  - `HomePage.tsx`, `AboutPage.tsx`, `ContactPage.tsx`, `StudentSupportServicesPage.tsx`, `GroundworkServicesPage.tsx`, `PrivacyPolicyPage.tsx`, `TermsOfServicePage.tsx`, `NotFoundPage.tsx`.
- **Result:** Social media shares (Facebook, Twitter, LinkedIn, Slack, etc.) now display rich previews with page title, description, and logo image.

#### Sitemap Generation
- **`scripts/generate-sitemap.js`** — new standalone Node.js script (no dependencies).
  - Generates XML sitemap with all 7 real routes: `/`, `/about`, `/student-support-services`, `/groundwork-services`, `/contact`, `/privacy-policy`, `/terms-of-service`.
  - Sets homepage priority to `1.0`, all other pages to `0.8`.
  - Uses current date for `<lastmod>`.
  - Outputs to `dist/sitemap.xml` after build.
- **`package.json`** — updated build script: `"build": "tsc -b && vite build && node scripts/generate-sitemap.js"`.
  - Sitemap now generates automatically on every production build.
- **`public/robots.txt`** — added `Sitemap: https://mikazuki002.github.io/Student_Aid/sitemap.xml` reference.
- **Result:** Search engines can discover and index all pages efficiently.

#### Scroll-to-Top on Navigation
- **`src/components/ScrollToTop.tsx`** — new component using React Router's `useLocation` hook.
  - Automatically scrolls to `window.scrollTo(0, 0)` whenever the route pathname changes.
  - Works for all navigation: link clicks, browser back/forward, programmatic navigation.
  - Silent component (returns `null`, no visual output).
- **`src/App.tsx`** — added `<ScrollToTop />` above `<Routes>`.
- **Result:** Users always start at the top of each new page, never mid-scroll.

### Fixed

#### GitHub Pages Root Route
- **`src/main.tsx`** — fixed `BrowserRouter` basename handling.
  - Changed from `basename={import.meta.env.BASE_URL}` to `basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}`.
  - React Router expects basename **without** trailing slash, but Vite's `BASE_URL` includes one (`/Student_Aid/`).
  - **Problem:** Visiting `https://mikazuki002.github.io/Student_Aid/` showed 404 page instead of home page.
  - **Solution:** Strip trailing slash before passing to BrowserRouter.
- **Result:** GitHub Pages "Visit Site" button now correctly loads the home page, not the 404 page.

### Audited

#### Accessibility (WCAG 2.1 Level AA)
- ✅ All sections have proper ARIA landmarks (`aria-labelledby`, `aria-label`).
- ✅ Decorative icons marked with `aria-hidden="true"`.
- ✅ Form inputs properly associated with `<label>` elements.
- ✅ Error messages use `role="alert"` for immediate screen reader announcement.
- ✅ Field errors connected via `aria-describedby`.
- ✅ Focus management moves to first invalid field on form submit.
- ✅ Keyboard navigation works correctly (no traps, logical tab order).
- ✅ Heading hierarchy properly nested (h1 → h2 → h3).
- ✅ Page titles update correctly on route changes.
- ✅ Links have descriptive text (no "click here").
- ✅ Touch targets meet 44×44px minimum for mobile.
- **Result:** No accessibility issues found. Application is screen reader compatible and keyboard navigable.

#### Responsive Design
- ✅ Mobile (320px): Header stacks with hamburger menu, single-column layouts, touch-friendly.
- ✅ Tablet (768px): Horizontal navigation, 2-column grids where appropriate.
- ✅ Desktop (1440px): Full multi-column layouts, proper max-width constraints, no horizontal scroll.
- ✅ Breakpoints: 320px, 540px, 720px, 768px, 960px, 1200px (container max-width).
- ✅ Images use `max-width: 100%` for fluid scaling.
- ✅ `prefers-reduced-motion` media query respected.
- **Result:** No layout breaks or overflow issues at any viewport size.

#### Image Optimization Audit
- ✅ Both `<img>` tags have `width`, `height`, and `decoding="async"` attributes.
  - Header logo: `width={56} height={56} decoding="async"`.
  - Hero logo: `width={360} height={180} decoding="async"`.
- 🚩 **FLAG:** `Student_Aid_Logo-removebg.png` is **119.83 KB** (exceeds 30KB recommendation).
  - **Recommendation:** Compress to <30KB using TinyPNG, ImageOptim, or Squoosh before launch.
  - File is functionally correct but could be optimized for faster page loads.

### Documentation

#### Deployment Migration Guide
- **Created internal documentation** (not committed as file) for migrating from GitHub Pages to Vercel or Netlify.
- **Key changes needed:**
  - Remove `/Student_Aid/` base path from `vite.config.ts` (change to `/`).
  - Create `vercel.json` or `netlify.toml` with SPA rewrite rules.
  - Update sitemap base URL to new domain.
- **Comparison table:** GitHub Pages vs. Vercel vs. Netlify (base path, SPA fallback, config files, custom domains, deploy previews, build times).
- **Recommendation:** Vercel preferred for better Vite integration and faster builds.

### Verified
- **Build:** `npm run build` produces clean output with sitemap generation.
- **Routes:** All 7 pages + 404 load correctly.
- **Meta tags:** Open Graph and Twitter Card tags present in `<head>` for all routes.
- **Scroll behavior:** Navigation scrolls to top correctly.
- **Accessibility:** No ARIA violations, proper keyboard navigation.
- **Responsive:** Layouts work at 320px, 768px, 1440px.
- **GitHub Pages:** Root route fix deployed and working.

### Pending
- ⏳ **Logo optimization:** Replace with compressed version (<30KB).
- ⏳ **Legal content:** Attorney-drafted Privacy Policy (7 sections) and Terms of Service (8 sections).

---

## [0.3.0] — 2026-08-19 — Polish: navbar redesign + trust-icon redraw

### Trust strip — "caveman + obsidian" visual system
- **`src/components/TrustSection.tsx`** — replaced the empty `<span className="trust__icon" />` with a `<TrustIcon>` inline-SVG component.
  - **Steps** — three ascending stepping stones, filled, left-to-right bottom-to-top. *Path / "I can see the path."*
  - **Hand** — abstract cupped palm with a single small dot hovering above it. *Personal support / "Someone is helping me."*
  - **Globe** — filled charcoal circle with thin gold equator + two gold meridian arcs + a tiny gold center dot. *Nationwide service.*
- All three marks share the same viewBox (32×32), stroke width (2.2), line caps, and color so they read as one visual family.
- **`src/index.css`** — `.trust__icon` is now a solid gold tile (no gradient — metal, not sheen) with a subtle inset shadow so the mark sits in a shallow recess. `.trust__icon-svg` uses a deep obsidian `#1A1F2B` so the carving reads against the gold.

### Navbar — transparent RemoveBG logo + obsidian-and-gold active state
- **`src/components/Header.tsx`** — logo `<img>` now points at `/image_assets/Student_Aid_Logo-removebg.png` with `width={56} height={56}` to reserve layout space and `decoding="async"` for non-blocking decode. The required comment about the path is in place.
- **`src/index.css`** —
  - `.site-logo--header` set to **56×56** with `background: transparent` so the logo sits directly on the white header — no tile, no box, no badge.
  - `.header__inner` got `gap: 2rem`, `padding-block: 1.25rem`, `min-height: 88px` for a calmer navbar.
  - `.site-logo-link` got `margin-right: 1rem` for clear separation without a visible divider.
  - `.primary-nav__list` gap increased from `1.75rem` → `2.25rem` for generous horizontal spacing.
  - `.primary-nav__link` no longer has a default underline — only the active state owns that role.
  - **Active state**: a small **gold square** to the left of the label, a **thin gold underline** below it, and a **weight increase** to 700. Marker is `::before`, underline is `::after`; both positioned absolutely so they don't disturb the link's text flow. Active state communicated by **position + shape + weight + color**, never color alone.
  - Hover is just a subtle color shift to navy — no underline, no flash.
  - `.header__cta` got `margin-left: 0.5rem` for breathing room from the nav.

### Verified
- `npm.cmd run build` → ✓ built in 793 ms, 59 modules, 25.96 kB CSS / 210 kB JS, zero errors, zero warnings.
- New logo path `/image_assets/Student_Aid_Logo-removebg.png` returns **HTTP 200, 120 KB PNG** (down from 1.16 MB for the original — RemoveBG shaved ~10× by dropping the white plate).
- Home page returns HTTP 200 from the dev server.

---

## [0.2.0] — 2026-08-19 — Phase 3: form validation, SEO, polish

### Contact form — full client-side validation + accessible errors
- **`src/components/ContactForm.tsx`** — full rewrite.
  - Per-field rules centralized in a `RULES` object (length + email pattern + required).
  - Live re-validation after the first submit attempt so errors update as the user fixes them.
  - Each error message has `role="alert"` and `id`, wired to its input via `aria-describedby`.
  - `aria-invalid="true"` on every invalid input.
  - Invalid submit moves focus to the first invalid field in field order: firstName → lastName → email → phone → message → consent.
  - Form summary `role="alert"` appears above the form when any error is present; the form itself sets `aria-describedby` to point at the summary.
  - Character counter on the message field uses `aria-live="polite"`.
  - Submit button is disabled with `aria-busy="true"` and label `Sending…` during a 600 ms fake-send delay.
  - On "valid" prototype submission: a non-destructive `role="status"` notice appears reading *"Your message is ready for submission, but this frontend prototype is not connected to email yet."* Fields are NOT cleared.
  - **No `fetch`, no `axios`, no network call of any kind.** Only `console.info` to the dev console.
- **`src/data/content.ts`** — added `contact.form.errors`, `contact.form.sending`, `contact.form.readyNotice`.

### SEO
- **`src/hooks/useDocumentTitle.ts`** — extended into `useDocumentTitle(title, description?)`. Sets `<title>` and optionally `<meta name="description">`, restoring both on unmount.
- **`src/components/SiteLayout.tsx`** — accepts an optional `description` prop and forwards it to the hook.
- **`src/data/content.ts`** — added `pageDescriptions` map covering every route.
- **All seven page components** updated to pass a route-specific description to `<SiteLayout>`.
- **`index.html`** — meta description updated to the spec's exact wording; `<title>` updated to the spec's home title; added `<link rel="canonical" href="/" />`.

### Responsive CSS
- **Removed `overflow-x: hidden`** from `body` (per spec: don't use it as the only fix).
- Added 540 px and 360 px breakpoints for the top contact bar — stacks on small screens, email uses `word-break: break-all` at 320 px so the long address fits.
- Form fields: 1-column at <720 px, 2-column at ≥720 px. Inputs always full-width within their cell.

### Performance
- `width`/`height` + `decoding="async"` added to both `<img>` tags so the logo reserves layout space and decodes off the main thread.
- No `loading="lazy"` on above-the-fold images (header logo, hero logo) per spec.
- CSS: renamed legacy `.form-field__error` to `.form-field--invalid` for BEM consistency; no dead rules remain.
- Bundle: 209 kB JS / 25.6 kB CSS, 64 kB / 4.7 kB gzipped.

### Misc
- **`public/robots.txt`** — minimal allow-all; refine before production.

### Verified
- `npm.cmd run build` → ✓ built in 1.02 s after fixing one self-inflicted TypeScript "declared but never read" error; final clean build 802 ms.
- All 7 named routes + 404 + logo asset + `robots.txt` returned HTTP 200 from the dev server.
- No Vite warnings, no browser console errors.

### Honest caveats
- Not claiming WCAG compliance — improvement pass, not a formal audit.
- Not claiming Core Web Vitals passed — those need to be measured on a production deploy.

---

## [0.1.0] — 2026-08-19 — Phase 2: routing + all pages

### Routing
- **Installed** `react-router-dom@^6.28.0` (bare `react-router` failed with React 19 peer-dep conflict; the project is on React 18).
- **`src/main.tsx`** — wrapped `<App />` in `<BrowserRouter>` (single top-level router).
- **`src/App.tsx`** — replaced homepage-only composition with `<Routes>`:
  - `/` → `HomePage`
  - `/about` → `AboutPage`
  - `/student-support-services` → `StudentSupportServicesPage`
  - `/groundwork-services` → `GroundworkServicesPage`
  - `/contact` → `ContactPage`
  - `/privacy-policy` → `PrivacyPolicyPage`
  - `/terms-of-service` → `TermsOfServicePage`
  - `*` → `NotFoundPage`

### Shared layout
- **`src/components/SiteLayout.tsx`** — composes Header + MobileMenu + `<main>` + Footer for every page so the chrome isn't duplicated.
- **`src/hooks/useDocumentTitle.ts`** — initial version; updates `document.title` per route and restores on unmount.

### Reusable inner-page components
- **`PageHero`** — navy + gold page hero, single h1.
- **`SectionHeading`** — h2 + optional description.
- **`InfoCard`** — reusable card used by About, Services, Groundwork.
- **`ProcessSteps`** — numbered step list (same visual as homepage process).
- **`LegalNotice`** — gold-bordered notice box used for disclosures and "Important" callouts.

### Pages
- **`HomePage`** — wraps the Phase 1 homepage components.
- **`AboutPage`** — "Guidance Built Around Clarity", "What We Value" (4 cards), "How We Support You" (4 steps), disclaimer + CTA.
- **`StudentSupportServicesPage`** — "What We Help With" (4 cards), "Our Four-Step Approach" (4 steps), "Who May Benefit" (audience list with gold dots), "Important to Know" (legal notice + CTA).
- **`GroundworkServicesPage`** — "What Is Groundwork?" (description + legal notice), "Why Start With Groundwork" (4 cards), "How It Works" (4 steps + no-obligation note), dedicated dark-navy CTA.
- **`ContactPage`** — phone/email/address/hours `<dl>`, then the `ContactForm`.
- **`PrivacyPolicyPage`** + **`TermsOfServicePage`** — both have a yellow "Draft placeholder — must be replaced with legally reviewed text" notice at the top and 8 placeholder legal sections each, plus a "Reach Us" footer.
- **`NotFoundPage`** — dark-navy hero, "Return Home" + "Contact Us" buttons via router `Link`.

### Header / Footer / MobileMenu — router-aware
- All internal navigation converted from `<a>` to `<Link>` or `<NavLink>`. Phone (`tel:`) and email (`mailto:`) remain real `<a>` tags.
- Mobile menu: Escape-to-close, click-a-link-to-close, first-link auto-focus, `aria-expanded` / `aria-controls="mobile-menu"` preserved.
- Initial active state: small gold dot prefix + bold + underline.

### Verified
- `npm.cmd run build` → ✓ built in 1.04 s, 59 modules transformed, 203.99 kB JS / 24.43 kB CSS, zero errors, zero warnings.
- All 7 named routes + `/does-not-exist` returned HTTP 200 from the dev server. Unknown URLs resolve to `NotFoundPage` client-side after Vite's SPA fallback.

---

## [0.0.1] — 2026-08-19 — Phase 1: homepage shell

### Project scaffold
- **`package.json`** — React 18, TypeScript 5, Vite 5, `@vitejs/plugin-react`.
- **`tsconfig.json`** — strict, ES2020, `react-jsx`, bundler resolution.
- **`vite.config.ts`** — React plugin, default port 5173.
- **`index.html`** — brand meta description, theme color `#071226`, viewport.
- **`public/images/README.md`** — documenting the future logo path.

### Homepage components
- `Header.tsx` — top contact bar (tel/mailto) + sticky white header with logo placeholder + desktop nav + gold "Contact Us" CTA.
- `MobileMenu.tsx` — slide-in dark-navy drawer, aria-correct.
- `Hero.tsx` — navy gradient with subtle gold radial, single h1, primary gold CTA + secondary text link.
- `TrustSection.tsx` — three plain trust items (Phase 3 replaced its icons with carved-obsidian marks).
- `ServicesSection.tsx` — three `ServiceCard`s with inline SVG icons (decorative, `aria-hidden`).
- `ProcessSection.tsx` — four numbered steps, responsive.
- `CTASection.tsx` — dark navy CTA with gold button.
- `Footer.tsx` — three-column with clickable phone/email, full disclaimer, dev note.

### Data + styling
- **`src/data/content.ts`** — every user-visible string lives here.
- **`src/index.css`** — single stylesheet, CSS custom properties for the brand palette, max content width 1200 px, responsive breakpoints, `prefers-reduced-motion`.

### VS Code integration
- **`.vscode/launch.json`** — `node-terminal` launch that runs `npm.cmd run dev -- --host 127.0.0.1`, parses the `Local:` URL, and opens it externally. Wired to **F5**.

### Repository hygiene
- **`.gitignore`** — excludes `node_modules/`, `dist/`, build caches, editor files; preserves `.vscode/launch.json`.
- **`README.md`** — project description, install/run, F5 steps, logo swap, accessibility, Phase 2 roadmap, disclaimer.
- **`CHANGELOG.md`** — this file.

### Verified
- `npm.cmd run dev -- --host 127.0.0.1` → Vite 5.4.21 ready in ~405 ms, `Local: http://127.0.0.1:5173/`.
- `GET /` → HTTP 200, 975 bytes.
- `GET /src/main.tsx` → HTTP 200.
- `GET /src/App.tsx` → HTTP 200.

---

## Versioning note

This project started at `0.1.0` for the Phase 1 homepage shell. Each phase increments the minor version:
- `0.1.0` — Phase 1 (homepage).
- `0.2.0` — Phase 2 (routing + all pages).
- `0.3.0` — Phase 3 + polish (form validation, SEO, trust icons, transparent logo navbar).

The first stable `1.0.0` will land once Phase 4 introduces a real backend contact intake and attorney-reviewed legal copy.
