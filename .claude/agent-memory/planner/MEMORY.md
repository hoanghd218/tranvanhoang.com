# Planner Agent Memory

## Project: tranvanhoang.com

### Stack
- Next.js 16 App Router, TypeScript 5, Tailwind CSS 4
- No `output: 'export'` — middleware works fine
- `next.config.ts` uses `withMDX` wrapper — any new plugins wrap as: `withMDX(withNextIntl(nextConfig))`
- No test runner configured — verify with `npm run build`

### Codebase Patterns
- All home section components are `'use client'` — `useTranslations` works directly
- Server page components use `getTranslations` (async), client components use `useTranslations`
- `lib/navigation.ts` exports static nav arrays with hardcoded Vietnamese titles
- Data arrays in components (stats, cards, paths) are module-level constants — with i18n, move to messages + use `t.raw()`
- Pages are thin compositions; sections/components hold all content strings
- `components/layout/header.tsx` and `footer.tsx` are `'use client'`

### Key File Locations
- App pages: `app/` (moving to `app/[locale]/` for i18n)
- Home sections: `components/home/`
- Layout: `components/layout/header.tsx`, `components/layout/footer.tsx`
- Navigation data: `lib/navigation.ts`
- Email capture: `components/email-capture/`
- SEO schemas: `components/seo/`
- Course page (own i18n): `app/courses/ai-automation-bim/[[...locale]]/`

### i18n Plan (active)
- Plan: `plans/260303-1745-i18n-english-translation/`
- Framework: next-intl v4, `localePrefix: 'as-needed'`
- vi at `/`, en at `/en/*`
- Only non-English slug: `/tai-nguyen` → `/en/resources`
- Messages: `messages/vi.json` + `messages/en.json`, split by namespace
- Course page stays outside `[locale]` — middleware must exclude `/courses/`
- Phases 01+02 are blockers; 03–09 can run in parallel after

### Planning Conventions
- Phase files: `phase-XX-slug.md` in plan dir
- Report: `plans/reports/planner-{date}-{slug}.md`
- Always run `node .claude/scripts/set-active-plan.cjs {plan-dir}` after creating plan
- Read actual source files before writing plans — avoid assumptions about content
- Note unresolved questions at end of reports
