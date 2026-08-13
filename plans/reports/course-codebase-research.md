# Khảo sát codebase — khóa “Vibe Coding Sale Page”

## Kết luận

Hướng ít thay đổi, đúng cấu trúc hiện tại: tạo route tĩnh song ngữ `/learn-ai/vibe-coding-sale-page`, hiển thị cả 2 buổi trên cùng trang, thêm một card vào trang `/learn-ai`. Không dùng route `learn-ai/[path]/[module]`: route này hiện là placeholder hard-code, không có data/video/i18n đầy đủ.

## Hiện trạng liên quan

- Next.js 16 App Router, React 19, Tailwind 4, `next-intl` 4.
- Locale nằm trong `app/[locale]`; `vi` không prefix, `en` dùng `/en` (`i18n/routing.ts:3-18`).
- `/learn-ai` ghép 6 section nhỏ; metadata lấy từ `messages/{locale}.json` (`app/[locale]/learn-ai/page.tsx`).
- Ba khóa hiện có là 3 page riêng: `ai-for-beginners`, `ai-for-marketing`, `ai-for-work`.
- Danh sách khóa lại hard-code tiếng Việt trong `components/learning/path-card.tsx`; component dùng `next/link`, vì vậy link trên trang `/en/learn-ai` có thể rơi về URL tiếng Việt. Đây là khoản nợ i18n cần xử lý ngay khi thêm card mới.
- Số liệu trang danh sách hard-code `3` lộ trình và `21` modules trong `app/[locale]/learn-ai/_components/stats-section.tsx`.
- Mobile menu có danh sách con khóa học trong `components/layout/header.tsx:29-33`; desktop hiện chỉ link đến `/learn-ai`, không render dropdown con.
- `components/squeeze-page/squeeze-page.tsx:110-123` đã có pattern iframe responsive 16:9 với `allowFullScreen`; không nên tái sử dụng cả `SqueezePage` vì component này kéo theo form/webhook và là client component.
- `components/seo/course-schema.tsx` và `components/seo/breadcrumb-schema.tsx` có sẵn nhưng chưa được các trang Learn AI dùng.
- `app/sitemap.ts:35-47` liệt kê route khóa học thủ công.
- Header response của site đặt `X-Frame-Options: DENY` (`next.config.ts:12-21`). Điều này chỉ ngăn trang của site bị nhúng ở nơi khác; không chặn site nhúng Fathom. Quyết định embed vẫn phụ thuộc header/chính sách của Fathom và đúng URL embed.
- Metadata layout đang trỏ tới `/og-image.png`, nhưng file này không tồn tại trong `public`; blog fallback `/images/og-default.png` cũng không tồn tại. Nếu tạo cover khóa mới, nên dùng luôn làm OG image thật.

## Cấu trúc UI đề xuất

Một page server component, theo design system hiện có:

1. Breadcrumb: Học AI → Vibe Coding Sale Page.
2. Hero: nhãn “Miễn phí”, tên khóa, mô tả, 2 buổi, cấp độ/thời lượng nếu có; dùng `Container`, `Section`, `GradientText`.
3. “Bạn sẽ làm được gì”: landing/sale page, thanh toán tự động, CRM.
4. Danh sách 2 buổi dạng card xếp dọc; mỗi card có tiêu đề, mô tả và iframe 16:9.
5. Link dự phòng “Mở video trên Fathom” dưới mỗi iframe để vẫn học được nếu embed/cookie bị chặn.

Không cần tabs, progress tracking, database hay CMS cho đúng scope 2 video (YAGNI). Video component không cần `"use client"` nếu chỉ render iframe.

## File tối thiểu nên tạo/sửa

### Tạo

- `app/[locale]/learn-ai/vibe-coding-sale-page/page.tsx`
  - `setRequestLocale(locale)`, `getTranslations`.
  - `generateMetadata` theo locale, canonical/alternates, Open Graph/Twitter.
  - Render `CourseSchema` + `BreadcrumbSchema`.
  - Dữ liệu 2 buổi có cả `watchUrl` và `embedUrl`; không dùng share URL làm iframe trước khi xác minh.
- `components/learning/course-video-card.tsx`
  - Iframe responsive, `title` riêng cho từng buổi, `loading="lazy"`, `allowFullScreen`, allow-list tương tự pattern hiện có, link fallback mở tab mới với `rel="noopener noreferrer"`.
  - Giữ component nhỏ, tái sử dụng được cho video khóa sau.

### Sửa bắt buộc

- `i18n/routing.ts`
  - Thêm exact pathname `/learn-ai/vibe-coding-sale-page` để `@/i18n/navigation` type-safe và LocaleSwitcher giữ đúng route.
