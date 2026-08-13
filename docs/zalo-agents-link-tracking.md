# Zalo Agents link tracking

Route chuyển tiếp: `https://tranvanhoang.com/zalo-agents`

Route tiếng Anh: `https://tranvanhoang.com/en/zalo-agents`

Trang gửi event GA4 `zalo_redirect_clicked`, sau đó mở nhóm cố định:
`https://zalo.me/g/jlfoycrklxfw3fyfecbw`. Click chuyển sang Zalo không đồng
nghĩa với đã tham gia nhóm Zalo.

## Quy ước UTM

Giá trị tự đặt dùng chữ thường, dấu gạch dưới và không chứa tên, email, số điện
thoại hoặc thông tin nhận diện cá nhân.

- Facebook organic: `?utm_source=facebook&utm_medium=organic_social&utm_campaign=zalo_agents&utm_content=fanpage_comment`
- TikTok organic: `?utm_source=tiktok&utm_medium=organic_social&utm_campaign=zalo_agents&utm_content=profile`
- YouTube organic: `?utm_source=youtube&utm_medium=organic_video&utm_campaign=zalo_agents&utm_content=video_description`
- Meta Ads: `utm_source={{site_source_name}}&utm_medium=paid_social&utm_campaign={{campaign.id}}&utm_content={{ad.id}}&utm_term={{adset.id}}&utm_id={{campaign.id}}`
- TikTok Ads: `utm_source=tiktok&utm_medium=paid_social&utm_campaign=__CAMPAIGN_ID__&utm_content=__CID__&utm_term=__AID__&utm_id=__CAMPAIGN_ID__`
- YouTube/Google Ads: ưu tiên auto-tagging; nếu cần UTM dùng `utm_source=youtube&utm_medium=paid_video&utm_campaign=<campaign_id>&utm_content=<creative_id>&utm_id=<campaign_id>`.

Luôn kiểm tra macro quảng cáo đã được nền tảng thay thế trước khi chạy. Không
ghi đè `gclid` bằng UTM thủ công.

## Event và báo cáo GA4

Event gửi các tham số `destination`, UTM, `referrer_host` và `click_id` nếu có.
Query không hợp lệ hoặc quá dài được chuẩn hóa an toàn; URL đích không bao giờ
được lấy từ query string.

Trong GA4:

1. Mở DebugView và kiểm tra một `zalo_redirect_clicked` cho mỗi lần test.
2. Nếu cần xem trực tiếp trong báo cáo, đăng ký custom dimensions cấp event cho
   `destination`, `utm_content`, `utm_id` và `referrer_host`.
3. Tạo report/Exploration lọc `event name = zalo_redirect_clicked`, với rows là
   source, medium, campaign và content; metrics là event count, total users và
   key events.
4. Chỉ đánh dấu event là key event nếu đây là hành động chuyển đổi cần tối ưu.

Diễn giải số liệu:

- `event count`: số lần phát sinh chuyển hướng.
- `total users`: số người dùng GA4 ước tính, không phải số thành viên nhóm Zalo.
- `key events`: số event được đánh dấu chuyển đổi.

Không dùng page view của `/zalo-agents` làm KPI chính và không so trực tiếp với
Ads Manager nếu chưa thống nhất múi giờ, attribution window và cách lọc bot.

## Checklist kiểm tra

- Mở route không UTM và xác nhận fallback direct/none.
- Kiểm tra Facebook, TikTok, YouTube organic và một URL paid mẫu.
- Thử UTM chữ hoa, UTM dài, `url=https://example.com` và xác nhận đích không đổi.
- Kiểm tra GA4 DebugView chỉ nhận một event, sau đó kiểm tra người dùng được mở
  đúng nhóm Zalo.
- Kiểm tra metadata có `noindex, nofollow`; route không nằm trong sitemap.
- Thử khi GA4 bị chặn và khi JavaScript bị tắt: link dự phòng vẫn phải mở đúng
  nhóm.
