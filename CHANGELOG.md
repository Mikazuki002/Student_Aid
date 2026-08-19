# Changelog

All notable changes to **Student Aid Support Group LLC — Frontend** are recorded here. Dates use the project's local timezone (UTC+08:00) and were captured at the time of authoring.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html) as it stabilizes.

---

## [Unreleased]

### Planned
- Routing (`react-router-dom`) for `/about`, `/student-support-services`, `/groundwork-services`, `/contact`.
- Real Contact form wired to a backend endpoint.
- Privacy Policy and Terms of Service pages.
- Swap logo placeholders for the official PNG.

---

## [0.1.0] — 2026-08-19

**Phase 1 — Frontend prototype, homepage only.** No backend, no database, no auth, no payments, no real form submission.

### 11:49 +08:00 — Project scaffolding
- **Added** `package.json` with React 18, TypeScript 5, Vite 5, `@vitejs/plugin-react`.
- **Added** `tsconfig.json` (strict, ES2020, `react-jsx`, bundler resolution).
- **Added** `vite.config.ts` (React plugin, default port 5173).
- **Added** `index.html` with brand meta description and theme color `#071226`.
- **Added** `public/images/README.md` documenting the future logo path.

### Components — homepage
- **Added** `src/main.tsx` — React 18 root with `<StrictMode>`.
- **Added** `src/App.tsx` — composes Header, MobileMenu, Hero, TrustSection, ServicesSection, ProcessSection, CTASection, Footer.
- **Added** `src/components/Header.tsx`
  - Top contact bar (dark navy) with `tel:` and `mailto:` links.
  - Sticky white header with logo placeholder + desktop nav + gold "Contact Us" CTA.
  - Real `<button>` for the mobile menu with `aria-expanded` / `aria-controls="mobile-menu"`.
- **Added** `src/components/MobileMenu.tsx`
  - Slide-in dark-navy drawer.
  - Closes on link click, close button, or `Escape`.
  - Auto-focuses the first link on open; `tabIndex` toggles with `isOpen`.
- **Added** `src/components/Hero.tsx`
  - Dark navy gradient with subtle gold radial accent.
  - One `<h1>`: *"Student Loan Guidance & Document Support"*.
  - Primary gold CTA + secondary text link, no forbidden claims.
  - Visual area uses a styled brand card with the logo placeholder.
- **Added** `src/components/TrustSection.tsx` — three plain trust items, no fake stats.
- **Added** `src/components/ServicesSection.tsx`
  - Reusable `ServiceCard` with inline SVG icons (decorative, `aria-hidden`).
  - Hover lift, visible focus, rounded corners, subtle shadow.
- **Added** `src/components/ProcessSection.tsx` — four numbered steps, responsive 1 → 2 → 4 columns.
- **Added** `src/components/CTASection.tsx` — dark navy CTA with gold button to `/contact`.
- **Added** `src/components/Footer.tsx`
  - Three-column footer with clickable phone/email, full disclaimer, dev note.
  - Links to placeholder routes including Privacy Policy and Terms of Service.

### Data and styling
- **Added** `src/data/content.ts` — every user-visible string lives here.
- **Added** `src/index.css` — single stylesheet with CSS custom properties for the brand palette, max content width 1200px, responsive breakpoints, `prefers-reduced-motion` support, no horizontal scroll.

### VS Code integration
- **Added** `.vscode/launch.json` — `node-terminal` launch that runs `npm.cmd run dev -- --host 127.0.0.1`, parses the `Local:` URL, and opens it externally. Wired to **F5**.

### Repository hygiene
- **Added** `.gitignore` — excludes `node_modules/`, `dist/`, build caches, editor files; preserves `.vscode/launch.json`.
- **Added** `README.md` — project description, install/run, F5 steps, logo swap instructions, accessibility notes, Phase 2 roadmap, disclaimer.
- **Added** `CHANGELOG.md` — this file.

### Verified
- `npm.cmd run dev -- --host 127.0.0.1` → Vite 5.4.21 ready in ~405 ms, `Local: http://127.0.0.1:5173/`.
- `GET /` → HTTP 200, 975 bytes.
- `GET /src/main.tsx` → HTTP 200.
- `GET /src/App.tsx` → HTTP 200.

### Known caveats (honest)
- Page was not visually inspected in a browser during authoring; user reported a non-working link and asked for diagnosis. Server-side checks confirmed the dev server is reachable and serving the bundle.
- Logo remains a placeholder until the official PNG is provided.
- Routes other than `/` point to paths that have no router yet (Phase 2).

---

## Versioning note

This project starts at `0.1.0` because the homepage shell is a frontend-only prototype. The first stable `1.0.0` will land once Phase 2 introduces routing and a real backend contact flow.
