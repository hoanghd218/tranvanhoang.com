import type { Section } from "@/lib/course-playbook/types"

/** Nguồn: giáo trình Module 04 — HOW, bài 4.10 "Đóng gói Build-Ready Pack" (15 phút), Prompt 06. */
export const section: Section = {
  id: "bai-4-10",
  kicker: "HOW · Bài 4.10 · 15 phút",
  title: "Đóng gói Build-Ready Pack — nguồn sự thật cho AI lập trình",
  highlight: "Build-Ready Pack",
  tocLabel: "4.10 · Đóng gói Build-Ready Pack",
  lead: "ChatGPT coding làm việc tốt hơn khi có **source of truth** (bộ tài liệu gốc chính thống) thay vì chỉ có ảnh. Ảnh cho thấy giao diện trông ra sao; Markdown mô tả giao diện làm gì.",
  blocks: [
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-04/dong-goi-build-ready-pack.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic bài 4.10: cây thư mục bàn giao gồm chín tệp Markdown và thư mục assets với các ảnh styleboard, storyboard, UI sheet và conversion sheet; ảnh hay Markdown; yêu cầu bắt buộc của SCREEN-SPECS và ASSET-MANIFEST; và công nghệ đích bàn giao sang Module 05 Build.",
        caption: "Hình 13 · Bài 4.10 — cây thư mục bàn giao, ảnh khác Markdown ở điểm nào và yêu cầu bắt buộc.",
      },
    },
    {
      type: "cards",
      columns: 2,
      items: [
        { title: "Ảnh", text: "Thể hiện giao diện trông ra sao: thị giác, bố cục, cảm xúc." },
        {
          title: "Markdown",
          text: "Mô tả giao diện làm gì: tên màn, chữ chuẩn, CTA, hành vi, giả thuyết, tính năng.",
        },
      ],
    },
    {
      type: "prompt",
      title: "Prompt 06 · Export Build-Ready Pack",
      when: "Chạy sau khi đã chốt toàn bộ thiết kế và các quyết định.",
      hint: "ChatGPT chưa tạo ảnh ở prompt này — xuất Markdown và liệt kê asset. Module 05 là Module Build, nơi nhận bộ tài liệu bàn giao.",
      text: `Bạn là Senior Mobile Product Designer và Product Manager.

Dựa trên toàn bộ thiết kế và các quyết định đã chốt,
hãy đóng gói bộ tài liệu chuyển giao sang Module 05.

Xuất nội dung Markdown theo các tên file sau:
- PRODUCT-BRIEF.md
- PRODUCT-BLUEPRINT.md
- USER-JOURNEYS.md
- SCREEN-MAP.md
- DESIGN-SYSTEM.md
- SCREEN-SPECS.md
- MONETIZATION.md
- ASSET-MANIFEST.md
- OPEN-QUESTIONS.md

Trong SCREEN-SPECS.md, mỗi Screen ID phải ghi:
- Mục tiêu màn hình; thành phần; nội dung chữ chuẩn.
- CTA; điều hướng; trạng thái empty/loading/error.
- Tiêu chí kiểm tra hoàn thành.

ASSET-MANIFEST.md phải ánh xạ Screen ID với tên ảnh/sheet,
mô tả phần hình cần dùng và đánh dấu rõ asset còn thiếu.
Không bịa file ảnh đã được tạo. Không tự nhận đã xuất file tải về
nếu môi trường hiện tại không có khả năng xuất file.

Gắn nhãn rõ: EVIDENCE / ASSUMPTION / DESIGN DECISION.

Tech stack đích cho Module 05 là:
React Native + Expo, Cloudflare Workers, Cloudflare D1,
Cloudflare R2; xác thực Google hoặc email/password khi cần.
Chưa tạo code hoặc sơ đồ database trong Module 04.`,
    },
    { type: "subheading", text: "Cấu trúc thư mục mẫu" },
    {
      type: "table",
      head: ["Tệp", "Nội dung"],
      rows: [
        ["`PRODUCT-BRIEF.md`", "Sản phẩm là gì"],
        ["`PRODUCT-BLUEPRINT.md`", "Bảy thành phần"],
        ["`USER-JOURNEYS.md`", "Hành trình người dùng"],
        ["`SCREEN-MAP.md`", "Danh sách màn hình"],
        ["`DESIGN-SYSTEM.md`", "Style chung"],
        ["`SCREEN-SPECS.md`", "Chi tiết từng màn"],
        ["`MONETIZATION.md`", "Gói giá"],
        ["`ASSET-MANIFEST.md`", "Màn hình ↔ ảnh"],
        ["`OPEN-QUESTIONS.md`", "Điều chưa biết"],
        [
          "`assets/`",
          "`MASTER-STYLEBOARD.png`, `MASTER-UI-STORYBOARD.png`, `UI-SHEET-01.png`, `UI-SHEET-02.png`, `UI-SHEET-03.png`, `CONVERSION-UI-SHEET.png`",
        ],
      ],
      caption: "Tất cả nằm trong một thư mục dự án, ví dụ `mobile-app-project/`.",
    },
    { type: "subheading", text: "Yêu cầu bắt buộc" },
    {
      type: "list",
      items: [
        "**SCREEN-SPECS.md:** mỗi Screen ID ghi mục tiêu, thành phần, chữ chuẩn, CTA, điều hướng, trạng thái empty / loading / error và tiêu chí hoàn thành.",
        "**ASSET-MANIFEST.md:** ánh xạ Screen ID với ảnh hoặc sheet, đánh dấu asset còn thiếu, không bịa file đã tạo.",
        "**Gắn nhãn rõ:** EVIDENCE (bằng chứng) · ASSUMPTION (giả thuyết) · DESIGN DECISION (quyết định thiết kế).",
        "**Công nghệ đích bàn giao sang Module 05:** React Native + Expo, Cloudflare Workers, Cloudflare D1, Cloudflare R2, đăng nhập Google hoặc email/password khi cần.",
      ],
    },
    {
      type: "callout",
      label: "Chưa làm ở Module 04",
      paragraphs: ["Chưa code và chưa vẽ sơ đồ database. Việc đó thuộc Module 05 — Build."],
    },
  ],
}
