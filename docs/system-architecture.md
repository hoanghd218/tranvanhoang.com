# System Architecture - tranvanhoang.com

**Project**: AI Educator Website (Personal Portfolio & Blog)
**Last Updated**: 2026-08-13
**Status**: Production

## Overview

tranvanhoang.com is a modern, bilingual personal website and content platform built with Next.js 16, featuring Vietnamese (default) and English support via next-intl v4. Its course area uses the same localized routing layer, with static course configuration and resilient third-party video delivery.

## Architecture Layers

### 1. Presentation Layer (Frontend)

#### Component Hierarchy

```
Layout (Root)
├── Header (with LocaleSwitcher)
├── Page-specific Content
│   ├── Hero sections
│   ├── Feature cards
│   ├── Blog/Course listings
│   ├── CourseVideoCard (Fathom embed or unavailable state)
│   └── Interactive forms
└── Footer (with Newsletter signup)
```

**Key Components**:

| Component | Location | Purpose |
|-----------|----------|---------|
| `Header` | `components/layout/header.tsx` | Sticky navigation with locale switcher |
| `Footer` | `components/layout/footer.tsx` | 4-column footer with newsletter |
| `LocaleSwitcher` | `components/layout/locale-switcher.tsx` | Language toggle (Globe icon) |
| `GradientText` | `components/custom/gradient-text.tsx` | Stone-purple gradient typography |
| `BrandCard` | `components/custom/brand-card.tsx` | Hover effect card component |
| `CTAButton` | `components/custom/cta-button.tsx` | Primary action buttons |
| `Container` | `components/custom/container.tsx` | Constrained width wrapper |
| `CourseVideoCard` | `components/courses/course-video-card.tsx` | Responsive Fathom player, fallback link, unavailable state |

#### UI Primitives

Radix UI-based shadcn-style components in `components/ui/`:
- Tabs, Accordion, Avatar (form elements)
- Button, Card, Input, Label, Badge (content)
- Dialog, Sheet, Alert (interactions)
- Sonner (toast notifications)

### 2. Routing Layer

#### Next.js App Router with i18n

```
app/
├── [locale]/                    # Locale segment (vi | en)
│   ├── page.tsx                # Home page
│   ├── about/page.tsx
│   ├── blog/[category]/[slug]
│   ├── learn-ai/[path]/[module]
│   ├── courses/
│   │   ├── page.tsx             # Course catalog
│   │   └── [slug]/page.tsx            # Data-driven course detail
│   ├── tai-nguyen/page.tsx      # /resources in English
│   ├── free-gift/page.tsx
│   └── life/[slug]/page.tsx
└── layout.tsx                   # Root layout with providers
```

**Locale Behavior**:
- Default locale: `vi` (no URL prefix)
- English: `/en/*` prefix
- Locales: `["vi", "en"]`
- Prefix mode: `as-needed` (Vietnamese has no prefix)
- Automatic locale detection: disabled (`localeDetection: false`)

**Translated Route Slugs**:
```
Vietnamese: /tai-nguyen → English: /en/resources
(all other routes maintain consistent slugs)
```

### 3. Internationalization (i18n) Layer

#### Framework: next-intl v4

**Files**:

| File | Purpose |
|------|---------|
| `i18n/routing.ts` | Locale definitions, path mappings |
| `i18n/request.ts` | Request-scoped locale/message configuration |
| `i18n/navigation.ts` | Locale-aware navigation utilities |
| `middleware.ts` | Locale-aware request routing |
| `messages/vi.json` | Vietnamese translations (~240 keys) |
| `messages/en.json` | English translations (~240 keys) |

#### Routing Configuration (`i18n/routing.ts`)

```typescript
export const routing = defineRouting({
  locales: ["vi", "en"],
  defaultLocale: "vi",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/about": "/about",
    "/blog": "/blog",
    "/blog/[category]": "/blog/[category]",
    "/blog/[category]/[slug]": "/blog/[category]/[slug]",
    "/learn-ai": "/learn-ai",
    "/courses": "/courses",
    "/courses/[slug]": "/courses/[slug]",
    "/tai-nguyen": {
      vi: "/tai-nguyen",
      en: "/resources",
    },
    "/life": "/life",
    "/life/[slug]": "/life/[slug]",
  },
})
```

