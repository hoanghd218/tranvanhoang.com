import type { Section } from "@/lib/course-playbook/types"
import { figures } from "./figures"

/** Nguồn: giáo trình Module 01, Phần III — HOW, bài 3.3 (Market Fit Scorecard). */
export const section: Section = {
  id: "scorecard",
  kicker: "HOW · Bài 3.3",
  title: "Market Fit Scorecard: chấm 100 điểm để so sánh và chọn",
  highlight: "so sánh và chọn",
  tocLabel: "Scorecard 100 điểm",
  lead: "Hệ thống chấm điểm 100 để bạn so sánh các thị trường với nhau. Đây là phương pháp sàng lọc, không phải công thức dự báo khả năng thành công.",
  blocks: [
    {
      type: "table",
      head: ["Yếu tố", "Trọng số"],
      rows: [
        ["**Demand** (nhu cầu)", "20"],
        ["**Payment** (chi trả)", "20"],
        ["**Distribution** (phân phối)", "20"],
        ["**Expertise** (chuyên môn)", "15"],
        ["**Competition Gap** (khoảng trống cạnh tranh)", "10"],
        ["**Passion** (sở thích)", "5"],
        ["**Market Size & Trend** (quy mô và xu hướng)", "5"],
        ["**Feasibility & Risk** (khả thi và rủi ro)", "5"],
        ["**Tổng**", "**100**"],
      ],
    },
    { type: "subheading", text: "Cách chấm" },
    { type: "paragraph", text: "Mỗi tiêu chí được đánh giá từ 0 đến 5, sau đó nhân với trọng số." },
    {
      type: "output",
      label: "Công thức",
      text: "**Market Score = tổng của (điểm chấm ÷ 5) × trọng số**, cộng cho cả 8 tiêu chí.",
    },
    {
      type: "list",
      items: ["**Điểm chấm:** từ 0 đến 5 cho từng tiêu chí.", "**Trọng số:** số ở bảng trên."],
    },
    {
      type: "callout",
      label: "Ví dụ minh hoạ cách tính",
      paragraphs: [
        "Nếu bạn chấm Demand là 4/5 thì quy ra (4 ÷ 5) × 20 = 16 điểm. Làm tương tự cho bảy tiêu chí còn lại rồi cộng lại.",
        "Mỗi điểm phải kèm lý do và mức độ tin cậy của bằng chứng, không chỉ là một con số.",
      ],
    },
    { type: "figure", figure: figures.chamDiem },
    { type: "subheading", text: "Đọc điểm tổng" },
    {
      type: "table",
      head: ["Điểm", "Quyết định"],
      rows: [
        ["80–100", "Ưu tiên nghiên cứu sâu"],
        ["65–79", "Đáng cân nhắc, cần bổ sung bằng chứng"],
        ["Dưới 65", "Xem xét lại hoặc so sánh với lựa chọn khác"],
      ],
    },
    {
      type: "callout",
      label: "Không chỉ nhìn điểm tổng",
      paragraphs: [
        "Nếu một thị trường hoàn toàn thiếu bằng chứng về nhu cầu hoặc người mua, bạn phải đánh dấu rủi ro trọng yếu, ngay cả khi các tiêu chí khác đạt điểm cao.",
        "Điểm cao cũng không phải bằng chứng đã đạt product-market fit (sản phẩm khớp thị trường).",
      ],
    },
  ],
}
