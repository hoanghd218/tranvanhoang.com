# m03 report — Module 03 · Validate

Status: done. No commit / push / upload. Gates: `npx tsc --noEmit` (whole repo) pass · `npx eslint lib/data/course-playbook/module-03` pass · scripted check: 21 section ids unique + kebab-case, `highlight` ⊂ title, block ids unique, table column counts match, 8 figures exist with `Hình 1..8` in page order, no wikilink/callout/ACR/U-/Q-/path noise.

## Files created
`lib/data/course-playbook/module-03/` (index.ts replaced; 21 section files, max 250 lines, no `any`):
index.ts · section-tong-quan · section-why-vi-sao · section-why-case-study · section-what-dinh-nghia · section-what-bon-gia-thuyet · section-what-thang-bang-chung · section-what-discovery-experiment · section-what-commitment-metric · section-how-quy-trinh · section-how-buoc-1 … section-how-buoc-7 · section-what-if · section-thuc-hanh · section-cong-cu · section-tieu-chuan · section-cong-g3 (all `.ts`).

`public/images/course-playbook/module-03/` (8 webp, all 1536×1024, q=80, 193–219 KB each).

Block mix: 61 callout · 34 table · 9 case · 8 worksheet · 3 checklist · 3 accordion · 4 steps · 14 cards · 8 figure · 8 quote · 3 output.

## Coverage (curriculum part → section id)
| Curriculum | Section id |
|---|---|
| Mở đầu: thông điệp cốt lõi, nối Module 02/04, 4MAT, kết quả học tập | `tong-quan` |
| I · 1.1 Vấn đề không còn chỉ là lập trình; 1.2 Bốn giả định sai (kèm case Money AI) | `why-vi-sao` |
| I · 1.3 Ba case (Once, Algrow, Fastlane); 1.4 Mục tiêu cuối + 5 câu hỏi | `why-case-study` |
| II · 2.1 Định nghĩa Business Validation; 2.2 Validation vs PMF | `what-dinh-nghia` |
| II · 2.3 Bốn giả thuyết; 2.4 User/Buyer/Customer | `what-bon-gia-thuyet` |
| II · 2.5 Evidence Ladder (0–6) | `what-thang-bang-chung` |
| II · 2.6 Customer Discovery; 2.7 Validation Experiment; 2.8 Chỉ số | `what-discovery-experiment` |
| II · 2.9 Commitment Metric; 2.10 Khái niệm cần phân biệt | `what-commitment-metric` |
| III · mở đầu: 7 bước (+ mốc ngày từ 5.2) | `how-quy-trinh` |
| III · Bước 1 (3.1.1–3.1.4) | `how-buoc-1` |
| III · Bước 2 (3.2.1–3.2.6) | `how-buoc-2` |
| III · Bước 3 (3.3.1–3.3.4) | `how-buoc-3` |
| III · Bước 4 (3.4.1–3.4.6) | `how-buoc-4` |
| III · Bước 5 (3.5.1–3.5.7; case Flame, LaunchFast) | `how-buoc-5` |
| III · Bước 6 (3.6.1–3.6.5) | `how-buoc-6` |
| III · Bước 7 (3.7.1–3.7.3) | `how-buoc-7` |
| IV · 4.1 Mười tình huống; 4.2–4.7 sáu tình huống khó (cases Jordan Rejaud, Cal Buddy, Voltaire) | `what-if` |
| V · 5.1–5.4 Bài thực hành 14 ngày | `thuc-hanh-14-ngay` |
| VI · 6.1 Vai trò ChatGPT; 6.2 Bảy tài liệu; 6.3 Validation Decision Report | `cong-cu-san-pham` |
| VII · Thang 100 điểm + điều kiện hoàn thành | `tieu-chuan-danh-gia` |
| VIII · Kết nối Module 04; tóm tắt 4MAT; tư duy cuối; gate | `cong-g3` |

Worksheets: `phieu-thu-nghiem` (7 thành phần Experiment) · `phieu-validation-brief` (12 trường) · `phieu-phong-van` · `phieu-danh-gia-kenh` · `phieu-commitment-threshold` · `phieu-evidence-report` · `phieu-ke-hoach-14-ngay` · `phieu-decision-report` (A–H). Checklists: `do-tin-cay` (6 tiêu chí 3.7.2) · `dieu-kien-hoan-thanh` (3 năng lực) · `gate` (7 tài liệu 6.2).

