# m04 report — Module 04 Design (data + images)

Status: DONE. Local only (no commit/push/upload). Lane respected: only `lib/data/course-playbook/module-04/**` and `public/images/course-playbook/module-04/**`.

## Validation
- `npx tsc --noEmit` (whole repo) passes. Also checked module-04 alone with a temp tsconfig (clean).
- `npx eslint lib/data/course-playbook/module-04` clean.
- Script checks (temp, not committed): 20 section ids unique + kebab-case; every `highlight` is a substring of its title; 17 figures exist on disk, captions numbered `Hình 1…17` in page order; worksheet/checklist ids unique; no `[[`, callout syntax, ACR/U-/Q- ids, "pending/approved", absolute paths, stale "Module 3/4" in text.
- Verbatim check (script): all **22 prompt blocks** match source exactly after `{{x}}`→`[x]` (only Prompt 06 deviates on purpose, see Assumptions).
- Largest data file 204 lines (`blueprint-components.ts`); all others ≤ 172.

## Files (module-04)
`index.ts` · `section-tong-quan.ts` · `section-quy-trinh-5-chang.ts` · `section-bai-4-1.ts` … `section-bai-4-12.ts` (12 files) · `blueprint-components.ts` (7 accordion items for 4.4) · `section-bo-prompt-thiet-ke.ts` · `section-prompt-tim-y-tuong.ts` + `prompts-tim-y-tuong-a.ts` (prompts 1–4) + `prompts-tim-y-tuong-b.ts` (5, after-data, 6–8) · `section-mau-bai-tap-rubric.ts` · `section-nguyen-tac.ts` · `section-case-thuc-te.ts` · `section-cong-g4.ts`.
Stub `index.ts` replaced. Images: 17 WebP in `public/images/course-playbook/module-04/`.

## Coverage table (source → section id)
| Source part | Section id |
|---|---|
| 1 Mục tiêu, học viên, điều kiện đầu vào, 5 kết quả | `tong-quan` |
| 2 Phương pháp 4MAT, thời lượng 360 phút | `tong-quan` |
| 3 Quy trình 5 chặng | `quy-trinh-5-chang` |
| Bài 4.1 (source "3.1") App đẹp chưa chắc bán được | `bai-4-1` |
| Bài 4.2 UX là một phần hệ thống bán app | `bai-4-2` |
| Bài 4.3 Thiết kế ngược từ giá trị | `bai-4-3` |
| Bài 4.4 7 thành phần Product Blueprint | `bai-4-4` (+ `blueprint-components.ts`) |
| Bài 4.5 ChatGPT tạo Product Brief (Prompt 01) | `bai-4-5` |
| Bài 4.6 User Journey + Screen Map (Prompt 02) | `bai-4-6` |
| Bài 4.7 Design Template (Prompt 03) | `bai-4-7` |
| Bài 4.8 Batch UI (Prompt 04, 04B) | `bai-4-8` |
| Bài 4.9 Onboarding, Aha, Paywall (Prompt 05) | `bai-4-9` |
| Bài 4.10 Build-Ready Pack (Prompt 06) | `bai-4-10` |
| Bài 4.11 Usability Test + Design Review (Prompt 07) | `bai-4-11` |
| Bài 4.12 Present & Handoff, quy tắc kết thúc module | `bai-4-12`, `cong-g4` |
| 8 Bộ prompt dùng ngay: thứ tự chạy, 5 voice prompt, lưu ý | `bo-prompt-thiet-ke` |
| File "Prompt mẫu — tìm ý tưởng" (8 prompt + after-data + mẫu ghi kết quả) | `bo-prompt-tim-y-tuong` (id; file `section-prompt-tim-y-tuong.ts`) |
| 9.1 Mẫu Blueprint, 9.2 Bài tập cuối, 9.3 Rubric | `mau-bai-tap-rubric` |
| 10 Nguyên tắc ứng dụng + tuyên ngôn | `nguyen-tac-ung-dung` |
| Tài liệu tham khảo + 3 case (Frederick James, Snag, Symmetry) | `case-thuc-te` |
| Cổng G4 (6 mục, checklist id `gate`) | `cong-g4` |

20 sections (plan aim was ~8–14; 12 lessons alone exceed it, rule 2 wins).
Blocks: 22 prompt blocks (8 design incl. 04B + 5 voice + 9 idea-finding incl. after-data) · 5 worksheets (`core-value-statement`, `cat-tinh-nang-mvp`, `phan-hoi-usability-test`, `ghi-ket-qua-sau-moi-buoc`, `blueprint-7-thanh-phan`) · 3 checklists (`tieu-chi-batch-ui`, `bai-nop-cuoi-module`, `gate`) · 3 `case` blocks · 2 accordions (7 Blueprint components; 8 idea prompts).
The two prompt sets are labelled apart: "Bộ 8 prompt thiết kế" vs "Bộ 8 prompt tìm ý tưởng" (callouts in `tong-quan`, `bo-prompt-thiet-ke`, `bo-prompt-tim-y-tuong`).

