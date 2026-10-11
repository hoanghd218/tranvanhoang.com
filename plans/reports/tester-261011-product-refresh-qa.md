# Product refresh QA

Preview localhost:3200; extension-page-refresh plan.

## Validation

- Added tests/product-showcase.test.mjs: all published own-product curated captures exist uniquely; missing media falls back and unavailable tour entries disappear; empty/non-extension inputs remain safe.
- All12 Node tests passed; focused ESLint product showcase/media/tour/gallery/card/detail page/tests passed.
- Parent production build passed; parent owns final full lint/build after unrelated typing adjustment.

## Browser checks passed

- RocketFlow, RocketListing and RocketSpy real screenshot heroes load directly from R2 CDN. Curated tour screenshots load; readable HTML captions remain separate.
- All three details checked360/1440: no horizontal document overflow (345/1425px scrollWidth); generated covers load on catalog/home at both sizes.
- Flow Storyboard filter returns7 images; native selection resets to1/7; Enter next updates2/7 and selected thumbnail; reset all returns36.
- Listing setup/state filter returns3; Enter next/previous works; reset all returns17 with previous disabled.
- Spy MCP filter returns1; both navigation buttons disabled; reset all returns14.
- Page anchor nav points to actual overview/tour/gallery/plans/installation IDs. Overview, feature tour and gallery navigation exercised.
- Plans remain contact-only, with genuine Facebook CTA; no prices/checkout invented. ZIP link clearly reads Tải ZIP ảnh tài liệu.
- Catalog Chrome Extensions filter returns3; all3 generated decorative covers and icons loaded. Home featured and related cover images all loaded.
- Saved product-refresh-desktop.jpg and product-refresh-mobile.jpg in plans/reports. Viewport reset.

No blocking issues found. No implementation/remote state edits by tester.

Unresolved questions: none.

## Main integration verification

Production build passed after remote main integration and final CTA cleanup. 12/12 tests pass. ESLint: 0 errors, 1 existing React Hook Form warning. Browser smoke passed 11 routes at 360px and 1440px: home, catalog, three extension details, course catalog/detail, learning hub, resources, gifts and English resources. No overflow, broken loaded images or console errors; real product heroes, gallery filter/Next, course contrast and independent spacing tokens confirmed. Final screenshots are local at `/tmp/tony-postmerge-qa/`.
