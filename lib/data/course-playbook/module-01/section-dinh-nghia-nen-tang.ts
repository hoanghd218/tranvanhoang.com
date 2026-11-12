import type { Section } from "@/lib/course-playbook/types"
import { figures } from "./figures"

/** Nguồn: giáo trình Module 01, Phần II — WHAT, bài 2.1 (Market Fundamentals: định nghĩa, phân cấp thị trường, User và Buyer). */
export const section: Section = {
  id: "dinh-nghia-nen-tang",
  kicker: "WHAT · Bài 2.1",
  title: "Các định nghĩa nền tảng của thị trường",
  highlight: "định nghĩa nền tảng",
  tocLabel: "Định nghĩa nền tảng",
  lead: "Mười khái niệm bạn sẽ dùng xuyên suốt module. Hiểu đúng chúng trước khi đi tiếp.",
  blocks: [
    {
      type: "table",
      head: ["Khái niệm", "Định nghĩa"],
      rows: [
        ["**Market** (thị trường)", "Tập hợp khách hàng, nhu cầu và hoạt động cung cấp giá trị trong một lĩnh vực"],
        ["**Niche** (ngách)", "Một phân khúc cụ thể của thị trường"],
        ["**Micro-niche** (ngách hẹp)", "Nhóm khách hàng hẹp hơn với đặc điểm hoặc bối cảnh nhu cầu rõ ràng"],
        ["**Customer** (khách hàng)", "Người hoặc tổ chức nhận giá trị từ sản phẩm hoặc dịch vụ"],
        ["**User** (người dùng)", "Người trực tiếp sử dụng ứng dụng"],
        ["**Buyer** (người mua)", "Người quyết định mua hoặc trả tiền"],
        ["**ICP** (Ideal Customer Profile)", "Chân dung khách hàng mục tiêu lý tưởng"],
        ["**Market Demand** (nhu cầu thị trường)", "Nhu cầu thực tế đối với một giá trị hoặc cách giải quyết vấn đề"],
        ["**Founder–Market Fit**", "Mức độ phù hợp giữa kinh nghiệm, thế mạnh, nguồn lực của founder và thị trường"],
        ["**Market Viability** (mức khả thi của thị trường)", "Mức độ thị trường có thể hỗ trợ một mô hình kinh doanh khả thi"],
      ],
    },
    { type: "subheading", text: "Ví dụ phân cấp thị trường" },
    {
      type: "table",
      head: ["Cấp độ", "Ví dụ"],
      rows: [
        ["Market", "Education (giáo dục)"],
        ["Niche", "English Learning (học tiếng Anh)"],
        ["Micro-niche", "English for IT Professionals (tiếng Anh cho dân IT)"],
        ["ICP", "Kỹ sư phần mềm Việt Nam chuẩn bị phỏng vấn với công ty quốc tế"],
        ["Problem Landscape (bức tranh vấn đề)", "Khó trả lời câu hỏi kỹ thuật, diễn đạt kinh nghiệm và giao tiếp chuyên nghiệp bằng tiếng Anh"],
      ],
    },
    {
      type: "paragraph",
      text: "Ở cấp độ này, chưa cần xác định sản phẩm có những chức năng gì. Cần biết nhóm khách hàng đang tồn tại và những vấn đề nào có thể đáng nghiên cứu.",
    },
    { type: "figure", figure: figures.thuHep },
    { type: "subheading", text: "Phân biệt User và Buyer" },
    { type: "paragraph", text: "Một số app có người sử dụng và người thanh toán khác nhau:" },
    {
      type: "list",
      items: [
        "Trẻ em dùng app học tập; phụ huynh thanh toán.",
        "Nhân viên dùng app nội bộ; doanh nghiệp mua.",
        "Vận động viên dùng công cụ huấn luyện; huấn luyện viên hoặc tổ chức có thể là người mua.",
      ],
    },
    {
      type: "callout",
      label: "Cảnh báo",
      paragraphs: ["Nếu xác định nhầm buyer, toàn bộ chiến lược tiếp cận thị trường có thể sai."],
    },
  ],
}