#### Middleware (`middleware.ts`)

```typescript
export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)",],
}
```

**Behavior**:
- Resolves locale from the URL and uses Vietnamese as the deterministic default
- Preserves the `/en` prefix for English routes
- Excludes `/api`, `/_next`, `/_vercel`, and static files
- Includes `/courses` so VI/EN use the same next-intl routing and locale switcher
- Static assets handled by next (_vercel, .*\..*)

#### Translation File Structure (`messages/vi.json`)

~240 translation keys organized by domain:

```json
{
  "common": {           // Site-wide strings
    "siteName": "Hoàng",
    "siteTagline": "...",
    "skipToContent": "..."
  },
  "nav": {             // Navigation
    "about": "Về tôi",
    "learnAi": "Học AI",
    "resources": "Tài nguyên"
  },
  "footer": {          // Footer content
    "tagline": "...",
    "newsletter": "...",
    "copyright": "© {year} Hoàng. ..."
  },
  "home": {            // Home page
    "heroTitle": "...",
    "audienceTitle": "..."
  },
  "blog": {            // Blog pages
    "title": "Blog",
    "categories": "..."
  }
}
```

**Usage in Components**:
```typescript
"use client"
import { useTranslations } from "next-intl"

export function Hero() {
  const t = useTranslations("home")
  return <h1>{t("heroTitle")}</h1>
}
```

#### Locale Switching (`LocaleSwitcher`)

```typescript
export function LocaleSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()

  const toggleLocale = () => {
    const newLocale = locale === "vi" ? "en" : "vi"
    router.replace(pathname as "/", { locale: newLocale })
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleLocale}>
      <Globe className="h-4 w-4" />
    </Button>
  )
}
```

**Flow**:
1. User clicks Globe icon in header
2. Current locale detected via `useLocale()`
3. Toggle between "vi" and "en"
4. Router navigates to same page in new locale
5. Metadata and translations update automatically

### 4. Content Layer

#### Blog System (MDX)

**Location**: `content/{category}/*.mdx`
**Status**: Vietnamese-only (not translated)
**Reading**: `lib/mdx.ts` with `gray-matter` parsing

**Frontmatter Fields**:
```yaml
title: String (required)
date: ISO date (required)
category: String (required)
description: String (optional)
tags: String[] (optional)
featuredImage: String (optional)
draft: Boolean (optional, filters out in production)
author: String (optional)
```

**Categories**: Hardcoded in `lib/mdx.ts` → `categoryMap`

#### Learn AI Module System

Dynamic path-based learning modules:
- `/learn-ai/ai-for-beginners` - Beginner course
- `/learn-ai/ai-for-marketing` - Marketing applications
- `/learn-ai/ai-for-work` - Work productivity
- `/learn-ai/[path]/[module]` - Dynamic modules

#### Course Catalog and Media Delivery

**Routes**:
- `/courses` and `/en/courses` - localized catalog
- `/courses/vibe-coding-sale-page` and `/en/courses/vibe-coding-sale-page` - localized course detail

**Data split**:
- `lib/courses.ts` holds stable technical fields: slug, local cover path, lesson count, Fathom share/embed URLs, availability.
- `messages/vi.json` and `messages/en.json` hold all presentation copy, including lesson titles, outcomes, metadata, and unavailable messaging.

**Fathom strategy**:
1. Render only an embed URL verified through Fathom oEmbed; never place `/share/...` directly in an iframe.
2. Use a responsive 16:9, lazy-loaded iframe with fullscreen support and `autoplay=0`.
3. Keep a `target="_blank"` share link with `rel="noopener noreferrer"` below every available player.
4. When a recording is invalid, set `available: false` and `embedUrl: null`; render a localized status card instead of a redirecting/broken iframe.

Current state: Workshop 1 is embeddable. Workshop 2's supplied public URL returned HTTP 404 on 2026-08-13 and awaits a replacement link.

#### Life/Timeline Stories

Dynamic slug-based stories:
- `/life/[slug]` - Individual story pages
- Content structure: `/life/{slug}.mdx`

