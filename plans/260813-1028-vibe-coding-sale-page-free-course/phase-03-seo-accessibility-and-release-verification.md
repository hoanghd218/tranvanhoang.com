# Giai đoạn 03 — SEO, accessibility và kiểm tra phát hành

**Ưu tiên**: P1
**Trạng thái**: complete với blocker ngoài cho Buổi 2
**Phụ thuộc**: Giai đoạn 02; link Buổi 2 hợp lệ để nghiệm thu đầy đủ

## Liên kết ngữ cảnh

- [Kế hoạch tổng](./plan.md)
- [`app/sitemap.ts`](../../app/sitemap.ts)
- [`components/seo/course-schema.tsx`](../../components/seo/course-schema.tsx)
- [`components/seo/breadcrumb-schema.tsx`](../../components/seo/breadcrumb-schema.tsx)
- [`docs/project-roadmap.md`](../../docs/project-roadmap.md)
- [`docs/codebase-summary.md`](../../docs/codebase-summary.md)

## SEO và structured data

1. Catalog/detail có title, description, canonical và hreflang VI/EN đúng locale.
2. Detail dùng cover local cho Open Graph/Twitter image.
3. Render `CourseSchema` với provider, language, URL, free access và 2 lesson nếu
   schema component hỗ trợ mà không phá consumer hiện có.
4. Render breadcrumb Home → Courses → Vibe Coding Sale Page.
5. Thêm `/courses` và `/courses/vibe-coding-sale-page` vào sitemap cho cả locale.
6. Xóa `/courses/ai-automation-bim` vì route đã bị xóa ở commit hiện tại.
7. Không index trực tiếp URL Fathom hoặc đưa embed URL vào sitemap.

## Accessibility và performance

- Một `h1`; section headings theo thứ tự; curriculum dùng list/semantic buttons.
- Iframe có title mô tả “Buổi 1/2”, fallback link có accessible name rõ.
- Focus visible, keyboard lesson switch, reduced-motion không ảnh hưởng nội dung.
- Không để cover/iframe gây CLS; khai báo kích thước/tỷ lệ trước khi tải.
- Kiểm tra ảnh cover bằng `next/image`, `sizes` phù hợp và alt có nghĩa.

## Kiểm tra nguồn video trước deploy

Cho từng lesson:

1. Share URL trả 200 khi mở ở cửa sổ ẩn danh.
2. `GET /oembed?format=json&url=<encoded-share-url>` trả JSON type `video`.
3. Lấy `html`/embed URL từ oEmbed; endpoint embed trả 200.
4. Phát video, seek và fullscreen trên production preview.
5. Tắt third-party cookies/ad blocker để xác minh fallback link vẫn dùng được.

Không đánh dấu Buổi 2 available nếu bất kỳ bước 1–3 chưa đạt.

## File cần sửa

- `app/sitemap.ts`
- `components/seo/course-schema.tsx` (nếu mở rộng props)
- `docs/codebase-summary.md`
- `docs/project-roadmap.md`
- `docs/system-architecture.md` nếu course data/route trở thành pattern chính thức

## Chiến lược kiểm thử

- Repo chưa có test runner; không thêm Jest/Playwright chỉ cho feature này.
- Chạy `npm run lint` và `npm run build`.
- Browser smoke test: `/courses`, detail, VI/EN, 404 slug, nav desktop/mobile.
- Viewports tối thiểu: 320×568, 390×844, 768×1024, 1440×900.
- Chạy Lighthouse cho detail: SEO >= 90, Accessibility >= 90; xem riêng LCP/CLS.
- Dùng Rich Results Test/validator để kiểm tra Course + Breadcrumb JSON-LD.

## Tiêu chí hoàn thành

- Không còn URL sitemap dẫn đến 404.
- Canonical/hreflang không trỏ nhầm slug/prefix locale.
- JSON-LD parse được và khớp nội dung hiển thị, không khai báo giá/chứng chỉ giả.
- Không có lỗi lint/build hoặc console error thuộc feature.
- Buổi 1 phát được; Buổi 2 phát được sau khi chủ video cấp link public hợp lệ.
- Docs phản ánh route, data source, Fathom dependency và quy trình thêm khóa mới.

## Rủi ro và xử lý

| Rủi ro | Xử lý |
|---|---|
| Sitemap hiện có route chết | Xóa BIM route trong cùng feature |
| Schema vượt dữ liệu thực | Chỉ khai báo dữ liệu có trên trang |
| Fathom đổi token/quyền | Preflight ẩn danh + fallback link + checklist docs |
| Không có automated browser tests | Smoke matrix có bằng chứng screenshot/log |

## Danh sách việc

- [x] Hoàn thiện metadata/JSON-LD/breadcrumb.
- [x] Sửa sitemap và xóa route chết.
- [x] Chạy targeted lint, production build và browser smoke test.
- [x] Test Fathom ẩn danh và fallback.
- [x] Cập nhật docs sau implementation.
