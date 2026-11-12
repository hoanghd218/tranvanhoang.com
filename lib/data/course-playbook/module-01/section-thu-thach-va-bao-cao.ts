import type { Section } from "@/lib/course-playbook/types"

/** Nguồn: giáo trình Module 01, Phần IV — WHAT IF, bài 4.3 (Your Winning Market Challenge) và 4.4 (Final Deliverable — Market Fit Report). */
export const section: Section = {
  id: "thu-thach-va-bao-cao",
  kicker: "WHAT IF · Bài 4.3–4.4",
  title: "Thử thách cuối module và Market Fit Report",
  highlight: "Market Fit Report",
  tocLabel: "Thử thách & Market Fit Report",
  lead: "Bài tập độc lập cuối Module 01. Bạn dùng Master Prompt để nghiên cứu, nhưng không được chỉ sao chép đề xuất của AI.",
  blocks: [
    { type: "subheading", text: "Your Winning Market Challenge" },
    {
      type: "worksheet",
      id: "winning-market",
      title: "Bảy việc bạn phải làm",
      note: "Làm theo thứ tự. Ghi kết quả bằng chữ của bạn, kèm lý do và bằng chứng.",
      fields: [
        "Lập danh sách những thị trường phù hợp.",
        "Chọn ba thị trường để so sánh.",
        "Xác định niche, micro-niche và ICP.",
        "Tìm bằng chứng nhu cầu và hành vi trả tiền.",
        "Xác định kênh phân phối khả thi.",
        "Chấm Market Fit Score.",
        "Chọn một thị trường và bảo vệ quyết định.",
      ],
    },
    {
      type: "worksheet",
      id: "bao-ve-quyet-dinh",
      title: "Bảo vệ lựa chọn của bạn (Bước 7)",
      note: "Khi chốt một thị trường, bạn cần thể hiện được những điều sau.",
      fields: [
        "Vì sao chọn thị trường này?",
        "Vì sao không chọn hai thị trường còn lại?",
        "Những bằng chứng mạnh nhất là gì?",
        "Những rủi ro lớn nhất là gì?",
        "Những thông tin còn thiếu là gì?",
        "Cần tìm hiểu thêm điều gì trước khi quyết định phát triển sản phẩm?",
      ],
    },
    { type: "subheading", text: "Sản phẩm cuối: Market Fit Report" },
    {
      type: "paragraph",
      text: "Báo cáo cần có các thành phần dưới đây. Tick khi từng phần đã có trong báo cáo của bạn.",
    },
    {
      type: "checklist",
      id: "market-fit-report",
      title: "Market Fit Report có đủ chưa",
      items: [
        { title: "Executive Summary", text: "Tóm tắt quyết định lựa chọn." },
        { title: "Founder Profile", text: "Kinh nghiệm, sở thích, nguồn lực." },
        { title: "Market Longlist", text: "Danh sách thị trường đã nghiên cứu." },
        { title: "Top 3 Comparison", text: "So sánh ba thị trường tiềm năng." },
        { title: "Selected Market", text: "Thị trường ưu tiên." },
        { title: "Niche & ICP", text: "Phân khúc và khách hàng mục tiêu." },
        { title: "Problem Landscape", text: "Những nhóm vấn đề đáng nghiên cứu." },
        { title: "Demand Evidence", text: "Bằng chứng về nhu cầu." },
        { title: "Payment Evidence", text: "Bằng chứng hoặc giả thuyết về chi trả." },
        { title: "Competition & Gap", text: "Đối thủ và khoảng trống." },
        { title: "Distribution Map", text: "Khả năng tiếp cận khách hàng." },
        { title: "Market Fit Score", text: "Điểm số và lý do." },
        { title: "Risks & Unknowns", text: "Những điều còn thiếu bằng chứng." },
        { title: "Next Research Questions", text: "Những câu hỏi cần tiếp tục khám phá." },
      ],
    },
  ],
}
