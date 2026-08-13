# Test report — AI Hub benchmark homepage positioning

**Kết quả:** PASS — đủ điều kiện release trong phạm vi homepage positioning.

## Retest blocker

### [Resolved] Popup thu lead không còn mount trên site

- `EmailCapturePopupClient` đã được gỡ khỏi `app/[locale]/layout.tsx`; component legacy còn trong source nhưng không nằm trong render tree.
- Fresh browser state, VI tại 390 px và EN tại 1440 px: chờ 3,5 giây không xuất hiện dialog/popup title; hero primary CTA vẫn visible/interactable; không error overlay/page error.
- Learning/proof tiếp tục xuất hiện trước closing resource CTA, đúng hierarchy của plan.

## Kiểm tra đã pass

| Hạng mục | Kết quả |
|---|---|
| Targeted ESLint | PASS — locale layout, homepage, analytics, `lib/mdx.ts`, `lib/courses.ts`; 0 lỗi/warning. |
| Production build | PASS — retest cuối: Next.js compile, TypeScript và 49 static pages hoàn tất. |
| Diff hygiene | PASS — `git diff --check` trên phạm vi thay đổi. |
| Route VI/EN | PASS — `/`, `/en` và toàn bộ hero/path/course/article/about/resource destination trả content, không error overlay. EN CTA tới nội dung chỉ có tiếng Việt chuyển sang `/vi/...`. |
| Responsive | PASS — 320/390/768/1440 px, không horizontal overflow; đúng 1 H1; CTA chính cao 44 px; mobile menu mở/đóng đúng khi popup đã dismiss. |
| Reduced motion | PASS — không còn `ScrollReveal`/hero animation ở opacity 0. |
| Keyboard/focus | PASS — skip link đứng đầu tab order; global focus-visible outline 2 px. |
| CTA hierarchy | PASS — hero primary purple `/courses`, secondary outline `/blog`; gift `/qua` ở cuối. |
| Data thật | PASS trong homepage — featured course từ `lib/courses.ts`; 3 bài mới từ `getAllPosts()` đã sort ngày; không render vanity counters. Workshop 1/2 availability được công bố rõ. |
| Locale disclosure | PASS — EN ghi rõ article/video/resource/form là tiếng Việt; VI-only featured/article/resource links dùng `/vi/...`. |
| Metadata | PASS — VI/EN title, description, OG khớp positioning; không dùng `AI Educator`. |
| Analytics | PASS — 11 phần tử có `data-home-cta` + `data-home-destination`; click test phát đủ 11 `homepage_cta_click` events với `cta_position`, `destination`, `locale` ở cả VI/EN. |
| Browser runtime | PASS — nội dung có nghĩa, không blank/error overlay/page error. Dev console chỉ có warning LCP của Next/Image trong dev. |

## Baseline ngoài phạm vi

- `npm run lint` toàn repo vẫn fail baseline: **864 vấn đề (594 errors, 270 warnings)**, chủ yếu `.claude/`, `.opencode/`, thêm `types/routes.d.ts`; các file mục tiêu sạch.
- Worktree có nhiều thay đổi song song ngoài plan; test dùng hash để xác nhận nhóm file homepage ổn định trong lần lint/build cuối.

## Câu hỏi chưa giải quyết

1. Không có blocker release. Claim ledger đầy đủ gồm claim, nguồn, owner và ngày kiểm tra chưa thấy trong thư mục plan; public homepage copy hiện đã trung tính và không render vanity claims.
