# Codebase Summary

**Project**: AI Educator Website
**Phase**: 3.3 - Practical AI Homepage Positioning
**Last Updated**: 2026-10-11
**Status**: Core implementation complete; CTA measurement pending

## Overview

Tony Hoang's site is a bilingual systems architect and creator website built with Next.js 16. The editorial homepage presents owned digital products, published writing and activities. Retained courses, learning paths, resources and gifts use compatible styling within the same site.

The homepage reads live blog data from `content/blog`, so proof cards and article routes stay aligned with published content rather than vanity counters or unverified claims.

## Project Structure

```
tranvanhoang.com/
├── app/
│   ├── [locale]/                          # Locale segment (vi, en)
│   │   ├── page.tsx                      # Home page
│   │   ├── about/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   ├── [category]/page.tsx
│   │   │   └── [category]/[slug]/page.tsx
│   │   ├── learn-ai/
│   │   │   ├── page.tsx
│   │   │   ├── ai-for-beginners/page.tsx
│   │   │   ├── ai-for-marketing/page.tsx
│   │   │   ├── ai-for-work/page.tsx
│   │   │   └── [path]/[module]/page.tsx
│   │   ├── courses/
│   │   │   ├── page.tsx                   # Bilingual course catalog
│   │   │   └── [slug]/page.tsx            # Data-driven course detail
│   │   ├── tai-nguyen/page.tsx             # /resources in English
│   │   ├── free-gift/page.tsx
│   │   ├── life/page.tsx
│   │   └── life/[slug]/page.tsx
│   ├── globals.css                        # Global styles & design tokens
│   ├── layout.tsx                         # Root layout
│   └── page.tsx                           # Catch-all redirect
├── components/
│   ├── layout/
│   │   ├── header.tsx                     # With locale switcher
│   │   ├── footer.tsx
│   │   └── locale-switcher.tsx            # NEW: Locale toggle button
│   ├── courses/
│   │   └── course-video-card.tsx           # Fathom player/unavailable state
│   ├── custom/                            # Brand components
│   ├── ui/                                # shadcn/ui primitives
│   └── seo/                               # SEO schemas
├── i18n/                                  # NEW: i18n configuration
│   ├── routing.ts                         # Locale routing + path mappings
│   ├── request.ts                         # Request locale message loading
│   └── navigation.ts                      # Locale-aware navigation
├── messages/                              # NEW: Translation files
│   ├── vi.json                            # Vietnamese translations (~240 keys)
│   └── en.json                            # English translations (~240 keys)
├── lib/
│   ├── courses.ts                         # Course slug, cover, lesson URLs/status
│   ├── utils.ts                           # cn() utility
│   ├── mdx.ts                             # MDX content queries
│   └── navigation.ts                      # Navigation config
├── content/                               # MDX blog posts (Vietnamese only)
│   └── {category}/*.mdx
├── proxy.ts                          # Next.js 16 locale request proxy
├── types/                                 # TypeScript types
├── public/
│   └── images/courses/                    # Local course cover assets
└── docs/                                  # Documentation
```

## Core Technologies

| Category | Technology |
|----------|------------|
| Framework | Next.js 16.1.4 (App Router) |
| Runtime | React 19.2.3 |
| Styling | Tailwind CSS 4 |
| UI Primitives | Radix UI |
| Forms | React Hook Form + Zod |
| Icons | Lucide React |
| Notifications | Sonner |
| Build | TypeScript 5 |

## Brand Design System — Tony Hoang

The main shell uses a light premium editorial theme: warm ivory `#F5F3E9`, soft white `#FCFBF7`, emerald `#1E765D`, forest `#123C32`, gold `#E4B445`, pale sage `#E8EDE0`, gray green `#667168` and warm border `#DDDCCF`. Noto Serif headings, Be Vietnam Pro body/UI and the Allura signature are loaded in `app/layout.tsx`.

`app/editorial.css` owns editorial tokens and responsive layout. `app/learning-compat.css` adapts retained courses, learning, resources and gifts UI (`rk-*` classes and semantic tokens) to the same palette/fonts; legacy purple token names resolve to emerald/forest. Dark forest accent sections are local surfaces, not a dark-first site theme.

Editorial spacing variables such as `--space-8` mean 8px. Retained learning layouts use separate indexed `--learning-space-N` tokens (for example, `--learning-space-8: 64px`, `--learning-space-9: 96px`) to avoid collisions. Container maximum is 1280px; editorial radius is 8px and transition duration 220ms. See `docs/design-guidelines.md` for the full system.

## Component Architecture

### Custom Components (`components/custom/`)

Brand-specific components using design tokens:

