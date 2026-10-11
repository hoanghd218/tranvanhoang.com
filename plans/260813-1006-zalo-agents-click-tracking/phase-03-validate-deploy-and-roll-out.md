# Giai đoạn 03 — Kiểm thử, deploy và đưa link vào vận hành

**Ưu tiên**: P1
**Trạng thái**: pending
**Phụ thuộc**: [Giai đoạn 01](./phase-01-build-tracking-redirect-route.md), [Giai đoạn 02](./phase-02-configure-utm-and-ga4-reporting.md)

## Mục tiêu

Chỉ thay link Zalo trực tiếp trên các kênh sau khi route production, GA4 và
chuyển hướng đã được kiểm thử. Không để bình luận fanpage trỏ vào link hỏng.

## Ma trận kiểm thử

| Trường hợp | Kỳ vọng |
|---|---|
| `/zalo-agents` không UTM | Mở Zalo; source được ghi direct/unknown theo quy ước |
| Facebook organic URL | Event có `facebook / organic_social` |
| TikTok organic URL | Event có `tiktok / organic_social` |
| YouTube organic URL | Event có `youtube / organic_video` |
| Paid URL mẫu | Event giữ campaign/ad/adset ID |
| UTM chữ hoa hoặc quá dài | Được chuẩn hóa hoặc loại bỏ an toàn |
| Query có `url=https://...` | Không thay đổi URL Zalo đích |
| GA4 bị chặn | Vẫn mở đúng nhóm Zalo |
| JavaScript lỗi | Nút fallback vẫn sử dụng được |
| Refresh/back | Không tạo vòng lặp chuyển hướng |
| Bot/crawler không chạy JS | Không phát `zalo_redirect_clicked` |
| `/en/zalo-agents` | Copy tiếng Anh và vẫn mở đúng nhóm Zalo |

## Kiểm tra kỹ thuật

1. Chạy `npm run lint`.
2. Chạy `npm run build`.
3. Chạy production local nếu repo hỗ trợ và thử route bằng trình duyệt.
4. Dùng GA4 DebugView kiểm tra đúng một event cho mỗi lần test.
5. Kiểm tra Network:
   - Một GA script trên route thường.
   - Một GA script trên route Zalo.
   - Không có event lặp.
6. Kiểm tra metadata `robots` là `noindex, nofollow`.
7. Deploy preview và test trên điện thoại thật.

## Thiết bị và trình duyệt cần thử

- Safari iOS và Chrome Android.
- Facebook in-app browser.
- TikTok in-app browser.
- YouTube app/in-app browser.
- Chrome desktop để chạy GA4 DebugView.

## Trình tự rollout

1. Deploy preview; chưa đổi link social.
2. Test đủ ma trận và lưu ảnh/chứng cứ DebugView.
3. Deploy production.
4. Test lại URL production bằng Facebook organic URL.
5. Cập nhật bình luận mặc định trong repo `mkt-automation`:
   - File: `.agents/skills/mkt-blotato-publish-social/SKILL.md`.
   - Đổi URL Zalo trực tiếp thành Facebook organic tracking URL.
6. Sửa bình luận của bài test hiện tại nếu người dùng muốn đo tiếp từ thời điểm
   rollout; không sửa lịch sử hàng loạt nếu chưa được yêu cầu.
7. Dùng link tương ứng cho TikTok, YouTube và từng nền tảng quảng cáo.
8. Kiểm tra GA4 sau khi có traffic thật và so với số click của nền tảng.
9. Sau khi triển khai thành công, cập nhật `docs/system-architecture.md` và tài
   liệu roadmap/changelog hiện hành theo quy tắc của repo; không đánh dấu hoàn
   thành trước khi production đã được xác minh.

## Nâng cấp tùy chọn sau v1

Chỉ làm nếu số liệu thực tế cho thấy GA4 chưa đủ chính xác:

- Xác minh datastore đã được provision ngoài repo và tái sử dụng nó.
- Thêm `/api/zalo-agents/click` và gọi bằng `sendBeacon()` trước redirect.
- Lưu timestamp, UTM và anonymous click ID; không lưu IP thô hoặc PII.
- Không tự chọn Supabase, Neon, Redis hay Vercel KV khi chưa có quyết định.

## Rollback

- Nếu route lỗi: khôi phục bình luận/link social về URL Zalo trực tiếp.
- Nếu GA4 lỗi nhưng redirect đúng: giữ route, sửa tracking sau; không chặn người
  dùng vào Zalo.
- Nếu redirect lỗi: ưu tiên rollback route/link ngay, sau đó điều tra.

## Tiêu chí hoàn thành

- Production URL hoạt động trên các in-app browser chính.
- Event và UTM hiển thị đúng trong GA4.
- Không có open redirect, PII hoặc event lặp.
- Skill đăng social dùng tracking link Facebook organic.
- Tài liệu kiến trúc/changelog chỉ được cập nhật khi code thực sự đã deploy.

## Câu hỏi chưa giải quyết

1. Tài khoản triển khai có quyền xem/chỉnh GA4 custom definitions và key events không?
2. Website production đang chạy Vercel server runtime hay static hosting khác?
3. Có cần đo dữ liệu first-party ngoài GA4 sau khi v1 chạy thực tế không?
4. Có cần gửi conversion ngược về Meta Pixel, TikTok Pixel hoặc Google Ads để
   tối ưu quảng cáo không? UTM + GA4 mới giải quyết báo cáo attribution.

## Danh sách việc

- [ ] Chạy lint/build.
- [ ] Test desktop và mobile.
- [ ] Test ba in-app browser.
- [ ] Xác minh DebugView và report.
- [ ] Deploy production.
- [ ] Đổi link trong skill đăng social.
- [ ] Theo dõi và quyết định có cần first-party tracking v2.
