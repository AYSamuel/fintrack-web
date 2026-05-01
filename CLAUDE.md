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

`next.config.js` is empty — Next.js defaults apply. The app runs as serverless functions on Vercel, which enables Server Actions and API routes. There is no `output: 'export'`. The Next.js `<Image>` optimiser is available but not currently used in the codebase.

Path alias `@/*` maps to `./src/*`.

### Routing

App Router pages live in `src/app/`. Routes: `/` (landing), `/about`, `/privacy`, `/terms`. Navigation anchors (`/#features`, `/#privacy`, `/#waitlist`) use native smooth scroll (`scroll-behavior: smooth` in globals.css).

### Theme system

Dark/light mode uses two layers:
1. `next-themes` manages the `dark` class on `<html>` via `ThemeProvider` in the root layout. Default theme is `dark`; system preference detection is enabled.
2. `globals.css` defines all colours as CSS custom properties on `:root` (light) and `.dark` (dark overrides) — components consume `var(--token-name)` tokens, never raw hex values.
3. Tailwind `darkMode: 'class'` strategy is configured, but the project primarily uses CSS variables for theming rather than `dark:` utilities.

### Component organisation

```
src/components/
  Navbar.tsx          # "use client" — sticky, mobile hamburger, theme toggle
  Footer.tsx
  ThemeToggle.tsx     # "use client" — SSR-safe (mounts icon via useEffect)
  WaitlistForm.tsx    # "use client" — idle/loading/success/duplicate/no_mx/error states
  PhoneMockup.tsx     # Pure render — 3 variants: dashboard | chart | transactions
  PhoneCarousel.tsx   # Animated carousel of multiple PhoneMockup instances
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
- `.text-gradient` — blue→purple gradient text
- `.text-gradient-green` — green→cyan gradient text
- `.glass` — backdrop-blur glassmorphism card
- `.surface-card` / `.surface-card-elevated`
- `.section-container` — `max-w-6xl mx-auto px-4 sm:px-6 md:px-8`
- `.section-label` / `.section-heading` — consistent section typography
- `.btn-primary` / `.btn-secondary`
- `.feature-icon` — 44 × 44px icon container

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

- **Supabase** — waitlist emails inserted into `waitlist` table via `src/app/actions/waitlist.ts`. Env vars: `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY`.
- **Vercel** — `vercel.json` adds security headers globally: `X-Content-Type-Options`, `X-Frame-Options: DENY`, `X-XSS-Protection`, `Referrer-Policy`.
- **Google Fonts (Inter)** — imported in `globals.css` via `@import` (weights 300–700).
- **OpenGraph image** — `src/app/opengraph-image.tsx` uses `ImageResponse` on Vercel Edge Runtime; renders a 1200×630 branded image dynamically.

## Pending work

Tracked in `WEBSITE_PLAN.md`. Key gaps before launch:
1. Real app screenshots — placeholder wireframes in `PhoneMockup.tsx` until Traccia Flutter UI is finalized.
2. Real testimonials — placeholder quotes in `Testimonials.tsx`.
3. Resend email integration — no transactional email yet; DB storage only.