| Component | File | Purpose |
|-----------|------|---------|
| `GradientText` | `gradient-text.tsx` | Gradient text using emerald/gold aliases |
| `BrandCard` | `brand-card.tsx` | Card with emerald hover border |
| `CTAButton` | `cta-button.tsx` | Primary action button with variants |
| `Container` | `container.tsx` | Constrained width container |
| `Section` | `container.tsx` | Section wrapper with vertical padding |

### UI Components (`components/ui/`)

Shadcn/ui-style Radix UI primitives:

| Component | Base | Purpose |
|-----------|------|---------|
| `Tabs` | `@radix-ui/react-tabs` | Tabbed navigation |
| `Accordion` | `@radix-ui/react-accordion` | Collapsible sections |
| `Avatar` | `@radix-ui/react-avatar` | User avatars |
| `Sonner` | `sonner` | Toast notifications |
| `Form` | `react-hook-form` + `zod` | Form handling with validation |
| `Button` | Native | Standard button (CVA variants) |
| `Card` | Native | Content containers |
| `Input` | Native | Text input fields |
| `Label` | `@radix-ui/react-label` | Form labels |
| `Dialog` | `@radix-ui/react-dialog` | Modal dialogs |
| `Sheet` | `@radix-ui/react-sheet` | Slide-out panels |
| `Alert` | Native | Status messages |
| `Badge` | Native | Tags and labels |

### Utility Functions

```typescript
// lib/utils.ts
cn(...inputs: ClassValue[]): string
```

Tailwind class merger using `clsx` and `tailwind-merge`.

### Navigation Configuration (`lib/navigation.ts`)

Centralized navigation structure for consistent routing:

```typescript
type NavItem = {
  title: string
  href: string
  description?: string       // For dropdown descriptions
  children?: NavItem[]       // For dropdown menus
}

const mainNavItems: NavItem[] = [...]
const footerNavItems: {...}  // 4-column footer structure
```

**Structure:**

| Export | Purpose |
|--------|---------|
| `mainNavItems` | Header navigation items (Về tôi, Học AI, Blog, Tài nguyên, Cuộc sống) |
| `ctaItem` | Primary CTA button (Nhận quà miễn phí) |
| `footerNavItems` | Footer columns: brand, quickLinks, resources, connect |

The active localized header/footer navigation is assembled in `components/layout/header.tsx` and `components/layout/footer.tsx` from the `nav` message namespace. Both include `/courses` and use `@/i18n/navigation` links.

### Course System

| File | Responsibility |
|------|----------------|
| `app/[locale]/courses/page.tsx` | VI/EN catalog, localized metadata, course discovery card |
| `app/[locale]/courses/[slug]/page.tsx` | Data-driven hero, outcomes, curriculum, Course/Breadcrumb JSON-LD |
| `lib/courses.ts` | Stable technical data: slug, cover path, share/embed URLs, availability |
| `components/courses/course-video-card.tsx` | Responsive lazy iframe, external fallback, unavailable state |
| `messages/{locale}.json` | Localized catalog, course, lesson, metadata, and status copy |
| `public/images/courses/vibe-coding-sale-page-cover.webp` | Local cover for UI and social previews |

The first workshop uses Fathom's verified `/embed/{token}?autoplay=0` endpoint and always exposes the public share URL as a fallback. Workshop 2's supplied share URL returns 404, so `available: false` and `embedUrl: null` prevent a broken iframe while preserving its curriculum card.

### Layout Components (`components/layout/`)

Responsive layout shell components (Phase 2):

| Component | File | Purpose |
|-----------|------|---------|
| `Header` | `header.tsx` | Sticky header with scroll effect, desktop nav, mobile sheet menu |
| `Footer` | `footer.tsx` | 4-column footer with newsletter signup |

**Header Features:**
- Sticky positioning with backdrop blur on scroll
- Desktop: Horizontal nav with dropdown support
- Mobile: Sheet-based slide-out menu
- Active route highlighting with emerald color
- Skip-to-content link for accessibility

**Footer Features:**
- Brand column with description
- Quick Links column (navigation)
- Resources column (tài nguyên)
- Newsletter column with email signup form
- Social media links in bottom bar
- External links open in new tab with security attributes

## Key Dependencies

### Production

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 16.1.4 | React framework |
| `react` / `react-dom` | 19.2.3 | UI library |
| `next-intl` | 4.x | i18n support with message translation |
| `@radix-ui/*` | 1.x | UI primitives |
| `class-variance-authority` | 0.7.1 | Button variants |
| `clsx` / `tailwind-merge` | 2.x/3.x | Class utilities |
| `lucide-react` | 0.563.0 | Icons |
| `react-hook-form` | 7.71.1 | Form management |
| `@hookform/resolvers` | 5.2.2 | Zod integration |
| `zod` | 4.3.6 | Schema validation |
| `sonner` | 2.0.7 | Toast notifications |
| `next-themes` | 0.4.6 | Dark mode support |

