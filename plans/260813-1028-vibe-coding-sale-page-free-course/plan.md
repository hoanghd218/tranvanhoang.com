---
title: "Khu vực khóa học và Vibe Coding Sale Page miễn phí"
description: "Mở catalog khóa học, đăng 2 buổi Fathom với UX responsive, fallback và SEO"
status: complete
priority: P1
tags: [courses, fathom, video, seo, responsive, imagegen]
created: 2026-08-13
---

# Kế hoạch khu vực khóa học Vibe Coding Sale Page

## Mục tiêu

- Mở khu vực `/courses` có thể phát triển thêm khóa học sau này.
- Đăng khóa miễn phí “Vibe Coding Sale Page” gồm 2 buổi chuyên sâu.
- Xem video thuận tiện trên mobile/desktop, luôn có link Fathom dự phòng.
- Có metadata, Course JSON-LD, sitemap, ảnh cover/OG và điều hướng rõ ràng.

## Hiện trạng đã xác minh

- Stack thật: Next.js 16 App Router, React 19, Tailwind 4, `next-intl` VI/EN.
- Repo hiện không còn route khóa học; sitemap vẫn trỏ route BIM đã bị xóa.
- Buổi 1: share URL trả 200; oEmbed trả iframe
  `https://fathom.video/embed/P65SeC8eHNNuAyDMa7nDCCjdc-Cy1Bj9?autoplay=0`.
- Buổi 2: share URL và oEmbed đều trả 404 tại thời điểm 2026-08-13.
- Share URL không dùng làm `iframe src` vì có `X-Frame-Options: SAMEORIGIN`;
  phải dùng URL `/embed/{token}` do Fathom oEmbed cung cấp.

## Quyết định kỹ thuật

- Đặt catalog và detail trong `app/[locale]/courses`; dùng hệ i18n hiện có.
- Dữ liệu kỹ thuật khóa học tập trung trong `lib/courses.ts`; copy ở message VI/EN.
- Iframe tải lazy, tỷ lệ 16:9, title riêng, fullscreen; link “Mở trên Fathom” luôn hiện.
- Không proxy/chép video Fathom, không gọi oEmbed ở mỗi request trang.
- Buổi 2 giữ trạng thái unavailable tới khi link public hợp lệ; không render iframe 404.
- Dùng `imagegen` tạo một cover 16:9 lưu local nếu không có artwork phù hợp.
- Không thêm CMS, database, progress tracking hay đăng nhập ở phiên bản này.

## Các giai đoạn

| Giai đoạn | Nội dung | Trạng thái |
|---|---|---|
| [01](./phase-01-model-content-routing-and-assets.md) | Data, copy VI/EN, route, ảnh cover | complete |
| [02](./phase-02-build-course-catalog-and-video-experience.md) | Catalog, trang khóa học, player + fallback | complete |
| [03](./phase-03-seo-accessibility-and-release-verification.md) | SEO, sitemap, accessibility, browser test | complete with external blocker noted |

## Phụ thuộc

- Chủ video bật “Anyone with the link can view”.
- Cấp lại link Buổi 2 hợp lệ trước khi nghiệm thu đầy đủ.
- Fathom tiếp tục cho phép endpoint embed/oEmbed hiện tại.

## Hoàn thành khi

- `/courses` và `/courses/vibe-coding-sale-page` hoạt động ở VI/EN.
- Buổi 1 phát trong trang; cả hai buổi có fallback link rõ ràng.
- Buổi 2 chỉ được đánh dấu available sau khi share, oEmbed và embed đều trả 200.
- Responsive từ 320 px, điều hướng bàn phím tốt, không gây layout shift lớn.
- Canonical/hreflang, Course JSON-LD, OG image và sitemap đúng; xóa URL BIM chết.
- `npm run lint` và `npm run build` thành công; kiểm tra trình duyệt mobile/desktop đạt.

## Câu hỏi chưa giải quyết

1. Link public chính xác của Buổi 2 là gì? Link hiện tại trả 404.
2. Nội dung tiếng Anh cần dịch đầy đủ hay chỉ giữ trang VI và ghi “video tiếng Việt”?
