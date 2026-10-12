---
title: Consistent RoboLabs catalog and product experience
status: in-progress
priority: P1
---

# Goal
Extend the shipped black/orange homepage language to product catalog and product details. Learn reference Services/Process/Solutions anchors, separate Contact destination, and observed effects before adapting. Retain verified products and functional existing media, search and checkout.

## Existing integration points
- `components/editorial/home.tsx`: currently embeds `rl-header` and footer; extract/reuse focused chrome instead of duplicating.
- `components/layout/site-chrome.tsx`: suppresses editorial chrome on home and book reader only; extend suppression precisely for new dark product routes.
- `app/[locale]/products/page.tsx`: server catalog query parsing; keep category validation and 300-character search limit.
- `components/products/product-explorer.tsx`: URL-backed filtering/search and empty reset; preserve behavior.
- `components/products/product-card.tsx`: verified product visuals and localized detail links.
- `app/[locale]/products/[slug]/page.tsx`: static params, missing-product 404, real hero/tour/gallery/plans/install sections.
- `product-gallery.tsx`, `product-tour.tsx`, `extension-plans.tsx`: real screenshots, keyboard gallery, QR destinations and empty-plan contact fallback.
- `app/robolabs.css`: existing Satoshi, black panels, orange accents and dot mask.

## TODO
- [x] Inspect reference anchors, service layout and effects live. Differentiate in-page anchors from actual detail routes; use only effects actually observed.
- [x] Share reusable dark header/footer across home/catalog/details. Inner pages must link home anchors with full locale-aware homepage URLs; Contact retains real social/contact destination.
- [x] Restyle catalog intro, category buttons, search, result count, cards and empty state using dark panels, subtle borders, orange highlights and reference spacing.
- [x] Restyle detail hero, sticky section nav, feature tour, gallery, pricing and installation consistently. Preserve demo labels, image containment and existing downloads.
- [x] Add lightweight hover/reveal/ambient effects as observed, with keyboard equivalents and reduced-motion handling. Avoid new animation dependencies.
- [x] Keep controls readable and accessible at mobile widths; prevent long product headings, category rows and gallery strips causing overflow.
- [x] Keep VI/EN chrome and controls localized. Do not fabricate translated product claims, pricing, customers, service offerings or unavailable inventory.
- [x] Run lint/build, then browser verify desktop/mobile home/catalog/all four detail pages, category query, search/no results/reset, anchors, gallery selection and contact/install CTAs.
- [x] Delegate final review and fix findings. Update docs/design-guidelines.md and README for expanded dark theme scope.

## Boundaries
No backend, checkout logic, product data or unrelated learning/blog/reader redesign. Scope new CSS to dark product wrappers; avoid broad `.editorial-home` overrides. Keep files under 200 lines by extracting focused shared components as needed.

## Completion criteria
Catalog and product pages visually belong to homepage; all existing real actions remain functional; no duplicate editorial header/footer; no mobile overflow; lint/build pass.

## Unresolved questions
None blocking. Reference has anchor navigation; do not invent separate reference service pages unless live inspection discovers them.

## Current validation
English-default routing implemented; direct HTTP checks passed for `/`, `/vi`, products, resource/gift translations and legacy `/en` redirects. Application lint passed with zero errors and the existing React Hook Form compiler warning. Combined build passed; production browser checks covered desktop/mobile, EN/VI filter preservation, menu, gallery next control, no overflow, and robotic covers. Final reviewer found no blocking issues. Contact CTAs now target LinkedIn.

## Additional requested scope
Add homepage Services, Process and Solutions sections and anchor navigation, alongside existing Skills/Apps/Books catalogs. Implemented and visually verified on the production preview, including the process cards and six-link responsive navigation.

Validation reports: `plans/reports/tester-261012-robolabs-final.md` and `plans/reports/code-reviewer-261012-robolabs-final.md`. New marketing/catalog/product/book controls are bilingual; existing source book pages, screenshot content and legacy editorial content retain their original language. Initial production deployment completed from commit `0515d14c`.

## Follow-up: button styling and visible motion

User reports missing reference-like button styling and motion after publication. Refine the implemented theme without claiming an exact copy of every reference effect.

- [x] Give dark-theme CTAs consistent beveled surfaces, restrained orange edge glow and clear keyboard focus.
- [x] Add shimmer sweep on hover/focus, directional arrow movement and a tactile pressed state; preserve real link/button semantics.
- [x] Add a technology marquee with readable labels and no extra announcements from duplicated decorative content.
- [x] Animate process illustrations in loops only while visible; stop offscreen work.
- [x] Provide a discoverable global pause/resume control covering ongoing marquee and illustration motion.
- [x] Honor `prefers-reduced-motion` with static presentation; avoid smooth scrolling, shimmer and transform motion under this preference.
- [x] Validate pause/resume and offscreen suspension in browser; review responsive, keyboard-focus and reduced-motion rules.
- [x] Run lint/build and review final motion behavior before publishing the follow-up.

Validation: production build, lint and TypeScript passed. Browser confirmed changing perimeter angle, infinite process loops, global pause/resume and offscreen suspension. Reviewer found no blockers.
