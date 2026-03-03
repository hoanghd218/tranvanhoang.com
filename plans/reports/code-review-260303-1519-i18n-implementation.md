# Code Review: i18n (next-intl v4) Implementation

**Date:** 2026-03-03
**Scope:** Full i18n implementation — middleware, routing, layout, all page components, translation files
**Build status:** Passing, 27 static pages generated
**Translation key parity:** 403 keys in vi.json == 403 keys in en.json (no missing keys)

---

## Overall Assessment

The implementation is structurally sound. Routing config, middleware, layout, `NextIntlClientProvider`, `setRequestLocale`, and `generateMetadata` are wired correctly across all primary pages. Translation key coverage is complete. The main issues are: one fully un-translated page (`[path]/[module]/page.tsx`), a minor hardcoded string bypass in `free-gift/page.tsx`, a security-acceptable but noteworthy `dangerouslySetInnerHTML` usage, and a navigation path inconsistency in `life/page.tsx`.

---

## Critical Issues

None.

---

## High Priority

### 1. Module page is fully un-translated — hardcoded Vietnamese throughout

**File:** `app/[locale]/learn-ai/[path]/[module]/page.tsx`

This page uses raw `next/link` (not i18n-aware `Link`), does not call `setRequestLocale`, has no `getTranslations`, and contains hardcoded Vietnamese strings throughout:

```tsx
// Line 2 — plain next/link, not @/i18n/navigation
import Link from "next/link";

// Line 45 — hardcoded Vietnamese
<Link href="/learn-ai">Học AI</Link>

// Lines 66, 72, 76, 93, 97-98, 105, 121 — all Vietnamese hardcoded
<p>Nội dung module đang được phát triển. Hãy quay lại sau để xem chi tiết.</p>
<span>3-5 ngày học</span>
<span>5 bài học</span>
<h2>Nội dung đang được phát triển 🚧</h2>
// Line 98: mixed-language — contains a Chinese character (更新) likely a copy-paste error
<p>Module này đang trong quá trình hoàn thiện. Đăng ký email để nhận thông báo khi có更新.</p>
```

The `pathNames` lookup also returns untranslated Vietnamese for EN locale since it's a local static dict.

**Fix required:**
- Import `Link` from `@/i18n/navigation`
- Add `setRequestLocale` and `getTranslations` with a new translation namespace (e.g. `learnAiModule`)
- Add translation keys to `vi.json` / `en.json`
- Fix the `pathNames` dict to be locale-aware or use translated keys from message files
- Remove the corrupted Chinese character on line 98

---

### 2. `free-gift/page.tsx` bypasses translation for `registeredCount`

**File:** `app/[locale]/free-gift/page.tsx`, line 82-84

```tsx
<p className="text-sm text-muted-foreground mb-8">
  <span className="text-coral font-semibold">2,847+</span>{" "}
  {locale === "vi" ? "người đăng ký nhận" : "people have already signed up"}
</p>
```

The translation file already has `freeGift.registeredCount` defined. This inline ternary bypasses the i18n system. However, the `registeredCount` value uses a custom `<coral>` tag that has no renderer, so direct use also requires a custom handler. The simplest fix is to use the i18n key with a simple text-only version.

**Fix:**
```tsx
// Option A: use t() with a plain string (remove <coral> tag from i18n values)
<p className="text-sm text-muted-foreground mb-8">
  <span className="text-coral font-semibold">2,847+</span>{" "}
  {t("registeredCount")}
</p>

// Then update registeredCount in messages to NOT include the number/coral tag:
// "registeredCount": "người đăng ký nhận" (vi) / "people have already signed up" (en)
```

---

### 3. `life/page.tsx` CTA uses plain `<a>` instead of i18n-aware `Link`

**File:** `app/[locale]/life/page.tsx`, line 109-115

```tsx
<a
  href="/free-gift"
  className="..."
>
```

This bypasses locale-prefixed routing. When the user is on `/en/life`, this link goes to `/free-gift` (serves Vietnamese). Should use `<Link href="/free-gift">` from `@/i18n/navigation`.

---

## Medium Priority

### 4. `dangerouslySetInnerHTML` — `freeGift.heroSubtitle` translation

**File:** `app/[locale]/free-gift/page.tsx`, line 59-61

```tsx
<p
  className="text-lg text-muted-foreground mb-8"
  dangerouslySetInnerHTML={{ __html: t("heroSubtitle") }}
/>
```

