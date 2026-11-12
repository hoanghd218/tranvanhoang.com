# m02 report — Module 02 · Opportunity

Status: DONE. Local only (no commit / push / upload). Checks: `npx tsc --noEmit` exit 0, `npx eslint lib/data/course-playbook/module-02` exit 0, own validator (unique ids, highlight ⊂ title, figures exist ≤350 KB and numbered Hình 1–24, links https only, no vault noise, table rows = head length, case sources carry "chưa kiểm chứng") = no problems. Master Prompt text verified byte-identical to source (only `[ DÁN … ]` → `{{DÁN …}}`). Did not run next dev/build.

## Files (all under `lib/data/course-playbook/module-02/`)
- `index.ts` — CourseModule (15 sections, 5 facts, gate G2 · Opportunity Fit)
- `helpers.ts` — `IMG`, `UNVERIFIED` (shared warning line), `figureBlock()`
- Sections (15): `section-tong-quan` · `section-khai-niem` · `section-nguyen-ly` · `section-sau-phuong-phap` · `section-cach-1-2` · `section-cach-3-4` · `section-cach-5-6` · `section-tong-ket` · `section-canvas` · `section-sai-lam` · `section-quy-trinh` · `section-thu-vien-case` · `section-ai-master-prompt` · `section-dau-ra-brief` · `section-cong-quyet-dinh`
- Method blocks (spread into the 3 pair sections): `method-01.ts` … `method-06.ts`
- Prompt: `master-prompt-a.ts` / `-b.ts` / `-c.ts` (generated from source by script, 202/103/133 lines) + `master-prompt.ts` (joins)
- Largest hand-written file 173 lines. No `any`.
- Images: `public/images/course-playbook/module-02/*.webp` — 24 files, 1536×1024, 159–247 KB each (4.7 MB total).

## Coverage (curriculum → section id)
| Curriculum part | Section id |
|---|---|
| Chủ đề, Big Idea, intro | `tong-quan` |
| §1 cấu trúc 4MAT × 10-Point | not a section (instructor-facing); labels reused as kickers (WHY/WHAT/HOW/WHAT IF · 01…10) |
| 01 Overview 1.1 vấn đề · 1.2 Marc Lou · 1.3 kết quả học tập | `tong-quan` |
| 02 Definition 2.1 · 2.2 Opportunity Equation · 2.3 đầu vào M01 | `khai-niem-nen-tang` |
| 03 Core Philosophy (7 nguyên lý) | `bay-nguyen-ly` |
| 04 Framework — bảng 6 phương pháp | `sau-phuong-phap` |
| 04 Method 01 Solve Your Own Problem | `cach-1-2` |
| 04 Method 02 Proven App Reverse Engineering | `cach-1-2` |
| 04 Method 03 Localization & Verticalization | `cach-3-4` |
| 04 Method 04 Community Pain Mining | `cach-3-4` |
| 04 Method 05 Emerging Trend Discovery | `cach-5-6` |
| 04 Method 06 Hidden & Underserved Niche | `cach-5-6` |
| 04 Tổng kết sáu phương pháp | `tong-ket-sau-phuong-phap` |
| 05 Opportunity Components · 5.1 Statement + Fact/Inference/Assumption/Unknown · 5.2 kết hợp phương pháp | `opportunity-canvas` |
| 06 Common Pitfalls (12 sai lầm + tình huống phản biện) | `sai-lam-can-tranh` |
| 07 Playbook 7 bước · 7.1 Matrix · 7.2 Scorecard · 7.3 bộ lọc 2 tầng | `quy-trinh-7-buoc` |
| 08 Case Library · 8.1 khung 8 câu | `thu-vien-case` |
| 08.2 kế hoạch slide (34 slide) | OMITTED (instructor-facing) |
| 09 · 9.1 vai trò AI · 9.2 5 vòng phỏng vấn · 9.3 Master Prompt · 9.4 mô phỏng | `ai-phong-van-phan-bien` |
| 10.1 ba sản phẩm · 10.2 cấu trúc Brief | `dau-ra-opportunity-brief` |
| 10.3 Decision Gate (checklist id `gate`) · 10.4 8 tình huống WHAT IF · 5 phiên học · kết luận định vị | `cong-quyet-dinh` |
| "Slide nên có" lines, "Ghi chú lưu trữ", ghi chú infographic | OMITTED (instructor / vault-internal) |

Cases (14, each = `case` block + its figure):
| Case | Section | Hình |
|---|---|---|
| 00 Marc Lou | tong-quan | 2 |
| 01 BulkMockup · 02 Voicy | cach-1-2 | 6 · 7 |
| 03 Prayer Lock · 04 Shipper | cach-1-2 | 8 · 9 |
| 05 Cal Buddy · 06 Symmetry | cach-3-4 | 11 · 12 |
| 07 Algrow · 08 Elephas | cach-3-4 | 13 · 14 |
| 09 Pep AI · 10 Postiz | cach-5-6 | 16 · 17 |
| 11 3AK · 12 Hero Analytics · 13 Savvy Nomad | cach-5-6 | 18 · 19 · 20 |
Snag (supplementary) has no slide → only a link row in `thu-vien-case`.

