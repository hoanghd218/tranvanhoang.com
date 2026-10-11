# Tony Hoang creator website — editorial theme

Status: implementation. Scope: personal activity feed, own digital product catalog, technology blog. Front-end only; no database/payment backend. Supersedes placeholder-only demo and blog-only plans.

## Constraints

- Keep Next.js/React/TypeScript/Tailwind/next-intl and existing real content/routes.
- Apply ivory/emerald/forest/sage/gold editorial theme, Vietnamese serif/sans fonts, Tony Hoang signature.
- Existing owned product: Skill Claude AI Coloring Book at /coloring-book-kdp; metadata identifies it as free.
- Do not present third-party gifts as Tony-owned products. Do not invent prices, products, biography or activity claims.
- Product model: id/title/type/description/image plus optional price, currency, purchaseUrl; explicit status controls available/upcoming actions.
- Product kinds support skill, software, Chrome extension and mobile app. Empty categories remain honest empty states.
- Optional product inventory input pending; continue using verified existing owned product.
- Local .agents/skills/ui-ux-pro-max installation requested by user; verify SKILL.md exists before use.

## Implementation TODO

- [ ] Fix MDX content root to content/blog; verify real categories, counts and reader URLs.
- [ ] Centralize design tokens and Vietnamese fonts; inspect root/localized html/body nesting and automatic dark behavior.
- [ ] Implement shared signature header/footer, mobile menu and working locale-aware navigation.
- [ ] Compose creator home from real content: activity feed, own product preview, latest technology posts and existing about information.
- [ ] Create typed local product catalog with optional pricing/currency/purchase URL and explicit availability status.
- [ ] Build catalog page/filter supporting four product kinds; only expose verified products and functional purchase/detail destinations.
- [ ] Build personal activity route from verified local activity entries; avoid fictitious milestones.
- [ ] Restyle existing about page with established content and real assets.
- [ ] Implement blog search/category filter across all actual posts; normalize Vietnamese matching and provide clear empty/reset state.
- [ ] Restyle reader with readable prose, heading anchors, metadata, related posts and back navigation.
- [ ] Remove nonfunctional marketing forms or connect to existing valid destinations; no new payment or database integration.
- [ ] Verify keyboard/menu/Escape/focus, touch targets, reduced motion and responsive 360px through desktop.
- [ ] Run build/lint and meaningful content/navigation/filter checks; tester then reviewer.
- [ ] Update design guidelines/changelog and scope notes with final implementation.

## Responsibility split

Parent: catalog/home/shared navigation/about/activity. Other implementation agents: blog/reader. Planner: concise scope documentation and constraints.

## Acceptance

Real creator website presents personal activity, verified owned digital products and technology articles in one consistent editorial theme. Blog search/filter/reader and navigation work. Product actions honestly reflect known pricing/availability. No fabricated catalog entries, third-party ownership claims, database or payment backend.

Unresolved questions: optional additional owned-product inventory and purchase destinations.

## Current addition: systems architect positioning and bridge hero

Status: complete; build, focused lint, four existing regression tests, responsive QA and code review passed. Preserve product catalog, technology blog, personal activity and working routes.

Public-facing positioning source: tony-brain/Tony_Hoang_Brand_Kit_v1.0/02_Brand_Data/brand.json. Use only brand-facing fields: Systems Architect × AI Agents × 10X × Freedom; intelligent systems multiply human capability and return time, choice and freedom. Do not import private vault notes or personal history.

- [x] Emphasize systems architect role in hero copy using established public brand direction, without invented outcomes or credentials.
- [x] Generate original editorial hero: Hoang at the near end of a bridge looks toward his own aspirational self at the far end; bridge built from abstract system, technology and AI modules.
- [x] Apply user correction: both figures are Hoang, using his supplied real likeness and prior generated scene as references. This is a present/future visual metaphor, not an actual event. Use warm ivory, emerald/glass, restrained gold and natural light.
- [x] Compose artwork with clear near/far visual storytelling and responsive focal points; keep headings/buttons as real HTML text.
- [x] Optimize image asset, supply descriptive alt text and stable dimensions; maintain readable typography and CTA contrast.
- [x] Validate bridge/person/aspirational-self concept visually on desktop and 360px mobile; avoid cropping away the narrative.
- [x] Confirm product, blog, activity and about navigation remain unchanged and functional; run compile/lint checks after hero changes.
- [x] Confirm no private vault details or unsupported personal claims appear in copy, asset prompts or checked-in documents.

UI/UX skill installation previously verified at .agents/skills/ui-ux-pro-max/SKILL.md.
