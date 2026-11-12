import type { Section } from "@/lib/course-playbook/types"

// Nguồn: Phần III — HOW, đoạn mở đầu (bảy bước thực hiện) + lịch 14 ngày ở mục 5.2 (chỉ dùng để gắn mốc ngày vào từng bước).

export const section: Section = {
  id: "how-quy-trinh",
  kicker: "HOW · Phần III · Quy trình",
  title: "Bảy bước kiểm chứng một ý tưởng app",
  highlight: "Bảy bước",
  tocLabel: "HOW · Quy trình 7 bước",
  lead: "Phần này chuyển các khái niệm đã học thành hành động. Quy trình gồm 7 bước, tương ứng với bảy thành phần của Module 03. Mỗi bước kết thúc bằng một sản phẩm đầu ra cầm được.",
  blocks: [
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-03/bay-buoc-kiem-chung-trong-14-ngay.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic 7 bước kiểm chứng một ý tưởng app trong 14 ngày: mỗi bước có ngày thực hiện, việc cần làm, phương pháp chính và tài liệu đầu ra; kèm cách hỏi phỏng vấn đúng và sai, các loại CTA theo mức cam kết tăng dần và sáu vai trò của ChatGPT.",
        caption:
          "Hình 4 · Bảy bước kiểm chứng và lịch thực hành 14 ngày — lịch đề xuất, các bước có thể chồng lấn.",
      },
    },
    {
      type: "steps",
      items: [
        {
          title: "Define Hypotheses",
          meta: "Bước 1 · ngày 1–2 trong lịch mẫu",
          text: "Xác định những giả thuyết quan trọng cần kiểm chứng.",
          output: "Validation Brief",
        },
        {
          title: "Customer Discovery",
          meta: "Bước 2 · ngày 3–5",
          text: "Nghiên cứu, quan sát và phỏng vấn khách hàng.",
          output: "Customer Discovery Report",
        },
        {
          title: "Competitor & Alternative Validation",
          meta: "Bước 3 · ngày 6–7",
          text: "Phân tích bằng chứng thị trường và cách khách hàng đang giải quyết vấn đề.",
          output: "Competitor Validation Report",
        },
        {
          title: "Offer Validation",
          meta: "Bước 4 · ngày 6–7",
          text: "Thử lời hứa giá trị, giá bán và đề nghị sử dụng.",
          output: "Validated Offer Hypothesis",
        },
        {
          title: "Distribution Validation",
          meta: "Bước 5 · ngày 8–10",
          text: "Kiểm chứng khả năng tiếp cận đúng khách hàng.",
          output: "Initial Distribution Validation Report",
        },
        {
          title: "Commitment Test",
          meta: "Bước 6 · ngày 11–12",
          text: "Đo hành vi sử dụng, cam kết hoặc thanh toán thực tế.",
          output: "Commitment Evidence",
        },
        {
          title: "Evidence Review & Decision",
          meta: "Bước 7 · ngày 13–14",
          text: "Tổng hợp bằng chứng, đánh giá rủi ro và quyết định Go / Pivot / Kill.",
          output: "Evidence Report và Validation Decision Report",
        },
      ],
    },
    {
      type: "callout",
      label: "Lưu ý về lịch",
      paragraphs: [
        "Lịch ngày chỉ là lịch thực hành đề xuất, không phải yêu cầu cố định hay bảo đảm thu đủ bằng chứng. Các hoạt động có thể chồng lấn — bạn không cần ngừng phỏng vấn khi đang thử landing page.",
      ],
    },
  ],
}
