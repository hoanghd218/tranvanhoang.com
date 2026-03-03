# Planner Report — i18n English Translation

**Date**: 2026-03-03
**Plan dir**: `plans/260303-1745-i18n-english-translation/`

## Summary

Comprehensive plan created for adding English locale to tranvanhoang.com using next-intl v4. 9 phases covering infrastructure setup through course page integration. Vietnamese stays at `/` (no prefix), English at `/en/*`.

## Key Decisions Confirmed by Codebase Reading

1. **No `output: 'export'`** in `next.config.ts` — middleware works fine
2. **Two competing plugin wrappers** in `next.config.ts`: `withMDX` wraps config. Adding `withNextIntl` must wrap correctly: `withMDX(withNextIntl(nextConfig))`
3. **All home section components are already `'use client'`** — `useTranslations` works without special handling
4. **Course page isolation confirmed**: `[[...locale]]` catch-all at `/courses/ai-automation-bim/` handles its own i18n via TypeScript dictionaries. Middleware must exclude `/courses/` from matching
5. **`lib/navigation.ts` exports static data with hardcoded titles** — must be refactored to hrefs-only; titles move to `nav` namespace
6. **Footer `NewsletterForm`** is a client component with hardcoded Vietnamese — needs `useTranslations`
7. **Many server component pages** (`about`, `blog`, `free-gift`, `tai-nguyen`, `life`) use `getTranslations` (async) not `useTranslations`
8. **Only one non-English slug**: `/tai-nguyen` → `/en/resources`. All other slugs already English

## Files Requiring Changes (31 total)

### New files (8)
- `middleware.ts`
- `i18n/routing.ts`
- `i18n/request.ts`
- `i18n/navigation.ts`
- `messages/vi.json`
- `messages/en.json`
- `app/[locale]/layout.tsx`
- `components/layout/locale-switcher.tsx`

### Moved into `app/[locale]/` (13 files restructured)
All current `app/*.tsx` and `app/*/page.tsx` files except `courses/`

### Modified in-place (10)
- `next.config.ts` — add `withNextIntl`
- `lib/navigation.ts` — strip titles, keep hrefs
- `components/layout/header.tsx`
- `components/layout/footer.tsx`
- `components/home/*.tsx` (5 files)
- `components/email-capture/email-capture-popup.tsx`
- `components/email-capture/gift-selector.tsx`
- `components/email-capture/success-view.tsx`

### Unchanged
- All `app/courses/` files
- All MDX content files
- All `components/ui/` files
- All `lib/mdx.ts`, `lib/resources.ts`, `lib/life-mdx.ts`

## Phase Summary

| # | Phase | Effort | Blocker |
|---|---|---|---|
| 01 | Infrastructure | 3h | None — do first |
| 02 | Translation files | 4h | Phase 01 |
| 03 | Layout & nav | 2h | 01, 02 |
| 04 | Home page | 2h | 01, 02 |
| 05 | Learn AI pages | 2h | 01, 02 |
| 06 | Blog pages | 1.5h | 01, 02 |
| 07 | Other pages | 2.5h | 01, 02 |
| 08 | Email capture + SEO | 2h | 01, 02 |
| 09 | Course integration | 1h | 01 |
| **Total** | | **~20h** | |

Phases 03–09 can run in parallel after 01+02 complete.

## Critical Risks

1. **Middleware vs course page** (High): next-intl middleware intercepting `/courses/ai-automation-bim/en` would break the existing course page. Matcher must explicitly exclude `/courses/`. Verified and documented in Phase 01 + 09.

2. **`withNextIntl` + `withMDX` composition** (Medium): Order matters. Correct: `withMDX(withNextIntl(nextConfig))`. Wrong order causes plugin conflicts.

3. **`setRequestLocale()` missing** (Medium): Any page that omits `setRequestLocale(locale)` falls back to dynamic rendering — no build error, just a runtime perf issue. All pages must include it.

4. **`t.raw()` arrays** (Low): Using `t.raw('key') as Type[]` bypasses TypeScript safety. Acceptable trade-off. Alternative (verbose index access) is worse DX.

5. **`not-found.tsx` locale access** (Low): Special Next.js file doesn't receive `params`. Must use `useLocale()` from next-intl — works when file is inside `app/[locale]/`.

## Unresolved Questions

1. `components/email-capture/gift-selector.tsx` and `success-view.tsx` not read — gift option labels and success view structure unknown. Must read before implementing Phase 08.
2. `components/learning/path-card.tsx` not read — may have hardcoded labels affecting Phase 05.
3. `app/learn-ai/[path]/[module]/page.tsx` content not read — module data structure unknown; `generateStaticParams` logic TBD.
4. `app/learn-ai/ai-for-marketing/page.tsx` and `ai-for-work/page.tsx` not read — assumed stubs; confirm before Phase 05.
5. `components/life/` components not read — `TimelineNav`, `TimelineItem` may have hardcoded strings.
6. Whether `ResourceCard` in `components/resources/` has hardcoded type-label strings (e.g., "Video", "Template").
