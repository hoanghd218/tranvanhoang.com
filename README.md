# Tony Hoang

Personal website positioning Tony Hoang as a systems architect, alongside published writing, activities and owned digital products: AI skills, software, Chrome extensions and mobile apps. Built with Next.js 16, React 19, TypeScript and Tailwind CSS 4; English is the default language; Vietnamese routes use `/vi`. Both use `next-intl`.

## Local development

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000). Browse `/`, `/blog`, `/life`, `/products` and `/about`; The same routes under `/vi` use Vietnamese. Legacy `/en/*` URLs redirect to the unprefixed English canonical URL. Translated routes are `/resources` ↔ `/vi/tai-nguyen` and `/gifts` ↔ `/vi/qua`.

```bash
npm run lint
npm run build
npm start
```

## Editing content

- `lib/editorial-content.ts`: homepage copy, navigation and social links.
- `content/blog/*.mdx`: article content and frontmatter; root files and nested folders are supported. The blog supports query-based search/category filtering and individual MDX readers.
- `content/life/`: personal activity entries.
- `lib/products.ts`: verified owned products. Set optional price/currency and action links; choose `available` or `coming-soon` status. The catalog contains RocketFlow, RocketListing and RocketSpy Chrome extensions plus the free Coloring Book AI Skill. Extension logos/screenshots live in `public/images/products/`; the skill links to the existing resource page.

The creator catalog uses local file data with no new database/backend. Product assets came from the existing `rocketflow-extension` source; source repositories remain untouched.

## Extension plans and QR checkout

Extension pricing comes from `lib/data/extension-plans.json`. Product pages read this static snapshot; available plan SKUs link to the existing QR checkout at `https://api-edu.ainexus.vn/pay/SKU`, served by the `rocket-ai-edu-all` backend. No payment is simulated on this site.

The `/ext/v1` API allows extension origins through CORS, so the website does not fetch it in the browser. Refresh the public catalog with Node:

```bash
npm run sync:products
npm run build
```

`scripts/sync-extension-plans.mjs` requests plans for all three extensions with `X-Ext-Version`, validates every response, then atomically replaces the snapshot. A failed sync preserves the previous snapshot. After publishing plans in the existing administration system, run sync, rebuild and redeploy the site. The current snapshot has empty plan lists for all three extensions; pages show a real contact action without invented prices or checkout SKUs. Keep administration links out of the public website.

## Product media

`npm run media:prepare` (or `node scripts/prepare-product-media.mjs`) prepares the existing sibling `rocketflow-extension` documentation library and ZIP. Override inputs with `--source`, `--archive` and `--output`. The ignored `.media/` staging directory contains 67 original PNGs, 67 full WebPs, 67 thumbnails, the HTML library/README/capture manifest and ZIP: 205 upload objects. Full images shrink from 6.09 MiB PNG to 2.79 MiB WebP. Source repositories remain untouched.

```bash
npm run media:prepare
CLOUDFLARE_ACCOUNT_ID=your-account-id npm run media:publish
```

Publishing uses the existing Wrangler OAuth session and the isolated `tony-hoang-media` R2 bucket; `CLOUDFLARE_ACCOUNT_ID` is mandatory for uploads. The live public media domain is `https://media.ainexus.vn`. All 205 objects have been publicly verified, and the active manifest contains 67 image URLs. Supply this origin during upload with `--base-url`, or verify already uploaded objects later:

```bash
npm run media:publish -- --verify-only --base-url https://media.ainexus.vn
```

Activation verifies every public object's bytes/hash and content type, plus ZIP download disposition, before atomically updating `lib/data/product-media.json`. Content-derived collection paths support immutable caching. Rebuild after activation; Next.js remote image patterns allow only the manifest's exact host and collection.

