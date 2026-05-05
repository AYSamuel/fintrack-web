# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build (serverless, not static export)
npm run start    # Start production server locally
npm run lint     # ESLint via Next.js
```

No test suite is configured. After UI changes, start the dev server and verify visually.

## Architecture

**Next.js 14 App Router, TypeScript, Tailwind CSS 3, deployed serverless on Vercel.**

The site builds to a fully static `out/` directory (no Node.js runtime). `next.config.js` sets `output: 'export'` and `images: { unoptimized: true }`, the Next.js `<Image>` optimiser is not available.

Path alias `@/*` maps to `./src/*`.

### Routing

App Router pages live in `src/app/`. Routes: `/` (landing), `/about`, `/privacy`, `/terms`. Navigation anchors (`/#features`, `/#privacy`, `/#waitlist`) use native smooth scroll (`scroll-behavior: smooth` in globals.css).

### Theme system

Dark/light mode uses **two layers**:
1. `next-themes` manages the `dark` class on `<html>` via `ThemeProvider` in the root layout.
2. `globals.css` defines all colours as CSS custom properties on `:root` and `.dark`, components consume `var(--token-name)` tokens, never raw hex values.
3. Tailwind `darkMode: 'class'` strategy, utility classes like `dark:bg-...` work, but the project primarily uses CSS variables for theming.

### Component organisation

```
src/components/
  Navbar.tsx          # "use client", sticky, mobile hamburger, theme toggle
  Footer.tsx
  ThemeToggle.tsx     # "use client", SSR-safe (uses useEffect before rendering icon)
  WaitlistForm.tsx    # "use client", Formspree POST, idle/loading/success/error states
  PhoneMockup.tsx     # Pure render, 3 variants: dashboard | chart | transactions (wireframe placeholders)
  sections/
    Hero.tsx
    TrustBar.tsx
    Features.tsx
    HowItWorks.tsx
    PrivacySection.tsx
    RegionMap.tsx
    Testimonials.tsx
    WaitlistCTA.tsx
```

All interactive components carry `"use client"`. Server components have no directive.

### Design tokens

`tailwind.config.ts` extends Tailwind with the full token set: brand colours (`brand-blue: #4E6FD9`, `brand-purple: #6B5BC9`), accent colours (pink, orange, cyan, green), dark/light surface scales, 6 named gradient backgrounds, and custom animations (`fade-in`, `fade-in-up`, `slide-up`, `float`, `glow`).

Animation stagger utilities (`.animate-delay-100` through `.animate-delay-500`) and `.animate-gradient` are in `globals.css` `@layer utilities`.

Reusable component classes in `globals.css` `@layer components`:
- `.text-gradient`, blue→purple gradient text
- `.glass`, backdrop-blur glassmorphism card
- `.surface-card` / `.surface-card-elevated`
- `.section-container`, `max-w-6xl mx-auto px-6 md:px-8`
- `.btn-primary` / `.btn-secondary`
- `.feature-icon`, 44 × 44px icon container

### Lib and hooks

```
src/lib/
  constants.ts        # SITE object: name, tagline, description, url, email
  supabase.ts         # Supabase client (throws on missing env vars at startup)
  emailValidation.ts  # validateEmail() — format regex, 600+ disposable domains, suspicious local parts

src/hooks/
  useScrollReveal.ts  # IntersectionObserver — returns { ref, isVisible }, respects prefers-reduced-motion
  useReducedMotion.ts # Returns boolean from matchMedia("(prefers-reduced-motion: reduce)")
```

`useScrollReveal` is the standard pattern for scroll-triggered animations. Pass `threshold` (default 0.15). When `prefers-reduced-motion` is set, `isVisible` is immediately `true` (no animation delay).

### Email validation and waitlist flow

Email validation runs in three places:
1. **Client-side (on blur/submit):** `validateEmail()` — instant format, disposable domain, and suspicious local part checks.
2. **Server-side (Server Action):** Same checks, plus `domainHasMxRecord()` — DNS MX lookup with a 4-second timeout (fails open on timeout, fails closed on ENOTFOUND/ENODATA).
3. **Database-side:** Unique constraint on the `waitlist.email` column catches duplicates.

`WaitlistForm` accepts a `source` prop (`'hero' | 'cta'`) to track which form submitted. The server action returns typed `WaitlistResult` — never throws to the client.

### External integrations

- **Formspree**, waitlist form POSTs to `https://formspree.io/f/YOUR_FORM_ID`. Replace the placeholder in `WaitlistForm.tsx` with the real form ID before launch.
- **Vercel**, `vercel.json` configures security headers (X-Frame-Options, X-XSS-Protection, etc.).
- **Google Fonts (Inter)**, imported in `globals.css` via CSS `@import`.

## Pending work

Tracked in `WEBSITE_PLAN.md` (592 lines). Key gaps before launch:
1. `src/app/layout.tsx` and `src/app/page.tsx`, root layout (ThemeProvider, metadata) and landing page assembly
2. Five unbuilt sections: `HowItWorks`, `PrivacySection`, `RegionMap`, `Testimonials`, `WaitlistCTA`
3. `src/hooks/useScrollReveal.ts` (Intersection Observer) and `useReducedMotion.ts`
4. `src/lib/constants.ts`, site-wide strings and metadata
5. Legal pages: `/about`, `/privacy`, `/terms`
6. Replace Formspree placeholder with real form ID
