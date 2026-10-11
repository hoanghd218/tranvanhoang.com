# Planner report — Vibe Coding Sale Page free course

**Date**: 2026-08-13
**Plan**: `plans/260813-1028-vibe-coding-sale-page-free-course/plan.md`

## Tóm tắt

Đã khảo sát code hiện tại và tạo plan 3 giai đoạn: data/routing/assets, catalog +
video UX, SEO/a11y/release. Không sửa code ứng dụng.

## Phát hiện chính

- Current branch không còn `app/courses`; course BIM cũ bị xóa nhưng sitemap còn URL chết.
- Nên đưa course mới vào `app/[locale]/courses` để dùng thống nhất next-intl VI/EN.
- Buổi 1 share + oEmbed + embed trả 200; nhúng được bằng URL `/embed/{token}`.
- Share URL trực tiếp có `X-Frame-Options: SAMEORIGIN`, không dùng trực tiếp trong iframe.
- Buổi 2 share và oEmbed đều trả 404 ngày 2026-08-13.
- Repo không có test runner; plan dùng lint/build + browser/Lighthouse/schema smoke test.

## Câu hỏi chưa giải quyết

1. Cần link Buổi 2 public chính xác; link hiện tại không truy cập được.
2. Có cần dịch toàn bộ landing course sang EN hay giữ video/course VI-only?