- `messages/vi.json`, `messages/en.json`
  - Thêm key nav/card/page/metadata; giữ hai file cùng shape.
  - Video vẫn tiếng Việt; bản English nên ghi rõ “Vietnamese-language workshop” thay vì giả vờ có bản dịch video.
- `components/learning/path-card.tsx`
  - Thêm card khóa mới.
  - Đổi `next/link` sang `@/i18n/navigation`.
  - Chuyển text/data hiển thị sang message keys; tối thiểu card mới phải locale-correct. Tốt nhất xử lý cả 4 card trong cùng lần sửa vì file hiện đã sai trên `/en`.
- `app/[locale]/learn-ai/_components/stats-section.tsx`
  - `statPaths`: 3 → 4.
  - `statModules`: 21 → 23 nếu định nghĩa “module” bao gồm 2 buổi này; nếu không, đổi nhãn thành nội dung tổng quát hơn.
- `components/layout/header.tsx`
  - Thêm khóa mới vào `children` của Học AI để xuất hiện trong mobile menu.
- `app/sitemap.ts`
  - Thêm route mới; dùng ngày triển khai thực tế.

### Asset nên tạo nếu imagegen được dùng

- `public/images/vibe-coding-sale-page-cover.png` (hoặc `.webp` sau tối ưu), tỉ lệ 1200×630.
  - Dùng cho card/hero tùy thiết kế và Open Graph.
  - Không nhúng chữ dài vào ảnh; tiêu đề thật vẫn là HTML để dễ đọc, responsive và SEO.

### Không cần sửa trong scope tối thiểu

- `app/[locale]/learn-ai/[path]/[module]/page.tsx`: không dùng cho khóa mới.
- `components/squeeze-page/squeeze-page.tsx`: chỉ tham khảo iframe, không gắn khóa học vào form opt-in.
- `components/seo/course-schema.tsx`: API hiện có đủ cho schema Course cơ bản; có thể dùng trực tiếp.
- `lib/navigation.ts`: hiện không được `Header`/`Footer` import; sửa file này không làm UI thay đổi. Đây là config cũ/không còn là source of truth.

## I18n và navigation cần giữ

- Dùng `Link` từ `@/i18n/navigation` cho mọi link nội bộ.
- Route VI: `/learn-ai/vibe-coding-sale-page`.
- Route EN: `/en/learn-ai/vibe-coding-sale-page`.
- `generateMetadata` phải tạo canonical theo locale, không kế thừa canonical root từ locale layout.
- Active nav hiện so sánh `pathname === item.href`; ở trang con, mục Học AI không sáng. Có thể đổi sang `pathname.startsWith("/learn-ai")`, nhưng đây là cải thiện nhỏ, không bắt buộc để phát hành khóa.

## SEO/accessibility

- `title` iframe phải mô tả riêng: “Buổi 1 — Thiết kế landing page…” và “Buổi 2 — Thanh toán tự động và CRM”.
- H1 chỉ một; các buổi dùng H2/H3 theo hierarchy.
- Dùng `CourseSchema` cho page, `BreadcrumbSchema` cho điều hướng.
- Metadata nên có title, description, canonical, `languages`, OG/Twitter image.
- Không claim certificate, số học viên, rating hoặc kết quả chưa được xác thực; trang Learn AI hiện có nhiều số liệu hard-code.
- Link Fathom dự phòng phải rõ mục đích, không chỉ ghi “Click here”.

## Rủi ro/kiểm tra triển khai

- Share URL `https://fathom.video/share/...` chưa chắc là URL iframe hợp lệ. Cần lấy URL embed chính thức từ Fathom hoặc xác minh response/header và thử thực tế trên desktop + mobile.
- Nếu Fathom chặn third-party cookies hoặc `frame-ancestors`, iframe có thể trắng dù share link mở bình thường; luôn giữ link fallback.
- Hai video trên một trang có thể nặng. Dùng `loading="lazy"`; không autoplay.
- Kiểm tra locale switch trên route mới, link card từ cả `/learn-ai` và `/en/learn-ai`, sitemap, metadata, keyboard focus/fullscreen.
- Chạy `npm run lint` và `npm run build` sau sửa.

## Câu hỏi chưa giải quyết

- Tên/mô tả chính xác của từng buổi và thời lượng video lấy từ Fathom là gì?
- Fathom cung cấp embed URL chính thức nào cho hai share ID trên?
- Bản `/en` nên dịch toàn bộ phần mô tả hay hiển thị rõ khóa chỉ giảng bằng tiếng Việt?
- “21 modules” có được phép cập nhật thành “23 bài học”, hay số này đang mang nghĩa khác?
