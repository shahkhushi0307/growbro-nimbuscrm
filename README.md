# NimbusCRM

A marketing landing page for NimbusCRM, a CRM built for small business owners who live on WhatsApp.

This repository is a **same-to-same mirror** of the live reference site
[`growbro-nimbusCRM-tan.vercel.app`](https://growbro-nimbusCRM-tan.vercel.app),
replicated section-for-section (copy, layout, data, and interactions).

## Tech Stack

- Next.js 15.5 (App Router, `src/` directory, Turbopack)
- TypeScript
- Tailwind CSS v4 (`@theme` color tokens, utility classes)
- Framer Motion (staggered scroll reveals, hero chat-mock sequence, hover/tap micro-interactions)
- lucide-react (icons)
- Inter (via `next/font/google`), Droid Serif (headlines, via `@import`)

## Project Layout

```
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css       # Tailwind tokens + .btn / marquee / eyebrow utilities
│   ├── layout.tsx        # Root layout (Inter font, metadata, flex min-h-full body)
│   └── page.tsx          # Composes the 12 sections in order
├── components/
│   ├── Navbar/Navbar.tsx        ── sticky nav (Product / Pricing / About / Contact + CTA)
│   ├── Hero/Hero.tsx            ── animated WhatsApp chat mock
│   ├── LogoMarquee/LogoMarquee.tsx
│   ├── Features/Features.tsx    ── 3 story cards
│   ├── StatBlock/StatBlock.tsx   ── count-up stats
│   ├── Testimonials/Testimonials.tsx
│   ├── CaseStudies/CaseStudies.tsx
│   ├── TalentShowcase/TalentShowcase.tsx
│   ├── Pricing/Pricing.tsx
│   ├── Insights/Insights.tsx
│   ├── ClosingCTA/ClosingCTA.tsx
│   ├── Footer/Footer.tsx
│   └── ui/Button.tsx            ── shared `.btn` variant system
├── data/content.ts               # Copy + content models
└── lib/
    ├── motion.ts                 # Framer Motion variants (fadeUp, stagger, …)
    └── useCountUp.ts             # Viewport-triggered numeric count-up
```

Sections in `page.tsx`: `Navbar → Hero → LogoMarquee → Features → StatBlock →
Testimonials → CaseStudies → TalentShowcase → Pricing → Insights → ClosingCTA → Footer`.

## Design Decisions

- **Palette:** near-black charcoal (`#132128`) background with WhatsApp-adjacent signal-green
  emerald accents, so the product feels native to the messengers it automates.
- **Andela.com** is used as a structural/interaction reference
  (hero → trust strips → feature grid → stat strip → closing CTA)
  while **GrowBro AI's real public site** informs the proof points and copy patterns.
- **Motion is additive:** staggered scroll-reveal, a hero chat-mock load-in sequence,
  and hover/tap micro-interactions (`scale`, `brightness`) — never layout shifts.
  `prefers-reduced-motion` is respected.
- **Animations:** a `carousel-track` marquee (paused on hover) for industry logos,
  and a `requestAnimationFrame`-based count-up on the stats.
- **Buttons:** a shared `ui/Button` component implementing the `.btn` system
  (dark / emerald / outline / white / white-outline) with an animated arrow on hover.

## Environments & Deployment

`next.config.ts` is environment-aware so the same source deploys to **both** hosts:

| Host | Env | `output` | `basePath` |
|------|-----|-----------|------------|
| Vercel | `VERCEL=1` (set automatically) | default build | `""` (root) |
| GitHub Pages | `GITHUB_PAGES=true` | `"export"` + `out/` | `/growbro-nimbusCRM` |

- **Vercel:** linked to GitHub — every push to `main` auto-deploys to
  https://growbro-nimbusCRM-tan.vercel.app
- **GitHub Pages:** built via `peaceiris/actions-gh-pages` on the `gh-pages` branch
  (deploy workflow in `.github/workflows/`). Build with `GITHUB_PAGES=true`:
  ```bash
  GITHUB_PAGES=true npm run build   # exports to /out
  ```

## Development

```bash
npm install       # dependencies
npm run dev       # local dev at http://localhost:3000
npm run build     # production build
npm run lint      # ESLint
```

## Links

- Live (Vercel): https://growbro-nimbusCRM-tan.vercel.app
- Source (GitHub): https://github.com/shahkhushi0307/growbro-nimbuscrm
