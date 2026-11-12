import type { Section } from "@/lib/course-playbook/types"
import { figures } from "./figures"

/** Nguồn: giáo trình Module 01, Phần II — WHAT, bài 2.9 (Market Opportunity Filters — ba bộ lọc bổ sung). */
export const section: Section = {
  id: "ba-bo-loc",
  kicker: "WHAT · Bài 2.9",
  title: "Ba bộ lọc bổ sung trước khi chốt thị trường",
  highlight: "Ba bộ lọc",
  tocLabel: "3 bộ lọc bổ sung",
  lead: "Ngoài 5-Factor Market Fit, bạn cần đánh giá thêm ba bộ lọc, để không chọn thị trường chỉ vì sự hấp dẫn ban đầu.",
  blocks: [
    { type: "figure", figure: figures.baBoLoc },
    {
      type: "accordion",
      expandFirst: true,
      items: [
        {
          number: "1",
          title: "Competition & Gap",
          gloss: "Đối thủ và khoảng trống",
          blocks: [
            {
              type: "list",
              items: [
                "Đối thủ hiện tại là ai?",
                "Họ đang phục vụ nhóm nào?",
                "Có những lựa chọn thay thế nào?",
                "Khách hàng chưa hài lòng ở đâu?",
                "Có một phân khúc chưa được phục vụ tốt không?",
              ],
            },
          ],
        },
        {
          number: "2",
          title: "Market Size & Trend",
          gloss: "Quy mô và xu hướng",
          blocks: [
            {
              type: "list",
              items: [
                "Thị trường đủ lớn cho mục tiêu kinh doanh không?",
                "Nhu cầu tăng, ổn định hay suy giảm?",
                "Nhu cầu mang tính thời vụ hay lâu dài?",
                "Có xu hướng nào đang làm thay đổi thị trường?",
              ],
            },
          ],
        },
        {
          number: "3",
          title: "Feasibility & Risk",
          gloss: "Khả thi và rủi ro",
          blocks: [
            {
              type: "list",
              items: [
                "Founder có đủ nguồn lực nghiên cứu thị trường không?",
                "Có thể phục vụ nhu cầu bằng một sản phẩm hợp lý không?",
                "Có yêu cầu pháp lý hoặc chuyên môn đặc biệt không?",
                "Thị trường có rủi ro quá lớn về dữ liệu, niềm tin hoặc chính sách nền tảng không?",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "callout",
      label: "Nhớ",
      paragraphs: ["Hấp dẫn lúc đầu chưa đủ — phải qua được cả ba bộ lọc."],
    },
  ],
}
