import type { Section } from "@/lib/course-playbook/types"

// Nguồn: Phần V — Bài thực hành tổng hợp (5.1–5.4): bối cảnh SpeakReady AI, kế hoạch 14 ngày, ví dụ kết quả giả định, kết luận mẫu.

export const section: Section = {
  id: "thuc-hanh-14-ngay",
  kicker: "Thực hành · Phần V · 5.1–5.4",
  title: "Bài thực hành: kiểm chứng một ý tưởng app từ đầu đến cuối",
  highlight: "từ đầu đến cuối",
  tocLabel: "Thực hành 14 ngày",
  lead: "Một bài thực hành xuyên suốt, không dừng ở việc lập kế hoạch trên giấy. Mục tiêu là kiểm chứng liệu thị trường có đủ nhu cầu để đầu tư xây MVP hay không — bạn chưa cần phát triển toàn bộ ứng dụng.",
  blocks: [
    { type: "subheading", text: "5.1 · Bối cảnh bài thực hành" },
    {
      type: "paragraph",
      text: "Dùng ý tưởng SpeakReady AI đã giới thiệu. Giả định nhóm khách hàng là người Việt đang chuẩn bị phỏng vấn bằng tiếng Anh cho các vị trí chuyên môn. Ứng dụng dự kiến có ba chức năng cốt lõi:",
    },
    {
      type: "list",
      items: [
        "Luyện phỏng vấn với AI dựa trên vị trí công việc.",
        "Nhận phản hồi về nội dung và cách diễn đạt câu trả lời.",
        "Luyện lại những câu hỏi chưa trả lời tốt.",
      ],
    },
    { type: "subheading", text: "5.2 · Kế hoạch thực nghiệm mẫu trong 14 ngày" },
    {
      type: "table",
      head: ["Giai đoạn", "Nội dung thực hiện", "Bằng chứng cần thu"],
      rows: [
        [
          "**Ngày 1–2**",
          "Xác định giả thuyết, đối tượng, kênh, giá và Commitment Metric",
          "Validation Brief",
        ],
        [
          "**Ngày 3–5**",
          "Nghiên cứu cộng đồng và phỏng vấn khách hàng phù hợp",
          "Customer Discovery Report",
        ],
        [
          "**Ngày 6–7**",
          "Nghiên cứu giải pháp hiện tại, xây thông điệp và landing page",
          "Competitor Report, Offer",
        ],
        ["**Ngày 8–10**", "Thử nội dung và tiếp cận khách hàng từ kênh chính", "Distribution Metrics"],
        [
          "**Ngày 11–12**",
          "Mời người phù hợp trải nghiệm prototype hoặc demo",
          "Commitment Evidence",
        ],
        [
          "**Ngày 13–14**",
          "Phân tích kết quả, đánh giá độ tin cậy và ra quyết định",
          "Validation Report, Go/Pivot/Kill",
        ],
      ],
    },
    {
      type: "callout",
      label: "Lưu ý về lịch",
      paragraphs: [
        "Thời gian là lịch thực hành đề xuất, không phải yêu cầu cố định hoặc bảo đảm thu được đủ bằng chứng. Các hoạt động có thể chồng lấn — bạn không cần ngừng phỏng vấn khách hàng khi đang thử landing page.",
      ],
    },
    {
      type: "worksheet",
      id: "phieu-ke-hoach-14-ngay",
      title: "Kế hoạch 14 ngày của riêng bạn",
      note: "Điền theo lịch mẫu. Bạn có thể đổi thời lượng từng giai đoạn cho hợp với nguồn lực của mình.",
      fields: [
        "Ngày 1–2 — giả thuyết, đối tượng, kênh, giá, Commitment Metric",
        "Ngày 3–5 — nguồn tuyển người, số cuộc phỏng vấn dự kiến",
        "Ngày 6–7 — đối thủ cần xem, thông điệp, landing page",
        "Ngày 8–10 — kênh chính, nội dung sẽ thử",
        "Ngày 11–12 — người sẽ mời trải nghiệm prototype hoặc demo",
        "Ngày 13–14 — cách phân tích và tiêu chí ra quyết định",
      ],
    },
    { type: "subheading", text: "5.3 · Ví dụ về kết quả giả định" },
    {
      type: "paragraph",
      text: "Giả sử kết thúc thử nghiệm, bạn thu được dữ liệu sau. **Đây là số liệu giả định để minh hoạ cách đọc, không phải kết quả thật.**",
    },
    {
      type: "table",
      head: ["Chỉ số", "Kết quả giả định"],
      rows: [
        ["Cuộc phỏng vấn với khách đúng phân khúc", "12"],
        ["Người nêu vấn đề luyện phỏng vấn rõ ràng", "9"],
        ["Lượt truy cập landing page hợp lệ", "240"],
        ["Người đăng ký beta phù hợp", "24"],
        ["Người thực sự tham gia thử nghiệm", "8"],
        ["Người hoàn thành buổi luyện đầu tiên", "6"],
        ["Người đăng ký beta trả phí", "3"],
      ],
    },
    {
      type: "cards",
      columns: 2,
      items: [
        {
          title: "Tỷ lệ đăng ký từ landing page",
          meta: "24 ÷ 240 × 100%",
          text: "= **10%**",
        },
        {
          title: "Tỷ lệ từ danh sách beta sang người trả tiền",
          meta: "3 ÷ 24 × 100%",
          text: "= **12,5%**",
        },
      ],
    },
    {
      type: "callout",
      label: "Đừng chỉ dựa vào hai tỷ lệ",
      paragraphs: ["Cần phân tích thêm sáu điểm dưới đây trước khi kết luận."],
    },
    {
      type: "table",
      head: ["Khía cạnh", "Câu hỏi cần trả lời"],
      rows: [
        [
          "**Problem**",
          "Chín người nêu vấn đề có thật sự đang chuẩn bị phỏng vấn không, hay chỉ từng gặp khó khăn trong quá khứ?",
        ],
        [
          "**Solution**",
          "Sáu người hoàn thành buổi luyện có nhận thấy lợi ích cụ thể không? Họ có muốn luyện tiếp không?",
        ],
        [
          "**Payment**",
          "Ba người trả tiền có phải người không quen biết hoặc có động cơ mua tương tự khách hàng mục tiêu không?",
        ],
        [
          "**Distribution**",
          "240 lượt truy cập đến từ kênh nào? Chi phí tạo ra chúng có phù hợp không?",
        ],
        ["**Tính bền vững**", "Ba giao dịch này có đủ biên lợi nhuận sau các chi phí phục vụ không?"],
        [
          "**Hạn chế mẫu**",
          "Số khách hàng trả tiền vẫn quá nhỏ để suy rộng conversion rate (tỷ lệ chuyển đổi) cho toàn thị trường.",
        ],
      ],
    },
    { type: "subheading", text: "5.4 · Kết luận mẫu" },
    {
      type: "quote",
      text: "Qua nghiên cứu ban đầu, đã có bằng chứng về một nhóm người dùng thực sự gặp khó khăn khi luyện phỏng vấn bằng tiếng Anh. Prototype giúp một số người dùng hoàn thành trải nghiệm cốt lõi, và đã xuất hiện những giao dịch trả phí ban đầu. Tuy nhiên, dữ liệu chưa đủ chứng minh khả năng mở rộng kênh phân phối, retention (giữ chân) dài hạn hoặc hiệu quả kinh tế của mô hình subscription. Quyết định đề xuất là GO có điều kiện: đầu tư xây một MVP tập trung vào trải nghiệm luyện phỏng vấn và phản hồi, đồng thời tiếp tục kiểm chứng khả năng thu hút và giữ chân khách hàng.",
      by: "Kết luận mẫu cho dữ liệu giả định ở trên",
    },
    {
      type: "callout",
      label: "Điểm cần học",
      paragraphs: [
        "Ra quyết định **theo mức độ bằng chứng và quy mô khoản đầu tư tiếp theo**, chứ không phân loại ý tưởng một cách tuyệt đối là thành công hay thất bại.",
      ],
    },
  ],
}
