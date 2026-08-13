# Giai đoạn 02 — Chuẩn hóa UTM và báo cáo GA4

**Ưu tiên**: P1
**Trạng thái**: pending
**Phụ thuộc**: [Giai đoạn 01](./phase-01-build-tracking-redirect-route.md)

## Mục tiêu

Mọi kênh dùng cùng route nhưng có UTM nhất quán. GA4 phải trả lời được:

- Có bao nhiêu event chuyển sang Zalo?
- Có bao nhiêu user tạo event?
- Click đến từ kênh, chiến dịch và nội dung nào?
- Organic và paid khác nhau thế nào?

## Quy ước chung

- Dùng chữ thường cho giá trị tự đặt.
- Dùng dấu gạch dưới, không trộn nhiều kiểu phân cách.
- Luôn có `utm_source`, `utm_medium`, `utm_campaign`.
- `utm_content` xác định vị trí/link/creative cụ thể.
- Với quảng cáo, ưu tiên ID động để không vỡ báo cáo khi đổi tên.
- Không đưa tên người, email, số điện thoại hoặc tệp đối tượng vào UTM.

## Link chuẩn

### Facebook organic — bình luận fanpage

```text
https://tranvanhoang.com/zalo-agents?utm_source=facebook&utm_medium=organic_social&utm_campaign=zalo_agents&utm_content=fanpage_comment
```

### TikTok organic

```text
https://tranvanhoang.com/zalo-agents?utm_source=tiktok&utm_medium=organic_social&utm_campaign=zalo_agents&utm_content=profile
```

### YouTube organic

```text
https://tranvanhoang.com/zalo-agents?utm_source=youtube&utm_medium=organic_video&utm_campaign=zalo_agents&utm_content=video_description
```

### Meta Ads

Điền trong trường URL parameters của Ads Manager, không dán macro chưa resolve
vào post organic:

```text
utm_source={{site_source_name}}&utm_medium=paid_social&utm_campaign={{campaign.id}}&utm_content={{ad.id}}&utm_term={{adset.id}}&utm_id={{campaign.id}}
```

### TikTok Ads

```text
utm_source=tiktok&utm_medium=paid_social&utm_campaign=__CAMPAIGN_ID__&utm_content=__CID__&utm_term=__AID__&utm_id=__CAMPAIGN_ID__
```

### YouTube/Google Ads

Ưu tiên auto-tagging của Google Ads. Nếu cần UTM để đối chiếu ngoài Google:

```text
utm_source=youtube&utm_medium=paid_video&utm_campaign=<campaign_id>&utm_content=<creative_id>&utm_id=<campaign_id>
```

Không tự thêm UTM thủ công nếu việc đó làm mất hoặc ghi đè `gclid`.

## Cấu hình GA4

1. Mở DebugView và xác minh event `zalo_redirect_clicked` cùng parameters.
2. Đăng ký custom dimensions cấp event nếu cần xem trực tiếp:
   - `destination`
   - `utm_content`
   - `utm_id`
   - `referrer_host`
3. Dùng dimension chuẩn của GA4 cho session source, medium và campaign.
4. Đánh dấu `zalo_redirect_clicked` là key event nếu đây là hành động chuyển
   đổi chính cần đưa vào báo cáo/Ads.
5. Tạo Exploration hoặc report lưu sẵn:
   - Rows: source / medium / campaign / content.
   - Metrics: event count, total users, key events.
   - Filter: event name = `zalo_redirect_clicked`.

GA4 hiện được tải sẵn nhưng chưa thấy consent gate trong source. Agent triển
khai cần đối chiếu privacy policy và thị trường người dùng trước khi thay đổi
consent behavior; không mở rộng thu thập dữ liệu trong phạm vi task này.

## File cần tạo

- `docs/zalo-agents-link-tracking.md`: link copy-paste cho từng kênh, quy ước
  UTM, cách kiểm tra DebugView và cách đọc báo cáo.

Tài liệu phải nói rõ “click chuyển sang Zalo” không đồng nghĩa “đã tham gia
nhóm Zalo”.

## Quy tắc đọc số

- `event count`: số lần phát sinh chuyển hướng.
- `total users`: số user GA4 ước tính; không gọi là số thành viên Zalo.
- `key events`: số event được đánh dấu chuyển đổi.
- Không dùng raw page view của `/zalo-agents` làm KPI chính.
- Không so trực tiếp click trong Ads Manager với GA4 nếu chưa thống nhất múi giờ,
  attribution window và cách lọc bot.

## Tiêu chí hoàn thành

- Mỗi link test xuất hiện đúng source/medium/campaign trong GA4.
- Organic và paid không bị gộp cùng medium.
- Có report lọc riêng `zalo_redirect_clicked`.
- Không có PII trong URL hoặc event parameters.

## Danh sách việc

- [ ] Xác minh UTM trên bốn nhóm kênh.
- [ ] Kiểm tra event trong DebugView.
- [ ] Tạo custom dimensions cần thiết.
- [ ] Quyết định và cấu hình key event.
- [ ] Lưu báo cáo GA4 theo nguồn/campaign/content.