## Images (8 used, 0 skipped)
| Hình | File | Section | Source infographic |
|---|---|---|---|
| 1 | bia-dung-xay-app-khi-chua-co-bang-chung.webp | why-vi-sao | 01 Bìa |
| 2 | bon-gia-thuyet-phai-kiem-chung.webp | what-bon-gia-thuyet | 02 |
| 3 | thang-bang-chung-va-commitment-metric.webp | what-thang-bang-chung | 03 |
| 4 | bay-buoc-kiem-chung-trong-14-ngay.webp | how-quy-trinh | 04 |
| 5 | validation-brief-va-offer.webp | how-buoc-1 | 06 |
| 6 | kiem-chung-kenh-phan-phoi.webp | how-buoc-5 | 07 |
| 7 | doc-bang-chung-quyet-dinh-go-pivot-kill.webp | how-buoc-7 | 05 |
| 8 | khi-ket-qua-khong-ro-rang.webp | what-if | 08 |
Opened 05, 06, 07, 08 to spot-check; content matches curriculum. Alt/caption derived from `Prompt ảnh` files.

## Source gaps / things not in curriculum
- **No ready-made prompts** in the curriculum (only 6 ChatGPT roles 6.1 + 6 analysis tasks 3.2.5). So zero `prompt` blocks; roles/tasks shown as tables. Nothing invented.
- **No explicit G3 checklist** in source. `gate` built from the 7-document Validation folder (6.2); riskNote from 3.7.3 + Part VIII. This is my composition, not a verbatim list.
- **No lesson count / minutes** in source → hero `facts` only: 7 bước · 4 giả thuyết · lịch mẫu 14 ngày (đề xuất) · thang 100 điểm.
- **No numeric GO/PIVOT/KILL thresholds** in source; source explicitly says "không áp ngưỡng 10 người hay 10% cho mọi app". Decision rules shown qualitatively only. All numbers in 5.3 (12/9/240/24/8/6/3, 10%, 12,5%) and 3.2.6 are labelled "giả định".
- SpeakReady AI price 199.000đ kept, labelled "chỉ là giả thuyết, không phải giá thị trường".
- Evidence Ladder labelled "thang do tác giả tổng hợp, không phải thang đo chính thức" (as source).

## Third-party data (all via Starter Story, founder-told)
Money AI (Flo, ~$300 MRR), Once (Brian Shin, 250–300 contacts / ~15 replies / ~12 events), Algrow (Sam Adeniyi), Fastlane (Gaurav, ~20 calls/week, ~2.000 calls), Flame (An Nayal, VSC criterion 100k views / <5k followers), LaunchFast (Hassam), Jordan Rejaud, Cal Buddy (Tomer), Voltaire (Rasty). Each in a `case` block with source line "Starter Story … do founder tự kể/tự công bố, chưa kiểm chứng độc lập". Source text itself says "chia sẻ / cho biết"; the "tự công bố" wording matches the infographic note. Video titles omitted (contain revenue claims, not needed). No transcript quotes.

## Assumptions
- 21 sections (> 8–14 aim) because rule 2 (cover every part, source order) beats the aim; each has a short `tocLabel`.
- Author voice "tôi đề xuất" → neutral ("được đề xuất"/"tác giả"). Lessons from author kept in separate `callout`, third-party facts in `case`.
- `output: "Validation Report"` to match `course.ts` + brief; curriculum formal name is "Validation Decision Report" — `tong-quan` bridges both names.
- Figure order in page ≠ vault numbering (06→Hình 5, 07→Hình 6, 05→Hình 7, 08→Hình 8) so `Hình N` is sequential in reading order.
- Image filenames and section ids are ASCII kebab-case (no diacritics).
- Typed whole-repo `tsc` passed at the end; earlier a transient syntax error in `module-01/master-prompt-text.ts` (m01's lane) blocked it, now gone.

## UNRESOLVED QUESTIONS
1. Images 06, 07, 08: vault marks them "3 ảnh chi tiết bổ sung (chờ Hoàng duyệt)". Kept all 3 in the page. Drop them (delete 3 figure blocks + renumber captions)?
2. Want me to draft ChatGPT prompt blocks from the 6 roles (6.1) / 6 analysis tasks (3.2.5)? Needs owner OK since source has none.
3. Hub `output` "Validation Report" vs curriculum "Validation Decision Report" — unify to which?
4. OK that `gate` is derived from 6.2 (7 documents), or does owner have a real G3 definition elsewhere?
5. Is "Starter Story, founder tự công bố" wording acceptable for all 9 case sources, since the vault source text does not itself say "chưa kiểm chứng"?
