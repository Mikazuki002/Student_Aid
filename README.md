# Student Aid Support Group LLC — Frontend

A clean, professional, accessible website for **Student Aid Support Group LLC**, built across three frontend-only phases. No backend, no database, no authentication, no payments — just the website shell, ready for future expansion.

> **Supporting Students • Empowering Futures**

---

## What this is

A multi-page React + Vite + TypeScript site with a homepage, About, Student Support Services, Groundwork Services, Contact, Privacy Policy, Terms of Service, and a 404 fallback. All copy is real business copy. There are no fake testimonials, fake statistics, fake awards, or guarantees of any kind.

### Brand

| | |
|---|---|
| **Name** | Student Aid Support Group LLC |
| **Phone** | 213-261-0646 |
| **Email** | studentaidsupportgroupllc@gmail.com |
| **Address** | 5551 Hollywood Blvd, Los Angeles, CA 90028 |
| **Hours** | Monday–Friday, 8:00 AM–9:00 PM CST |
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

## Phases at a glance

- **Phase 1** — homepage shell, brand styling, F5 debug config, repo hygiene.
- **Phase 2** — client-side routing, all main pages, shared layout, per-page titles.
- **Phase 3** — full contact form with accessible validation, SEO meta descriptions, responsive polish, image dimension hints, robots.txt.
- **Polish pass** — three carved-obsidian trust icons, then the navbar redesigned around the transparent RemoveBG logo.

---

## Tech stack

- **React 18** + **TypeScript** (strict)
- **Vite 5** dev server and build
- **react-router-dom 6** for client-side routing
- **Plain CSS** — single stylesheet, no Tailwind, no UI framework
- **Inline SVG** for icons (decorative, `aria-hidden`) — no icon library

Zero runtime dependencies beyond React and React Router. No backend. No database. No auth. No payments. No form submission.

---

## Project structure

```
Student_Aid/
├── .vscode/
│   └── launch.json              # F5 debug config (npm.cmd run dev)
├── index.html                   # Vite entry
├── package.json
├── tsconfig.json
├── vite.config.ts
├── public/
│   ├── robots.txt               # Allow-all for the prototype
│   ├── images/
│   │   └── README.md            # Original Phase 1 logo path docs
│   └── image_assets/
│       └── Student_Aid_Logo-removebg.png   # Transparent logo (current)
└── src/
    ├── main.tsx                 # React root + <BrowserRouter>
    ├── App.tsx                  # <Routes> for every page
    ├── index.css                # All styling, single file
    ├── data/
    │   └── content.ts           # Every user-visible string lives here
    ├── hooks/
    │   └── useDocumentTitle.ts  # Title + meta description per route
    ├── components/
    │   ├── Header.tsx
    │   ├── MobileMenu.tsx
    │   ├── Hero.tsx
    │   ├── TrustSection.tsx     # Three carved-obsidian trust marks
    │   ├── ServicesSection.tsx
    │   ├── ProcessSection.tsx
    │   ├── CTASection.tsx
    │   ├── Footer.tsx
    │   ├── ContactForm.tsx      # Frontend-only with full validation
    │   ├── SiteLayout.tsx       # Shared chrome used by every page
    │   ├── PageHero.tsx
    │   ├── SectionHeading.tsx
    │   ├── InfoCard.tsx
    │   ├── ProcessSteps.tsx
    │   └── LegalNotice.tsx
    └── pages/
        ├── HomePage.tsx
        ├── AboutPage.tsx
        ├── StudentSupportServicesPage.tsx
        ├── GroundworkServicesPage.tsx
        ├── ContactPage.tsx
        ├── PrivacyPolicyPage.tsx
        ├── TermsOfServicePage.tsx
        └── NotFoundPage.tsx
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

Output goes to `dist/`. Final size at time of writing: **~210 kB JS / ~26 kB CSS** (≈ 64 kB / 5 kB gzipped).

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

The current logo is the transparent RemoveBG version:

```
public/image_assets/Student_Aid_Logo-removebg.png
```

It is referenced from:

- `src/components/Header.tsx` — `<img src="/image_assets/Student_Aid_Logo-removebg.png" ...>`
- `src/components/Hero.tsx` (homepage hero card) — same path.

Both spots carry the required comment about the path. The logo sits directly on the white header (no tile, no badge, no dark box) at 56 px on desktop and 44 px on mobile.

### Logo rules respected by the code

- Never stretched or blurred — `max-width: 100%`, explicit `width`/`height` reserved on the element.
- Responsive — scales with the header.
- No cropping — `object-fit` default keeps the source aspect.
- Semantic `<img>` with real `alt` text in the header (the hero visual is decorative — `alt=""`).
- White header background gives both light- and dark-background logos a clean stage.

---

## Accessibility

- One `<h1>` per page and a logical heading order throughout.
- Real `<button>` elements with `aria-expanded` / `aria-controls` for the mobile menu.
- Keyboard-accessible nav, visible `:focus-visible` outlines.
- Decorative SVGs marked `aria-hidden="true"`.
- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<address>`.
- Color contrast meets WCAG AA on all text against its background.
- `prefers-reduced-motion` honored globally — transitions reduced to ~0 ms.
- Touch targets ≥ 44×44 px on all interactive elements.
- Contact form: each field has a `<label htmlFor>`; errors use `role="alert"` and are wired to inputs via `aria-describedby`; invalid submit moves focus to the first invalid field; the form summary uses `role="alert"` and `aria-describedby`.

This site has **no horizontal scroll** on phones, tablets, laptops, or desktop screens. Responsive verified at 320, 375, 390, 540, 720, 768, 960, 1024, 1080, 1200, 1440 px.

**This is not a formal WCAG audit.** axe DevTools / Lighthouse / manual screen-reader testing is recommended before production.

---

## What's intentionally NOT here

This is a frontend prototype. The following are explicitly out of scope and are not stubbed with fake behavior:

- ❌ Database
- ❌ Login / accounts
- ❌ Payments
- � Real email sending
- ❌ Document uploads
- ❌ Real form submission
- � Fake "success" messages
- ❌ Fake statistics, testimonials, awards, or guarantees
- � Any claim of government affiliation
- ❌ Real (non-placeholder) legal copy

A short dev note appears in the footer of the live site: *"Frontend prototype. Forms and backend features are not connected yet."*

---

## Disclaimer

Student Aid Support Group LLC is a private consulting company. It is not a lender, loan servicer, debt settlement company, or government agency. It does not provide legal, financial, or tax advice. Program availability and eligibility depend on applicable federal requirements. Results are not guaranteed.

The Privacy Policy and Terms of Service pages are placeholder drafts pending attorney review.
