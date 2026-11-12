import type { AccordionItem } from "@/lib/course-playbook/types"

/**
 * Nguồn: giáo trình Module 04 — bài 4.4, bảy thành phần của Product Blueprint
 * (định nghĩa, câu hỏi bắt buộc, ví dụ AI Interview Coach, đầu ra).
 */
export const blueprintComponents: AccordionItem[] = [
  {
    number: "1",
    title: "Product Strategy",
    gloss: "chiến lược sản phẩm",
    question: "Vì sao?",
    blocks: [
      { type: "subheading", text: "Định nghĩa" },
      { type: "paragraph", text: "Chiến lược lựa chọn khách hàng, vấn đề, vị thế sản phẩm và lợi thế khác biệt." },
      { type: "subheading", text: "Câu hỏi bắt buộc" },
      {
        type: "list",
        items: [
          "Ai là **ICP (Ideal Customer Profile)** — nhóm khách hàng phù hợp nhất?",
          "Họ đang gặp vấn đề gì, trong tình huống nào, thường xuyên đến mức nào?",
          "Hiện tại họ giải quyết bằng cách nào? Tại sao cách đó chưa tốt?",
          "Lời hứa giá trị của ta là gì?",
          "Sản phẩm khác biệt ở đâu: **ngách, ngôn ngữ, kết quả, tốc độ, đơn giản, trải nghiệm, thương hiệu hay phân phối**?",
        ],
      },
      { type: "subheading", text: "Ví dụ AI Interview Coach" },
      {
        type: "paragraph",
        text: "“Công cụ luyện phỏng vấn tiếng Anh cho ứng viên IT Việt Nam, tập trung trả lời theo vị trí Backend Developer, không dạy tiếng Anh chung chung.”",
      },
      { type: "subheading", text: "Sai lầm thường gặp" },
      {
        type: "paragraph",
        text: "Viết “dành cho mọi người muốn học tiếng Anh”. Đối tượng quá rộng khiến tính năng, nội dung và marketing thiếu tập trung.",
      },
      { type: "output", text: "1–2 câu định vị + ICP + pain point (nỗi đau khách hàng) + khác biệt." },
    ],
  },
  {
    number: "2",
    title: "MVP Scope",
    gloss: "phạm vi bản dùng được tối thiểu",
    question: "Làm ít tới đâu?",
    blocks: [
      { type: "subheading", text: "Định nghĩa" },
      { type: "paragraph", text: "Phạm vi chính xác cần có trong phiên bản nhỏ đầu tiên." },
      { type: "subheading", text: "Mỗi tính năng cần trả lời" },
      {
        type: "list",
        items: [
          "Tính năng giúp người dùng nhận giá trị cốt lõi như thế nào?",
          "Có thể kiểm chứng bằng phiên bản đơn giản hơn không?",
        ],
      },
      { type: "subheading", text: "Ví dụ AI Interview Coach" },
      {
        type: "table",
        head: ["Must Have", "Later", "Do Not Build ở v1"],
        rows: [
          ["Chọn vị trí phỏng vấn", "Lộ trình luyện 30 ngày", "Mạng xã hội trong app"],
          ["Nhận câu hỏi và trả lời", "Phỏng vấn nhóm", "Marketplace giáo viên"],
          ["Nhận phản hồi và luyện lại", "Báo cáo xu hướng", "100 mẫu avatar 3D"],
        ],
      },
      { type: "output", text: "3 tính năng cốt lõi + danh sách không làm ở v1." },
    ],
  },
  {
    number: "3",
    title: "User Journey",
    gloss: "hành trình người dùng",
    question: "Đi qua những bước nào?",
    blocks: [
      { type: "subheading", text: "Định nghĩa" },
      { type: "paragraph", text: "Chuỗi bước người dùng trải qua để đạt một mục tiêu, từ khi bắt đầu đến khi có kết quả." },
      { type: "subheading", text: "Cần mô tả ít nhất bốn phần" },
      {
        type: "list",
        items: [
          "**First-time Journey:** lần đầu biết đến hoặc mở ứng dụng, làm quen và nhận Aha Moment.",
          "**Core Loop:** hành động được lặp lại để tạo giá trị theo thời gian.",
          "**Returning Journey:** người dùng quay lại app để tiếp tục mục tiêu.",
          "**Paid Journey:** khi nào người dùng được giải thích về giá trị trả phí và thanh toán.",
        ],
      },
      { type: "output", text: "Sơ đồ dễ hiểu, không nhất thiết là dataflow (luồng dữ liệu) kỹ thuật." },
    ],
  },
  {
    number: "4",
    title: "Screen Architecture",
    gloss: "cấu trúc màn hình",
    question: "Có những màn hình nào?",
    blocks: [
      { type: "subheading", text: "Định nghĩa" },
      { type: "paragraph", text: "Danh mục các màn hình, mục đích của từng màn, hành động chính và hướng điều hướng." },
      { type: "subheading", text: "Mỗi màn hình phải có" },
      {
        type: "list",
        items: [
          "`Screen ID` (mã màn hình) và tên dễ hiểu.",
          "Mục tiêu màn hình.",
          "Nội dung và chức năng cần hiển thị.",
          "Một **Primary CTA** (nút hành động chính) — hành động chính người dùng nên thực hiện.",
          "Điểm vào, điểm ra và các trạng thái cơ bản (loading, empty, error) nếu cần.",
        ],
      },
      {
        type: "callout",
        label: "Anti-pattern (kiểu làm sai)",
        paragraphs: ["Có màn hình trang trí rất đẹp nhưng không có lý do tồn tại trong hành trình người dùng."],
      },
      { type: "output", text: "Screen Map (bản đồ màn hình) đủ để ra lệnh cho ChatGPT tạo bộ UI." },
    ],
  },
  {
    number: "5",
    title: "Design System",
    gloss: "hệ thống thiết kế",
    question: "Nhìn như thế nào?",
    blocks: [
      { type: "subheading", text: "Định nghĩa" },
      { type: "paragraph", text: "Bộ nguyên tắc trực quan và thành phần dùng chung, tạo sự nhất quán trên toàn app." },
      { type: "subheading", text: "Bao gồm" },
      {
        type: "list",
        items: [
          "**Design Direction / Style** (hướng phong cách): ví dụ Calm Premium, Professional Utility, Playful Learning.",
          "**Color Tokens** (bộ màu dùng chung): màu thương hiệu, nền, chữ, nhấn mạnh, cảnh báo.",
          "**Typography** (chữ): font, kích thước và vai trò của chữ.",
          "**Spacing Scale** (thang khoảng cách): quy tắc khoảng cách và căn chỉnh.",
          "**Component Library** (thư viện thành phần): button, input, progress, card, bottom navigation, modal.",
          "**Icon / Illustration Style:** cách dùng biểu tượng, hình minh họa và ảnh.",
        ],
      },
      {
        type: "callout",
        label: "Triết lý",
        paragraphs: [
          "Thiết kế hàng loạt sẽ **không đồng bộ** nếu style chưa được chốt trước. Vì vậy cần thiết kế template / master style, rồi mới yêu cầu ChatGPT tạo cả bộ ảnh.",
        ],
      },
      { type: "output", text: "Một **Design System v1** và hình **Master Styleboard** (bảng phong cách mẫu)." },
    ],
  },
  {
    number: "6",
    title: "Conversion Experience",
    gloss: "trải nghiệm chuyển đổi",
    question: "Vì sao họ mua?",
    blocks: [
      { type: "subheading", text: "Định nghĩa" },
      {
        type: "paragraph",
        text: "Những điểm tương tác ảnh hưởng trực tiếp đến việc người dùng hiểu giá trị, bắt đầu sử dụng, trả phí và quay lại.",
      },
      { type: "subheading", text: "Bao gồm" },
      {
        type: "list",
        items: [
          "**Onboarding:** giúp bắt đầu dễ dàng và cá nhân hóa vừa đủ.",
          "**Aha Moment:** cảm nhận giá trị rõ ràng.",
          "**Paywall:** truyền đạt giá trị gói trả phí và điều khoản rõ ràng.",
          "**Retention Hooks** (móc giữ chân): tiến độ, lịch hoạt động, nhắc đúng lúc, lý do quay lại có giá trị.",
        ],
      },
      {
        type: "callout",
        label: "Không dùng dark patterns (mẫu thiết kế đánh lừa người dùng)",
        paragraphs: ["Nút hủy bị che, đồng hồ đếm ngược giả, đánh lừa giá trial (dùng thử), ép đăng ký không cần thiết."],
      },
      {
        type: "output",
        text: "Kịch bản onboarding, mục tiêu activation, giả thuyết thời điểm paywall, nội dung gói giá.",
      },
    ],
  },
  {
    number: "7",
    title: "Build Specification",
    gloss: "đặc tả để xây",
    question: "AI phải triển khai ra sao?",
    blocks: [
      { type: "subheading", text: "Định nghĩa" },
      { type: "paragraph", text: "Bộ mô tả đủ chi tiết để AI coding agent biến giao diện thành sản phẩm hoạt động. **Không cần code ở bước này.**" },
      { type: "subheading", text: "Cần mô tả" },
      {
        type: "list",
        items: [
          "Từng màn hình và thành phần.",
          "Nút nào làm gì, dữ liệu nào hiển thị, hành vi khi không có dữ liệu hoặc khi lỗi.",
          "Những tính năng nào là MVP, những gì chưa làm.",
          "Ảnh tham chiếu đi kèm (`Screen ID` ↔ `Asset`).",
          "Tech stack (bộ công nghệ) đích: **React Native + Expo**, backend **Cloudflare Workers**, database **Cloudflare D1**, lưu media **Cloudflare R2**, xác thực Google hoặc email/password nếu cần.",
        ],
      },
      {
        type: "output",
        text: "File spec Markdown và asset manifest (danh mục tệp ảnh, tài nguyên). Không bắt buộc vẽ sơ đồ database hay giải thích dataflow sâu trong Module 04.",
      },
    ],
  },
]
