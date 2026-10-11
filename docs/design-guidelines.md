# Tony Hoang — Design Guidelines

Updated: 2026-10-11. Systems architect positioning within a premium editorial theme: warm, bright, spacious, with serif typography and restrained emerald/gold artwork. Preserve the handwritten “Tony Hoang” identity; do not substitute a monogram.

## Source of truth

- `app/editorial.css`: editorial tokens, component styles and responsive rules.
- `app/globals.css`: shared semantic tokens; legacy coral/bronze names alias emerald/gold for existing components.
- `app/layout.tsx`: self-hosted fonts via `next/font/google`.
- `lib/editorial-content.ts`: shared navigation, homepage copy, social links and locale-aware paths.
- `content/blog/*.mdx`: real blog articles (including files directly in this root); `lib/mdx.ts` reads frontmatter and content.
- `content/life/`: personal activity entries, read by `lib/life-mdx.ts`.
- `lib/products.ts`: owned digital product catalog, category definitions and destination links.
- `lib/data/extension-plans.json`: validated public extension plan snapshot; `lib/extension-checkout.ts` resolves plans and checkout destinations.
- `public/images/products/`: real extension logos and screenshots.
- `components/blog/blog-explorer.tsx`: query-based article search and category filters.
- `app/[locale]/products/`: product catalog/detail pages; `app/[locale]/blog/` and `app/[locale]/life/`: listing/detail readers.
- `components/editorial/home.tsx`: section composition.
- `components/editorial/primitives.tsx`: signature, primary/secondary/text link, section heading, artwork, tag and divider.
- `components/editorial/article.tsx`: featured/compact article and reusable uniform `ArticleGrid`.
- `components/layout/header.tsx`, `components/layout/footer.tsx`: shared navigation and footer.

## Color tokens

| Token | Value | Use |
|---|---|---|
| `--ivory` | `#F5F3E9` | Main background |
| `--soft-white` | `#FCFBF7` | Light surfaces |
| `--emerald` | `#1E765D` | Primary buttons, links, focus |
| `--forest` | `#123C32` | Main text, footer |
| `--gold` | `#E4B445` | Small decorative details, footer CTA |
| `--sage` | `#E8EDE0` | Framework background |
| `--gray-green` | `#667168` | Secondary text, metadata |
| `--warm-border` | `#DDDCCF` | Thin dividers |

Aim for 70% ivory/white, 20% green and 10% accents. Gold is decorative; darker gold `#946B19` supports legible icons and numerals on light surfaces. Avoid heavy shadows, neon gradients, pervasive glass effects and boxed card layouts.

## Typography and spacing

- Headings: Noto Serif, weights 400–700; `--font-serif` maps to legacy variable `--font-merriweather`.
- Body/UI: Be Vietnam Pro, weights 400–800; `--font-sans` maps to legacy variable `--font-inter`.
- Signature: Allura, `--font-signature`; render as real text.
- Hero: up to 72px desktop, 38–46px mobile; line-height 1.15.
- Section headings: 28–42px; line-height 1.2. Compact article titles: 22–23px.
- Body: 16–17px hero, line-height 1.75. Metadata: 11px with restrained tracking.
- Spacing tokens: `--space-8`, `--space-12`, `--space-16`, `--space-24`, `--space-32`, `--space-48`, `--space-64`, `--space-96` (pixel values match names).
- `--theme-container`: 1280px; `--theme-radius`: 8px; `--theme-duration`: 220ms.

## Layout and responsive behavior

The homepage uses `.architect-hero` with a `.85fr / 1.15fr` text/artwork grid, product discovery, published writing, personal activities, an open two-column about section and a forest footer. Reusable framework styles retain a three-column variant. Use thin dividers and whitespace to establish hierarchy. Uniform article grids use three columns.

Container padding is 64px desktop, 32px at widths up to 1100px, and 24px up to 760px. At 760px, the header becomes an expandable menu; hero, article grid, framework and about sections stack. Categories scroll horizontally within their strip. Compact articles retain an image/text split. Framework column separators become horizontal rules. Main section spacing is 80–96px desktop and 48–56px mobile.

Validate at 360px and wide desktop widths. Keep Vietnamese accents visible, use `min-width: 0` for grid children, and preserve artwork focal points when cropping.

## Content, artwork and interaction

The site presents Tony’s activities, published writing and owned digital products: AI skills, software, Chrome extensions and mobile apps. Use verified existing content and links; do not invent product availability, testimonials or statistics. Keep content in local files rather than embedding it in layout components. No new database or backend is required.

The catalog contains three owned Chrome extensions—RocketFlow, RocketListing and RocketSpy—with real logos/screenshots from `rocketflow-extension`, plus the free Coloring Book AI Skill linking to `/coloring-book-kdp`. Source repositories remain untouched. Product records accept optional `price`, `currency` and `action`, with status `available` or `coming-soon`.

Extension pages read `lib/data/extension-plans.json`; returned plan SKUs open the existing QR checkout at `https://api-edu.ainexus.vn/pay/SKU` on the `rocket-ai-edu-all` backend. The current snapshot contains empty plan lists, so use the real contact CTA and show no invented prices. Other paid products may provide a verified external checkout in `action.href`. Do not simulate payment, completion or delivery.

