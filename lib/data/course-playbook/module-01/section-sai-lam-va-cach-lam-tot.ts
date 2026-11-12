import type { Section } from "@/lib/course-playbook/types"

/** Nguồn: giáo trình Module 01, Phần III — HOW, bài 3.4 (Pitfalls & Best Practices). */
export const section: Section = {
  id: "sai-lam-va-cach-lam-tot",
  kicker: "HOW · Bài 3.4",
  title: "10 sai lầm hay gặp và cách làm tốt hơn",
  highlight: "10 sai lầm",
  tocLabel: "10 sai lầm hay gặp",
  lead: "Sau khi hiểu framework và workflow, bạn cần nhận ra những sai lầm trong thực hành. Bảng này cũng có trong Hình 13.",
  blocks: [
    {
      type: "table",
      head: ["Sai lầm", "Cách làm tốt hơn"],
      rows: [
        ["Chọn thị trường vì thích", "Đối chiếu Passion với Demand và Payment"],
        ["Chạy theo một app doanh thu cao", "Phân tích phân khúc, nguồn doanh thu và lợi thế đối thủ"],
        ["Chọn thị trường quá rộng", "Phân khúc theo ICP và vấn đề cụ thể"],
        ["Chọn thị trường vì không có đối thủ", "Tìm bằng chứng nhu cầu và các giải pháp thay thế"],
        ["Chỉ dựa trên lượt xem", "Đánh giá hành vi mua và giá trị khách hàng"],
        ["Không nghiên cứu phân phối", "Xây Distribution Map (bản đồ phân phối) từ đầu"],
        ["Đánh giá sai quy mô thị trường", "Phân biệt TAM, SAM, SOM"],
        ["Tin hoàn toàn vào câu trả lời của AI", "Kiểm tra nguồn và phân biệt giả thuyết với bằng chứng"],
        ["Chọn chỉ vì Market Fit Score cao", "Đánh giá rủi ro và các điểm chưa xác minh"],
        ["Phân tích mãi mà không quyết định", "Chọn một thị trường ưu tiên để tiếp tục kiểm chứng"],
      ],
    },
    {
      type: "callout",
      label: "Nguyên tắc thực hành",
      paragraphs: [
        "**Research Enough to Make the Next Decision** — nghiên cứu đủ để đưa ra quyết định tiếp theo, không cố loại bỏ mọi bất định ngay từ đầu.",
      ],
    },
  ],
}
