import type { Section } from "@/lib/course-playbook/types"
import { figureBlock } from "./helpers"

/**
 * Giáo trình Module 02 — Phần 3 HOW · 07 Opportunity Discovery Playbook:
 * quy trình 7 bước · 7.1 Opportunity Discovery Matrix · 7.2 Opportunity Scorecard · 7.3 bộ lọc hai tầng.
 */
export const section: Section = {
  id: "quy-trinh-7-buoc",
  kicker: "HOW · 07 Opportunity Discovery Playbook",
  title: "7 bước tìm, lọc và chọn cơ hội app",
  highlight: "7 bước",
  tocLabel: "Quy trình 7 bước",
  lead: "Một quy trình bảy bước nằm bên trong Module 02, đi từ Market Fit Report đến App Opportunity Brief.",
  blocks: [
    figureBlock(
      "7-buoc-tim-loc-chon-co-hoi",
      "Infographic quy trình 7 bước Import, Explore, Research, Formulate, Score, Challenge, Select; ma trận 18 ý tưởng, Opportunity Scorecard 100 điểm với sáu tiêu chí, và bộ lọc hai tầng chọn ra ba cơ hội cuối.",
      "Hình 23 · 7 bước tìm, lọc và chọn cơ hội — ma trận 18 ý tưởng, scorecard 100 điểm, bộ lọc hai tầng.",
    ),
    {
      type: "steps",
      items: [
        {
          title: "IMPORT — Nhận Market Fit Report",
          text: "Đọc dữ liệu Module 01, xác định thị trường, ICP, bằng chứng, kênh phân phối, lợi thế và giới hạn.",
        },
        {
          title: "EXPLORE — Khám phá bằng sáu phương pháp",
          text: "Tìm các vấn đề và cơ hội theo sáu hướng, không chỉ nghĩ ngẫu nhiên từ tên sản phẩm.",
        },
        {
          title: "RESEARCH — Tìm bằng chứng",
          text: "Nghiên cứu đối thủ, những lời phàn nàn, hành vi khách hàng, giải pháp hiện tại và tín hiệu trả tiền.",
        },
        {
          title: "FORMULATE — Hình thành Opportunity Hypotheses",
          text: "Chuẩn hoá cơ hội theo Customer → Problem → Alternative → Value → Differentiation → Distribution.",
        },
        {
          title: "SCORE — Sàng lọc và xếp hạng",
          text: "Dùng Opportunity Scorecard để so sánh, đánh dấu dữ liệu còn thiếu và loại bỏ phương án rủi ro.",
        },
        {
          title: "CHALLENGE — Phỏng vấn và phản biện",
          text: "ChatGPT cùng bạn kiểm tra các giả định, đặt câu hỏi phản chứng, điều chỉnh cơ hội và so sánh các phương án.",
        },
        {
          title: "SELECT — Chọn cơ hội và bàn giao",
          text: "Chọn ý tưởng ưu tiên, lập App Opportunity Brief và chuyển những giả thuyết chưa được chứng minh sang Module 03.",
          output: "App Opportunity Brief",
        },
      ],
    },
    { type: "subheading", text: "7.1 · Opportunity Discovery Matrix (ma trận khám phá cơ hội)" },
    {
      type: "paragraph",
      text: "Ở bước Explore, ChatGPT tạo một ma trận ban đầu với số ý tưởng mục tiêu cho từng phương pháp.",
    },
    {
      type: "table",
      head: ["Phương pháp", "Số ý tưởng mục tiêu"],
      rows: [
        ["Solve Your Own Problem", "3"],
        ["Proven App Reverse Engineering", "3"],
        ["Localization & Verticalization", "3"],
        ["Community Pain Mining", "3"],
        ["Emerging Trend Discovery", "3"],
        ["Hidden & Underserved Niche", "3"],
        ["**Tổng**", "**18**"],
      ],
    },
    {
      type: "callout",
      label: "18 là mục tiêu gợi ý",
      paragraphs: [
        "18 là mục tiêu gợi ý để đa dạng góc nhìn, không phải bắt buộc phải tạo đủ bằng mọi giá. Nếu một phương pháp không phù hợp với thị trường được chọn, ChatGPT cần nói rõ và không tạo những ý tưởng gượng ép.",
        "Sau giai đoạn này, bạn không cần xây 18 ứng dụng. Bạn chỉ chọn những cơ hội đáng tiếp tục nghiên cứu.",
      ],
    },
    { type: "subheading", text: "7.2 · Opportunity Scorecard (thang chấm 100 điểm)" },
    {
      type: "table",
      head: ["Tiêu chí", "Trọng số"],
      rows: [
        ["**Problem Severity** — vấn đề đủ quan trọng", "25"],
        ["**Willingness to Pay** — khả năng và động lực trả tiền", "20"],
        ["**Distribution Accessibility** — khả năng tiếp cận khách hàng", "20"],
        ["**Market Evidence** — bằng chứng về nhu cầu và giải pháp hiện tại", "15"],
        [
          "**Revenue Potential** — tiềm năng tạo giá trị/doanh thu theo chu kỳ sử dụng thực tế",
          "10",
        ],
        ["**Feasibility & Risk** — khả năng triển khai và rủi ro", "10"],
        ["**Tổng**", "**100**"],
      ],
      caption:
        "Tiêu chí cuối được chỉnh để không bất lợi với những app có mô hình bán một lần hoặc theo sự kiện.",
    },
    {
      type: "callout",
      label: "Cách chấm",
      paragraphs: [
        "Mỗi điểm số phải có giải thích và mức độ tin cậy: High / Medium / Low.",
        "Điểm cao nhưng bằng chứng yếu không được xem là cơ hội đã được xác nhận.",
      ],
    },
    { type: "subheading", text: "7.3 · Bộ lọc hai tầng" },
    {
      type: "cards",
      columns: 2,
      items: [
        {
          title: "Tầng 1 — Hard Filters (bộ lọc loại trừ)",
          text: "Loại hoặc tạm dừng ý tưởng có rủi ro không thể chấp nhận, không xác định được khách hàng, không có con đường tiếp cận khả thi hoặc vượt xa nguồn lực hiện tại.",
        },
        {
          title: "Tầng 2 — Opportunity Ranking (xếp hạng cơ hội)",
          text: "Xếp hạng các ý tưởng vượt bộ lọc theo sáu tiêu chí ở trên.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "Cuối cùng, chọn **ba cơ hội**:",
    },
    {
      type: "cards",
      columns: 3,
      items: [
        {
          title: "Primary Opportunity",
          meta: "Cơ hội ưu tiên",
          text: "Cơ hội ưu tiên để kiểm chứng.",
        },
        {
          title: "Alternative Opportunity",
          meta: "Cơ hội thay thế",
          text: "Phương án thay thế có logic kinh doanh khác.",
        },
        {
          title: "Wild Card Opportunity",
          meta: "Cơ hội “lá bài tự do”",
          text: "Phương án ít hiển nhiên hơn nhưng có một tín hiệu đáng khám phá.",
        },
      ],
    },
    {
      type: "callout",
      label: "Lưu ý",
      paragraphs: [
        "Không bắt buộc phải chọn Wild Card nếu dữ liệu quá yếu. Điểm số hỗ trợ quyết định — không phải xác suất thành công.",
      ],
    },
  ],
}
