# Giai đoạn 01 — Tạo route đo click và chuyển Zalo

**Ưu tiên**: P1
**Trạng thái**: pending
**Phụ thuộc**: Không

## Liên kết ngữ cảnh

- [Kế hoạch tổng](./plan.md)
- [`app/[locale]/layout.tsx`](../../app/[locale]/layout.tsx)
- [`i18n/routing.ts`](../../i18n/routing.ts)
- [`messages/vi.json`](../../messages/vi.json)
- [`messages/en.json`](../../messages/en.json)

## Hiện trạng đã xác minh

- Next.js 16.1.4, App Router, React 19 và next-intl.
- Tiếng Việt là locale mặc định, không có prefix; tiếng Anh có `/en`.
- GA4 `G-96036PT8ZC` đã được nạp trong layout locale.
- `next.config.ts` không có `output: "export"`; route động/API có thể chạy dù
  một số tài liệu cũ còn mô tả site là static export.
- Repo chưa có database client; API hiện có chỉ là mock.
- Không có test runner; kiểm tra bắt buộc là lint, build và thử trên browser.

## Yêu cầu chức năng

1. `GET /zalo-agents` trả trang chuyển tiếp tối giản, tiếng Việt.
2. `GET /en/zalo-agents` hoạt động với copy tiếng Anh.
3. Trang đọc và chuẩn hóa: `utm_source`, `utm_medium`, `utm_campaign`,
   `utm_content`, `utm_term`, `utm_id`.
4. Trang gửi đúng một event `zalo_redirect_clicked` vào GA4.
5. Sau callback GA4 hoặc timeout tối đa khoảng 800 ms, dùng
   `window.location.replace()` để mở nhóm Zalo.
6. Có liên kết “Mở nhóm Zalo” trong HTML để dùng nếu JavaScript hoặc tự chuyển
   hướng thất bại.
7. Trang có `noindex, nofollow` và không xuất hiện trong sitemap.

## Kiến trúc đề xuất

### Route theo kiến trúc i18n hiện có

```text
app/[locale]/zalo-agents/page.tsx
components/zalo-agents/zalo-agents-redirect-client.tsx
lib/zalo-agents-tracking.ts
```

Thêm `"/zalo-agents": "/zalo-agents"` vào `i18n/routing.ts`. Không sửa
`middleware.ts`; next-intl giữ URL tiếng Việt là `/zalo-agents` nhờ
`localePrefix: "as-needed"`.

Route kế thừa GA4 từ `app/[locale]/layout.tsx`, vì vậy không sao chép snippet
GA4 và không thêm dependency analytics mới.

### Một nguồn sự thật

`lib/zalo-agents-tracking.ts` chứa:

- URL nhóm cố định: `https://zalo.me/g/jlfoycrklxfw3fyfecbw`.
- Event name: `zalo_redirect_clicked`.
- Allowlist các trường UTM.
- Hàm normalize: trim, lowercase, giới hạn độ dài, fallback `direct`/`none`.

Không nhận URL đích qua query string để tránh open redirect.

### Client tracking và redirect

Client component chịu trách nhiệm:

- Chỉ chạy khi trang đang visible.
- Dùng guard để chống effect/click thủ công phát event hai lần.
- Đọc UTM bằng `URLSearchParams`; không log raw query string.
- Gửi GA4 với `transport_type: "beacon"` và `event_callback` nếu khả dụng.
- Có timeout bắt buộc để ad blocker/GA4 lỗi không giữ người dùng lại.
- Dùng `location.replace()` để nút Back không lặp route tracking.
- Hiện trạng thái ngắn và liên kết Zalo dự phòng.

### Event parameters

```text
event_name: zalo_redirect_clicked
destination: zalo_agents_group
utm_source
utm_medium
utm_campaign
utm_content
utm_term
utm_id
referrer_host
click_id
```

Không gửi full user-agent, IP, email, số điện thoại hoặc full referrer URL.

## File cần tạo

- `app/[locale]/zalo-agents/page.tsx`
- `components/zalo-agents/zalo-agents-redirect-client.tsx`
- `lib/zalo-agents-tracking.ts`

## File cần sửa

- `i18n/routing.ts`: đăng ký typed route `/zalo-agents`.
- `messages/vi.json`: trạng thái chuyển hướng và liên kết dự phòng.
- `messages/en.json`: copy tương ứng cho `/en/zalo-agents`.

Không cần sửa `package.json`, `middleware.ts`, `app/layout.tsx` hoặc
`app/[locale]/layout.tsx`.

## Các bước triển khai

1. Tạo constants, UTM normalizer và types trong `lib`.
2. Đăng ký route và copy VI/EN.
3. Tạo server page với metadata `noindex, nofollow` và fallback link.
4. Tạo client event, callback, timeout và guard chống event kép.
5. Bảo đảm URL Zalo chỉ đến từ constant cố định.
6. Chạy lint, build và sửa toàn bộ lỗi liên quan.

## Tiêu chí hoàn thành

- `/zalo-agents` và `/en/zalo-agents` trả HTTP 200.
- Không tạo open redirect qua query parameter.
- Event chỉ phát một lần trong production build.
- Nếu GA4 bị chặn, người dùng vẫn tới Zalo trong khoảng một giây.
- Route không được index và không nằm trong sitemap.

## Rủi ro và xử lý

| Rủi ro | Xử lý |
|---|---|
| GA4 chưa tải xong | Callback + timeout chuyển hướng bắt buộc |
| React Strict Mode chạy effect hai lần khi dev | Guard event; xác minh production |
| Ad blocker chặn GA4 | Chấp nhận độ thiếu v1; chỉ thêm first-party API khi cần |
| Bot preview link | Tracking client-side + kiểm tra visibility giảm click ảo |
| Zalo app không mở | Link fallback dùng cùng URL đích cố định |
| Layout chung tải Header/Footer/popup | Che bằng giao diện chuyển tiếp tối giản; chỉ tách layout nếu dữ liệu cho thấy cần |

## Danh sách việc

- [ ] Tạo constants và normalizer.
- [ ] Đăng ký route + copy VI/EN.
- [ ] Tạo page và client redirect.
- [ ] Thêm metadata và fallback UI.
- [ ] Chạy lint/build.