The translation value contains `<strong>10 Prompt Templates</strong>`. The content comes from a controlled JSON file (not user input), so XSS risk is low. However, translators could inadvertently inject script tags in the future. The value is stable and not user-controlled, so this is acceptable as-is, but document the constraint.

**Better approach (if refactoring):** Use next-intl's rich text support:
```tsx
// In message: "heroSubtitle": "Get {strong} that have been tested..."
t.rich("heroSubtitle", { strong: (chunks) => <strong>{chunks}</strong> })
```

**Note:** `components/home/cta-section.tsx` uses `dangerouslySetInnerHTML` to render `ctaTrust` with a custom `<highlight>` → `<span>` regex replacement. This works correctly but has the same constraint — the regex is fragile if translation values change format.

**Note:** `courses/ai-automation-bim` page uses `dangerouslySetInnerHTML` for `solution.description` which contains `<strong class="text-foreground">` tags. This is in a separate i18n system (not next-intl), which is correct isolation — the `/courses` route has its own locale mechanism.

---

### 5. `app/[locale]/layout.tsx` — hardcoded "Skip to main content" string

**File:** `app/[locale]/layout.tsx`, line 112

```tsx
<a href="#main-content" className="...">
  Skip to main content
</a>
```

The `common.skipToContent` key exists in both `vi.json` and `en.json`. Should use:
```tsx
// Already imported getTranslations — add:
const tCommon = await getTranslations({ locale, namespace: "common" })
// Then:
{tCommon("skipToContent")}
```

---

### 6. `app/[locale]/not-found.tsx` — no locale param, no `setRequestLocale`

**File:** `app/[locale]/not-found.tsx`

`not-found.tsx` inside `[locale]` is special — Next.js does not pass route params to it. This means `setRequestLocale` cannot be called (no `params`). The `getTranslations("notFound")` call relies on the request locale being set by the middleware/layout which is correct. This is a known next-intl pattern for 404 pages. **No change needed.**

However, `href="javascript:history.back()"` on line 25 is a poor practice — use an `onClick` handler instead. This is a pre-existing issue, not introduced by i18n, but worth flagging.

---

### 7. Header and Footer use `href="/tai-nguyen"` for resources link

**File:** `components/layout/header.tsx` line 37, `components/layout/footer.tsx` line 106

```tsx
{ title: t("resources"), href: "/tai-nguyen" },
```

Both use the `Link` from `@/i18n/navigation`, so next-intl will correctly resolve `/tai-nguyen` → `/resources` for the EN locale based on the `pathnames` config in `routing.ts`. **This is correct behavior** — the internal path key is `/tai-nguyen`, and next-intl handles the EN → `/resources` rewrite automatically.

**No change needed**, but it's non-obvious; adding a comment would help maintainability.

---

### 8. `tai-nguyen/page.tsx` — category filter link uses plain string href

**File:** `app/[locale]/tai-nguyen/page.tsx`, line 59

```tsx
<Link
  href="/tai-nguyen"  // string literal, not typed pathname
  className="..."
>
```

This is using the i18n `Link` component, so locale resolution works. But the `NextLink` used for category filters (line 66-73) bypasses the i18n `Link`:
```tsx
<NextLink href={`/tai-nguyen?category=${category.slug}`} ...>
```

When in EN locale, `NextLink` doesn't locale-prefix. The URL will be `/tai-nguyen?category=...` instead of `/resources?category=...`. This is a functional bug for EN users — the filter link goes to the wrong localized URL.

**Fix:** Use the i18n `Link` with query params, or construct the URL with the locale-aware pathname.

---

## Low Priority

### 9. Sitemap doesn't include EN locale URLs

**File:** `app/[locale]/sitemap.ts`

Sitemap only lists VI URLs (no `/en/` prefix variants). For a bilingual site this means English pages are not indexed. Should include both locale variants for key pages, with `hreflang` metadata.

### 10. `generateStaticParams` in `blog/[category]/[slug]` doesn't include locale

**File:** `app/[locale]/blog/[category]/[slug]/page.tsx`, lines 51-67

```tsx
export async function generateStaticParams() {
  // Returns { category, slug } — missing locale dimension
  return params  // type: { category: string; slug: string }[]
}
```

Since this is inside `app/[locale]/`, the parent layout's `generateStaticParams` covers locale. However, next.js docs recommend that nested `generateStaticParams` return objects matching the full combined params shape to ensure all locale/category/slug combinations are generated. The build reportedly passes with 27 pages, so next-intl's static export integration may handle this — monitor if EN blog post pages are actually generated.

