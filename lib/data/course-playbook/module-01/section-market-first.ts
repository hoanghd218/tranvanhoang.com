import type { Section } from "@/lib/course-playbook/types"
import { figures } from "./figures"

/** Nguồn: giáo trình Module 01, Phần I — WHY, bài 1.1 (Market-First Mindset) và 1.2 (The Wrong Market Problem). */
export const section: Section = {
  id: "market-first",
  kicker: "WHY · Bài 1.1–1.2",
  title: "Đừng bắt đầu bằng một app. Hãy bắt đầu bằng một thị trường đáng phục vụ",
  highlight: "thị trường đáng phục vụ",
  tocLabel: "Market-First: khách hàng trước app",
  lead: "AI giúp xây app nhanh và dễ hơn. Nhưng tạo ra một ứng dụng không tự động tạo ra nhu cầu, khách hàng hay doanh thu.",
  blocks: [
    {
      type: "quote",
      text: "**Don't Start With an App. Start With a Market Worth Serving.** Đừng bắt đầu bằng một ứng dụng bạn muốn xây dựng. Hãy bắt đầu bằng một thị trường có những khách hàng đáng để phục vụ.",
      by: "Triết lý của Module 01",
    },
    { type: "subheading", text: "Ba điều cần phân biệt" },
    {
      type: "cards",
      columns: 3,
      items: [
        {
          title: "The Market Is the Opportunity — thị trường là cơ hội",
          text: "Thị trường gồm những nhóm khách hàng có nhu cầu, hành vi, khả năng chi tiêu và các lựa chọn thay thế.",
        },
        {
          title: "The App Is the Solution — app là giải pháp",
          text: "Ứng dụng là phương tiện giúp khách hàng giải quyết vấn đề hoặc đạt kết quả mong muốn.",
        },
        {
          title: "Distribution Is the Bridge — phân phối là cây cầu",
          text: "Phân phối (distribution) là con đường đưa sản phẩm đến đúng khách hàng và chuyển giá trị sản phẩm thành cơ hội doanh thu.",
        },
      ],
    },
    {
      type: "paragraph",
      text: "Một người có thể xây app rất tốt nhưng vẫn thất bại về kinh doanh nếu không giải quyết được hai bài toán: **khách hàng có cần sản phẩm không** và **làm thế nào tiếp cận họ**.",
    },
    { type: "subheading", text: "Hai founder, hai cách bắt đầu" },
    {
      type: "paragraph",
      text: "Giả sử hai founder (người sáng lập) cùng biết dùng ChatGPT để làm mobile app. Họ bắt đầu khác nhau ở từng bước.",
    },
    {
      type: "table",
      head: ["Founder A — Build-first (làm trước)", "Founder B — Market-first (khách hàng trước)"],
      rows: [
        ["Bắt đầu bằng một ý tưởng ứng dụng", "Bắt đầu bằng một nhóm khách hàng"],
        ["Nghiên cứu công nghệ và tính năng", "Nghiên cứu nhu cầu và hành vi"],
        ["Tạo nhiều chức năng", "Xác định giá trị quan trọng nhất"],
        ["Phát triển xong mới tìm người dùng", "Tìm hiểu kênh phân phối từ đầu"],
        ["Đo thành công bằng việc hoàn thành app", "Đo thành công bằng bằng chứng về giá trị kinh doanh"],
      ],
    },
    {
      type: "callout",
      label: "Đọc cho đúng",
      paragraphs: ["Founder B không được bảo đảm thành công. Cách tiếp cận này chỉ giúp các quyết định phát triển sản phẩm có cơ sở hơn."],
    },
    { type: "figure", figure: figures.dungBatDau },
    {
      type: "paragraph",
      text: "Hình trên gom cả ba ý ở đầu bài lẫn sáu rủi ro khi chọn sai thị trường, sẽ đi chi tiết ở bài kế tiếp.",
    },
  ],
}
