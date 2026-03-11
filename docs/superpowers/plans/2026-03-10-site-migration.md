# Tahoe Clean Site Migration Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the Tahoe Clean business website from Lovable to a self-hosted Next.js + Tailwind project, pixel-perfect replica with SEO improvements.

**Architecture:** Next.js 14 App Router with Tailwind CSS. Static content site with 5 pages (Home, About, Services, FAQs, Contact). Shared layout with Navbar, Footer, and CTA banner. Content stored in data files. Lucide React for icons. Deployed to Vercel.

**Tech Stack:** Next.js 14, Tailwind CSS, TypeScript, lucide-react, next/image

---

## Chunk 1: Project Scaffolding & Assets

### Task 1: Scaffold Next.js project

**Files:**
- Create: `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.ts`, `src/app/layout.tsx`, `src/app/globals.css`

- [ ] **Step 1: Initialize Next.js project**

Run: `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm`

- [ ] **Step 2: Install lucide-react**

Run: `npm install lucide-react`

- [ ] **Step 3: Verify dev server starts**

Run: `npm run dev` (check it starts without errors, then stop)

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "chore: scaffold Next.js project with Tailwind and lucide-react"
```

### Task 2: Download assets from live site

**Files:**
- Create: `public/images/logo.png`, `public/images/hero-tahoe.jpg`, `public/images/services-bg.jpg`

- [ ] **Step 1: Download images from live Lovable site**

```bash
curl -o public/images/logo.png https://gleam-grace-hub.lovable.app/logo.png
curl -o public/images/hero-tahoe.jpg https://gleam-grace-hub.lovable.app/assets/hero-tahoe-DI7_B2KU.jpg
curl -o public/images/services-bg.jpg https://gleam-grace-hub.lovable.app/assets/services-bg-D4mZCgA6.jpg
```

- [ ] **Step 2: Commit**

```bash
git add public/images && git commit -m "chore: add image assets from live site"
```

### Task 3: Configure Tailwind theme

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Set up custom colors and fonts in Tailwind config**

Colors extracted from live site:
- Primary (olive green): `#62783a`
- Primary foreground (white): `#ffffff`
- Accent (gold): `#a67b3f`
- Foreground (dark): `#262a22`
- Background: `#fafaf8`
- Card: `#ffffff`
- Muted: `#f5f5f0`

- [ ] **Step 2: Set up global CSS with base styles**

- [ ] **Step 3: Commit**

```bash
git add tailwind.config.ts src/app/globals.css && git commit -m "chore: configure Tailwind theme with brand colors"
```

---

## Chunk 2: Shared Layout Components

### Task 4: Create data files

**Files:**
- Create: `src/data/services.ts`
- Create: `src/data/faqs.ts`
- Create: `src/data/testimonials.ts`

- [ ] **Step 1: Create services data**

9 services: Vacation Rental Cleaning, Recurring Cleaning, Handyman Services, Green Home & Commercial Cleaning, Deep Cleaning Service, Post Construction Cleaning, Snow Removal, Business Moving Cleaning, Move-in/Move-out Cleaning. Each has: title, description, icon name (lucide).

- [ ] **Step 2: Create FAQs data**

8 FAQs with questions and answers.

- [ ] **Step 3: Create testimonials data**

Testimonials with name, role, quote, rating.

- [ ] **Step 4: Commit**

```bash
git add src/data && git commit -m "feat: add content data files for services, FAQs, testimonials"
```

### Task 5: Build Navbar component

**Files:**
- Create: `src/components/Navbar.tsx`

- [ ] **Step 1: Build Navbar**

Top announcement bar: "residential - commercial - vacation rentals" (olive green bg, white text, small font).
Main nav: Logo left, links center (Home, About Us, Services, FAQs, Contact), phone CTA button right.
Sticky on scroll. Mobile hamburger menu.
Active link styling.

- [ ] **Step 2: Commit**

```bash
git add src/components/Navbar.tsx && git commit -m "feat: add Navbar with announcement bar and mobile menu"
```

### Task 6: Build Footer component

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Build Footer**

