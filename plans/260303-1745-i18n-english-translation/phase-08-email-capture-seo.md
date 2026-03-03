# Phase 08 — Email Capture & SEO Metadata

**Priority**: P2
**Status**: completed
**Effort**: ~2h
**Depends on**: Phase 01, Phase 02

## Context Links
- [Plan Overview](./plan.md)
- Files:
  - `components/email-capture/email-capture-popup.tsx`
  - `components/email-capture/gift-selector.tsx`
  - `components/email-capture/success-view.tsx`
  - `components/email-capture/email-capture-popup-client.tsx`
  - `components/seo/organization-schema.tsx`
  - `components/seo/person-schema.tsx`
  - `app/[locale]/layout.tsx`

## Overview

Two independent concerns in one phase (both small):

1. **Email capture popup** — all three sub-components have hardcoded Vietnamese strings. Replace with `useTranslations('emailCapture')`.
2. **SEO metadata** — root layout `generateMetadata`, JSON-LD schemas, and per-page metadata must be locale-aware.

## Part A — Email Capture Translation

All email capture components are already `'use client'` — use `useTranslations` directly.

### `components/email-capture/email-capture-popup.tsx`

Add `useTranslations('emailCapture')`.

Replacements:
- `"Nhận quà miễn phí!"` (DialogTitle) → `t('title')`
- `"Điền thông tin để nhận tài nguyên AI hữu ích"` (DialogDescription) → `t('description')`
- `"Tên của bạn"` (Label) → `t('nameLabel')`
- `"Nguyễn Văn A"` (placeholder) → `t('namePlaceholder')`
- `"Email"` (Label) → `t('emailLabel')`
- `"Đang xử lý..."` → `t('submitting')`
- `"Nhận quà ngay"` → `t('submitBtn')`
- `"Để sau"` → `t('maybeLater')`
- `<span className="sr-only">Close</span>` → keep English (sr-only, acceptable)
- `<span className="text-destructive">*</span>` — keep as symbol

### `components/email-capture/gift-selector.tsx`

Read this file first to confirm content. Likely has:
- A heading label for the gift selection section
- Gift option labels (names of resources)
- Validation error message

Add `useTranslations('emailCapture.giftSelector')`.

Replacements:
- Section heading → `t('title')`
- Description text → `t('description')`
- Validation error → `t('validationError')`
- Gift option labels — check if hardcoded; if so, move to `emailCapture.giftOptions` array in messages

### `components/email-capture/success-view.tsx`

Read this file first to confirm content. Likely has:
- Success title
- Message with email interpolation
- Close button

Add `useTranslations('emailCapture.success')`.

Replacements:
- Success title → `t('title')`
- Message with email → `t('message', { email: submittedEmail })`
- Close button → `t('closeBtn')`

### `components/email-capture/email-capture-popup-client.tsx`

No string changes needed — this is a thin wrapper with no visible text.

## Part B — SEO Metadata

### `app/[locale]/layout.tsx` — `generateMetadata`

Replace static metadata with locale-aware version:

```tsx
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'seo' })

  return {
    title: {
      default: t('defaultTitle'),
      template: t('titleTemplate'),
    },
    description: t('defaultDescription'),
    keywords: ['AI', 'artificial intelligence', 'học AI', 'AI cho người mới', 'marketing AI', 'Vietnamese AI education'],
    authors: [{ name: 'Hoàng' }],
    robots: 'index, follow',
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
      type: 'website',
      siteName: 'Hoàng AI Educator',
      images: [{ url: 'https://tranvanhoang.com/og-image.png', width: 1200, height: 630, alt: t('ogTitle') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('twitterDescription'),
    },
    alternates: {
      canonical: locale === 'vi' ? 'https://tranvanhoang.com' : 'https://tranvanhoang.com/en',
      languages: {
        vi: 'https://tranvanhoang.com',
        en: 'https://tranvanhoang.com/en',
      },
    },
  }
}
```

### `components/seo/organization-schema.tsx`

JSON-LD structured data. The `description` field is the only translatable string. Options:

**Option A (chosen — KISS)**: Keep schema static with Vietnamese description (it's a structured data hint for crawlers, bilingual not required). No changes needed.

**Option B**: Accept `locale` prop, switch description. Overkill for JSON-LD.

→ No change to `organization-schema.tsx`.

### `components/seo/person-schema.tsx`

Same reasoning — keep static. No change.

### Per-page `generateMetadata` — audit

Each page in `app/[locale]/` already has or needs `generateMetadata` using `getTranslations`. This is handled per-phase (03–07). Confirm all pages have locale-aware metadata:

| Page | Namespace | Phase |
|---|---|---|
| layout | `seo` | 08 (this phase) |
| home | `seo` | 08 (layout covers it) |
| about | `about.meta` | 07 |
| blog listing | `blog.meta` | 06 |
| blog post | dynamic post title | 06 |
| learn-ai | `learnAi.meta` | 05 |
| ai-for-beginners | `learnAi.beginner.meta` | 05 |
| free-gift | `freeGift.meta` | 07 |
| resources | `resources.meta` | 07 |
| life | `life.meta` | 07 |
| 404 | `notFound.meta` | 07 |

### `html` `lang` attribute

Already handled in `app/[locale]/layout.tsx` via `<html lang={locale}>`.

### `hreflang` alternates

For pages with translated slugs, include both language variants in `alternates.languages`. Pattern:
```tsx
alternates: {
  canonical: locale === 'vi'
    ? 'https://tranvanhoang.com/tai-nguyen'
    : 'https://tranvanhoang.com/en/resources',
  languages: {
    vi: 'https://tranvanhoang.com/tai-nguyen',
    en: 'https://tranvanhoang.com/en/resources',
  },
}
```

Add this pattern to the resources page `generateMetadata` (handled in Phase 07 but noted here for completeness).

## Additional Messages to Add

Check `gift-selector.tsx` and `success-view.tsx` source before writing messages — gift option names may need to be added to `emailCapture.giftOptions` array.

## Todo

- [ ] Read `gift-selector.tsx` — extract all hardcoded strings
- [ ] Read `success-view.tsx` — extract all hardcoded strings
- [ ] Update `email-capture-popup.tsx` — `useTranslations('emailCapture')`
- [ ] Update `gift-selector.tsx` — `useTranslations('emailCapture.giftSelector')`
- [ ] Update `success-view.tsx` — `useTranslations('emailCapture.success')`
- [ ] Update `app/[locale]/layout.tsx` `generateMetadata` — locale-aware via `getTranslations('seo')`
- [ ] Add gift option labels to `emailCapture` namespace in both message files (after reading gift-selector)
- [ ] Verify `<html lang={locale}>` in layout
- [ ] Add `hreflang` alternates to resources page metadata

## Success Criteria

- Email capture popup shows English strings at `/en/*`
- Gift selector options translated
- Success view message translated with correct email interpolation
- Root layout `generateMetadata` returns locale-correct title/description/OG
- `<html lang="en">` set for English pages
- `hreflang` links present in page `<head>` for both locales

## Risk Assessment

- **`gift-selector.tsx` not yet read**: Must read before implementing — gift options may be complex (icons, descriptions). Plan assumes simple label strings.
- **`success-view.tsx` not yet read**: Same caveat.
- **Email interpolation**: `t('message', { email })` requires `{email}` placeholder in JSON — ensure message file uses `{email}` not `{{email}}` (next-intl uses single braces).
- **JSON-LD locale**: Keeping JSON-LD static (Vietnamese) is acceptable for SEO — search engines don't require bilingual structured data.
