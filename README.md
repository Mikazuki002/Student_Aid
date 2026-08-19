# Student Aid Support Group LLC — Frontend

A clean, professional, accessible homepage for **Student Aid Support Group LLC**, built as a Phase 1 frontend-only prototype. No backend, no database, no authentication, no payments — just the website shell, ready for future expansion.

> **Supporting Students • Empowering Futures**

---

## What this is

A single-page React + Vite + TypeScript site that introduces the company, lists services, walks through a four-step process, and routes visitors to a contact page. All copy is real business copy. There are no fake testimonials, fake statistics, fake awards, or guarantees of any kind.

### Brand

| | |
|---|---|
| **Name** | Student Aid Support Group LLC |
| **Phone** | 213-261-0646 |
| **Email** | studentaidsupportgroupllc@gmail.com |
| **Address** | 5551 Hollywood Blvd, Los Angeles, CA 90028 |
| **Style** | Professional, trustworthy, premium, academic, calm, clear, helpful, student-focused |

### Brand colors

| Token | Hex |
|---|---|
| Dark navy | `#071226` |
| Navy | `#0B1830` |
| Gold | `#C9A24A` |
| Light gold | `#E0BD68` |
| White | `#FFFFFF` |
| Light marble | `#F5F3EE` |
| Dark text | `#172033` |
| Gray text | `#667085` |
| Border gray | `#E5E7EB` |

---

## Tech stack

- **React 18** + **TypeScript** (strict)
- **Vite 5** dev server and build
- **Plain CSS** — no Tailwind, no UI framework, no runtime CSS-in-JS
- **Zero runtime dependencies beyond React** — keeps the bundle small and the project easy to maintain
- Inline SVG icons (decorative, `aria-hidden`) — no icon library

No backend. No database. No auth. No payments. No form submission. No email sending. No document uploads.

---

## Project structure

```
Student_Aid/
├── .vscode/
│   └── launch.json          # F5 debug config
├── index.html               # Vite entry
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   └── images/
│       ├── README.md        # Where to drop the official logo
│       └── (logo goes here) # student-aid-support-group-logo.png
└── src/
    ├── App.tsx              # Composes the page
    ├── main.tsx             # React root
    ├── index.css            # All styling (single file)
    ├── data/
    │   └── content.ts       # All copy lives here
    └── components/
        ├── Header.tsx
        ├── MobileMenu.tsx
        ├── Hero.tsx
        ├── TrustSection.tsx
        ├── ServicesSection.tsx
        ├── ProcessSection.tsx
        ├── CTASection.tsx
        └── Footer.tsx
```

---

## Install and run

> PowerShell on this machine blocks `npm.ps1`. Use `npm.cmd` instead. No system-wide execution policy change required.

```powershell
npm.cmd install
npm.cmd run dev
```

Vite prints its local URL (default `http://127.0.0.1:5173/`) and opens it in your default browser.

### Production build

```powershell
npm.cmd run build
npm.cmd run preview
```

Output goes to `dist/`.

---

## Run with F5 in VS Code

A debug configuration is included at `.vscode/launch.json`.

1. Open `C:\Users\Alord\Student_Aid` in VS Code.
2. Open the **Run and Debug** panel (`Ctrl+Shift+D`).
3. Select **"Start Student Aid Frontend"**.
4. Press **F5**.

VS Code opens an integrated terminal running `npm.cmd run dev -- --host 127.0.0.1`. When Vite prints `Local: http://127.0.0.1:5173/`, the launch config auto-opens that URL in your default browser.

---

## The official logo

The header and hero currently show a clean text placeholder reading **Student Aid Support Group LLC**.

To replace it with the official logo:

1. Drop the official PNG at `public/images/student-aid-support-group-logo.png`.
2. In `src/components/Header.tsx`, replace the `<div className="logo-placeholder ...">` block with:

   ```tsx
   <img
     src="/images/student-aid-support-group-logo.png"
     alt="Student Aid Support Group LLC logo"
     className="site-logo"
   />
   ```

3. Do the same swap in `src/components/Hero.tsx`.

The exact comments `{/* Official Student Aid Support Group LLC logo will be added here. */}` and `{/* Replace /images/student-aid-support-group-logo.png with the official logo file I provide. */}` are already in place at both locations.

### Logo rules respected by the current code

- Never stretched or blurred — the `<img>` is constrained by `max-width: 100%`.
- Responsive — it scales with the header.
- No cropping — the container reserves space before the image loads.
- Not used as a background — semantic `<img>` with real `alt` text.
- The header uses a light marble background, so a logo with either a light or a dark background will read correctly. If the supplied logo has a dark background, a thin border or subtle background can be added to the `.site-logo` rule in `index.css` to maintain contrast.

---

## Accessibility

- One `<h1>` (in the hero) and a logical heading order throughout.
- Real `<button>` elements with `aria-expanded` / `aria-controls` for the mobile menu.
- Keyboard-accessible nav, visible `:focus-visible` outlines.
- Decorative SVGs marked `aria-hidden="true"`.
- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<address>`.
- Color contrast meets WCAG AA on all text against its background.
- `prefers-reduced-motion` honored globally — transitions and animations are reduced to ~0ms.
- Touch targets ≥ 44×44 px on all interactive elements.

The site has **no horizontal scroll** on phones, tablets, laptops, or desktop screens. Layout is verified at 320 px and up.

---

## What's intentionally NOT here

This is a frontend prototype. The following are explicitly out of scope for Phase 1 and are not stubbed with fake behavior:

- ❌ Database
- ❌ Login / accounts
- ❌ Payments
- ❌ Real email sending
- ❌ Document uploads
- ❌ Real form submission
- ❌ Fake "success" messages
- ❌ Fake statistics, testimonials, awards, or guarantees
- ❌ Any claim of government affiliation

A short dev note appears in the footer of the live site: *"Frontend prototype. Forms and backend features are not connected yet."*

---

## Roadmap (Phase 2 and beyond)

1. Add `react-router-dom` and wire the placeholder paths (`/about`, `/student-support-services`, `/groundwork-services`, `/contact`) to real page components.
2. Build out the About, Services, Groundwork, and Contact pages using the same component patterns.
3. Wire the Contact form to a real backend (Node/Express, serverless, or a hosted form service) — no fake success states.
4. Add Privacy Policy and Terms of Service pages (the footer already links to placeholders).
5. Replace the logo placeholders with the official artwork.
6. Optional: add SEO meta per route, Open Graph image, sitemap, robots.txt.

---

## Disclaimer

Student Aid Support Group LLC is a private consulting company. It is not a lender, loan servicer, debt settlement company, or government agency. It does not provide legal, financial, or tax advice. Program availability and eligibility depend on applicable federal requirements. Results are not guaranteed.

This repository is a frontend prototype for development purposes.
