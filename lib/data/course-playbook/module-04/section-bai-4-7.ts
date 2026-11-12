import type { Section } from "@/lib/course-playbook/types"

/** Nguồn: giáo trình Module 04 — HOW, bài 4.7 "Chốt Design Template và Style Direction" (25 phút), Prompt 03. */
export const section: Section = {
  id: "bai-4-7",
  kicker: "HOW · Bài 4.7 · 25 phút",
  title: "Chốt Design Template trước khi tạo ảnh hàng loạt",
  highlight: "Design Template",
  tocLabel: "4.7 · Chốt Design Template",
  lead: "Design Template là một bộ quy tắc mẫu để tất cả màn hình cùng giữ — một “hợp đồng hình ảnh” (visual contract) chung để cả bộ màn hình trông như cùng một app.",
  blocks: [
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-04/chot-design-template.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic bài 4.7: Design Template giữ gì cho mọi màn; ba phần của Prompt 03 gồm đề xuất, chốt template, tạo ảnh ngay; vì sao phải chốt trước (không có master style thì mỗi màn như một app khác); và Master Styleboard phải thể hiện màu, chữ, nút, thẻ, kiểu icon.",
        caption: "Hình 10 · Bài 4.7 — Design Template giữ gì, Prompt 03 gồm ba phần, Styleboard phải thể hiện gì.",
      },
    },
    { type: "subheading", text: "Design Template giữ cho mọi màn hình" },
    {
      type: "list",
      items: [
        "Màu chủ đạo và màu phụ.",
        "Font, phân cấp chữ và khoảng cách.",
        "Cấu trúc top bar, bottom tab và nút chính.",
        "Kiểu card, input, progress bar, icon.",
        "Cách dùng hình minh họa, nền, đổ bóng.",
      ],
    },
    {
      type: "callout",
      label: "Vì sao phải chốt trước khi tạo ảnh hàng loạt",
      paragraphs: [
        "Nếu mỗi màn được tạo không có master style (phong cách gốc), AI dễ khiến mỗi màn hình giống một ứng dụng khác nhau. Dù tạo ảnh cùng lúc, vẫn cần một **visual contract** chung.",
      ],
    },
    {
      type: "prompt",
      title: "Prompt 03 · Design Direction + yêu cầu tạo ảnh Styleboard NGAY",
      when: "Chạy sau khi đã chốt Product Brief và Screen Map.",
      hint: "Prompt này yêu cầu ChatGPT tạo ảnh ngay: Master Styleboard.",
      text: `Bạn là Mobile Product Art Director và chuyên gia UX.
Dựa trên PRODUCT BRIEF và SCREEN MAP đã chốt:

PHẦN 1 — ĐỀ XUẤT
Đề xuất 3 visual directions khác nhau cho đúng nhóm khách hàng.
Với mỗi direction mô tả: cảm xúc, palette HEX, typography,
component style, icon/illustration style, bố cục, lý do phù hợp,
ưu/nhược điểm cho sử dụng và marketing.

PHẦN 2 — CHỐT TEMPLATE
Ưu tiên một direction tốt nhất, tạo Design System v1:
- Color tokens và trạng thái (primary, background, text, error, success).
- Typography levels.
- Spacing, radius, button, card, input, navigation.
- Quy tắc safe area, kích thước touch target, độ tương phản.
- Các component dùng đi dùng lại.

PHẦN 3 — TẠO ẢNH NGAY
SAU KHI hoàn tất mô tả Design System và template,
HÃY SỬ DỤNG KHẢ NĂNG TẠO ẢNH CỦA BẠN NGAY BÂY GIỜ
để TẠO HÌNH ẢNH MASTER STYLEBOARD THỰC TẾ.

Styleboard phải thể hiện màu, typography, button, card,
icon style, các mẫu layout và 2–3 vùng giao diện mẫu.
Đây là một ảnh minh họa style system, KHÔNG phải cả app.

Tôi đang dùng ChatGPT trên web: bạn trực tiếp TẠO ẢNH,
KHÔNG chỉ viết prompt cho DALL-E, Midjourney, Figma hay công cụ khác.
Không trả lời bằng mô tả suông.
Nếu tạo ảnh bị giới hạn, hãy nói rõ giới hạn thực tế.`,
    },
    {
      type: "output",
      label: "Đầu ra bài 4.7",
      text: "`DESIGN-SYSTEM.md` + ít nhất một **Master Styleboard** (ảnh bảng phong cách) do chính bạn tạo trong ChatGPT Web.",
    },
  ],
}
