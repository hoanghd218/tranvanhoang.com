# Phase 01 — Infrastructure Setup

**Priority**: P1 (blocker for all other phases)
**Status**: completed
**Effort**: ~3h

## Context Links
- [Plan Overview](./plan.md)
- next-intl v4 docs: https://next-intl.dev/docs/getting-started/app-router

## Overview

Install next-intl v4, create routing config + middleware, restructure `app/` into `app/[locale]/`, and wire up the root layout with `NextIntlClientProvider`.

## Requirements

- next-intl v4 installed
- `localePrefix: 'as-needed'` — vi serves at `/`, en at `/en/*`
- Translated pathnames: `/tai-nguyen` → `/en/resources`
- Static rendering eligible (no dynamic locale detection at runtime per page)
- Existing `app/courses/ai-automation-bim/` stays outside `[locale]` folder (handles its own locale via `[[...locale]]`)

## Architecture

```
project root
├── middleware.ts                   # next-intl routing middleware
├── i18n/
│   ├── routing.ts                  # locales, defaultLocale, pathnames config
│   ├── request.ts                  # getRequestConfig (loads messages)
│   └── navigation.ts               # typed Link, useRouter, usePathname, redirect
├── messages/
│   ├── vi.json                     # Vietnamese strings (root)
│   └── en.json                     # English strings
└── app/
    ├── [locale]/                   # NEW — wraps all translatable routes
    │   ├── layout.tsx              # locale-aware root layout
    │   ├── page.tsx                # home
    │   ├── about/page.tsx
    │   ├── blog/...
    │   ├── learn-ai/...
    │   ├── free-gift/page.tsx
    │   ├── life/...
    │   ├── tai-nguyen/page.tsx     # vi only slug
    │   └── resources/page.tsx      # en only slug (redirect for vi)
    └── courses/                    # stays at root (own i18n)
```

## Files to Create

- `middleware.ts` — route matching + locale negotiation
- `i18n/routing.ts` — canonical routing config
- `i18n/request.ts` — message loader per request
- `i18n/navigation.ts` — typed navigation exports

## Files to Move/Restructure

All files currently in `app/` (except `courses/`) move into `app/[locale]/`:
- `app/layout.tsx` → `app/[locale]/layout.tsx` (new locale-aware version)
- `app/page.tsx` → `app/[locale]/page.tsx`
- `app/about/page.tsx` → `app/[locale]/about/page.tsx`
- `app/blog/**` → `app/[locale]/blog/**`
- `app/learn-ai/**` → `app/[locale]/learn-ai/**`
- `app/free-gift/page.tsx` → `app/[locale]/free-gift/page.tsx`
- `app/tai-nguyen/page.tsx` → `app/[locale]/tai-nguyen/page.tsx`
- `app/life/**` → `app/[locale]/life/**`
- `app/not-found.tsx` → `app/[locale]/not-found.tsx`
- Keep `app/globals.css` + `app/layout.tsx` (root) as thin shell (no locale)

## Implementation Steps

### 1. Install next-intl

```bash
npm install next-intl
```

### 2. Create `i18n/routing.ts`

```ts
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['vi', 'en'],
  defaultLocale: 'vi',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/about': '/about',
    '/blog': '/blog',
    '/blog/[category]/[slug]': '/blog/[category]/[slug]',
    '/learn-ai': '/learn-ai',
    '/learn-ai/ai-for-beginners': '/learn-ai/ai-for-beginners',
    '/learn-ai/ai-for-marketing': '/learn-ai/ai-for-marketing',
    '/learn-ai/ai-for-work': '/learn-ai/ai-for-work',
    '/tai-nguyen': {
      vi: '/tai-nguyen',
      en: '/resources',
    },
    '/free-gift': '/free-gift',
    '/life': '/life',
    '/life/[slug]': '/life/[slug]',
    '/courses/ai-automation-bim': '/courses/ai-automation-bim',
  },
});

export type Locale = (typeof routing.locales)[number];
```

### 3. Create `i18n/request.ts`

```ts
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as 'vi' | 'en')) {
    locale = routing.defaultLocale;
  }
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
```

### 4. Create `i18n/navigation.ts`

```ts
import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
```

### 5. Create `middleware.ts` (project root)

```ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)',
    '/([\\w-]+)?/courses/(.*)',
  ],
};
```

**Note**: The matcher must exclude `courses/` paths handled by the hand-rolled i18n. The courses page uses `[[...locale]]` pattern at `/courses/ai-automation-bim` and `/courses/ai-automation-bim/en` — these should not conflict with next-intl middleware. Refine matcher to skip `/courses/`.

### 6. Update `next.config.ts`

```ts
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');
// wrap withMDX(withNextIntl(nextConfig))
```

### 7. Create `app/[locale]/layout.tsx`

```tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
// ... fonts, Header, Footer, etc.

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {/* Header, Footer, etc. */}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

### 8. Root `app/layout.tsx` — thin shell

Keep minimal root layout (just fonts + globals.css) for paths outside `[locale]` (e.g., courses).

### 9. Add `setRequestLocale(locale)` to every page

In each page file inside `app/[locale]/`, add at the top of the page component or in generateStaticParams:

```ts
import { setRequestLocale } from 'next-intl/server';
// In page component:
setRequestLocale(locale);
```

## Todo

- [ ] `npm install next-intl`
- [ ] Create `i18n/routing.ts`
- [ ] Create `i18n/request.ts`
- [ ] Create `i18n/navigation.ts`
- [ ] Create `middleware.ts`
- [ ] Update `next.config.ts` with `withNextIntl`
- [ ] Create `app/[locale]/` directory structure
- [ ] Create `app/[locale]/layout.tsx`
- [ ] Move all app routes into `app/[locale]/`
- [ ] Update root `app/layout.tsx` as thin shell
- [ ] Verify build compiles with `npm run build`

## Success Criteria

- `npm run build` succeeds with no errors
- `/` serves Vietnamese home page
- `/en` serves English home page (strings may still be Vietnamese until Phase 02–08)
- `/en/resources` redirects to correct page, `/tai-nguyen` works for vi
- `/courses/ai-automation-bim` and `/courses/ai-automation-bim/en` unaffected

## Risk Assessment

- **Route conflicts**: The `[[...locale]]` course page catches `/courses/ai-automation-bim/en` — must confirm middleware doesn't intercept this. Middleware matcher should exclude `/courses/`.
- **Static rendering**: `setRequestLocale()` must be called before any `useTranslations()` or async data fetching in pages. Missing calls = dynamic rendering fallback.
- **next.config.ts**: Combining `withNextIntl` + `withMDX` — both are wrapper functions; call order: `withMDX(withNextIntl(nextConfig))`.

## Security Considerations

- Middleware only handles locale routing — no auth logic
- `notFound()` for invalid locales prevents enumeration of internal routes
