import type { Section } from "@/lib/course-playbook/types"

/**
 * Giáo trình Module 02 — Phần 4 WHAT IF · 10 Output & Decision Gate:
 * 10.3 Decision Gate — Opportunity Ready? · 10.4 tám tình huống WHAT IF · hành trình 5 phiên học ·
 * kết luận định vị Module 02.
 */
export const section: Section = {
  id: "cong-quyet-dinh",
  kicker: "WHAT IF · 10 Decision Gate · G2",
  title: "Cổng G2 — Opportunity Fit",
  highlight: "Opportunity Fit",
  tocLabel: "Cổng quyết định G2",
  lead: "Decision Gate (cổng quyết định) của Module 02 hỏi một câu: Opportunity Ready? — cơ hội của bạn đã đủ rõ để chuyển sang Module 03 chưa?",
  blocks: [
    {
      type: "checklist",
      id: "gate",
      title: "Opportunity Ready? — tám điều cần có",
      intro: "Một ý tưởng có thể chuyển sang Module 03 khi đáp ứng được các yêu cầu sau.",
      items: [
        { title: "Xác định được ICP và vấn đề cụ thể." },
        { title: "Có bằng chứng hoặc tín hiệu đủ đáng tin để tiếp tục nghiên cứu." },
        { title: "Biết những lựa chọn khách hàng đang sử dụng." },
        { title: "Có ít nhất một giả thuyết khác biệt hợp lý." },
        { title: "Có phương pháp tiếp cận người dùng phù hợp." },
        { title: "Có giả thuyết về khả năng thu tiền." },
        { title: "Rủi ro chính đã được nhận diện." },
        { title: "Có kế hoạch kiểm chứng những giả thuyết quan trọng nhất." },
      ],
      riskNote:
        "Gate của Module 02 không yêu cầu chứng minh đã bán được app. Nó chỉ xác nhận cơ hội đủ rõ để bắt đầu kiểm chứng một cách có kỷ luật.",
    },
    { type: "subheading", text: "10.4 · WHAT IF — tám tình huống cần biết cách xử lý" },
    {
      type: "table",
      head: ["Tình huống", "Cách xử lý"],
      rows: [
        [
          "Không tìm được app đối thủ",
          "Kiểm tra giải pháp thay thế và nhu cầu; không vội kết luận là thị trường xanh",
        ],
        [
          "Có quá nhiều đối thủ mạnh",
          "Thu hẹp ICP, tìm điểm khác biệt hoặc lợi thế phân phối",
        ],
        [
          "Nhiều người gặp vấn đề nhưng không muốn trả tiền",
          "Nghiên cứu ai chịu hậu quả và ai có ngân sách",
        ],
        [
          "Có ý tưởng tốt nhưng không có kênh bán",
          "Quay lại Distribution Map (bản đồ kênh phân phối) hoặc tìm đối tác",
        ],
        [
          "Thị trường quá nhỏ",
          "Kiểm tra giá trị mỗi khách hàng hoặc khả năng mở rộng phân khúc",
        ],
        [
          "Ý tưởng phụ thuộc xu hướng",
          "Kiểm tra nhu cầu có tồn tại sau khi sự chú ý giảm không",
        ],
        [
          "Không cần mobile app để giải quyết vấn đề",
          "Xem lại tính phù hợp của sản phẩm; không ép mọi ý tưởng thành mobile app",
        ],
        [
          "Cả ba cơ hội đều thiếu bằng chứng",
          "Quay lại nghiên cứu hoặc điều chỉnh thị trường ở Module 01",
        ],
      ],
    },
    { type: "subheading", text: "Hành trình 5 phiên học" },
    {
      type: "paragraph",
      text: "Module 02 được tổ chức thành năm phiên thực hành để bạn đi từ báo cáo thị trường đến một ý tưởng được lựa chọn.",
    },
    {
      type: "table",
      head: ["Phiên", "Nội dung", "Sản phẩm"],
      rows: [
        [
          "**Session 1 — Mindset & Foundations**",
          "WHY, khái niệm Opportunity, nguyên lý và ví dụ",
          "Hiểu cách đánh giá ý tưởng",
        ],
        [
          "**Session 2 — Six Discovery Methods**",
          "Sáu phương pháp và 12 case study chính",
          "Phát hiện vấn đề từ nhiều nguồn",
        ],
        [
          "**Session 3 — AI Discovery Workshop**",
          "Dán Market Fit Report, phỏng vấn với AI, tạo Opportunity Map",
          "12–18 giả thuyết ý tưởng",
        ],
        [
          "**Session 4 — Evaluation & Red Team**",
          "Research, Scorecard, phản biện và so sánh",
          "Ba cơ hội ưu tiên",
        ],
        [
          "**Session 5 — Opportunity Selection**",
          "Chốt phương án, hoàn thiện tài liệu và bàn giao",
          "App Opportunity Brief",
        ],
      ],
    },
    {
      type: "output",
      label: "Định vị Module 02",
      text: "**From Market Intelligence to a Validatable App Business Opportunity** (từ thông tin thị trường đến một cơ hội kinh doanh app có thể kiểm chứng). Đầu vào: Market Fit Report → quy trình: 6 phương pháp + AI phỏng vấn + Red Team → đầu ra: App Opportunity Brief. Tiếp theo: Module 03 — Validate.",
    },
  ],
}