Blocks used: case ×14, worksheet ×9, checklist ×1 (`gate`, 8 items), prompt ×1, table ×17, cards ×11, steps ×8, figure ×24. No accordion.
Worksheet ids: personal-problem-inventory, competitor-reverse-engineering, localization-opportunity-map, community-pain-mining-report, trend-to-opportunity-report, underserved-niche-map, opportunity-canvas, opportunity-statement, app-opportunity-brief.

## Images
- Used (24): concept 01–10 (09 = "— sửa" version) → Hình 1, 3, 4, 5, 10, 15, 21, 22, 23, 24; cases 00–13 (Case 10 and Case 12 = "— sửa" versions) → Hình 2, 6–9, 11–14, 16–20. Slugs: kebab ASCII (`case-05-cal-buddy.webp`, `7-buoc-tim-loc-chon-co-hoi.webp`, …).
- Skipped (3): original 09, original Case 10 Postiz, original Case 12 Hero Analytics (superseded). `Prompt ảnh` .md files used for alt/captions/case facts only.
- Spot-checked visually: Case 01, Case 12 (matches prompt text and "sửa" changes). Q=80 was enough for all (no quality fallback needed).
- Figure 10 (AI + Decision Gate) sits in `ai-phong-van-phan-bien`; figure 22 (12 sai lầm + 8 tình huống) sits in `sai-lam-can-tranh` (8 WHAT-IF table is in `cong-quyet-dinh`).

## Assumptions
1. Case facts come from the per-image prompt files (founder transcripts, owner-verified) where they differ from the Giáo trình text; both numbers are shown when they conflict (Voicy, Pep AI, Postiz, 3AK, Algrow). Giáo trình's own caveat list was the guide.
2. Case block = 3 columns (Bối cảnh & cách tìm cơ hội · Thu tiền & kết quả tự công bố · Bài học & câu hỏi phản biện); founder/product in title/tag; `source` = Starter Story title + YouTube link (utm param stripped) + timestamps + `UNVERIFIED` sentence + platform note ("không phải mobile app") where the vault says so.
3. One founder line per case kept as a Vietnamese translation (slide's own translation) with timestamp; English originals not reproduced (plan rule 5).
4. Three worksheets (`opportunity-canvas`, `opportunity-statement`, `app-opportunity-brief`) are derived fill-in tools, not explicit "Bài thực hành" in the source; the other six are the source's named exercises.
5. Step titles carry no manual numbers (assumes renderer auto-numbers `steps`); cards keep "1 · …" numbers (cards don't auto-number).
6. Written in neutral second person; instructor phrasing ("Tôi đề xuất", "Giảng viên không nên…") rewritten.
7. Facts (hero): 6 phương pháp · 7 bước · 14 case thật có infographic · 100 điểm · 5 phiên. No lesson/minute counts (source has none).
8. 15 sections (target was ~8–14): kept `tong-ket-sau-phuong-phap` and the output/gate split for source order and the gate being last.

## Source gaps / discrepancies (flagged, not invented)
- Concept slide 04 (Cách 1-2) says BulkMockup "Khách trả $300 mua luôn công cụ"; Case 01 slide / vault note say the video does not say that. Page text follows the transcript note; Hình 5 still shows the old wording.
- App Opportunity Brief: 12 mục (10.2) vs 16 mục (Master Prompt Phase 7). Worksheet uses 12; a callout mentions the 16-item prompt version.
- Marc Lou slide: "Marketplace 35K+/tháng" — unit not given in source; kept as is. Pep AI: "1 story Instagram của influencer = $1.000" — meaning ambiguous; kept as is.
- Symmetry: video does not describe localization (Starter Story's grouping) — stated on page. Elephas: only partial fit with Cách 4 — stated on page.
- Master Prompt cites CardStock and Lancer (no case/material in this module) and Snag (no slide) — kept verbatim.
- All third-party figures are founder self-reported; each case source line says so ("chưa kiểm chứng độc lập").

## Proposals for types.ts
None needed. (Optional: `StepItem` numbering behaviour and table-cell link support should be confirmed by infra; both are used.)

## UNRESOLVED QUESTIONS
1. Regenerate concept slide 04 so BulkMockup wording matches Case 01, or accept the mismatch with Hình 5?
2. Brief structure: keep 12-mục (10.2) in the worksheet, or switch to the 16-mục version from the prompt?
3. Is 15 sections OK, or merge `tong-ket-sau-phuong-phap` into `cach-5-6` (→ 14)?
4. OK to publish the 15 distinct third-party YouTube links (14 case sources + Snag) and 14 short translated founder quotes, or strip them?
5. Keep the 3 derived worksheets (canvas / statement / brief), or only the 6 named exercises?
6. Renderer: does `steps` auto-number and do `table` cells render inline links (used in `thu-vien-case`)?