The `/ext/v1` API has extension-only browser CORS. Keep its requests out of website client code. `npm run sync:products` runs `scripts/sync-extension-plans.mjs` through Node with `X-Ext-Version`, validates all three catalogs and atomically replaces the static snapshot; failure preserves previous data. After plans are published in the existing administration system, sync, rebuild and redeploy. No new database/backend or public administration link is required.

Artwork lives under `public/images/editorial/`. The hero uses `hero-bridge.webp`, generated from approved real likeness references and an existing systems-design scene. Both figures must depict the same Hoang in a plain black tee: present and desired future linked by a modular bridge, technology and AI. This is a visual metaphor, not an actual event. Include only the final generated asset; do not copy private source material into the site.

`components/editorial/home.tsx` renders the hero as a semantic figure with `next/Image`, `fill`, a 3:2 wrapper and `object-fit: contain`. Preserve both figures and bridge endpoints without cropping. Mobile stacks copy and artwork; the HTML caption puts endpoints on its first row and the connecting method below. Heading, alt text and caption are editable in `lib/editorial-content.ts`.

Supporting artwork may use luminous emerald glass, matte gold, ivory ceramics and abstract mechanical structures in cream architecture. Use the real owner photograph for the about section. Keep all UI text in HTML. The reference layout is guidance, not a page background.

`ThemeLink` renders a Next.js link for internal routes, an anchor for external destinations and a disabled button when no destination exists. Show unavailable product actions as disabled or coming soon. Navigation reaches real pages; blog search and category filters preserve query state, and article links open the MDX reader. Mobile menu supports open/close and keyboard use; icon-only controls need accessible labels. Preserve semantic landmarks, the skip link and visible focus outlines (emerald on light surfaces, gold in the footer). Interactive targets are at least 44px high.

Hover changes color subtly and moves arrows approximately 3px over 220ms. Avoid continuous motion and reading delays. Honor `prefers-reduced-motion`, including disabling smooth scrolling and hover transforms.

## Project design tooling

The project-local UI/UX skill is installed at `.agents/skills/ui-ux-pro-max/SKILL.md`. Use it for design and accessibility guidance while preserving this palette and editorial direction.

## Product media gallery and publishing

`components/products/product-gallery.tsx` and scoped `app/product-media.css` provide each extension's full screenshot collection. `lib/product-media.ts` resolves the active `lib/data/product-media.json` manifest. Deliver preoptimized WebPs directly from the media CDN using `next/Image` with `unoptimized`; do not route these assets through the Next.js image optimizer. Show one contained full image at a time (maximum height 640px), horizontally scrolling lazy thumbnails, pressed-state buttons with native keyboard navigation, bounded previous/next controls and a polite current-title announcement. Preserve originals without cropping. Label screenshots **Dữ liệu demo**; they are interface examples, not evidence of actual outcomes. Provide original-image, library and ZIP links. Keep local screenshot fallback, logos and hero artwork.

Run `npm run media:prepare` to stage the existing sibling documentation library in ignored `.media/`: 67 PNG originals, 67 full WebPs, 67 thumbnails, HTML/README/capture manifest and ZIP (205 objects). Full WebPs total 2.79 MiB versus 6.09 MiB PNG. The Node script accepts source/archive/output overrides; source repositories are not modified.

`CLOUDFLARE_ACCOUNT_ID=your-account-id npm run media:publish` uses existing Wrangler OAuth and bucket `tony-hoang-media`. Supply `-- --base-url https://media.ainexus.vn` when the public origin is selected, or later run `npm run media:publish -- --verify-only --base-url https://media.ainexus.vn`. The custom domain `media.ainexus.vn` is live on the isolated `tony-hoang-media` bucket. All 205 public objects passed byte/SHA-256, content-type and ZIP attachment checks; the active manifest contains 67 image URLs. Every public object's hash/bytes and content type, plus ZIP attachment disposition, must pass before the manifest is atomically activated. Content-derived collection paths make immutable caching safe. Next.js allows only that exact remote host/collection; rebuild after activation. Commands support Node/npm; existing dependencies were installed with pinned pnpm 11.

## Extension detail presentation

Use an actual extension screenshot in each detail hero, with a curated three-feature tour using verified interface images. `components/products/product-tour.tsx` supplies preview/tour components; page anchors connect overview, features, library, plans and installation. The gallery group selector filters thumbnails and resets selection while retaining the full library under “Tất cả ảnh”. Keep screenshots contained and explicitly labeled as demo data.

Product discovery uses three distinct local decorative covers: `rocketflow-cover.webp`, `rocketlisting-cover.webp` and `rocketspy-cover.webp` under `public/images/products/`. These AI artworks are metaphors, never generated interface evidence; labels and logos remain separate HTML/assets. Exact prompts and generation details are recorded in [product visuals](./product-visuals.md). The refresh reuses all 67 screenshots and the same content-hashed media collection without another R2 upload.

Application lint excludes vendored `.claude`, `.opencode`, `.agents` tooling and the generated route file. Run the application lint command before committing; exclusions do not replace checks of changed application code.
