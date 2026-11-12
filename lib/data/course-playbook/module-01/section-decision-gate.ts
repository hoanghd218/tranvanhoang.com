import type { Section } from "@/lib/course-playbook/types"
import { figures } from "./figures"

/** Nguồn: giáo trình Module 01, Phần IV — WHAT IF, bài 4.5 (Decision Gate — hoàn thành Module 01). */
export const section: Section = {
  id: "decision-gate",
  kicker: "WHAT IF · Bài 4.5",
  title: "Decision Gate G1: chốt một thị trường và giải thích được vì sao",
  highlight: "giải thích được vì sao",
  tocLabel: "Cổng G1 · Market Fit",
  lead: "Bạn hoàn thành Module 01 khi trả lời được tám câu hỏi dưới đây, mỗi câu kèm điều kiện cần đạt.",
  blocks: [
    { type: "figure", figure: figures.chot },
    {
      type: "checklist",
      id: "gate",
      title: "Cổng G1 · Market Fit",
      intro: "Tick khi bạn trả lời được câu hỏi và điều kiện đi kèm đã đạt.",
      items: [
        { title: "Tôi chọn thị trường nào?", text: "Điều kiện: một thị trường được ưu tiên." },
        { title: "Tôi phục vụ ai?", text: "Điều kiện: niche và ICP rõ ràng." },
        { title: "Vì sao họ cần giải pháp?", text: "Điều kiện: có nhóm vấn đề và bằng chứng nhu cầu sơ bộ." },
        { title: "Họ có thể trả tiền không?", text: "Điều kiện: có cơ sở đánh giá hành vi chi tiêu." },
        { title: "Tôi tiếp cận họ ở đâu?", text: "Điều kiện: ít nhất một kênh khả thi." },
        { title: "Tôi có lợi thế gì?", text: "Điều kiện: Founder Fit và nguồn lực được đánh giá." },
        { title: "Thị trường có đủ hấp dẫn?", text: "Điều kiện: có Scorecard và phân tích rủi ro." },
        { title: "Tôi còn chưa biết gì?", text: "Điều kiện: những giả thuyết cần kiểm chứng được ghi rõ." },
      ],
      riskNote: "Đừng ép mình chọn một thị trường thiếu bằng chứng chỉ để hoàn thành bài tập.",
    },
    { type: "subheading", text: "Ba quyết định có thể đưa ra" },
    {
      type: "cards",
      columns: 3,
      items: [
        {
          title: "SELECT — chọn",
          text: "Chọn được thị trường đủ cơ sở để tiếp tục.",
          meta: "Làm tiếp: sang Module 02 — tìm cơ hội app",
        },
        {
          title: "REFINE — thu hẹp",
          text: "Cần thu hẹp niche hoặc bổ sung bằng chứng.",
          meta: "Làm tiếp: thu hẹp nhóm khách, tìm thêm bằng chứng",
        },
        {
          title: "RESEARCH AGAIN — tìm lại",
          text: "Chưa có thị trường đáp ứng các tiêu chí quan trọng.",
          meta: "Làm tiếp: quay lại bước liệt kê thị trường",
        },
      ],
    },
    {
      type: "callout",
      label: "Đầu ra của module",
      paragraphs: [
        "Đầu ra của Module 01 là một **Winning Market Candidate** (ứng viên thị trường đáng làm), chưa phải một thị trường đã được kiểm chứng hoàn toàn.",
        "Bạn dùng Market Fit Report này để chuyển sang **Module 02 — Opportunity**: tìm và lựa chọn những cơ hội ứng dụng cụ thể trong thị trường đã xác định.",
      ],
    },
  ],
}
