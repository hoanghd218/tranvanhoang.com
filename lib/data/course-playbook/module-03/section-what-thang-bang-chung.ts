import type { Section } from "@/lib/course-playbook/types"

// Nguồn: Phần II — WHAT, mục 2.5 (các cấp độ bằng chứng thị trường — Evidence Ladder).

export const section: Section = {
  id: "what-thang-bang-chung",
  kicker: "WHAT · Phần II · 2.5",
  title: "Thang bằng chứng: lời khen chưa phải bằng chứng",
  highlight: "Thang bằng chứng",
  tocLabel: "WHAT · Thang bằng chứng",
  lead: "Không phải tất cả bằng chứng đều có giá trị ngang nhau. Evidence Ladder (thang bằng chứng Validation) xếp bằng chứng từ yếu đến mạnh, theo mức độ khách hàng phải đánh đổi.",
  blocks: [
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-03/thang-bang-chung-va-commitment-metric.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic Thang bằng chứng: bậc thang bảy cấp từ 0 (ý tưởng, suy luận từ AI) đến 6 (mua lại, gia hạn), Commitment Metric theo loại app, bảy thành phần Validation Experiment, bảy điểm Customer Discovery tìm hiểu, công thức Landing Page Conversion và năm điều Validation không phải.",
        caption:
          "Hình 3 · Thang bằng chứng 0–6, Commitment Metric, Validation Experiment — thang do giáo trình tổng hợp, không phải thang đo chính thức.",
      },
    },
    {
      type: "table",
      caption: "Evidence Ladder — bảy cấp bằng chứng",
      head: ["Cấp độ", "Dạng bằng chứng", "Ý nghĩa"],
      rows: [
        ["**0**", "Ý tưởng và suy luận từ AI", "Mới là giả thuyết"],
        ["**1**", "Phản hồi, lời khen, ý kiến tích cực", "Có sự quan tâm ban đầu"],
        ["**2**", "Hành vi tìm kiếm, click, xem demo", "Có hành động khám phá"],
        ["**3**", "Đăng ký dùng thử, đặt lịch, cam kết tham gia", "Có ý định rõ hơn"],
        [
          "**4**",
          "Sử dụng prototype và hoàn thành hành động cốt lõi",
          "Có bằng chứng trải nghiệm giá trị",
        ],
        [
          "**5**",
          "Giao dịch thanh toán thật hoặc cam kết mua có điều kiện rõ ràng",
          "Có bằng chứng thương mại",
        ],
        [
          "**6**",
          "Mua lại, gia hạn hoặc tiếp tục sử dụng có giá trị",
          "Có bằng chứng ban đầu về khả năng duy trì",
        ],
      ],
    },
    {
      type: "callout",
      label: "Cách dùng thang này",
      paragraphs: [
        "Đây là thang đánh giá do tác giả tổng hợp cho khoá học, **không phải một thang đo chính thức** từ các case study.",
        "Thứ tự mang tính hướng dẫn. Bằng chứng cần được đánh giá theo chất lượng của mẫu, mức độ tự nguyện và bối cảnh.",
      ],
    },
    {
      type: "paragraph",
      text: "Ví dụ, một số khách hàng B2B trả phí triển khai thử có thể có giá trị hơn hàng trăm email đăng ký không đúng đối tượng.",
    },
  ],
}
