import type { Section } from "@/lib/course-playbook/types"
import { figures } from "./figures"

/** Nguồn: giáo trình Module 01, phần Tổng quan (mục tiêu, phạm vi, cấu trúc 4MAT, workflow tổng thể). */
export const section: Section = {
  id: "tong-quan",
  kicker: "Tổng quan",
  title: "Chọn đúng thị trường trước khi xây app bằng AI",
  highlight: "đúng thị trường",
  tocLabel: "Tổng quan",
  lead: "Find Your Winning Market (tìm thị trường đáng làm). Cuối module, bạn có một Winning Market Candidate (ứng viên thị trường đáng làm) kèm bằng chứng sơ bộ — chưa phải một thị trường đã được kiểm chứng hoàn toàn.",
  blocks: [
    { type: "figure", figure: figures.bia },
    { type: "subheading", text: "Sau module này, bạn làm được gì" },
    {
      type: "list",
      ordered: true,
      items: [
        "Hiểu vì sao chọn thị trường quan trọng hơn việc chỉ tìm một ý tưởng app thú vị.",
        "Phân biệt Market (thị trường), Niche (ngách), Micro-niche (ngách hẹp), ICP (chân dung khách hàng mục tiêu lý tưởng), User (người dùng) và Buyer (người trả tiền).",
        "Dùng bảy nguyên tắc BEFORE để tư duy về cơ hội kinh doanh.",
        "Tìm thị trường phù hợp từ chuyên môn, sở thích, nhu cầu, khả năng chi trả và phân phối.",
        "Nghiên cứu nhu cầu, cạnh tranh, quy mô và các kênh tiếp cận khách hàng.",
        "Dùng ChatGPT để khám phá, so sánh và đánh giá thị trường.",
        "Chọn một thị trường ưu tiên dựa trên bằng chứng và biết phản biện lựa chọn đó.",
      ],
    },
    { type: "subheading", text: "Module này trả lời" },
    {
      type: "list",
      items: [
        "Tôi nên phục vụ thị trường nào?",
        "Nhóm khách hàng nào đáng quan tâm?",
        "Họ có những nhu cầu và vấn đề gì?",
        "Họ có khả năng trả tiền không?",
        "Tôi có thể tiếp cận họ ở đâu?",
        "Tôi có lợi thế gì khi tham gia thị trường này?",
      ],
    },
    {
      type: "callout",
      label: "Module 01 chưa làm",
      paragraphs: ["Chốt một ý tưởng ứng dụng cụ thể, xây danh sách tính năng, thiết kế UI (giao diện), lập trình hay triển khai chiến dịch bán hàng."],
    },
    { type: "subheading", text: "Giáo trình đi theo 4MAT" },
    {
      type: "paragraph",
      text: "4MAT quyết định thứ tự học: **WHY → WHAT → HOW → WHAT IF**. Giáo trình còn bám 10-Point Framework để nội dung có đủ định nghĩa, triết lý, framework, thành phần, sai lầm, quy trình, ví dụ, AI Practice (thực hành với AI) và đánh giá. Ba trụ chính của module: **7 BEFORE Principles** (bảy nguyên tắc làm trước làm sau), **5-Factor Market Fit** (năm yếu tố chọn thị trường) và **Market Fit Report** (báo cáo mức phù hợp của thị trường) là sản phẩm cuối của bạn.",
    },
    {
      type: "table",
      head: ["Giai đoạn", "Nội dung", "Kết quả"],
      rows: [
        ["**WHY**", "Vấn đề, lý do, hậu quả, lợi ích", "Hiểu tại sao phải chọn đúng thị trường"],
        ["**WHAT**", "Định nghĩa, triết lý, framework (khung làm việc) và kiến thức nền", "Hiểu một thị trường tốt gồm những yếu tố nào"],
        ["**HOW**", "Phương pháp, workflow (quy trình), scorecard (bảng chấm điểm) và ChatGPT", "Biết cách tự nghiên cứu và lựa chọn"],
        ["**WHAT IF**", "Case study (ca thực tế), phản biện, vận dụng và quyết định", "Chọn được một thị trường có cơ sở"],
      ],
    },
    { type: "subheading", text: "Workflow tổng thể" },
    {
      type: "steps",
      items: [
        { title: "SELF DISCOVERY", text: "Khám phá lợi thế bản thân." },
        { title: "MARKET DISCOVERY", text: "Tìm các thị trường tiềm năng." },
        { title: "CUSTOMER SEGMENTATION", text: "Xác định niche và ICP." },
        { title: "MARKET RESEARCH", text: "Nhu cầu · Chi trả · Cạnh tranh · Phân phối." },
        { title: "EVALUATE & SELECT", text: "So sánh và lựa chọn dựa trên bằng chứng." },
      ],
    },
    { type: "output", label: "Sản phẩm hoàn thành Module 01", text: "**Market Fit Report** — báo cáo chốt thị trường để bạn mang sang Module 02." },
    {
      type: "callout",
      label: "Tên sản phẩm đầu ra",
      paragraphs: [
        "Trong khung tổng của khoá, sản phẩm đầu ra của Module 01 ghi là **Market Opportunity Report**. Trong giáo trình này, báo cáo cuối được gọi là **Market Fit Report**. Hai tên chỉ cùng một sản phẩm cuối của module.",
      ],
    },
  ],
}
