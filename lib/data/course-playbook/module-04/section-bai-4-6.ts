import type { Section } from "@/lib/course-playbook/types"

/** Nguồn: giáo trình Module 04 — HOW, bài 4.6 "ChatGPT xây User Journey và Screen Map" (30 phút), Prompt 02. */
export const section: Section = {
  id: "bai-4-6",
  kicker: "HOW · Bài 4.6 · 30 phút",
  title: "User Journey và Screen Map — danh sách thi công trước khi tạo ảnh",
  highlight: "danh sách thi công",
  tocLabel: "4.6 · User Journey và Screen Map",
  lead: "**User Journey** là câu chuyện hành vi người dùng từ một điểm bắt đầu đến mục tiêu — không phải sơ đồ dữ liệu hay API. **Screen Map** là bản đồ các màn hình cần có và mối liên hệ điều hướng giữa chúng, là “danh sách thi công” cho bước tạo ảnh và bước coding sau này.",
  blocks: [
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-04/user-journey-va-screen-map.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic bài 4.6: bảng bốn khái niệm User Journey, User Flow, Screen Map, Core Loop; sơ đồ Screen Map ví dụ S01 đến S10 của AI Interview Coach với nhánh nét đứt tới màn nâng cấp là giả thuyết; Prompt 02 tạo gì và các nguyên tắc.",
        caption: "Hình 9 · Bài 4.6 — bốn khái niệm dễ nhầm và Screen Map ví dụ S01–S10.",
      },
    },
    { type: "subheading", text: "Phân biệt 4 khái niệm" },
    {
      type: "table",
      head: ["Khái niệm", "Câu hỏi", "Ví dụ"],
      rows: [
        ["**User Journey**", "Người dùng trải qua những bước gì?", "Lần đầu mở app đến khi nhận nhận xét"],
        ["**User Flow**", "Người dùng rẽ nhánh và thao tác thế nào?", "Chọn ngành → câu hỏi → nói → kết quả"],
        ["**Screen Map**", "Có những màn hình nào?", "S01 Welcome, S02 Choose Goal…"],
        ["**Core Loop**", "Vì sao quay lại?", "Luyện → phản hồi → cải thiện → luyện tiếp"],
      ],
    },
    {
      type: "prompt",
      title: "Prompt 02 · User Journey + Screen Map",
      when: "Chạy sau khi đã chốt Product Brief v1.",
      hint: "ChatGPT chưa tạo ảnh ở prompt này — chốt bố cục trước.",
      text: `Dựa trên PRODUCT BRIEF v1 vừa chốt, bạn là Senior Mobile UX Architect.

Hãy thiết kế một phiên bản mobile app MVP gọn, tập trung vào việc
người dùng nhận được giá trị đầu tiên càng sớm càng tốt.

Tạo:
A. First-Time User Journey: từ lần đầu mở app đến Aha Moment.
B. Returning User Journey: từ lần dùng tiếp theo tới Core Loop.
C. Paid User Journey: khi nào người dùng biết, thử và chọn trả phí.
D. Screen Map: đề xuất 8–12 màn hình nếu thực sự cần.

Cho mỗi màn hình ghi:
- Screen ID ổn định (S01, S02...).
- Tên màn hình.
- Mục tiêu.
- Nội dung chính xác cần xuất hiện.
- Primary CTA và secondary CTA (nếu có).
- Điều hướng đến màn hình tiếp theo.
- Trạng thái empty/loading/error cần thiết.
- Phân loại: MVP bắt buộc / có thể bỏ / làm sau.

Nguyên tắc:
- Tối đa một CTA chính nổi bật mỗi màn hình.
- Tránh hỏi quá nhiều trước Aha Moment.
- Không thêm feature ngoài Product Brief mà không hỏi tôi.
- Nêu rõ giả thuyết vị trí paywall, không tự nhận đó là phương án tối ưu.
- Không đi sâu vào dataflow, database, API hoặc code.

Xuất bảng Screen Map, sơ đồ Mermaid flowchart và checklist
những màn hình còn thiếu. Sau đó hãy chốt phiên bản Screen Map v1
để tôi dùng cho bước thiết kế hình ảnh hàng loạt.`,
    },
    { type: "subheading", text: "Ví dụ Screen Map cho AI Interview Coach" },
    {
      type: "table",
      head: ["ID", "Screen", "Mục đích", "CTA chính"],
      rows: [
        ["S01", "Welcome", "Thể hiện lời hứa giá trị", "Bắt đầu"],
        ["S02", "Choose Goal", "Chọn mục tiêu phỏng vấn", "Tiếp tục"],
        ["S03", "Select Job Role", "Cá nhân hóa chủ đề", "Bắt đầu luyện"],
        ["S04", "First Question", "Trải nghiệm bài tập đầu tiên", "Trả lời"],
        ["S05", "AI Feedback", "Cho thấy Aha Moment", "Thử lại"],
        ["S06", "Home", "Tiếp tục hành trình", "Luyện hôm nay"],
        ["S07", "Practice Session", "Luyện các câu tiếp theo", "Gửi câu trả lời"],
        ["S08", "Progress", "Thấy tiến bộ", "Luyện tiếp"],
        ["S09", "Upgrade", "Giải thích lợi ích trả phí", "Xem gói Premium"],
        ["S10", "Settings", "Quản lý tài khoản và cài đặt", "Lưu thay đổi"],
      ],
    },
    {
      type: "list",
      items: [
        "**Luồng chính:** S01 → S02 → S03 → S04 → S05 (Aha Moment) → S06 Home → S07 → S08.",
        "**Nhánh nâng cấp (giả thuyết):** từ S05, hoặc từ S06 tùy nhu cầu, sang S09 Upgrade / Paywall.",
        "**Nhánh cài đặt:** S06 → S10 Settings.",
      ],
    },
    {
      type: "callout",
      label: "Lưu ý",
      paragraphs: [
        "Đây là **bản ví dụ**, không phải mẫu áp đặt cho mọi loại app. Nếu app chỉ cần 6 màn hình để đem lại giá trị, hãy làm 6 màn hình.",
      ],
    },
    {
      type: "output",
      label: "Đầu ra bắt buộc",
      text: "`USER-JOURNEYS.md` và `SCREEN-MAP.md`.",
    },
  ],
}
