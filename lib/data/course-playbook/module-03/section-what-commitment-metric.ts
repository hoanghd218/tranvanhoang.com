import type { Section } from "@/lib/course-playbook/types"

// Nguồn: Phần II — WHAT, mục 2.9 (Commitment Metric) và 2.10 (những khái niệm cần phân biệt).

export const section: Section = {
  id: "what-commitment-metric",
  kicker: "WHAT · Phần II · 2.9–2.10",
  title: "Commitment Metric và những điều Validation không phải",
  highlight: "Commitment Metric",
  tocLabel: "WHAT · Commitment Metric",
  lead: "Commitment Metric (chỉ số cam kết) đo một hành động cụ thể mà khách hàng phải thực hiện để chứng minh họ cam kết thực sự với giải pháp.",
  blocks: [
    {
      type: "paragraph",
      text: "Khác với các chỉ số quan tâm thông thường, hành động cam kết phải có một mức chi phí hoặc sự đánh đổi nhất định đối với khách hàng: **thời gian, công sức, cơ hội hoặc tiền bạc**.",
    },
    {
      type: "table",
      caption: "Commitment Metric phù hợp theo loại ứng dụng",
      head: ["Loại ứng dụng", "Commitment Metric phù hợp"],
      rows: [
        ["**App sự kiện**", "Chủ sự kiện đồng ý đưa app vào một sự kiện có ngày cụ thể"],
        ["**App học tập**", "Người học hoàn thành bài thử và đăng ký buổi luyện tiếp theo"],
        ["**App chuyên môn**", "Người dùng cung cấp tình huống thực tế để thử giải pháp"],
        ["**App doanh nghiệp**", "Doanh nghiệp cam kết một chương trình pilot (chạy thử)"],
        ["**App subscription** (app thu phí theo kỳ)", "Người dùng thanh toán thật hoặc tham gia chương trình beta (thử nghiệm) trả phí"],
        ["**App tiện ích**", "Người dùng chủ động thử ứng dụng để giải quyết tác vụ thật"],
      ],
    },
    {
      type: "callout",
      label: "Điều kiện quan trọng",
      paragraphs: [
        "Chọn Commitment Metric **trước khi thực hiện thử nghiệm**, thay vì nhìn kết quả rồi mới chọn một chỉ số đẹp để báo cáo.",
      ],
    },
    { type: "subheading", text: "Những khái niệm cần phân biệt" },
    {
      type: "table",
      head: ["Validation không phải…", "Khác ở đâu"],
      rows: [
        [
          "**Market Research** (nghiên cứu thị trường)",
          "Market Research giúp hiểu thị trường; Validation đòi hỏi kiểm chứng các giả thuyết cụ thể bằng bằng chứng có liên quan.",
        ],
        [
          "**Marketing Campaign** (chiến dịch marketing)",
          "Một chiến dịch marketing có thể là công cụ kiểm chứng, nhưng lượt tiếp cận lớn không tự động chứng minh nhu cầu mua hàng.",
        ],
        [
          "**A/B Testing** (thử so sánh hai phương án)",
          "A/B Testing là một kỹ thuật so sánh những phương án khác nhau. Nó chỉ là một phần trong hệ thống Validation.",
        ],
        [
          "**Launch** (ra mắt)",
          "Validation có thể diễn ra trước, trong và sau khi ra mắt. Launch là đưa sản phẩm đến thị trường thực tế ở quy mô thích hợp.",
        ],
        [
          "**Bảo đảm thành công**",
          "Kết quả thử nghiệm chỉ làm giảm một phần sự không chắc chắn. Nó không loại bỏ hoàn toàn rủi ro thị trường.",
        ],
      ],
    },
  ],
}
