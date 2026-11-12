import type { Section } from "@/lib/course-playbook/types"
import { figureBlock } from "./helpers"

/**
 * Giáo trình Module 02 — Phần 2 WHAT · 06 Common Pitfalls:
 * bảng 12 sai lầm (tại sao nguy hiểm, cách khắc phục) và tình huống phản biện trên lớp.
 */
export const section: Section = {
  id: "sai-lam-can-tranh",
  kicker: "HOW · 06 Common Pitfalls",
  title: "12 sai lầm khi chọn ý tưởng app — và cách sửa",
  highlight: "12 sai lầm",
  tocLabel: "12 sai lầm cần tránh",
  lead: "Nhận diện những bẫy này trước khi đổ thời gian và tiền vào xây app.",
  blocks: [
    figureBlock(
      "12-sai-lam-8-tinh-huong-kho",
      "Infographic 12 sai lầm khi chọn ý tưởng app kèm lý do nguy hiểm và cách sửa, tình huống phản biện trên lớp về app đếm calo bằng AI giống hệt, và 8 tình huống WHAT IF cần biết cách xử lý.",
      "Hình 22 · 12 sai lầm và 8 tình huống khó — 8 tình huống xử lý nằm ở phần cuối module.",
    ),
    {
      type: "table",
      head: ["Sai lầm", "Tại sao nguy hiểm?", "Cách khắc phục"],
      rows: [
        [
          "Bắt đầu bằng tính năng AI",
          "Có thể tạo ra công nghệ mà không có nhu cầu",
          "Bắt đầu bằng Problem và Job-to-be-Done",
        ],
        [
          "Chỉ tìm ý tưởng hoàn toàn mới",
          "Bỏ qua thị trường đã có khách hàng",
          "Nghiên cứu nhu cầu và đối thủ",
        ],
        [
          "Thấy đối thủ kiếm tiền rồi sao chép nguyên bản",
          "Không có lý do để người dùng chuyển đổi",
          "Xác định Differentiation Wedge",
        ],
        [
          "Tin số liệu doanh thu ước tính tuyệt đối",
          "Dễ đánh giá sai quy mô và lợi nhuận",
          "Kiểm tra nguồn, ngày và loại chỉ số",
        ],
        [
          "Nhầm lượt xem với nhu cầu trả tiền",
          "Nội dung hấp dẫn chưa chắc bán được",
          "Kết hợp Distribution và Payment Evidence",
        ],
        [
          "Hỏi ChatGPT rồi tin ngay",
          "AI có thể tạo giả thuyết nghe hợp lý nhưng thiếu nguồn",
          "Bắt buộc có Evidence Log (nhật ký bằng chứng)",
        ],
        [
          "Chọn thị trường quá rộng",
          "Không rõ khách hàng chính",
          "Thu hẹp về một ICP và tình huống",
        ],
        [
          "Chọn niche quá hẹp",
          "Không đủ khách hàng hoặc doanh thu",
          "Kiểm tra quy mô và kinh tế đơn vị",
        ],
        [
          "Đánh giá thấp Distribution",
          "Có sản phẩm nhưng không tiếp cận được người mua",
          "Xác định kênh ngay từ Module 01",
        ],
        [
          "Chạy theo xu hướng quá muộn",
          "Nhu cầu có thể suy giảm trước khi sản phẩm ra mắt",
          "Kiểm tra độ bền vững và tốc độ triển khai",
        ],
        [
          "Không đánh giá rủi ro pháp lý",
          "App có thể không được phát hành hoặc vận hành hợp lệ",
          "Sàng lọc rủi ro trước khi chọn",
        ],
        [
          "Chỉ chọn ý tưởng có subscription",
          "Bỏ qua tiện ích, app theo sự kiện hoặc thanh toán một lần",
          "Chọn mô hình giá theo cách giá trị được tạo ra",
        ],
      ],
    },
    { type: "subheading", text: "Tình huống phản biện trên lớp" },
    {
      type: "paragraph",
      text: "Một học viên phát hiện ứng dụng AI calorie tracker (đếm calo bằng AI) có doanh thu rất cao và nói:",
    },
    {
      type: "quote",
      text: "Tôi sẽ xây một app giống hệt, giao diện đẹp hơn một chút và bán tại Mỹ.",
      by: "Học viên trong tình huống phản biện trên lớp",
    },
    {
      type: "paragraph",
      text: "Đừng vội đồng ý. Hãy hỏi:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Nhóm khách hàng cụ thể của bạn là ai?",
        "Vì sao họ không tiếp tục sử dụng ứng dụng đã quen?",
        "Bạn có thể tiếp cận họ ở kênh nào tốt hơn đối thủ?",
        "Bạn đã có bằng chứng rằng sự khác biệt về giao diện khiến khách hàng sẵn sàng chuyển đổi chưa?",
      ],
    },
    {
      type: "callout",
      label: "Kết luận",
      paragraphs: [
        "Nếu chưa trả lời được, bạn đang có một ý tưởng, chưa phải một cơ hội có đủ bằng chứng để lựa chọn.",
      ],
    },
  ],
}