## Images
Used (17, all 1536×1024, 147–233 KB, q80): bìa, 02, 03, 04, 05, 06, 07, 08(sửa), 09, 10, 11(sửa), 12, 13, 14(sửa), Case 01/02/03. Figure → section: Hình 1 `tong-quan`; 2 `quy-trinh-5-chang`; 3–5 `bai-4-1…4-3`; 6–7 `bai-4-4`; 8–13 `bai-4-5…4-10`; 14 `bai-4-11` (image covers 4.11–4.12); 15–17 `case-thuc-te`.
Skipped: original (pre-"sửa") 08, 11, 14; folder "Ảnh gốc — Module 04"; the 6 sample WebPs (reconverted from PNG instead). Spot-checked visually: 11(sửa), 14(sửa), Case 03. Alt/caption derived from `Prompt ảnh — Module 04/*.md`.

## Assumptions
- Lessons numbered 4.1–4.12 (owner confirmed; source body says 3.x). "Module 4 — Build" → "Module 05 — Build"; "Module 1–2" → "Module 01–03" (as on infographics).
- **Only deliberate deviation from verbatim:** Prompt 06 text: "Module 4" → "Module 05" (twice), "Module 3" → "Module 04" (once), to match site numbering.
- Voice prompts: removed `**` and outer quotes. Prompt blocks have no `output` field for design prompts; the `output` block follows each lesson instead.
- Every `[slot]` in prompts → `{{slot}}`, including in-sentence format slots ("Khi [tình huống]…", "App giúp [ai]…"), same as the approved sample. Copy still yields `[slot]`.
- Mermaid diagrams (4.2, 4.3, 4.6) rendered as ordered list / paragraph / table (no diagram block in contract).
- Core Value Statement template sits in a callout with literal `[…]` (no `(url)` after them); renderer should not treat as links.
- Idea-finding prompts live in an accordion (item 5 holds 2 prompts: prompt 5 + "sau khi có dữ liệu thật").
- Worksheet fields derived only from source lists (Blueprint template 33 fields, Prompt 07 table columns, 4.2 sentence slots, 4.3 exercise). G4 item wording follows the approved sample (paraphrase of the 4.12 end-of-module rule).
- Cases placed together near the end, tag shows lesson range from the infographics. Quote blocks: 2 short English sentences each + Vietnamese translation from the author's slides.
- `facts`: Thời lượng, Phương pháp (4MAT), Công cụ chính, Bàn giao sang. Output/gate are in their own fields.

## Source gaps / unverified
- Case numbers (Frederick $10K title / ~$13K peak / ~$25K 90 days / MRR ~$8K / 7%; Snag ~$30K MRR, 100K+ users, 9K conversions, $80K+, ~3.3K reviews; Symmetry +3%, ~$160K, ~3M downloads, 80,000 UGC videos) come from the author's slide prompts, which say they come from Starter Story transcripts. I did NOT have the transcripts. All marked "tự công bố, chưa kiểm chứng độc lập"; source inconsistencies kept on page (Symmetry $160K vs $150K, +3% absolute/relative unknown, Frederick app name hidden, Snag playbook skips Figma).
- Idea-finding prompt set: vault note says author/source not stated. No credit on page. Example app names in its outputs (Cal AI, Hevy, MacroFactor, Eatsy) kept as in source, unverified.
- The vault's own AI note claiming idea prompts 6·7·8 "correspond to" design prompts 02·03·04 is unapproved: NOT used.
- Master Framework mentions 8 training components; curriculum uses 7 Blueprint components → used 7.
- Source never states a price/plan for the app; none shown (the "sửa" images already removed invented prices).

## UNRESOLVED QUESTIONS
1. Idea-finding prompt set has no author in the vault: add a credit line, or leave uncredited?
2. 20 sections vs plan's 8–14: OK, or merge (e.g. 4.1+4.2, 4.11+4.12) to shorten the TOC?
3. Keep Prompt 06's Module renumbering (04/05) or restore source wording ("Module 3/4")?
4. All 17 infographics print "tony@tranvanhoang.com" in the footer (brand line baked into the image). OK to publish, or regenerate?
5. Case figures: verify against Starter Story transcripts before `COURSE_INDEXABLE=true`?
6. In-sentence format slots ("Khi {{tình huống}}…") are highlighted as fill-ins; revert to plain text for those two sentences?
7. Infra: confirm renderer handles `prompt` blocks inside `accordion`, a 33-field worksheet, and `[x]` without `(url)` in InlineText.
