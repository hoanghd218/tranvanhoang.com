import type { Section } from "@/lib/course-playbook/types"

// Nguồn: Phần II — WHAT, mục 2.1 (định nghĩa Business Validation) và 2.2 (Validation khác Product–Market Fit).

export const section: Section = {
  id: "what-dinh-nghia",
  kicker: "WHAT · Phần II · 2.1–2.2",
  title: "Business Validation là gì?",
  highlight: "Business Validation",
  tocLabel: "WHAT · Business Validation",
  lead: "Business Validation (kiểm chứng cơ hội kinh doanh) là quá trình thiết kế và thực hiện các hoạt động thu thập bằng chứng từ thị trường, để đánh giá những giả thuyết quan trọng quyết định khả năng tồn tại của một cơ hội kinh doanh.",
  blocks: [
    { type: "subheading", text: "Bốn thành phần cần khớp nhau" },
    {
      type: "paragraph",
      text: "Với mobile app, Validation xem xét mối quan hệ giữa bốn thành phần: **Customer → Problem → Solution → Business Model**.",
    },
    {
      type: "cards",
      columns: 4,
      items: [
        { title: "Customer", meta: "Khách hàng", text: "Nhóm người có vấn đề và có thể trở thành khách hàng." },
        { title: "Problem", meta: "Vấn đề", text: "Nhu cầu, khó khăn hoặc kết quả mà họ mong muốn." },
        { title: "Solution", meta: "Giải pháp", text: "Giải pháp mà ứng dụng đề xuất." },
        {
          title: "Business Model",
          meta: "Mô hình kinh doanh",
          text: "Cách sản phẩm tiếp cận khách hàng, tạo giá trị, thu tiền và duy trì hoạt động.",
        },
      ],
    },
    {
      type: "callout",
      label: "Một mắt xích không khớp",
      paragraphs: [
        "Nếu một trong các yếu tố này không phù hợp, cơ hội kinh doanh có thể không hiệu quả **dù ứng dụng hoạt động tốt**.",
      ],
    },
    { type: "subheading", text: "Validation khác Product–Market Fit" },
    {
      type: "paragraph",
      text: "Hai khái niệm này thường bị nhầm lẫn. Product–Market Fit (PMF) là trạng thái sản phẩm đáp ứng đủ tốt nhu cầu của một thị trường, thể hiện qua những dấu hiệu như sử dụng lặp lại, giữ chân người dùng, sẵn sàng thanh toán và nhu cầu có thể duy trì.",
    },
    {
      type: "table",
      head: ["So sánh", "Validation", "Product–Market Fit (PMF)"],
      rows: [
        [
          "**Là gì**",
          "Quá trình kiểm chứng những giả thuyết quan trọng để quyết định có nên tiếp tục đầu tư.",
          "Trạng thái sản phẩm đáp ứng đủ tốt nhu cầu của một thị trường.",
        ],
        [
          "**Trả lời câu hỏi**",
          "Có đáng tiếp tục đầu tư không?",
          "Sản phẩm có đang đáp ứng đủ tốt một thị trường thực tế không?",
        ],
      ],
    },
    {
      type: "callout",
      label: "Giới hạn của Validation trước MVP",
      paragraphs: [
        "Validation trước MVP chưa thể chứng minh PMF đầy đủ. Ví dụ, một landing page có 500 người đăng ký không chứng minh sản phẩm đã có PMF. Ngay cả 20 giao dịch đầu tiên cũng chưa đủ kết luận rằng ứng dụng sẽ giữ chân được khách hàng lâu dài.",
      ],
    },
  ],
}
