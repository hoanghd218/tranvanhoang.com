# Reusable image book viewer

2026-10-12 · Component implemented and verified; public REA release and realistic page flip tracked below.

User scope: reusable view-only component, public Cloudflare image URLs, commit and push. Extended scope: attach the actual REA playbook to public `/playbooks/rea` and deploy.

- [x] Typed page props with URL, alt text, dimensions and optional thumbnail.
- [x] Native React reader: cover/spreads on desktop, single pages on mobile.
- [x] Scoped keyboard, swipe, page selector, thumbnails, zoom, fullscreen.
- [x] Bounds, empty state, image retry and responsive resize.
- [x] Initial component CSS module and static reader; no backend.
- [x] Usage and Cloudflare integration documentation.
- [x] Lint, TypeScript and production build passed; independent browser tests and review completed.
- [ ] Commit and push only the viewer-related files, preserving unrelated working-tree changes.

## Public playbook catalog and REA release

- [ ] Verify ten completed TONY HOANG branded REA images, their reading order, dimensions and absence of Rocket logo/R marks. Keep original assets intact.
- [ ] Prepare optimized full images and thumbnails into ignored local staging. Publish actual files to existing Cloudflare R2 media storage with immutable collection paths; reuse existing authenticated tooling and public `media.ainexus.vn` origin. No secrets committed.
- [ ] Verify all twenty public image URLs return valid image content before activating the REA manifest. Preserve unrelated existing product-media manifest and objects.
- [ ] Add typed catalog data for multiple playbooks with stable slug, title, description, cover and ordered public CDN page URLs. Add genuine REA entry with ten pages; no placeholder books or invented URLs.
- [ ] Add generic `app/[locale]/playbooks/[slug]/page.tsx` consuming the shared viewer. Resolve catalog entry server-side, generate metadata, 404 unknown slugs. Add catalog `/playbooks` route for discovery and reusable localized navigation entries where required.
- [ ] Keep public reader view-only and TONY HOANG branded. Avoid upload, account, payment and download UI.
- [ ] Validate lint, TypeScript/build and actual `/playbooks/rea` browser route on mobile/desktop: real CDN requests, all ten pages, spread bounds, keyboard/swipe, zoom/fullscreen and catalog links; verify missing slug 404.
- [ ] Review focused diff, stage only relevant code/data/documentation and push. Preserve unrelated dirty KDSPY and configuration changes.
- [ ] Deploy through existing project configuration, then verify public `/playbooks`, `/playbooks/rea` and image requests. Record actual production URL and deployment result; do not infer deployment success from push alone.

## Realistic page flip

User requires a visible book page curl rather than an immediate page replacement. Integrate StPageFlip directly through the `page-flip` package in HTML mode; no React wrapper.

- [ ] Inspect official StPageFlip API/source for HTML initialization, events, resizing and destruction. Add dependency through the pinned package manager and retain lockfile consistency.
- [ ] Isolate the imperative engine in a focused client adapter. Initialize after its real DOM pages mount, subscribe to current-page/orientation events, clean up listeners/engine on unmount and rebuild only when actual page data/layout require it. Avoid React and engine concurrently rearranging the same owned nodes.
- [ ] Preserve actual HTML images, useful alt text, loading/failure state and retry behavior. Retain accessible previous/next, page selection and thumbnail controls; update status and selected page from engine events. Scope keyboard navigation to the viewer and keep hidden/offscreen page content out of keyboard focus.
- [ ] Use cover/spreads on desktop and portrait single pages on mobile. Keep page aspect ratio and full-image containment, bound first/final page navigation, and retain current content across orientation changes.
- [ ] Route controls through animated flip methods for ordinary reading. Ensure mobile touch dragging triggers page curl without fighting vertical document scrolling or existing duplicate swipe handlers.
- [ ] Recalculate engine dimensions after container resize and fullscreen enter/exit. Keep zoom reading in the static viewer fallback so page transforms do not interfere with magnified pan/scroll. Preserve current page when entering/leaving zoom.
- [ ] Honor `prefers-reduced-motion` with static immediate navigation. Keep a working static reader if engine initialization fails and preserve empty/one-page behavior without unnecessary animation.
- [ ] Verify real animation visually on desktop and mobile; cover, forward/back through all ten pages, thumbnail jump, keyboard, drag, last-page bounds, fullscreen resize, zoom transitions, reduced motion, image error/retry and unmount/re-entry. Run lint, TypeScript/build and independent review before focused commit/push/deployment.
- [ ] Update viewer documentation to describe dependency, accessible fallback behavior and confirmed limitations. Verify deployed REA reader actually curls pages before reporting completion.

## Focused book reader layout

User requires only the book, its controls and a home link on detail reader pages.

- [ ] Add client `SiteChrome` slot using the current pathname; suppress website header/footer only on `/playbooks/[slug]` and `/en/playbooks/[slug]`. Preserve chrome on `/playbooks` catalog and all other website routes. Match exact route segments rather than a broad substring.
- [ ] Remove visible reader-page introduction and source attribution blocks. Retain a screen-reader-only `h1` for page identity and metadata.
- [ ] Add optional `homeHref` to the reusable viewer and compact navigation containing the home link plus book controls. Supply the locale-appropriate home destination from the page.
- [ ] Verify both locales: reader shows no global header/footer, catalog and regular pages retain them, home link navigates correctly, keyboard controls and page flip remain functional. Run lint/build and focused review before commit/push/deploy.

See test-report.md for existing static component browser evidence. Physical iOS/Safari gestures remain untested. Public release and page-flip integration require fresh route/CDN/browser verification.

Unresolved questions: none; stop only if ten authentic completed images or required Cloudflare/deployment authorization are unavailable.
