# next-intl v4 Research Report
**Date:** 2026-03-03 | **Version researched:** next-intl 4.8.3 (latest)

---

## TL;DR for This Project

**Critical blocker**: `output: "export"` (static export) means **no middleware runs**. This kills 3 features:
1. Automatic locale detection/redirect
2. `pathnames` localization (translated slugs like `/tai-nguyen` vs `/resources`)
3. `alternateLinks` SEO headers

**Viable path**: Use `[locale]` folder + `generateStaticParams` + `setRequestLocale` without middleware. Works well. No translated slugs — use redirect convention instead (see §5).

---

## 1. Installation & Setup

```bash
npm install next-intl
```

**next.config.ts** — wrap with plugin:
```ts
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
```

Plugin auto-discovers `i18n/request.ts` at project root (or `src/i18n/request.ts`).

**v4 breaking changes relevant here:**
- ESM-only (except plugin) — Next.js 16 handles this fine
- `NextIntlClientProvider` now inherits `messages` from server by default (no need to pass explicitly)
- Cookie behavior changed: locale cookies are session-only by default, only set on explicit locale switch
- `hasLocale()` helper for type-safe locale narrowing in `getRequestConfig`
- TypeScript 5 required (already satisfied)

---

## 2. App Router Integration — Folder Structure

```
app/
├── [locale]/           ← all pages move here
│   ├── layout.tsx      ← setRequestLocale + NextIntlClientProvider
│   ├── page.tsx
│   ├── blog/
│   │   └── [category]/[slug]/page.tsx
│   ├── tai-nguyen/     ← Vietnamese slug (internal path)
│   │   └── page.tsx
│   └── about/
│       └── page.tsx
├── not-found.tsx       ← stays outside [locale]
└── layout.tsx          ← root layout (lang attribute)

i18n/
├── routing.ts          ← defineRouting config
├── navigation.ts       ← createNavigation exports
└── request.ts          ← getRequestConfig

messages/
├── vi.json
└── en.json

middleware.ts           ← createMiddleware (root level)
```

**Key**: current `app/layout.tsx` becomes `app/[locale]/layout.tsx`. Root `app/layout.tsx` becomes a thin wrapper setting `lang` attribute.

---

## 3. Middleware

```ts
// middleware.ts (project root)
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)'
};
```

**BUT**: With `output: "export"`, middleware **never runs**. Next.js static export does not execute edge/server middleware. The matcher config is irrelevant.

---

## 4. Static Export Compatibility

### What works
- `[locale]` folder structure with `generateStaticParams`
- `setRequestLocale` for static rendering
- `useTranslations` / `getTranslations` in server and client components
- `NextIntlClientProvider` in layout
- All translation APIs

### What does NOT work with `output: "export"`
| Feature | Status |
|---------|--------|
| Middleware (locale detection) | Blocked — no middleware runs |
| `pathnames` (translated slugs) | Blocked — requires middleware rewrites |
| Automatic `alternateLinks` headers | Blocked — no middleware |
| Cookie-based locale persistence | Limited — `cookies()` unavailable at static build |
| Server Actions using `redirect()` | Blocked — no server |

### Recommended approach for static export
Set `localePrefix: 'always'` (every URL has locale prefix, e.g., `/vi/`, `/en/`).
Or: Vietnamese at `/` and English at `/en/*` by keeping `vi` as default with `localePrefix: 'as-needed'` — but this requires middleware to work properly for detection. Without middleware, you must handle it manually.

**Simplest working config for static export:**
```ts
// i18n/routing.ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['vi', 'en'],
  defaultLocale: 'vi',
  localePrefix: 'as-needed', // vi at /, en at /en/*
});
```

With `localePrefix: 'as-needed'` + static export: Vietnamese pages generate at `/`, English at `/en/`. No middleware needed for this URL structure since `generateStaticParams` drives the build.

```ts
// app/[locale]/layout.tsx
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
```

**Note**: Without middleware, locale detection from `accept-language` header doesn't happen. User always lands on Vietnamese. A client-side language switcher (like you already built) handles this.

---

## 5. Pathname Localization (Translated Slugs)

**`pathnames` config requires middleware rewrites — incompatible with `output: "export"`.**

### What `pathnames` would look like (middleware mode only):
```ts
// i18n/routing.ts — only works WITHOUT output: "export"
export const routing = defineRouting({
  locales: ['vi', 'en'],
  defaultLocale: 'vi',
  pathnames: {
    '/': '/',
    '/tai-nguyen': { en: '/resources' },
    '/blog/[category]/[slug]': { en: '/blog/[category]/[slug]' },
    '/learn-ai': { en: '/learn-ai' },
    '/about': { en: '/about' },
    '/life': { en: '/life' },
  }
});
```

### Workaround for static export — two options:

