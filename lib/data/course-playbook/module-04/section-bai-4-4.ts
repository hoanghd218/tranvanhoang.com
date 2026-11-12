import type { Section } from "@/lib/course-playbook/types"
import { blueprintComponents } from "./blueprint-components"

/** Nguồn: giáo trình Module 04 — WHAT, bài 4.4 "7 thành phần Product Blueprint" (45 phút) và hai infographic Blueprint. */
export const section: Section = {
  id: "bai-4-4",
  kicker: "WHAT · Bài 4.4 · 45 phút",
  title: "7 thành phần của Product Blueprint",
  highlight: "Product Blueprint",
  tocLabel: "4.4 · 7 thành phần Product Blueprint",
  lead: "Product Blueprint (bản thiết kế tổng thể sản phẩm) làm rõ sản phẩm phục vụ ai, cung cấp giá trị gì, cần những tính năng và màn hình nào, trải nghiệm vận hành ra sao và cần gì để triển khai.",
  blocks: [
    {
      type: "callout",
      label: "Hiểu đúng",
      paragraphs: [
        "Blueprint **không phải** bộ code, **không phải** sơ đồ database và **không chỉ** là các tấm ảnh UI. Một Blueprint tốt giúp hạn chế việc ChatGPT “tự suy đoán” những yêu cầu chưa được xác định.",
      ],
    },
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-04/blueprint-1-chien-luoc-den-man-hinh.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic Product Blueprint phần 1: bốn thành phần Product Strategy, MVP Scope, User Journey và Screen Architecture; mỗi thành phần có định nghĩa, câu hỏi, ví dụ AI Interview Coach, sai lầm thường gặp và đầu ra.",
        caption: "Hình 6 · Blueprint phần 1: từ chiến lược đến màn hình (thành phần 1–4).",
      },
    },
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-04/blueprint-2-giao-dien-chuyen-doi-dac-ta.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic Product Blueprint phần 2: ba thành phần Design System, Conversion Experience và Build Specification; tóm tắt 7 thành phần trong một câu và bài tập điền 7 thành phần vào một trang với nhãn Evidence, Assumption, Decision.",
        caption: "Hình 7 · Blueprint phần 2: giao diện, chuyển đổi, đặc tả (thành phần 5–7).",
      },
    },
    { type: "subheading", text: "Đọc từng thành phần" },
    { type: "accordion", expandFirst: true, items: blueprintComponents },
    {
      type: "quote",
      text: "Product Strategy nói vì sao; MVP Scope nói làm ít tới đâu; Journey và Screen Map nói người dùng đi qua đâu; Design System nói nhìn như thế nào; Conversion nói vì sao họ mua; Build Specification nói AI phải triển khai chính xác ra sao.",
      by: "Kết luận bài 4.4",
    },
    { type: "subheading", text: "Bài tập sau bài 4.4" },
    {
      type: "paragraph",
      text: "Điền 7 thành phần vào một trang (có mẫu ở phần Mẫu tài liệu, bài tập, rubric). Ghi rõ từng mục là:",
    },
    {
      type: "list",
      items: [
        "**Evidence** — có bằng chứng.",
        "**Assumption** — giả thuyết.",
        "**Decision** — quyết định thiết kế.",
      ],
    },
  ],
}
