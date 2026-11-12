import type { Section } from "@/lib/course-playbook/types"

// Nguồn: Phần III — HOW, Bước 7 (3.7.1–3.7.3): Evidence Review & Decision — Evidence Report, độ tin cậy bằng chứng, quyết định Go / Pivot / Kill.

export const section: Section = {
  id: "how-buoc-7",
  kicker: "HOW · Bước 7 · 3.7",
  title: "Evidence Review & Decision: đọc bằng chứng, quyết định GO · PIVOT · KILL",
  highlight: "GO · PIVOT · KILL",
  tocLabel: "Bước 7 · GO · PIVOT · KILL",
  lead: "Bước cuối gom mọi dữ liệu thành một quyết định đầu tư. Bạn tổng hợp theo giả thuyết, chấm độ tin cậy của bằng chứng, rồi chọn Go, Pivot hoặc Kill / Park.",
  blocks: [
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-03/doc-bang-chung-quyet-dinh-go-pivot-kill.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic Bằng chứng nói gì: ba quyết định GO, PIVOT, KILL/PARK; mười tình huống thường gặp và cách xử lý; ví dụ phễu số liệu giả định từ 240 lượt truy cập xuống 3 người trả phí beta; tám phần của Validation Decision Report; bảng chấm 100 điểm.",
        caption:
          "Hình 7 · Ba quyết định GO · PIVOT · KILL/PARK và tóm tắt Phần IV–VIII (số liệu phễu là giả định).",
      },
    },
    { type: "subheading", text: "3.7.1 · Tổng hợp dữ liệu thành Evidence Report" },
    {
      type: "paragraph",
      text: "Sau khi thực hiện các thử nghiệm, tổng hợp kết quả theo từng giả thuyết:",
    },
    {
      type: "table",
      head: ["Giả thuyết", "Dữ liệu thu được", "Mức độ bằng chứng", "Rủi ro còn lại"],
      rows: [
        [
          "**Problem**",
          "Phỏng vấn, hành vi hiện tại, các vấn đề lặp lại",
          "Đánh giá từ dữ liệu thực tế",
          "Có đại diện đúng thị trường không?",
        ],
        [
          "**Solution**",
          "Người dùng thử prototype và hoàn thành tác vụ",
          "Đánh giá theo hành vi sử dụng",
          "Trải nghiệm có đủ tốt để dùng lại không?",
        ],
        [
          "**Payment**",
          "Phản hồi về giá, đặt trước, giao dịch thật",
          "Phân biệt ý định và thanh toán",
          "Giá có bền vững không?",
        ],
        [
          "**Distribution**",
          "Kết quả tiếp cận, đăng ký, demo, chi phí",
          "Đánh giá hiệu quả kênh",
          "Có thể mở rộng với chi phí hợp lý không?",
        ],
      ],
    },
    {
      type: "worksheet",
      id: "phieu-evidence-report",
      title: "Evidence Report theo giả thuyết",
      note: "Mỗi giả thuyết ghi ba thứ: dữ liệu thu được, mức độ bằng chứng (đối chiếu thang 0–6), rủi ro còn lại.",
      fields: [
        "Problem — dữ liệu thu được · mức độ bằng chứng · rủi ro còn lại",
        "Solution — dữ liệu thu được · mức độ bằng chứng · rủi ro còn lại",
        "Payment — dữ liệu thu được · mức độ bằng chứng · rủi ro còn lại",
        "Distribution — dữ liệu thu được · mức độ bằng chứng · rủi ro còn lại",
      ],
    },
    { type: "subheading", text: "3.7.2 · Đánh giá độ tin cậy của bằng chứng" },
    {
      type: "checklist",
      id: "do-tin-cay",
      title: "Sáu câu hỏi về chất lượng bằng chứng",
      intro: "Không chỉ nhìn số lượng, hãy đánh giá chất lượng dữ liệu. Tick khi bạn đã trả lời được câu hỏi bằng dữ liệu của mình.",
      items: [
        { title: "Relevance", text: "Người tham gia có đúng nhóm khách hàng cần nghiên cứu không?" },
        { title: "Behavioral Strength", text: "Bằng chứng là ý kiến hay hành động thực tế?" },
        {
          title: "Independence",
          text: "Có quá nhiều phản hồi từ người quen hoặc người cùng một cộng đồng không?",
        },
        { title: "Sample Limitations", text: "Mẫu có quá nhỏ hoặc quá thiên lệch không?" },
        { title: "Repeatability", text: "Kết quả có xuất hiện nhiều lần trong điều kiện phù hợp không?" },
        {
          title: "Commercial Relevance",
          text: "Bằng chứng có thực sự liên quan đến khả năng tạo doanh thu không?",
        },
      ],
    },
    { type: "subheading", text: "3.7.3 · Ra quyết định Go / Pivot / Kill" },
    {
      type: "cards",
      columns: 3,
      items: [
        {
          title: "GO",
          meta: "Tiếp tục đầu tư có kiểm soát",
          text: "Khi những giả thuyết quan trọng có đủ bằng chứng để biện minh cho khoản đầu tư tiếp theo, bạn chuyển sang Module Design. GO không đồng nghĩa với việc thị trường đã được chứng minh hoàn toàn.",
        },
        {
          title: "PIVOT",
          meta: "Điều chỉnh một phần quan trọng của ý tưởng",
          text: "Có thể là đổi phân khúc, giá trị chính, giải pháp, giá bán hoặc kênh phân phối. Ví dụ: khách hàng không muốn app học tiếng Anh tổng quát nhưng quan tâm đến việc luyện phỏng vấn cho một ngành nghề cụ thể.",
        },
        {
          title: "KILL / PARK",
          meta: "Dừng hoặc tạm gác",
          text: "Khi bằng chứng tiếp tục yếu sau những thử nghiệm hợp lý, hoặc chi phí để tiếp tục quá lớn so với cơ hội, nên dừng đầu tư vào giả thuyết hiện tại.",
        },
      ],
    },
    {
      type: "callout",
      label: "Dừng không có nghĩa là vô giá trị",
      paragraphs: [
        "Không phải mọi ý tưởng bị dừng đều vô giá trị. Một số có thể được nghiên cứu lại khi điều kiện thị trường, công nghệ hoặc năng lực phân phối thay đổi.",
      ],
    },
    {
      type: "callout",
      label: "Cách ra quyết định",
      paragraphs: [
        "Ra quyết định theo **mức độ bằng chứng** và **quy mô khoản đầu tư tiếp theo**, không phân loại ý tưởng một cách tuyệt đối là thành công hay thất bại.",
      ],
    },
  ],
}
