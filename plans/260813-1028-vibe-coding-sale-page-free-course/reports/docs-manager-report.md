# Docs manager report

**Date:** 2026-08-13

## Updated

- `docs/project-roadmap.md`: added completed v3.1 bilingual course milestone, current Fathom status, cover/SEO/navigation deliverables, and release note.
- `docs/codebase-summary.md`: documented localized course routes, `lib/courses.ts`, `CourseVideoCard`, local cover asset, and Workshop 1/2 behavior.
- `docs/system-architecture.md`: replaced the obsolete hand-rolled course routing model with `app/[locale]` + next-intl; documented Fathom embed/fallback flow, sitemap, metadata, and data split.
- No application code changed. No separate project changelog added; the existing roadmap release history records this feature.

## Validation

- `git diff --check`: pass.
- Removed obsolete claims that `/courses` is excluded from i18n or uses a separate locale system.
- Cross-checked route, data, embed, cover, sitemap, and header/footer descriptions against current implementation.

## Unresolved questions

- Workshop 2 still needs a replacement public Fathom share URL; the supplied URL returned HTTP 404 on 2026-08-13.