### 5. Design System — Rocket AI

#### Theming Model

**Dark-first**: `:root` is the void-black scope (ground, not a theme). `.light` on `<html>` is the opt-in "stone" scope. Dark is default; light requires explicit class.

**Palette**:
```css
--void-black: #0A0A0D;        /* Ground */
--stone: #F5F6F7;             /* Text on dark, bg on light */
--rocket-purple: #8C25FF;     /* Single accent, primary button */
--indigo: #332BFF;            /* Complementary gradient */
--silver: #A7A7B3;            /* Secondary text */
```

**Ratio**: 75–80% void black, 15–20% purple/indigo, 5% rest. Purple appears as: one accent word, single primary button, hairline on active, bloom in background. Never large flat UI areas.

#### Surfaces & Borders

| Token | Dark | Light |
|-------|------|-------|
| `--surface-base` | `#0A0A0D` | `#F5F6F7` |
| `--surface-raised` | `#111318` | `#FFFFFF` |
| `--surface-card` | `#14141A` | `#FFFFFF` |
| `--surface-inset` | `#1C1C24` | `#E6E6E8` |
| `--surface-overlay` | 4% white | 3% black |
| `--border-subtle` | 8% white | 10% black |
| `--border-strong` | 20% white | 28% black |
| `--border-accent` | 40% purple | 40% purple |

#### Typography

- **Display**: Space Grotesk (headings, wordmark)
- **Body**: Be Vietnam Pro (all body and UI text)
- **Vietnamese**: Auto-loosened leading on `[lang="vi"]` for stacked tone marks
- **Base size**: 16px; Display scales clamp(44px, 5vw, 76px)
- **Font families**: `--font-display`, `--font-text` (no serif or monospace)

#### Spacing & Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--gutter-page` | 32px | Horizontal padding |
| `--space-9` | 96px | Section vertical spacing |
| `--max-width-content` | 1200px | Page max width |
| `--radius-xs` | 4px | Checkboxes |
| `--radius-sm` | 6px | Buttons, inputs |
| `--radius-lg` | 16px | Cards |
| `--radius-pill` | 999px | Chips, marketing CTAs |

#### Component Recipes (per brief)

- **.rk-field**: 42° radial bloom + 1px 42° beam with purple glow (one per screen max)
- **.rk-card**: Carbon fill, 16px radius, 8% hairline, no shadow at rest
- **.rk-card-interactive**: Adds hover lift (2px) + purple hairline + glow
- **.rk-glass**: 4% white + 18px blur (sticky header, tab bar, dialog scrim only)
- **.rk-protect**: Gradient fade for copy over imagery
- **Primary button**: Purple bg, stone text, glow on hover, scale .98 on press
- **Secondary button**: Transparent, hairline border, purple on active

#### Motion

```css
--ease-trajectory: cubic-bezier(.2, .8, .2, 1);
--duration-fast: 160ms;
--duration-base: 240ms;
--duration-slow: 420ms;
```

Motion: Fades and short translations only. No bounce, spring, rotation, parallax.

#### Utility Classes

```css
.rk-field / .rk-field-soft            /* 42° field */
.rk-card / .rk-card-interactive       /* Card system */
.rk-glass / .rk-protect               /* Special surfaces */
.heading-xl / .heading-lg / .heading-md     /* Display scale */
.eyebrow / .wordmark                  /* Typography utilities */
.text-gradient                        /* Stone→purple gradient */
.container-custom / .section-spacing  /* Layout */
.animate-fade-in, .animate-bloom      /* Animations */
```

### 6. State Management

**Approach**: Minimal, component-level state

- **Theme**: `ThemeProvider` in `components/custom/theme-provider.tsx`
  - Supports dark + light via `.light` class on `<html>`
  - Default: dark (void black ground)
  - Light is opt-in, persisted in localStorage
  - Pre-paint script prevents flash on load

- **Forms**: `react-hook-form` + `zod` validation
- **Notifications**: `sonner` toast system
- **Locale**: Via `next-intl` context and URL

### 7. Performance Optimizations

