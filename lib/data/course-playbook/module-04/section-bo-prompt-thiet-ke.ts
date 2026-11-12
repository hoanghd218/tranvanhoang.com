import type { Section } from "@/lib/course-playbook/types"

/**
 * Nguồn: giáo trình Module 04 — mục 8 "Bộ prompt dùng ngay" (thứ tự chạy, 5 voice prompt,
 * lưu ý khi dùng prompt giọng nói). Nguyên văn 8 prompt thiết kế nằm ở các bài 4.5–4.11.
 */
export const section: Section = {
  id: "bo-prompt-thiet-ke",
  kicker: "Bộ prompt · Thiết kế (bài 4.5–4.11)",
  title: "Bộ 8 prompt thiết kế — thứ tự chạy và prompt giọng nói",
  highlight: "8 prompt thiết kế",
  tocLabel: "Bộ 8 prompt thiết kế",
  lead: "Đây là bộ prompt chạy trong quy trình thiết kế, từ Product Brief đến UX Critic. Mỗi prompt nằm đúng bài học ở trên; mục này gom lại thứ tự chạy và các prompt giọng nói. **Đừng nhầm với bộ 8 prompt tìm ý tưởng ở mục kế tiếp.**",
  blocks: [
    {
      type: "callout",
      label: "Cách dùng",
      paragraphs: [
        "Dùng **một cuộc trò chuyện hoặc một Project** (dự án) trên ChatGPT Web cho toàn bộ module. Đặt tên tài liệu rõ ràng và luôn yêu cầu ChatGPT dựa trên phiên bản đã duyệt.",
      ],
    },
    { type: "subheading", text: "Thứ tự chạy 8 prompt" },
    {
      type: "table",
      head: ["#", "Prompt", "Mục tiêu", "Bài", "ChatGPT có phải tạo ảnh ngay?"],
      rows: [
        ["**01**", "Product Brief Generator", "Chuẩn hóa chiến lược", "4.5", "**Không** — nội dung trước"],
        ["**02**", "Journey + Screen Map", "Chốt màn hình", "4.6", "**Không** — bố cục trước"],
        ["**03**", "Design Direction + Styleboard", "Chốt template trực quan", "4.7", "**Có** — tạo Master Styleboard"],
        [
          "**04**",
          "Master Batch UI Generation",
          "Tạo **toàn bộ UI trong một yêu cầu**",
          "4.8",
          "**Có** — tạo Master Storyboard và sheet nếu hỗ trợ",
        ],
        ["**04B**", "Continue Batch", "Hoàn thành phần bị giới hạn", "4.8", "**Có** — tạo tiếp batch"],
        ["**05**", "Conversion Design", "Tối ưu onboarding, Aha, paywall", "4.9", "**Có** — tạo conversion sheet"],
        ["**06**", "Export Build Pack", "Đóng gói tài liệu", "4.10", "**Không** — xuất Markdown, liệt kê asset"],
        ["**07**", "UX Critic", "Đánh giá và kiểm thử", "4.11", "**Không**, trừ khi yêu cầu cập nhật ảnh"],
      ],
    },
    { type: "subheading", text: "Mẫu voice prompt ngắn — nói trực tiếp thay vì gõ dài" },
    {
      type: "prompt",
      title: "Voice 1 · Chốt ý tưởng",
      text: "Đây là Product Brief của tôi. Hãy vào vai Product Manager, rút xuống tối đa 3 tính năng cốt lõi, làm rõ Aha Moment và đánh dấu những điều còn là giả thuyết. Sau đó xuất bản Brief chuẩn để tôi duyệt.",
    },
    {
      type: "prompt",
      title: "Voice 2 · Chốt trải nghiệm",
      text: "Dựa trên Brief đã chốt, tạo hành trình người dùng và danh sách màn hình. Đừng làm phức tạp. Với mỗi màn hãy ghi mục đích, nội dung, nút chính và màn hình tiếp theo. Chưa tạo ảnh.",
    },
    {
      type: "prompt",
      title: "Voice 3 · Chốt bố cục và tạo ảnh template",
      text: "Hãy thiết kế một bộ style thống nhất cho tất cả màn hình của app. Sau khi chốt bố cục và design template, hãy sử dụng khả năng tạo ảnh của bạn để tạo ngay một hình Master Styleboard thực tế. Tôi không cần bạn chỉ viết prompt.",
    },
    {
      type: "prompt",
      title: "Voice 4 · Tạo ảnh tất cả màn hình cùng lúc",
      text: "Bây giờ dựa trên Product Brief, Screen Map và styleboard đã chốt, hãy sử dụng khả năng tạo ảnh của bạn ngay lập tức để tạo toàn bộ bộ giao diện của app trong một yêu cầu, trình bày thành storyboard tất cả màn hình. Nếu cần chia sheet để rõ nét, hãy chia thành các sheet 3 đến 4 màn, giữ cùng design system. Đừng bắt tôi prompt từng màn. Đừng chỉ mô tả thiết kế.",
    },
    {
      type: "prompt",
      title: "Voice 5 · Chỉnh toàn bộ batch",
      text: "Hãy rà soát tất cả màn trong storyboard, sửa những phần không nhất quán, kiểm tra thiếu Screen ID, đúng CTA và đúng thứ tự trải nghiệm. Sau khi chốt phần chỉnh sửa, dùng khả năng tạo ảnh của bạn tạo lại các sheet liên quan ngay. Không chỉ viết hướng dẫn.",
    },
    { type: "subheading", text: "Lưu ý khi dùng prompt giọng nói" },
    {
      type: "list",
      items: [
        "Nói rõ **“đây là sản phẩm iOS/Android mobile app”**, tránh để AI tạo trang web desktop.",
        "Luôn nhắc **“dùng Design System đã chốt”**; không phát minh lại style mỗi lần.",
        "Phân biệt yêu cầu **“tạo hình ảnh”** và **“xuất mã nguồn”** — đây là module tạo visual, chưa coding.",
        "Nếu ChatGPT Web cần xác nhận hoặc có hạn mức tạo ảnh, bạn chủ động cho phép hoặc tiếp tục; không coi câu lệnh là lời hứa phần mềm sẽ tự tạo vô hạn tệp ảnh.",
      ],
    },
  ],
}
