import type { Section } from "@/lib/course-playbook/types"

/** Nguồn: giáo trình Module 04 — WHAT, bài 4.3 "Thiết kế ngược từ giá trị" (30 phút). */
export const section: Section = {
  id: "bai-4-3",
  kicker: "WHAT · Bài 4.3 · 30 phút",
  title: "Thiết kế ngược từ giá trị khách hàng muốn",
  highlight: "Thiết kế ngược",
  tocLabel: "4.3 · Thiết kế ngược từ giá trị",
  lead: "Reverse Product Design (thiết kế sản phẩm đi ngược): đi từ kết quả khách hàng muốn, không đi từ màn hình đẹp. Thay vì mở công cụ tạo ảnh và nói “Tạo cho tôi một ứng dụng đẹp”, ta đi theo hướng ngược lại.",
  blocks: [
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-04/thiet-ke-nguoc-tu-gia-tri.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic bài 4.3: năm câu hỏi ngược; chuỗi thiết kế ngược từ kết quả khách muốn, Aha Moment, Core Action, User Journey, Screen Map đến UI Design; ví dụ AI Interview Coach; và ba nhóm MVP gồm Must Have, Should/Later, Do Not Build.",
        caption: "Hình 5 · Bài 4.3 — năm câu hỏi ngược, chuỗi thiết kế ngược và cách chia MVP.",
      },
    },
    { type: "subheading", text: "Năm câu hỏi ngược" },
    {
      type: "list",
      ordered: true,
      items: [
        "Khách hàng muốn **kết quả cuối cùng** gì?",
        "Người dùng phải **làm hành động nào** để nhận kết quả?",
        "Họ cần **biết những gì** trước khi làm hành động đó?",
        "Cần **màn hình và thông tin nào**, ít nhất có thể?",
        "**Điều gì khiến họ quay lại hoặc mua?**",
      ],
    },
    {
      type: "paragraph",
      text: "Chuỗi thiết kế ngược: **Kết quả khách muốn → Aha Moment → Core Action (hành động cốt lõi) → User Journey → Screen Map → UI Design**.",
    },
    { type: "subheading", text: "Ví dụ xuyên suốt: AI Interview Coach" },
    {
      type: "table",
      head: ["Mục", "AI Interview Coach"],
      rows: [
        ["**Khách hàng**", "Người đi làm sắp phỏng vấn bằng tiếng Anh."],
        ["**Vấn đề**", "Biết tiếng Anh cơ bản nhưng khó trả lời tự nhiên trước nhà tuyển dụng."],
        ["**Lời hứa**", "Luyện trả lời câu hỏi phỏng vấn theo vị trí công việc."],
        ["**Core Action**", "Nghe/đọc câu hỏi → trả lời → nhận góp ý → thử lại."],
        ["**Aha Moment**", "Nhận một góp ý cụ thể giúp câu trả lời rõ ràng hơn."],
        ["**Giá trị trả phí (giả thuyết)**", "Nhiều tình huống chuyên ngành, lịch luyện cá nhân hóa và phản hồi chuyên sâu."],
      ],
    },
    { type: "subheading", text: "Phân biệt MVP và Full Product" },
    {
      type: "paragraph",
      text: "**MVP (Minimum Viable Product)** là phiên bản nhỏ nhất có thể mang lại giá trị thật cho người dùng mục tiêu và giúp kiểm chứng giả thuyết kinh doanh. Mọi tính năng được xếp vào một trong ba nhóm:",
    },
    {
      type: "cards",
      columns: 3,
      items: [
        { title: "Must Have", text: "Không có thì không thể mang lại giá trị chính." },
        { title: "Should / Later", text: "Hữu ích nhưng có thể hoãn sau khi đã kiểm chứng." },
        { title: "Do Not Build", text: "Không phục vụ mục tiêu hiện tại, hoặc chi phí và rủi ro quá cao so với giá trị." },
      ],
    },
    {
      type: "worksheet",
      id: "cat-tinh-nang-mvp",
      title: "Bài tập: từ 10 tính năng xuống tối đa 3",
      note: "Liệt kê 10 tính năng của app bạn, rồi cắt xuống còn tối đa 3 tính năng trọng tâm cho MVP.",
      fields: [
        "10 tính năng ban đầu",
        "Tối đa 3 tính năng trọng tâm cho MVP (Must Have)",
        "Phần còn lại: Should / Later hay Do Not Build?",
      ],
    },
  ],
}
