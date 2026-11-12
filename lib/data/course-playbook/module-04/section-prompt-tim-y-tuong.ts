import type { Section } from "@/lib/course-playbook/types"
import { ideaPromptsA } from "./prompts-tim-y-tuong-a"
import { ideaPromptsB } from "./prompts-tim-y-tuong-b"

/**
 * Nguồn: bộ prompt mẫu "Quy trình tìm ý tưởng mobile app với ChatGPT" của Module 04
 * (8 prompt, prompt sau khi có dữ liệu thật, mẫu ghi kết quả sau mỗi bước).
 */
export const section: Section = {
  id: "bo-prompt-tim-y-tuong",
  kicker: "Bộ prompt · Tìm ý tưởng",
  title: "Bộ 8 prompt tìm ý tưởng mobile app với ChatGPT",
  highlight: "tìm ý tưởng",
  tocLabel: "Bộ 8 prompt tìm ý tưởng",
  lead: "Bộ 8 prompt đi từ một chủ đề mơ hồ đến một ý tưởng có khách hàng cụ thể, bản thử nghiệm và tiêu chí quyết định có nên xây app hay không. Dùng được cho app học ngoại ngữ, tài chính cá nhân, fitness, năng suất và các lĩnh vực khác.",
  blocks: [
    {
      type: "callout",
      label: "Đây là bộ prompt thứ hai — đừng nhầm với bộ prompt thiết kế",
      paragraphs: [
        "**Bộ prompt thiết kế** (Product Brief → UX Critic, nằm ở các bài 4.5–4.11) bắt đầu từ ý tưởng đã chọn. **Bộ prompt tìm ý tưởng** này đi từ chủ đề mơ hồ qua vấn đề, app mẫu, định vị, kiểm chứng, MVP đến mẫu UI. Hai bộ đứng cạnh nhau, bộ này không thay bộ kia.",
      ],
    },
    { type: "subheading", text: "Cách dùng" },
    {
      type: "list",
      ordered: true,
      items: [
        "Mở **một chat mới cho mỗi dự án**. Dán từng prompt theo thứ tự và thay phần được tô màu bằng thông tin của bạn. Nếu chưa biết, ghi “chưa biết”.",
        "Mỗi bước có một đầu ra cần lưu. Dùng cùng chat để giữ ngữ cảnh. Nếu đổi chat, dán đầu ra đã chốt của bước trước vào prompt tiếp theo.",
        "Đến bước nghiên cứu, bật tìm kiếm web và gửi link hoặc ảnh màn hình bạn có. Đến bước kiểm chứng, mang kết quả từ người dùng thật quay lại chat.",
        "Mỗi khi AI đề xuất nhiều lựa chọn, ghi rõ lựa chọn bạn chốt trước khi sang bước kế tiếp.",
      ],
    },
    {
      type: "callout",
      label: "Ví dụ xuyên suốt của bộ prompt này",
      paragraphs: [
        "App cho người Việt tập gym. Ý tưởng ban đầu là theo dõi calo và cân nặng. Giả thuyết sau khi thu hẹp là giúp người tập ghi món Việt và xem dinh dưỡng, sức tập, số đo thay đổi cùng nhau như thế nào. Các kết quả ví dụ dưới mỗi prompt dùng để minh họa cách làm.",
      ],
    },
    { type: "subheading", text: "Tám prompt theo thứ tự" },
    { type: "accordion", expandFirst: true, items: [...ideaPromptsA, ...ideaPromptsB] },
    {
      type: "worksheet",
      id: "ghi-ket-qua-sau-moi-buoc",
      title: "Mẫu ghi kết quả sau mỗi bước",
      note: "Đổi chat? Dán đầu ra đã chốt vào prompt kế tiếp. Điền phiếu này sau mỗi bước để không mất mạch.",
      fields: [
        "Bước vừa hoàn thành",
        "Quyết định tôi chốt",
        "Bằng chứng hoặc lý do",
        "Giả thuyết còn mở",
        "Đầu ra cần chuyển sang bước tiếp theo",
      ],
    },
  ],
}
