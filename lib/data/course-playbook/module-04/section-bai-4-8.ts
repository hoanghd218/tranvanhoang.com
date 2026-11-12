import type { Section } from "@/lib/course-playbook/types"

/** Nguồn: giáo trình Module 04 — HOW, bài 4.8 "Tạo ảnh toàn bộ các màn hình theo lô" (55 phút), Prompt 04 và 04B. */
export const section: Section = {
  id: "bai-4-8",
  kicker: "HOW · Bài 4.8 · 55 phút",
  title: "Tạo cả bộ màn hình trong một yêu cầu — không prompt từng màn",
  highlight: "cả bộ màn hình",
  tocLabel: "4.8 · Tạo cả bộ màn hình trong một yêu cầu",
  lead: "**Batch UI Generation** (tạo giao diện theo lô) nghĩa là một yêu cầu giao việc cho toàn bộ bộ màn hình, dùng chung Product Brief, Screen Map và Design System. Bạn không tự lặp một prompt cho từng màn S01, S02, S03…",
  blocks: [
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-04/tao-ca-bo-man-hinh-mot-yeu-cau.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic bài 4.8: quy trình chuẩn 4 bước tạo cả bộ UI trong một yêu cầu; Prompt 04 Master Batch Generation gồm chốt bố cục, tạo ảnh ngay, tự kiểm tra, kèm Prompt 04B khi bị giới hạn; năm nguyên tắc batch-first; tiêu chí nhận bài và ba tệp đầu ra.",
        caption: "Hình 11 · Bài 4.8 — quy trình 4 bước, Prompt 04 và 04B, năm nguyên tắc batch-first.",
      },
    },
    { type: "subheading", text: "Vấn đề thực tế cần hiểu" },
    {
      type: "paragraph",
      text: "Một câu lệnh có thể yêu cầu ChatGPT thiết kế **toàn bộ** 8–12 màn hình, nhưng khả năng xuất nhiều file ảnh độc lập, độ phân giải cao trong đúng một lần phụ thuộc giới hạn tạo ảnh của ChatGPT Web. Không thể bảo đảm “hàng vạn” tệp ảnh riêng biệt chỉ bằng một prompt. Vì vậy workflow (quy trình làm việc) chuẩn là:",
    },
    {
      type: "steps",
      items: [
        { title: "1 · Yêu cầu toàn bộ cùng lúc", text: "AI biết rõ cả 8–12 màn ngay từ đầu." },
        {
          title: "2 · Ưu tiên một Master Storyboard",
          text: "Một ảnh chứa tất cả màn hình theo lưới (grid), để kiểm tra sự đồng bộ.",
        },
        {
          title: "3 · Cần độ phân giải để code thì chia sheet",
          text: "Cho AI xuất nhiều sheet, ví dụ 3 sheet × 4 màn hình, dựa trên cùng một lệnh tổng nếu công cụ hỗ trợ. Nếu không, tiếp tục bằng lệnh “Tạo tiếp các sheet còn thiếu theo kế hoạch đã chốt” — không prompt lại từng màn từ đầu.",
        },
        {
          title: "4 · Cắt ảnh thì xem lại độ nét và chữ",
          text: "**Không dùng một tấm grid nhỏ để giả vờ đã có 12 ảnh full-resolution.** Khi tách hoặc cắt ảnh, xem lại độ nét và nội dung chữ.",
        },
      ],
    },
    { type: "subheading", text: "Triết lý batch-first (làm cả lô trước)" },
    {
      type: "cards",
      columns: 3,
      items: [
        { title: "Design consistency first", text: "Tất cả màn hình chia sẻ cùng một style." },
        { title: "Journey consistency", text: "Thứ tự và nội dung phải khớp Screen Map." },
        { title: "Buildability", text: "Giao diện phải có thể hiện thực hóa thành component React Native / Expo." },
        { title: "Marketing fit", text: "Các màn quan trọng truyền tải đúng giá trị đã hứa trên landing page hoặc video." },
        {
          title: "Text accuracy",
          text: "Chữ trong ảnh chỉ là tham chiếu; dùng Screen Specs làm nguồn sự thật để tránh lỗi chữ do AI tạo ảnh.",
        },
      ],
    },
    {
      type: "prompt",
      title: "Prompt 04 · MASTER BATCH GENERATION — lệnh quan trọng nhất",
      when: "Chạy sau khi đã chốt Product Brief v1, Screen Map v1, Design System v1 và Master Styleboard trong cùng cuộc trò chuyện.",
      hint: "Prompt này yêu cầu ChatGPT tạo ảnh ngay: Master Storyboard, và các sheet nếu hệ thống hỗ trợ.",
      text: `Bạn là Senior Mobile UI Designer, UX Architect và Art Director.
Tôi đang sử dụng ChatGPT trên trình duyệt web và muốn bạn TRỰC TIẾP
SỬ DỤNG KHẢ NĂNG TẠO ẢNH của bạn để thiết kế UI.

Bạn đã có ba tài liệu đã được chốt trong cuộc trò chuyện:
1. PRODUCT BRIEF v1.
2. SCREEN MAP v1 với các Screen ID.
3. DESIGN SYSTEM v1 và MASTER STYLEBOARD đã tạo.

NHIỆM VỤ: THIẾT KẾ TOÀN BỘ BỘ MÀN HÌNH MOBILE APP TRONG MỘT
YÊU CẦU TỔNG THỂ — KHÔNG yêu cầu tôi prompt riêng từng màn hình.

QUY TẮC BẮT BUỘC:
- Bao phủ TẤT CẢ Screen ID trong Screen Map, không thiếu màn hình.
- Giữ cùng typography, màu, spacing, icon style, thành phần UI,
  navigation và cảm xúc thương hiệu trên toàn bộ bộ thiết kế.
- Tất cả layout portrait, tỷ lệ phù hợp màn hình smartphone hiện đại.
- Mỗi màn có Primary CTA rõ ràng đúng với Screen Map.
- Không tự thêm chức năng hoặc nút vô nghĩa.
- Onboarding, core action, kết quả/Aha Moment và paywall phải nổi bật
  và đúng hành trình sử dụng.
- Đảm bảo UI có thể xây dựng bằng React Native + Expo.
- Nội dung chữ tiếng {{NGÔN NGỮ SẢN PHẨM}}, dùng ngắn gọn và dễ đọc.
- Hình phải là thiết kế giao diện phẳng, KHÔNG gắn vào khung điện thoại
  giả lập, KHÔNG phối cảnh 3D, KHÔNG dùng stock mockup.

BƯỚC 1 — CHỐT BỐ CỤC TOÀN BỘ:
Dựa vào Screen Map, tóm tắt cấu trúc bố cục của TẤT CẢ màn hình
trong một bảng ngắn. Sử dụng ngay Design System đã được duyệt,
không hỏi tôi chốt lại những quyết định đã có.

BƯỚC 2 — TẠO ẢNH NGAY:
SAU KHI XÂY XONG BỐ CỤC, HÃY SỬ DỤNG KHẢ NĂNG TẠO ẢNH
CỦA BẠN NGAY LẬP TỨC để TẠO HÌNH ẢNH THỰC TẾ.

Ưu tiên tạo một MASTER UI STORYBOARD thể hiện TOÀN BỘ màn hình
trong một grid có đánh nhãn S01, S02... rõ ràng.
Nếu hệ thống hỗ trợ xuất nhiều ảnh trong cùng yêu cầu, hãy tạo
thêm các UI SHEETS độ phân giải cao, mỗi sheet 3–4 màn hình,
cho đến khi bao phủ toàn bộ Screen Map.

Nếu giới hạn công cụ không cho phép xuất hết trong cùng một lượt,
hãy thực hiện được nhiều nhất trong lượt hiện tại rồi nói chính xác
những Screen ID/sheet còn thiếu; giữ nguyên style để có thể
hoàn thành bằng một lệnh tiếp tục toàn bộ batch.

TUYỆT ĐỐI KHÔNG chỉ viết hướng dẫn, không chỉ viết prompt cho
công cụ khác, không báo “đã tạo” khi chưa thực sự có ảnh.

BƯỚC 3 — TỰ KIỂM TRA:
Lập Coverage Checklist S01...Sn sau khi tạo ảnh:
- Screen nào đã có.
- Screen nào còn thiếu.
- Có màn nào sai CTA, sai branding hoặc sai nội dung.
- Những lỗi cần sửa trước khi đưa sang coding.`,
    },
    {
      type: "prompt",
      title: "Prompt 04B · Lệnh tiếp tục cả batch nếu gặp giới hạn",
      when: "Dùng khi ChatGPT Web chưa xuất hết các màn hình trong một lượt.",
      hint: "Prompt này yêu cầu ChatGPT tạo ảnh thật cho các sheet còn thiếu.",
      text: `Tiếp tục BATCH UI GENERATION đã chốt. KHÔNG thiết kế lại từ đầu,
KHÔNG đổi Design System, không đổi Screen ID.

Hãy dùng khả năng tạo ảnh của bạn NGAY BÂY GIỜ để xuất các
sheet/màn hình còn thiếu theo coverage checklist trước đó.
Giữ đúng chất lượng, bố cục và style của Master Storyboard.
Không chỉ mô tả hoặc đưa prompt; hãy TẠO ẢNH THẬT.`,
    },
    {
      type: "checklist",
      id: "tieu-chi-batch-ui",
      title: "Tiêu chí nhận bài của bài 4.8",
      items: [
        { title: "Đã phủ đủ Screen ID theo Screen Map." },
        { title: "Bộ ảnh nhìn như cùng một ứng dụng", text: "Không phải nhiều UI kit trộn lẫn." },
        { title: "Mỗi màn có mục đích và CTA chính." },
        {
          title: "Chữ quan trọng được lưu trong SCREEN-SPECS.md",
          text: "Kể cả khi chữ trong ảnh bị sai.",
        },
        {
          title: "Có ảnh thiết kế tổng và — khi cần — các sheet chất lượng cao",
          text: "Để phục vụ coding.",
        },
      ],
    },
    {
      type: "output",
      label: "Đầu ra bài 4.8",
      text: "`MASTER-UI-STORYBOARD.png` (hoặc định dạng ảnh ChatGPT xuất); các `UI-SHEET-*.png` nếu cần; `UI-COVERAGE.md`.",
    },
  ],
}
