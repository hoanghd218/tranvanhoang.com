# Test report — Vietnamese typography refresh

**Kết quả: PASS**

## Phạm vi

- `app/[locale]/layout.tsx`
- `components/layout/header.tsx`
- `mdx-components.tsx`
- Production build và kiểm tra diff liên quan.

## Kiểm tra

| Kiểm tra | Kết quả | Ghi chú |
|---|---:|---|
| Targeted ESLint | PASS | `npm exec eslint -- 'app/[locale]/layout.tsx' 'components/layout/header.tsx' 'mdx-components.tsx'`; exit 0, không warning/error. |
| Production build | PASS | `npm run build`; Next.js compile, TypeScript, static generation hoàn tất; exit 0. |
| Diff whitespace | PASS | `git diff --check` cho ba file; exit 0. |
| Typography wiring | PASS | `Be Vietnam Pro` cho body/UI, `Space Grotesk` cho display; đều khai báo subset `vietnamese`. CSS token/font utility tham chiếu đúng; MDX dùng scale/leading locale-aware. |
| Syntax/type integration | PASS | Build xác nhận import `next/font`, JSX và class utility hợp lệ. |
| Follow-up targeted ESLint | PASS | Chạy lại sau fix preload + MDX; exit 0, không warning/error. |
| Follow-up production build | PASS | Chạy lại `npm run build`; compile, TypeScript, static generation hoàn tất; exit 0. |
| Font preload runtime | PASS | Dev server `http://127.0.0.1:3000/` trả đúng **2** preload `.woff2` trong HTTP `Link` header. `Be Vietnam Pro` dùng `preload: false`; không còn preload thừa cho nhiều weight body font. |
| MDX code font | PASS | Cả inline `code` và block `pre` có `font-sans`; đúng yêu cầu không dùng monospace/third face. |

## Baseline ngoài phạm vi

- `npm run lint` toàn repo: FAIL, **864 vấn đề (594 errors, 270 warnings)**. Chủ yếu file công cụ `.claude/` và `.opencode/` vi phạm `@typescript-eslint/no-require-imports`; thêm lỗi baseline tại `types/routes.d.ts` và warning React Compiler tại `components/email-capture/email-capture-popup.tsx`. Ba file typography mục tiêu không có lỗi.
- Build in cảnh báo lặp về thiếu required frontmatter tại `content/life/buoc-di-chuyen-doi.mdx` và `content/life/loi-dan-tien-si.mdx`; build vẫn pass, không liên quan typography.
- Worktree có nhiều thay đổi ngoài phạm vi. Không sửa mã nguồn.

## Kết luận

Typography refresh và hai follow-up fix đạt lint mục tiêu, compile/type-check, runtime preload count và MDX font wiring. Không phát hiện blocker trong phạm vi.

## Câu hỏi chưa giải quyết

- Không có.
