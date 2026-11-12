import type { Section } from "@/lib/course-playbook/types"

// Nguồn: Phần III — HOW, Bước 1 (3.1.1–3.1.4): Define Hypotheses, ví dụ SpeakReady AI, ưu tiên giả thuyết, Validation Brief.

export const section: Section = {
  id: "how-buoc-1",
  kicker: "HOW · Bước 1 · 3.1",
  title: "Define Hypotheses: viết Validation Brief trước khi thử",
  highlight: "Validation Brief",
  tocLabel: "Bước 1 · Giả thuyết và Brief",
  lead: "Kết quả bước 1: một Validation Brief rõ ràng, cho biết chính xác bạn sẽ kiểm chứng điều gì và tại sao.",
  blocks: [
    { type: "subheading", text: "3.1.1 · Bắt đầu từ App Opportunity Brief" },
    {
      type: "paragraph",
      text: "Sau Module 02, bạn đã có một ý tưởng ứng dụng được chọn. Nhưng ý tưởng đó vẫn chứa nhiều giả định chưa được xác minh.",
    },
    {
      type: "callout",
      label: "Ví dụ xuyên suốt module: SpeakReady AI",
      paragraphs: [
        "SpeakReady AI là ứng dụng luyện phỏng vấn tiếng Anh theo tình huống công việc. Khách hàng dự kiến là những người Việt đang chuẩn bị phỏng vấn xin việc bằng tiếng Anh. Giải pháp dự kiến cho phép luyện phỏng vấn với AI, nhận câu hỏi theo vị trí ứng tuyển và nhận phản hồi về câu trả lời. Mô hình kiếm tiền giả định là subscription (đăng ký) hàng tháng.",
        "Đây là ví dụ do tác giả xây dựng để minh hoạ phương pháp, **không phải một app đã được chứng minh có thị trường**.",
      ],
    },
    { type: "subheading", text: "3.1.2 · Chuyển ý tưởng thành các giả thuyết" },
    {
      type: "table",
      head: ["Nhóm", "Giả thuyết cho SpeakReady AI"],
      rows: [
        [
          "**Problem**",
          "Người chuẩn bị phỏng vấn bằng tiếng Anh gặp khó khăn trong việc luyện tập và nhận phản hồi",
        ],
        [
          "**Solution**",
          "Họ sẽ thấy việc luyện phỏng vấn với AI theo vị trí ứng tuyển hữu ích hơn luyện tập chung",
        ],
        [
          "**Payment**",
          "Một nhóm người dùng sẵn sàng trả khoảng 199.000đ/tháng để luyện tập trước kỳ phỏng vấn",
        ],
        [
          "**Distribution**",
          "Có thể tiếp cận khách hàng qua các cộng đồng tìm việc, LinkedIn và nội dung hướng dẫn phỏng vấn",
        ],
      ],
    },
    {
      type: "callout",
      label: "Về mức giá trong ví dụ",
      paragraphs: ["Mức giá trên chỉ là giả thuyết để thử nghiệm, không phải giá thị trường đã được xác nhận."],
    },
    { type: "subheading", text: "3.1.3 · Xác định giả thuyết rủi ro cao nhất" },
    {
      type: "paragraph",
      text: "Không phải tất cả giả thuyết đều cần kiểm chứng cùng lúc. Hãy đánh giá từng giả thuyết theo ba tiêu chí:",
    },
    {
      type: "cards",
      columns: 3,
      items: [
        { title: "Mức độ bất định", text: "Chúng ta chưa biết chắc điều gì?" },
        { title: "Mức độ ảnh hưởng", text: "Nếu giả thuyết đó sai, dự án sẽ bị ảnh hưởng như thế nào?" },
        { title: "Chi phí kiểm chứng", text: "Cần bao nhiêu thời gian và tiền bạc để có bằng chứng?" },
      ],
    },
    {
      type: "callout",
      label: "Nguyên tắc ưu tiên",
      paragraphs: ["**High Uncertainty × High Business Impact → Test First** (bất định cao × ảnh hưởng kinh doanh lớn → thử trước)."],
    },
    {
      type: "list",
      items: [
        "Đã có bằng chứng khách hàng gặp khó khăn khi phỏng vấn, nhưng chưa biết họ có chịu trả tiền hay không → ưu tiên giả thuyết **Payment**.",
        "Chưa biết họ có thực sự muốn luyện tập bằng ứng dụng hay chỉ thích học với giáo viên → kiểm chứng **Solution** trước.",
      ],
    },
    { type: "subheading", text: "3.1.4 · Xây Validation Brief" },
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-03/validation-brief-va-offer.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic Validation Brief và Offer: biểu mẫu Validation Brief 12 trường điền ví dụ SpeakReady AI, so sánh Offer yếu với Offer rõ, bảy thành phần của Offer, tám phần của landing page kiểm chứng, so sánh hai thông điệp A và B và cảnh báo minh bạch về trạng thái sản phẩm.",
        caption:
          "Hình 5 · Validation Brief 12 trường (Bước 1) và cách kiểm chứng Offer (Bước 4), ví dụ SpeakReady AI.",
      },
    },
    {
      type: "paragraph",
      text: "Mỗi học viên chuẩn bị một bản tóm tắt gồm 12 trường thông tin. Điền phiếu dưới đây cho ý tưởng của bạn.",
    },
    {
      type: "worksheet",
      id: "phieu-validation-brief",
      title: "Validation Brief — 12 trường",
      note: "Ghi Commitment Metric và Decision Criteria trước khi thử nghiệm, không điền sau khi có kết quả.",
      fields: [
        "App Concept — ý tưởng ứng dụng",
        "Target Customer — phân khúc khách hàng cụ thể",
        "Core Problem — vấn đề cần giải quyết",
        "Existing Alternatives — khách hàng đang dùng giải pháp gì",
        "Proposed Solution — giải pháp đề xuất",
        "Value Proposition — kết quả chính ứng dụng hứa hẹn",
        "Price Hypothesis — mức giá hoặc mô hình thu tiền dự kiến",
        "Distribution Hypothesis — cách tiếp cận khách hàng",
        "Riskiest Assumption — giả thuyết cần kiểm chứng đầu tiên",
        "Validation Method — phương pháp thử nghiệm",
        "Commitment Metric — hành động cam kết cần đạt",
        "Decision Criteria — tiêu chuẩn để tiếp tục hoặc thay đổi",
      ],
    },
  ],
}
