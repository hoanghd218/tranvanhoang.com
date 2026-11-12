import type { Section } from "@/lib/course-playbook/types"

// Nguồn: Phần III — HOW, Bước 4 (3.4.1–3.4.6): Offer Validation — Offer là gì, thành phần, landing page, CTA, kiểm chứng giá, so sánh thông điệp.

export const section: Section = {
  id: "how-buoc-4",
  kicker: "HOW · Bước 4 · 3.4",
  title: "Offer Validation: kiểm chứng lời hứa giá trị và đề nghị mua",
  highlight: "Offer",
  tocLabel: "Bước 4 · Offer",
  lead: "Kết quả bước 4: Validated Offer Hypothesis — thông điệp giá trị, đề nghị sử dụng và mức giá đã có phản hồi thực tế từ thị trường.",
  blocks: [
    { type: "subheading", text: "3.4.1 · Offer là gì?" },
    {
      type: "paragraph",
      text: "Offer (lời đề nghị) là lời đề nghị trao đổi giá trị giữa doanh nghiệp và khách hàng. Offer không chỉ là mức giá. Nó gồm kết quả khách hàng được hứa hẹn, cách nhận được giá trị, những lợi ích cụ thể, điều kiện sử dụng, mức giá và rủi ro họ cảm nhận khi quyết định mua.",
    },
    {
      type: "paragraph",
      text: "Hai app có chức năng tương tự có thể tạo kết quả bán hàng rất khác nhau vì cách định vị và trình bày Offer.",
    },
    {
      type: "cards",
      columns: 2,
      items: [
        {
          title: "Offer yếu",
          text: "“Ứng dụng AI luyện tiếng Anh với nhiều tính năng thông minh.”",
        },
        {
          title: "Offer rõ ràng hơn",
          text: "“Luyện phỏng vấn tiếng Anh theo vị trí công việc, thực hành câu hỏi thực tế và nhận phản hồi ngay sau mỗi câu trả lời.”",
        },
      ],
    },
    {
      type: "callout",
      label: "Offer rõ vẫn là giả thuyết",
      paragraphs: [
        "Offer thứ hai giúp khách hàng hiểu mình sẽ dùng ứng dụng để làm gì. Tuy nhiên, nó vẫn là một giả thuyết cần được kiểm chứng.",
      ],
    },
    { type: "subheading", text: "3.4.2 · Các thành phần của Offer Validation" },
    {
      type: "table",
      head: ["Thành phần", "Câu hỏi kiểm chứng"],
      rows: [
        ["**Target Customer**", "Người nào quan tâm nhất?"],
        ["**Desired Outcome**", "Kết quả nào hấp dẫn nhất?"],
        ["**Unique Mechanism**", "Cách giải quyết nào khiến khách hàng thấy khác biệt?"],
        ["**Value Proposition**", "Thông điệp nào khiến khách hàng hiểu nhanh giá trị?"],
        ["**Price**", "Mức giá và gói thanh toán nào phù hợp?"],
        ["**Offer Friction**", "Điều gì ngăn họ thử hoặc mua?"],
        ["**Risk Reduction**", "Điều gì giúp họ tự tin quyết định?"],
      ],
    },
    { type: "subheading", text: "3.4.3 · Landing Page Validation" },
    {
      type: "paragraph",
      text: "Landing Page Validation là phương pháp dùng một trang giới thiệu sản phẩm để đo mức độ quan tâm và hành động của khách hàng đối với Offer. Một landing page kiểm chứng nên có tám phần:",
    },
    {
      type: "table",
      head: ["Thành phần", "Vai trò"],
      rows: [
        ["**Headline**", "Trình bày kết quả chính khách hàng mong muốn"],
        ["**Problem Statement**", "Cho thấy vấn đề cụ thể được giải quyết"],
        ["**Solution Explanation**", "Giải thích ngắn gọn cách sản phẩm tạo giá trị"],
        ["**Product Preview**", "Hình ảnh, prototype hoặc demo trung thực"],
        ["**Benefits**", "Các lợi ích có liên quan đến khách hàng"],
        ["**Pricing Hypothesis**", "Mức giá dự kiến hoặc đề nghị mua khi phù hợp"],
        ["**Main CTA** (lời kêu gọi hành động)", "Hành động cần khách hàng thực hiện"],
        ["**Trust & Transparency**", "Trạng thái sản phẩm, quyền riêng tư và điều kiện tham gia"],
      ],
    },
    {
      type: "paragraph",
      text: "Bạn có thể dùng ChatGPT để tạo nội dung, hình ảnh mô phỏng và mã nguồn landing page.",
    },
    {
      type: "callout",
      label: "Quy tắc minh bạch",
      paragraphs: [
        "Nếu sản phẩm chưa tồn tại, phải ghi rõ đây là bản giới thiệu, prototype hoặc chương trình đăng ký sớm. **Không được tạo cảm giác sai rằng ứng dụng đã hoạt động hoàn chỉnh, hay đưa ra chứng thực khách hàng không có thật.**",
      ],
    },
    { type: "subheading", text: "3.4.4 · Các loại CTA dùng trong thử nghiệm" },
    {
      type: "table",
      head: ["CTA", "Ý nghĩa"],
      rows: [
        ["**Join Waitlist**", "Đăng ký nhận thông báo khi ra mắt"],
        ["**Request Early Access**", "Yêu cầu quyền sử dụng sớm"],
        ["**Book a Demo**", "Đặt lịch trải nghiệm"],
        ["**Join Beta**", "Tham gia chương trình thử nghiệm"],
        ["**Start Paid Pilot**", "Đăng ký chương trình pilot trả phí"],
        ["**Pre-order**", "Đặt mua trước với các điều kiện được công bố minh bạch"],
      ],
    },
    {
      type: "callout",
      label: "Mỗi CTA một mức cam kết",
      paragraphs: [
        "Tỷ lệ đăng ký waitlist không thể so sánh trực tiếp với tỷ lệ mua trả phí, vì hành động khác nhau về mức cam kết.",
      ],
    },
    { type: "subheading", text: "3.4.5 · Kiểm chứng mức giá" },
    {
      type: "paragraph",
      text: "Mức giá phù hợp không nhất thiết là mức giá thấp nhất. Giá ảnh hưởng đến kỳ vọng về chất lượng, cảm nhận giá trị, chi phí chuyển đổi và khả năng duy trì kinh doanh. Năm phương pháp có thể dùng:",
    },
    {
      type: "table",
      head: ["Phương pháp", "Cách làm"],
      rows: [
        ["**Customer Spending Research**", "Nghiên cứu khách hàng đang chi bao nhiêu cho vấn đề tương tự"],
        ["**Competitor Pricing Analysis**", "Xem các gói giá và cách tính tiền của giải pháp hiện tại"],
        ["**Offer Comparison**", "Trình bày những phương án giá khác nhau cho các nhóm thử nghiệm phù hợp"],
        ["**Paid Pilot**", "Mời một nhóm khách hàng dùng sản phẩm thật với mức phí rõ ràng"],
        [
          "**Pre-order Test**",
          "Đo việc khách hàng thực sự đặt trước trong điều kiện minh bạch, có quy định về giao hàng và hoàn tiền",
        ],
      ],
    },
    {
      type: "callout",
      label: "Không làm",
      paragraphs: [
        "Không tạo giao dịch giả hoặc thu tiền bằng cách khiến khách hàng hiểu sai về tình trạng sản phẩm.",
      ],
    },
    { type: "subheading", text: "3.4.6 · Kiểm chứng thông điệp bằng thực nghiệm" },
    {
      type: "paragraph",
      text: "Ví dụ với SpeakReady AI, bạn muốn kiểm tra hai cách định vị:",
    },
    {
      type: "table",
      head: ["Khía cạnh", "Phương án A", "Phương án B"],
      rows: [
        [
          "**Thông điệp**",
          "“Luyện nói tiếng Anh cùng AI mỗi ngày”",
          "“Luyện phỏng vấn tiếng Anh cho vị trí công việc của bạn”",
        ],
        ["**Nhấn mạnh**", "Phương pháp học", "Tình huống và kết quả"],
      ],
    },
    {
      type: "list",
      items: [
        "Nếu làm thành một thử nghiệm so sánh, giữ tương đối nhất quán về kênh, đối tượng và điều kiện đo.",
        "Xác định chỉ số mục tiêu trước khi xem kết quả, ví dụ số lượt đăng ký beta hợp lệ trên mỗi lượt truy cập từ đúng phân khúc.",
      ],
    },
    {
      type: "callout",
      label: "Mẫu nhỏ chỉ là gợi ý",
      paragraphs: [
        "Ở quy mô nhỏ, kết quả có thể chỉ gợi ý phương án đáng nghiên cứu tiếp. Không tuyên bố một phương án chắc chắn tốt hơn khi mẫu không đủ tin cậy.",
      ],
    },
  ],
}
