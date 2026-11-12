import type { Section } from "@/lib/course-playbook/types"

/** Nguồn: giáo trình Module 04 — WHY, bài 4.1 "App đẹp nhưng không có khách trả tiền" (20 phút). */
export const section: Section = {
  id: "bai-4-1",
  kicker: "WHY · Bài 4.1 · 20 phút",
  title: "App đẹp chưa chắc bán được — khách trả tiền vì kết quả",
  highlight: "vì kết quả",
  tocLabel: "4.1 · App đẹp chưa chắc bán được",
  lead: "Sản phẩm có nhiều màn hình, hiệu ứng và tính năng không mặc nhiên có giá trị cao. Khách trả tiền vì kết quả, không vì số lượng màn hình.",
  blocks: [
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-04/app-dep-chua-chac-ban-duoc.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic bài 4.1: so sánh App A có 30 chức năng, người dùng tìm nhiều phút mới bắt đầu, với App B có một lời hứa rõ “Luyện 5 câu hỏi phỏng vấn trong 10 phút”; ba câu hỏi cho người học và ba khái niệm Value Proposition, Friction, Feature Bloat.",
        caption: "Hình 3 · Bài 4.1 — hai app luyện phỏng vấn tiếng Anh, ba câu hỏi và ba khái niệm.",
      },
    },
    { type: "subheading", text: "Tình huống thực hành" },
    {
      type: "paragraph",
      text: "Hai ứng dụng cùng giúp người đi làm luyện phỏng vấn tiếng Anh:",
    },
    {
      type: "cards",
      columns: 2,
      items: [
        {
          title: "App A — 30 chức năng",
          text: "Học từ, nghe, đọc, nói, game, bảng xếp hạng, diễn đàn, thư viện… Người dùng phải tìm nhiều phút mới bắt đầu luyện phỏng vấn.",
        },
        {
          title: "App B — một lời hứa rõ",
          text: "Nói ngay “Luyện 5 câu hỏi phỏng vấn trong 10 phút”, bấm “Bắt đầu”, nói câu trả lời, nhận phản hồi hữu ích. Các tính năng mở rộng xuất hiện sau.",
        },
      ],
    },
    { type: "subheading", text: "Ba câu hỏi cho người học" },
    {
      type: "list",
      ordered: true,
      items: [
        "Người dùng mới hiểu app nào nhanh hơn?",
        "Nếu quay một video quảng cáo 10 giây, app nào dễ truyền đạt giá trị hơn?",
        "Chúng ta có bằng chứng nào chứng minh app B sẽ chuyển đổi tốt hơn, hay đây chỉ là giả thuyết?",
      ],
    },
    {
      type: "callout",
      label: "Kết luận",
      paragraphs: [
        "Đơn giản hơn **có thể** giảm ma sát (friction), nhưng kết quả cuối cùng phải được test. Thiết kế nên bắt đầu từ **một lời hứa giá trị có thể hiểu được**.",
      ],
    },
    { type: "subheading", text: "Ba khái niệm cần nắm" },
    {
      type: "cards",
      columns: 3,
      items: [
        {
          title: "Value Proposition",
          meta: "Lời hứa giá trị",
          text: "Tuyên bố ngắn gọn về kết quả mà sản phẩm mang lại cho một nhóm khách hàng cụ thể.",
        },
        {
          title: "Friction",
          meta: "Ma sát",
          text: "Những bước, câu hỏi, yêu cầu hoặc thao tác làm người dùng khó đạt mục đích; ví dụ bắt đăng ký dài trước khi thử sản phẩm.",
        },
        {
          title: "Feature Bloat",
          meta: "Phình tính năng",
          text: "Thêm quá nhiều chức năng làm sản phẩm khó dùng và khó giải thích.",
        },
      ],
    },
  ],
}
