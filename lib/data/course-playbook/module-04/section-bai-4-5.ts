import type { Section } from "@/lib/course-playbook/types"

/** Nguồn: giáo trình Module 04 — HOW, bài 4.5 "ChatGPT tạo Product Brief" (25 phút), Prompt 01. */
export const section: Section = {
  id: "bai-4-5",
  kicker: "HOW · Bài 4.5 · 25 phút",
  title: "ChatGPT tạo Product Brief — đầu vào chuẩn cho mọi lệnh sau",
  highlight: "Product Brief",
  tocLabel: "4.5 · ChatGPT tạo Product Brief",
  lead: "Product Brief là bản tóm tắt ra quyết định: một tài liệu ngắn giúp founder, designer, dev và AI cùng hiểu sản phẩm **là gì, phục vụ ai, tạo giá trị gì và v1 cần làm gì**.",
  blocks: [
    {
      type: "callout",
      label: "Nguyên tắc hướng dẫn ChatGPT (áp dụng từ bài này)",
      paragraphs: [
        "Khi chỉ cần văn bản, yêu cầu ChatGPT phân tích và xuất Markdown.",
        "Khi đã chốt bố cục, design template hoặc cần UI, prompt phải nói rõ: “Hãy sử dụng khả năng tạo ảnh của bạn NGAY BÂY GIỜ để tạo hình ảnh thực tế.” Không chấp nhận câu trả lời chỉ là mô tả thiết kế hay prompt cho công cụ khác.",
      ],
    },
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-04/chatgpt-tao-product-brief.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic bài 4.5: phân biệt Product Blueprint, Product Brief và PRD; bốn bước dạy trực tiếp A nạp context, B bản nháp, C phản biện, D chốt; chín mục Prompt 01 yêu cầu; ví dụ kết quả AI Interview Coach và tệp PRODUCT-BRIEF.md.",
        caption: "Hình 8 · Bài 4.5 — Brief khác Blueprint và PRD thế nào, bốn bước làm và chín mục của Prompt 01.",
      },
    },
    { type: "subheading", text: "Brief khác Blueprint và PRD thế nào?" },
    {
      type: "table",
      head: ["Tài liệu", "Là gì"],
      rows: [
        ["**Product Blueprint**", "Bản thiết kế tổng thể **7 thành phần**, có chiều sâu."],
        ["**Product Brief**", "Bản cô đọng, dễ đọc, dùng làm “đầu vào chuẩn” cho các lệnh tiếp theo."],
        [
          "**PRD (Product Requirements Document)**",
          "Tài liệu mô tả yêu cầu sản phẩm, có thể chi tiết hơn Brief. Ở MVP, có thể dùng **Brief + Screen Specs** (đặc tả từng màn hình) thay vì PRD dài hàng chục trang.",
        ],
      ],
    },
    { type: "subheading", text: "Bốn bước dạy trực tiếp" },
    {
      type: "steps",
      items: [
        { title: "A · Nạp context", text: "Dán các kết quả Module 01–03 và 7 phần Blueprint vào ChatGPT." },
        { title: "B · ChatGPT tạo bản nháp", text: "Dùng Prompt 01 bên dưới." },
        {
          title: "C · Phản biện",
          text: "Hỏi “điểm nào đang suy đoán, thiếu bằng chứng, quá nhiều tính năng?”.",
        },
        { title: "D · Chốt", text: "Duyệt Product Brief v1 và dùng bản đó làm tài liệu nguồn." },
      ],
    },
    {
      type: "prompt",
      title: "Prompt 01 · Product Brief Generator",
      when: "Bước B. Copy/paste hoặc đọc bằng giọng nói.",
      hint: "ChatGPT chưa tạo ảnh ở prompt này — làm nội dung trước.",
      text: `Bạn là Senior Mobile Product Strategist, Product Manager và chuyên gia
thiết kế ứng dụng có khả năng bán được.

Tôi đang xây một mobile app. Dưới đây là thông tin đã có:
- Tên tạm: {{TÊN APP}}
- Khách hàng mục tiêu: {{ICP}}
- Vấn đề và hoàn cảnh phát sinh: {{PAIN POINT}}
- Bằng chứng/phản hồi thị trường đã có: {{VALIDATION}}
- Đối thủ và điểm khác biệt: {{COMPETITORS / DIFFERENTIATION}}
- Giải pháp dự kiến: {{SOLUTION}}
- Mô hình trả phí giả thuyết: {{MONETIZATION}}

Hãy tạo PRODUCT BRIEF v1, trình bày trong Markdown, gồm:
1. One-sentence value proposition.
2. ICP và Jobs-to-be-Done (JTBD).
3. Vấn đề cốt lõi và kết quả khách hàng muốn.
4. Định vị khác biệt so với phương án hiện có.
5. Aha Moment mong muốn và Core Loop.
6. MVP: tối đa 3 năng lực cốt lõi, kèm những phần chưa xây.
7. Mô hình giá và điều gì thúc đẩy việc nâng cấp — đánh dấu giả thuyết.
8. Nguyên tắc UX và rủi ro lớn nhất.
9. Những câu hỏi chưa biết, cần kiểm chứng.

Ràng buộc:
- Phân biệt Evidence / Assumption / Decision.
- Không bịa nghiên cứu thị trường, doanh thu, benchmark, phản hồi khách hàng.
- Ưu tiên vấn đề đau, một lợi ích rõ, đơn giản, dễ demo bằng video và
  dễ giải thích cho khách hàng trong 5 giây.
- Chưa thiết kế ảnh hoặc code ở bước này.

Sau bản nháp, hãy chỉ ra 5 điểm yếu quan trọng nhất của Product Brief
và đề xuất chỉnh sửa. Đừng tự ý thay đổi ý tưởng đã kiểm chứng.`,
    },
    { type: "subheading", text: "Ví dụ kết quả ngắn: AI Interview Coach" },
    {
      type: "table",
      head: ["Mục", "Nội dung"],
      rows: [
        ["**Product**", "AI Interview Coach."],
        ["**ICP**", "Ứng viên IT Việt Nam cần phỏng vấn bằng tiếng Anh."],
        ["**Job-to-be-Done** (việc khách hàng muốn hoàn thành)", "Khi sắp phỏng vấn, tôi muốn tập trả lời những câu thực tế để bớt lúng túng."],
        ["**Aha Moment**", "Nhận góp ý rõ ràng cho câu trả lời đầu tiên."],
        ["**MVP**", "Chọn vị trí → Luyện câu hỏi → Nhận góp ý và thử lại."],
        [
          "**Điểm chưa chắc chắn**",
          "Người dùng có trả phí cho việc luyện thường xuyên không? Nội dung nào khiến họ thấy khác biệt so với ChatGPT thông thường?",
        ],
      ],
    },
    {
      type: "output",
      label: "Đầu ra bắt buộc",
      text: "`PRODUCT-BRIEF.md` — Product Brief v1 đã duyệt, dùng làm tài liệu nguồn cho mọi lệnh sau.",
    },
  ],
}
