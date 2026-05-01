# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Static export → out/ directory
npm run lint     # ESLint via Next.js
```

No test suite is configured. After UI changes, start the dev server and verify visually.

## Architecture

**Next.js 14 App Router, TypeScript, Tailwind CSS 3, static export.**

The site builds to a fully static `out/` directory (no Node.js runtime). `next.config.js` sets `output: 'export'` and `images: { unoptimized: true }` — the Next.js `<Image>` optimiser is not available.

Path alias `@/*` maps to `./src/*`.

### Routing

App Router pages live in `src/app/`. Current routes: `/` (landing). Planned: `/about`, `/privacy`, `/terms`. Navigation anchors (`/#features`, `/#privacy`, `/#waitlist`) use native smooth scroll.

### Theme system

Dark/light mode uses **two layers**:
1. `next-themes` manages the `dark` class on `<html>` via `ThemeProvider` in the root layout.
2. `globals.css` defines all colours as CSS custom properties on `:root` and `.dark` — components consume `var(--token-name)` tokens, never raw hex values.
3. Tailwind `darkMode: 'class'` strategy — utility classes like `dark:bg-...` work, but the project primarily uses CSS variables for theming.

### Component organisation

```
src/components/
  Navbar.tsx          # "use client" — sticky, mobile hamburger, theme toggle
  Footer.tsx
  ThemeToggle.tsx     # "use client" — SSR-safe (uses useEffect before rendering icon)
  WaitlistForm.tsx    # "use client" — Formspree POST, idle/loading/success/error states
  PhoneMockup.tsx     # Pure render — 3 variants: dashboard | chart | transactions (wireframe placeholders)
  sections/
    Hero.tsx
    Features.tsx
    TrustBar.tsx
    HowItWorks.tsx    # planned
    PrivacySection.tsx # planned
    RegionMap.tsx     # planned
    Testimonials.tsx  # planned
    WaitlistCTA.tsx   # planned
```

All interactive components carry `"use client"`. Server components have no directive.

### Design tokens

`tailwind.config.ts` extends Tailwind with the full token set: brand colours, accent colours, dark/light surfaces, gradients, and custom animations (`fade-in`, `fade-in-up`, `slide-up`, `float`, `glow`). Animation stagger utilities (`.animate-delay-100` through `500`) are defined in `globals.css` `@layer utilities`.

Reusable component classes in `globals.css` `@layer components`:
- `.text-gradient` — blue→purple gradient text
- `.glass` — backdrop-blur glassmorphism card
- `.surface-card` / `.surface-card-elevated`
- `.section-container` — `max-w-6xl mx-auto px-6 md:px-8`
- `.btn-primary` / `.btn-secondary`
- `.feature-icon` — 44 × 44px icon container

### External integrations

- **Formspree** — waitlist form POSTs to `https://formspree.io/f/YOUR_FORM_ID`. Replace the placeholder in `WaitlistForm.tsx` with the real form ID before launch.
- **Vercel** — `vercel.json` configures security headers (X-Frame-Options, X-XSS-Protection, etc.).
- **Google Fonts (Inter)** — imported in `globals.css` via CSS `@import`.

## Pending work

Tracked in `WEBSITE_PLAN.md` (592 lines). Key gaps before launch:
1. `src/app/layout.tsx` and `src/app/page.tsx` — root layout (ThemeProvider, metadata) and landing page assembly
2. Five unbuilt sections: `HowItWorks`, `PrivacySection`, `RegionMap`, `Testimonials`, `WaitlistCTA`
3. `src/hooks/useScrollReveal.ts` (Intersection Observer) and `useReducedMotion.ts`
4. `src/lib/constants.ts` — site-wide strings and metadata
5. Legal pages: `/about`, `/privacy`, `/terms`
6. Replace Formspree placeholder with real form ID
