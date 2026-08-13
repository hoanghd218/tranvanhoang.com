# Báo cáo rà soát documentation homepage positioning

## Kết quả

- Đã đối chiếu plan với `app/[locale]/page.tsx`, `components/home/*.tsx`, `messages/vi.json`, `messages/en.json`, `lib/mdx.ts` và `lib/courses.ts`.
- Homepage triển khai đúng thứ tự: positioning → ba job-based paths → featured course → ba bài MDX mới nhất → giới thiệu Tony → tài nguyên miễn phí.
- Hero ưu tiên `/courses`, secondary `/blog`; `/qua` chỉ xuất hiện ở closing CTA.
- Course proof lấy từ `lib/courses.ts`; article proof lấy từ `content/blog`; các counter/testimonial không được render.
- VI/EN homepage và metadata cùng định vị practical AI cho công việc, marketing và sản phẩm số.

## Documentation đã hiệu chỉnh

- `docs/design-guidelines.md`: thay quy tắc “giữ số liệu nếu đã tồn tại” bằng yêu cầu mọi claim phải có nguồn xác minh.
- `docs/codebase-summary.md`: cập nhật phase 3.3, trạng thái measurement pending và deliverables homepage thực tế.
- `docs/project-roadmap.md`: sửa phase 3.2/3.3 bị lẫn nội dung; thêm status, progress, feature/release record và analytics follow-up cho phase 3.3; đồng bộ current version 3.3.0.
- Không sửa application code.

## Xác minh

- `git diff --check` sạch trên ba tài liệu được rà soát.
- Tài liệu không tuyên bố CTA measurement đã hoàn tất: chưa có position-specific GA4 event trong homepage implementation.

## Câu hỏi chưa giải quyết

1. Audience ưu tiên cuối cùng là người mới, marketer hay người làm công việc nói chung? Implementation hiện phục vụ cả ba nhóm.
2. Khi nào bổ sung GA4 event theo vị trí cho hero primary/secondary, featured course, article proof và gift CTA?
3. Có xóa các key translation cũ không còn render (`trustStats`, `trustTitle`, `trustSubtitle`, `teachingPaths`)? Chúng vẫn chứa claim chưa xác minh nhưng không xuất hiện trên UI hiện tại.
