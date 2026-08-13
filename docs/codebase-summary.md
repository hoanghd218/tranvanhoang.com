# Codebase Summary

**Project**: AI Educator Website
**Phase**: 3.3 - Practical AI Homepage Positioning
**Last Updated**: 2026-08-13
**Status**: Core implementation complete; CTA measurement pending

## Overview

Tony Hoang's site is a bilingual practical-AI learning platform built with Next.js 16. It positions AI around real work, marketing, and digital products, then supports that direction with job-based learning paths, a free course, and recent articles before presenting free resources.

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
├── middleware.ts                          # NEW: i18n middleware
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

## Brand Design System — Rocket AI

**Model**: Dark-first (`:root` = void black), `.light` on `<html>` for opt-in light scope. Dark is the default; light requires explicit class.

### Core Palette

| Variable | Value | Usage |
|----------|-------|-------|
| `--void-black` | `#0A0A0D` | Ground, never a theme |
| `--stone` | `#F5F6F7` | Text on dark, background on light |
| `--rocket-purple` | `#8C25FF` | Single accent word, primary button, active state |
| `--indigo` | `#332BFF` | Complementary gradient, status |
| `--silver` | `#A7A7B3` | Secondary text |

**Ratio rule**: 75–80% void black, 15–20% purple/indigo, 5% everything else. Purple appears as: one accent word in a headline, single primary button, hairline on active surface, bloom in background. Never as large flat UI areas.

### Semantic Surfaces

| Token | Dark | Light | Purpose |
|-------|------|-------|---------|
| `--surface-base` | `#0A0A0D` | `#F5F6F7` | Page background |
| `--surface-raised` | `#111318` | `#FFFFFF` | Elevated surface (modals, popovers) |
| `--surface-card` | `#14141A` | `#FFFFFF` | Card background |
| `--surface-inset` | `#1C1C24` | `#E6E6E8` | Input/form fill |
| `--surface-overlay` | `.04 white` | `.03 black` | Hover state, subtle fill |

### Borders

| Token | Opacity | Usage |
|-------|---------|-------|
| `--border-subtle` | 8% white | Default hairline |
| `--border-strong` | 20% white | Strong divider |
| `--border-accent` | 40% purple | Purple accent (active) |

### Typography

- **Display**: Space Grotesk (headings, wordmark)
- **Body**: Be Vietnam Pro (all body and UI text)
- **Vietnamese**: Leading auto-loosened on `[lang="vi"]` to accommodate stacked tone marks
- **Base size**: 16px; Display scales from 44–76px

### Motion

- **Ease curve**: `cubic-bezier(.2, .8, .2, 1)` (trajectory)
- **Duration**: instant (90ms) · fast (160ms) · base (240ms) · slow (420ms) · cinematic (900ms)
- **Motion only**: Fades and short translations; no bounce, spring, rotation, parallax

### Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `--gutter-page` | 32px | Horizontal page padding |
| `--space-9` (alias `--section-y`) | 96px | Vertical section spacing |
| `--max-width-content` | 1200px | Page max width |

### Border Radius

| Token | Value | Usage |
|--------|-------|-------|
| `--radius-xs` | 4px | Checkboxes |
| `--radius-sm` | 6px | Buttons, inputs |
| `--radius-md` | 10px | List rows |
| `--radius-lg` | 16px | Cards |
| `--radius-xl` | 24px | Large panels |
| `--radius-pill` | 999px | Chips, badges, marketing CTAs |

## Component Architecture

### Custom Components (`components/custom/`)

Brand-specific components using design tokens:

| Component | File | Purpose |
|-----------|------|---------|
| `GradientText` | `gradient-text.tsx` | Gradient text with coral-bronze gradient |
| `BrandCard` | `brand-card.tsx` | Card with hover coral border effect |
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
- Active route highlighting with coral color
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
  --coral: #D97757;
  --bronze: #D4A27C;
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
| `.border-coral-hover` | Coral hover border transition |
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

- [x] next-intl integration (v4) with middleware routing
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
