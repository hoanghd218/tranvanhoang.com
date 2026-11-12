import type { Section } from "@/lib/course-playbook/types"
import { figures } from "./figures"

/** Nguồn: giáo trình Module 01, Phần III — HOW, bài 3.2 (Market Research Toolkit và ba cấp độ bằng chứng). */
export const section: Section = {
  id: "cong-cu-va-bang-chung",
  kicker: "HOW · Bài 3.2",
  title: "Công cụ nghiên cứu thị trường và ba cấp độ bằng chứng",
  highlight: "ba cấp độ bằng chứng",
  tocLabel: "Công cụ & bằng chứng",
  lead: "Module 01 dùng nguồn công khai và dữ liệu bạn đã có. Mỗi công cụ giúp tìm một thứ khác nhau.",
  blocks: [
    { type: "figure", figure: figures.congCu },
    {
      type: "table",
      head: ["Nguồn", "Mục đích"],
      rows: [
        ["**App Store / Google Play**", "Xác định đối thủ, pricing (giá), review, ứng dụng hiện có"],
        ["**Appfigures / Sensor Tower**", "Ước lượng xu hướng và hoạt động của thị trường app"],
        ["**Google Search / Google Trends**", "Nghiên cứu nhu cầu tìm kiếm"],
        ["**Reddit / Discord**", "Khám phá vấn đề và cộng đồng ngách"],
        ["**YouTube / TikTok**", "Phát hiện chủ đề quan tâm và kênh phân phối"],
        ["**Website đối thủ**", "Phân tích khách hàng, định vị, giá"],
        ["**Industry Reports** (báo cáo ngành)", "Đánh giá quy mô và xu hướng"],
        ["**ChatGPT**", "Hỗ trợ nghiên cứu, so sánh, phân tích và đề xuất"],
      ],
    },
    {
      type: "callout",
      label: "Khi dùng ChatGPT",
      paragraphs: ["AI giúp tìm nhanh — bạn vẫn phải tự kiểm từng nguồn."],
    },
    { type: "subheading", text: "Ba cấp độ bằng chứng" },
    {
      type: "table",
      head: ["Loại", "Ý nghĩa"],
      rows: [
        ["**Hypothesis** (giả thuyết)", "Nhận định chưa có dữ liệu xác minh"],
        ["**Secondary Evidence** (bằng chứng thứ cấp)", "Bằng chứng từ nguồn công khai, báo cáo hoặc đối thủ"],
        ["**Direct Evidence** (bằng chứng trực tiếp)", "Phản hồi hoặc hành vi thực tế từ khách hàng mục tiêu"],
      ],
    },
    {
      type: "callout",
      label: "Module 01 dùng mức nào",
      paragraphs: [
        "Module 01 chủ yếu dùng nghiên cứu thứ cấp và những dữ liệu trực tiếp bạn đã có.",
        "Việc kiểm chứng sâu bằng phỏng vấn, thử nghiệm và thanh toán thuộc Module 03.",
      ],
    },
  ],
}
