import type { Section } from "@/lib/course-playbook/types"

/**
 * Giáo trình Module 02 — Phần 2 WHAT · 02 Definition & Foundations:
 * 2.1 phân biệt Market / Problem / Idea / Opportunity · 2.2 Opportunity Equation · 2.3 đầu vào từ Module 01.
 */
const IMG = "/images/course-playbook/module-02"

export const section: Section = {
  id: "khai-niem-nen-tang",
  kicker: "WHAT · 02 Definition & Foundations",
  title: "Ý tưởng chưa phải cơ hội — cơ hội cần bằng chứng",
  highlight: "cần bằng chứng",
  tocLabel: "Khái niệm nền tảng",
  lead: "Trước khi tìm ý tưởng, cần hiểu đúng cơ hội kinh doanh là gì và phân biệt nó với thị trường, vấn đề và ý tưởng.",
  blocks: [
    { type: "subheading", text: "Phân biệt Market, Problem, Idea và Opportunity" },
    {
      type: "table",
      head: ["Khái niệm", "Ý nghĩa", "Ví dụ"],
      rows: [
        ["**Market** (thị trường)", "Thị trường muốn phục vụ", "Fitness & Wellness tại Mỹ"],
        [
          "**Customer Segment** (phân khúc khách hàng)",
          "Nhóm khách hàng cụ thể",
          "Người mới bắt đầu tập gym",
        ],
        [
          "**Problem** (vấn đề)",
          "Điều khách hàng đang khó khăn",
          "Khó theo dõi bài tập và sự tiến bộ",
        ],
        ["**Idea** (ý tưởng)", "Một giải pháp có thể xây dựng", "App theo dõi tập luyện bằng AI"],
        [
          "**Business Opportunity** (cơ hội kinh doanh)",
          "Ý tưởng có bằng chứng về nhu cầu, khả năng chi trả, sự khác biệt và kênh tiếp cận",
          "App phục vụ một nhóm người tập cụ thể, có lý do để chọn và trả phí",
        ],
      ],
    },
    {
      type: "cards",
      columns: 2,
      items: [
        { title: "Ý tưởng", text: "Là một **giả thuyết về giải pháp**." },
        {
          title: "Cơ hội kinh doanh",
          text: "Là một **giả thuyết về khả năng tạo giá trị và thu được doanh thu**, được hỗ trợ bởi bằng chứng thị trường.",
        },
      ],
    },
    {
      type: "figure",
      figure: {
        src: `${IMG}/y-tuong-chua-phai-co-hoi.webp`,
        width: 1536,
        height: 1024,
        alt: "Infographic 5 khái niệm nền từ Market đến Business Opportunity, công thức Opportunity Quality = f(P, W, E, D, F) và bảng 9 dữ liệu của Market Fit Report dùng làm đầu vào cho Module 02.",
        caption: "Hình 3 · Ý tưởng chưa phải cơ hội — 5 khái niệm nền, công thức P-W-E-D-F, đầu vào từ Module 01.",
      },
    },
    { type: "subheading", text: "Opportunity Equation (công thức chất lượng cơ hội)" },
    { type: "paragraph", text: "Một mô hình tư duy để đánh giá chất lượng của một cơ hội: `Opportunity Quality = f(P, W, E, D, F)`." },
    {
      type: "cards",
      columns: 3,
      items: [
        { title: "P — Problem", meta: "Vấn đề", text: "Vấn đề có đủ quan trọng không?" },
        {
          title: "W — Willingness to Pay",
          meta: "Sẵn lòng trả tiền",
          text: "Người dùng có lý do để chi tiền không?",
        },
        {
          title: "E — Existing Alternatives",
          meta: "Giải pháp hiện có",
          text: "Các giải pháp hiện có còn khoảng trống nào?",
        },
        { title: "D — Distribution", meta: "Phân phối", text: "Có thể tiếp cận người mua bằng cách nào?" },
        {
          title: "F — Founder Fit",
          meta: "Độ hợp của người xây",
          text: "Người xây có lợi thế hoặc khả năng thực hiện không?",
        },
      ],
    },
    {
      type: "callout",
      label: "Lưu ý",
      paragraphs: ["Đây là mô hình đánh giá định tính, không phải phép tính dự báo doanh thu."],
    },
    { type: "subheading", text: "Đầu vào từ Module 01 — không bắt đầu từ trang giấy trắng" },
    {
      type: "paragraph",
      text: "Module 02 dùng Market Fit Report (báo cáo mức độ phù hợp thị trường) đã hoàn thành ở Module 01 làm nguyên liệu.",
    },
    {
      type: "table",
      head: ["Dữ liệu từ Module 01", "Module 02 dùng để làm gì?"],
      rows: [
        ["Priority Market (thị trường ưu tiên)", "Giới hạn phạm vi tìm kiếm"],
        ["Niche / Micro-niche (ngách / ngách nhỏ)", "Xác định nhóm cơ hội phù hợp"],
        [
          "ICP (nhóm khách hàng phù hợp nhất)",
          "Xác định người gặp vấn đề và người quyết định mua",
        ],
        ["Demand Evidence (bằng chứng nhu cầu)", "Tìm các vấn đề đã có tín hiệu nhu cầu"],
        ["Payment Evidence (bằng chứng trả tiền)", "Ưu tiên cơ hội có khả năng kiếm tiền"],
        [
          "Distribution Accessibility Map (bản đồ khả năng tiếp cận kênh)",
          "Tìm ý tưởng phù hợp với kênh tiếp cận sẵn có",
        ],
        ["Founder Advantage (lợi thế của người xây)", "Khai thác kiến thức và lợi thế của bạn"],
        ["Constraints & Risks (giới hạn và rủi ro)", "Loại bỏ phương án không thực tế"],
        [
          "Unvalidated Assumptions (giả thuyết chưa kiểm chứng)",
          "Xác định điều cần nghiên cứu hoặc kiểm chứng tiếp",
        ],
      ],
    },
    {
      type: "callout",
      label: "Ví dụ",
      paragraphs: [
        "Một học viên đã chọn thị trường giáo dục tại Mỹ, phân khúc người đi làm cần cải thiện tiếng Anh. Học viên đó không nên yêu cầu AI quay lại tạo 100 ý tưởng ngẫu nhiên thuộc mọi ngành.",
        "ChatGPT phải đi sâu vào chính phân khúc đó, phân tích các vấn đề và đưa ra những cơ hội có khả năng kinh doanh phù hợp.",
      ],
    },
  ],
}
