# Phase 06 — Blog Pages Translation

**Priority**: P2
**Status**: completed
**Effort**: ~1.5h
**Depends on**: Phase 01, Phase 02

## Context Links
- [Plan Overview](./plan.md)
- Files:
  - `app/[locale]/blog/page.tsx`
  - `app/[locale]/blog/[category]/[slug]/page.tsx`
  - `components/blog/post-card.tsx` (check for hardcoded strings)

## Overview

Blog content (MDX posts) stays Vietnamese — no translation. Only UI chrome is translated: headings, category filters, load-more button, newsletter CTA, share buttons, related posts heading, reading-time suffix, breadcrumbs.

Blog posts are displayed to both locales as-is. For English users visiting `/en/blog`, they see the same Vietnamese posts but with English UI. This is the agreed approach per the decisions in plan.md.

## Files to Modify

### `app/[locale]/blog/page.tsx`

Server component. Add `setRequestLocale(locale)` + locale-aware `generateMetadata`.

```tsx
import { setRequestLocale, getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blog.meta' })
  return {
    title: t('title'),
    description: t('description'),
    openGraph: { title: t('title'), description: t('description'), type: 'website' },
  }
}

export default async function BlogPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'blog' })
  // pass t to render...
}
```

Since this is a server component, use `getTranslations` (async, server-side) not `useTranslations`.

String replacements:
- `"Blog"` (h1) + `"AI & Marketing"` (gradient) → `t('hero.headline')` + `t('hero.headlineHighlight')`
- `"Chia sẻ kiến thức..."` → `t('hero.subheadline')`
- `"Tất cả"` category pill → `t('allPosts')`
- `"Hiện có {n} bài viết"` → `t('totalPosts', { count: allPosts.length })`
- `"Xem thêm bài viết"` → `t('loadMore')`
- `"Chưa có bài viết nào"` → `t('noPosts')`
- `"Hãy quay lại sau nhé!"` → `t('noPostsHint')`
- `"Chủ đề phổ biến"` → `t('popularTopics')`
- Newsletter section → `t('newsletter.headline')`, `t('newsletter.subheadline')`, `t('newsletter.btn')`
- Email placeholder → `t('common.emailPlaceholder')` (from `common` namespace via separate `getTranslations` call or pass down)

**Note on passing `t` to child client components**: Server component `BlogPage` cannot pass `t` directly to client components. Two options:
1. Inline all translated strings as props to client wrappers
2. Keep newsletter form as a separate client component that calls `useTranslations` itself

Preferred: Keep `NewsletterForm` as a client component using `useTranslations('blog.newsletter')`.

### `app/[locale]/blog/[category]/[slug]/page.tsx`

Server component. Moderate changes:

`generateMetadata` — already locale-agnostic (uses post metadata). Add locale to canonical/alternates:
```tsx
alternates: {
  canonical: `https://tranvanhoang.com/${locale === 'vi' ? '' : locale + '/'}blog/${category}/${slug}`,
  languages: {
    vi: `https://tranvanhoang.com/blog/${category}/${slug}`,
    en: `https://tranvanhoang.com/en/blog/${category}/${slug}`,
  }
}
```

`generateStaticParams` — update to include locale:
```tsx
export async function generateStaticParams() {
  const locales = ['vi', 'en']
  const categories = getAllCategories()
  const params: { locale: string; category: string; slug: string }[] = []
  for (const locale of locales) {
    for (const category of categories) {
      const posts = getPostsByCategory(category.slug)
      for (const post of posts) {
        params.push({ locale, category: post.category, slug: post.slug })
      }
    }
  }
  return params
}
```

Add `setRequestLocale(locale)` at top of page component.

String replacements using `getTranslations({ locale, namespace: 'blog' })`:
- Breadcrumb `"Blog"` — already English, keep
- `"{time} đọc"` → `t('post.readingTime', { time: post.readingTime })`
- `"Chia sẻ bài viết này"` → `t('post.sharePost')`
- `"Bài viết liên quan"` → `t('post.relatedPosts')`
- CTA `"Sẵn sàng học AI?"` → `t('post.cta.headline')`
- CTA subheadline → `t('post.cta.subheadline')`
- CTA button → `t('post.cta.ctaBtn')`
- "Bài viết không tồn tại" (metadata) → `t('post.notFound')`

BreadcrumbSchema items also use hardcoded `"Trang chủ"` and `"Blog"` — update to use translations.

### `components/blog/post-card.tsx`

Check this component for hardcoded strings (e.g., read-time suffix, category label). If found, add `useTranslations('blog')` (it's a client component or convert to accept translated props).

**Preferred**: Pass translated strings as props from the parent server component to avoid making `PostCard` depend on translations directly. If `PostCard` already receives `post` object with pre-formatted strings, no change needed.

## Todo

- [ ] Update `blog/page.tsx` — `setRequestLocale`, `getTranslations`, all string replacements
- [ ] Update `blog/[category]/[slug]/page.tsx` — `setRequestLocale`, locale in `generateStaticParams`, string replacements, alternates in metadata
- [ ] Check `components/blog/post-card.tsx` — identify and handle hardcoded strings
- [ ] Add translated `NewsletterForm` client component for blog (or reuse from footer)
- [ ] Verify `t('totalPosts', { count })` interpolation works in next-intl v4 (uses `{count}` in JSON)

## Success Criteria

- `/blog` and `/en/blog` show same posts with different UI language
- Reading time shows "X phút đọc" (vi) vs "X min read" (en)
- Share buttons label translated
- Related posts section heading translated
- Newsletter CTA translated
- `generateStaticParams` covers both locales × all post slugs
- No build errors from missing static params

## Risk Assessment

- **`generateStaticParams` size**: Doubling params (both locales) is fine — posts are few. No perf concern.
- **Server component `t` passing**: Server component can't pass `t` to client children. Use `getTranslations` in server component for inline strings; let client sub-components use `useTranslations`. Keep client components minimal.
- **Breadcrumb schema**: `BreadcrumbSchema` receives `items` as props with `name` strings — pass translated names from server component, no changes needed to the schema component itself.
