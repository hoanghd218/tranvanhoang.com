# Motion follow-up validation — 2026-10-12

- No active `next build` process before checks. No build started by tester.
- `npm run lint`: passed (0 errors; existing React Hook Form warning remains).
- `npx tsc --noEmit`: passed.
- New motion CSS imported after base/products/sections styles. Home and RoboShell mount locale-aware motion controls.
- Infinite diagram, service and marquee loops start paused and use intersection visibility to play. Perimeter light runs continuously but obeys global pause. All loops obey root pause, reduced-motion and document visibility controls.
- Reduced-motion disables animation and transitions including pseudo-elements, removes decorative movement, hides duplicate marquee group, preserves readable logos.
- Scroll reveals use Web Animations only after intersection. No pre-enhancement CSS hides reveal content; SSR content remains visible without JavaScript. Existing hero entrance is finite and respects reduced-motion.
- HTTP `/` and `/vi`: 200; localized pause controls and all six homepage sections present in SSR HTML.
- Static implementation review and HTTP checks only; interactive browser pause/resume behavior not exercised in this pass.

Unresolved questions: none. No blocking findings.

Root browser verification: perimeter angle advanced; process iteration count infinite; pause changed CSS to paused and label to Resume animations; resume restored running; process suspended offscreen and resumed after anchor scrolling.
