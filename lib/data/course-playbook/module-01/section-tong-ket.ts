import type { Section } from "@/lib/course-playbook/types"

/** Nguồn: giáo trình Module 01, phần Tổng kết Module 01 và Triết lý kết thúc. */
export const section: Section = {
  id: "tong-ket",
  kicker: "Tổng kết",
  title: "Tổng kết Module 01",
  highlight: "Module 01",
  tocLabel: "Tổng kết",
  lead: "Bốn giai đoạn của 4MAT, một sản phẩm cuối và một câu triết lý để mang theo.",
  blocks: [
    {
      type: "table",
      head: ["Giai đoạn", "Mục tiêu", "Nội dung"],
      rows: [
        ["**WHY**", "Hiểu tại sao chọn thị trường quan trọng", "Nhận thức về khách hàng, nhu cầu, phân phối và rủi ro chọn sai thị trường."],
        ["**WHAT**", "Nắm kiến thức và framework", "Market Fundamentals · 7 BEFORE Principles · 5-Factor Market Fit."],
        ["**HOW**", "Biết cách nghiên cứu và lựa chọn", "7-Step AI Market Discovery · Scorecard · ChatGPT Master Prompt."],
        ["**WHAT IF**", "Tự vận dụng và phản biện", "Case Studies · Adaptation Challenge · Market Selection."],
      ],
    },
    {
      type: "output",
      label: "Final Deliverable",
      text: "**Market Fit Report** — một thị trường được lựa chọn dựa trên nghiên cứu và bằng chứng sơ bộ.",
    },
    {
      type: "quote",
      text: "**WHO Before WHAT. PROBLEM Before SOLUTION.** Đừng bắt đầu bằng những gì bạn có thể xây dựng. Hãy bắt đầu bằng những người bạn muốn phục vụ và những vấn đề thực sự đáng giải quyết.",
      by: "Triết lý kết thúc Module 01",
    },
  ],
}
