import type { Section } from "@/lib/course-playbook/types"
import { figures } from "./figures"

/** Nguồn: giáo trình Module 01, Phần II — WHAT, bài 2.8 (Distribution Accessibility). */
export const section: Section = {
  id: "kenh-tiep-can",
  kicker: "WHAT · Bài 2.8",
  title: "Khách hàng ở đâu? Bảy kênh tiếp cận",
  highlight: "Khách hàng ở đâu?",
  tocLabel: "Khách hàng ở đâu: 7 kênh",
  lead: "Phân phối phải được nghiên cứu ngay trong quá trình chọn thị trường, không đợi xây app xong.",
  blocks: [
    { type: "figure", figure: figures.kenh },
    {
      type: "table",
      head: ["Kênh", "Thường phù hợp với"],
      rows: [
        ["**Organic Short-form** (video ngắn tự nhiên)", "Sản phẩm dễ trình diễn bằng video"],
        ["**Search / ASO / SEO** (tìm kiếm; ASO là tối ưu hiển thị trên kho ứng dụng, SEO là trên Google)", "Người chủ động tìm giải pháp"],
        ["**Reddit / Discord / Communities** (cộng đồng)", "Nhóm người có vấn đề hoặc sở thích chung"],
        ["**Influencers / Creators** (người có ảnh hưởng)", "Cộng đồng tin tưởng người sáng tạo"],
        ["**Partnerships** (đối tác)", "Nhóm khách hàng có người trung gian phục vụ"],
        ["**Paid Acquisition** (quảng cáo trả tiền)", "Thị trường có thể thử nghiệm hiệu quả quảng cáo"],
        ["**Existing Audience** (khán giả sẵn có)", "Founder đã sở hữu cộng đồng hoặc tệp người dùng"],
      ],
    },
    { type: "subheading", text: "Hai mức lợi thế về phân phối" },
    {
      type: "cards",
      columns: 2,
      items: [
        { title: "Owned Distribution — kênh của mình", text: "Founder đã có kênh hoặc cộng đồng." },
        {
          title: "Accessible Distribution — kênh mình chen vào được",
          text: "Founder chưa có audience nhưng có cách tiếp cận qua các kênh đang tồn tại.",
        },
      ],
    },
    {
      type: "callout",
      label: "Cả hai đều tạo cơ hội",
      paragraphs: ["Đây là hai mức lợi thế khác nhau, nhưng cả hai đều có thể tạo cơ hội."],
    },
  ],
}
