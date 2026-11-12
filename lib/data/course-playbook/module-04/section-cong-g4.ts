import type { Section } from "@/lib/course-playbook/types"

/**
 * Nguồn: giáo trình Module 04 — bài 4.12 (quy tắc kết thúc module: điều kiện chuyển sang Module 05),
 * infographic 14, và triết lý cốt lõi. Cổng quyết định G4 · Product Clarity.
 */
export const section: Section = {
  id: "cong-g4",
  kicker: "Decision Gate (cổng quyết định) · G4",
  title: "Cổng G4 · Product Clarity",
  highlight: "Product Clarity",
  tocLabel: "Cổng quyết định G4",
  lead: "Chỉ sang **Module 05 — Build** khi có đủ sáu thứ dưới đây. Tick từng mục khi bạn đã có.",
  blocks: [
    {
      type: "checklist",
      id: "gate",
      title: "Sáu thứ cần có để qua cổng G4",
      items: [
        {
          title: "Product Brief",
          text: "Bản mô tả sản phẩm cô đọng để người và AI cùng hiểu.",
        },
        {
          title: "Screen Map",
          text: "Hành trình người dùng và danh sách màn hình đã chốt.",
        },
        {
          title: "Design System",
          text: "Màu, chữ, thành phần dùng chung cho mọi màn hình.",
        },
        {
          title: "Bộ ảnh UI theo lô",
          text: "Toàn bộ màn hình MVP, cùng một phong cách.",
        },
        {
          title: "Nội dung chữ chuẩn",
          text: "Ghi trong Markdown. Ảnh AI sai chữ thì sửa theo Screen Specs.",
        },
        {
          title: "Danh sách vấn đề UX cần khắc phục",
          text: "Những điểm cần khắc phục rút ra khi thử với người thật.",
        },
      ],
      riskNote: "Rủi ro còn mở vẫn được chấp nhận — nếu được ghi rõ và không làm hỏng trải nghiệm chính.",
    },
    {
      type: "output",
      label: "Đầu ra của Module 04",
      text: "**Product Blueprint** cùng bộ tài liệu bàn giao (Build-Ready Pack) — đầu vào cho Module 05 — Build.",
    },
    {
      type: "quote",
      text: "Thiết kế để người dùng nhận được giá trị và có lý do mua — không thiết kế chỉ để nhìn đẹp.",
      by: "Triết lý cốt lõi · Module 04 — Design",
    },
  ],
}
