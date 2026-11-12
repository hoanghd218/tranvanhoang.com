import type { Section } from "@/lib/course-playbook/types"
import { figures } from "./figures"

/** Nguồn: giáo trình Module 01, Phần II — WHAT, bài 2.5 (Market Segmentation) và 2.6 (Market Demand & Customer Pain). */
export const section: Section = {
  id: "phan-khuc-va-noi-dau",
  kicker: "WHAT · Bài 2.5–2.6",
  title: "Phân khúc khách hàng và nỗi đau đáng trả tiền",
  highlight: "nỗi đau đáng trả tiền",
  tocLabel: "Phân khúc & nỗi đau khách hàng",
  lead: "Sau khi có thị trường tiềm năng, thu hẹp thành nhóm khách hàng rõ ràng, rồi tìm những vấn đề đang gây hậu quả cụ thể cho nhóm đó.",
  blocks: [
    { type: "subheading", text: "Bảy chiều phân khúc" },
    {
      type: "table",
      head: ["Chiều", "Tiêu chí"],
      rows: [
        ["Geographic (địa lý)", "Quốc gia, thành phố, ngôn ngữ"],
        ["Demographic (nhân khẩu)", "Độ tuổi, nghề nghiệp, thu nhập"],
        ["Behavioral (hành vi)", "Hành vi sử dụng, tần suất, cách mua"],
        ["Psychographic (tâm lý)", "Mục tiêu, lối sống, động lực"],
        ["Problem-based (theo vấn đề)", "Vấn đề chung hoặc kết quả mong muốn"],
        ["Platform (nền tảng)", "iOS, Android, web"],
        ["Purchase behavior (hành vi mua)", "Ai sử dụng, ai quyết định, ai thanh toán"],
      ],
    },
    {
      type: "callout",
      label: "Nguyên tắc phân khúc: NICHE Before MASS MARKET",
      paragraphs: [
        "Một phân khúc tốt cần đủ rõ để xác định khách hàng là ai, nhu cầu nào khiến họ hành động và nơi nào có thể tìm thấy họ.",
        "Đừng thu hẹp đến mức thị trường không còn đủ khách hàng hoặc phân phối trở nên quá khó.",
      ],
    },
    { type: "subheading", text: "Nhu cầu không chỉ là có nhiều người bàn tán" },
    {
      type: "paragraph",
      text: "Nghiên cứu nhu cầu không chỉ dựa vào việc có nhiều người bàn luận về một chủ đề. Cần xác định những vấn đề đang gây ra hậu quả cụ thể.",
    },
    { type: "figure", figure: figures.noiDau },
    {
      type: "table",
      head: ["Loại vấn đề", "Biểu hiện"],
      rows: [
        ["**Time Pain** (đau về thời gian)", "Mất quá nhiều thời gian"],
        ["**Money Pain** (đau về tiền)", "Tốn tiền hoặc mất cơ hội tài chính"],
        ["**Productivity Pain** (đau về hiệu suất)", "Hiệu suất thấp"],
        ["**Emotional Pain** (đau về cảm xúc)", "Lo lắng, căng thẳng, thiếu tự tin"],
        ["**Convenience Pain** (đau về sự tiện lợi)", "Thao tác khó khăn, bất tiện"],
        ["**Outcome Pain** (đau về kết quả)", "Không đạt được kết quả mong muốn"],
      ],
    },
    { type: "subheading", text: "Painkiller và Vitamin" },
    {
      type: "cards",
      columns: 2,
      items: [
        { title: "Painkiller — thuốc giảm đau", text: "Sản phẩm giải quyết một vấn đề quan trọng đối với nhóm khách hàng." },
        { title: "Vitamin — có cũng tốt", text: "Sản phẩm cải thiện trải nghiệm nhưng không nhất thiết giải quyết vấn đề cấp thiết." },
      ],
    },
    {
      type: "paragraph",
      text: "Cùng một giải pháp có thể là Vitamin với nhóm này nhưng là Painkiller với nhóm khác. Ví dụ Voicy: công cụ nhập liệu bằng giọng nói giúp nhiều người tăng năng suất, nhưng đặc biệt hữu ích với những người gặp khó khăn khi gõ phím (xem Bài 4.1).",
    },
  ],
}