### Development

| Package | Purpose |
|---------|---------|
| `@tailwindcss/postcss` | Tailwind 4 integration |
| `typescript` | Type safety |
| `eslint` | Code linting |

## CSS Architecture

### Tailwind 4 Configuration

```css
/* app/globals.css */
@import "tailwindcss";

:root {
  /* Design tokens */
  --coral: #1E765D; /* Legacy alias for emerald */
  --bronze: #E4B445; /* Legacy alias for gold */
  /* ... */
}

@theme inline {
  /* Custom properties mapped to Tailwind */
  --color-coral: var(--coral);
  --color-bronze: var(--bronze);
  /* ... */
}
```

### Utility Classes

| Class | Purpose |
|-------|---------|
| `.text-gradient` | Gradient text effect |
| `.border-coral-hover` | Emerald hover border transition |
| `.container-custom` | Centered container |
| `.section-spacing` | Vertical section padding |

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## TypeScript Configuration

- Strict mode enabled
- Path aliases: `@/*` → root
- JSX: preserve
- Target: ES2017

## Phase 1 Deliverables

- [x] Project initialization with Next.js 16
- [x] Tailwind CSS 4 with custom theme
- [x] Design tokens (colors, spacing, typography)
- [x] Utility functions (`cn()`)
- [x] Custom components (GradientText, BrandCard, CTAButton, Container)
- [x] UI primitives (Tabs, Accordion, Avatar, Sonner, Form)
- [x] Form validation with Zod schemas
- [x] Documentation setup

## Phase 2 Deliverables

- [x] Navigation configuration (`lib/navigation.ts`)
- [x] Responsive header with desktop/mobile layouts
- [x] 4-column footer with newsletter signup
- [x] Skip-to-content accessibility link
- [x] Active route highlighting
- [x] External link security attributes
- [x] Mobile sheet menu with nested navigation

## Phase 3 Deliverables (Completed)

- [x] next-intl integration (v4) with proxy routing
- [x] Dual locale support: Vietnamese (default) + English
- [x] Translated route slugs (/tai-nguyen ↔ /resources)
- [x] Full UI translation (~240 keys in messages/vi.json & messages/en.json)
- [x] Middleware-based locale routing with deterministic default locale
- [x] LocaleSwitcher component with Globe icon
- [x] All pages moved under app/[locale]/ structure
- [x] Locale-aware metadata generation
- [x] Course routes integrated with next-intl and `app/[locale]`
- [x] MDX blog content remains Vietnamese-only

## Phase 3.1 Deliverables (2026-08-13)

- [x] Bilingual `/courses` catalog and `/courses/vibe-coding-sale-page` detail page
- [x] Centralized course media/status data in `lib/courses.ts`
- [x] Responsive Workshop 1 Fathom embed plus external fallback link
- [x] Non-broken unavailable state for Workshop 2 pending a replacement URL
- [x] Generated WebP cover used in catalog, hero, Open Graph, and Twitter cards
- [x] Localized canonical/hreflang metadata, Course/Breadcrumb JSON-LD
- [x] Bilingual sitemap entries and header/footer course links

## Phase 3.3 Deliverables (2026-08-13)

- [x] Homepage repositioned around practical AI for work, marketing, and digital products
- [x] Automatic email popup removed; lead capture remains contextual at the end of the journey
- [x] Hero CTAs prioritize `/courses`, then `/blog`; `/qua` moved to the closing section
- [x] Three job-based learning-path entry points replace the broad audience matrix
- [x] Featured course reads from `lib/courses.ts`; three recent proof cards read from `content/blog`
- [x] Unsupported counters/testimonials removed from the rendered homepage
- [x] VI/EN metadata and homepage messages aligned by meaning
- [ ] Position-specific GA4 events for hero, featured content, and gift CTAs

## Next Phases

- Phase 4: Blog Translation & Content Localization
- Phase 5: Performance & SEO Optimization
- Phase 6: Analytics & User Engagement

## Documentation Files

| File | Purpose |
|------|---------|
| `project-overview-pdr.md` | Project requirements and architecture |
| `code-standards.md` | Coding conventions |
| `system-architecture.md` | Technical architecture |
| `design-guidelines.md` | Component usage and patterns |
| `project-roadmap.md` | Development timeline |
| `codebase-summary.md` | This file |
