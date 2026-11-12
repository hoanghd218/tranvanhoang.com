import type { Section } from "@/lib/course-playbook/types"

/** Nguồn: giáo trình Module 04 — WHAT IF, bài 4.11 "Usability Test và Design Review" (35 phút), Prompt 07. */
export const section: Section = {
  id: "bai-4-11",
  kicker: "WHAT IF · Bài 4.11 · 35 phút",
  title: "Thử với người thật rồi mới bàn giao",
  highlight: "người thật",
  tocLabel: "4.11 · Usability Test và Design Review",
  lead: "ChatGPT tạo ra thiết kế thuyết phục không có nghĩa là khách hiểu hay sẵn sàng trả tiền. Bài này kiểm tra thiết kế với người thật trước khi bàn giao.",
  blocks: [
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-04/thu-voi-nguoi-that-roi-ban-giao.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic bài 4.11 và 4.12: ba bài thử Five-Second Test, First-Task Test, Paywall Comprehension với 3 đến 5 người; sáu tình huống nếu không đạt; Prompt 07 UX Critic chấm 7 tiêu chí; trình bày 3 phút; rubric 100 điểm; và tuyên ngôn của module.",
        caption: "Hình 14 · Bài 4.11–4.12 — ba bài thử, sáu tình huống nếu không đạt, UX Critic, trình bày 3 phút và rubric.",
      },
    },
    {
      type: "cards",
      columns: 2,
      items: [
        {
          title: "Design Review",
          text: "Kiểm tra thiết kế có thống nhất với chiến lược, journey, style và ràng buộc triển khai không.",
        },
        {
          title: "Usability Test",
          text: "Quan sát người phù hợp khách hàng mục tiêu thực hiện một nhiệm vụ, để xem họ có hiểu và dùng được không.",
        },
      ],
    },
    { type: "subheading", text: "Ba bài thử thực hành" },
    {
      type: "table",
      head: ["Bài thử", "Cách làm", "Dấu hiệu cần quan sát"],
      rows: [
        ["**Five-Second Test**", "Cho người thử xem màn Welcome trong 5 giây.", "Họ có nói đúng app dành cho ai, giúp gì?"],
        [
          "**First-Task Test**",
          "Cho đi từ Welcome đến Aha Moment bằng prototype (bản mẫu thử) hoặc storyboard có chỉ dẫn.",
          "Họ có biết bước tiếp theo? Có vướng ở đâu?",
        ],
        [
          "**Paywall Comprehension**",
          "Cho xem màn trả phí rồi hỏi họ hiểu gì.",
          "Họ có hiểu lợi ích, giá, chu kỳ, trial và cách hủy?",
        ],
      ],
    },
    {
      type: "callout",
      label: "Cỡ mẫu",
      paragraphs: [
        "Mời **3–5 người đúng nhóm khách hàng** cho vòng thử phát hiện vấn đề đầu tiên. **Không** dùng cỡ mẫu này để ước lượng tỷ lệ chuyển đổi hay xác nhận product-market fit (mức độ phù hợp giữa sản phẩm và thị trường).",
      ],
    },
    {
      type: "prompt",
      title: "Prompt 07 · UX Critic",
      when: "Chạy sau khi đã có Product Brief, Screen Map và bộ ảnh giao diện. Khi đã có phản hồi từ người dùng thật, dán lại để AI lập bảng vấn đề.",
      hint: "ChatGPT không tạo ảnh ở prompt này, trừ khi bạn yêu cầu cập nhật ảnh.",
      text: `Bạn là Senior UX Researcher. Hãy đánh giá Product Brief,
Screen Map và bộ ảnh giao diện vừa tạo.

Đánh giá lần lượt:
1. Value clarity — có hiểu app giải quyết gì không?
2. Aha Moment — có được nhận giá trị nhanh không?
3. Navigation — các màn có đi cùng một luồng không?
4. Consistency — style, component, copy có đồng nhất không?
5. Conversion — onboarding/paywall có rõ và trung thực không?
6. Accessibility — chữ, tương phản, touch target, trạng thái lỗi.
7. Build feasibility — có điểm nào khó tái hiện bằng React Native?

Đánh dấu: Critical / Major / Minor.
Không giả vờ rằng bạn đã quan sát người dùng thật.
Phân biệt vấn đề suy ra từ thiết kế và vấn đề đã có chứng cứ
qua usability test thực tế.

Sau khi tôi cung cấp phản hồi từ người dùng, hãy tạo bảng
vấn đề → bằng chứng → giải pháp → màn ảnh hưởng → độ ưu tiên.`,
    },
    { type: "subheading", text: "Nếu kết quả không đạt thì sao?" },
    {
      type: "table",
      head: ["Dấu hiệu", "Hướng xử lý"],
      rows: [
        ["**Người dùng không hiểu**", "Sửa lời hứa và visual ưu tiên."],
        ["**Không biết bấm đâu**", "Tăng độ rõ CTA, giảm nhiễu."],
        ["**Thiếu Aha Moment**", "Xem lại Core Action; có thể cần thay journey, không chỉ đổi màu."],
        [
          "**Không muốn nâng cấp**",
          "Kiểm tra giá trị trả phí, phân khúc, timing và điều kiện giá; không mặc định do paywall xấu.",
        ],
        [
          "**Ảnh AI thiếu nhất quán**",
          "Quay về Master Styleboard, yêu cầu tạo lại **cả sheet liên quan**, thay vì chỉnh mỗi màn bằng định hướng khác nhau.",
        ],
        [
          "**Không đủ asset chất lượng cao**",
          "Xuất lại sheet với mật độ ít màn hơn nhưng vẫn dựa trên cùng batch specification (đặc tả của lô).",
        ],
      ],
    },
    {
      type: "worksheet",
      id: "phan-hoi-usability-test",
      title: "Bảng ghi nhận phản hồi test và việc đã sửa",
      note: "Điền sau khi thử với 3–5 người. Cột của bảng theo đúng Prompt 07: vấn đề → bằng chứng → giải pháp → màn ảnh hưởng → độ ưu tiên.",
      fields: [
        "Bài thử đã làm (Five-Second, First-Task, Paywall Comprehension) và số người tham gia",
        "Vấn đề",
        "Bằng chứng (quan sát hoặc lời người thử)",
        "Giải pháp",
        "Màn hình bị ảnh hưởng (Screen ID)",
        "Độ ưu tiên: Critical / Major / Minor",
        "Việc đã sửa",
      ],
    },
  ],
}
