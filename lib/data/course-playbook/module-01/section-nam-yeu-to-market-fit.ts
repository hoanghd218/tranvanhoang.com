import type { Section } from "@/lib/course-playbook/types"
import { figures } from "./figures"

/** Nguồn: giáo trình Module 01, Phần II — WHAT, bài 2.3 (The 5-Factor Market Fit Intersection). */
export const section: Section = {
  id: "nam-yeu-to-market-fit",
  kicker: "WHAT · Bài 2.3",
  title: "Năm yếu tố chọn thị trường: 5-Factor Market Fit",
  highlight: "5-Factor Market Fit",
  tocLabel: "5-Factor Market Fit",
  lead: "Framework chính của module: **EXPERTISE × PASSION × DEMAND × PAYMENT × DISTRIBUTION** — chuyên môn, sở thích, nhu cầu, chi trả, phân phối. Hai yếu tố đầu thuộc nhóm Founder Fit (lợi thế của bạn), ba yếu tố sau thuộc nhóm Market Viability (mức khả thi của thị trường).",
  blocks: [
    {
      type: "table",
      head: ["Yếu tố", "Nghĩa", "Thuộc nhóm"],
      rows: [
        ["**EXPERTISE**", "Chuyên môn", "FOUNDER FIT"],
        ["**PASSION**", "Sở thích", "FOUNDER FIT"],
        ["**DEMAND**", "Nhu cầu", "MARKET VIABILITY"],
        ["**PAYMENT**", "Chi trả", "MARKET VIABILITY"],
        ["**DISTRIBUTION**", "Phân phối", "MARKET VIABILITY"],
      ],
    },
    {
      type: "output",
      label: "Giao nhau",
      text: "**FOUNDER FIT × MARKET VIABILITY → WINNING MARKET CANDIDATE** (ứng viên thị trường đáng làm).",
    },
    { type: "figure", figure: figures.namYeuTo },
    {
      type: "callout",
      label: "Đọc đúng framework",
      paragraphs: [
        "Năm yếu tố này không phải phép nhân toán học, cũng không phải điều kiện bắt buộc phải đạt tuyệt đối.",
        "Founder Fit tạo lợi thế khi tham gia thị trường. Market Viability giúp đánh giá cơ hội kinh doanh. Mức độ quan trọng của từng yếu tố có thể khác nhau giữa các founder và thị trường.",
      ],
    },
    { type: "subheading", text: "Đọc từng yếu tố" },
    {
      type: "accordion",
      expandFirst: true,
      items: [
        {
          number: "1",
          title: "EXPERTISE",
          gloss: "Chuyên môn và kinh nghiệm",
          question: "Mình hiểu nhóm khách nào hơn người mới?",
          blocks: [
            { type: "paragraph", text: "Cần khám phá:" },
            {
              type: "list",
              items: [
                "Nghề nghiệp hiện tại và quá khứ.",
                "Các ngành từng tham gia.",
                "Những công việc lặp lại.",
                "Các vấn đề từng xử lý.",
                "Các nhóm khách hàng đã phục vụ.",
                "Kiến thức chuyên môn người ngoài ngành khó có.",
                "Những nguồn lực hoặc mối quan hệ tạo lợi thế.",
              ],
            },
            { type: "paragraph", text: "Chuyên môn có thể đến từ việc trực tiếp làm nghề, điều hành doanh nghiệp hoặc tham gia cộng đồng trong nhiều năm." },
            { type: "callout", label: "Câu hỏi đánh giá", paragraphs: ["Tôi hiểu nhóm khách hàng hoặc công việc nào tốt hơn người mới hoàn toàn?"] },
          ],
        },
        {
          number: "2",
          title: "PASSION",
          gloss: "Sở thích và động lực",
          question: "Mình có muốn theo nó vài năm không?",
          blocks: [
            { type: "paragraph", text: "Cần đánh giá:" },
            {
              type: "list",
              items: [
                "Những chủ đề thường xuyên quan tâm.",
                "Hoạt động yêu thích.",
                "Cộng đồng muốn tham gia lâu dài.",
                "Những vấn đề bản thân muốn giải quyết.",
                "Mức độ sẵn sàng nghiên cứu sâu.",
              ],
            },
            { type: "paragraph", text: "Passion tạo lợi thế về động lực và khả năng kiên trì, nhưng không thay thế Demand và Payment." },
            { type: "paragraph", text: "Có những thị trường rất hấp dẫn về kinh doanh dù không nằm trong sở thích ban đầu của founder." },
          ],
        },
        {
          number: "3",
          title: "DEMAND",
          gloss: "Nhu cầu thị trường",
          question: "Họ có vấn đề đủ đau để tìm cách giải không?",
          blocks: [
            { type: "paragraph", text: "Một thị trường đáng nghiên cứu thường có một hoặc nhiều tín hiệu:" },
            {
              type: "list",
              items: [
                "Khách hàng đang tìm giải pháp.",
                "Những lời phàn nàn xuất hiện nhiều lần.",
                "Khách hàng đang dùng công cụ thay thế.",
                "Có ứng dụng hoặc dịch vụ đang phục vụ nhu cầu.",
                "Vấn đề gây tổn thất hoặc cản trở mục tiêu.",
                "Nhu cầu có thể tồn tại đủ lâu để phát triển sản phẩm.",
              ],
            },
            { type: "callout", label: "Câu hỏi đánh giá", paragraphs: ["Có bằng chứng khách hàng thực sự đang gặp một vấn đề đáng giải quyết không?"] },
          ],
        },
        {
          number: "4",
          title: "PAYMENT",
          gloss: "Khả năng và động lực trả tiền",
          question: "Họ có tiền VÀ có muốn chi cho việc này không?",
          blocks: [
            { type: "paragraph", text: "Phải phân biệt hai điều:" },
            {
              type: "list",
              items: [
                "**Ability to Pay** (khả năng trả tiền): khả năng tài chính của người mua.",
                "**Willingness to Pay** (sẵn lòng trả tiền): mức độ họ đánh giá giải pháp đáng để trả tiền.",
              ],
            },
            { type: "paragraph", text: "Các tín hiệu cho thấy họ có thể trả tiền:" },
            {
              type: "list",
              items: [
                "Đang trả tiền cho app tương tự.",
                "Đang mua dịch vụ liên quan.",
                "Đang thuê người làm thủ công.",
                "Đang dùng những giải pháp mất chi phí.",
                "Có kết quả kinh tế hoặc giá trị cá nhân quan trọng mà sản phẩm có thể cải thiện.",
              ],
            },
            { type: "callout", label: "Câu hỏi đánh giá", paragraphs: ["Khách hàng có lý do kinh tế hoặc giá trị đủ lớn để chi tiền không?"] },
          ],
        },
        {
          number: "5",
          title: "DISTRIBUTION",
          gloss: "Khả năng tiếp cận",
          question: "Mình tìm được 100 khách đầu tiên ở đâu?",
          blocks: [
            { type: "paragraph", text: "Các câu hỏi cần trả lời:" },
            {
              type: "list",
              items: [
                "Khách hàng đang tập trung ở đâu?",
                "Họ tìm thông tin qua kênh nào?",
                "Có cộng đồng chuyên môn nào phù hợp?",
                "Có người ảnh hưởng nào phục vụ nhóm này?",
                "Có đối tác đang sở hữu tệp khách hàng?",
                "Có thể tiếp cận qua search hoặc quảng cáo không?",
                "Nguồn lực của founder có phù hợp với kênh đó không?",
              ],
            },
            {
              type: "callout",
              label: "Câu hỏi đánh giá",
              paragraphs: ["Nếu app có sẵn ngày mai, tôi có con đường khả thi để đưa nó đến 100 khách hàng phù hợp đầu tiên không?"],
            },
          ],
        },
      ],
    },
  ],
}
