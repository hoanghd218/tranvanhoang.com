import type { Section } from "@/lib/course-playbook/types"

// Nguồn: Phần III — HOW, Bước 5 (3.5.1–3.5.7): Distribution Validation — chọn kênh, Content, VSC (case Flame), Community, Partnership (case LaunchFast), đánh giá kênh.

const STARTER_STORY_SOURCE =
  "Nguồn: phỏng vấn founder trên kênh Starter Story. Số liệu và tiêu chí do founder tự trình bày, chưa được kiểm chứng độc lập."

export const section: Section = {
  id: "how-buoc-5",
  kicker: "HOW · Bước 5 · 3.5",
  title: "Distribution Validation: biết khách dùng TikTok chưa có nghĩa bán được qua TikTok",
  highlight: "Distribution Validation",
  tocLabel: "Bước 5 · Kênh phân phối",
  lead: "Kết quả bước 5: Initial Distribution Validation Report, xác định kênh nào có tín hiệu tốt nhất để dùng ở giai đoạn Launch (ra mắt).",
  blocks: [
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-03/kiem-chung-kenh-phan-phoi.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic kiểm chứng kênh phân phối: chọn kênh theo hành vi mua, năm câu hỏi kiểm kênh, VSC Viral Scalable Convertible từ case Flame, Community Validation bảy bước, Content Validation, Partnership Validation case LaunchFast và sáu tiêu chí chấm một kênh.",
        caption: "Hình 6 · Kiểm chứng kênh phân phối — từ chọn kênh đến chấm sáu tiêu chí.",
      },
    },
    { type: "subheading", text: "3.5.1 · Distribution Validation là gì?" },
    {
      type: "paragraph",
      text: "Distribution Validation là quá trình kiểm chứng liệu một kênh phân phối có thể tiếp cận đúng nhóm khách hàng và tạo ra những hành động có giá trị đối với sản phẩm hay không. Nó khác với việc chỉ xác định khách hàng đang dùng nền tảng nào: biết khách dùng TikTok không đồng nghĩa với việc app bán hiệu quả qua TikTok. Cần kiểm tra:",
    },
    {
      type: "list",
      items: [
        "Có tiếp cận được đúng người không?",
        "Có tạo được sự quan tâm phù hợp không?",
        "Người xem có thực hiện hành động tiếp theo không?",
        "Kênh đó có thể được duy trì với nguồn lực hiện có không?",
        "Nếu phải trả tiền, chi phí có thể trở nên hợp lý so với giá trị khách hàng không?",
      ],
    },
    { type: "subheading", text: "3.5.2 · Chọn kênh dựa trên hành vi mua" },
    {
      type: "table",
      head: ["Kiểu hành vi khách hàng", "Kênh nên ưu tiên nghiên cứu"],
      rows: [
        ["Chủ động tìm giải pháp", "SEO (tối ưu tìm kiếm), ASO (tối ưu hiển thị trên kho ứng dụng), search ads (quảng cáo tìm kiếm)"],
        ["Xem nội dung và phát hiện nhu cầu", "TikTok, Reels, Shorts"],
        ["Trao đổi vấn đề chuyên môn", "Reddit, Discord, cộng đồng ngách"],
        ["Tin tưởng chuyên gia hoặc creator", "Influencer, affiliate (tiếp thị liên kết)"],
        ["Ra quyết định trong doanh nghiệp", "Direct outreach (tiếp cận trực tiếp), demo, partnership (hợp tác)"],
        ["Đã có trong hệ sinh thái của đối tác", "Distribution Partner, agency, cộng đồng trả phí"],
      ],
    },
    {
      type: "callout",
      label: "Gợi ý, không phải quy tắc",
      paragraphs: ["Đây là gợi ý lựa chọn, không phải quy tắc cố định."],
    },
    { type: "subheading", text: "3.5.3 · Content Validation" },
    {
      type: "paragraph",
      text: "Content Validation là phương pháp dùng nội dung để kiểm chứng mức độ quan tâm đối với vấn đề, kết quả và cách định vị sản phẩm. Không nhất thiết phải có ứng dụng hoàn chỉnh. Có thể dùng:",
    },
    {
      type: "list",
      items: [
        "Tình huống thực tế mà khách hàng đang gặp.",
        "Giải thích vấn đề và cách giải quyết.",
        "Demo sản phẩm dự kiến.",
        "Prototype hoặc hình ảnh minh hoạ.",
        "So sánh cách làm hiện tại với giải pháp mới.",
        "Hướng dẫn ngắn liên quan đến nhu cầu khách hàng.",
      ],
    },
    {
      type: "callout",
      label: "Đo gì?",
      paragraphs: [
        "Điểm quan trọng nhất không phải lượt xem. Hãy đo khả năng tạo ra **hành động tiếp theo**: người dùng phù hợp truy cập landing page, yêu cầu demo hoặc đăng ký tham gia beta.",
      ],
    },
    { type: "subheading", text: "3.5.4 · Áp dụng VSC Framework" },
    {
      type: "case",
      case: {
        title: "Flame — dùng VSC để đánh giá tăng trưởng từ nội dung ngắn",
        tag: "VSC",
        columns: [
          {
            label: "Bối cảnh",
            text: "An Nayal dùng VSC để đánh giá khả năng tăng trưởng dựa trên nội dung ngắn.",
          },
          {
            label: "Tiêu chí tham khảo của founder (chữ V)",
            text: "Nhiều nội dung cùng format đạt trên 100.000 lượt xem từ những tài khoản có dưới 5.000 follower. Đây là tiêu chí trong phương pháp của founder, không phải chuẩn chung cho mọi thị trường.",
          },
        ],
        source: STARTER_STORY_SOURCE,
      },
    },
    {
      type: "cards",
      columns: 3,
      items: [
        {
          title: "V — Viral",
          meta: "Lan truyền",
          text: "Vấn đề hoặc format nội dung có bằng chứng từng tạo sự quan tâm lớn không?",
        },
        {
          title: "S — Scalable",
          meta: "Nhân bản được",
          text: "Có tạo ra được nhiều biến thể nội dung mà không tốn quá nhiều chi phí và công sức không? Một format chỉ làm được một lần có thể viral nhưng khó thành hệ thống phân phối lâu dài.",
        },
        {
          title: "C — Convertible",
          meta: "Ra chuyển đổi",
          text: "Nội dung có thu hút đúng người và tạo ra lượt truy cập, cài đặt hoặc thanh toán không? Nội dung triệu lượt xem mà không ra khách có thể kém giá trị hơn nội dung ít lượt xem nhưng có chuyển đổi thực tế.",
        },
      ],
    },
    {
      type: "callout",
      label: "Khi nào dùng VSC",
      paragraphs: [
        "VSC phù hợp với app consumer (cho người dùng cá nhân) có khả năng demo trực quan. Với app B2B, dùng các tiêu chí phù hợp hơn như số lịch demo, số pilot và khả năng tiếp cận người ra quyết định.",
      ],
    },
    { type: "subheading", text: "3.5.5 · Community Validation" },
    {
      type: "paragraph",
      text: "Nghiên cứu cộng đồng đi qua bảy việc. Case Algrow (ở phần WHY) minh hoạ cách một founder dùng Discord để khám phá nhu cầu và tiếp cận những người dùng đầu tiên.",
    },
    {
      type: "steps",
      items: [
        { title: "Identify", text: "Xác định các cộng đồng có khách hàng mục tiêu." },
        { title: "Observe", text: "Quan sát những vấn đề và câu hỏi lặp lại." },
        { title: "Contribute", text: "Chia sẻ hiểu biết hoặc giải pháp hữu ích." },
        { title: "Demonstrate", text: "Giới thiệu prototype khi phù hợp và được cộng đồng cho phép." },
        { title: "Collect Feedback", text: "Ghi nhận câu hỏi, sự quan tâm và phản đối." },
        { title: "Invite", text: "Mời người phù hợp tham gia thử nghiệm." },
        { title: "Measure", text: "Đo hành động thực tế sau khi tương tác." },
      ],
    },
    {
      type: "callout",
      label: "Không hợp lệ",
      paragraphs: [
        "Kỹ thuật thao túng tương tác, tài khoản giả hoặc spam **không** phải thành phần hợp lệ của phương pháp này.",
      ],
    },
    { type: "subheading", text: "3.5.6 · Partnership Validation" },
    {
      type: "paragraph",
      text: "Không phải người xây app nào cũng có khả năng trực tiếp xây một cộng đồng lớn. Có thể kiểm chứng thị trường bằng cách tiếp cận những cá nhân hoặc tổ chức đã phục vụ khách hàng mục tiêu.",
    },
    {
      type: "case",
      case: {
        title: "LaunchFast — tìm đối tác đã có sẵn khách hàng",
        tag: "Đối tác phân phối",
        columns: [
          {
            label: "Cách làm",
            text: "Hassam của LaunchFast tìm đến một tổ chức đào tạo Amazon seller đã có sẵn tệp khách hàng phù hợp.",
          },
          { label: "Đề xuất", text: "Đề xuất xây demo và hợp tác phân phối." },
        ],
        source: STARTER_STORY_SOURCE,
      },
    },
    { type: "paragraph", text: "Với mô hình này, cần tìm hiểu năm điều:" },
    {
      type: "cards",
      columns: 3,
      items: [
        { title: "Audience Fit", text: "Đối tác có đúng nhóm khách hàng không?" },
        { title: "Problem Fit", text: "Khách hàng của đối tác có vấn đề mà app giải quyết không?" },
        { title: "Value for Partner", text: "Đối tác nhận được lợi ích gì khi giới thiệu?" },
        { title: "Commitment", text: "Đối tác có thực sự đồng ý thử nghiệm hay mới chỉ tỏ ra quan tâm?" },
        {
          title: "Commercial Model",
          text: "Hợp tác theo phí giới thiệu, chia sẻ doanh thu hay hình thức khác?",
        },
      ],
    },
    {
      type: "callout",
      label: "Thận trọng",
      paragraphs: [
        "Không nhượng quyền sở hữu hoặc ký các cam kết dài hạn chỉ vì một đối tác hứa rằng họ có thể mang lại khách hàng.",
      ],
    },
    { type: "subheading", text: "3.5.7 · Đánh giá hiệu quả kênh" },
    {
      type: "table",
      head: ["Tiêu chí", "Câu hỏi đánh giá"],
      rows: [
        ["**Audience Quality**", "Kênh có mang tới đúng phân khúc không?"],
        ["**Response Quality**", "Khách hàng có phản hồi thực chất không?"],
        ["**Commitment**", "Có hành động đăng ký, dùng thử, demo hoặc mua không?"],
        ["**Acquisition Cost**", "Chi phí ban đầu thế nào?"],
        ["**Repeatability**", "Có thể thực hiện lặp lại không?"],
        ["**Operational Fit**", "Bạn có đủ kỹ năng, ngân sách và thời gian duy trì kênh không?"],
      ],
    },
    {
      type: "worksheet",
      id: "phieu-danh-gia-kenh",
      title: "Chấm một kênh phân phối",
      note: "Mỗi kênh thử một phiếu. Chỉ ghi điều bạn thực sự quan sát được từ thử nghiệm.",
      fields: [
        "Kênh đang đánh giá",
        "Audience Quality — kênh có mang tới đúng phân khúc không",
        "Response Quality — khách hàng có phản hồi thực chất không",
        "Commitment — có hành động đăng ký, dùng thử, demo hoặc mua không",
        "Acquisition Cost — chi phí ban đầu",
        "Repeatability — có thể thực hiện lặp lại không",
        "Operational Fit — bạn có đủ kỹ năng, ngân sách, thời gian duy trì không",
      ],
    },
  ],
}
