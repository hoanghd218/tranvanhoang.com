# m01 report — Module 01 · Market

Status: done. Local only, no commit / push / upload. `npx tsc --noEmit` pass, `npx eslint lib/data/course-playbook/module-01` clean. Extra check script (not committed): section ids unique + kebab ASCII, every `highlight` is substring of title, 16 figures exist + width/height match files + "Hình N" numbering = page order, no figure twice, no unused image, no vault noise in text, Master Prompt text identical to source (only `[x]` → `{{x}}`, 10 placeholders).

## Files (all in `lib/data/course-playbook/module-01/`)
- `index.ts` — default export `CourseModule` (slug module-01, headline "Chọn đúng khách hàng trước", highlight "đúng khách hàng", output "Market Opportunity Report", gate G1 · Market Fit, 5 facts, 21 sections).
- `figures.ts` — 16 `Figure` objects (src/width/height/alt/caption), one place for "Hình N" numbering.
- `master-prompt-text.ts` — Master Prompt verbatim (generated from source by script).
- 21 × `section-<id>.ts` (each ≤ 195 lines): tong-quan, market-first, chon-sai-thi-truong, dinh-nghia-nen-tang, bay-nguyen-tac-before, nam-yeu-to-market-fit, ba-con-duong, phan-khuc-va-noi-dau, kinh-te-thi-truong, kenh-tiep-can, ba-bo-loc, playbook-7-buoc, cong-cu-va-bang-chung, scorecard, sai-lam-va-cach-lam-tot, master-prompt, case-study, thich-ung, thu-thach-va-bao-cao, decision-gate, tong-ket.
- 16 × `public/images/course-playbook/module-01/*.webp` (132–186 KB each).

## Coverage (V6.0 → section id, source order)
| Curriculum part | Section id |
|---|---|
| Tổng quan: mục tiêu, phạm vi, "chưa làm", cấu trúc 4MAT, workflow tổng thể | `tong-quan` |
| 1.1 Market-First Mindset · 1.2 Wrong Market Problem | `market-first` |
| 1.3 Hậu quả chọn sai · 1.4 Why Right Market Matters · 1.5 Case 3AK | `chon-sai-thi-truong` |
| 2.1 Market Fundamentals (định nghĩa, phân cấp, User vs Buyer) | `dinh-nghia-nen-tang` |
| 2.2 7 BEFORE Principles (+ hai nguyên tắc dẫn dắt) | `bay-nguyen-tac-before` |
| 2.3 5-Factor Market Fit (5 factor) | `nam-yeu-to-market-fit` |
| 2.4 Three Paths | `ba-con-duong` |
| 2.5 Segmentation · 2.6 Demand & Customer Pain | `phan-khuc-va-noi-dau` |
| 2.7 Market Economics (+ TAM/SAM/SOM) | `kinh-te-thi-truong` |
| 2.8 Distribution Accessibility | `kenh-tiep-can` |
| 2.9 Ba bộ lọc bổ sung | `ba-bo-loc` |
| 3.1 7-Step Playbook (+ bài tập Founder Profile) | `playbook-7-buoc` |
| 3.2 Research Toolkit + 3 cấp độ bằng chứng | `cong-cu-va-bang-chung` |
| 3.3 Market Fit Scorecard | `scorecard` |
| 3.4 Pitfalls & Best Practices | `sai-lam-va-cach-lam-tot` |
| 3.5 Master Prompt | `master-prompt` |
| 4.1 Case Study Comparison (5 case + câu phản biện) | `case-study` |
| 4.2 Market Adaptation Challenge (A/B/C) | `thich-ung` |
| 4.3 Winning Market Challenge · 4.4 Market Fit Report | `thu-thach-va-bao-cao` |
| 4.5 Decision Gate (8 câu + 3 quyết định) | `decision-gate` |
| Tổng kết · Triết lý kết thúc | `tong-ket` |
| "Kiểm tra độ đầy đủ theo 10-Point" | omitted on purpose: author-internal checklist (source says "checklist nội bộ"); 10-Point only mentioned in `tong-quan` |

Blocks of note: prompt ×1 (`master-prompt`) · worksheets ×6 (`founder-profile`, `tinh-huong-a/b/c`, `winning-market`, `bao-ve-quyet-dinh`) · checklists ×2 (`gate` = 8 câu G1, `market-fit-report` = 14 thành phần) · case ×6 (3AK in WHY + 5 in 4.1).