**Option A (Redirect)**: Keep internal path as Vietnamese slug. Add redirect in English:
- `/en/tai-nguyen` → `301` redirect to `/en/resources` (can be done via `next.config.ts` redirects, but static export doesn't support redirects either)
- Verdict: Not viable with `output: "export"`

**Option B (Duplicate paths)**: Create both `/[locale]/resources/` and `/[locale]/tai-nguyen/` pages, one pointing to the other. Too much duplication.

**Option C (Recommended — English uses Vietnamese slugs)**: Keep URL slugs in Vietnamese for all locales. English at `/en/tai-nguyen`, `/en/blog/...`. Simpler, no slug mapping needed. SEO impact is minimal since slugs can be in any language.

**Option D (Drop static export for main site)**: Use `output: "standalone"` or server deployment. Enables full next-intl features including `pathnames`. Worth considering if i18n is a core requirement.

---

## 6. Message Files Structure

```
messages/
├── vi.json       ← default/Vietnamese
└── en.json       ← English
```

**Namespace-based organization** (recommended):
```json
// messages/vi.json
{
  "Navigation": {
    "home": "Trang chủ",
    "blog": "Blog",
    "resources": "Tài nguyên"
  },
  "HomePage": {
    "title": "Học AI từ đầu",
    "subtitle": "Đơn giản, dễ hiểu"
  },
  "Blog": {
    "readMore": "Đọc tiếp",
    "publishedAt": "Đăng ngày {date}"
  }
}
```

```ts
// i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
```

Note `requestLocale` (async, v4 pattern) replaces deprecated synchronous `locale` param from v3.

---

## 7. Usage in Components

### Server Components (preferred)
```tsx
// Non-async server component
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('HomePage');
  return <h1>{t('title')}</h1>;
}
```

```tsx
// Async server component
import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations('HomePage');
  return <h1>{t('title')}</h1>;
}
```

### Client Components
Client components need `NextIntlClientProvider` as ancestor. In v4, it inherits messages from server automatically — just wrap in layout:

```tsx
// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';

export default function LocaleLayout({ children, params }) {
  return (
    <NextIntlClientProvider>
      {children}
    </NextIntlClientProvider>
  );
}
```

Then in any client component:
```tsx
'use client';
import { useTranslations } from 'next-intl';

export function LanguageSwitcher() {
  const t = useTranslations('Navigation');
  return <button>{t('switchLanguage')}</button>;
}
```

**Performance tip**: Pass only needed namespace slices to client components via props from server components.

---

## 8. Metadata Localization

```tsx
// app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: locale === 'vi' ? 'https://tranvanhoang.com' : `https://tranvanhoang.com/${locale}`,
      languages: {
        'vi': 'https://tranvanhoang.com',
        'en': 'https://tranvanhoang.com/en',
        'x-default': 'https://tranvanhoang.com',
      }
    }
  };
}
```

**Note**: Pass explicit `locale` to `getTranslations` in metadata (not via hook) to keep static rendering eligible.

---

## 9. Dynamic Routes with Localization

```tsx
// app/[locale]/blog/[category]/[slug]/page.tsx
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export function generateStaticParams() {
  const locales = routing.locales;
  const posts = getAllPosts(); // existing lib/mdx.ts function

  return locales.flatMap(locale =>
    posts.map(post => ({
      locale,
      category: post.category,
      slug: post.slug,
    }))
  );
}

export default async function BlogPost({ params }) {
  const { locale, category, slug } = await params;
  setRequestLocale(locale); // MUST call before any useTranslations

  const t = useTranslations('Blog');
  // ... render
}
```

**Critical**: `setRequestLocale(locale)` must be called in every layout/page that uses locale-aware APIs. This is a compile-time static rendering hint (uses React cache internally).

---

## Migration Plan for This Project

Current state: root `app/layout.tsx`, no `[locale]` segment, custom dictionary pattern in course page.

### Steps (high-level):
1. `npm install next-intl`
2. Add `createNextIntlPlugin` to `next.config.ts`
3. Create `i18n/routing.ts`, `i18n/request.ts`, `i18n/navigation.ts`
4. Create `messages/vi.json`, `messages/en.json`
5. Move `app/*` into `app/[locale]/` (except `app/not-found.tsx`, `app/globals.css`)
6. Update root `app/layout.tsx` → minimal shell; `app/[locale]/layout.tsx` → full layout with `NextIntlClientProvider`
7. Add `generateStaticParams` to `app/[locale]/layout.tsx`
8. Call `setRequestLocale(locale)` in each page
9. Replace hardcoded Vietnamese strings with `useTranslations()`
10. Update `next.config.ts` to keep `output: "export"` — no middleware needed for basic setup

**Existing course page**: The `[[...locale]]` pattern in `app/courses/ai-automation-bim/` can be refactored to use `app/[locale]/courses/ai-automation-bim/page.tsx` with next-intl's standard pattern, eliminating the custom dictionary system.

---

## Unresolved Questions

1. **`output: "export"` vs full server**: Is removing static export viable? Would unlock translated slugs + middleware locale detection. Hosting on Vercel would allow this.

2. **Vietnamese as default at `/`**: With `localePrefix: 'as-needed'`, does static export correctly generate the default locale at root `/`? The `[locale]` folder always has a locale param — need to verify that `generateStaticParams` returning `{locale: 'vi'}` maps to `/` not `/vi/`.

3. **Existing course page migration**: The current `app/courses/ai-automation-bim/[[...locale]]/` pattern works fine standalone. Should it be migrated to next-intl or kept as-is?

4. **Blog post translation**: Are blog MDX files being translated (separate `content/vi/` and `content/en/` directories) or only UI strings?

5. **`app/not-found.tsx`**: With `[locale]` structure, handling 404 for unknown locales requires `app/[locale]/not-found.tsx` — ensure the `notFound()` call in current code still works.

---

## Sources
- [next-intl App Router with i18n routing](https://next-intl.dev/docs/getting-started/app-router/with-i18n-routing)
- [next-intl Routing Configuration](https://next-intl.dev/docs/routing/configuration)
- [next-intl Middleware](https://next-intl.dev/docs/routing/middleware)
- [next-intl v4.0 Release Notes](https://next-intl.dev/blog/next-intl-4-0)
- [Server & Client Components](https://next-intl.dev/docs/environments/server-client-components)
- [Metadata & Route Handlers](https://next-intl.dev/docs/environments/actions-metadata-route-handlers)
- [Static Export issue tracker](https://github.com/amannn/next-intl/issues/334)
- [Static Export example repo](https://github.com/azu/next-intl-example)
