import type { Section } from "@/lib/course-playbook/types"

/** Nguồn: giáo trình Module 04 — WHAT IF, bài 4.12 "Present & Handoff" (25 phút), quy tắc kết thúc module. */
export const section: Section = {
  id: "bai-4-12",
  kicker: "WHAT IF · Bài 4.12 · 25 phút",
  title: "Trình bày 3 phút và bàn giao",
  highlight: "bàn giao",
  tocLabel: "4.12 · Trình bày và bàn giao",
  lead: "Bài cuối là trình bày 3 phút (Present) rồi bàn giao (Handoff) sang Module 05 — Build. Đây là cách trình bày để demo và nhận phản hồi, không phải quay video.",
  blocks: [
    { type: "subheading", text: "Cách trình bày 3 phút" },
    {
      type: "steps",
      items: [
        { title: "WHY", text: "Khách hàng và vấn đề thực.", meta: "30 giây" },
        { title: "VALUE", text: "Lời hứa giá trị và Aha Moment.", meta: "30 giây" },
        {
          title: "EXPERIENCE",
          text: "Dẫn qua 3–5 màn quan trọng của storyboard: mở app → làm việc chính → kết quả → tùy chọn nâng cấp.",
          meta: "90 giây",
        },
        {
          title: "BUSINESS",
          text: "Giá trị trả phí, rủi ro còn lại và kế hoạch test / build.",
          meta: "30 giây",
        },
      ],
    },
    { type: "subheading", text: "Quy tắc kết thúc module" },
    {
      type: "paragraph",
      text: "**Chỉ chuyển sang Module 05 — Build khi có đủ:**",
    },
    {
      type: "list",
      items: [
        "Bản Product Brief.",
        "Screen Map.",
        "Design System.",
        "Bộ ảnh batch (cả bộ màn hình tạo theo lô).",
        "Nội dung chữ chuẩn.",
        "Danh sách vấn đề UX cần khắc phục.",
      ],
    },
    {
      type: "callout",
      label: "Rủi ro còn mở",
      paragraphs: [
        "Chấp nhận rủi ro còn mở **nếu được ghi rõ** và không làm hỏng trải nghiệm chính.",
      ],
    },
    {
      type: "paragraph",
      text: "Đây cũng chính là sáu thứ của cổng quyết định G4 ở cuối trang.",
    },
  ],
}