`lib/product-media.ts` supplies each product gallery with its image subset, original/library links and ZIP URL. The gallery serves preoptimized WebPs directly from the media CDN through `next/Image` with `unoptimized`, avoiding an additional Next.js image-optimization request. It renders one full image at a time with lazy thumbnails, keyboard-accessible selection and explicit **Dữ liệu demo** labeling. Missing media retains the local screenshot fallback. Logos and hero artwork remain local.

These commands use Node/npm; existing dependencies were installed using pinned pnpm 11. Use that same pinned version when maintaining the dependency installation.

## Extension detail pages

Each extension detail hero shows an actual interface screenshot, followed by a curated three-feature tour. Page anchors link to overview, features, screenshot library, plans and installation. The gallery's group filter narrows the visible thumbnails without removing access to the complete library.

RocketFlow, RocketListing and KDSPY AI each have a distinct local decorative robotic AI cover for product discovery. Covers are visual metaphors; interface previews and feature tours use verified screenshots labeled **Dữ liệu demo**. See [product visuals](docs/product-visuals.md) for artwork asset paths and provenance notes. This page refresh reuses all 67 screenshots and the existing content-hashed collection; it requires no new R2 upload.

Lint covers application code; vendored `.claude`, `.opencode`, `.agents` tooling and the generated route file are excluded. Run `npm run lint` before committing application changes.

## Theme

The homepage, product catalog/details, book catalog and Coloring Book skill landing share a RoboLabs-inspired black/orange theme: sticky pill navigation, dotted hero, dark panels, Satoshi typography and restrained reveals. `app/robolabs.css` and `app/robolabs-products.css` hold scoped styling; `components/editorial/robo-shell.tsx` shares the header/footer. Interface copy supports English and Vietnamese. Other editorial pages retain ivory/emerald styling; the image-book detail keeps its focused reader.

The reference inspection found Services, Process and Solutions as homepage anchors, plus a separate Contact page. The adaptation includes Services, Process and Solutions sections alongside real Skills, Apps and Books catalogs. Observed fades/reveals and process motion inform lightweight effects; this does not claim an exact reproduction of every reference animation.

Product discovery uses local `*-robotic-cover.webp` artwork under `public/images/products/`. Robots are conceptual decoration, while interface tours retain verified demo screenshots. Contact CTAs use Tony’s [LinkedIn](https://www.linkedin.com/in/hoanghd218/), centralized in `editorialContent.contactHref`. See [design guidelines](docs/design-guidelines.md).

Project UI/UX tooling: [.agents/skills/ui-ux-pro-max/SKILL.md](.agents/skills/ui-ux-pro-max/SKILL.md).

## KDSPY AI public documentation

English privacy and support pages are published at [Privacy Policy](https://www.tranvanhoang.com/privacy/kdspy-ai) and [Support](https://www.tranvanhoang.com/support/kdspy-ai). Legacy `/en` links redirect to these English URLs; `/vi` documentation aliases remain available. Public support uses **hoanghd218@gmail.com**, supplied by the owner; `lib/kdspy-ai-support.ts` holds the shared `mailto:` destination and locale path helper. There is no new ticket backend.

Only the narrow documentation changes were deployed from the existing live production baseline; unrelated local redesign remains separate. See [public pages and validation](docs/kdspy-ai-public-pages.md). Chrome Web Store email verification is pending the owner’s click on the verification email; do not treat publication of these pages as Store approval.

## Video editing skills campaign

`/skill-edit-video-free` uses the existing Tony Hoang theme for a Vietnamese campaign with one free skill and a 199,000 VND coffee package containing ten skills. The real ERP SDK defaults to the owner-approved `https://pay-staging.freedombuilders.vn`; `NEXT_PUBLIC_VIDEO_SKILL_ERP_ORIGIN` overrides it. Staging explicitly labels test registrations and inactive file delivery/payment. See [setup and remaining activation requirements](docs/skill-edit-video-free.md). Author ownership is configured server-side in ERP for `hoanghd218@gmail.com`; delivery requires actual protected files and an approved share policy.
