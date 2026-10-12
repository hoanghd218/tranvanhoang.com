---
title: RoboLabs inspired creator homepage
status: ready
priority: P1
---

# Goal
Recreate the reference site's black/orange palette, dot texture, compact navigation and visual rhythm for Tony Hoang, with explicit Skills, Apps and Sách discovery sections. Keep existing locale routing and working product/book destinations.

## Verified content
- `lib/products.ts`: Coloring Book AI Skill links to `/coloring-book-kdp`; RocketFlow, RocketListing, KDSPY AI link to `/products/{slug}`. Use existing local icons and covers.
- `lib/playbooks.ts`: Quy trình REA, 10 image pages; `/playbooks/rea` is a working book reader. Use first page as cover, `/playbooks` as all-books CTA.
- `lib/gifts.ts`: marketing Claude skill points to an actual external GitHub repository. It can supplement skill discovery if clearly credited.
- `lib/resources.ts` is sample content; do not promote its invented downloads/articles.

## TODO
- [ ] Inspect robolabs.so live UI at desktop and mobile; record hero, navigation, palette, spacing, card geometry and interaction patterns.
- [ ] Adapt existing `components/editorial/home.tsx` and supporting focused components; keep components under 200 lines.
- [ ] Implement homepage-owned chrome with black/orange colors and dot texture; reproduce reference hero composition using Tony's branding and owned content.
- [ ] Add distinct Skills, Apps, Sách sections and matching anchor navigation; use verified content above.
- [ ] Keep functional links, responsive menu, accessible controls, focus styles and reduced-motion support.
- [ ] Preserve locale-aware links with `localizedPath`; verify both root and `/en` render.
- [ ] Scope homepage-specific styles and chrome to avoid accidental product/readers/learning regressions; provide VI/EN labels.
- [ ] Run lint and build, inspect desktop/mobile screenshot, test navigation and every category CTA.
- [ ] Delegate final code review; fix findings; update README/design documentation to reflect shipped appearance.

## Integration notes
Homepage server route already supplies blog/life entries to EditorialHome. Existing shell lies in locale layout/shared layout components; inspect before changing navigation. No backend or package needed. Pricing must retain current real plan/contact behavior. Use the existing REA reader rather than manufacturing book inventory.

## Completion criteria
Reference-like visual composition, strong first viewport, three requested catalogs visible, no dead CTAs, mobile without overflow, lint/build pass.

## Unresolved questions
None blocking. Exact spacing/composition follows live reference inspection by implementation agent.
