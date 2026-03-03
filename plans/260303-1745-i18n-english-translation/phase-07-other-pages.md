# Phase 07 — Other Pages Translation

**Priority**: P2
**Status**: completed
**Effort**: ~2.5h
**Depends on**: Phase 01, Phase 02

## Context Links
- [Plan Overview](./plan.md)
- Files:
  - `app/[locale]/about/page.tsx`
  - `app/[locale]/free-gift/page.tsx`
  - `app/[locale]/tai-nguyen/page.tsx` (vi) + `app/[locale]/resources/page.tsx` (en redirect or shared)
  - `app/[locale]/life/page.tsx`
  - `app/[locale]/life/[slug]/page.tsx`
  - `app/[locale]/not-found.tsx`

## Overview

Translate the about, free-gift, resources, life, and 404 pages. Most are server components with dense hardcoded Vietnamese strings. The resources page has a special routing concern: `/tai-nguyen` for vi, `/resources` for en — handled by next-intl `pathnames` config, so only one page component is needed.

## Resources Page Routing

With `pathnames` in `i18n/routing.ts`:
```ts
'/tai-nguyen': { vi: '/tai-nguyen', en: '/resources' }
```

next-intl serves the **same** `app/[locale]/tai-nguyen/page.tsx` component for both `/tai-nguyen` (vi) and `/en/resources` (en). No separate `resources/page.tsx` needed — the pathname translation is purely URL-level.

**Action**: Keep the file at `app/[locale]/tai-nguyen/page.tsx`. Update all internal links that reference `/tai-nguyen` to use the internal path (next-intl resolves the correct external URL per locale).

## Files to Modify

### `app/[locale]/about/page.tsx`

Server component. Heavy string content.

Add `setRequestLocale(locale)` + `generateMetadata`:
```tsx
export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about.meta' })
  return { title: t('title'), description: t('description') }
}
```

Replace all hardcoded strings using `getTranslations({ locale, namespace: 'about' })`:

**Hero section**:
- `"Xin chào, tôi là"` → `t('hero.greeting')`
- Subheadline paragraph → `t('hero.subheadline')`

**Stats grid** (4 items): Move data to `about.stats` in messages, use `t.raw('stats')`.

**Story section**:
- `"Câu chuyện của tôi"` → `t('story.title')`
- 3 paragraphs → `t('story.p1')`, `t('story.p2')`, `t('story.p3')`

**Values section**:
- `"Giá trị tôi theo đuổi"` → `t('values.title')`
- 4 value cards → `t.raw('values.items') as ValueItem[]`

**Info section**:
- `"Một vài điều về tôi"` → `t('info.title')`
- `"Based in Vietnam"` → `t('info.location')` (already English but keep consistent)
- `"Teaching since 2020"` → `t('info.teachingSince')`
- `"Open for collaboration..."` → `t('info.openFor')`

**CTA section**:
- `"Cùng nhau học AI"` → `t('cta.headline')`
- Subheadline → `t('cta.subheadline')`
- `"Khám phá lộ trình học"` → `t('cta.ctaLearn')`
- `"Nhận Free Gift"` → `t('cta.ctaGift')`

Use `Link` from `@/i18n/navigation` for all internal links.

### `app/[locale]/free-gift/page.tsx`

Server component. Dense content.

Add `setRequestLocale(locale)` + `generateMetadata` with `freeGift.meta`.

Replace using `getTranslations({ locale, namespace: 'freeGift' })`:

- Badge text → `t('badge')`
- Headline parts → `t('headline')`, `t('headlineHighlight')`, `t('headlineSuffix')`
- `"hoàn toàn miễn phí"` → `t('headlineEmphasis')`
- Subheadline → `t.rich('subheadline', { strong: (c) => <strong>{c}</strong> })`
- `"Đã có 2,847+ người..."` → `t.rich('signupCount', { highlight: (c) => <span className="text-coral font-semibold">{c}</span> })`

**Gift items grid** (8 items): Keep as static data — these are emoji+label pairs that are UI decorations, not content. Translate only `title` and `desc` fields. Move to `freeGift.giftItems` in messages.

**Benefits section** (3 items): Move to `freeGift.benefits.items` array in messages.

**Included items** (5 items): Move to `freeGift.included.items` in messages.

- Section titles → `t('benefits.title')`, `t('included.title')`
- CTA section → `t('cta.headline')`, `t('cta.subheadline')`, `t('cta.ctaBtn')`
- Email placeholder → `t('cta.emailPlaceholder')`
- Privacy text → `t('cta.privacy')`, `t('cta.privacyLink')`
- Trust signals → `t('trust.free')`, `t('trust.noCard')`, `t('trust.viaEmail')`
- Back link → `t('backToLearn')`

### `app/[locale]/tai-nguyen/page.tsx`

Server component. Add `setRequestLocale(locale)` + `generateMetadata` with `resources.meta`.

Replace using `getTranslations({ locale, namespace: 'resources' })`:
- `"Tài nguyên"` + `"miễn phí"` → `t('headline')` + `t('headlineHighlight')`
- Subheadline → `t('subheadline')`
- `"Tất cả"` pill → `t('allResources')`
- Empty state → `t('noResources')`, `t('noResourcesHint')`
- Newsletter → `t('newsletter.headline')`, `t('newsletter.subheadline')`, `t('newsletter.btn')`

