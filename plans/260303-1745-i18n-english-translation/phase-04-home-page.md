# Phase 04 — Home Page Translation

**Priority**: P2
**Status**: completed
**Effort**: ~2h
**Depends on**: Phase 01, Phase 02

## Context Links
- [Plan Overview](./plan.md)
- Files: `components/home/hero-section.tsx`, `components/home/audience-section.tsx`, `components/home/teaching-section.tsx`, `components/home/trust-section.tsx`, `components/home/cta-section.tsx`, `app/[locale]/page.tsx`

## Overview

Translate all 5 home page sections by replacing hardcoded Vietnamese strings with `useTranslations('home')`. Data arrays (audience cards, learning paths, stats) must be rebuilt from translation keys rather than static constants.

## Pattern: Translating Data Arrays

Components like `AudienceSection` and `TeachingSection` currently define data as module-level constants. With i18n, these must be derived from translations inside the component:

```tsx
// BEFORE — static constant
const audienceData = [
  { title: "Người chưa biết gì về AI", painPoints: [...], benefits: [...] },
]

// AFTER — derived from translations
export function AudienceSection() {
  const t = useTranslations('home.audience')
  const cards = t.raw('cards') as AudienceCard[]  // use t.raw() for arrays
  // or use index-based keys: t('cards.0.title'), t('cards.0.painPoints.0')
  ...
}
```

**Preferred approach**: Use `t.raw('cards')` to get the full typed array from the JSON. This avoids manually mapping indices and keeps component code clean.

## Files to Modify

### `components/home/hero-section.tsx`
Already `'use client'`. Add `useTranslations('home.hero')`.

Replacements:
- `"Hoàng chia sẻ cách dùng AI sao cho"` → `t('headline')`
- `"người chưa biết gì"` (TypewriterText) → `t('headlineHighlight')`
- `"cũng làm được"` → `t('headlineSuffix')`
- `"Không cần code..."` → `t('subheadline')`
- `"Nhận bộ AI cho người mới"` → `t('ctaPrimary')`
- `"Xem lộ trình học AI"` → `t('ctaSecondary')`
- `"AI cho mọi người"` → `t('aiForEveryone')`

### `components/home/audience-section.tsx`
Already `'use client'`. Add `useTranslations('home.audience')`.

Replacements:
- Remove static `audienceData` constant
- `"Tôi"` + `"giúp ai?"` → `t('sectionTitle')` + `t('sectionTitleHighlight')`
- `"Dù bạn ở đâu..."` → `t('sectionDesc')`
- `"Vấn đề gặp phải"` → `t('painLabel')`
- `"Lợi ích khi học"` → `t('benefitLabel')`
- Cards data → `t.raw('cards') as AudienceCard[]`

### `components/home/teaching-section.tsx`
Already `'use client'`. Add `useTranslations('home.teaching')`.

Replacements:
- Remove static `learningPaths` constant
- `"Tôi"` + `"dạy gì?"` → `t('sectionTitle')` + `t('sectionTitleHighlight')`
- `"Các lộ trình học..."` → `t('sectionDesc')`
- `"Xem chi tiết"` → `t('viewDetails')`
- `"Xem tất cả lộ trình →"` → `t('viewAll')`
- `"Nội dung chính"` → `t('mainContent')`
- Paths data → `t.raw('paths') as LearningPath[]`

**Note**: The `href` for each path card currently goes to `/learn/${path.slug}` — this must be updated to use the correct routes (`/learn-ai/ai-for-beginners` etc.) with `Link` from `@/i18n/navigation`.

### `components/home/trust-section.tsx`
Already `'use client'`. Add `useTranslations('home.trust')`.

Replacements:
- `"Tại sao"` + `"tin tôi?"` → `t('sectionTitle')` + `t('sectionTitleHighlight')`
- `"Tôi không chỉ dạy lý thuyết..."` → `t('sectionDesc')`
- `"Đã được đề cập trên / Hợp tác với"` → `t('featuredOn')`
- Static stats → `t.raw('stats') as StatItem[]`
- `brandLogos` array → keep as-is (these are brand names, not translated)

### `components/home/cta-section.tsx`
Already `'use client'`. Add `useTranslations('home.cta')`.

Replacements:
- `"Sẵn sàng để bắt đầu"` → `t('headline')`
- `"hành trình AI"` → `t('headlineHighlight')`
- `"của bạn?"` → `t('headlineSuffix')`
- `"Nhận ngay bộ quà tặng..."` → `t('subheadline')`
- `"Checklist 10 bước"` → `t('included1')`
- `"50+ Prompt templates"` → `t('included2')`
- `"Video hướng dẫn"` → `t('included3')`
- `"Nhận quà miễn phí ngay"` → `t('ctaBtn')`
- Trust signal paragraph → `t.rich('trustSignal', { strong: (c) => <span className="text-coral font-semibold">{c}</span> })`

### `app/[locale]/page.tsx`
Add `setRequestLocale(locale)` call. The page itself is a thin composition — no strings needed here.

```tsx
import { setRequestLocale } from 'next-intl/server'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AudienceSection />
      <TeachingSection />
      <TrustSection />
      <CTASection />
    </div>
  )
}
```

## Type Safety for t.raw()

Define local types within each component to cast `t.raw()` results:

```tsx
type AudienceCardData = {
  title: string
  painPoints: string[]
  benefits: string[]
}
// Usage:
const cards = t.raw('cards') as AudienceCardData[]
```

## Todo

- [ ] Update `hero-section.tsx` — `useTranslations('home.hero')`
- [ ] Update `audience-section.tsx` — remove static data, use `t.raw('cards')`
- [ ] Update `teaching-section.tsx` — remove static data, use `t.raw('paths')`, fix hrefs
- [ ] Update `trust-section.tsx` — remove static data, use `t.raw('stats')`
- [ ] Update `cta-section.tsx` — all string replacements, use `t.rich` for trust signal
- [ ] Update `app/[locale]/page.tsx` — add `setRequestLocale`
- [ ] Run `npm run build` to verify no compile errors

## Success Criteria

- Home page renders correctly in Vietnamese at `/`
- Home page renders correctly in English at `/en`
- All section strings change based on locale
- No hardcoded Vietnamese strings remain in home components
- TypewriterText still animates the correct (translated) highlight text

## Risk Assessment

- **`t.raw()` type safety**: `t.raw()` returns `unknown` — must cast with `as`. Acceptable trade-off vs verbose index-based access.
- **Array messages**: JSON arrays in messages files work with next-intl; verified in v4 docs.
- **`TeachingSection` hrefs**: The current paths link to `/learn/${path.slug}` which are broken routes — fix to `/learn-ai/ai-for-beginners` etc. while in this phase (already broken, not a regression).
