import type { Section } from "@/lib/course-playbook/types"
import { figureBlock } from "./helpers"

/**
 * Giáo trình Module 02 — Phần 2 WHAT · 05 Opportunity Components:
 * 10-Component Opportunity Canvas · 5.1 Opportunity Statement và Facts/Inferences/Assumptions/Unknowns ·
 * 5.2 một cơ hội kết hợp nhiều phương pháp (Cal Buddy).
 */
export const section: Section = {
  id: "opportunity-canvas",
  kicker: "WHAT · 05 Opportunity Components",
  title: "Biến quan sát rời rạc thành một cơ hội có thể phân tích",
  highlight: "một cơ hội",
  tocLabel: "Opportunity Canvas",
  lead: "Sau khi học sáu phương pháp, bạn cần biến những quan sát rời rạc thành một cơ hội có thể phân tích. Công cụ dùng là 10-Component Opportunity Canvas (khung 10 thành phần của một cơ hội).",
  blocks: [
    figureBlock(
      "opportunity-canvas-10-thanh-phan",
      "Infographic Opportunity Canvas 10 thành phần từ Target Customer đến Evidence, Feasibility & Risk, mẫu Opportunity Statement ba câu và bốn nhãn FACT, INFERENCE, ASSUMPTION, UNKNOWN để phân loại mọi nhận định.",
      "Hình 21 · Opportunity Canvas 10 thành phần, Opportunity Statement và bốn nhãn bằng chứng.",
    ),
    {
      type: "cards",
      columns: 2,
      items: [
        { title: "1 · Target Customer", meta: "Khách hàng mục tiêu", text: "Ai là người dùng và ai là người trả tiền?" },
        {
          title: "2 · Problem / Job-to-be-Done",
          meta: "Vấn đề / công việc cần hoàn thành",
          text: "Họ đang cố gắng hoàn thành việc gì và gặp trở ngại nào?",
        },
        {
          title: "3 · Problem Trigger",
          meta: "Điểm kích hoạt vấn đề",
          text: "Khi nào và trong hoàn cảnh nào vấn đề xuất hiện?",
        },
        {
          title: "4 · Existing Alternatives",
          meta: "Giải pháp thay thế hiện có",
          text: "Họ đang dùng gì để giải quyết, kể cả cách làm thủ công?",
        },
        {
          title: "5 · Cost of the Problem",
          meta: "Cái giá của vấn đề",
          text: "Vấn đề khiến họ mất thời gian, tiền, cơ hội hoặc tạo rủi ro gì?",
        },
        {
          title: "6 · Value Proposition",
          meta: "Đề xuất giá trị",
          text: "Ứng dụng sẽ tạo ra kết quả cụ thể nào?",
        },
        {
          title: "7 · Differentiation Wedge",
          meta: "Điểm khác biệt",
          text: "Vì sao nhóm khách hàng này có lý do chọn sản phẩm mới?",
        },
        {
          title: "8 · Distribution Advantage",
          meta: "Lợi thế phân phối",
          text: "Làm sao tiếp cận những khách hàng đó?",
        },
        {
          title: "9 · Monetization Hypothesis",
          meta: "Giả thuyết thu tiền",
          text: "Thu tiền cho giá trị gì và theo hình thức nào?",
        },
        {
          title: "10 · Evidence, Feasibility & Risk",
          meta: "Bằng chứng, tính khả thi và rủi ro",
          text: "Những nhận định nào có bằng chứng, những gì chưa biết, có rào cản nào?",
        },
      ],
    },
    {
      type: "worksheet",
      id: "opportunity-canvas",
      title: "Điền Opportunity Canvas cho một ý tưởng của bạn",
      note: "Mười ô tương ứng mười thành phần ở trên. Chỗ nào chưa có bằng chứng thì ghi “chưa biết”.",
      fields: [
        "1 · Target Customer — ai dùng, ai trả tiền?",
        "2 · Problem / Job-to-be-Done",
        "3 · Problem Trigger — khi nào, hoàn cảnh nào?",
        "4 · Existing Alternatives — kể cả cách làm thủ công",
        "5 · Cost of the Problem — mất thời gian, tiền, cơ hội, rủi ro gì?",
        "6 · Value Proposition — kết quả cụ thể nào?",
        "7 · Differentiation Wedge — vì sao khách có lý do chọn?",
        "8 · Distribution Advantage — tiếp cận bằng cách nào?",
        "9 · Monetization Hypothesis — thu tiền cho giá trị gì, hình thức nào?",
        "10 · Evidence, Feasibility & Risk — điều có bằng chứng, điều chưa biết, rào cản",
      ],
    },
    { type: "subheading", text: "5.1 · Opportunity Statement — viết thành một đoạn ngắn" },
    {
      type: "callout",
      label: "Mẫu Opportunity Statement",
      paragraphs: [
        "Chúng tôi nhận thấy [ICP] đang gặp [vấn đề] khi [hoàn cảnh], hiện phải sử dụng [giải pháp thay thế]. Điều này tạo ra [chi phí/hậu quả].",
        "Chúng tôi có cơ hội xây dựng [giải pháp] giúp họ đạt [kết quả] tốt hơn nhờ [điểm khác biệt].",
        "Chúng tôi dự kiến tiếp cận họ qua [kênh phân phối] và kiểm chứng khả năng thu tiền thông qua [mô hình].",
      ],
    },
    {
      type: "worksheet",
      id: "opportunity-statement",
      title: "Viết Opportunity Statement của bạn",
      fields: [
        "ICP (nhóm khách hàng phù hợp nhất)",
        "Vấn đề họ đang gặp",
        "Hoàn cảnh xuất hiện vấn đề",
        "Giải pháp thay thế họ đang dùng",
        "Chi phí / hậu quả của vấn đề",
        "Giải pháp bạn muốn xây",
        "Kết quả tốt hơn họ đạt được",
        "Điểm khác biệt",
        "Kênh phân phối dự kiến",
        "Mô hình kiểm chứng khả năng thu tiền",
      ],
    },
    { type: "subheading", text: "Phân biệt Facts, Inferences, Assumptions và Unknowns" },
    {
      type: "paragraph",
      text: "Điều quan trọng nhất là gắn nhãn cho từng nhận định trong cơ hội của bạn.",
    },
    {
      type: "table",
      head: ["Loại thông tin", "Ví dụ"],
      rows: [
        [
          "**Fact** (dữ kiện kiểm chứng được)",
          "Đối thủ công bố gói trả phí $X/tháng trên website",
        ],
        [
          "**Inference** (suy luận từ bằng chứng)",
          "Việc có gói trả phí là tín hiệu thị trường có thể có người mua",
        ],
        [
          "**Assumption** (giả thuyết chưa kiểm chứng)",
          "Khách hàng sẽ chuyển sang app mới nếu thao tác nhanh hơn",
        ],
        ["**Unknown** (chưa biết)", "Chưa biết bao nhiêu khách hàng sẵn sàng chuyển đổi"],
      ],
    },
    {
      type: "callout",
      label: "Không dùng AI tự suy luận làm bằng chứng",
      paragraphs: [
        "Không được dùng kết quả do ChatGPT tự suy luận làm bằng chứng thực tế mà chưa kiểm chứng.",
      ],
    },
    { type: "subheading", text: "5.2 · Một cơ hội có thể kết hợp nhiều phương pháp" },
    {
      type: "paragraph",
      text: "Một ý tưởng tốt có thể được phát hiện từ nhiều hướng cùng lúc. Ví dụ Cal Buddy kết hợp:",
    },
    {
      type: "cards",
      columns: 2,
      items: [
        { title: "Proven App", text: "Cal AI chứng minh sự tồn tại của mô hình sản phẩm." },
        { title: "Localization", text: "Nhắm đến người dùng Israel." },
        { title: "Founder–Market Fit", text: "Founder hiểu thị trường và có nền tảng marketing." },
        { title: "Distribution", text: "Quảng cáo và hợp tác influencer." },
      ],
    },
    {
      type: "callout",
      label: "Điểm cần nhấn mạnh",
      paragraphs: [
        "**Sáu phương pháp giúp tìm cơ hội; chúng không phải sáu nhóm sản phẩm loại trừ lẫn nhau.**",
      ],
    },
  ],
}
