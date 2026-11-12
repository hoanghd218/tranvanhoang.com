import type { Section } from "@/lib/course-playbook/types"

/** Nguồn: giáo trình Module 04 — mục 10 "Các nguyên tắc cần giữ khi ứng dụng thực tế" và tuyên ngôn của module. */
export const section: Section = {
  id: "nguyen-tac-ung-dung",
  kicker: "Nguyên tắc · Khi ứng dụng thực tế",
  title: "Năm nguyên tắc cần giữ khi ứng dụng thực tế",
  highlight: "Năm nguyên tắc",
  tocLabel: "Năm nguyên tắc ứng dụng",
  lead: "Năm điều cần nhớ để module này không trở thành “có ảnh đẹp rồi dừng lại”.",
  blocks: [
    {
      type: "cards",
      columns: 2,
      items: [
        {
          title: "1 · “AI tạo ảnh” không phải “AI đã viết app”",
          text: "ChatGPT Web có thể tạo hình thiết kế, styleboard và storyboard. Các hình đó **không tự chứa component React Native chạy được**. Module 05 mới cần lập trình, kiểm thử trên thiết bị thật, xác thực, backend, xử lý lỗi và tuân thủ quy định nền tảng.",
        },
        {
          title: "2 · Batch-first, không phải 10.000 ảnh một lần",
          text: "Đặt **một yêu cầu cho cả bộ màn hình** để tối ưu số lượt hướng dẫn và sự đồng nhất thiết kế. Nhưng số ảnh ChatGPT Web thực sự xuất được trong một lượt bị giới hạn; tài liệu không hứa hàng nghìn hay hàng vạn ảnh riêng. Mục tiêu là **đủ toàn bộ màn hình MVP và đủ nét để build**, không phải càng nhiều ảnh càng tốt.",
        },
        {
          title: "3 · Nguồn sự thật: tài liệu + hình ảnh + người dùng thật",
          text: "**Hình ảnh** thể hiện thị giác, bố cục và cảm xúc. **Markdown** chứa tên màn, chữ chuẩn, CTA, hành vi, giả thuyết, tính năng. **Người dùng thật** cho biết trải nghiệm có dễ hiểu và hữu ích không. Khi ảnh AI viết sai chữ hoặc vẽ sai nút, sửa theo **Screen Specs**, không lấy nội dung sai trong ảnh làm yêu cầu chuẩn cho AI coding.",
        },
        {
          title: "4 · Giữ công nghệ đúng theo toàn khóa",
          text: "Module 04 không dùng Base44, không bắt buộc Figma và không triển khai Supabase. **ChatGPT Web** là nơi phân tích, tạo tài liệu, lên layout và tạo hình ảnh. Module 05 mới triển khai React Native/Expo + Cloudflare Workers/D1/R2. Google Login hoặc email/password là lựa chọn cần thiết kế phù hợp; không bắt người dùng đăng nhập nếu trải nghiệm MVP chưa cần.",
        },
      ],
    },
    {
      type: "callout",
      label: "5 · Triết lý kinh doanh xuyên suốt",
      paragraphs: [
        "**Đừng hỏi:** “Tôi có thể làm một app có 30 màn hình đẹp không?”",
        "**Hãy hỏi:** “Người dùng nào có vấn đề đủ quan trọng, tôi cho họ kết quả gì, họ hiểu giá trị trong bao lâu và lý do nào để họ quay lại hoặc trả phí?”",
      ],
    },
    {
      type: "quote",
      text: "Use ChatGPT to design a product people can understand, experience, and choose to pay for — then make it build-ready.",
      by: "Tuyên ngôn Module 04 · Dịch: Dùng ChatGPT thiết kế sản phẩm người ta hiểu được, trải nghiệm được và chọn trả tiền — rồi làm nó sẵn sàng để build.",
    },
  ],
}
