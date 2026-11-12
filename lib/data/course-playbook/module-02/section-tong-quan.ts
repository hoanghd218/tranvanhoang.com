import type { Section } from "@/lib/course-playbook/types"

/**
 * Giáo trình Module 02 — Phần 1 WHY · 01 Overview:
 * 1.1 vấn đề người học đang gặp · 1.2 câu chuyện mở đầu Marc Lou · 1.3 kết quả học tập.
 */
const IMG = "/images/course-playbook/module-02"

export const section: Section = {
  id: "tong-quan",
  kicker: "WHY · 01 Overview",
  title: "Từ ý tưởng ứng dụng đến cơ hội kinh doanh",
  highlight: "cơ hội kinh doanh",
  lead: "AI đã làm giảm đáng kể rào cản xây dựng phần mềm. Nhưng khả năng xây nhanh không đồng nghĩa với khả năng tìm được sản phẩm có người mua.",
  blocks: [
    {
      type: "figure",
      figure: {
        src: `${IMG}/bia-tim-co-hoi-kinh-doanh.webp`,
        width: 1536,
        height: 1024,
        alt: "Infographic mở đầu Module 02: 6 sai lầm của người mới, câu chuyện Marc Lou, 4 việc làm được sau module, hành trình 5 phiên học và dòng đầu vào Market Fit Report, đầu ra App Opportunity Brief.",
        caption: "Hình 1 · Tổng quan Module 02 — từ Market Fit Report đến App Opportunity Brief.",
      },
    },
    {
      type: "callout",
      label: "Chủ đề của module",
      paragraphs: [
        "Làm thế nào tìm được một ý tưởng Mobile App có tiềm năng trở thành doanh nghiệp, thay vì chỉ tạo ra một ứng dụng có nhiều tính năng?",
      ],
    },
    {
      type: "quote",
      text: "Đừng cố nghĩ ra một ứng dụng thật độc đáo. Hãy tìm một vấn đề có thật, một nhóm khách hàng có khả năng trả tiền, và một cách giải quyết hoặc phân phối tốt hơn những lựa chọn hiện tại.",
      by: "Big Idea · Module 02",
    },
    { type: "subheading", text: "Sai lầm điển hình của người mới" },
    {
      type: "list",
      items: [
        "Nghĩ ra một app nghe có vẻ hấp dẫn rồi lập tức xây.",
        "Yêu cầu ChatGPT tạo hàng trăm ý tưởng nhưng không nghiên cứu nhu cầu.",
        "Chọn ý tưởng chỉ vì thấy ứng dụng khác có doanh thu cao.",
        "Sao chép một ứng dụng thành công mà không có điểm khác biệt.",
        "Không biết mình sẽ bán cho ai và tiếp cận người đó ở đâu.",
        "Dành hàng tuần hoàn thiện app rồi mới phát hiện khách hàng không quan tâm.",
      ],
    },
    { type: "subheading", text: "Câu chuyện mở đầu — Marc Lou" },
    {
      type: "paragraph",
      text: "Marc Lou là người đã phát hành khoảng 35 startup. Trong cuộc phỏng vấn, anh chia sẻ rằng phần lớn sản phẩm anh từng ra mắt không tạo ra kết quả đáng kể. Anh nhấn mạnh việc liên tục đưa sản phẩm ra thị trường để học từ phản hồi thực tế, thay vì chờ một ý tưởng hoàn hảo.",
    },
    {
      type: "case",
      case: {
        title: "Marc Lou — ship để học",
        tag: "Case mở đầu · Solopreneur (người làm một mình)",
        columns: [
          {
            label: "Bối cảnh & cách tìm ra cơ hội",
            text: "**Bối cảnh:** maker làm một mình, ra mắt sản phẩm liên tục — nhiều app nhỏ, như app Mac nhắc ngồi thẳng qua webcam và bảng xếp hạng doanh thu đã xác minh (sau thành marketplace). **Tín hiệu:** ý tưởng đến từ thứ mình muốn có, hoặc từ tò mò khi thấy người ta khai khống doanh thu. **Cách làm:** ship nhanh → lấy phản hồi → thấy vấn đề mới → thành ý tưởng tiếp theo.",
          },
          {
            label: "Tìm khách & kết quả tự công bố",
            text: "**Tìm khách:** ra mắt bằng một tweet, rồi LinkedIn, Threads, Reddit; giá không nêu trong video. **Kết quả tự công bố:** ~$77.000/tháng tổng (mốc 0:36); ~35 startup, ~30 cái không ra gì (2:43); app tư thế ~$1.000 ngày đầu; marketplace 35K+/tháng.",
          },
          {
            label: "Bài học & câu hỏi phản biện",
            text: "**Bài học:** đừng ôm một dự án cưng — mỗi lần ship là một lần tung xúc xắc; xây nhanh chỉ có giá trị khi chọn đúng thứ để xây. **Founder nói (6:55):** “Cách duy nhất để kiểm chứng một ý tưởng là tung ra với một nút Mua.” **Phản biện:** anh có sẵn khán giả mua ngay ngày ra mắt — người mới ship nhiều có nhận được tín hiệu tương tự?",
          },
        ],
        source:
          "Nguồn: Starter Story — [How I Work: $77K/Month Solopreneur](https://www.youtube.com/watch?v=D4fkiQfzw_I), các mốc khoảng 0:36, 2:43 và 6:55. Số liệu do founder tự công bố, chưa kiểm chứng độc lập, không đại diện cho kết quả thông thường của người làm app.",
      },
    },
    {
      type: "figure",
      figure: {
        src: `${IMG}/case-00-marc-lou.webp`,
        width: 1536,
        height: 1024,
        alt: "Slide case Marc Lou theo khung 8 câu: maker làm một mình, ship nhanh để học, kết quả tự công bố khoảng $77.000/tháng và khoảng 35 startup trong đó phần lớn không ra gì, bài học và câu hỏi phản biện.",
        caption: "Hình 2 · Case mở đầu Marc Lou — số liệu founder tự công bố, chưa kiểm chứng độc lập.",
      },
    },
    {
      type: "callout",
      label: "Câu hỏi mở lớp",
      paragraphs: [
        "Nếu việc xây app chỉ mất vài ngày, tại sao vẫn có rất nhiều ứng dụng không kiếm được tiền?",
        "Xây nhanh chỉ có giá trị khi ta biết nên xây cái gì và tại sao nó đáng được xây.",
      ],
    },
    { type: "subheading", text: "Sau Module 02, bạn làm được bốn việc" },
    {
      type: "list",
      ordered: true,
      items: [
        "Tìm kiếm cơ hội bằng sáu phương pháp có ví dụ thực tế.",
        "Phân tích và so sánh các ứng dụng, vấn đề và khoảng trống thị trường.",
        "Dùng ChatGPT để nghiên cứu và phản biện những ý tưởng tiềm năng.",
        "Chọn ra một ý tưởng ưu tiên, kèm bằng chứng ban đầu và các giả thuyết cần kiểm chứng ở Module 03.",
      ],
    },
    {
      type: "callout",
      label: "Chưa cần chứng minh product-market fit",
      paragraphs: [
        "Module 02 không yêu cầu chứng minh product-market fit (sản phẩm khớp thị trường). Việc kiểm chứng sâu, phỏng vấn khách hàng và thử nghiệm thanh toán thuộc Module 03 — Validate.",
      ],
    },
    {
      type: "output",
      label: "Định vị Module 02",
      text: "**Đầu vào:** Market Fit Report (báo cáo thị trường từ Module 01) → **Quy trình:** 6 phương pháp tìm cơ hội + AI phỏng vấn + Red Team (phản biện) → **Đầu ra:** App Opportunity Brief. Tiếp theo: Module 03 — Validate.",
    },
  ],
}
