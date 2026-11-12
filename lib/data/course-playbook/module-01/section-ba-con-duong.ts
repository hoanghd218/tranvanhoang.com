import type { Section } from "@/lib/course-playbook/types"
import { figures } from "./figures"

/** Nguồn: giáo trình Module 01, Phần II — WHAT, bài 2.4 (Three Paths to Your Winning Market). */
export const section: Section = {
  id: "ba-con-duong",
  kicker: "WHAT · Bài 2.4",
  title: "Ba con đường tìm thị trường đáng làm",
  highlight: "Ba con đường",
  tocLabel: "3 con đường tìm thị trường",
  lead: "Bạn không bắt buộc phải bắt đầu từ cùng một điểm. Chọn cách hợp với những gì bạn đang có.",
  blocks: [
    {
      type: "table",
      head: ["Con đường", "Điểm bắt đầu", "Khi nào phù hợp"],
      rows: [
        ["**Founder-first**", "Chuyên môn, sở thích, kinh nghiệm", "Đã hiểu một ngành hoặc cộng đồng"],
        ["**Market-first**", "Nhu cầu thị trường đã tồn tại", "Chưa có ý tưởng nhưng muốn nghiên cứu cơ hội kinh doanh"],
        ["**Distribution-first**", "Audience, cộng đồng hoặc đối tác", "Đã sở hữu hoặc có khả năng tiếp cận nhóm khách hàng"],
      ],
    },
    { type: "figure", figure: figures.baCach },
    {
      type: "cards",
      columns: 3,
      items: [
        {
          title: "Founder-first — đi từ chính mình",
          text: "**Expertise + Passion → Customer → Market Demand.** Tìm cơ hội từ trải nghiệm của bản thân và những nhóm người mình hiểu.",
          meta: "Ví dụ: CardStock, xuất phát từ sở thích sưu tầm thẻ thể thao của Kyle Fowler",
        },
        {
          title: "Market-first — đi từ nhu cầu có sẵn",
          text: "**Proven Demand → Underserved Segment → Founder Advantage.** Nghiên cứu những thị trường đang có người mua, rồi tìm nhóm khách hàng chưa được phục vụ tốt.",
          meta: "Ví dụ: Cal Buddy, bản địa hoá một mô hình theo dõi calo cho thị trường Israel",
        },
        {
          title: "Distribution-first — đi từ khán giả hoặc đối tác",
          text: "**Audience / Partners → Customer Needs → Market Opportunity.** Bắt đầu từ một cộng đồng, kênh hoặc đối tác có khách hàng, rồi tìm nhu cầu đáng phục vụ.",
          meta: "Ví dụ: Hero Analytics, phục vụ các agency marketing thay vì tiếp cận từng thương hiệu",
        },
      ],
    },
    {
      type: "callout",
      label: "Chỉ cần chọn một",
      paragraphs: [
        "Chọn cách hợp với bạn nhất, không cần học cả ba. Đi cách nào thì cuối cùng cũng phải qua cùng một bài kiểm tra: năm yếu tố chọn thị trường ở bài trước.",
      ],
    },
    {
      type: "paragraph",
      text: "Nguồn các ví dụ: video của kênh Starter Story. CardStock: “I Built Two Apps That Make $120K/Month”. Hero Analytics: “I Built A $1M SaaS In A Hidden Niche”. Cal Buddy: xem Bài 4.1. Founder tự kể; các con số doanh thu trong tiêu đề là tự công bố, chưa kiểm chứng độc lập.",
    },
  ],
}
