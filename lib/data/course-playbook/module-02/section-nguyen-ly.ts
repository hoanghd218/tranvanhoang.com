import type { Section } from "@/lib/course-playbook/types"

/**
 * Giáo trình Module 02 — Phần 2 WHAT · 03 Core Philosophy: bảy nguyên lý tìm ý tưởng
 * (kèm bản đồ 6 con đường ở infographic).
 */
const IMG = "/images/course-playbook/module-02"

export const section: Section = {
  id: "bay-nguyen-ly",
  kicker: "WHAT · 03 Core Philosophy",
  title: "7 nguyên lý chọn ý tưởng",
  highlight: "7 nguyên lý",
  lead: "Bảy nguyên lý giúp bạn chọn ý tưởng bằng bằng chứng, không bằng cảm hứng.",
  blocks: [
    {
      type: "cards",
      columns: 2,
      items: [
        {
          title: "1 · Problem Before Features",
          meta: "Vấn đề trước, tính năng sau",
          text: "Xác định vấn đề trước khi nghĩ đến bộ tính năng.",
        },
        {
          title: "2 · Evidence Before Excitement",
          meta: "Bằng chứng trước hứng thú",
          text: "Không xem sự hứng thú của founder là bằng chứng thị trường.",
        },
        {
          title: "3 · Proven Demand Before Novelty",
          meta: "Nhu cầu đã có trước sự mới lạ",
          text: "Ưu tiên nhu cầu đã có dấu hiệu tồn tại hơn ý tưởng chỉ mới lạ.",
        },
        {
          title: "4 · Specific Customer Before Everyone",
          meta: "Một nhóm cụ thể trước số đông",
          text: "Giải quyết tốt cho một nhóm trước khi mở rộng.",
        },
        {
          title: "5 · Differentiation Before Cloning",
          meta: "Khác biệt trước sao chép",
          text: "Học mô hình thành công nhưng phải có lý do để khách hàng chuyển đổi.",
        },
        {
          title: "6 · Distribution Before Development",
          meta: "Phân phối trước phát triển",
          text: "Cần có một giả thuyết thu hút khách hàng khả thi.",
        },
        {
          title: "7 · Commitment Before Major Investment",
          meta: "Cam kết trước khi đầu tư lớn",
          text: "Chỉ tăng đầu tư khi có đủ bằng chứng về cơ hội.",
        },
      ],
    },
    {
      type: "callout",
      label: "Bài học cốt lõi",
      paragraphs: [
        "Không có một phương pháp tìm ý tưởng nào thắng trong mọi hoàn cảnh. Có founder tìm ý tưởng từ vấn đề cá nhân, có người học đối thủ, có người phát hiện nhu cầu trong cộng đồng, có người tìm thị trường ngách bị bỏ quên.",
        "Đó là lý do khoá học dạy đủ sáu phương pháp.",
      ],
    },
    {
      type: "figure",
      figure: {
        src: `${IMG}/7-nguyen-ly-6-con-duong.webp`,
        width: 1536,
        height: 1024,
        alt: "Infographic 7 nguyên lý chọn ý tưởng, bản đồ 6 con đường tìm cơ hội kèm case của từng con đường, và ví dụ Cal Buddy kết hợp bốn phương pháp.",
        caption: "Hình 4 · 7 nguyên lý và bản đồ 6 con đường tìm cơ hội — 6 con đường, không phải 6 bước theo thứ tự.",
      },
    },
  ],
}
