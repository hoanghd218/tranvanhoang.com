# Phase 09 — Course Page i18n Integration

**Priority**: P3
**Status**: completed
**Effort**: ~1h
**Depends on**: Phase 01

## Context Links
- [Plan Overview](./plan.md)
- Files:
  - `app/courses/ai-automation-bim/[[...locale]]/page.tsx`
  - `app/courses/ai-automation-bim/i18n/index.ts`
  - `app/courses/ai-automation-bim/i18n/vi.ts`
  - `app/courses/ai-automation-bim/i18n/en.ts`
  - `app/courses/ai-automation-bim/language-switcher.tsx`
  - `app/courses/ai-automation-bim/registration-form.tsx`

## Overview

The course page already has a fully working hand-rolled i18n system using a `getDictionary()` pattern with `[[...locale]]` catch-all routing. It serves:
- `/courses/ai-automation-bim` → Vietnamese (default)
- `/courses/ai-automation-bim/en` → English

This sits **outside** the `app/[locale]/` folder and is **excluded from next-intl middleware**. The decision is whether to:

**Option A — Leave as-is (chosen)**: The existing system works correctly and is self-contained. Zero risk of regression. Integrate only by ensuring middleware doesn't intercept course routes.

**Option B — Migrate to next-intl**: Replace `getDictionary()` with next-intl's `useTranslations`. Requires moving course into `app/[locale]/courses/`, restructuring the `[[...locale]]` pattern, and migrating large `vi.ts`/`en.ts` dictionaries to `messages/*.json`. High effort, no user-visible benefit.

→ **Option A chosen** per KISS principle.

## What This Phase Actually Covers

### 1. Middleware exclusion (critical — must do in Phase 01)

Confirm `middleware.ts` matcher excludes `/courses/` paths:

```ts
export const config = {
  matcher: [
    // Match all paths EXCEPT api, _next, static files, and courses
    '/((?!api|_next|_vercel|courses|.*\\..*).*)',
  ],
}
```

Without this exclusion, next-intl middleware would try to redirect `/courses/ai-automation-bim/en` — treating `en` as a locale prefix, breaking the course page routing.

**Verify**: After Phase 01 deploy, manually test:
- `/courses/ai-automation-bim` → loads Vietnamese ✓
- `/courses/ai-automation-bim/en` → loads English ✓
- `/en/courses/ai-automation-bim` → should NOT exist (404 or redirect to canonical)

### 2. Language switcher update (optional)

The existing `language-switcher.tsx` uses a hand-rolled toggle. The switcher links are:
- Vietnamese: `/courses/ai-automation-bim`
- English: `/courses/ai-automation-bim/en`

These are hardcoded paths, unaffected by next-intl. No change needed.

### 3. Header locale switcher behavior on course pages

When a user is on `/courses/ai-automation-bim` and clicks the global `LocaleSwitcher` (added in Phase 03), it will try to switch locale using `router.replace(pathname, { locale: otherLocale })`.

Since the course page is outside `[locale]`, `usePathname()` from `@/i18n/navigation` returns `/courses/ai-automation-bim`. The locale switch would try to navigate to `/en/courses/ai-automation-bim`, which doesn't exist.

**Fix**: In `LocaleSwitcher`, detect if current path is outside the locale routing scope and disable/hide the switcher, or handle gracefully:

```tsx
'use client'
import { usePathname } from 'next/navigation'  // use Next.js native, not i18n navigation

export function LocaleSwitcher() {
  const pathname = usePathname()

  // Hide switcher on course pages (they have their own language switcher)
  if (pathname.startsWith('/courses/')) return null

  // ... normal switcher logic
}
```

This is clean: course pages already have their own `LanguageSwitcher` component in the breadcrumb nav.

### 4. Header navigation link to courses

The nav item `"Khoá học"` links to `/courses/ai-automation-bim`. This is an absolute path outside `[locale]` — using next-intl's `Link` with this href should work fine since the path is not in `pathnames` config (next-intl passes it through unchanged).

Verify nav `Link` for the courses href doesn't get a locale prefix erroneously.

### 5. No migration of dictionary files

`app/courses/ai-automation-bim/i18n/vi.ts` and `en.ts` remain as TypeScript dictionaries — separate from `messages/vi.json` and `messages/en.json`. This is intentional duplication kept for isolation. If course page is ever moved under `[locale]`, migration can happen then.

## Files to Modify

- `middleware.ts` — add `/courses/` to matcher exclusion (ensure done in Phase 01)
- `components/layout/locale-switcher.tsx` — hide on `/courses/*` paths

## Files NOT to Modify

- `app/courses/ai-automation-bim/[[...locale]]/page.tsx` — no changes
- `app/courses/ai-automation-bim/i18n/*` — no changes
- `app/courses/ai-automation-bim/language-switcher.tsx` — no changes
- `app/courses/ai-automation-bim/registration-form.tsx` — no changes

## Todo

- [ ] Verify middleware matcher excludes `/courses/` (confirm in Phase 01 or fix here)
- [ ] Update `locale-switcher.tsx` — hide on `/courses/*` paths using `usePathname()` from `next/navigation`
- [ ] Manual test: `/courses/ai-automation-bim` loads correctly
- [ ] Manual test: `/courses/ai-automation-bim/en` loads correctly
- [ ] Manual test: `/en/courses/ai-automation-bim` returns 404 (not intercepted by next-intl)
- [ ] Verify nav `Link` to `/courses/ai-automation-bim` works from both `/` and `/en`

## Success Criteria

- Course page vi/en switching continues to work exactly as before
- next-intl middleware does not intercept any `/courses/*` requests
- Global locale switcher is hidden on course pages
- Nav link to courses works from all locales
- Zero regressions on the course page

## Risk Assessment

- **Middleware matcher conflict**: If middleware intercepts `/courses/ai-automation-bim/en`, next-intl will interpret `en` as a locale segment and redirect, breaking the course page. Middleware matcher must be precise. This is the single highest-risk item in this phase.
- **`usePathname` import**: `locale-switcher.tsx` currently uses `usePathname` from `@/i18n/navigation`. To detect the raw pathname (including `/courses/`), must use `usePathname` from `next/navigation` instead — or keep both and use native one only for the guard check.
