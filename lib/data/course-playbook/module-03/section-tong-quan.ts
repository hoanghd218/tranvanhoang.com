import type { Section } from "@/lib/course-playbook/types"

// Nguồn: phần mở đầu giáo trình Module 03 — thông điệp cốt lõi, liên kết Module 02/04, cấu trúc 4MAT, kết quả học tập.

export const section: Section = {
  id: "tong-quan",
  kicker: "Tổng quan · Module 03",
  title: "Thu thập bằng chứng trước khi bỏ tiền xây app",
  highlight: "bằng chứng",
  tocLabel: "Tổng quan",
  lead: "Module 03 kiểm chứng nhu cầu thị trường và khả năng thương mại hoá một ý tưởng mobile app, trước khi bạn đầu tư phát triển sản phẩm.",
  blocks: [
    {
      type: "callout",
      label: "Thông điệp cốt lõi",
      paragraphs: [
        "Đừng xây dựng một ứng dụng chỉ vì bạn tin rằng nó có ích. Hãy thu thập bằng chứng cho thấy một nhóm khách hàng cụ thể **thực sự có vấn đề, quan tâm đến giải pháp, sẵn sàng hành động và có khả năng trả tiền**.",
      ],
    },
    { type: "subheading", text: "Module 03 nằm ở đâu trong lộ trình" },
    {
      type: "cards",
      columns: 3,
      items: [
        {
          title: "Module 02 — Opportunity",
          meta: "Đầu vào",
          text: "Bạn đã chọn một ý tưởng mobile app và có giả thuyết về khách hàng, vấn đề, giải pháp, giá bán và kênh phân phối.",
        },
        {
          title: "Module 03 — Validate",
          meta: "Bạn đang ở đây",
          text: "Thu thập bằng chứng để kiểm tra những giả thuyết đó trước khi đầu tư lớn.",
        },
        {
          title: "Module 04 — Design",
          meta: "Đầu ra được dùng tiếp",
          text: "Chỉ những giả thuyết có đủ bằng chứng mới được dùng để thiết kế Product Blueprint (bản thiết kế tổng thể sản phẩm) và phạm vi MVP (bản dùng được tối thiểu).",
        },
      ],
    },
    { type: "subheading", text: "Cấu trúc 4MAT: bốn câu hỏi dẫn cả module" },
    {
      type: "paragraph",
      text: "4MAT là mô hình thiết kế hoạt động học tập của Bernice McCarthy, tổ chức quá trình học qua bốn câu hỏi: Why (tại sao), What (là gì), How (làm thế nào) và What If (nếu thì sao). Module này dùng 4MAT để sắp xếp kiến thức, từ nhận thức vấn đề đến áp dụng và phát triển tư duy độc lập.",
    },
    {
      type: "table",
      head: ["Phần", "Câu hỏi", "Nội dung"],
      rows: [
        [
          "**01 — WHY**",
          "Tại sao phải kiểm chứng trước khi xây?",
          "Hiểu rủi ro, sai lầm phổ biến và giá trị kinh doanh của Validation (kiểm chứng)",
        ],
        [
          "**02 — WHAT**",
          "Validation là gì và gồm những thành phần nào?",
          "Định nghĩa, khái niệm, nguyên lý, giả thuyết và hệ thống bằng chứng",
        ],
        [
          "**03 — HOW**",
          "Làm thế nào kiểm chứng một ý tưởng app?",
          "Quy trình thực hiện, phương pháp nghiên cứu, thử nghiệm, công cụ và phân tích kết quả",
        ],
        [
          "**04 — WHAT IF**",
          "Điều gì xảy ra khi kết quả không như kỳ vọng?",
          "Phân tích tình huống, ra quyết định Go/Pivot/Kill (tiếp tục · điều chỉnh · dừng) và vận dụng vào những thị trường khác nhau",
        ],
      ],
    },
    {
      type: "output",
      label: "Sản phẩm đầu ra của module",
      text: "**Validation Report** — gọi đầy đủ trong giáo trình là Validation Decision Report: bản kết luận dựa trên bằng chứng và quyết định GO, PIVOT hoặc KILL/PARK.",
    },
    {
      type: "output",
      label: "Kết quả học tập mong đợi",
      text: "Sau module, bạn tự xây dựng và thực hiện được một **Validation Plan** (kế hoạch kiểm chứng), đánh giá được mức độ tin cậy của bằng chứng thu được và quyết định có nên đầu tư xây ứng dụng hay không.",
    },
  ],
}
