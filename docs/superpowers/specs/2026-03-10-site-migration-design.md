# Tahoe Clean Site Migration Design

**Date:** 2026-03-10
**Source:** https://gleam-grace-hub.lovable.app/
**Target:** stoked-automationz/tahoe-clean on Vercel

## Overview

Migrate the Tahoe Clean business website from Lovable to a self-hosted Next.js + Tailwind CSS project. Pixel-perfect replica of the current design with minor improvements (SEO metadata, favicons, OG tags).

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Images:** next/image with static assets in /public

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Hero, about preview, 3 service cards, testimonial carousel, differentiators, CTA |
| `/about` | About Us | Story section, 4 trust indicators, CTA |
| `/services` | Services | 9 service cards in grid, CTA |
| `/faqs` | FAQs | 8 accordion Q&A items, CTA |
| `/contact` | Contact | Phone/location/availability cards, CTA |

## Shared Layout

- **Announcement bar:** "residential - commercial - vacation rentals"
- **Navbar:** Logo (left), nav links (center), phone CTA button (right), mobile hamburger
- **Footer:** 4 columns — brand description, quick links, services list, contact info. Copyright bar.
- **CTA Banner:** "Ready for a spotless home?" with phone button. Appears on every page.

## Components

| Component | Used On | Description |
|-----------|---------|-------------|
| `Navbar` | All | Announcement bar + sticky nav with mobile menu |
| `Footer` | All | 4-column footer |
| `HeroSection` | Home | Full-width background image, overlay with logo, h1, subtitle, 2 CTA buttons |
| `ServiceCard` | Home, Services | Image/icon + title + description card |
| `TestimonialCarousel` | Home | Star ratings, quote, author, dot navigation + arrows |
| `FAQAccordion` | FAQs | Expandable question/answer items |
| `CTABanner` | All | Green background CTA with phone button |
| `DifferentiatorCard` | Home, About | Icon + title + description for trust items |
| `PageHeader` | About, Services, FAQs, Contact | Olive/green banner with h1 + subtitle |

## Design Tokens (Tailwind Theme)

- **Primary green:** #4a6741 (nav, buttons, accents)
- **Dark olive:** #3d5a35 (hover states, dark sections)
- **Gold/amber accent:** for hero italic text
- **Background:** white/cream (#fafaf8) for content sections
- **Text:** dark gray/charcoal for body text
- **Landscape backgrounds:** Tahoe mountain/lake imagery on hero and section dividers

## Content Data

All content is static. Services, FAQs, and testimonials stored as arrays in dedicated data files under `src/data/` for easy editing:
- `services.ts` — 9 services with title, description, icon
- `faqs.ts` — 8 Q&A pairs
- `testimonials.ts` — testimonial entries with name, role, quote, rating

## SEO Improvements

- Per-page `<title>` and `<meta description>` via Next.js Metadata API
- Open Graph and Twitter card meta tags
- Favicon derived from Tahoe Clean logo
- Semantic HTML throughout
- next/image for optimized loading with proper alt text

## Image Assets

Download from live site and store in `/public/images/`:
- Logo (navbar + hero)
- Hero background (Lake Tahoe landscape)
- Service card images/icons
- Section background images (mountain landscapes)
- Testimonial star icons