## Images
18 PNG files in folder = **16 distinct infographics** (2 originals superseded by "(sửa)": Bìa, 5 founder — skipped). All 16 used, each once.
| Hình | File | Section |
|---|---|---|
| 1 | bia-chon-dung-khach-hang-truoc | tong-quan |
| 2 | dung-bat-dau-tu-y-tuong-app | market-first (also shows the 6 risks of next section) |
| 3 | thu-hep-nhom-khach-hang | dinh-nghia-nen-tang (also covers 2.5's 7 chiều chia nhóm) |
| 4 | 7-nguyen-tac-lam-truoc-lam-sau | bay-nguyen-tac-before |
| 5 | 5-yeu-to-chon-thi-truong | nam-yeu-to-market-fit |
| 6 | 3-cach-tim-thi-truong | ba-con-duong |
| 7 | khach-co-dau-du-tra-tien | phan-khuc-va-noi-dau |
| 8 | thi-truong-co-ra-tien-khong | kinh-te-thi-truong |
| 9 | 7-kenh-tiep-can | kenh-tiep-can |
| 10 | 3-bo-loc-truoc-khi-chot | ba-bo-loc |
| 11 | 7-buoc-dung-chatgpt | playbook-7-buoc |
| 12 | 8-cong-cu-nghien-cuu | cong-cu-va-bang-chung |
| 13 | cham-diem-thi-truong | scorecard (also has the 10 mistakes; `sai-lam-...` points back to it) |
| 14 | phieu-10-thong-tin | master-prompt (Phần A) |
| 15 | 5-founder-5-cach-chon | case-study (its bottom band = 4.2 A/B/C; `thich-ung` points to it) |
| 16 | chot-thi-truong-decision-gate | decision-gate |

Conversion: PIL WebP q80 method 6. Source sizes are mixed (16:9 1672×941 → resized to 1536×864; squares 1254×1254 and portraits 1024×1536 kept, **not upscaled**). dims read from output files. Spot-checked 4 images visually (Hình 1, 13, 15, 16): text matches the prompt files and my alt.

## Source gaps / things marked unverified
- V3.0 used for ONE gap only: "cách đọc một case" chain (WHO → PROBLEM → DEMAND → PAYMENT → DISTRIBUTION → FOUNDER ADVANTAGE → LESSON), absent from V6.0 (in `case-study`). V3.0's 6 exercises not used (V6.0's 4.3 challenge covers them).
- V6.0 has NO revenue numbers in text. The only numbers are inside source video titles ("$20K/month" …). Shown only as video titles in `source` lines with "tự công bố, chưa kiểm chứng độc lập". Channel name "Starter Story" comes from the vault clipping folder/frontmatter of those notes, not from the curriculum.
- LaunchFast: curriculum names no source video → source line says so and treats it as self-reported.
- No lesson durations / minutes exist in Module 01 sources → `facts` has counts only (4 phần, 7 BEFORE, 5-Factor, 7 bước, 100 điểm).
- Infographic-only content NOT repeated in body text (persona "Minh", the 80/100 sample table, example rows). Only reuse: the 7 "question chips" on the BEFORE/5-factor accordions and Hình 15's A/B/C hints come from the image prompt files (course material), not V6.0.
- Scorecard LaTeX formula rewritten in plain text; one tiny worked line "(4 ÷ 5) × 20 = 16" derived from the formula (same as the infographic example).

## Assumptions
- Hero `output` kept as brief says: "Market Opportunity Report". V6.0 calls the deliverable "Market Fit Report" everywhere; `tong-quan` has a callout saying the two names are the same final product. Assumption, please confirm.
- 21 sections > plan's "~8–14" aim: rule 2 (cover every part, in order) won; infra TOC should cope (each has a short `tocLabel`).
- Master Prompt `hint`/`when`/`output` are my short Vietnamese lines; `text` is verbatim.
- Glosses of English terms are mine (first use per module), definitions from source.

## Proposals (not done, types.ts untouched)
- None blocking. Table first column could use a "row header" style; I used `**bold**` in cells.

## UNRESOLVED QUESTIONS
1. Output name on hero: keep "Market Opportunity Report" (framework) or switch to "Market Fit Report" (curriculum)? Page text currently shows both with a bridging callout.
2. OK to show video titles containing revenue ("$20K/month" …) with the "tự công bố" flag, or strip numbers and cite channel only?
3. LaunchFast: which video is the source (to add citation)?
4. Market Fit Report has 14 components in 4.4 vs 17 headings in Master Prompt part D: intentional in source? Left both as is.
5. 21-item TOC acceptable, or should infra group by WHY/WHAT/HOW/WHAT IF?
