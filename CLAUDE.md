# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev        # Start dev server on localhost:3000
npm run build      # Production build
npm run start      # Run production build locally
npm run lint       # Run ESLint (flat config, Next.js rules)
npx vercel --prod  # Deploy to Vercel production
```

## Architecture

**Static marketing site** for a cleaning services company in South Lake Tahoe. Next.js 16 App Router, React 19, TypeScript (strict), Tailwind CSS 4. No database, no API, no auth — all content lives in static TypeScript data files.

### Key Directories

- `src/app/` — App Router pages (about, services, faqs, contact, privacy) plus SEO files (sitemap.ts, robots.ts)
- `src/components/` — Shared React components used across pages
- `src/data/` — Static content arrays (services, faqs, testimonials) that drive page rendering
- `public/images/` — Logo, hero background, OG image

### Data-Driven Rendering

Services, FAQs, and testimonials are defined as typed arrays in `src/data/`. Pages iterate over these arrays to render content. To add a new FAQ or service, add an entry to the data file — no page changes needed. Services use a string `icon` field that maps to lucide-react component names.

### Client vs Server Components

Most components are server components (default). Only three use `"use client"`:
- `Navbar.tsx` — mobile menu toggle state
- `FAQAccordion.tsx` — accordion open/close state
- `TestimonialCarousel.tsx` — carousel navigation state

### SEO & Structured Data

`StructuredData.tsx` injects JSON-LD schemas into pages. The root layout includes a LocalBusiness/CleaningService schema. Interior pages add BreadcrumbList schemas. The FAQs page adds FAQPage schema built from the faqs data array. Each page exports `metadata` with title and description.

### Styling

Tailwind v4 with `@theme` inline config in `globals.css` — no tailwind.config file. Brand colors: primary green (`#62783a`), accent brown (`#a67b3f`). Mobile-first responsive design using `md:` breakpoint. Path alias: `@/*` → `src/*`.

## Conventions

- Functional components only, default exports for pages/components, named exports for data
- PascalCase component files, lowercase route directories, camelCase data files
- Import order: React/Next → lucide-react icons → @/components → @/data → types
- All base URLs currently use `https://tahoe-clean.vercel.app` (sitemap, structured data, metadata)

## Git

- Remote: `stoked-automationz/tahoe-clean` on GitHub
- All commits should be authored as "Stoked Automations" (`stoked-automationz@users.noreply.github.com`)
- Deploy target: Vercel (project linked)
