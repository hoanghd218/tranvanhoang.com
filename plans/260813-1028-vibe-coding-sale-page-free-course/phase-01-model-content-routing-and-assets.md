# Giai đoạn 01 — Data, nội dung, route và ảnh cover

**Ưu tiên**: P1
**Trạng thái**: complete
**Phụ thuộc**: Link Buổi 1 đã xác minh; link Buổi 2 cần cấp lại

## Liên kết ngữ cảnh

- [Kế hoạch tổng](./plan.md)
- [`i18n/routing.ts`](../../i18n/routing.ts)
- [`messages/vi.json`](../../messages/vi.json)
- [`messages/en.json`](../../messages/en.json)
- [`docs/design-guidelines.md`](../../docs/design-guidelines.md)
- [`docs/system-architecture.md`](../../docs/system-architecture.md)

## Yêu cầu

1. Catalog dùng route `/courses`; detail dùng `/courses/vibe-coding-sale-page`.
2. VI giữ URL không prefix; EN dùng `/en/courses/...` theo `localePrefix: as-needed`.
3. Khóa học hiển thị rõ: miễn phí, 2 buổi, video tiếng Việt, tự học.
4. Nội dung buổi học:
   - Buổi 1: thiết kế landing page/sale page bằng vibe coding.
   - Buổi 2: thanh toán tự động và CRM.
5. Không để content kỹ thuật và URL Fathom rải trong nhiều component.

## Kiến trúc dữ liệu

Tạo `lib/courses.ts` chứa dữ liệu không phụ thuộc locale:

- `slug`, số buổi, cấp độ, format, cover path.
- Mỗi lesson có `id`, `shareUrl`, `embedUrl`, `available`.
- Buổi 1 dùng token đã xác minh; Buổi 2 đặt `available: false` tới khi kiểm tra đạt.
- Export helper tìm course theo slug và `generateStaticParams` data.

Copy giao diện và nội dung học nằm trong namespace `courses` của
`messages/vi.json` và `messages/en.json`: metadata, hero, outcomes, curriculum,
lesson title/description, trạng thái unavailable, CTA và nhãn accessibility.

## Route và điều hướng

- Đăng ký `/courses` và `/courses/[slug]` trong `i18n/routing.ts`.
- Thêm “Khóa học/Courses” vào header và footer bằng key `nav.courses` sẵn có.
- Active state phải nhận cả catalog và route con.
- Không khôi phục hệ i18n riêng/catch-all của course BIM đã xóa.

## Ảnh cover bằng imagegen

Dùng built-in `imagegen` tạo 1 ảnh project-bound:

- Use case: `ads-marketing`.
- Asset: cover catalog + Open Graph, 16:9.
- Chủ đề: workspace hiện đại với landing page editor, automation payment và CRM
  nối thành một luồng; phong cách premium, dễ tiếp cận, coral/bronze trên nền tối.
- Chừa negative space, không chữ/logo/watermark để tránh lỗi text và tái dùng VI/EN.
- Lưu `public/images/courses/vibe-coding-sale-page-cover.webp`; không để asset chỉ
  dưới `$CODEX_HOME/generated_images`.
- Kiểm tra crop ở card và OG; nếu ảnh tạo ra không hơn visual CSS hiện có, bỏ ảnh
  và dùng gradient code-native theo đúng điều kiện “nếu cần”.

## File cần tạo

- `lib/courses.ts`
- `public/images/courses/vibe-coding-sale-page-cover.webp` (nếu ảnh đạt)

## File cần sửa

- `i18n/routing.ts`
- `messages/vi.json`
- `messages/en.json`
- `components/layout/header.tsx`
- `components/layout/footer.tsx`

## Các bước triển khai

1. Chốt schema nhỏ nhất cho course và lesson; thêm data Buổi 1/Buổi 2.
2. Thêm copy VI/EN, trong EN ghi rõ video dùng tiếng Việt nếu chưa có bản dịch.
3. Đăng ký typed routes và thêm navigation desktop/mobile/footer.
4. Tạo, lưu, tối ưu ảnh cover bằng imagegen nếu visual cần bitmap.
5. Kiểm tra JSON messages hợp lệ và không có link course cũ trong navigation.

## Tiêu chí hoàn thành

- Một nguồn sự thật cho slug, URL embed/share và trạng thái từng video.
- Route typed hoạt động cho VI/EN; nav không cần type-cast route sai.
- Buổi 2 không phát iframe hỏng khi link vẫn 404.
- Cover rõ ở mobile/card/OG và không có text lỗi, hoặc dùng fallback CSS có chủ ý.

## Rủi ro và xử lý

| Rủi ro | Xử lý |
|---|---|
| Link Buổi 2 private/sai | Giữ `available: false`; yêu cầu re-share public và kiểm tra lại |
| Data và copy trùng | Technical data trong `lib`; copy trong messages |
| Header quá chật | Giảm gap hợp lý, kiểm thử 768–1024 px; mobile dùng Sheet |
| Ảnh AI có chữ giả | Prompt không chữ; kiểm tra thủ công trước khi dùng |

## Danh sách việc

- [x] Tạo data course/lesson.
- [x] Thêm copy VI/EN.
- [x] Đăng ký routes và navigation.
- [x] Tạo/duyệt/lưu cover.
- [x] Xác minh lại cả hai link Fathom (Buổi 2 xác nhận 404).
