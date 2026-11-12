import type { Section } from "@/lib/course-playbook/types"

/**
 * Giáo trình Module 02 — 04 Opportunity Discovery Framework · Tổng kết sáu phương pháp
 * (bảng lợi thế nổi bật và rủi ro chính của từng phương pháp).
 */
export const section: Section = {
  id: "tong-ket-sau-phuong-phap",
  kicker: "WHAT · 04 Tổng kết sáu phương pháp",
  title: "Nghiên cứu đủ sáu, rồi chọn hai hoặc ba hướng",
  highlight: "hai hoặc ba hướng",
  tocLabel: "Tổng kết sáu phương pháp",
  lead: "Không bắt buộc phải chọn cả sáu hướng. Hãy nghiên cứu đủ sáu, sau đó chọn hai hoặc ba hướng có khả năng tạo cơ hội tốt nhất trong thị trường đã chọn.",
  blocks: [
    {
      type: "table",
      head: ["Phương pháp", "Lợi thế nổi bật", "Rủi ro chính"],
      rows: [
        ["**Solve Your Own Problem**", "Hiểu vấn đề sâu", "Có thể chỉ bản thân cần"],
        [
          "**Proven App** (app đã có người mua)",
          "Có nhu cầu thị trường làm tham chiếu",
          "Cạnh tranh và khác biệt yếu",
        ],
        [
          "**Localization** (bản địa hoá)",
          "Hiểu khách hàng địa phương",
          "Phân khúc quá nhỏ hoặc không đủ chi trả",
        ],
        [
          "**Community Pain Mining**",
          "Có ngôn ngữ và phản hồi khách hàng thật",
          "Lời phàn nàn không đồng nghĩa với ý định mua",
        ],
        [
          "**Emerging Trend** (xu hướng mới)",
          "Có cơ hội xuất hiện sớm",
          "Xu hướng ngắn hạn, rủi ro tuân thủ",
        ],
        [
          "**Hidden Niche** (ngách bị bỏ quên)",
          "Ít cạnh tranh trực diện hơn trong một số trường hợp",
          "Khách hàng khó tìm hoặc quy mô không đủ",
        ],
      ],
    },
  ],
}
