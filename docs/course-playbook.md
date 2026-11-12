# Course Playbook — "AI Mobile App Business OS"

Web playbook for the 7-module course. Content is **data**; components only render it.

- Hub: `/playbooks/ai-mobile-app` (+ `/vi/...`) — hero + 7 module cards.
- Module: `/playbooks/ai-mobile-app/module-01` … `module-07`. A module with `status: "soon"` (or no data) shows a friendly "Đang soạn" page (question / output / gate only).
- The static segment `ai-mobile-app` wins over the dynamic `playbooks/[slug]` (image-book `rea`), which is untouched.
- Course content is Vietnamese. On the English locale the page shows "Course content is in Vietnamese." and the course area is `lang="vi"`; only the site chrome (back link, note, `/playbooks` card, metadata) is bilingual.

## Files

| Path | Role |
|---|---|
| `lib/course-playbook/types.ts` | Data contract (`Block`, `LeafBlock`, `Section`, `CourseModule`, `ModuleSummary`). Changing it = changing infra + all modules; ask the owner first. |
| `lib/course-playbook/course.ts` | Registry: `COURSE_INDEXABLE`, `courseMeta`, `moduleSummaries` (7), `getCourseModule`, `getAllModuleSlugs`. |
| `lib/data/course-playbook/module-0X/` | One module: `index.ts` (default export `CourseModule`) + `section-*.ts` files. |
| `lib/data/course-playbook/fixture-all-blocks.ts` | Dev-only fixture with every block type (see below). |
| `components/course-playbook/` | Renderers. Server components by default; client only for copy, lightbox, worksheet, checklist, TOC scrollspy, accordion toggle-all. |
| `app/[locale]/playbooks/ai-mobile-app/` | `layout.tsx` (imports the CSS), `page.tsx` (hub), `[module]/page.tsx`. |
| `app/[locale]/playbooks/ai-mobile-app/course-playbook.css` | The only stylesheet. Every selector sits under `.cpb` (plus `.cpb-cover` for the card on `/playbooks`). |

Look: the site shell (`RoboShell`: floating dark header + dark footer, same as `/playbooks`) wraps a `.cpb` area in the approved light-purple sample design. The module hero is full-width dark navy, so the floating header sits on it naturally; the page ends with a light "previous / hub / next" bar, then the site footer. `.cpb` neutralises the shell's bare-element rules (`h1–h3`, `p`, `a`) with `:where()` resets at the top of the CSS.

## Add or edit a module

1. Edit `lib/data/course-playbook/module-0X/` (`export default` a `CourseModule`; keep sections in `section-<id>.ts`, each file ≤ ~250 lines).
2. A module is "ready" only when `moduleSummaries[i].status === "ready"` in `course.ts` **and** its data exists. Flip `soon` → `ready` there and register the data in the `modules` map.
3. Section `id` = kebab-case ASCII, unique in the module (it is the page anchor and the TOC entry; label = `tocLabel ?? title`). `highlight` must be a substring of `title`.
4. Text fields are **InlineText**: `**bold**`, `` `code` ``, `[text](url)` with url starting `/` or `https://`. Anything else (including `[x]` with no `(url)`, or `javascript:` urls) shows as literal text. No raw HTML. External links open in a new tab with `rel="noopener noreferrer"`. Internal links are not locale-rewritten: write the final path (e.g. `/vi/playbooks/ai-mobile-app/module-02`).
5. `prompt.text` keeps `\n`; learner-fill parts are `{{hint}}` → shown highlighted as `[hint]`, and "Sao chép" copies exactly `[hint]`. `{{…}}` has no meaning elsewhere.
6. `steps` are numbered automatically (1, 2, 3…) — do not type numbers in titles. `accordion` items may contain any leaf block (prompt, worksheet, figure…); accordions do not nest. `expandFirst: true` opens the first item (default closed). Items without `number` show no circle.
7. `source` of a `case` is rendered as written — start it with "Nguồn: …" yourself, and state "tự công bố, chưa kiểm chứng độc lập" for third-party numbers.
8. A `checklist` with `id: "gate"` is the module's decision gate (dark box, progress bar, and a button to the next module that stays disabled until every item is ticked; if the next module is `soon` it reads "… — Đang soạn"). Other ids render as a light card.
9. Run `npx tsc --noEmit` and `npx eslint <files>`, then view `/playbooks/ai-mobile-app/module-0X` in `npm run dev`.

## Dev fixture

`lib/data/course-playbook/fixture-all-blocks.ts` exercises every block type. `course.ts` registers it as slug `fixture` **only when `process.env.NODE_ENV === "development"`** (the condition is inlined at build time, so production bundles do not contain it). Open `/playbooks/ai-mobile-app/fixture`. It is not in `moduleSummaries`, so it never appears in `generateStaticParams`, the hub, or the sitemap.

## Indexing (`COURSE_INDEXABLE`)

Default `false` in `lib/course-playbook/course.ts`: every course page gets `robots: { index: false, follow: false }` and `app/sitemap.ts` lists no course URL. To publish for search engines set it to `true`, then rebuild/redeploy. The hub and every `ready` module become indexable and enter the sitemap (both locales); `soon` modules stay out of the sitemap. Canonical URLs use `https://www.tranvanhoang.com` + the localized path; the sitemap uses its own `baseUrl` (`https://tranvanhoang.com`) — reconcile the www / non-www choice before flipping the flag.

## Images

- Files: `public/images/course-playbook/module-0X/<kebab-case-ascii>.webp`, 1536 px wide, quality ≈ 80, ≤ ~350 KB. Read `width` / `height` from the output file; never reference a missing file.
- Rendered with `next/image` + `unoptimized` (pre-optimised WebP; same convention as `image-book` and the product gallery), `loading="lazy"`.
- `alt`: 1–2 factual Vietnamese sentences with the main numbers/terms. `caption`: starts with `Hình N · ` (N counts per module).
- Clicking a figure opens a native `<dialog>` lightbox: previous/next across **all** figures of the page (including those inside accordions), "Xem cỡ gốc / Vừa màn hình", Esc closes and focus returns to the figure. Without JS the figure is a plain link to the image.

## Reader state (localStorage)

Read only on the client; reading goes through `useSyncExternalStore` (server snapshot = empty) so hydration matches the server HTML. All access is try/catch; when the browser blocks storage the worksheet status says so and offers "Sao chép phiếu" instead.

| Key | Value |
|---|---|
| `tony-pb-<moduleSlug>-<worksheet id>` | JSON `string[]`, one entry per field (autosaved, 500 ms debounce) |
| `tony-pb-<moduleSlug>-<checklist id>` | JSON `boolean[]`, one entry per item |

Ids must be unique per module across worksheets and checklists. Changing the number of fields/items of a block makes old saved data (different length) be ignored. Nothing is sent to a server.

## Accessibility notes

Skip-friendly heading outline (h1 hero → h2 sections → h3 sub-blocks), `<details>` accordions, `fieldset`/`legend` checklists, `aria-live` status for copy / save / progress, `aria-current="step"` in the module rail, `aria-current="true"` in the TOC, focus-visible outlines (3 px; white on dark surfaces), touch targets ≥ 44 px, text ≥ 14 px, tables and long prompts wrap or scroll inside their own box (no page-level horizontal scroll at 360 px), `prefers-reduced-motion` disables transitions.