Dark green background. 4 columns:
1. Logo + description
2. Quick Links (Home, About, Services, FAQs, Contact)
3. Services list (Vacation Rental, Recurring, Handyman, Deep, Snow)
4. Contact (phone with icon, location with icon)
Copyright bar at bottom.

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.tsx && git commit -m "feat: add Footer component"
```

### Task 7: Build CTABanner component

**Files:**
- Create: `src/components/CTABanner.tsx`

- [ ] **Step 1: Build CTA Banner**

Green gradient background (primary to accent, diagonal). Heading: "Ready for a spotless home?" Subtitle: "Call today for a free consultation. Licensed, insured, and bonded." Phone button with icon.

- [ ] **Step 2: Commit**

```bash
git add src/components/CTABanner.tsx && git commit -m "feat: add CTABanner component"
```

### Task 8: Build PageHeader component

**Files:**
- Create: `src/components/PageHeader.tsx`

- [ ] **Step 1: Build PageHeader**

Olive green background. Centered h1 + subtitle paragraph. Used on About, Services, FAQs, Contact pages.

- [ ] **Step 2: Commit**

```bash
git add src/components/PageHeader.tsx && git commit -m "feat: add PageHeader component"
```

### Task 9: Wire up root layout

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Add Navbar and Footer to root layout**

Import Navbar and Footer. Set up metadata (title template, default description). Wrap children with Navbar on top and Footer on bottom.

- [ ] **Step 2: Commit**

```bash
git add src/app/layout.tsx && git commit -m "feat: wire up root layout with Navbar and Footer"
```

---

## Chunk 3: Home Page

### Task 10: Build Home page sections

**Files:**
- Create: `src/components/HeroSection.tsx`
- Create: `src/components/ServiceCard.tsx`
- Create: `src/components/TestimonialCarousel.tsx`
- Create: `src/components/DifferentiatorCard.tsx`
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Build HeroSection**

Full-width hero with `hero-tahoe.jpg` background. Dark gradient overlay. Centered: logo, h1 ("Life's too short to clean, *that's why we are here!*" - italic part in gold), subtitle, two buttons (Call + View Services).

- [ ] **Step 2: Build ServiceCard**

Card with image/icon, h3 title, paragraph description. Used in both home (3 cards) and services page (9 cards). On home page, cards link to /services.

- [ ] **Step 3: Build TestimonialCarousel**

Rotating testimonials. 5-star rating display. Blockquote with quote text. Author name + role. Dot indicators + left/right arrow buttons. Auto-rotate optional.

- [ ] **Step 4: Build DifferentiatorCard**

Icon (lucide), h3 title, description. Cards: Background Checked (shield-check), Satisfaction Guaranteed (award), Green Cleaning (leaf).

- [ ] **Step 5: Assemble Home page**

Wire all sections into `page.tsx`:
1. HeroSection
2. About preview section (label + heading + paragraph)
3. Services section (label + heading + 3 ServiceCards + "View All" button)
4. Testimonials section
5. Differentiators section ("The Tahoe Clean Difference")
6. CTABanner

- [ ] **Step 6: Commit**

```bash
git add src/components/HeroSection.tsx src/components/ServiceCard.tsx src/components/TestimonialCarousel.tsx src/components/DifferentiatorCard.tsx src/app/page.tsx && git commit -m "feat: build complete Home page with all sections"
```

---

## Chunk 4: Inner Pages

### Task 11: Build About page

**Files:**
- Create: `src/app/about/page.tsx`

- [ ] **Step 1: Build About page**

1. PageHeader: "About Tahoe Clean" + subtitle
2. Our Story section: heading + 3 paragraphs about Kyle Leake / Tahoe Clean
3. Why Trust section: 4 cards (Background Checked Staff, Professional Training, Satisfaction Guarantee, Licensed/Insured/Bonded) with icons and descriptions
4. CTABanner

- [ ] **Step 2: Set page metadata**

Title: "About Us | Tahoe Clean", description about the company.

- [ ] **Step 3: Commit**

```bash
git add src/app/about && git commit -m "feat: build About page"
```

### Task 12: Build Services page

**Files:**
- Create: `src/app/services/page.tsx`

- [ ] **Step 1: Build Services page**

1. PageHeader: "Our Services" + subtitle
2. Grid of 9 ServiceCards (3 columns on desktop, 1 on mobile)
3. CTABanner

- [ ] **Step 2: Set page metadata**

- [ ] **Step 3: Commit**

```bash
git add src/app/services && git commit -m "feat: build Services page"
```

### Task 13: Build FAQs page

**Files:**
- Create: `src/app/faqs/page.tsx`
- Create: `src/components/FAQAccordion.tsx`

- [ ] **Step 1: Build FAQAccordion component**

Expandable/collapsible items. Click to toggle. Chevron rotates on open. Smooth height animation.

- [ ] **Step 2: Build FAQs page**

1. PageHeader: "Frequently Asked Questions" + subtitle
2. FAQAccordion with 8 items from data file
3. CTABanner

- [ ] **Step 3: Set page metadata**

- [ ] **Step 4: Commit**

```bash
git add src/app/faqs src/components/FAQAccordion.tsx && git commit -m "feat: build FAQs page with accordion"
```

### Task 14: Build Contact page

**Files:**
- Create: `src/app/contact/page.tsx`

- [ ] **Step 1: Build Contact page**

1. PageHeader: "Contact Us" + subtitle
2. 3 info cards: Phone (phone icon + link), Location (map-pin icon + address), Availability (clock icon + "7 Days a Week")
3. "Ready to Get Started?" section with description + Call CTA button
4. No CTABanner needed (page itself is a CTA)

- [ ] **Step 2: Set page metadata**

- [ ] **Step 3: Commit**

```bash
git add src/app/contact && git commit -m "feat: build Contact page"
```

---

## Chunk 5: Polish & Deploy

### Task 15: SEO and metadata

**Files:**
- Modify: `src/app/layout.tsx`
- Create: `src/app/favicon.ico` (derive from logo)

- [ ] **Step 1: Add Open Graph and Twitter meta tags to layout**

- [ ] **Step 2: Add favicon**

- [ ] **Step 3: Commit**

```bash
git add src/app && git commit -m "feat: add SEO metadata and favicon"
```

### Task 16: Visual QA and final polish

- [ ] **Step 1: Run dev server and visually compare each page to live site**

Check: colors, spacing, typography, responsive behavior, mobile menu, testimonial carousel, FAQ accordion.

- [ ] **Step 2: Fix any visual discrepancies**

- [ ] **Step 3: Commit fixes**

### Task 17: Deploy to Vercel

- [ ] **Step 1: Push to GitHub**

```bash
git push -u origin main
```

- [ ] **Step 2: Deploy via Vercel CLI or connect repo**

- [ ] **Step 3: Verify deployed site matches expectations**