#### Image Optimization
- Next.js `<Image>` component for static images
- Responsive sizing with `srcSet`
- Automatic format selection (WebP, AVIF)
- Course cover stored locally at `public/images/courses/vibe-coding-sale-page-cover.webp` and reused for catalog, hero, Open Graph, and Twitter cards

#### Code Splitting
- Automatic via App Router
- Per-route CSS and JS chunks

#### Font Optimization
- Be Vietnam Pro font subset loading
- WOFF2 format delivery
- `next/font` automatic optimization

#### Build Output
- Static export via `npm run build`
- No dynamic rendering required
- SEO-friendly static HTML

### 8. SEO & Metadata

#### JSON-LD Schemas (`components/seo/`)

- Organization schema
- Website schema
- Person schema (author)
- BreadcrumbList (navigation)

#### Dynamic Metadata

```typescript
export const generateMetadata = async (props) => {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'page'
  })
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: {
        'vi': '/path',
        'en': '/en/path'
      }
    }
  }
}
```

#### Locale Alternates

- `hreflang` tags for each locale
- Proper alternate link structure
- Canonical URLs per locale
- Bilingual course catalog/detail entries included in `app/sitemap.ts`

### 9. Data Flow

```
User Request
    ↓
Middleware (i18n routing)
    ↓
App Router ([locale]/page)
    ↓
getTranslations() + getMessages()
    ↓
Component renders with translations
    ↓
ThemeProvider wraps for dark/light
    ↓
Static HTML generation
    ↓
Browser (JSON-LD, CSS, JS bundled)
```

For a course page, the App Router additionally joins localized copy from `messages/{locale}.json` with technical media data from `lib/courses.ts`, then renders Course/Breadcrumb JSON-LD and either a verified Fathom iframe or its explicit fallback state.

### 10. Build & Deployment

#### Commands

```bash
npm run dev      # Dev server (localhost:3000)
npm run build    # Static export
npm run start    # Serve static build
npm run lint     # ESLint check
```

#### Output

- Static HTML files (one per locale + route)
- No server required for hosting
- CDN-friendly (static files)
- Fast Time-to-First-Byte (TTFB)

## Key Design Decisions

1. **Locale Prefix Strategy**: `as-needed` keeps Vietnamese URLs clean (no prefix) while English uses `/en/*` prefix
2. **Translated Slugs**: Only `/tai-nguyen` ↔ `/resources` mapped; other routes remain consistent across locales
3. **Blog Content**: Vietnamese-only (not translated) because content is culturally specific
4. **Courses System**: Uses the shared `app/[locale]` + next-intl architecture; technical media data stays separate from localized copy
5. **No Dynamic Rendering**: Fully static export for performance and deployment simplicity

## File Size Management

- Components: < 200 LOC per file
- Pages: < 150 LOC per file
- Utilities: < 100 LOC per file
- CSS: Tailwind-based (no bloat)

## Security Considerations

- **XSS Prevention**: React's built-in escaping + Content Security Policy
- **Input Validation**: Zod schemas on all form submissions
- **External Links**: `rel="noopener noreferrer"` on user-generated content
- **Fathom Embeds**: Only verified public-by-link recordings are framed; a share link is the cross-origin failure fallback, not an access-control boundary
- **Translation Keys**: No user input in translation system

## Accessibility

- Semantic HTML throughout
- WCAG 2.1 AA color contrast
- Keyboard navigation support
- ARIA labels on interactive elements
- Skip-to-content link in header
- Alt text on all images

## Monitoring & Maintenance

### Documentation
- `docs/codebase-summary.md` - Structure and components
- `docs/code-standards.md` - Coding conventions
- `docs/design-guidelines.md` - Component usage
- `docs/project-roadmap.md` - Development timeline

### Update Triggers
- i18n message updates: `messages/{locale}.json`
- Route changes: `i18n/routing.ts`
- Middleware rules: `middleware.ts` matcher
- Component changes: Rebuild required

## Future Considerations

- Blog content translation (Phase 4)
- Real-time translation fallbacks
- Additional courses using the catalog/data pattern
- Replacement public Fathom URL for Workshop 2
- Content delivery network integration
- Performance metrics (Vercel Analytics)
- A/B testing support for localized content
