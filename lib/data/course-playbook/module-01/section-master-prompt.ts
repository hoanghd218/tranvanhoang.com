import type { Section } from "@/lib/course-playbook/types"
import { figures } from "./figures"
import { masterPromptText } from "./master-prompt-text"

/** Nguồn: giáo trình Module 01, Phần III — HOW, bài 3.5 (AI Market Discovery Master Prompt). Nội dung prompt lấy nguyên văn. */
export const section: Section = {
  id: "master-prompt",
  kicker: "HOW · Bài 3.5",
  title: "AI Market Discovery Master Prompt",
  highlight: "Master Prompt",
  tocLabel: "Master Prompt cho ChatGPT",
  lead: "Một prompt dùng cho cả Module 01. Bạn điền thông tin về mình, ChatGPT giúp khám phá thị trường, nghiên cứu, đánh giá và tạo Market Fit Report.",
  blocks: [
    { type: "subheading", text: "Prompt gồm bốn phần" },
    {
      type: "table",
      head: ["Phần", "Nội dung"],
      rows: [
        ["**A · Thông tin của tôi**", "Mười mục bạn điền (mục chưa biết có thể để trống)"],
        ["**B · Triết lý phải áp dụng**", "7 BEFORE Principles và 5-Factor Market Fit"],
        ["**C · Quy trình phân tích**", "Bảy bước, từ Self Discovery đến Select & Recommend"],
        ["**D · Output**", "Market Fit Report gồm 17 mục"],
      ],
    },
    { type: "figure", figure: figures.phieu10 },
    {
      type: "callout",
      label: "Cách dùng",
      paragraphs: [
        "Bấm nút Sao chép ở khối prompt bên dưới, dán vào ChatGPT, rồi điền các mục tô màu. Mục nào chưa biết thì để trống, prompt vẫn chạy được.",
        "Đừng chép nguyên đề xuất của AI. Bạn tự chọn và bảo vệ quyết định của mình.",
      ],
    },
    {
      type: "prompt",
      title: "AI Market Discovery Master Prompt — Module 01",
      when: "Dùng cho toàn bộ Module 01: điền thông tin về bạn, rồi để ChatGPT khám phá thị trường, nghiên cứu, đánh giá và tạo Market Fit Report.",
      text: masterPromptText,
      hint: "Dán vào ChatGPT. Khi AI trả số liệu, yêu cầu nguồn và link để bạn tự kiểm.",
      output: "Market Fit Report gồm 17 mục, từ Executive Summary đến những vấn đề cần nghiên cứu sâu ở Module 02 — Opportunity.",
    },
    {
      type: "callout",
      label: "Đừng để AI bịa số",
      paragraphs: [
        "Prompt yêu cầu AI phân biệt **Verified Fact** (sự thật đã xác minh), **Estimate** (ước tính) và **Hypothesis** (giả thuyết), và không bịa doanh thu, số người dùng hay số liệu thị trường.",
        "Số nào không có nguồn thì chưa dùng để ra quyết định.",
      ],
    },
  ],
}