**Internal link fix**: The category filter links use `href="/tai-nguyen"` and `href="/tai-nguyen?category=..."`. Change to `href="/tai-nguyen"` with `Link` from `@/i18n/navigation` — next-intl will output `/tai-nguyen` for vi and `/en/resources` for en automatically.

**`ResourceCard` component**: Check `components/resources/resource-card.tsx` for hardcoded strings (e.g., type labels like "Video", "Template"). If found, pass translated labels from page or add `useTranslations` to the component.

### `app/[locale]/life/page.tsx`

Server component. Moderate changes.

Add `setRequestLocale(locale)` + `generateMetadata` with `life.meta`.

Replace using `getTranslations({ locale, namespace: 'life' })`:
- `LifeHero` props: `subtitle`, `title`, `description` → `t('hero.subtitle')`, `t('hero.title')`, `t('hero.description')`
- `pageQuote` → `t('quote')`
- Quote author → `t('quoteAuthor')`
- Empty state → `t('noStories')`
- Footer CTA → `t('footerCta.headline')`, `t('footerCta.subheadline')`, `t('footerCta.ctaBtn')`

**Life components** (`LifeHero`, `TimelineNav`, `TimelineItem`, `QuoteHighlight`): Check `components/life/` for hardcoded strings. `TimelineItem` likely receives all data as props — safe. `TimelineNav` may have hardcoded labels.

### `app/[locale]/life/[slug]/page.tsx`

Dynamic route. Update `generateStaticParams` to include locale:
```tsx
export async function generateStaticParams() {
  const locales = ['vi', 'en']
  const stories = getAllLifeStories()
  return locales.flatMap((locale) =>
    stories.map((story) => ({ locale, slug: story.slug }))
  )
}
```

Add `setRequestLocale(locale)`. Life story content is MDX — stays Vietnamese. Only UI chrome (breadcrumbs, back buttons, related stories labels) needs translation.

Add `generateMetadata` that reads locale for alternates:
```tsx
alternates: {
  languages: {
    vi: `https://tranvanhoang.com/life/${slug}`,
    en: `https://tranvanhoang.com/en/life/${slug}`,
  }
}
```

### `app/[locale]/not-found.tsx`

Simple component. Add `useTranslations('notFound')` (add `notFound` namespace to messages):

```json
"notFound": {
  "meta": { "title": "404 - Page not found | Hoàng" },
  "headline": "Page not found",
  "subheadline": "Trang không tìm thấy",
  "description": "Trang bạn đang tìm kiếm có thể đã bị xóa hoặc không tồn tại.",
  "goHome": "Trang chủ",
  "goBack": "Quay lại"
}
```

English:
```json
"notFound": {
  "meta": { "title": "404 - Page not found | Hoàng" },
  "headline": "Page not found",
  "description": "The page you're looking for may have been deleted or doesn't exist.",
  "goHome": "Home",
  "goBack": "Go back"
}
```

**Note**: `not-found.tsx` in Next.js App Router doesn't receive `params` — it's a special file. To get locale in `not-found.tsx`, use `useLocale()` from `next-intl` (client component) or the `unstable_setRequestLocale` workaround. Simpler approach: make it `'use client'` and use `useTranslations` + `useLocale`.

## Additional Messages to Add

Add `notFound` namespace to both `vi.json` and `en.json`.

## Todo

- [ ] Update `about/page.tsx` — full translation with `getTranslations`
- [ ] Update `free-gift/page.tsx` — full translation, move data arrays to messages
- [ ] Update `tai-nguyen/page.tsx` — `setRequestLocale`, `getTranslations`, fix internal links
- [ ] Update `life/page.tsx` — `setRequestLocale`, `getTranslations`, pass props to life components
- [ ] Update `life/[slug]/page.tsx` — locale in `generateStaticParams`, `setRequestLocale`, UI strings
- [ ] Update `not-found.tsx` — `useTranslations`, `useLocale`, client component
- [ ] Check `components/life/` components for hardcoded strings
- [ ] Check `components/resources/resource-card.tsx` for hardcoded strings
- [ ] Add `notFound` namespace to both message files
- [ ] Add `freeGift.giftItems` array to message files

## Success Criteria

- `/about` and `/en/about` show locale-appropriate text
- `/free-gift` and `/en/free-gift` show locale-appropriate text
- `/tai-nguyen` serves vi users, `/en/resources` serves en users — same component
- `/life` and `/en/life` show translated UI, Vietnamese story content
- 404 page shows translated strings
- All `generateStaticParams` include both locales

## Risk Assessment

- **`not-found.tsx` locale access**: Next.js special files don't receive `params`. Using `useLocale()` from next-intl requires the component to be within the `[locale]` layout tree — which it is when placed in `app/[locale]/not-found.tsx`. This should work correctly.
- **`free-gift` data density**: Many arrays to move to messages. Consider whether gift item `icon` emojis should also be in messages (no — keep emojis in component, only translate text labels).
- **`tai-nguyen` query params**: Category filter uses `?category=slug` query params which are not affected by locale routing. Internal links using next-intl `Link` with `href="/tai-nguyen?category=foo"` should work — the pathname `/tai-nguyen` is translated, query params pass through.
