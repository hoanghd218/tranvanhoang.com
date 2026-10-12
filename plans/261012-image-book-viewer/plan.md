# Reusable image book viewer

2026-10-12 · Component implemented and verified; public REA publication in progress.

User scope: reusable view-only component, public Cloudflare image URLs, commit and push. Extended scope: attach the actual REA playbook to public `/playbooks/rea` and deploy.

- [x] Typed page props with URL, alt text, dimensions and optional thumbnail.
- [x] Native React reader: cover/spreads on desktop, single pages on mobile.
- [x] Scoped keyboard, swipe, page selector, thumbnails, zoom, fullscreen.
- [x] Bounds, empty state, image retry and responsive resize.
- [x] Component CSS module; no dependency or backend.
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

See test-report.md for existing component browser evidence. Physical iOS/Safari gestures remain untested. Public release requires fresh route/CDN verification.

Unresolved questions: none; stop only if ten authentic completed images or required Cloudflare/deployment authorization are unavailable.
