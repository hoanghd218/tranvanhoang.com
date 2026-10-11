# Nghiên cứu khả năng embed 2 video Fathom

Thời điểm kiểm tra: 2026-08-13 10:29 ICT (UTC+7).

## Kết luận nhanh

| Buổi | Share URL | Trạng thái | Kết luận embed |
|---|---|---|---|
| 1 | `https://fathom.video/share/P65SeC8eHNNuAyDMa7nDCCjdc-Cy1Bj9` | HTTP 200, recording public-by-link còn hoạt động | **Embed được** bằng endpoint `/embed/...`; đã tải player thành công trong browser |
| 2 | `https://fathom.video/share/FU4TxVYHBFMfFAuQan4HoexVRNpzs_N` | HTTP 404, body rỗng; oEmbed và HLS cũng 404 | **Chưa embed được**; cần chủ recording tạo/copy lại public share link |

Không dùng trực tiếp URL `/share/...` làm `iframe src`. Share page Buổi 1 gửi `X-Frame-Options: SAMEORIGIN`, nên browser sẽ chặn khi đặt trên `tranvanhoang.com`. Fathom cung cấp endpoint `/embed/...` riêng và endpoint này không gửi `X-Frame-Options`, không có CSP `frame-ancestors` chặn trang ngoài.

## Buổi 1 — endpoint đã xác minh

### Share page

- `GET /share/P65SeC8eHNNuAyDMa7nDCCjdc-Cy1Bj9` → HTTP 200.
- Trang trả metadata oEmbed chính thức:

```html
<link
  rel="alternate"
  type="application/json+oembed"
  href="https://fathom.video/oembed?format=json&amp;url=https%3A%2F%2Ffathom.video%2Fshare%2FP65SeC8eHNNuAyDMa7nDCCjdc-Cy1Bj9"
>
```

- oEmbed response → HTTP 200 và trả iframe chính thức:

```html
<iframe
  src="https://fathom.video/embed/P65SeC8eHNNuAyDMa7nDCCjdc-Cy1Bj9?autoplay=0"
  frameborder="0"
  width="1280"
  height="720"
  webkitallowfullscreen
  mozallowfullscreen
  allowfullscreen
></iframe>
```

### Embed page

`GET https://fathom.video/embed/P65SeC8eHNNuAyDMa7nDCCjdc-Cy1Bj9?autoplay=0`:

- HTTP 200.
- Không có header `X-Frame-Options`.
- CSP đang enforce không có directive `frame-ancestors`.
- Browser test tải được player, hiện tiêu đề `Impromptu Zoom Meeting`, ngày 21/05/2026, thời lượng hiển thị 119 phút và controls; không ghi nhận console error/warning.
- `autoplay=0` là tham số được chính oEmbed của Fathom trả về; nên giữ để tránh autoplay policy và trải nghiệm khó chịu trên mobile.

### Thumbnail và HLS

- Thumbnail hợp lệ: `https://fathom.video/share/P65SeC8eHNNuAyDMa7nDCCjdc-Cy1Bj9/thumbnail` → redirect tới JPEG 1280×720.
- HLS tồn tại: `https://fathom.video/share/P65SeC8eHNNuAyDMa7nDCCjdc-Cy1Bj9/video.m3u8` → HTTP 200.
- Tuy nhiên không nên tự dựng player từ HLS: response kiểm tra với `Origin: https://tranvanhoang.com` không có `Access-Control-Allow-Origin`; playlist dùng các chunk URL nội bộ tương đối. Cách này dễ lỗi trên Chrome/hls.js và là contract nội bộ, không bền bằng `/embed/...`.

## Buổi 2 — link hiện không hợp lệ

Với token `FU4TxVYHBFMfFAuQan4HoexVRNpzs_N`:

- Share URL → HTTP 404, không có nội dung recording.
- oEmbed endpoint → HTTP 404.
- HLS `/video.m3u8` → HTTP 404.
- `/embed/...?...` → HTTP 302 về trang chủ Fathom; chuỗi redirect cuối có `X-Frame-Options: SAMEORIGIN` và CSP `frame-ancestors 'self'`, nên không thể dùng làm iframe player.
- Thumbnail endpoint chỉ redirect tới ảnh placeholder widescreen mặc định; đây không phải bằng chứng recording tồn tại.
- Browser điều hướng trực tiếp báo lỗi HTTP response code, khớp với kiểm tra network.

Khả năng thường gặp: share token bị thu hồi/thay đổi, quyền public link đã tắt, hoặc URL copy sai. Cần mở recording trong tài khoản Fathom, bật chia sẻ công khai/public link rồi gửi lại URL `/share/<token-mới>`. Sau đó xác minh cả share URL và oEmbed đều trả 200 trước khi publish.

## Cách nhúng khuyến nghị

Buổi 1 có thể dùng responsive iframe:

```tsx
<div className="aspect-video overflow-hidden rounded-2xl bg-black">
  <iframe
    src="https://fathom.video/embed/P65SeC8eHNNuAyDMa7nDCCjdc-Cy1Bj9?autoplay=0"
    title="Buổi 1 — Thiết kế landing page, thanh toán tự động và CRM"
    className="h-full w-full border-0"
    loading="lazy"
    allow="fullscreen"
    allowFullScreen
  />
</div>
```

Ghi chú tích hợp:

- Repo hiện chưa đặt CSP cho chính site, nên chưa cần bổ sung `frame-src`. `X-Frame-Options: DENY` trong `next.config.ts` chỉ ngăn site này bị trang khác iframe, không ngăn site nhúng Fathom.
- Nếu sau này thêm CSP, cần có `frame-src https://fathom.video` (ngoài các nguồn frame khác của site).
- Không thêm `sandbox` vào iframe trừ khi đã kiểm thử đầy đủ; sandbox quá chặt có thể làm hỏng player/fullscreen.
- Token share xuất hiện trong HTML client. Đây là video public-by-link; không xem iframe/token như cơ chế bảo mật khóa học. Với khóa học free hiện tại điều này phù hợp.

## Fallback UX đề xuất

1. Luôn đặt link `Mở video trên Fathom` ngay dưới player, `target="_blank" rel="noopener noreferrer"`. Cross-origin iframe không cho app đọc chi tiết lỗi bên trong một cách đáng tin cậy; link ngoài là fallback bền nhất.
2. Với Buổi 2 hiện tại, không render iframe bị redirect. Hiện card `Video đang được cập nhật` và chỉ bật CTA học khi có token mới đã kiểm tra HTTP 200/oEmbed 200.
3. Có thể dùng thumbnail Buổi 1 làm poster/loading skeleton, nhưng không nên hard-code signed Google Storage URL vì hết hạn; dùng endpoint `/thumbnail` ổn định của share token.
4. Nếu Fathom thay đổi header/embed policy trong tương lai, fallback chiến lược là tải MP4 từ tài khoản có quyền rồi host trên nền tảng video/CDN do chủ site kiểm soát. Không proxy/crawl HLS nội bộ tại runtime.

## Unresolved question

- Cần public share URL mới cho Buổi 2; URL hiện tại không còn truy cập được tại thời điểm kiểm tra.
