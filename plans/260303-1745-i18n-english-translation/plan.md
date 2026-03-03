---
title: "i18n English Translation (next-intl v4)"
description: "Add English as second locale to the Vietnamese personal website using next-intl v4 with as-needed prefix strategy"
status: completed
priority: P1
effort: 20h
branch: main
tags: [i18n, next-intl, translation, english]
created: 2026-03-03
completed: 2026-03-03
---

# i18n English Translation Plan

## Overview

Add English locale to tranvanhoang.com using `next-intl` v4. Vietnamese stays at `/` (default, no prefix). English at `/en/*`. UI strings only — MDX blog/life content remains Vietnamese.

## Route Mapping

| Vietnamese | English |
|---|---|
| `/` | `/en` |
| `/about` | `/en/about` |
| `/blog` | `/en/blog` |
| `/blog/[category]/[slug]` | `/en/blog/[category]/[slug]` |
| `/learn-ai` | `/en/learn-ai` |
| `/learn-ai/ai-for-beginners` | `/en/learn-ai/ai-for-beginners` |
| `/learn-ai/ai-for-marketing` | `/en/learn-ai/ai-for-marketing` |
| `/learn-ai/ai-for-work` | `/en/learn-ai/ai-for-work` |
| `/tai-nguyen` | `/en/resources` |
| `/free-gift` | `/en/free-gift` |
| `/life` | `/en/life` |
| `/courses/ai-automation-bim` | `/en/courses/ai-automation-bim` |

## Phases

| Phase | Description | Status | Est. |
|---|---|---|---|
| [01](./phase-01-infrastructure.md) | next-intl install, config, middleware, [locale] folder restructure | completed | 3h |
| [02](./phase-02-translation-files.md) | Create vi.json + en.json message files | completed | 4h |
| [03](./phase-03-layout-navigation.md) | Header, Footer, navigation translation | completed | 2h |
| [04](./phase-04-home-page.md) | Home page sections translation | completed | 2h |
| [05](./phase-05-learn-ai-pages.md) | Learn AI pages + components translation | completed | 2h |
| [06](./phase-06-blog-pages.md) | Blog listing + post pages translation | completed | 1.5h |
| [07](./phase-07-other-pages.md) | About, free-gift, resources, life, 404 | completed | 2.5h |
| [08](./phase-08-email-seo.md) | Email capture popup + SEO metadata | completed | 2h |
| [09](./phase-09-course-integration.md) | Integrate existing course i18n with next-intl | completed | 1h |

## Key Decisions

- **Framework**: next-intl v4 (latest)
- **Strategy**: `localePrefix: 'as-needed'` — vi at `/`, en at `/en/*`
- **Translated slugs**: `/tai-nguyen` → `/en/resources` (only non-English slug)
- **MDX content**: No translation — blog/life stays Vietnamese for both locales
- **Static rendering**: Use `setRequestLocale()` in all page components
- **Message files**: Split by namespace (common, home, learn-ai, blog, etc.)
- **Existing course page**: Replace hand-rolled dict with next-intl, keep `[[...locale]]` pattern for backward compat

## Key Dependencies

- `next-intl` v4 not yet in package.json — must install
- All app routes must move into `app/[locale]/` folder structure
- `middleware.ts` must be created at project root
- `i18n/routing.ts` and `i18n/request.ts` config files needed
- `NextIntlClientProvider` wraps layout — auto-inherits in v4
