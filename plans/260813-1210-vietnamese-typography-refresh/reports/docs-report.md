# Báo cáo xác minh tài liệu typography

## Kết quả

- Đã đối chiếu `README.md`, `docs/design-guidelines.md`, `docs/codebase-summary.md`, `docs/system-architecture.md`, `docs/project-roadmap.md` với `app/[locale]/layout.tsx` và `app/globals.css`.
- Implementation: Space Grotesk cho display/heading/wordmark; Be Vietnam Pro cho body/UI/eyebrow. Cả hai tải subset `vietnamese` qua `next/font`.
- Metrics VI khớp: leading `1.16 / 1.3 / 1.65 / 1.78`; display tracking `-.01em`; heading tracking `0`; eyebrow tracking `.10em`.

## Hiệu chỉnh tài liệu

- `README.md`: thay tham chiếu Geist cũ bằng Space Grotesk + Be Vietnam Pro.
- `docs/design-guidelines.md`: bỏ eyebrow khỏi Space Grotesk; sửa tracking VI `.14em` thành `.10em`.
- `docs/codebase-summary.md`, `docs/system-architecture.md`: bỏ eyebrow khỏi mô tả display face.
- Không sửa application code. Không có tham chiếu font cũ còn lại trong core docs đã kiểm tra.

## Xác minh

- Tìm kiếm hậu kiểm không còn `Geist`, mô tả `Space Grotesk (... eyebrow)` hoặc `.14em under [lang="vi"]` trong core docs.
- `git diff --check` còn báo trailing whitespace tại `docs/design-guidelines.md:158` và `:245`; đây là dòng user thay đổi có sẵn, ngoài phạm vi typography nên giữ nguyên.

## Câu hỏi chưa giải quyết

- Không có.
