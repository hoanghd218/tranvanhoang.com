---
title: "Hiệu chỉnh typography cho website tiếng Việt"
description: "Đổi body/UI sang Be Vietnam Pro, giữ Space Grotesk cho display và chuẩn hóa metrics tiếng Việt"
status: completed
priority: P1
tags: [ui, typography, vietnamese, next-font, accessibility]
created: 2026-08-13
---

# Kế hoạch hiệu chỉnh typography tiếng Việt

## Mục tiêu

- Tăng độ rõ và tự nhiên cho nội dung tiếng Việt trên mobile/desktop.
- Dùng Be Vietnam Pro cho body/UI; giữ Space Grotesk cho heading/display thương hiệu.
- Chuẩn hóa size, leading, tracking qua token thay vì class rời rạc.
- Không đổi màu sắc, bố cục, nội dung hoặc hành vi hiện có.

## Hiện trạng đã xác minh

- `app/[locale]/layout.tsx` đang tải Inter + Space Grotesk qua `next/font/google`, đủ Vietnamese subset.
- `app/globals.css` có token type scale và override `[lang="vi"]`, nhưng nhiều component còn dùng `leading-relaxed`, `leading-snug`, `tracking-tight` nên bỏ qua metrics theo locale.
- Long-form MDX đã dùng token tốt; card, khóa học, học AI và UI primitives cần đồng bộ thêm.

## Quyết định kỹ thuật

- Thay Inter bằng `Be_Vietnam_Pro`, khai báo một lần tại locale layout với `latin`, `latin-ext`, `vietnamese`, `display: "swap"`, weights 400/500/600/700.
- Giữ Space Grotesk cho display; không thêm font thứ ba hay tải font thủ công.
- Đổi `--font-text` sang biến Be Vietnam Pro, giữ `--font-display` hiện tại.
- Tune `[lang="vi"]`: body leading rộng vừa đủ cho dấu kép; heading bớt tracking âm; eyebrow giảm tracking để từ tiếng Việt không bị rời.
- Ưu tiên token `--leading-*`, `--tracking-*`, `--size-*`; không tạo abstraction mới nếu class hiện tại thay trực tiếp được.

## Giai đoạn

| Giai đoạn | Nội dung | File chính | Trạng thái |
|---|---|---|---|
| 01 | Audit các class font/size/leading/tracking lệch token | `app/**`, `components/**`, `mdx-components.tsx` | completed |
| 02 | Đổi font và metrics tiếng Việt | `app/[locale]/layout.tsx`, `app/globals.css` | completed |
| 03 | Đồng bộ typography tại component/page bị ảnh hưởng | `components/**`, `app/[locale]/**`, `mdx-components.tsx` | completed |
| 04 | Cập nhật tài liệu và xác minh | `docs/design-guidelines.md`, `docs/codebase-summary.md` | completed |

## Checklist triển khai

- [x] Chụp baseline các trang VI chính ở 320, 390, 768 và 1440 px.
- [x] Thay import/config Inter bằng Be Vietnam Pro trong locale layout.
- [x] Đổi font token và hiệu chỉnh leading/tracking cho locale `vi`.
- [x] Thay các utility hard-code làm bypass token ở nav, card, course, learning và UI primitives.
- [x] Kiểm tra tiêu đề dài, chữ HOA, nút, form, card clamp và bài MDX có dấu `ấ ề ộ ữ ự`.
- [x] Cập nhật typography trong design guidelines và codebase summary.
- [x] Chạy lint theo phạm vi và `npm run build`; sửa mọi lỗi thuộc thay đổi.
- [x] So sánh screenshot trước/sau, kiểm tra overflow, clipping và layout shift.

## Tiêu chí hoàn thành

- Body/UI tiếng Việt hiển thị Be Vietnam Pro; heading/display vẫn Space Grotesk.
- Không còn clipping dấu hoặc khoảng chữ quá chặt/rộng trên viewport mục tiêu.
- VI dùng metrics locale; EN không bị thay đổi ngoài việc dùng body font mới theo quyết định sản phẩm.
- Không có font request thủ công, font thứ ba hoặc layout shift rõ rệt.
- Lint và production build thành công; docs khớp implementation.

## Rủi ro và xử lý

| Rủi ro | Xử lý |
|---|---|
| Font metrics làm đổi wrap/clamp | Review breakpoint và card có text dài; chỉ nới layout khi thật cần |
| Tải quá nhiều weight/subset | Chỉ preload một body face và một display face với weights đang dùng |
| Override VI quá rộng | Đặt ở token `[lang="vi"]`, không viết selector theo từng component |

## Câu hỏi chưa giải quyết

- Không có.
