import type { Section } from "@/lib/course-playbook/types"

/** Nguồn: giáo trình Module 04 — HOW, bài 4.9 "Thiết kế chuyển đổi: Onboarding, Aha Moment, Paywall" (30 phút), Prompt 05. */
export const section: Section = {
  id: "bai-4-9",
  kicker: "HOW · Bài 4.9 · 30 phút",
  title: "Onboarding, Aha Moment và Paywall — ba điểm quyết định chuyển đổi",
  highlight: "quyết định chuyển đổi",
  tocLabel: "4.9 · Onboarding, Aha Moment, Paywall",
  lead: "Thiết kế để người dùng bắt đầu nhanh, thấy giá trị thật và hiểu rõ vì sao nên trả phí. **Bán giá trị nâng cấp, không bán danh sách tính năng.**",
  blocks: [
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-04/onboarding-aha-moment-paywall.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic bài 4.9: ba điểm tác động kinh doanh Onboarding, Aha Moment, Paywall (mỗi điểm có cách sai và cách đúng); năm câu hỏi đánh giá; quy trình Prompt 05 Conversion Review; và bốn dark patterns cần tránh.",
        caption: "Hình 12 · Bài 4.9 — ba điểm chuyển đổi, năm câu hỏi đánh giá và những kiểu thiết kế cần tránh.",
      },
    },
    { type: "subheading", text: "Ba điểm thiết kế có tác động kinh doanh lớn" },
    {
      type: "cards",
      columns: 3,
      items: [
        {
          title: "1 · Onboarding",
          text: "Đừng kể mọi tính năng. Giúp khách hiểu “app này dành cho tôi” và bắt đầu dễ.",
        },
        {
          title: "2 · Aha Moment",
          text: "Đừng chỉ hiện dashboard đẹp. Cho người dùng một kết quả hoặc phản hồi hữu ích.",
        },
        {
          title: "3 · Paywall",
          text: "Bán **giá trị nâng cấp**, đừng chỉ liệt kê “Premium Features”. Nêu đúng giá, chu kỳ, trial (dùng thử) và cách quản lý hoặc hủy gói theo chính sách nền tảng.",
        },
      ],
    },
    { type: "subheading", text: "Năm câu hỏi đánh giá" },
    {
      type: "list",
      ordered: true,
      items: [
        "Khách mới có hiểu app làm gì sau 5 giây?",
        "Thời gian đến giá trị đầu tiên có bị kéo dài bởi nhiều câu hỏi?",
        "Paywall xuất hiện ở thời điểm có lý do hợp lý chưa?",
        "Lợi ích của gói phí có thực sự khác trải nghiệm miễn phí?",
        "Lời hứa trên quảng cáo có khớp thứ họ nhận khi cài app?",
      ],
    },
    {
      type: "prompt",
      title: "Prompt 05 · Conversion Review + TẠO ẢNH CẬP NHẬT THEO LÔ",
      when: "Chạy sau khi đã có bộ ảnh MASTER UI STORYBOARD.",
      hint: "Prompt này yêu cầu ChatGPT tạo ảnh ngay: một Conversion Design Sheet.",
      text: `Bạn là chuyên gia Mobile Growth UX và Subscription Conversion.

Đầu vào: Product Brief, Screen Map, Design System và bộ ảnh
MASTER UI STORYBOARD vừa tạo.

Hãy phân tích 3 điểm tác động mạnh đến chuyển đổi:
1. ONBOARDING: rõ nhu cầu, ít ma sát, bắt đầu nhanh.
2. AHA MOMENT: người dùng thật sự nhận được giá trị nào?
3. PAYWALL: lợi ích, mức giá giả thuyết, điều kiện trial,
   niềm tin và sự minh bạch.

Đề xuất tối đa 2 phương án cải tiến có căn cứ/giả thuyết
cho mỗi điểm. Chọn một phương án ưu tiên để thử ở MVP.

SAU KHI CHỐT các thay đổi, HÃY SỬ DỤNG KHẢ NĂNG TẠO ẢNH
CỦA BẠN NGAY BÂY GIỜ để TẠO MỘT CONVERSION DESIGN SHEET,
chứa CÙNG LÚC toàn bộ màn hình onboarding, Aha Moment và paywall
cần chỉnh sửa. Không yêu cầu tôi nhập prompt từng màn.

Giữ nguyên brand, style, component từ Master UI Storyboard.
Không chỉ mô tả UI hoặc viết prompt. Không dùng dark patterns.
Phải ghi rõ các giả thuyết cần A/B test sau khi app có traffic.`,
    },
    {
      type: "callout",
      label: "Không dùng dark patterns (mẫu thiết kế đánh lừa người dùng)",
      paragraphs: [
        "Nút hủy bị che · đồng hồ đếm ngược giả · đánh lừa giá trial · ép đăng ký không cần thiết.",
        "Giả thuyết nào cần A/B test (so sánh hai phiên bản) thì ghi rõ và chờ khi app có traffic (lượt truy cập). Chưa có dữ liệu thì **không tuyên bố đã tăng chuyển đổi**.",
      ],
    },
    {
      type: "output",
      label: "Đầu ra bài 4.9",
      text: "`CONVERSION-UI-SHEET.png`, mô tả các thay đổi và giả thuyết thử nghiệm.",
    },
  ],
}
