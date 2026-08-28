# Repository Summary — Mikazuki002/Student_Aid

**Generated:** 2026-08-28 09:45 (UTC+08:00, Macau Standard Time)
**Repo:** https://github.com/Mikazuki002/Student_Aid
**Branch:** `main` · **Latest commit:** `4527b30` — "Fix logo paths so they resolve under /Student_Aid/ on GitHub Pages"

---

## Repository Status

| Field | Value |
|---|---|
| Visibility | Public |
| Default branch | `main` |
| Created | 2026-08-19 |
| Last push | 2026-08-19 07:48 UTC |
| Last update | 2026-08-19 07:49 UTC |
| Primary language | TypeScript |
| Repo size | 1,338 KB |
| Stars / Forks / Watchers | 0 / 0 / 0 |
| Open issues / PRs | 0 / 0 |
| Releases / Tags | None published |
| GitHub Pages | Enabled — https://mikazuki002.github.io/Student_Aid/ |

---

## Recent Commits (newest first)

| SHA | Date (UTC) | Message |
|---|---|---|
| `8f0ae2f` | 2026-08-19 07:45 | Add scroll-to-top behavior on route changes |
| `f6cfa5a` | 2026-08-19 07:41 | Fix BrowserRouter basename to properly handle GitHub Pages root route |
| `6018182` | 2026-08-19 07:36 | Fix GitHub Pages routing by adding basename to BrowserRouter |
| `4527b30` | 2026-08-19 07:29 | Fix logo paths so they resolve under /Student_Aid/ on GitHub Pages |
| `6210efe` | 2026-08-19 06:27 | Add GitHub Pages deploy workflow + SPA fallback |
| `89a7924` | 2026-08-19 06:20 | Phase 2 routing, Phase 3 form/SEO polish, trust icons, transparent-logo navbar |
| `04f3765` | 2026-08-19 05:35 | Phase 2: routing for all pages + wire official logo at /image_assets/Student_Aid_Logo.png |
| `275b1f6` | 2026-08-19 04:30 | Stop tracking .claude directory |
| `9b36d22` | 2026-08-19 04:26 | 0.1.0: Student Aid Support Group LLC frontend (Phase 1) |
| `b96fc99` | 2026-08-19 04:14 | first commit |

All commit activity happened on a single day — **2026-08-19** — between 04:14 and 07:49 UTC (about 3.5 hours of initial development). The repo has had no new activity since then (today is 2026-08-28, so 9 days of silence).

---

## Project Overview

**Student Aid Support Group LLC — Frontend.** A React 18 + TypeScript + Vite SPA built in four phases (0.0.1 → 0.3.0). Public-facing site deployed to GitHub Pages under `/Student_Aid/`. Currently a static prototype — no backend, attorney-vetted legal copy, or Open Graph meta tags yet. Marketing tagline around "Guidance Built Around Clarity" with two service tracks (Student Support Services, Groundwork Services).

### Tech stack
- React 18, TypeScript 5, Vite 5
- `react-router-dom@^6.28.0` (single `<BrowserRouter>` at `main.tsx`)
- No CSS framework — hand-written CSS in `src/index.css` with brand custom properties
- `useDocumentTitle` hook for per-route `<title>` + `<meta name="description">`
- Build sizes (latest): **210 kB JS / 25.96 kB CSS** (gzipped: ~64 / ~5 kB), 59 modules, build ~793 ms

### Routes
`/` HomePage · `/about` · `/student-support-services` · `/groundwork-services` · `/contact` · `/privacy-policy` · `/terms-of-service` · `*` NotFoundPage

### Brand system (current)
- Navy `#071226` + Gold `#C9A227` + Obsidian `#1A1F2B`
- Logo at `/image_assets/Student_Aid_Logo-removebg.png` (120 KB transparent PNG)
- Trust strip uses three carved-obsidian-on-gold inline SVG marks: **Steps** (path), **Hand** (personal support), **Globe** (nationwide service)

---

## Phase-by-Phase Changelog Summary

