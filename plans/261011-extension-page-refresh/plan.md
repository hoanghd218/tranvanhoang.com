# Extension page visual refresh

Status: ready for implementation. User authorized update, commit and push.

## Verified inputs

- Documentation source still has 67 images: RocketFlow 36, RocketListing 17, RocketSpy 14. Compared source filenames and SHA-256 bytes against current staging: no additions or changed PNGs.
- `artifacts/rocketflow-studio-2026-10-11` repeats screenshots already present in documentation source.
- `store/*/screenshots` and `store/*/promo` add older promotional layouts with baked-in text and saturated blue/purple backgrounds. Keep raw documentation UI as preferred visual source.
- Existing catalog/detail hero uses a generic logo/orbit visual; full product screenshots appear only much farther down in the gallery.
- UI/UX skill query `product screenshots gallery navigation --domain ux` supports visible keyboard focus, logical tab order and avoiding navigation overlap. Preserve established editorial tokens.

## TODO

- [ ] Audit current git diff, branch and remote; preserve unrelated local changes. Include website changes authorized across this session, exclude credentials, `.media`, caches and source references.
- [ ] Give each extension detail hero a prominent real screenshot, local icon, restrained ivory/sage framing and editable HTML labels. Prefer contained images so UI remains legible. Keep skill category fallback.
- [ ] Generate three distinct decorative 3D editorial covers with the authorized built-in imagegen tool for catalog/home cards: RocketFlow modular pipeline, RocketListing archive, RocketSpy optical lens. Use warm ivory, emerald glass and restrained matte gold; no UI, fake screenshots, marketing text or baked-in interface labels.
- [ ] Separate curated image choices and feature labels from layout. Reference existing media IDs; no duplicated hardcoded public URLs.
- [ ] Add a small product tour before the complete gallery: three meaningful capabilities with corresponding screenshots. Suggested IDs below. Keep verified existing product descriptions/features; no invented claims, prices or metrics.
- [ ] Improve navigation through the longer product page with clear anchors to overview, product tour, gallery, plans and installation. Retain genuine actions and accessible target sizes.
- [ ] Preserve full gallery and all 67 original/CDN images, demo labeling, original/ZIP/library links, keyboard controls and reduced-motion support. Do not falsely report new captures when source is unchanged.
- [ ] Save final generated covers in workspace, optimize for delivery and record final prompts/built-in source tool. Keep UI screenshots truthful and separate from decorative cover art.
- [ ] Tester: build, lint, existing tests; browser check all three detail pages and catalog at 360px and desktop. Verify no overflow, image loading, gallery interaction, anchors, pricing and installation links. Save updated screenshots.
- [ ] Reviewer: inspect final tested diff, especially media selection fallback, image performance, accessibility and secrets before git operations.
- [ ] Docs manager: update README/design guidelines for curated media and new page structure.
- [ ] Commit focused conventional commits; push current intended branch to its configured remote. Report actual commit hash and push result; do not claim a production deployment without evidence.

## Curated screenshot mapping

| Product | Hero | Tour choices |
|---|---|---|
| RocketFlow | `04-workflow-light-1920x1080` | `05-storyboard-scene-1920x1080`, `02-review-before-run-1920x1080`, `03-timeline-1920x1080` |
| RocketListing | `08-products-wide-light` | `05-scrape-light`, `07-product-detail-light`, `03-product-media-variants-dark` |
| RocketSpy | `rs02-window-1280-vi` | `rs02-popup-vi`, `rs02-book`, `rs02-mcp` |

All IDs have a product prefix, for example `rocketflow/04-workflow-light-1920x1080`. For narrow panel captures, use a dedicated portrait frame rather than stretching/cropping into a landscape slot.

## Unresolved questions

None blocking. If the user's additional images live outside the named source library, current curated refresh remains useful and can later consume that source without rewriting layout.
