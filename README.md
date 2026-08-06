# NimbusCRM

A marketing landing page for NimbusCRM, a CRM built for small business owners who live on WhatsApp.

## Tech Stack

- Next.js 15.5 (App Router, Turbopack, static prerendering)
- TypeScript
- Tailwind CSS v4 (`@theme` color tokens)
- Framer Motion (scroll-reveals, staggered load-ins, hover/tap micro-interactions)
- lucide-react (icons)
- Inter (next/font/google)

## Layout Structure

A single `src/app/page.tsx` composes 10 sections in spec order: `Nav`, `Hero`, `LogoMarquee`,
`Testimonials`, `Features`, `StatBlock`, `PartnerStrip`, `Pricing`, `ClosingCTA`, `Footer`.

- `src/app/globals.css` — Tailwind v4 `@theme` block defining the design tokens
  (charcoal, cream, brand, smoke, ink) plus the `marquee` keyframes utility.
- `src/app/layout.tsx` — root layout with Inter font and reduced-motion guard.
- `src/lib/animations.ts` — shared Framer Motion variant objects
  (`revealItem`, `staggerContainer`, `heroStagger`, `heroItem`, `navFade`).
- `src/components/FadeIn.tsx` — reusable `FadeInSection`, `Stagger`, and `CountUp`
  primitives built on `useInView` for viewport-triggered animation.
- `src/components/*` — one file per section.

## Design Decisions

- **Andela-style hero:** the Hero section mirrors a real product homepage with a headline,
  subtext, two motion buttons, and a WhatsApp-style chat mock that simulates a live demo
  request (sequential bubble reveal + a "Hot Lead" chip bounce at 1.8s).
- **Trust signals first:** `LogoMarquee`, `Testimonials`, and `PartnerStrip` establish
  credibility before the feature grid, and `Pricing` re-uses the same `Stagger` + card-lift
  pattern for consistency.
- **Animations are additive:** motion is used only for viewport reveals, the hero load-in
  sequence, and hover/tap micro-interactions — never for layout. `prefers-reduced-motion`
  falls back to instant state changes via the global CSS guard.
- **Hover states avoid layout shift:** buttons use `scale` + `brightness`
  transitions rather than border-width changes; cards lift with `y` only.
- **Mobile navigation:** the `Nav` collapses to a hamburger menu that expands a
  full-width sheet with its own Demo/Trial buttons, matching desktop order without
  duplicating link state.

**Fix note:** all Framer Motion easing values are camelCase named easings (e.g. `"easeOut"`)
rather than CSS kebab strings (`"ease-out"`), which the library does not accept.

## Responsiveness

- Max-width container `max-w-7xl mx-auto` with `px-6 md:px-8` gutters across sections.
- Breakpoint strategy: base = mobile (375px), `md:` = tablet (768px), `lg:`/`max-w-7xl` =
  desktop (1440px). Grids become columns at `md` (`sm:grid-cols-2 lg:grid-cols-3`) and the
  Nav desktop links / CTA buttons collapse into a mobile sheet at `md:hidden`.
- The Hero chat mock and pricing card grids re-flow; the LogoMarquee dual-marquee keeps
  logos scrolling horizontally on all widths.

## Development

```bash
npm run dev      # localhost:3000
npm run lint     # eslint
npm run build    # next build --turbopack
```
