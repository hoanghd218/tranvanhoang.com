import type { Section } from "@/lib/course-playbook/types"

/**
 * Nguồn: giáo trình Module 04 — mục 1 (mục tiêu, đối tượng, sản phẩm đầu ra),
 * mục 2 (phương pháp 4MAT, thời lượng 6 giờ) và bộ infographic bìa.
 */
export const section: Section = {
  id: "tong-quan",
  kicker: "Tổng quan Module 04",
  title: "Thiết kế app để khách hiểu, dùng và trả tiền",
  highlight: "trả tiền",
  tocLabel: "Tổng quan Module 04",
  lead: "Module 04 biến một ý tưởng mobile app đã có tín hiệu thị trường thành bộ thiết kế sản phẩm thống nhất, kiểm chứng được với người dùng, có trải nghiệm chuyển đổi trả phí — và đủ rõ để AI lập trình thành MVP (phiên bản nhỏ nhất có thể mang lại giá trị thật). Bạn làm toàn bộ bằng ChatGPT trên trình duyệt web, trước khi viết một dòng code.",
  blocks: [
    {
      type: "quote",
      text: "Thiết kế để người dùng nhận được giá trị và có lý do mua — không thiết kế chỉ để nhìn đẹp.",
      by: "Triết lý cốt lõi của Module 04",
    },
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-04/bia-thiet-ke-app-khach-tra-tien.webp",
        width: 1536,
        height: 1024,
        alt: "Bìa Module 04 AI Product Design: bốn khối WHY, WHAT, HOW, WHAT IF kèm số bài và số phút (tổng 12 bài, 360 phút), năm sản phẩm đầu ra, và vị trí Module 04 Design giữa Module 03 Validate và Module 05 Build.",
        caption: "Hình 1 · Tổng quan Module 04 — bốn khối học, năm sản phẩm đầu ra, nằm giữa Validate và Build.",
      },
    },
    { type: "subheading", text: "Bốn khối của module" },
    {
      type: "cards",
      columns: 4,
      items: [
        { title: "WHY", text: "Vì sao thiết kế đúng trước khi build?", meta: "Bài 4.1–4.2 · 45 phút" },
        { title: "WHAT", text: "Product Blueprint gồm những gì?", meta: "Bài 4.3–4.4 · 75 phút" },
        { title: "HOW", text: "Brief → Journey → Style → cả bộ UI", meta: "Bài 4.5–4.10 · 180 phút" },
        { title: "WHAT IF", text: "Thử với người thật, sửa, bàn giao", meta: "Bài 4.11–4.12 · 60 phút" },
      ],
    },
    { type: "subheading", text: "Học viên là ai?" },
    {
      type: "paragraph",
      text: "Founder (người sáng lập), solopreneur (người tự kinh doanh một mình), marketer (người làm tiếp thị), người kinh doanh, hoặc người đang học Vibe Coding (viết app bằng cách ra lệnh cho AI). Bạn **không cần trở thành UI designer (người thiết kế giao diện) hay lập trình viên chuyên nghiệp**. Bạn cần biết phân biệt thiết kế có mục đích với thiết kế đẹp nhưng không giải quyết vấn đề, và biết **ra yêu cầu rõ cho AI**.",
    },
    { type: "subheading", text: "Điều kiện đầu vào" },
    {
      type: "paragraph",
      text: "Bạn đã hoàn thành Module 01–03 hoặc có thông tin tương đương:",
    },
    {
      type: "list",
      items: [
        "Một ý tưởng ứng dụng ưu tiên và nhóm khách hàng tương đối rõ.",
        "Vấn đề khách hàng, giải pháp hiện tại và điểm khác biệt dự kiến.",
        "Ít nhất một ít bằng chứng hoặc phản hồi khách hàng. Nếu chưa có, ghi rõ là **giả thuyết**, không gán là “đã được kiểm chứng”.",
        "Giả thuyết mô hình thu tiền: subscription (thuê bao định kỳ), one-time purchase (mua một lần), trả theo usage (mức sử dụng), hoặc hình thức phù hợp khác.",
      ],
    },
    { type: "subheading", text: "Năm sản phẩm đầu ra" },
    {
      type: "cards",
      columns: 3,
      items: [
        { title: "1 · Product Blueprint", text: "Bản thiết kế tổng thể sản phẩm, gồm đủ 7 thành phần." },
        { title: "2 · Product Brief", text: "Bản mô tả sản phẩm cô đọng để người và AI cùng hiểu." },
        { title: "3 · User Journey + Screen Map", text: "Hành trình trải nghiệm (User Journey) và danh sách màn hình đã chốt (Screen Map)." },
        {
          title: "4 · AI Visual Design Pack",
          text: "Bộ thiết kế UI có phong cách thống nhất, **yêu cầu ChatGPT Web tạo ảnh theo lô** — không phải học prompt thủ công từng màn.",
        },
        { title: "5 · Build-Ready Pack", text: "Tài liệu và tệp hình đủ rõ để bàn giao sang Module 05 — Build." },
      ],
    },
    {
      type: "callout",
      label: "Điểm khác biệt của module",
      paragraphs: [
        "Không dừng ở “có ảnh đẹp”. Bạn phải giải thích được **vì sao mỗi màn hình tồn tại, người dùng nhận giá trị gì, bước nào đưa người dùng đến quyết định trả tiền, và điều gì còn cần kiểm chứng**.",
      ],
    },
    {
      type: "callout",
      label: "Hai bộ prompt, đừng nhầm",
      paragraphs: [
        "Module có **hai bộ 8 prompt** khác nhau. **Bộ prompt thiết kế** (Product Brief → UX Critic) chạy trong các bài 4.5–4.11, bắt đầu từ ý tưởng đã chọn. **Bộ prompt tìm ý tưởng** đi từ một chủ đề mơ hồ đến vấn đề, app mẫu, định vị, kiểm chứng, MVP và mẫu UI. Cả hai nằm ở phần Bộ prompt phía dưới.",
      ],
    },
    { type: "subheading", text: "Phương pháp 4MAT" },
    {
      type: "paragraph",
      text: "**4MAT** là khung thiết kế trải nghiệm học tập do **Bernice McCarthy** phát triển. Thay vì truyền kiến thức một chiều, 4MAT đưa người học đi qua bốn kiểu câu hỏi.",
    },
    {
      type: "table",
      head: ["Trục", "Câu hỏi", "Người học cần nhận ra", "Hoạt động chính"],
      rows: [
        ["**WHY**", "Tại sao tôi cần học?", "Vấn đề, động lực, hệ quả thực tế", "Liên hệ trải nghiệm, phân tích tình huống"],
        ["**WHAT**", "Khái niệm và nguyên lý là gì?", "Mô hình tư duy, tiêu chuẩn, cấu phần", "Hiểu framework (khung làm việc), khái niệm, minh họa"],
        ["**HOW**", "Tôi thực hiện thế nào?", "Quy trình và kỹ năng thao tác", "Làm cùng ChatGPT, sửa, tạo sản phẩm"],
        ["**WHAT IF**", "Nếu khác đi hoặc thất bại thì sao?", "Ứng biến, phản biện, khả năng cải tiến", "Kiểm thử, điều chỉnh, trình bày, áp dụng"],
      ],
    },
    {
      type: "paragraph",
      text: "Chu trình đầy đủ của 4MAT có 8 hoạt động: Connect → Attend → Imagine → Inform → Practice → Extend → Refine → Perform. Giáo án này gom chúng thành bốn khối để dễ giảng dạy.",
    },
    {
      type: "cards",
      columns: 2,
      items: [
        { title: "WHY trước WHAT", text: "Khi hiểu hậu quả của một sản phẩm khó dùng, bạn tự chủ động học tư duy UX; không cần ép học hàng chục thuật ngữ thiết kế." },
        { title: "WHAT trước HOW", text: "Không hiểu Product Blueprint thì prompt mơ hồ: nhận ảnh đẹp nhưng thiếu màn hình, sai journey, lạc tính năng." },
        { title: "HOW bằng sản phẩm thật", text: "Mỗi phần kiến thức chuyển thành một artifact (sản phẩm cụ thể) trong cùng một dự án mobile app." },
        { title: "WHAT IF để tránh ảo tưởng", text: "ChatGPT tạo ra thiết kế thuyết phục không đồng nghĩa khách hàng hiểu hay sẵn sàng trả tiền. Phải thử với người thật." },
      ],
    },
    { type: "subheading", text: "Thời lượng đề xuất — 6 giờ học và thực hành có hướng dẫn" },
    {
      type: "table",
      head: ["4MAT", "Bài học", "Phút", "Phương thức"],
      rows: [
        ["WHY", "**4.1** App đẹp có thể không bán được", "20", "Tình huống và tranh luận"],
        ["WHY", "**4.2** UX là một phần của hệ thống bán app", "25", "Phân tích phễu"],
        ["WHAT", "**4.3** Thiết kế ngược từ giá trị", "30", "Sơ đồ và bài tập"],
        ["WHAT", "**4.4** 7 thành phần Product Blueprint", "45", "Giải nghĩa + mẫu áp dụng"],
        ["HOW", "**4.5** ChatGPT tạo Product Brief", "25", "Thực hành prompt"],
        ["HOW", "**4.6** ChatGPT xây User Journey và Screen Map", "30", "Thực hành prompt"],
        ["HOW", "**4.7** Design Template (mẫu thiết kế) và Style Direction (hướng phong cách)", "25", "Chọn phong cách + tạo styleboard (bảng phong cách mẫu) bằng ảnh"],
        ["HOW", "**4.8** Sinh toàn bộ bộ UI (giao diện) bằng một yêu cầu tạo ảnh hàng loạt", "55", "ChatGPT Web tạo ảnh"],
        ["HOW", "**4.9** Onboarding (đón người dùng mới), Aha Moment (khoảnh khắc nhận ra giá trị) và Paywall (màn thu phí)", "30", "Kiểm tra chuyển đổi + tạo ảnh cập nhật"],
        ["HOW", "**4.10** Đóng gói Build-Ready Pack", "15", "Xuất tài liệu"],
        ["WHAT IF", "**4.11** Usability Test (kiểm thử khả năng sử dụng) và Design Review (rà soát thiết kế)", "35", "Kiểm thử + cải tiến"],
        ["WHAT IF", "**4.12** Trình bày và bàn giao", "25", "Demo và phản hồi"],
        ["", "**Tổng**", "**360**", "Không phải lịch quay video"],
      ],
      caption: "Ba bài 4.4, 4.5 và 4.6 là ba nội dung riêng — giữ nguyên khi rút gọn quy trình thao tác.",
    },
  ],
}
