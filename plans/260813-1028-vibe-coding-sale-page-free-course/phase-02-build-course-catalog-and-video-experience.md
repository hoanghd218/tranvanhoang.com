# Giai đoạn 02 — Catalog, trang khóa học và trải nghiệm video

**Ưu tiên**: P1
**Trạng thái**: complete
**Phụ thuộc**: Giai đoạn 01

## Liên kết ngữ cảnh

- [Kế hoạch tổng](./plan.md)
- [Giai đoạn 01](./phase-01-model-content-routing-and-assets.md)
- [`components/custom/container.tsx`](../../components/custom/container.tsx)
- [`components/custom/brand-card.tsx`](../../components/custom/brand-card.tsx)
- [`components/squeeze-page/squeeze-page.tsx`](../../components/squeeze-page/squeeze-page.tsx)

## Yêu cầu chức năng

1. Catalog giới thiệu khu vực khóa học và card “Vibe Coding Sale Page”.
2. Detail page có hero, kết quả đạt được, curriculum 2 buổi và khu xem video.
3. Người học chuyển giữa hai buổi rõ ràng; không autoplay.
4. Mỗi lesson luôn có link mở tab mới trên Fathom.
5. Lesson unavailable không render iframe, thay bằng trạng thái và CTA thử link gốc.
6. Nội dung chính vẫn đọc được nếu JavaScript hoặc iframe bị chặn.

## Kiến trúc component

```text
app/[locale]/courses/page.tsx
  -> CourseCatalog -> CourseCard

app/[locale]/courses/[slug]/page.tsx
  -> CourseHero -> CourseCurriculum -> FathomVideoPlayer
```

- Pages là server components: locale, metadata, course lookup, JSON-LD.
- Chỉ lesson selector/player là client component nếu cần state đổi buổi.
- Dùng `Container`, `Section`, `BrandCard`, `GradientText`, button hiện có.
- Mỗi file component dưới 200 LOC; page dưới 150 LOC.

## Quy tắc Fathom embed

- `src`: URL `/embed/{token}?autoplay=0`, không dùng `/share/{token}`.
- Wrapper `aspect-video`, responsive width 100%, bo góc, background placeholder.
- Iframe: `loading="lazy"`, title riêng theo buổi, `allowFullScreen`, allow tối thiểu
  cho autoplay/fullscreen/picture-in-picture.
- Link share có `target="_blank" rel="noopener noreferrer"` và icon external.
- Không dựa vào `iframe onError` để kết luận video tồn tại vì cross-origin không
  cung cấp tín hiệu lỗi đáng tin; trạng thái availability được xác minh trước deploy.

## File cần tạo

- `app/[locale]/courses/page.tsx`
- `app/[locale]/courses/[slug]/page.tsx`
- `components/courses/course-catalog.tsx`
- `components/courses/course-card.tsx`
- `components/courses/course-hero.tsx`
- `components/courses/course-curriculum.tsx`
- `components/courses/fathom-video-player.tsx`

Nếu component detail có thể giữ dưới giới hạn file mà vẫn rõ, gộp component nhỏ để
giảm số file; không tạo abstraction cho nhiều video provider khi chỉ có Fathom.

## Các bước triển khai

1. Tạo catalog page và course card với badge “Miễn phí”, 2 buổi, CTA xem khóa học.
2. Tạo dynamic detail page; unknown slug gọi `notFound()`; static params từ data.
3. Dựng hero/outcomes/curriculum theo design token coral/bronze và semantic heading.
4. Tạo player/lesson selector; Buổi 1 available, Buổi 2 theo trạng thái đã xác minh.
5. Thêm poster/loading shell để giảm layout shift; luôn hiện fallback link.
6. Kiểm tra dark/light theme, keyboard, touch target >= 44 px, mobile 320 px.

## Tiêu chí hoàn thành

- Catalog có cấu trúc đủ để thêm course mới bằng data + copy, không copy page.
- Buổi 1 phát ngay trong trang trên Chrome/Safari/Firefox desktop và mobile.
- Không autoplay; fullscreen hoạt động; tab order và focus visible hợp lý.
- Iframe bị chặn vẫn không khóa người học khỏi link Fathom.
- Buổi 2 không cho cảm giác trang hỏng khi nguồn chưa hợp lệ.

## Rủi ro và xử lý

| Rủi ro | Xử lý |
|---|---|
| Third-party iframe chậm | lazy-load, kích thước cố định, poster/loading shell |
| Cookie/privacy của Fathom | mô tả rõ nguồn ngoài; không thêm tracker riêng |
| iframe lỗi không phát event | fallback link luôn hiện; preflight trước release |
| Client JS quá nhiều | giữ phần lớn page là server component |

## Danh sách việc

- [x] Tạo catalog và card.
- [x] Tạo detail page và sections.
- [x] Tạo Fathom player + unavailable state.
- [x] Kiểm tra responsive/theme/a11y.
