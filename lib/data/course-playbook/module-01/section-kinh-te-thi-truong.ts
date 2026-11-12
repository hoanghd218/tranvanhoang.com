import type { Section } from "@/lib/course-playbook/types"
import { figures } from "./figures"

/** Nguồn: giáo trình Module 01, Phần II — WHAT, bài 2.7 (Market Economics). */
export const section: Section = {
  id: "kinh-te-thi-truong",
  kicker: "WHAT · Bài 2.7",
  title: "Kinh tế thị trường: thị trường này có ra tiền không?",
  highlight: "có ra tiền không",
  tocLabel: "Kinh tế thị trường",
  lead: "Bảy thành phần cần đánh giá để biết một thị trường có khả năng tạo doanh thu hay không.",
  blocks: [
    { type: "figure", figure: figures.kinhTe },
    {
      type: "table",
      head: ["Thành phần", "Câu hỏi cần trả lời"],
      rows: [
        ["**Market Size** (quy mô thị trường)", "Số lượng khách hàng tiềm năng"],
        ["**Spending Behavior** (hành vi chi tiêu)", "Mức chi tiêu hiện tại"],
        ["**Purchase Frequency** (tần suất mua)", "Nhu cầu mua hoặc sử dụng xuất hiện bao lâu một lần"],
        ["**Price Sensitivity** (độ nhạy giá)", "Khách hàng nhạy cảm về giá đến đâu"],
        ["**Retention Potential** (khả năng giữ chân)", "Khách hàng có lý do quay lại không"],
        ["**Revenue Model Fit** (mô hình thu tiền phù hợp)", "Giá trị phù hợp thu tiền theo tháng, theo lần, theo mức sử dụng hay theo mô hình khác"],
        ["**Acquisition Economics** (kinh tế của việc có khách)", "Có khả năng thu hút khách hàng với chi phí hợp lý không"],
      ],
    },
    { type: "subheading", text: "TAM, SAM, SOM" },
    {
      type: "list",
      items: [
        "**TAM** (Total Addressable Market): thị trường tổng thể.",
        "**SAM** (Serviceable Available Market): thị trường sản phẩm có thể phục vụ.",
        "**SOM** (Serviceable Obtainable Market): phần thị trường có khả năng tiếp cận và chiếm lĩnh thực tế.",
      ],
    },
    {
      type: "paragraph",
      text: "Người mới bắt đầu không cần tính một TAM thật to bằng những giả định không đáng tin.",
    },
    {
      type: "callout",
      label: "Câu hỏi quan trọng hơn",
      paragraphs: ["Có đủ khách hàng sẵn sàng chi trả để thị trường này phù hợp với mục tiêu kinh doanh của tôi không?"],
    },
  ],
}
