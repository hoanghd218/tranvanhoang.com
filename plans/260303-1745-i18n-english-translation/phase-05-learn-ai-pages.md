# Phase 05 — Learn AI Pages Translation

**Priority**: P2
**Status**: completed
**Effort**: ~2h
**Depends on**: Phase 01, Phase 02

## Context Links
- [Plan Overview](./plan.md)
- Files:
  - `app/[locale]/learn-ai/page.tsx`
  - `app/[locale]/learn-ai/_components/hero-section.tsx`
  - `app/[locale]/learn-ai/_components/stats-section.tsx`
  - `app/[locale]/learn-ai/_components/learning-paths-section.tsx`
  - `app/[locale]/learn-ai/_components/how-it-works-section.tsx`
  - `app/[locale]/learn-ai/_components/testimonials-section.tsx`
  - `app/[locale]/learn-ai/_components/cta-section.tsx`
  - `app/[locale]/learn-ai/ai-for-beginners/page.tsx`
  - `app/[locale]/learn-ai/ai-for-marketing/page.tsx`
  - `app/[locale]/learn-ai/ai-for-work/page.tsx`
  - `app/[locale]/learn-ai/[path]/[module]/page.tsx`

## Overview

Translate the Learn AI index page (6 components) and the 3 path detail pages. The `[path]/[module]` dynamic route needs `generateStaticParams` updated for locale.

## Files to Modify

### `app/[locale]/learn-ai/page.tsx`
Add `setRequestLocale(locale)`. Update `generateMetadata` using `getTranslations`.

```tsx
import { setRequestLocale, getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'learnAi.meta' })
  return { title: t('title'), description: t('description') }
}

export default async function LearnAIPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)
  return ( ... ) // unchanged composition
}
```

### `app/[locale]/learn-ai/_components/hero-section.tsx`
Currently `'use client'`. Add `useTranslations('learnAi.hero')`.

Replacements:
- `"Lộ trình"` → `t('headline')`
- `"học AI"` → `t('headlineHighlight')`
- `"cho mọi người"` → `t('headlineSuffix')`
- `"Dù bạn ở đâu..."` → `t('subheadline')`

### `app/[locale]/learn-ai/_components/stats-section.tsx`
Currently `'use client'`. Add `useTranslations('learnAi')`.

```tsx
const t = useTranslations('learnAi')
const stats = t.raw('stats') as Array<{ value: string; label: string }>
// Pass to StatsBanner
```

Remove static `stats` constant.

### `app/[locale]/learn-ai/_components/learning-paths-section.tsx`
Currently `'use client'`. Add `useTranslations('learnAi.paths')`.

Replacements:
- `"Chọn lộ trình phù hợp"` → `t('title')`
- `"Mỗi lộ trình được thiết kế..."` → `t('description')`

`LearningPathCards` component (in `components/learning/path-card.tsx`) likely also has hardcoded strings — check and translate in this phase.

### `app/[locale]/learn-ai/_components/how-it-works-section.tsx`
Currently `'use client'`. Add `useTranslations('learnAi.howItWorks')`.

Replacements:
- `"Cách thức học"` → `t('title')`
- `"Quy trình đơn giản, hiệu quả"` → `t('description')`
- Static `steps` array → `t.raw('steps') as Step[]`

Remove static `steps` constant.

### `app/[locale]/learn-ai/_components/testimonials-section.tsx`
Currently `'use client'`. Add `useTranslations('learnAi.testimonials')`.

Replacements:
- `"Học viên nói gì?"` → `t('title')`
- `"Những chia sẻ từ người đã tham gia"` → `t('description')`
- Static `testimonials` array → `t.raw('items') as Testimonial[]`

Remove static `testimonials` constant.

### `app/[locale]/learn-ai/_components/cta-section.tsx`
Currently `'use client'`. Add `useTranslations('learnAi.cta')`.

Replacements:
- `"Sẵn sàng"` → `t('headline')`
- `"bắt đầu?"` → `t('headlineHighlight')`
- `"Chọn lộ trình phù hợp..."` → `t('subheadline')`
- `"Xem lộ trình"` → `t('ctaBtn')`

### `app/[locale]/learn-ai/ai-for-beginners/page.tsx`
Server component. Add `setRequestLocale(locale)` + `getTranslations('learnAi.beginner')`.

