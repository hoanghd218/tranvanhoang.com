import type { Section } from "@/lib/course-playbook/types"

// Nguồn: Phần VI — Công cụ, template và sản phẩm đầu ra (6.1 vai trò ChatGPT, 6.2 bộ tài liệu chuẩn, 6.3 cấu trúc Validation Decision Report).

export const section: Section = {
  id: "cong-cu-san-pham",
  kicker: "Công cụ · Phần VI · 6.1–6.3",
  title: "ChatGPT, bộ tài liệu và Validation Decision Report",
  highlight: "Validation Decision Report",
  tocLabel: "Công cụ và báo cáo",
  lead: "ChatGPT là công cụ hỗ trợ nghiên cứu, phân tích và thiết kế thử nghiệm. Bộ tài liệu chuẩn gom mọi bằng chứng về một chỗ, và báo cáo cuối là căn cứ để bạn quyết định đầu tư.",
  blocks: [
    { type: "subheading", text: "6.1 · Vai trò của ChatGPT trong Module 03" },
    {
      type: "paragraph",
      text: "Bạn có thể dùng ChatGPT cho sáu nhóm công việc chính:",
    },
    {
      type: "table",
      head: ["Vai trò", "Công việc hỗ trợ"],
      rows: [
        [
          "**Validation Strategist**",
          "Chuyển ý tưởng thành giả thuyết, ưu tiên rủi ro và thiết kế Validation Plan",
        ],
        [
          "**Customer Research Assistant**",
          "Xây câu hỏi phỏng vấn, phân loại phản hồi và phát hiện những mẫu lặp lại",
        ],
        [
          "**Competitor Analyst**",
          "Tổng hợp dữ liệu đối thủ và xác định khoảng trống sản phẩm",
        ],
        [
          "**Offer Strategist**",
          "Đề xuất thông điệp giá trị, giá giả định và CTA",
        ],
        [
          "**Experiment Designer**",
          "Thiết kế thử nghiệm, chỉ số đo và điều kiện ra quyết định",
        ],
        [
          "**Evidence Analyst**",
          "Phân tích kết quả, xác định giới hạn bằng chứng và đề xuất bước tiếp theo",
        ],
      ],
    },
    {
      type: "paragraph",
      text: "Bạn cũng có thể dùng ChatGPT để tạo prototype, landing page và những tài sản thiết kế cần cho Validation.",
    },
    {
      type: "callout",
      label: "Giới hạn của ChatGPT",
      paragraphs: [
        "ChatGPT **không thay thế khách hàng thực tế**. Dữ liệu phỏng vấn, thanh toán, lượt truy cập hoặc kết quả thử nghiệm phải đến từ những nguồn có thể kiểm tra được.",
      ],
    },
    { type: "subheading", text: "6.2 · Bộ tài liệu chuẩn của Module 03" },
    {
      type: "paragraph",
      text: "Mỗi học viên có một thư mục Validation với bảy tài liệu:",
    },
    {
      type: "table",
      head: ["Tài liệu", "Nội dung bắt buộc"],
      rows: [
        ["**01 — Validation Brief**", "Khách hàng, vấn đề, giải pháp, giá, kênh và giả thuyết rủi ro"],
        [
          "**02 — Customer Discovery Report**",
          "Dữ liệu phỏng vấn, câu trả lời, vấn đề lặp lại và phương pháp hiện tại",
        ],
        [
          "**03 — Competitor Evidence Report**",
          "Bằng chứng từ đối thủ, review, sản phẩm thay thế và mô hình giá",
        ],
        [
          "**04 — Offer Test Report**",
          "Các lời đề nghị, thông điệp, CTA và phản hồi khách hàng",
        ],
        [
          "**05 — Distribution Test Report**",
          "Kênh thử nghiệm, nguồn traffic (lượt truy cập), hành động và chi phí",
        ],
        [
          "**06 — Commitment Evidence Log**",
          "Hành động sử dụng hoặc thanh toán đã được xác minh",
        ],
        [
          "**07 — Validation Decision Report**",
          "Kết luận, rủi ro chưa giải quyết và quyết định đầu tư",
        ],
      ],
    },
    {
      type: "callout",
      label: "Hình thức",
      paragraphs: [
        "Đây không nhất thiết phải là bảy file riêng biệt. Có thể tổ chức thành một tài liệu hoặc workspace duy nhất với các phần tương ứng.",
      ],
    },
    { type: "subheading", text: "6.3 · Cấu trúc một Validation Decision Report" },
    {
      type: "paragraph",
      text: "Đây là báo cáo quan trọng nhất bạn phải nộp. Báo cáo gồm tám phần:",
    },
    {
      type: "steps",
      items: [
        {
          title: "A · Executive Summary",
          text: "Ý tưởng là gì, dành cho ai và kết quả kiểm chứng chính là gì?",
        },
        {
          title: "B · Original Hypotheses",
          text: "Những giả thuyết nào được đặt ra trước khi thực nghiệm?",
        },
        {
          title: "C · Experiments Conducted",
          text: "Đã dùng phương pháp nào, với ai, trong bao lâu và bằng nguồn lực gì?",
        },
        {
          title: "D · Evidence Collected",
          text: "Những dữ liệu và hành vi thực tế đã được quan sát?",
        },
        {
          title: "E · Findings",
          text: "Điều gì được củng cố, điều gì không được ủng hộ và điều gì vẫn chưa rõ?",
        },
        {
          title: "F · Remaining Risks",
          text: "Những rủi ro quan trọng nào chưa được kiểm chứng?",
        },
        { title: "G · Business Decision", text: "GO, PIVOT hay KILL/PARK?" },
        {
          title: "H · Next Investment",
          text: "Nếu tiếp tục, cần đầu tư bao nhiêu thời gian và nguồn lực để kiểm chứng giả thuyết tiếp theo?",
        },
      ],
    },
    {
      type: "worksheet",
      id: "phieu-decision-report",
      title: "Khung Validation Decision Report",
      note: "Điền khung này khi bước vào ngày 13–14. Mỗi mục trả lời đúng câu hỏi của phần đó.",
      fields: [
        "A · Executive Summary — ý tưởng, khách hàng, kết quả kiểm chứng chính",
        "B · Original Hypotheses — giả thuyết đặt ra trước khi thực nghiệm",
        "C · Experiments Conducted — phương pháp, đối tượng, thời gian, nguồn lực",
        "D · Evidence Collected — dữ liệu và hành vi thực tế đã quan sát",
        "E · Findings — điều được củng cố, điều không được ủng hộ, điều còn chưa rõ",
        "F · Remaining Risks — rủi ro quan trọng chưa được kiểm chứng",
        "G · Business Decision — GO, PIVOT hay KILL/PARK",
        "H · Next Investment — thời gian và nguồn lực cần để kiểm chứng giả thuyết tiếp theo",
      ],
    },
  ],
}