### [Unreleased] — Planned
- Backend contact intake (real POST endpoint + server validation + spam protection) — currently a 600 ms fake-send prototype
- Replace legal placeholders with attorney-drafted Privacy Policy & Terms of Service
- Logo optimization (120 KB PNG → ~10–30 KB via Squoosh/TinyPNG)
- Open Graph + Twitter meta tags per route (react-helmet-async or head manager)
- Build-time `sitemap.xml`
- Production deploy to a static host with SPA fallback (currently GitHub Pages only)
- CI: GitHub Actions running `npm.cmd run build` on every PR

### [0.3.0] — 2026-08-19 — Polish: navbar redesign + trust-icon redraw
- Replaced empty `<span className="trust__icon" />` in `TrustSection.tsx` with a `<TrustIcon>` inline-SVG component (Steps / Hand / Globe), all sharing viewBox 32×32, stroke 2.2, unified palette. `.trust__icon` is now a solid gold tile with subtle inset shadow; the SVG carving uses obsidian `#1A1F2B`.
- `Header.tsx`: logo now points at the RemoveBG transparent PNG (56×56, `decoding="async"`), no tile behind it. Header got `gap: 2rem`, `padding-block: 1.25rem`, `min-height: 88px`. Nav-list gap raised 1.75 → 2.25 rem. Active nav state: small gold square (::before) + thin gold underline (::after) + weight 700 — communicated by **position + shape + weight + color**, never color alone. Hover is just a subtle navy shift.
- Verified: build ✓ 793 ms · 0 errors / 0 warnings · new logo HTTP 200 (down from 1.16 MB → 120 KB).

### [0.2.0] — 2026-08-19 — Phase 3: form validation, SEO, polish
- **Contact form (`ContactForm.tsx` full rewrite):** centralized `RULES`, live re-validation after first submit, `role="alert"` errors wired via `aria-describedby`, `aria-invalid` on every invalid input, focus jumps to first invalid field (firstName → lastName → email → phone → message → consent), summary `role="alert"` above the form, `aria-live="polite"` character counter, `aria-busy="true"` + `Sending…` during 600 ms. Success notice is `role="status"` and **fields are not cleared**. **No `fetch` / `axios` / network call** — only `console.info`.
- **SEO:** `useDocumentTitle(title, description?)` hook with `<meta name="description">` and unmount restore. All 7 pages pass route-specific descriptions. `index.html` got exact-spec meta description, home title, and `<link rel="canonical" href="/" />`.
- **Responsive CSS:** removed `overflow-x: hidden` on `body`; added 540 px / 360 px breakpoints (top contact bar stacks; email `word-break: break-all` at 320 px); form fields 1-col <720 px, 2-col ≥720 px.
- **Performance:** `width`/`height` + `decoding="async"` on `<img>` tags; no `loading="lazy"` on above-the-fold images; renamed `.form-field__error` → `.form-field--invalid`.
- **Verified:** build ✓ 802 ms · all 7 routes + 404 + logo + robots HTTP 200 · 0 warnings · 0 console errors.
- **Caveats:** improvement pass, not a formal WCAG audit; Core Web Vitals not measured yet.

### [0.1.0] — 2026-08-19 — Phase 2: routing + all pages
- Installed `react-router-dom@^6.28.0` (bare `react-router` failed React 19 peer-dep conflict; project is on React 18). `<BrowserRouter>` wraps `<App />` in `main.tsx`. Route map above.
- **`SiteLayout.tsx`** composes Header + MobileMenu + `<main>` + Footer for every page (no duplicated chrome).
- **Reusable inner-page components:** `PageHero`, `SectionHeading`, `InfoCard`, `ProcessSteps`, `LegalNotice`.
- **Pages built:** HomePage, AboutPage ("Guidance Built Around Clarity", 4 value cards, 4 steps), StudentSupportServicesPage (4 cards, 4 steps, audience list, legal notice), GroundworkServicesPage (4 cards, 4 steps, dark-navy CTA), ContactPage (phone/email/address/hours `<dl>` + ContactForm), PrivacyPolicyPage + TermsOfServicePage (8 placeholder legal sections each + yellow "Draft placeholder" notice), NotFoundPage.
- **Header/Footer/MobileMenu:** internal nav converted to `<Link>`/`<NavLink>`; `tel:`/`mailto:` remain `<a>`; mobile menu has Escape-to-close, first-link auto-focus, `aria-expanded`/`aria-controls`. Initial active state = small gold dot prefix + bold + underline.
- **Verified:** build ✓ 1.04 s · 59 modules · all 7 routes + `/does-not-exist` HTTP 200.

