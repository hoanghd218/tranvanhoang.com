import type { Section } from "@/lib/course-playbook/types"

// Nguồn: Phần VII — Tiêu chuẩn đánh giá học viên (thang 100 điểm) và điều kiện hoàn thành Module 03.

export const section: Section = {
  id: "tieu-chuan-danh-gia",
  kicker: "Đánh giá · Phần VII",
  title: "Chấm theo năng lực nghiên cứu và ra quyết định",
  highlight: "ra quyết định",
  tocLabel: "Thang chấm 100 điểm",
  lead: "Bạn không được đánh giá dựa trên số người đăng ký waitlist hay độ hấp dẫn của ý tưởng. Module 03 chấm khả năng nghiên cứu và đưa ra quyết định.",
  blocks: [
    {
      type: "table",
      caption: "Thang 100 điểm của Module 03",
      head: ["Năng lực", "Điểm"],
      rows: [
        ["Xác định rõ bốn giả thuyết kinh doanh", "15"],
        ["Chất lượng Customer Discovery", "20"],
        ["Chất lượng nghiên cứu đối thủ và giải pháp thay thế", "10"],
        ["Thiết kế Offer và các thử nghiệm phù hợp", "15"],
        ["Khả năng kiểm chứng kênh phân phối", "15"],
        ["Chất lượng Commitment Evidence", "15"],
        ["Phân tích dữ liệu và ra quyết định hợp lý", "10"],
        ["**Tổng**", "**100**"],
      ],
    },
    {
      type: "callout",
      label: "Dừng ý tưởng vẫn có thể đạt điểm cao",
      paragraphs: [
        "Một học viên quyết định dừng ý tưởng dựa trên bằng chứng tốt vẫn có thể đạt điểm cao. Ngược lại, một học viên thu hút được nhiều lượt xem nhưng không hiểu những lượt xem đó đại diện cho điều gì thì chưa hoàn thành mục tiêu của Module 03.",
      ],
    },
    { type: "subheading", text: "Điều kiện hoàn thành Module 03" },
    {
      type: "checklist",
      id: "dieu-kien-hoan-thanh",
      title: "Ba năng lực cần chứng minh được",
      intro: "Tick khi bạn có thể chứng minh năng lực đó bằng chính bài làm của mình.",
      items: [
        {
          title: "Biết cách đặt câu hỏi đúng về thị trường",
          text: "Không chỉ hỏi liệu ý tưởng có hay, mà biết xác định khách hàng, vấn đề, giải pháp, hành vi thanh toán và kênh phân phối.",
        },
        {
          title: "Biết cách thu thập và đánh giá bằng chứng thực tế",
          text: "Có khả năng thiết kế thử nghiệm, ghi nhận hành vi, hiểu giới hạn dữ liệu và không nhầm lẫn giữa sự quan tâm với khả năng mua hàng.",
        },
        {
          title: "Biết cách ra quyết định đầu tư",
          text: "Có thể giải thích vì sao nên tiếp tục, thay đổi hoặc dừng một ý tưởng, dựa trên kết quả kiểm chứng và nguồn lực hiện có.",
        },
      ],
    },
  ],
}
