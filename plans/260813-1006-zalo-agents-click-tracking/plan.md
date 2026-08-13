---
title: "Đo click và chuyển hướng Zalo Agents"
description: "Tạo /zalo-agents, đo nguồn bằng UTM + GA4 rồi tự mở nhóm Zalo"
status: pending
priority: P1
tags: [analytics, ga4, utm, zalo, redirect]
created: 2026-08-13
---

# Kế hoạch đo click Zalo Agents

## Mục tiêu

Tạo link trung gian `https://tranvanhoang.com/zalo-agents` để:

- Đếm lượt click và người dùng trong GA4.
- Phân biệt Facebook, TikTok, YouTube, organic và paid.
- Tự chuyển người dùng tới nhóm Zalo Agents.
- Không tính phần lớn bot preview link là người click thật.

## Quyết định kỹ thuật

- Dùng GA4 hiện có: `G-96036PT8ZC`.
- Bản v1 không thêm database, SDK hoặc dịch vụ analytics mới.
- Dùng trang chuyển tiếp có JavaScript, không dùng redirect HTTP trực tiếp.
- Route nằm trong hệ thống i18n hiện có: tiếng Việt giữ `/zalo-agents`, tiếng
  Anh dùng `/en/zalo-agents`.
- URL Zalo cố định trong code/server config; không nhận URL đích từ query.
- Sự kiện chính: `zalo_redirect_clicked`.
- Click không đồng nghĩa với đã tham gia nhóm Zalo.

## Luồng

```text
Social/Ads + UTM
  → /zalo-agents
  → GA4 nhận zalo_redirect_clicked
  → location.replace(ZALO_GROUP_URL)
  → nút mở Zalo dự phòng nếu tự chuyển thất bại
```

## Các giai đoạn

| Giai đoạn | Nội dung | Trạng thái |
|---|---|---|
| [01](./phase-01-build-tracking-redirect-route.md) | Tạo route, gửi GA4 event và chuyển Zalo | pending |
| [02](./phase-02-configure-utm-and-ga4-reporting.md) | Chuẩn hóa UTM, GA4 event và báo cáo | pending |
| [03](./phase-03-validate-deploy-and-roll-out.md) | Kiểm thử, deploy, đổi link trong skill đăng social | pending |

## Phạm vi không làm ở v1

- Không lưu IP thô, email, số điện thoại hoặc Zalo ID.
- Không xây dashboard riêng.
- Không thêm PostHog, Supabase, Redis hoặc URL shortener.
- Không tuyên bố đo được số người đã vào nhóm.
- Không sửa bài social sang link mới trước khi production được kiểm thử.
- Không thêm first-party click API ở v1; đây là nâng cấp tùy chọn nếu GA4 thiếu
  dữ liệu so với nhu cầu vận hành thực tế.

## Phụ thuộc

- Có quyền deploy `tranvanhoang.com`.
- Có quyền xem GA4 property chứa measurement ID hiện tại.
- Link nhóm Zalo đích: `https://zalo.me/g/jlfoycrklxfw3fyfecbw`.

## Hoàn thành khi

- Link production mở được trên trình duyệt thường và in-app browser.
- GA4 chỉ nhận một event mỗi lần trang chuyển tiếp chạy.
- Source/medium/campaign/content hiển thị đúng trong GA4.
- Người dùng được chuyển tới đúng nhóm Zalo và có nút dự phòng.
- `npm run lint` và `npm run build` thành công.
