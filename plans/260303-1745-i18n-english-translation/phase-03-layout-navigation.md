# Phase 03 — Layout & Navigation Translation

**Priority**: P1
**Status**: completed
**Effort**: ~2h
**Depends on**: Phase 01, Phase 02

## Context Links
- [Plan Overview](./plan.md)
- Files: `components/layout/header.tsx`, `components/layout/footer.tsx`, `lib/navigation.ts`, `app/[locale]/layout.tsx`

## Overview

Wire up `useTranslations('nav')` in Header and Footer. Replace all hardcoded Vietnamese strings. Update `lib/navigation.ts` to be a factory that accepts translated labels (or replace with inline translation in components). Add locale switcher to header.

## Key Insight: Navigation Data

Currently `lib/navigation.ts` exports static arrays with hardcoded Vietnamese titles. With i18n, nav item titles must come from the translation hook. Two approaches:

**Option A (chosen — KISS)**: Keep `lib/navigation.ts` for hrefs only, move title strings to `nav` namespace, reconstruct nav items inside header/footer using translations.

```ts
// lib/navigation.ts — hrefs only (no title strings)
export const mainNavHrefs = {
  about: '/about',
  learnAi: '/learn-ai',
  aiForBeginners: '/learn-ai/ai-for-beginners',
  aiForMarketing: '/learn-ai/ai-for-marketing',
  aiForWork: '/learn-ai/ai-for-work',
  blog: '/blog',
  courses: '/courses/ai-automation-bim',
  resources: '/tai-nguyen',   // vi slug; next-intl pathnames config maps to /en/resources
  life: '/life',
  freeGift: '/free-gift',
}
```

Header then builds nav items:
```tsx
const t = useTranslations('nav')
const mainNavItems = [
  { title: t('about'), href: mainNavHrefs.about },
  { title: t('learnAi'), href: mainNavHrefs.learnAi, children: [...] },
  ...
]
```

## Files to Modify

- `lib/navigation.ts` — strip title strings, keep hrefs only
- `components/layout/header.tsx` — use `useTranslations('nav')`, use `Link` from `@/i18n/navigation`
- `components/layout/footer.tsx` — use `useTranslations('nav')`, add newsletter translations
- `app/[locale]/layout.tsx` — pass locale to `<html lang={locale}>`, add `LocaleSwitcher` component

## Files to Create

- `components/layout/locale-switcher.tsx` — language toggle button (vi ↔ en)

## Implementation Steps

### 1. Update `lib/navigation.ts`

Strip all `title` fields. Export only href constants and type definitions.

```ts
export const mainNavHrefs = { ... }
export const footerNavHrefs = { ... }
export const socialLinks = [ ... ]  // keep external links as-is
```

### 2. Update `components/layout/header.tsx`

```tsx
'use client'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
// ...
export function Header() {
  const t = useTranslations('nav')
  const mainNavItems = buildMainNav(t)
  // ...
}
```

Replace all Vietnamese hardcoded strings:
- `"Về tôi"` → `t('about')`
- `"Học AI"` → `t('learnAi')`
- `"Nhận quà miễn phí"` → `t('ctaFreeGift')`
- `<span className="sr-only">Toggle menu</span>` → `t('common.toggleMenu')` (or keep English — sr-only)

Use `Link` from `@/i18n/navigation` instead of `next/link` so locale prefix is auto-applied.

### 3. Create `components/layout/locale-switcher.tsx`

Simple button that switches between locales. Uses `useRouter` + `usePathname` from `@/i18n/navigation`.

```tsx
'use client'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { useTransition } from 'react'

export function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const otherLocale = locale === 'vi' ? 'en' : 'vi'
  const label = locale === 'vi' ? 'EN' : 'VI'

  function handleSwitch() {
    startTransition(() => {
      router.replace(pathname, { locale: otherLocale })
    })
  }

  return (
    <button
      onClick={handleSwitch}
      disabled={isPending}
      className="text-sm font-medium px-2 py-1 rounded border border-border hover:border-coral transition-colors"
      aria-label={`Switch to ${otherLocale}`}
    >
      {label}
    </button>
  )
}
```

Add `<LocaleSwitcher />` to `DesktopNav` (next to `ThemeToggle`) and `MobileNav` bottom bar.

### 4. Update `components/layout/footer.tsx`

```tsx
'use client'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
// ...
export function Footer() {
  const t = useTranslations('nav')
  const currentYear = new Date().getFullYear()
  // Replace "Liên kết nhanh" → t('footer.quickLinks')
  // Replace "Tài nguyên" → t('footer.resources')
  // Replace "Nhận bài viết mới" → t('footer.newsletter')
  // Replace copyright string → t('footer.copyright', { year: currentYear })
  // Replace newsletter button → t('footer.newsletterBtn')
  // Replace subscribe success → t('common.subscribeSuccess')
  // Replace email placeholder → t('common.emailPlaceholder')
}
```

### 5. Update `app/[locale]/layout.tsx`

```tsx
import { setRequestLocale } from 'next-intl/server'
// ...
export default async function LocaleLayout({ children, params }) {
  const { locale } = await params
  setRequestLocale(locale)
  // ...
  return (
    <html lang={locale} ...>
      ...
    </html>
  )
}
```

Also update `generateMetadata` in layout to use locale-aware metadata (see Phase 08).

## Todo

- [ ] Refactor `lib/navigation.ts` — hrefs only, no titles
- [ ] Update `header.tsx` — `useTranslations('nav')`, `Link` from i18n/navigation
- [ ] Create `locale-switcher.tsx`
- [ ] Add `LocaleSwitcher` to desktop + mobile nav
- [ ] Update `footer.tsx` — all string replacements
- [ ] Verify `Link` from i18n/navigation handles `/tai-nguyen` → `/en/resources` automatically via pathnames config

## Success Criteria

- Header renders in Vietnamese on `/`, English on `/en`
- Locale switcher toggles between `/` and `/en` (or `/about` ↔ `/en/about`)
- Footer columns show translated column headings
- Newsletter form strings translated
- All navigation `Link` components use i18n-aware `Link` (correct locale prefix applied)
- No hardcoded Vietnamese strings remain in header or footer

## Risk Assessment

- **`Link` pathname mapping**: The `pathnames` config in `i18n/routing.ts` maps `/tai-nguyen` ↔ `/resources`. When using `Link href="/tai-nguyen"`, next-intl auto-serves `/tai-nguyen` for vi and `/en/resources` for en. Must use internal path (`/tai-nguyen`) as the `href` value — next-intl handles the external URL.
- **`useTranslations` in client components**: Both `header.tsx` and `footer.tsx` are already `'use client'` — `useTranslations` works fine. Messages are passed down from `NextIntlClientProvider` in layout.