### [0.0.1] — 2026-08-19 — Phase 1: homepage shell
*(Note: the changelog's "Versioning note" says the project started at `0.1.0`, but this section is labeled `[0.0.1]`. The Versioning summary lists only `0.1.0`, `0.2.0`, `0.3.0` — you may want to rename this section to `0.1.0` and shift the others, or add `0.0.1` to the summary.)*
- **Scaffold:** `package.json` (React 18, TS 5, Vite 5, `@vitejs/plugin-react`); `tsconfig.json` (strict, ES2020, `react-jsx`, bundler resolution); `vite.config.ts` (React plugin, port 5173); `index.html` (brand meta description, theme color `#071226`, viewport).
- **Homepage components built:** `Header.tsx` (top contact bar + sticky white header + gold CTA), `MobileMenu.tsx` (slide-in dark-navy drawer, aria-correct), `Hero.tsx` (navy gradient + subtle gold radial + primary gold CTA), `TrustSection.tsx` (3 plain items), `ServicesSection.tsx` (3 `ServiceCard`s with decorative inline SVG), `ProcessSection.tsx` (4 numbered steps), `CTASection.tsx` (dark navy + gold button), `Footer.tsx` (3-column + clickable phone/email + disclaimer + dev note).
- **Data + styling:** `src/data/content.ts` — every user-visible string lives here. `src/index.css` — single stylesheet, brand custom properties, max content 1200 px, responsive breakpoints, `prefers-reduced-motion`.
- **VS Code:** `.vscode/launch.json` — `node-terminal` launch running `npm.cmd run dev -- --host 127.0.0.1`, parses the `Local:` URL, opens externally. Wired to **F5**.
- **Repo hygiene:** `.gitignore` excludes `node_modules/`, `dist/`, build caches, editor files; preserves `.vscode/launch.json`. `README.md` covers project description, install/run, F5, logo swap, accessibility, Phase 2 roadmap, disclaimer.

### Versioning note
Project started at `0.1.0` for Phase 1. Each phase increments minor. **`1.0.0`** will land when Phase 4 brings a real backend contact intake and attorney-reviewed legal copy.

---

## Open Issues / PRs / Releases
- **Issues:** 0 open, 0 closed
- **Pull requests:** none
- **Releases / Tags:** none published

---

## Repo Layout (root)
```
.claude/                # editor/tooling state (not tracked as of 275b1f6)
.github/                # GitHub Pages deploy workflow
.vscode/                # launch.json (F5 dev launcher)
.gitignore
CHANGELOG.md            # canonical changelog
CHANGELOG_SUMMARY.md    # this file
README.md
index.html
package.json
package-lock.json
public/                 # static assets, robots.txt
src/                    # React app source
tsconfig.json
tsconfig.tsbuildinfo
vite.config.ts
```

---

## Headed-To-Production Checklist (from changelog "Unreleased")
1. Wire contact form to a real backend POST endpoint with server-side validation and spam protection
2. Replace Privacy Policy / Terms of Service placeholders with attorney-drafted copy
3. Optimize logo file size (120 KB → ~10–30 KB)
4. Add Open Graph + Twitter meta tags per route
5. Generate build-time `sitemap.xml`
6. Production deploy to a static host with SPA fallback (separate from GitHub Pages)
7. CI: GitHub Actions running `npm.cmd run build` on every PR
