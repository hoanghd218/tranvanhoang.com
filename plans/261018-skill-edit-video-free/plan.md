---
title: Video editing skill landing and ERP offers
status: ready
priority: P1
---

# Goal

Ship `/skill-edit-video-free` for Tony Hoang using the existing RoboLabs black/orange theme. Vietnamese campaign: one free video-editing skill; 199,000 VND “mời cà phê” offer with ten industry-specific video-editing skills. Attribute campaign leads and sales to `hoanghd218@gmail.com` in the ERP.

## Confirmed context

- Next.js 16 / React 19, default `en` root and Vietnamese `/vi` routes; next-intl middleware.
- Reuse `components/editorial/robo-shell.tsx`, `app/robolabs.css`, and scoped product styling. Existing Coloring Book page is a useful shell example, not a delivery backend.
- `components/layout/site-chrome.tsx` suppresses legacy header/footer only for recognized RoboLabs routes; extend it for the new route.
- Existing `/api/claim-gift` only logs submissions and returns success. Do not use it for this campaign.
- Extension checkout helper points at the real ERP (`https://api-edu.ainexus.vn/pay/SKU`). Inspect the current ERP application before choosing campaign endpoints or SKUs.
- Do not use Freedom Builder branding, links, community CTAs, unverifiable testimonials, invented download assets, or fake payment confirmation.

## TODO

- [ ] Inspect ERP's current campaign, product/SKU, lead attribution and checkout/delivery contracts; identify the real author record by email.
- [ ] Configure two ERP offers: free 1-skill and paid ten-skill bundle at 199,000 VND. Persist author attribution in trusted ERP campaign configuration; do not trust a submitted author email.
- [ ] Confirm actual downloadable assets/delivery instructions for both offers; keep paid files behind verified paid entitlement.
- [ ] Add a focused campaign config module with verified offer identifiers, fixed price, author identity and server integration settings; keep credentials server-only.
- [ ] Build the requested root landing and `/vi` alias using RoboShell, with Vietnamese campaign copy, correct page language and explicit metadata/canonical URLs.
- [ ] Design dotted hero and video-editor timeline visual using CSS, benefit section, workflow preview, clear free versus coffee comparison, ten industry labels, FAQ and registration section.
- [ ] Separate focused presentation and client form components; keep code files below 200 lines where practical. Reuse existing theme tokens, orange buttons, dark panels and accessible typography.
- [ ] Implement real ERP submissions using documented contracts. Validate required identity/contact inputs, handle upstream failures, prevent duplicate submissions and show success only after accepted ERP response.
- [ ] Free success follows actual delivery response; paid success opens the real ERP checkout and only fulfillment after verified payment.
- [ ] Preserve campaign/source attribution through form and checkout; avoid PII logs and arbitrary redirect destinations.
- [ ] Register route in `i18n/routing.ts` if required by typed navigation, extend SiteChrome suppression and add sitemap entry.
- [ ] Add focused integration/contract tests for offer selection, validation, author attribution, 199,000 VND amount and upstream failures. Use existing project test conventions.
- [ ] Run lint and production build; verify actual desktop/mobile page and form behavior, keyboard/focus controls, reduced motion, no horizontal overflow, and no duplicate header/footer.
- [ ] Delegate tester and code-reviewer checks; fix meaningful findings. Update README and campaign integration documentation with deployment prerequisites and verified status.

## Completion criteria

The requested URL renders the existing site's Tony Hoang theme. Free and paid actions create real ERP records credited to the author. Paid checkout is exactly 199,000 VND and fulfills ten skills only after payment. Production build and targeted checks pass. Any missing assets or unavailable ERP provisioning are documented candidly instead of represented as live delivery.

## Unresolved questions

- Actual skill archive/content locations are not present in the request; inspect ERP/source assets before publishing delivery claims.
- Current ERP author/campaign identifiers and provisioning method must be discovered; email alone is not an API contract.

## Verification — 2026-10-18

Website lint, TypeScript, production build and all 12 existing tests pass. Browser inspected at 1440px and 390px: one header/H1, no horizontal overflow or JavaScript errors. Preview: http://localhost:3091/skill-edit-video-free. ERP draft setup applied on development site; publication pending real protected archives, owner-selected Published share policy and public ERP origin. No production deploy.
