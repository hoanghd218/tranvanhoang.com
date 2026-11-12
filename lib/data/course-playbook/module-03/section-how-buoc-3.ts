import type { Section } from "@/lib/course-playbook/types"

// Nguồn: Phần III — HOW, Bước 3 (3.3.1–3.3.4): Competitor Validation — mục tiêu, ba loại đối thủ, bằng chứng cần thu thập, Review Mining.

export const section: Section = {
  id: "how-buoc-3",
  kicker: "HOW · Bước 3 · 3.3",
  title: "Competitor Validation: kiểm chứng từ đối thủ và giải pháp hiện tại",
  highlight: "đối thủ",
  tocLabel: "Bước 3 · Đối thủ",
  lead: "Kết quả bước 3: Competitor Validation Report, cho thấy thị trường đã có những giải pháp gì, khách hàng đang trả tiền cho điều gì và các khoảng trống đáng thử nghiệm.",
  blocks: [
    { type: "subheading", text: "3.3.1 · Vì sao nghiên cứu đối thủ trong Validation?" },
    {
      type: "paragraph",
      text: "Trong Module 02, đối thủ được nghiên cứu để tìm cơ hội. Trong Module 03, mục tiêu khác: **tìm bằng chứng rằng khách hàng đang chủ động giải quyết vấn đề và có thể đang trả tiền cho giải pháp**. Cần phân biệt:",
    },
    {
      type: "list",
      items: [
        "Có đối thủ chứng minh thị trường đã tồn tại.",
        "Có đối thủ có doanh thu là tín hiệu về khả năng thu tiền.",
        "Có nhiều đối thủ không tự động chứng minh ý tưởng mới sẽ thành công.",
        "Không có đối thủ cũng không tự động đồng nghĩa với cơ hội lớn.",
      ],
    },
    { type: "subheading", text: "3.3.2 · Nghiên cứu ba loại đối thủ" },
    {
      type: "cards",
      columns: 3,
      items: [
        {
          title: "Direct Competitors",
          meta: "Đối thủ trực tiếp",
          text: "Sản phẩm giải quyết cùng vấn đề bằng phương pháp tương tự.",
        },
        {
          title: "Indirect Competitors",
          meta: "Đối thủ gián tiếp",
          text: "Sản phẩm hoặc dịch vụ giúp khách hàng đạt kết quả tương tự bằng một phương pháp khác.",
        },
        {
          title: "Non-consumption / Manual Alternatives",
          meta: "Giải pháp thủ công hoặc không dùng sản phẩm",
          text: "Khách hàng dùng Excel, ghi chú, Google, ChatGPT, hỏi bạn bè, thuê chuyên gia hoặc chấp nhận sống chung với vấn đề.",
        },
      ],
    },
    {
      type: "table",
      caption: "Ví dụ với SpeakReady AI",
      head: ["Loại", "Giải pháp hiện tại"],
      rows: [
        ["**Trực tiếp**", "App luyện phỏng vấn hoặc giao tiếp bằng AI"],
        ["**Gián tiếp**", "Gia sư, khoá học, câu lạc bộ tiếng Anh"],
        ["**Thủ công**", "Tự soạn câu trả lời và đọc trước gương"],
        ["**Công cụ đa năng**", "Tự luyện tập với ChatGPT"],
        ["**Không giải quyết**", "Đi phỏng vấn mà không luyện tập"],
      ],
    },
    {
      type: "callout",
      label: "Câu hỏi bắt buộc với app AI",
      paragraphs: [
        "**Tại sao khách hàng phải mua ứng dụng riêng thay vì dùng trực tiếp ChatGPT?** Nếu không tìm được câu trả lời rõ ràng, lợi thế sản phẩm có thể chưa đủ thuyết phục.",
      ],
    },
    { type: "subheading", text: "3.3.3 · Những bằng chứng cần thu thập" },
    {
      type: "table",
      head: ["Bằng chứng", "Câu hỏi"],
      rows: [
        ["**Pricing Evidence**", "Đối thủ thu tiền theo mô hình nào?"],
        ["**Review Evidence**", "Người dùng đang hài lòng hoặc không hài lòng về điều gì?"],
        ["**Usage Evidence**", "Có tín hiệu sản phẩm được sử dụng thực tế hay không?"],
        ["**Purchase Evidence**", "Có dấu hiệu đáng tin về lượng khách trả phí không?"],
        ["**Customer Language**", "Người dùng diễn đạt mong muốn và vấn đề bằng từ ngữ nào?"],
        ["**Feature Gap**", "Những vấn đề quan trọng chưa được giải quyết tốt?"],
        ["**Distribution Evidence**", "Khách hàng biết đến sản phẩm qua đâu?"],
      ],
    },
    {
      type: "callout",
      label: "Số liệu ước tính",
      paragraphs: [
        "Thông tin từ các công cụ ước tính doanh thu cần được ghi rõ là số liệu ước tính. **Không chuyển dự báo thành doanh thu đã xác minh.**",
      ],
    },
    { type: "subheading", text: "3.3.4 · Review Mining" },
    {
      type: "paragraph",
      text: "Review Mining (khai thác đánh giá) là phương pháp nghiên cứu những đánh giá và nhận xét của khách hàng để phát hiện nhu cầu, kỳ vọng, nỗi thất vọng và khoảng trống sản phẩm. Hãy đặc biệt chú ý đến các đánh giá có ngữ cảnh rõ, thay vì chỉ đọc điểm sao trung bình.",
    },
    {
      type: "quote",
      text: "Tôi thích app này nhưng không thể luyện các câu hỏi chuyên sâu cho vị trí Product Manager.",
      by: "Ví dụ đánh giá có ngữ cảnh — gợi ý một vấn đề cụ thể và có thể dẫn đến giả thuyết khác biệt",
    },
    {
      type: "paragraph",
      text: "Ngược lại, câu “App tệ” không cung cấp đủ thông tin để xác định nguyên nhân. Phương pháp phân tích gồm sáu việc:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Thu thập những review liên quan.",
        "Phân loại theo vấn đề hoặc mong muốn.",
        "Xác định chủ đề lặp lại.",
        "Phân biệt lỗi kỹ thuật với thiếu sót về giá trị.",
        "Xác định khoảng trống có thể kiểm chứng trực tiếp.",
        "Đối chiếu với kết quả phỏng vấn.",
      ],
    },
    {
      type: "callout",
      label: "Giới hạn",
      paragraphs: ["Review Mining giúp tạo giả thuyết, nhưng không thay thế việc kiểm chứng với khách hàng mục tiêu."],
    },
  ],
}
