# Image book viewer browser verification

2026-10-12 — Playwright, cached Chromium headless 1243, local Next.js dev server.

Passed at desktop 1280×1000:
- Cover alone; spreads 2–3, 4–5; final unpaired page 6 and disabled next boundary.
- Page selector opens containing spread; previous navigation returns cover.
- Zoom toggle state and automatic reset after page navigation.
- Focused reader arrow navigation.
- Enter/exit fullscreen (actual document fullscreen state).
- Empty book message.
- Failed image message and retry makes a second request.

Passed at mobile 390×844:
- Resize retains selected page and displays only one page.
- Next advances one page.
- Horizontal swipe advances; vertical gesture does not.
- Zoom disables swipe navigation and arrow-key navigation.
- Multitouch and cancelled gestures do not turn pages.
- No document horizontal overflow in normal mode.

Temporary route and test script were not committed. Six deterministic image responses and a 404 were intercepted in browser to exercise the reusable component; no assets were uploaded and no product was published. Native physical-device pinch interaction was not tested; event gating was verified using browser-dispatched touch events. No Safari/iOS hardware test was performed.

## Public integration with real CDN assets

Second browser pass used actual public Cloudflare URLs with no network interception:
- `/playbooks` returned 200; REA listing links to `/playbooks/rea`.
- `/playbooks/rea` returned 200; cover loaded from `media.ainexus.vn` at native 1086×1448.
- Navigated every desktop spread through page 10; all visible images completed with nonzero natural dimensions; final next button disabled.
- Mobile 390×844 rendered one loaded image; page selector and next navigation worked without document horizontal overflow.
- `/en/playbooks/rea` returned 200, rendered CDN image and linked back to `/en/playbooks`.
- `/playbooks/nonexistent` returned HTTP 404.

Local dev server stopped afterward. No temporary application route remained.
