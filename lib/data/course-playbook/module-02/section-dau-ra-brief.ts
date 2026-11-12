import type { Section } from "@/lib/course-playbook/types"

/**
 * Giáo trình Module 02 — Phần 4 WHAT IF · 10 Output & Decision Gate:
 * 10.1 kết quả chính thức của Module 02 · 10.2 cấu trúc App Opportunity Brief.
 */
export const section: Section = {
  id: "dau-ra-opportunity-brief",
  kicker: "WHAT IF · 10 Output",
  title: "Đầu ra của Module 02: App Opportunity Brief",
  highlight: "App Opportunity Brief",
  tocLabel: "Đầu ra: Opportunity Brief",
  lead: "Bạn hoàn thành ba sản phẩm. App Opportunity Brief là tài liệu bắt buộc, dùng làm đầu vào cho Module 03 — Validate.",
  blocks: [
    { type: "subheading", text: "10.1 · Ba sản phẩm của Module 02" },
    {
      type: "table",
      head: ["Sản phẩm", "Nội dung"],
      rows: [
        [
          "**Opportunity Discovery Map**",
          "Các cơ hội phát hiện theo sáu phương pháp, có nguồn và giả thuyết",
        ],
        [
          "**Opportunity Shortlist & Scorecard**",
          "Ba cơ hội được nghiên cứu, đánh giá và phản biện",
        ],
        [
          "**App Opportunity Brief** (bắt buộc)",
          "Một cơ hội ưu tiên được chọn, chuẩn bị kiểm chứng tại Module 03",
        ],
      ],
    },
    { type: "subheading", text: "10.2 · Cấu trúc App Opportunity Brief" },
    {
      type: "paragraph",
      text: "Brief chuẩn có 12 mục. Gắn nhãn mọi dữ liệu theo FACT / INFERENCE / ASSUMPTION / UNKNOWN và không biến giả thuyết của Module 02 thành kết luận đã được kiểm chứng.",
    },
    {
      type: "worksheet",
      id: "app-opportunity-brief",
      title: "Khung App Opportunity Brief (12 mục)",
      note: "Điền từng mục sau khi chốt cơ hội ưu tiên. Tài liệu phải đủ rõ để dùng làm đầu vào cho bước Validate.",
      fields: [
        "01 · Opportunity Name & One-line Pitch (tên cơ hội và một câu giới thiệu)",
        "02 · Target Customer & Job-to-be-Done",
        "03 · Evidence-backed Problem (vấn đề có bằng chứng)",
        "04 · Existing Alternatives & Competitors",
        "05 · Opportunity & Value Proposition",
        "06 · Differentiation Wedge",
        "07 · Monetization Hypothesis",
        "08 · Distribution Hypothesis",
        "09 · Feasibility, Constraints & Risks",
        "10 · Evidence, Assumptions & Confidence",
        "11 · Initial Validation Plan (kế hoạch kiểm chứng ban đầu)",
        "12 · Decision & Rationale (quyết định và lý do)",
      ],
    },
    {
      type: "callout",
      label: "Brief khi xuất từ Master Prompt",
      paragraphs: [
        "Master Prompt ở phần 09 (Phase 7) xuất Brief theo 16 mục chi tiết hơn, có thêm Mobile App Fit & Feasibility, Competitor References, Evidence Log, Critical Assumptions và Initial Validation Experiments. Hai cấu trúc cùng hướng tới một đầu ra: tài liệu đủ rõ để dùng làm đầu vào cho Module 03.",
      ],
    },
  ],
}
