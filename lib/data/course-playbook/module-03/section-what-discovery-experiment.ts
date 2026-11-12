import type { Section } from "@/lib/course-playbook/types"

// Nguồn: Phần II — WHAT, mục 2.6 (Customer Discovery), 2.7 (Validation Experiment), 2.8 (các chỉ số dùng trong Validation).

export const section: Section = {
  id: "what-discovery-experiment",
  kicker: "WHAT · Phần II · 2.6–2.8",
  title: "Customer Discovery, thử nghiệm và chỉ số",
  highlight: "thử nghiệm",
  tocLabel: "WHAT · Discovery, thử nghiệm, chỉ số",
  lead: "Ba khái niệm nền để biến giả thuyết thành việc làm cụ thể: hiểu khách hàng, thiết kế phép thử, và chọn đúng chỉ số.",
  blocks: [
    { type: "subheading", text: "2.6 · Customer Discovery là gì?" },
    {
      type: "paragraph",
      text: "Customer Discovery (khám phá khách hàng) là quá trình khám phá nhu cầu, vấn đề, hành vi và các giải pháp thay thế của khách hàng thông qua nghiên cứu và tương tác trực tiếp với họ.",
    },
    {
      type: "callout",
      label: "Mục đích",
      paragraphs: [
        "Không phải để bán ý tưởng cho người được phỏng vấn. Mục đích là **hiểu cách họ đang sống và làm việc trước khi có ứng dụng của chúng ta**.",
      ],
    },
    {
      type: "table",
      caption: "Customer Discovery cần tập trung vào bảy điểm",
      head: ["Trọng tâm", "Câu hỏi"],
      rows: [
        ["**Current Behavior** (hành vi hiện tại)", "Khách hàng hiện đang làm gì?"],
        ["**Current Alternative** (giải pháp thay thế hiện tại)", "Họ đang sử dụng sản phẩm hoặc phương pháp nào?"],
        ["**Pain Frequency** (tần suất nỗi đau)", "Vấn đề xuất hiện thường xuyên đến mức nào?"],
        ["**Pain Severity** (mức nghiêm trọng)", "Hậu quả nghiêm trọng ra sao?"],
        [
          "**Existing Spending** (chi tiêu hiện có)",
          "Họ đã chi tiền, công sức hoặc thời gian để giải quyết vấn đề chưa?",
        ],
        ["**Trigger Event** (sự kiện kích hoạt)", "Khi nào họ bắt đầu chủ động tìm giải pháp?"],
        [
          "**Switching Barrier** (rào cản chuyển đổi)",
          "Điều gì khiến họ không muốn chuyển sang công cụ mới?",
        ],
      ],
    },
    {
      type: "callout",
      label: "Làm / nói",
      paragraphs: [
        "Phải phân biệt những gì khách hàng **thực sự đã làm** với những điều họ **nói rằng sẽ làm** trong tương lai.",
      ],
    },
    { type: "subheading", text: "2.7 · Validation Experiment là gì?" },
    {
      type: "paragraph",
      text: "Validation Experiment (thử nghiệm kiểm chứng) là một phép thử được thiết kế trước, nhằm thu thập bằng chứng để chấp nhận, điều chỉnh hoặc bác bỏ một giả thuyết kinh doanh cụ thể. Một thử nghiệm đầy đủ có bảy thành phần:",
    },
    {
      type: "table",
      head: ["Thành phần", "Định nghĩa"],
      rows: [
        ["**Hypothesis**", "Giả thuyết cần kiểm chứng"],
        ["**Audience**", "Nhóm khách hàng được thử nghiệm"],
        ["**Intervention**", "Nội dung, prototype, lời đề nghị hoặc trải nghiệm được đưa ra"],
        ["**Action**", "Hành động mong muốn khách hàng thực hiện"],
        ["**Metric**", "Chỉ số đo kết quả"],
        ["**Success Criteria**", "Tiêu chuẩn đánh giá đã xác định trước"],
        ["**Decision**", "Quyết định sau khi phân tích kết quả"],
      ],
    },
    {
      type: "paragraph",
      text: "Ví dụ, thay vì nói “Tôi sẽ đăng vài bài thử xem sao”, hãy có một giả thuyết cụ thể:",
    },
    {
      type: "quote",
      text: "Người đang chuẩn bị phỏng vấn bằng tiếng Anh sẽ đăng ký trải nghiệm luyện tập AI sau khi xem bản demo giải quyết một tình huống phỏng vấn thực tế.",
      by: "Ví dụ giả thuyết thử nghiệm",
    },
    {
      type: "paragraph",
      text: "Sau đó mới xác định nội dung kiểm chứng, nguồn khách hàng, thời gian, chỉ số và tiêu chuẩn thành công.",
    },
    {
      type: "worksheet",
      id: "phieu-thu-nghiem",
      title: "Thiết kế một Validation Experiment",
      note: "Điền bảy thành phần cho một giả thuyết bạn sắp thử. Ghi Success Criteria trước khi có kết quả.",
      fields: [
        "Hypothesis — giả thuyết cần kiểm chứng",
        "Audience — nhóm khách hàng được thử nghiệm",
        "Intervention — nội dung, prototype, lời đề nghị hoặc trải nghiệm được đưa ra",
        "Action — hành động mong muốn khách hàng thực hiện",
        "Metric — chỉ số đo kết quả",
        "Success Criteria — tiêu chuẩn đánh giá, xác định trước khi chạy",
        "Decision — quyết định sau khi phân tích kết quả",
      ],
    },
    { type: "subheading", text: "2.8 · Những chỉ số dùng trong Validation" },
    {
      type: "paragraph",
      text: "Chỉ số cần được chọn theo giả thuyết, không phải theo việc công cụ nào dễ hiển thị số liệu nhất.",
    },
    {
      type: "table",
      head: ["Chỉ số", "Định nghĩa"],
      rows: [
        ["**Qualified Reach**", "Số người phù hợp với chân dung khách hàng thực sự được tiếp cận"],
        ["**Landing Page Conversion Rate**", "Tỷ lệ khách truy cập thực hiện hành động mục tiêu trên landing page"],
        ["**Waitlist Signup Rate**", "Tỷ lệ khách đủ điều kiện đăng ký danh sách chờ"],
        ["**Demo Booking Rate**", "Tỷ lệ khách đặt lịch demo"],
        ["**Demo Attendance Rate**", "Tỷ lệ khách thực sự tham gia demo"],
        ["**Commitment Rate**", "Tỷ lệ khách thực hiện hành động cam kết đã định nghĩa"],
        ["**Payment Conversion Rate**", "Tỷ lệ khách đủ điều kiện thực hiện thanh toán"],
        ["**Cost per Qualified Lead**", "Chi phí để thu hút một lead (khách hàng tiềm năng) đạt tiêu chuẩn"],
        ["**Cost per Commitment**", "Chi phí để có một hành động cam kết thực tế"],
      ],
    },
    {
      type: "callout",
      label: "Công thức và ví dụ",
      paragraphs: [
        "**Landing Page Conversion = Số lượt chuyển đổi hợp lệ ÷ Số lượt truy cập hợp lệ × 100%**",
        "Một landing page có 200 lượt truy cập hợp lệ và 20 lượt đăng ký phù hợp sẽ có tỷ lệ chuyển đổi 10%.",
      ],
    },
    {
      type: "callout",
      label: "Một con số chưa đủ để kết luận",
      paragraphs: [
        "Con số 10% này chưa đủ để kết luận ý tưởng tốt. Cần xem khách đến từ đâu, họ có đúng phân khúc không, lời đề nghị có thực tế không và hành động đăng ký có thể dẫn đến trải nghiệm hoặc thanh toán sau này hay không.",
      ],
    },
  ],
}
