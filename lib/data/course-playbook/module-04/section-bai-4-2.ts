import type { Section } from "@/lib/course-playbook/types"

/** Nguồn: giáo trình Module 04 — WHY, bài 4.2 "UX chính là một phần của hệ thống bán app" (25 phút). */
export const section: Section = {
  id: "bai-4-2",
  kicker: "WHY · Bài 4.2 · 25 phút",
  title: "UX là một phần của hệ thống bán app",
  highlight: "hệ thống bán app",
  tocLabel: "4.2 · UX là một phần của hệ thống bán app",
  lead: "Từ lúc thấy quảng cáo đến lúc trả tiền và quay lại, mỗi màn hình đều có một công việc trong hành trình bán app.",
  blocks: [
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-04/ux-la-mot-phan-cua-he-thong-ban-app.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic bài 4.2: phễu trải nghiệm 9 tầng từ video, content, ads đến review và giới thiệu; sáu khái niệm UX, UI, Activation, Aha Moment, Paywall, Retention; chuỗi Attention, Value, Trust, Payment, Retention; và bài tập viết Core Value Statement.",
        caption: "Hình 4 · Bài 4.2 — phễu trải nghiệm 9 tầng, sáu khái niệm và bài tập Core Value Statement.",
      },
    },
    { type: "subheading", text: "Sáu khái niệm cần nắm" },
    {
      type: "cards",
      columns: 3,
      items: [
        {
          title: "UX (User Experience)",
          meta: "Trải nghiệm người dùng",
          text: "Toàn bộ trải nghiệm khi một người tìm hiểu và sử dụng app, gồm việc họ có dễ đạt mục tiêu hay không.",
        },
        {
          title: "UI (User Interface)",
          meta: "Giao diện",
          text: "Lớp giao diện trực quan: chữ, nút, biểu tượng, màu sắc, thẻ và bố cục.",
        },
        {
          title: "Activation",
          meta: "Kích hoạt",
          text: "Người dùng lần đầu thực hiện hành vi có ý nghĩa, cho thấy họ đã bắt đầu nhận giá trị.",
        },
        {
          title: "Aha Moment",
          meta: "Khoảnh khắc nhận ra giá trị",
          text: "Khoảnh khắc người dùng trực tiếp nhận ra sản phẩm hữu ích với họ. Đây là khái niệm vận hành để thiết kế và kiểm chứng, không nhất thiết là một màn hình cụ thể.",
        },
        {
          title: "Paywall",
          meta: "Màn thu phí",
          text: "Màn hình đề nghị thanh toán hoặc nâng cấp để dùng giá trị trả phí.",
        },
        {
          title: "Retention",
          meta: "Giữ chân",
          text: "Khả năng người dùng trở lại sau một khoảng thời gian.",
        },
      ],
    },
    { type: "subheading", text: "Phễu trải nghiệm" },
    {
      type: "list",
      ordered: true,
      items: [
        "Video / Content / Ads",
        "App Store hoặc Landing Page (trang giới thiệu app)",
        "Cài đặt và mở app lần đầu (Install và First Open)",
        "Onboarding ngắn (đón người dùng mới)",
        "**Aha Moment:** nhận giá trị",
        "Paywall hoặc lời mời nâng cấp phù hợp",
        "Mua / đăng ký gói (Purchase / Subscription)",
        "Quay lại và giữ chân (Return và Retention)",
        "Review / giới thiệu người khác (Referral)",
      ],
    },
    {
      type: "callout",
      label: "Triết lý",
      paragraphs: [
        "Mỗi màn hình phải có công việc rõ ràng trong hành trình **Attention (thu hút) → Value (giá trị) → Trust (niềm tin) → Payment (thanh toán) → Retention (giữ chân)**.",
        "Không phải app nào cũng cần paywall ngay sau Aha Moment. Một số sản phẩm chuyển đổi tốt hơn khi cho dùng miễn phí nhiều ngày — điều này cần kiểm chứng.",
      ],
    },
    {
      type: "callout",
      label: "Bài tập 5 phút — điền một câu",
      paragraphs: [
        "“[Tên nhóm khách hàng] đang gặp [vấn đề]. Khi mở [tên app], trong [thời gian/ngữ cảnh] họ có thể [hành động] và nhận [kết quả]. Nếu muốn [giá trị chuyên sâu], họ có lý do cân nhắc trả phí.”",
      ],
    },
    {
      type: "worksheet",
      id: "core-value-statement",
      title: "Core Value Statement và giả thuyết Aha Moment",
      note: "Điền từng chỗ trống của câu mẫu ở trên, rồi ghi giả thuyết về Aha Moment của app bạn.",
      fields: [
        "Tên nhóm khách hàng",
        "Vấn đề họ đang gặp",
        "Tên app",
        "Thời gian hoặc ngữ cảnh dùng app",
        "Hành động họ có thể làm",
        "Kết quả họ nhận",
        "Giá trị chuyên sâu khiến họ có lý do cân nhắc trả phí",
        "Giả thuyết về Aha Moment",
      ],
    },
    {
      type: "output",
      label: "Đầu ra phần WHY",
      text: "Một **Core Value Statement** (câu giá trị cốt lõi) và giả thuyết về Aha Moment.",
    },
  ],
}
