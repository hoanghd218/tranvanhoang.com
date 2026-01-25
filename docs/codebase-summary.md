# Codebase Summary

**Project**: AI Educator Website
**Phase**: 1 - Foundation & Design System
**Last Updated**: 2025-01-25
**Status**: Complete

## Overview

AI Educator Website is a modern personal portfolio site built with Next.js 16, featuring a custom design system with brand-specific components. The project emphasizes accessibility, performance, and maintainable code patterns.

## Project Structure

```
tranvanhoang.com/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles & design tokens
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── custom/            # Brand-specific components
│   │   ├── gradient-text.tsx
│   │   ├── brand-card.tsx
│   │   ├── cta-button.tsx
│   │   └── container.tsx
│   └── ui/                # shadcn/ui-style primitives
│       ├── tabs.tsx
│       ├── accordion.tsx
│       ├── avatar.tsx
│       ├── sonner.tsx
│       ├── form.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── navigation-menu.tsx
│       ├── sheet.tsx
│       ├── dialog.tsx
│       ├── alert.tsx
│       └── badge.tsx
├── lib/
│   └── utils.ts           # cn() utility
├── types/                 # TypeScript types
├── public/                # Static assets
├── docs/                  # Documentation
└── package.json
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

## Brand Design System

### Color Palette

| Variable | Value | Usage |
|----------|-------|-------|
| `--coral` | `#D97757` | Primary brand color |
| `--bronze` | `#D4A27C` | Secondary brand color |
| `--coral-dark` | `#C45F3F` | Hover/interaction state |
| `--bronze-dark` | `#B8895F` | Hover/interaction state |
| `--background` | `#0E0E0E` | Dark background |
| `--foreground` | `#ededed` | Light text |
| `--card` | `#18181B` | Card backgrounds |
| `--border` | `#27272A` | Border color |

### Typography

- **Font**: Inter (via `next/font`)
- **Classes**: `--font-sans`, `--font-heading`
- **Base size**: 16px / 1rem

### Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-container` | 1.5rem | Horizontal page padding |
| `--spacing-section` | 4rem | Vertical section spacing |

### Border Radius

| Class | Value |
|-------|-------|
| `--radius-sm` | 0.375rem |
| `--radius-md` | 0.5rem |
| `--radius-lg` | 0.75rem |
| `--radius-xl` | 1rem |

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

## Key Dependencies

### Production

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 16.1.4 | React framework |
| `react` / `react-dom` | 19.2.3 | UI library |
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

## Next Phases

- Phase 2: Content Pages & Navigation
- Phase 3: Interactive Features
- Phase 4: Performance & SEO Optimization

## Documentation Files

| File | Purpose |
|------|---------|
| `project-overview-pdr.md` | Project requirements and architecture |
| `code-standards.md` | Coding conventions |
| `system-architecture.md` | Technical architecture |
| `design-guidelines.md` | Component usage and patterns |
| `project-roadmap.md` | Development timeline |
| `codebase-summary.md` | This file |
