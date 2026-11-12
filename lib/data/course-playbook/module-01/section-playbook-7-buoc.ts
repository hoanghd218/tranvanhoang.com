import type { Section } from "@/lib/course-playbook/types"
import { figures } from "./figures"

/** Nguồn: giáo trình Module 01, Phần III — HOW, bài 3.1 (The 7-Step AI Market Discovery Playbook). */
export const section: Section = {
  id: "playbook-7-buoc",
  kicker: "HOW · Bài 3.1",
  title: "Playbook 7 bước dùng ChatGPT để chọn thị trường",
  highlight: "7 bước",
  tocLabel: "Playbook 7 bước",
  lead: "Phần WHY cho biết vì sao phải chọn đúng thị trường, phần WHAT cho biết một thị trường đáng đầu tư gồm những yếu tố nào. Phần HOW đưa kiến thức vào nghiên cứu thực tế bằng ChatGPT, và mỗi bước ra một kết quả.",
  blocks: [
    { type: "figure", figure: figures.bayBuoc },
    {
      type: "steps",
      items: [
        { title: "1 · SELF DISCOVERY", text: "Khám phá chuyên môn, sở thích, kinh nghiệm và lợi thế cá nhân.", output: "Founder Profile (hồ sơ founder)" },
        { title: "2 · MARKET GENERATION", text: "Tìm và lập danh sách những thị trường có tiềm năng.", output: "Market Longlist — khoảng 10 thị trường" },
        { title: "3 · CUSTOMER SEGMENTATION", text: "Chia thị trường thành niche, micro-niche và ICP.", output: "Customer Segment Map (bản đồ phân khúc khách hàng) và các ICP ban đầu" },
        { title: "4 · DEMAND & PAYMENT RESEARCH", text: "Nghiên cứu nhu cầu, hành vi chi tiền và giải pháp thay thế.", output: "Market Demand & Payment Evidence (bằng chứng nhu cầu và chi trả)" },
        { title: "5 · DISTRIBUTION MAPPING", text: "Xác định khách hàng đang ở đâu và cách tiếp cận.", output: "Distribution Accessibility Map (bản đồ khả năng tiếp cận khách hàng)" },
        { title: "6 · MARKET EVALUATION", text: "Chấm điểm, so sánh và lựa chọn Top 3.", output: "Top 3 Market Shortlist (danh sách rút gọn 3 thị trường)" },
        { title: "7 · MARKET SELECTION", text: "Lựa chọn một thị trường ưu tiên và tạo Market Fit Report.", output: "Market Fit Report hoàn chỉnh" },
      ],
    },
    { type: "subheading", text: "Chi tiết từng bước" },
    {
      type: "accordion",
      expandFirst: true,
      items: [
        {
          number: "1",
          title: "Self Discovery",
          gloss: "Hiểu lợi thế bạn đang có",
          blocks: [
            {
              type: "paragraph",
              text: "**Mục tiêu:** hiểu lợi thế bạn đang sở hữu. Dùng ChatGPT để hệ thống hoá thông tin về bản thân theo tám nhóm: Expertise (chuyên môn), Experience (kinh nghiệm), Passion (sở thích), Customer Knowledge (hiểu khách hàng), Network (quan hệ), Distribution Assets (tài sản phân phối), Resources (nguồn lực), Goals (mục tiêu). Trả lời ở bài tập ngay bên dưới.",
            },
          ],
        },
        {
          number: "2",
          title: "Market Generation",
          gloss: "Lập danh sách thị trường",
          blocks: [
            { type: "paragraph", text: "**Mục tiêu:** tạo danh sách những thị trường đáng nghiên cứu, chưa cần chọn ngay. Dùng ba phương pháp:" },
            {
              type: "list",
              items: [
                "**Founder-first:** thị trường xuất phát từ chuyên môn và sở thích.",
                "**Market-first:** thị trường đã có bằng chứng nhu cầu.",
                "**Distribution-first:** thị trường có khả năng tiếp cận qua audience hoặc đối tác.",
              ],
            },
            { type: "paragraph", text: "ChatGPT đề xuất khoảng 10 thị trường hoặc phân khúc. Mỗi đề xuất cần có lý do phù hợp và những rủi ro ban đầu." },
          ],
        },
        {
          number: "3",
          title: "Customer Segmentation",
          gloss: "Thu hẹp thành nhóm khách cụ thể",
          blocks: [
            { type: "paragraph", text: "**Mục tiêu:** từ thị trường rộng, xác định những phân khúc khách hàng cụ thể. Bạn cần trả lời:" },
            {
              type: "list",
              items: [
                "Niche nào hấp dẫn?",
                "Micro-niche nào có nhu cầu rõ ràng?",
                "Ai là người sử dụng?",
                "Ai quyết định mua?",
                "Ai thanh toán?",
                "Họ có đặc điểm, mục tiêu và hành vi gì?",
              ],
            },
            {
              type: "paragraph",
              text: "Ví dụ: Fitness (thể hình) → Strength Training (tập sức mạnh) → Beginners (người mới) → người mới bắt đầu tập gym và cần một chương trình đơn giản.",
            },
          ],
        },
        {
          number: "4",
          title: "Demand & Payment Research",
          gloss: "Tìm bằng chứng nhu cầu và chi trả",
          blocks: [
            { type: "paragraph", text: "**Mục tiêu:** tìm bằng chứng về nhu cầu và hành vi chi trả. Nghiên cứu:" },
            {
              type: "list",
              items: [
                "Những khó khăn lặp lại.",
                "Các sản phẩm, dịch vụ đang phục vụ nhóm khách hàng.",
                "Giá bán và mô hình thanh toán của đối thủ.",
                "Review tích cực và tiêu cực.",
                "Những cách khách hàng đang tự giải quyết vấn đề.",
                "Dữ liệu quy mô, xu hướng và hành vi tìm kiếm khi có nguồn phù hợp.",
              ],
            },
            { type: "paragraph", text: "ChatGPT hỗ trợ thu thập, phân loại, so sánh và tổng hợp. Bạn phải tự kiểm tra những kết luận quan trọng." },
          ],
        },
        {
          number: "5",
          title: "Distribution Mapping",
          gloss: "Vẽ bản đồ kênh tiếp cận",
          blocks: [
            { type: "paragraph", text: "**Mục tiêu:** xác định một hoặc nhiều con đường tiếp cận khách hàng. Với từng thị trường, tìm:" },
            {
              type: "list",
              items: [
                "Những cộng đồng tập trung ICP.",
                "Kênh social đang phục vụ nhóm khách hàng.",
                "Từ khoá thể hiện nhu cầu tìm kiếm.",
                "Creator hoặc chuyên gia có audience phù hợp.",
                "Đối tác, doanh nghiệp hoặc agency liên quan.",
                "Các kênh quảng cáo có thể thử nghiệm.",
              ],
            },
            { type: "callout", label: "Câu hỏi bắt buộc", paragraphs: ["Tôi có thể tìm 100 người phù hợp đầu tiên để nghiên cứu hoặc giới thiệu sản phẩm ở đâu?"] },
            { type: "paragraph", text: "Đây là kế hoạch tiếp cận ban đầu, chưa phải cam kết sẽ có 100 khách hàng trả tiền." },
          ],
        },
        {
          number: "6",
          title: "Market Evaluation",
          gloss: "Chấm điểm và chọn Top 3",
          blocks: [
            {
              type: "paragraph",
              text: "**Mục tiêu:** so sánh các thị trường bằng tiêu chí thống nhất. Dùng Market Fit Scorecard (xem Bài 3.3) để đánh giá nhu cầu, khả năng trả tiền, phân phối, lợi thế bản thân, cạnh tranh và rủi ro. Phải giải thích tại sao chấm điểm, không chỉ đưa ra một con số.",
            },
          ],
        },
        {
          number: "7",
          title: "Market Selection",
          gloss: "Chọn một thị trường ưu tiên",
          blocks: [
            { type: "paragraph", text: "**Mục tiêu:** chọn một thị trường ưu tiên để tiếp tục nghiên cứu cơ hội sản phẩm. Cần thể hiện:" },
            {
              type: "list",
              items: [
                "Vì sao chọn thị trường này?",
                "Vì sao không chọn hai thị trường còn lại?",
                "Những bằng chứng mạnh nhất?",
                "Những rủi ro lớn nhất?",
                "Những thông tin còn thiếu?",
                "Cần tìm hiểu thêm điều gì trước khi quyết định phát triển sản phẩm?",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "worksheet",
      id: "founder-profile",
      title: "Bài tập · Hồ sơ founder (Bước 1)",
      note: "Trả lời ngắn gọn bằng chữ của bạn. Mục nào chưa biết thì để trống. Hồ sơ này là nguyên liệu cho Phần A của Master Prompt ở Bài 3.5.",
      fields: [
        "Expertise — Tôi từng làm công việc gì, trong ngành nào?",
        "Experience — Tôi đã giải quyết những vấn đề nào?",
        "Passion — Tôi yêu thích và quan tâm lĩnh vực nào?",
        "Customer Knowledge — Tôi hiểu nhóm người nào nhất?",
        "Network — Tôi có quan hệ với những cộng đồng, cá nhân hay tổ chức nào?",
        "Distribution Assets — Tôi có website, mạng xã hội, email list hoặc audience nào?",
        "Resources — Tôi có bao nhiêu thời gian và ngân sách?",
        "Goals — Tôi muốn xây nguồn thu phụ hay doanh nghiệp dài hạn?",
      ],
    },
  ],
}