### 11. `alternates.canonical` in layout metadata is a single hardcoded URL

**File:** `app/[locale]/layout.tsx`, line 73-75

```tsx
alternates: {
  canonical: "https://tranvanhoang.com",
},
```

This sets the same canonical for both `/` (vi) and `/en` — the EN root should have `canonical: "https://tranvanhoang.com/en"`. Not critical (vi is default), but can confuse search engines.

---

## Security Assessment

| Area | Status |
|------|--------|
| `dangerouslySetInnerHTML` | Acceptable — all content from controlled translation files, no user input |
| `javascript:` href in not-found | Pre-existing issue, CSP-unsafe but not i18n-related |
| Locale validation in layout | Correct — `hasLocale()` with `notFound()` |
| Middleware excludes `/courses` | Correct — courses has own auth/locale system |
| No secrets in translation files | Confirmed |

---

## Edge Cases Found by Scout

1. **EN locale `/resources` URL**: The `pathnames` config correctly maps `/tai-nguyen` → `/resources` for EN. The middleware properly routes it. But the `tai-nguyen` page's filter links (`NextLink` with raw string hrefs) will break locale routing for EN users filtering by category.

2. **Module page in EN**: Currently the only page that will render 100% Vietnamese regardless of locale — if linked from EN, users see Vietnamese content (significant UX gap).

3. **`t.raw()` usage**: `cta-section.tsx` and `audience-section.tsx` use `t.raw("trustStats")` and `t.raw("audienceCards")` to get arrays. This is valid in next-intl when the value is an array, but skips type safety. If the array structure changes in one locale file without updating the other, it silently fails.

4. **NotFound locale**: `app/[locale]/not-found.tsx` uses `getTranslations("notFound")` without a locale param. In static export mode, this may default to the `defaultLocale` ("vi") if the request locale isn't properly set. Testing EN 404 page is recommended.

---

## Positive Observations

- Translation key parity is perfect: 403 keys in both `vi.json` and `en.json`, zero missing
- `i18n/routing.ts` properly uses `localePrefix: "as-needed"` keeping VI URLs clean
- `middleware.ts` correctly excludes `/courses/*` from next-intl processing
- All primary pages have `setRequestLocale` and `generateMetadata` with locale-aware translations
- Locale switcher uses next-intl's `router.replace` with `{ locale }` option — correct pattern
- `NextIntlClientProvider` wraps the entire app in locale layout — all client components work
- `hasLocale` validation in layout with `notFound()` redirect — prevents invalid locale URLs
- Separate i18n system in `/courses` page (not mixing with next-intl) — clean isolation
- `lib/life-mdx.ts` uses `dateLocale` computed from `locale` param — correct locale-aware date formatting

---

## Recommended Actions (Priority Order)

1. **[HIGH]** Fix `app/[locale]/learn-ai/[path]/[module]/page.tsx`: Add i18n Link, setRequestLocale, getTranslations, add translation keys, remove Chinese character on line 98
2. **[HIGH]** Fix `app/[locale]/life/page.tsx` CTA: Replace `<a href="/free-gift">` with `<Link href="/free-gift">` from `@/i18n/navigation`
3. **[MEDIUM]** Fix `app/[locale]/tai-nguyen/page.tsx` category filter links: Replace `NextLink` with i18n `Link` for locale-correct URLs
4. **[MEDIUM]** Fix `app/[locale]/free-gift/page.tsx` line 82-84: Use `t("registeredCount")` instead of inline ternary
5. **[MEDIUM]** Fix `app/[locale]/layout.tsx` line 112: Use `tCommon("skipToContent")` for skip link
6. **[LOW]** Update sitemap to include `/en/*` URLs with hreflang
7. **[LOW]** Fix canonical URL in layout metadata for EN locale
8. **[LOW]** Replace `javascript:history.back()` in `not-found.tsx` with client-side `onClick` handler

---

## Unresolved Questions

1. Are EN blog post static pages (`/en/blog/category/slug`) actually being generated? The `generateStaticParams` in `blog/[category]/[slug]/page.tsx` doesn't explicitly return locale. Recommend verifying the `.next/server/app/[locale]` build output.
2. The `freeGift.registeredCount` translation value contains `<coral>` custom tags with no renderer anywhere in the app — is this intentional (for future rich text support) or can it be simplified?
3. Should the module page (`[path]/[module]`) remain as a "coming soon" placeholder or is full i18n planned? If placeholder-only, at minimum remove Vietnamese hardcoding.
