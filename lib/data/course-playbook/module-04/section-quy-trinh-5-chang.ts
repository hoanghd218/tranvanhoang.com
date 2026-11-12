import type { Section } from "@/lib/course-playbook/types"

/**
 * Nguồn: giáo trình Module 04 — mục 3 (quy trình thực hành rút gọn: 5 chặng)
 * và infographic "Quy trình 5 chặng và 8 prompt".
 */
export const section: Section = {
  id: "quy-trinh-5-chang",
  kicker: "HOW · Quy trình thực hành",
  title: "5 chặng làm app design với ChatGPT Web",
  highlight: "5 chặng",
  tocLabel: "Quy trình 5 chặng",
  lead: "Giáo án có 12 bài để hiểu sâu, nhưng quy trình vận hành thật chỉ cần 5 chặng. Khi xây app mới, bạn dùng lại đúng 5 chặng này.",
  blocks: [
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-04/quy-trinh-5-chang.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic 5 chặng làm app design với ChatGPT Web: Define, Map, Style, Generate, Verify và Handoff, mỗi chặng có việc làm, sản phẩm và số bài; kèm bảng thứ tự chạy 8 prompt thiết kế (01, 02, 03, 04, 04B, 05, 06, 07) và năm lý do chỉ cần 5 chặng.",
        caption: "Hình 2 · Năm chặng và thứ tự chạy 8 prompt thiết kế (Product Brief đến UX Critic).",
      },
    },
    {
      type: "steps",
      items: [
        {
          title: "1 · DEFINE — Định nghĩa",
          text: "Hiểu 7 phần Blueprint, viết Product Brief.",
          output: "Product Blueprint + Product Brief",
          meta: "Bài 4.4, 4.5",
        },
        {
          title: "2 · MAP — Vẽ bản đồ",
          text: "Mô tả hành trình người dùng và liệt kê màn hình.",
          output: "User Journey + Screen Map",
          meta: "Bài 4.6",
        },
        {
          title: "3 · STYLE — Chốt phong cách",
          text: "Chọn layout direction (hướng bố cục), design tokens (bộ giá trị thiết kế dùng chung) và mẫu thiết kế.",
          output: "Design Template + Styleboard (bảng phong cách mẫu)",
          meta: "Bài 4.7",
        },
        {
          title: "4 · GENERATE — Tạo ảnh",
          text: "Ra **một yêu cầu để ChatGPT tạo ảnh cho cả bộ màn hình**, sau đó tối ưu các màn hình chuyển đổi.",
          output: "UI Storyboard (ảnh lưới chứa cả bộ màn hình) + ảnh giao diện",
          meta: "Bài 4.8, 4.9",
        },
        {
          title: "5 · VERIFY & HANDOFF — Kiểm chứng, bàn giao",
          text: "Thử với người dùng, sửa lỗi, xuất tài liệu.",
          output: "Build-Ready Pack",
          meta: "Bài 4.10–4.12",
        },
      ],
    },
    { type: "subheading", text: "Vì sao chỉ 5 chặng?" },
    {
      type: "list",
      items: [
        "Đủ **ngắn** để dùng lại với nhiều ý tưởng.",
        "Không bỏ mất phần **định nghĩa vấn đề và giá trị kinh doanh**.",
        "Không lẫn **thiết kế** với backend và luồng dữ liệu — phần đó dành cho Module 05.",
        "Tách rõ **chốt layout và design template** với **dùng ChatGPT tạo ảnh thật**.",
        "Bảo đảm **kiểm chứng trước khi bàn giao code**.",
      ],
    },
    {
      type: "callout",
      label: "Điểm cốt lõi của chặng 4",
      paragraphs: [
        "**Một prompt tạo cả bộ màn hình — không prompt từng màn.** Nhờ vậy cả bộ UI giữ cùng một phong cách và cùng một hành trình.",
      ],
    },
  ],
}