Replacements (all hardcoded strings):
- Breadcrumb: `"Học AI"` → from `common` nav, `"Người mới"` → `t('breadcrumb')`
- Headline parts → `t('headline')`, `t('headlineHighlight')`
- Subheadline → `t('subheadline')`
- Stats: `"2-4 tuần"`, `"6 modules"`, `"5,000+ học viên"` → `t('duration')`, `t('modulesCount')`, `t('studentsCount')`
- Section titles → `t('whatYouLearn')`, `t('curriculum')`, `t('prerequisites')`, `t('ctaHeadline')` etc.
- CTA buttons → `t('ctaRegister')`, `t('ctaModule1')`

**Module/outcome/prerequisite data**: These arrays are hardcoded within the file. Move them into `learnAi.beginner.modules`, `learnAi.beginner.outcomes`, `learnAi.beginner.prerequisites` namespaces in messages files and use `t.raw()`.

Add `generateMetadata`:
```tsx
export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'learnAi.beginner.meta' })
  return { title: t('title'), description: t('description') }
}
```

### `app/[locale]/learn-ai/ai-for-marketing/page.tsx`
Currently a near-empty stub. Same pattern: add `setRequestLocale`, `generateMetadata` with `learnAi.marketing.meta`. Translate whatever content is there.

### `app/[locale]/learn-ai/ai-for-work/page.tsx`
Same as marketing — stub, minimal translation needed.

### `app/[locale]/learn-ai/[path]/[module]/page.tsx`
Dynamic route. Must update `generateStaticParams` to include locale:

```tsx
export async function generateStaticParams() {
  const locales = ['vi', 'en']
  // Return all locale × path × module combinations
  return locales.flatMap((locale) =>
    paths.flatMap((path) =>
      modules[path].map((module) => ({ locale, path, module }))
    )
  )
}
```

Add `setRequestLocale(locale)` at top of page component.

## Shared Learning Components to Check

These components in `components/learning/` may contain hardcoded strings:
- `path-card.tsx` — check for hardcoded labels
- `step-card.tsx` — check for hardcoded labels
- `stats-banner.tsx` — labels likely passed as props (safe)
- `testimonial-card.tsx` — content passed as props (safe)

If `path-card.tsx` has hardcoded strings, add `useTranslations` there too.

## Todo

- [ ] Update `learn-ai/page.tsx` — `setRequestLocale`, `generateMetadata`
- [ ] Update `_components/hero-section.tsx` — `useTranslations`
- [ ] Update `_components/stats-section.tsx` — `t.raw('stats')`
- [ ] Update `_components/learning-paths-section.tsx` — `useTranslations`
- [ ] Update `_components/how-it-works-section.tsx` — `t.raw('steps')`
- [ ] Update `_components/testimonials-section.tsx` — `t.raw('items')`
- [ ] Update `_components/cta-section.tsx` — `useTranslations`
- [ ] Update `ai-for-beginners/page.tsx` — full translation + data arrays to messages
- [ ] Update `ai-for-marketing/page.tsx` — `setRequestLocale` + `generateMetadata`
- [ ] Update `ai-for-work/page.tsx` — `setRequestLocale` + `generateMetadata`
- [ ] Update `[path]/[module]/page.tsx` — `generateStaticParams` locale support
- [ ] Check `components/learning/path-card.tsx` for hardcoded strings
- [ ] Add beginner module/outcome/prerequisite data to `messages/vi.json` + `messages/en.json`

## Success Criteria

- `/learn-ai` renders in Vietnamese at `/learn-ai`, English at `/en/learn-ai`
- All 6 section components show translated text
- `/learn-ai/ai-for-beginners` renders translated breadcrumb, headings, CTA
- `generateMetadata` returns locale-correct title/description
- Build succeeds — no missing static params for dynamic routes

## Risk Assessment

- **Beginner page data volume**: Modules array (6 items × 3 fields each) + outcomes (6 items) + prerequisites (5 items) = significant message file additions. Keep them in `learnAi.beginner` namespace.
- **`[path]/[module]` route**: If this page currently has no content/module data, `generateStaticParams` may return empty — acceptable for now, just ensure locale param is included.
