# Extension media: hybrid local identity + Cloudflare R2

Status: complete. User authorized upload; verified live delivery and responsive galleries. Frontend only; keep signature/logo/hero bundled with website.

Sources: /Users/tonyhoang/Developer/GitHub/rocketflow-extension/artifacts/extensions-docs-2026-10-11 and dist/rocket-extensions-docs-media.zip (ZIP verified 5.8 MiB). Do not alter upstream originals.

## Checklist

- [x] Inventory 67 PNG screenshots and ZIP; preserve product-relative paths in a deterministic manifest.
- [x] Discover existing authorized Cloudflare/R2 credentials, account, bucket and public read base URL without printing secrets. Main owns this investigation.
- [x] Confirm target bucket/public-read setup from real account evidence; never fabricate URLs or assume a bucket is public.
- [x] Convert screenshots to WebP in generated staging directory; preserve readable UI text, aspect ratio and original dimensions unless justified by use.
- [x] Compare file sizes/quality; visually inspect representative light/dark screenshots and record image dimensions.
- [x] Implement typed gallery media mapping and frontend gallery using verified product ownership/data; support real remote URLs with appropriate image host configuration.
- [x] Upload optimized images and ZIP with deterministic dated keys, correct content types and explicit cache headers.
- [x] Verify uploaded objects and HTTP public reads; update product galleries/download destination to verified URLs only.
- [x] Keep identity/logo/hero references local; avoid copying all original PNGs and ZIP into application public directory.
- [x] Verify gallery keyboard controls, image loading, mobile layout and ZIP link; compile/lint final changes.
- [x] Document manifest generation/upload and public media configuration without credentials.

## If cloud authentication is blocked

Continue screenshot optimization, deterministic manifest, gallery components/configuration and local verification. Keep pending remote destinations unresolved rather than invented. Report exact missing requirement from observed errors: account permission, credentials, bucket name or public read URL. Do not claim upload completion or ask for broad unnecessary approvals.

## Acceptance

Website uses verified R2-hosted optimized product media and downloadable ZIP, while brand identity/hero stay in code. No backend/database added, no secrets committed, no broken or invented media URLs.

## Delivered

Public CDN: https://media.ainexus.vn. Collection: products/extensions/docs/2026-10-11-be35786d9485. Uploaded and hash/content-type verified all 205 objects; gallery has RocketFlow 36, RocketListing 17 and RocketSpy 14 images. Full WebPs delivered directly from CDN; logos and hero remain local. Production build, focused ESLint, 9 regression tests, keyboard controls and 360/1440 responsive browser QA passed. Library page opens with no broken images. No unresolved questions.
