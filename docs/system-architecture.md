# System Architecture - tranvanhoang.com

**Project**: AI Educator Website (Personal Portfolio & Blog)
**Last Updated**: 2026-03-03
**Status**: Production

## Overview

tranvanhoang.com is a modern, bilingual personal website and content platform built with Next.js 16, featuring Vietnamese (default) and English support via next-intl v4. The architecture emphasizes performance, accessibility, and maintainable component composition.

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
│   └── Interactive forms
└── Footer (with Newsletter signup)
```

**Key Components**:

| Component | Location | Purpose |
|-----------|----------|---------|
| `Header` | `components/layout/header.tsx` | Sticky navigation with locale switcher |
| `Footer` | `components/layout/footer.tsx` | 4-column footer with newsletter |
| `LocaleSwitcher` | `components/layout/locale-switcher.tsx` | Language toggle (Globe icon) |
| `GradientText` | `components/custom/gradient-text.tsx` | Coral-bronze gradient typography |
| `BrandCard` | `components/custom/brand-card.tsx` | Hover effect card component |
| `CTAButton` | `components/custom/cta-button.tsx` | Primary action buttons |
| `Container` | `components/custom/container.tsx` | Constrained width wrapper |

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
│   ├── tai-nguyen/page.tsx      # /resources in English
│   ├── free-gift/page.tsx
│   └── life/[slug]/page.tsx
├── courses/                     # Excluded from i18n
│   └── [[...locale]]/          # Hand-rolled locale system
└── layout.tsx                   # Root layout with providers
```

**Locale Behavior**:
- Default locale: `vi` (no URL prefix)
- English: `/en/*` prefix
- Locales: `["vi", "en"]`
- Prefix mode: `as-needed` (Vietnamese has no prefix)

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
| `i18n/request.ts` | Request-based locale detection |
| `i18n/navigation.ts` | Locale-aware navigation utilities |
| `middleware.ts` | Request routing and locale detection |
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
  matcher: ["/((?!api|_next|_vercel|courses|.*\\..*).*)",],
}
```

**Behavior**:
- Detects locale from URL or Accept-Language header
- Redirects to appropriate locale prefix
- Excludes `/api`, `/_next`, `/courses` (courses has own system)
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

#### Life/Timeline Stories

Dynamic slug-based stories:
- `/life/[slug]` - Individual story pages
- Content structure: `/life/{slug}.mdx`

### 5. Design System

#### Color Tokens (CSS Variables)

```css
--coral: #D97757;           /* Primary brand */
--bronze: #D4A27C;          /* Secondary brand */
--coral-dark: #C45F3F;      /* Interaction states */
--bronze-dark: #B8895F;
--background: #0E0E0E;      /* Dark theme */
--foreground: #ededed;      /* Light text */
--card: #18181B;            /* Card backgrounds */
--border: #27272A;          /* Borders */
```

#### Typography

- **Font**: Inter (via `next/font`, Vietnamese subset)
- **Serif**: Merriweather (Life page headings)
- **Base size**: 16px / 1rem
- **Font families**: `--font-sans`, `--font-heading`

#### Spacing System

```css
--spacing-container: 1.5rem;  /* Horizontal padding */
--spacing-section: 4rem;      /* Vertical section gaps */
```

#### Border Radius Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 0.375rem | Small elements |
| `--radius-md` | 0.5rem | Default elements |
| `--radius-lg` | 0.75rem | Large cards |
| `--radius-xl` | 1rem | Hero sections |

#### Utility Classes

```css
.text-gradient          /* Coral-bronze gradient */
.text-life-gradient     /* Life section gradient */
.border-coral-hover     /* Hover coral border */
.container-custom       /* Centered container */
.section-spacing        /* Vertical section padding */
```

### 6. State Management

**Approach**: Minimal, component-level state

- **Theme**: `ThemeProvider` in `components/custom/theme-provider.tsx`
  - Supports light + dark via `.dark` class on `<html>`
  - Default: light theme
  - Persisted in localStorage
  - Respects `prefers-color-scheme`

- **Forms**: `react-hook-form` + `zod` validation
- **Notifications**: `sonner` toast system
- **Locale**: Via `next-intl` context and URL

### 7. Performance Optimizations

#### Image Optimization
- Next.js `<Image>` component for static images
- Responsive sizing with `srcSet`
- Automatic format selection (WebP, AVIF)

#### Code Splitting
- Automatic via App Router
- Per-route CSS and JS chunks

#### Font Optimization
- Inter font subset loading
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
4. **Courses System**: Separate hand-rolled locale system (excluded from next-intl middleware) for legacy reasons
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
- Content delivery network integration
- Performance metrics (Vercel Analytics)
- A/B testing support for localized content
