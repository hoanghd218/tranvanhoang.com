import type { Section } from "@/lib/course-playbook/types"

// Nguồn: Phần III — HOW, Bước 6 (3.6.1–3.6.5): Commitment Test — vì sao cần, các dạng, khi nào cần prototype, theo loại app, Commitment Threshold.

export const section: Section = {
  id: "how-buoc-6",
  kicker: "HOW · Bước 6 · 3.6",
  title: "Commitment Test: kiểm chứng bằng hành động thực tế",
  highlight: "hành động thực tế",
  tocLabel: "Bước 6 · Commitment Test",
  lead: "Kết quả bước 6: Commitment Evidence — bằng chứng về những hành động thực tế mà khách hàng đã thực hiện.",
  blocks: [
    { type: "subheading", text: "3.6.1 · Vì sao cần Commitment Test?" },
    {
      type: "paragraph",
      text: "Sau khi nghiên cứu khách hàng và thử Offer, bạn có thể đã thu được nhiều tín hiệu tích cực. Nhưng ở thời điểm đó, dữ liệu vẫn có thể chỉ phản ánh sự quan tâm. Commitment Test xác định liệu khách hàng có sẵn sàng thực hiện hành động thực tế để nhận được giá trị hay không.",
    },
    {
      type: "paragraph",
      text: "Tuỳ loại sản phẩm, hành động đó có thể là dùng prototype, tham gia pilot, cung cấp dữ liệu cần thiết, dành thời gian trải nghiệm hoặc trả tiền.",
    },
    { type: "subheading", text: "3.6.2 · Các dạng Commitment Test" },
    {
      type: "cards",
      columns: 3,
      items: [
        {
          title: "Time Commitment",
          meta: "Cam kết thời gian",
          text: "Khách hàng dành thời gian thực tế để trải nghiệm giải pháp. Ví dụ: hoàn thành một buổi luyện phỏng vấn thử thay vì chỉ đăng ký email.",
        },
        {
          title: "Workflow Commitment",
          meta: "Cam kết quy trình",
          text: "Khách hàng đưa sản phẩm vào một hoạt động đang thực hiện. Ví dụ: dùng app để tổ chức một sự kiện thật.",
        },
        {
          title: "Data / Setup Commitment",
          meta: "Cam kết dữ liệu, thiết lập",
          text: "Khách hàng chủ động cung cấp thông tin hoặc hoàn thành thiết lập cần thiết. Hạn chế dữ liệu nhạy cảm, chỉ thu thập những gì thật sự cần thiết.",
        },
        {
          title: "Financial Commitment",
          meta: "Cam kết tài chính",
          text: "Khách hàng thực hiện giao dịch hoặc tham gia chương trình trả phí thực tế.",
        },
        {
          title: "Organizational Commitment",
          meta: "Cam kết của tổ chức",
          text: "Doanh nghiệp đồng ý triển khai thử, phân công người phụ trách hoặc dành nguồn lực cho pilot.",
        },
      ],
    },
    {
      type: "callout",
      label: "Mức độ mạnh của bằng chứng",
      paragraphs: ["Phụ thuộc vào loại app và chi phí thực tế của hành động đối với khách hàng."],
    },
    { type: "subheading", text: "3.6.3 · Khi nào cần Prototype?" },
    {
      type: "paragraph",
      text: "Không phải mọi ý tưởng đều có thể bán chỉ bằng mô tả. Nếu giá trị của app phụ thuộc vào trải nghiệm, phản hồi hoặc một hành vi mới, cần một nguyên mẫu có thể sử dụng. Có ba hình thức thường gặp:",
    },
    {
      type: "table",
      head: ["Loại", "Định nghĩa"],
      rows: [
        [
          "**Clickable Prototype**",
          "Các màn hình mô phỏng có thể nhấn và điều hướng, chưa có đầy đủ chức năng",
        ],
        ["**Functional Prototype**", "Một chức năng chính hoạt động đủ để người dùng thử"],
        [
          "**Concierge MVP**",
          "Người xây thực hiện một phần dịch vụ thủ công phía sau trải nghiệm để kiểm chứng giá trị",
        ],
      ],
    },
    {
      type: "paragraph",
      text: "Ví dụ, với SpeakReady AI, bạn có thể xây một bản thử chỉ gồm một tình huống phỏng vấn, hội thoại AI và phản hồi sau buổi luyện. Chưa cần xây lịch sử học tập, hệ thống cấp độ, cộng đồng hay thư viện đầy đủ các ngành nghề.",
    },
    {
      type: "callout",
      label: "Mục tiêu của prototype",
      paragraphs: ["Kiểm chứng giả thuyết, không phải thay thế toàn bộ Module Build."],
    },
    { type: "subheading", text: "3.6.4 · Commitment Test theo loại ứng dụng" },
    {
      type: "table",
      head: ["Loại app", "Bài kiểm chứng phù hợp"],
      rows: [
        ["**Productivity**", "Người dùng hoàn thành một công việc thật bằng prototype"],
        ["**Learning**", "Người dùng hoàn thành buổi học và chủ động muốn luyện tiếp"],
        ["**Fitness**", "Người dùng ghi nhận buổi tập hoặc theo dõi tiến độ thật"],
        ["**Event**", "Người tổ chức đưa sản phẩm vào một sự kiện"],
        ["**Creator Tool**", "Người dùng tạo nội dung thật và sử dụng đầu ra"],
        ["**B2B Tool**", "Doanh nghiệp tham gia pilot theo mục tiêu đã thống nhất"],
        [
          "**Consumer Subscription**",
          "Người dùng thử trải nghiệm cốt lõi và thực hiện thanh toán hoặc đăng ký beta trả phí",
        ],
      ],
    },
    {
      type: "callout",
      label: "Thu được tiền thật",
      paragraphs: [
        "Nếu bạn thu được tiền từ khách hàng thật trong điều kiện minh bạch, đây là bằng chứng rất đáng quan tâm. Nhưng một vài giao dịch vẫn không đủ để khẳng định khả năng mở rộng kinh doanh.",
      ],
    },
    { type: "subheading", text: "3.6.5 · Tạo một Commitment Threshold" },
    {
      type: "paragraph",
      text: "Commitment Threshold (ngưỡng cam kết) là ngưỡng bằng chứng tối thiểu mà bạn xác định **trước**, để quyết định có nên đầu tư xây MVP hay không.",
    },
    {
      type: "paragraph",
      text: "Ví dụ với SpeakReady AI: trong một nhóm người được tuyển chọn đúng đối tượng, cần có một số người hoàn thành buổi luyện thực tế và một số khách hàng chấp nhận tham gia chương trình beta trả phí ở mức giá được công bố.",
    },
    {
      type: "callout",
      label: "Không có ngưỡng chung",
      paragraphs: [
        "Không áp dụng ngưỡng 10 người hay 10% cho mọi ứng dụng. Ngưỡng phải xét đến giá sản phẩm, tính khó của hành động, kích thước thị trường, chi phí kiểm chứng và mức độ rủi ro của khoản đầu tư tiếp theo.",
      ],
    },
    {
      type: "worksheet",
      id: "phieu-commitment-threshold",
      title: "Commitment Metric và Commitment Threshold",
      note: "Điền trước khi chạy Commitment Test. Ngưỡng là của riêng ý tưởng và khoản đầu tư của bạn.",
      fields: [
        "Commitment Metric — hành động cụ thể khách phải làm để chứng minh cam kết",
        "Khách hàng phải đánh đổi gì (thời gian, công sức, cơ hội, tiền)",
        "Nhóm người được tuyển chọn đúng đối tượng — họ là ai, tuyển ở đâu",
        "Commitment Threshold — ngưỡng bằng chứng tối thiểu để đầu tư xây MVP",
        "Lý do chọn ngưỡng này (giá sản phẩm, tính khó của hành động, kích thước thị trường, chi phí kiểm chứng, rủi ro khoản đầu tư tiếp theo)",
      ],
    },
  ],
}
