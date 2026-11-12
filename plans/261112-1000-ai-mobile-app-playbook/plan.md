# Plan — Playbook web "AI Mobile App Business OS" (Modules 01–04)

Work context: repo root (branch `main`). Plans: `plans/`. Reports: `plans/reports/`.
Status: local only. NO commit, NO push, NO deploy, NO upload (R2 / wrangler / media:publish). Owner decides publishing.

## Goal
Turn the existing course material (Vietnamese) into web playbook pages on this Next.js site:
- `/playbooks/ai-mobile-app` (+ `/vi/...`) — hub: 7 modules, 4 ready (01–04), 3 "soon" (05–07).
- `/playbooks/ai-mobile-app/module-0X` — one long-form page per module, built from DATA.

Static segment `ai-mobile-app` wins over the existing dynamic `playbooks/[slug]` (image-book "rea"). Do not break `rea`.

## Architecture (already created by orchestrator — do not change without asking)
- `lib/course-playbook/types.ts` — THE CONTRACT (block types). Read it first.
- `lib/course-playbook/course.ts` — registry, 7 module summaries, `COURSE_INDEXABLE=false` (noindex by default).
- `lib/data/course-playbook/module-0X/index.ts` — default export `CourseModule`. Currently an empty stub.
- Components → `components/course-playbook/` · styles → one scoped CSS (`.cpb`) · routes → `app/[locale]/playbooks/ai-mobile-app/`.
- Images → `public/images/course-playbook/module-0X/*.webp`.

## Reference design (already reviewed & approved by owner as a standalone sample)
A standalone HTML sample kept outside this repo (`module-04.html`, `web.css`, `app.js`, `img/`).
Port its look & behaviour (hero, rail of 7 modules, sticky TOC desktop / collapsible mobile, infographic + lightbox, accordion, prompt block with copy, worksheet autosave, gate checklist). Tokens: purple `#6F00FF`, hover `#5800CC`, soft `#F1E8FF`, lavender `#C9A7FF`, ink `#131628`, surface `#EFEFEE`, muted `#5B6070`, on-dark-muted `#C6C8D2`, border `#D9DCE5`, control-border `#74798B`; font Be Vietnam Pro; light pages, dark only hero/gate/footer-ish; min text 14px, body 16–18px, buttons ≥44px, radius 8/16.

## Ownership (parallel work — NEVER edit outside your lane)
| Agent | Owns | Must not touch |
|---|---|---|
| infra | `components/course-playbook/**`, `app/[locale]/playbooks/ai-mobile-app/**`, one CSS file, edits to `app/[locale]/playbooks/page.tsx` (add hub card), `app/sitemap.ts` (respect `COURSE_INDEXABLE`), `docs/course-playbook.md`, dev-only fixture | `lib/data/course-playbook/module-0X/**` (except dev fixture), `public/images/course-playbook/module-0X/**` |
| m01 / m02 / m03 / m04 | `lib/data/course-playbook/module-0X/**` and `public/images/course-playbook/module-0X/**` of ITS module only | everything else; if `types.ts` lacks something, propose in report — do not edit |

## Content rules (module agents) — strict
1. Source = author's own course material only (paths given in each brief). Restructure & condense faithfully. **Never invent** facts, numbers, prices, names, results, claims. Missing in source → omit. Blank ≠ zero.
2. Cover EVERY lesson/section of the main curriculum, in source order. Return a coverage table in the report (lesson → section id). Don't stop early; write sections progressively, one file each.
3. Vietnamese. Keep English keywords with Vietnamese meaning in ( ) at first use in the module, e.g. `ICP (nhóm khách hàng phù hợp nhất)`.
4. Remove vault-internal noise: frontmatter, `[[wikilinks]]`, `> [!callout]` syntax, status/review fields, ACR/U-xxx/Q-xxx ids, "pending/approved", file paths, TODOs to self, notes addressed to AI.
5. Third-party data (founder revenue, MRR, downloads): keep only with named source + "tự công bố / chưa kiểm chứng độc lập" exactly when the source says so. No long verbatim transcripts of third-party videos — paraphrase, max 1–2 short quoted sentences with attribution.
6. No personal/private data (phones, private emails, customer/student names, internal prices). The brand line "Tony Hoang" and site name are fine.
7. Prompts: copy the prompt text VERBATIM from source; turn every `[điền chỗ này]` placeholder into `{{điền chỗ này}}` (see types.ts). Exercises → `worksheet`; checklists/decision gates → `checklist` with ids unique in module (`gate` for the module gate).
8. Quotes from the author's own philosophy lines may use `quote`.
9. Each Section: `id` kebab-case ASCII unique, `kicker` (e.g. `WHY · Bài 1.2`, use the curriculum's own labels), `title`, optional `highlight` (substring of title), optional `lead`. Aim ~8–14 sections per module, scannable: callouts, cards, steps, tables, accordions — not walls of text.
10. Files: `module-0X/index.ts` (default export `CourseModule`, imports sections) + `section-<id>.ts` each `export const section: Section` (or `sections: Section[]`), ≤ ~250 lines per file (split otherwise). Short header comment per file: which curriculum part it came from (NO absolute/vault paths).

## Image rules
- Use the newest variant (files with "(sửa)" / "— sửa" replace the original). Skip "Ảnh gốc" folders.
- Convert PNG → WebP, keep 1536 px width, quality ≈ 80, target ≤ 350 KB each. Output name = kebab-case ASCII slug without diacritics, e.g. `quy-trinh-5-chang.webp`. Read width/height from the OUTPUT file. Use vault Python (`python -I`, Pillow is installed):
  ```python
  from PIL import Image; im=Image.open(src).convert("RGB"); im.save(dst,"WEBP",quality=80,method=6); print(im.size)
  ```
  (or `sharp` from repo node_modules). Never reference an image file that does not exist.
- `alt` (1–2 factual sentences, main numbers/terms) and `caption` (`Hình N · ...`, N counts per module) in Vietnamese. Derive from the matching `Prompt ảnh — Module 0X/*.md` (it states exact content of each infographic); open a few images to spot-check.
- Place each figure next to the section it illustrates.

## Quality gates (all agents)
- `npx tsc --noEmit` passes (run in repo root). `npx eslint <your files>` clean.
- Code files < 200 lines (repo rule; data files ≤ ~250), kebab-case descriptive names, no `any`, no dangerouslySetInnerHTML, no new dependencies without asking.
- Real implementation, no mocks/placeholders (stub files are replaced entirely).
- Don't run `next build` / `next dev` unless your brief says so (infra only; one dev server).
- Never delete files you don't own. Never touch `.env*`, secrets, `.claude/`, `.agents/`.
- Windows + Git Bash; paths with `[locale]` brackets need `-LiteralPath` in PowerShell.

## Report (required, short, grammar can be sacrificed)
Write `plans/reports/<agent>-report.md`: done / files created (list) / coverage table / assumptions / source gaps & things marked unverified / UNRESOLVED QUESTIONS (end). Reply with the same short summary.
