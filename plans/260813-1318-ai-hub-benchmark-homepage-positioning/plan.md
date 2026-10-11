---
title: "Tái định vị thông điệp homepage Tony Hoang"
description: "Benchmark AI Hub Vietnam để làm rõ thương hiệu cá nhân, bằng chứng và thứ tự CTA"
status: completed
priority: P1
tags: [homepage, positioning, content, conversion, personal-brand]
created: 2026-08-13
---

# Kế hoạch tái định vị homepage Tony Hoang

## Mục tiêu

- Trong 5 giây trả lời rõ: Tony là ai, giúp ai, giúp tạo kết quả gì, vì sao đáng tin.
- Chuyển homepage từ lời hứa rộng sang thương hiệu cá nhân dựa trên công việc thật.
- Dẫn người mới tới nội dung hữu ích trước; thu lead sau khi đã tạo đủ niềm tin.

## Benchmark và khoảng trống

- [AI Hub Vietnam](https://aihubvn.com/) dùng một promise ngắn: học tự động hóa, lập trình, làm chủ AI; danh sách bài thực tế là bằng chứng chính; newsletter đặt cuối.
- Điểm học: chủ đề cụ thể, title theo vấn đề/kết quả, content proof xuất hiện ngay. Không sao chép brand/copy hoặc claim của đối thủ.
- Homepage hiện có 5 tầng: Hero → Audience → Teaching → Trust → Gift; hero ưu tiên quà trước khi chứng minh chuyên môn.
- Copy dàn trải “mọi người/người mới/marketer/chủ doanh nghiệp”; chưa nêu rõ góc nhìn riêng của Tony.
- Claim `5+ năm`, `10K+ học viên`, `50+ bài viết/khóa học`, `4.9/5`, `2,500+ nhận quà`, `10x`, ROI chưa có nguồn chứng minh trong repo; content local hiện có 5 bài blog và 1 khóa học.

## Định vị và hierarchy đề xuất

- Positioning draft: “Tony Hoang giúp người Việt biến AI thành quy trình thực hành cho công việc, marketing và sản phẩm số.” Chỉ chốt sau khi Tony xác nhận audience và kinh nghiệm thật.
- Hero: tên + vai trò cụ thể → outcome thực tế → phương pháp “học qua quy trình/dự án” → portrait.
- CTA hero: **primary `/courses` — Học khóa miễn phí**; **secondary `/blog` — Xem bài thực chiến**. Chuyển `/qua` xuống cuối trang.
- Sau hero: “Bắt đầu từ công việc thật” gồm 3 cửa vào `/learn-ai/ai-for-beginners`, `/learn-ai/ai-for-marketing`, `/learn-ai/ai-for-work`.
- Tiếp theo: featured course + 3 bài viết mới/tiêu biểu để chứng minh cách Tony làm và dạy.
- Sau bằng chứng: đoạn giới thiệu ngắn + link `/about`; chỉ hiển thị số liệu/testimonial có nguồn nội bộ hoặc URL kiểm tra được.
- Cuối trang: gift/email CTA `/qua`, nêu chính xác nội dung nhận được; không dùng scarcity hoặc social proof chưa xác minh.

## Giai đoạn triển khai

| Giai đoạn | Việc chính | Trạng thái |
|---|---|---|
| 01 | Chốt positioning, audience ưu tiên, claim ledger và bằng chứng | completed |
| 02 | Viết lại VI trước, duyệt giọng Tony, rồi dịch EN theo meaning parity | completed |
| 03 | Sắp xếp section/CTA và nối đúng route/content thật | completed |
| 04 | SEO, responsive, accessibility, analytics và release check | completed |

## File cần sửa

- `messages/vi.json`, `messages/en.json`: toàn bộ namespace `home`; đồng bộ `common`, `metadata`, `about` nếu claim thay đổi.
- `app/[locale]/page.tsx`: hierarchy mới; giữ Server Component và composition đơn giản.
- `components/home/hero-section.tsx`: identity/value proposition và CTA order.
- `components/home/audience-section.tsx`: đổi pain-point matrix thành 3 use-case entry points.
- `components/home/teaching-section.tsx`: featured course/content proof, route theo slug thật.
- `components/home/trust-section.tsx`: thay vanity counters bằng proof có nguồn.
- `components/home/cta-section.tsx`: gift/email CTA cuối funnel.
- `lib/mdx.ts`, `lib/courses.ts`: chỉ tái dùng selector/data hiện có; không tạo CMS mới.
- `docs/design-guidelines.md`, `docs/codebase-summary.md`, `docs/project-roadmap.md`: ghi positioning, content hierarchy và trạng thái rollout.

## Checklist nghiệm thu

- [x] Lập claim ledger: claim, nguồn, owner, ngày kiểm tra; bỏ/đổi mọi claim không chứng minh được.
- [x] Mỗi section có một nhiệm vụ, một heading rõ; không lặp lại “AI cho người mới”.
- [x] Hero không quá 1 H1, 1 đoạn hỗ trợ, 2 CTA; primary dẫn đến giá trị hiện có.
- [x] Tất cả card/link dẫn route public thật; content proof lấy từ data thật, không hard-code số lượng.
- [x] Metadata/OG khớp định vị mới ở VI/EN; không dùng “AI Educator” nếu Tony chưa xác nhận.
- [x] Test 320/390/768/1440 px, keyboard/focus, reduced motion; CTA không tranh cấp bậc.
- [x] Gắn/kiểm tra GA4 event cho primary, secondary, featured content và gift CTA.
- [x] Chạy targeted ESLint, `npm run build`; browser smoke `/`, `/en`, toàn bộ CTA.

## Claim ledger chốt ngày 2026-08-13

| Claim | Trạng thái | Cách xử lý |
|---|---|---|
| `5+ năm`, `10K+ học viên`, `4.9/5`, `2,500+` | Chưa có nguồn trong repo | Không dùng trên homepage/metadata/schema |
| `AI Educator`, “đã giúp hàng nghìn người” | Chưa được chủ sở hữu xác nhận | Đổi sang mô tả trung tính về nội dung chia sẻ |
| Khóa học gồm checkout/CRM hoàn chỉnh | Workshop 2 chưa khả dụng | Homepage chỉ nêu hai kết quả của Workshop 1 và trạng thái cập nhật |
| 1 khóa học, 3 lộ trình, bài viết mới | Có dữ liệu nội bộ | Lấy trực tiếp từ course/route/MDX hiện có |

## Tiêu chí thành công

- Người thử nghiệm nhắc lại đúng audience + outcome của Tony sau khi chỉ xem hero.
- 100% claim công khai có bằng chứng hoặc được viết lại thành mô tả trung tính.
- CTA click được đo theo vị trí; đặt baseline rồi đánh giá sau 2–4 tuần, không đặt uplift giả.

## Câu hỏi chưa giải quyết

Không còn câu hỏi chặn release. Homepage ưu tiên chung người Việt dùng AI cho công việc, với `/courses` là conversion chính; audience hẹp hơn có thể được tối ưu tiếp bằng dữ liệu GA4.
