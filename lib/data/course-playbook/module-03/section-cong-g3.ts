import type { Section } from "@/lib/course-playbook/types"

// Nguồn: Phần VIII — Kết nối với Module 04, bảng tóm tắt Module 03 theo 4MAT, tư duy cuối; cổng G3 lập từ bộ tài liệu chuẩn (6.2) và quy tắc GO (3.7.3).

export const section: Section = {
  id: "cong-g3",
  kicker: "Kết nối · Phần VIII · Cổng G3",
  title: "Cổng G3 · Evidence Fit — khi nào sang Module 04?",
  highlight: "Evidence Fit",
  tocLabel: "Cổng G3 · Evidence Fit",
  lead: "Module 03 phải tạo được những thông tin đủ rõ để bắt đầu thiết kế sản phẩm. Mỗi kết quả Validation được dùng trực tiếp ở Module 04 — Design.",
  blocks: [
    {
      type: "table",
      caption: "Từ kết quả Validation sang thiết kế sản phẩm",
      head: ["Kết quả từ Validation", "Được sử dụng trong Product Design"],
      rows: [
        ["**Validated Customer Segment**", "Xác định người dùng mục tiêu và nhu cầu UX"],
        ["**Validated Core Problem**", "Xác định Core Experience"],
        ["**Validated Value Proposition**", "Viết Product Promise (lời hứa sản phẩm) và onboarding (hướng dẫn người dùng mới)"],
        ["**Solution Feedback**", "Quyết định tính năng P0 (ưu tiên cao nhất)"],
        ["**Price & Offer Evidence**", "Thiết kế Monetization Strategy (chiến lược kiếm tiền) và paywall (màn thu phí)"],
        ["**Distribution Evidence**", "Thiết kế thông điệp cho App Store và landing page"],
        ["**Customer Objections**", "Giảm ma sát trong hành trình người dùng"],
        ["**Commitment Behavior**", "Xác định Aha Moment (khoảnh khắc nhận ra giá trị) và các sự kiện activation (kích hoạt) cần đo"],
      ],
    },
    {
      type: "callout",
      label: "Phần chưa kiểm chứng",
      paragraphs: [
        "Những thành phần chưa được kiểm chứng phải tiếp tục được ghi là **giả thuyết**, không tự động biến thành yêu cầu sản phẩm chắc chắn đúng.",
      ],
    },
    { type: "subheading", text: "Tóm tắt toàn bộ Module 03 theo 4MAT" },
    {
      type: "table",
      head: ["4MAT", "Kiến thức cốt lõi", "Kết quả học tập"],
      rows: [
        [
          "**WHY**",
          "Vì sao sản phẩm tốt vẫn có thể không bán được? Vì sao phải phân biệt nhu cầu, ý định và cam kết?",
          "Hiểu bản chất rủi ro kinh doanh",
        ],
        [
          "**WHAT**",
          "Business Validation, bốn giả thuyết, Customer Discovery, Evidence Ladder, Commitment Metric và Experiment",
          "Nắm hệ thống khái niệm và nguyên lý",
        ],
        [
          "**HOW**",
          "Xác định giả thuyết → nghiên cứu khách hàng → phân tích đối thủ → thử Offer → thử Distribution → đo Commitment → ra quyết định",
          "Có khả năng thực hiện một Validation Plan",
        ],
        [
          "**WHAT IF**",
          "Kết quả thấp, mâu thuẫn, thiếu dữ liệu, chưa bán được, không có kênh, hoặc cần prototype trước",
          "Biết thích nghi, Pivot và quyết định đầu tư có kiểm soát",
        ],
      ],
    },
    {
      type: "output",
      label: "Sản phẩm cuối của Module 03",
      text: "**Validation Decision Report** — căn cứ để bạn chính thức bước sang Module 04 (Design), hoặc quay lại điều chỉnh Opportunity nếu chưa có đủ bằng chứng.",
    },
    {
      type: "checklist",
      id: "gate",
      title: "Bảy thứ cần có để qua cổng G3 · Evidence Fit",
      intro: "Chỉ sang Module 04 khi bạn có đủ bộ tài liệu Validation làm căn cứ. Tick từng mục khi bạn đã có.",
      items: [
        {
          title: "01 — Validation Brief",
          text: "Khách hàng, vấn đề, giải pháp, giá, kênh và giả thuyết rủi ro.",
        },
        {
          title: "02 — Customer Discovery Report",
          text: "Dữ liệu phỏng vấn, câu trả lời, vấn đề lặp lại và phương pháp hiện tại.",
        },
        {
          title: "03 — Competitor Evidence Report",
          text: "Bằng chứng từ đối thủ, review, sản phẩm thay thế và mô hình giá.",
        },
        {
          title: "04 — Offer Test Report",
          text: "Các lời đề nghị, thông điệp, CTA và phản hồi khách hàng.",
        },
        {
          title: "05 — Distribution Test Report",
          text: "Kênh thử nghiệm, nguồn traffic, hành động và chi phí.",
        },
        {
          title: "06 — Commitment Evidence Log",
          text: "Hành động sử dụng hoặc thanh toán đã được xác minh.",
        },
        {
          title: "07 — Validation Decision Report",
          text: "Kết luận, rủi ro chưa giải quyết và quyết định đầu tư (GO, PIVOT hoặc KILL/PARK).",
        },
      ],
      riskNote:
        "GO không đồng nghĩa với việc thị trường đã được chứng minh hoàn toàn. Rủi ro còn lại phải được ghi rõ trong báo cáo, và phần chưa kiểm chứng tiếp tục là giả thuyết.",
    },
    {
      type: "quote",
      text: "Validation không phải là tìm bằng chứng chứng minh ý tưởng của mình đúng. Validation là tìm hiểu điều gì thực sự đúng về khách hàng và thị trường, với chi phí đủ thấp để vẫn còn nguồn lực xây dựng khi tìm thấy cơ hội đáng theo đuổi.",
      by: "Tư duy cuối cùng của Module 03",
    },
  ],
}
