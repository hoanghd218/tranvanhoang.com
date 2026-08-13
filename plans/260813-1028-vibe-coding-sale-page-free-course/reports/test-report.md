# Final test report — Vibe Coding Sale Page free course

Thời điểm: 2026-08-13 ICT
Kết luận: **Feature code đạt release gate; link Fathom Buổi 2 vẫn là external blocker nội dung.**

## Final verification

- Targeted ESLint trên route catalog/detail, video card, schema, data, sitemap, navigation, proxy: **PASS, exit 0**.
- `messages/vi.json`, `messages/en.json`: JSON hợp lệ; namespace `courses` parity **36/36 leaf keys**; mỗi locale có 2 lessons.
- `npm run build`: **PASS, exit 0**; compile, TypeScript, page data và prerender **39/39** thành công.
- Build output: dynamic course route `/[locale]/courses/[slug]` prerender đúng slug hiện có cho VI/EN.
- Production `next start` + `/usr/bin/curl -L`:
  - `200 /courses`
  - `200 /en/courses`
  - `200 /courses/vibe-coding-sale-page`
  - `200 /en/courses/vibe-coding-sale-page`
  - `404 /courses/not-a-course`
  - `404 /en/courses/not-a-course`
- Title và canonical đúng cho cả 4 route hợp lệ.
- Detail VI/EN có iframe Buổi 1 đúng endpoint `/embed/...?...autoplay=0`.
- Buổi 2 không render iframe lỗi nhưng có CTA fallback tới đúng share URL, mở tab mới với `rel="noopener noreferrer"`.
- Course JSON-LD VI/EN hợp lệ về cấu trúc và locale, gồm:
  - `@type: Course`
  - `isAccessibleForFree: true`
  - `hasCourseInstance.@type: CourseInstance`
  - `courseMode: online`
  - 2 `LearningResource` có position, name, description theo locale
  - provider và creator.

## Fathom preflight

| Buổi | Share | oEmbed | Embed | Kết luận |
|---|---:|---:|---:|---|
| 1 | 200 | 200 | 200 | Embed được bằng endpoint `/embed`; không dùng trực tiếp share URL làm iframe. |
| 2 | 404 | 404 | 302 về homepage | Chưa embed được; UI fallback hiện đúng. Cần public share token mới để bật video. |

## Baseline warnings

- Build chỉ còn cảnh báo ngoài feature: thiếu required frontmatter trong `content/life/buoc-di-chuyen-doi.mdx` và `content/life/loi-dan-tien-si.mdx`.
- Không dùng full-repo `npm run lint` làm gate vì `.claude/.opencode` có nhiều lỗi baseline; targeted feature lint sạch.

## pnpm workspace

- Kiểm tra trạng thái cuối: placeholder block `allowBuilds` **đã hết**.
- Policy cuối chỉ giữ `ignoredBuiltDependencies` cho `@parcel/watcher`, `@swc/core`, `sharp`, `unrs-resolver`.
- Không chạy lại `pnpm install` sau chỉ đạo của root để tránh tool tái chèn placeholder.

## Câu hỏi chưa giải quyết

1. Public share URL mới của Buổi 2 là gì?
