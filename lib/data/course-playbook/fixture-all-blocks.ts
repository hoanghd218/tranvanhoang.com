import type { CourseModule } from "@/lib/course-playbook/types"

/**
 * CHỈ DÙNG KHI DEV (/playbooks/ai-mobile-app/fixture) — không phải nội dung khoá học.
 * Một module "thử" có đủ MỌI loại khối trong types.ts (kể cả accordion lồng khối, prompt có {{ }},
 * checklist có riskNote, hai hình dùng chung một ảnh thật) để nhìn và thử giao diện.
 * Số liệu, tên, ví dụ trong file này đều là dữ liệu thử, không phản ánh sự thật nào.
 * course.ts chỉ nạp file này khi NODE_ENV === "development"; bản production không chứa nó.
 */

const hero = { src: "/images/editorial/hero-bridge.webp", width: 1536, height: 1024 }

const fixture: CourseModule = {
  slug: "fixture",
  number: "00",
  title: "Fixture",
  headline: "Thử đủ mọi khối chữ, hình và công cụ của playbook",
  headlineHighlight: "mọi khối",
  intro: "Trang này chỉ có ở môi trường dev, dùng để kiểm tra giao diện. Nội dung là dữ liệu thử.",
  coreQuestion: "Mỗi loại khối có hiện đúng và dùng được không?",
  output: "Một trang thử không lỗi",
  gate: { code: "G0", name: "Fixture Ready" },
  facts: [{ label: "Số khối", value: "15 loại" }, { label: "Môi trường", value: "Chỉ dev" }],
  sections: [
    {
      id: "chu-co-ban",
      kicker: "TEXT · Khối chữ",
      title: "Đoạn văn, danh sách, callout và trích dẫn",
      highlight: "danh sách",
      lead: "Lead 1–3 câu có **chữ đậm**, `mã nhỏ` và [liên kết nội bộ](/playbooks/ai-mobile-app) cùng [liên kết ngoài](https://www.tranvanhoang.com).",
      tocLabel: "Chữ cơ bản",
      blocks: [
        { type: "paragraph", text: "Đoạn văn thường với **đậm**, `code`, [liên kết](https://example.com) và một ký hiệu lạ [không an toàn](javascript:alert(1)) phải hiện nguyên văn, không thành liên kết." },
        { type: "subheading", text: "Tiêu đề nhỏ (h3 trong section)" },
        { type: "list", items: ["Mục một có **đậm**", "Mục hai có `mã`", "Mục ba có [liên kết](/vi/playbooks)"] },
        { type: "list", ordered: true, items: ["Bước đầu tiên", "Bước thứ hai", "Bước thứ ba"] },
        { type: "callout", label: "Hiểu đúng", paragraphs: ["Callout có nhãn nhỏ phía trên và nhiều đoạn.", "Đoạn thứ hai của callout, có **chữ đậm**."] },
        { type: "output", text: "Khối đầu ra mặc định có nhãn “Đầu ra”." },
        { type: "output", label: "Đầu ra riêng", text: "Khối đầu ra với nhãn tuỳ chọn." },
        { type: "quote", text: "Thiết kế để người dùng nhận được giá trị và **có lý do mua**.", by: "Triết lý thử · Fixture" },
      ],
    },
    {
      id: "the-cac-buoc-bang",
      kicker: "STRUCTURE · Thẻ, bước, bảng",
      title: "Thẻ, các bước và bảng",
      highlight: "các bước",
      lead: "Thẻ 4 cột, thẻ 2 cột, các bước có đầu ra, bảng có caption cuộn ngang trong khung.",
      blocks: [
        {
          type: "cards",
          columns: 4,
          items: [
            { title: "WHY", text: "Vì sao thiết kế đúng trước khi build?", meta: "Bài 0.1 · 10 phút" },
            { title: "WHAT", text: "Blueprint gồm những gì?", meta: "Bài 0.2 · 20 phút" },
            { title: "HOW", text: "Từ brief tới cả bộ giao diện", meta: "Bài 0.3 · 30 phút" },
            { title: "WHAT IF", text: "Thử với người thật rồi sửa", meta: "Bài 0.4 · 40 phút" },
          ],
        },
        { type: "cards", columns: 2, items: [{ title: "Thẻ rộng một", text: "Nội dung dài hơn một chút để thấy thẻ hai cột xuống dòng đẹp trên điện thoại." }, { title: "Thẻ rộng hai", text: "Thẻ không có `meta`." }] },
        {
          type: "steps",
          items: [
            { title: "DEFINE", text: "Định nghĩa · hiểu thành phần, viết brief", output: "Blueprint + Brief", meta: "Bài 0.1–0.2" },
            { title: "MAP", text: "Vẽ bản đồ · hành trình và màn hình", output: "Journey + Screen Map", meta: "Bài 0.3" },
            { title: "VERIFY & HANDOFF", text: "Kiểm chứng rồi bàn giao", output: "Build-Ready Pack" },
          ],
        },
        { type: "steps", items: [{ title: "Bước không đầu ra", text: "Danh sách bước chỉ có tiêu đề và mô tả." }, { title: "Bước thứ hai", text: "Cũng không có đầu ra." }] },
        {
          type: "table",
          caption: "Bảng thử: bốn cột để kiểm tra cuộn ngang trên điện thoại",
          head: ["Cột A", "Cột B", "Cột C", "Cột D"],
          rows: [
            ["Dòng 1 có **đậm**", "Giá trị `x`", "Một ô khá dài để kiểm tra việc xuống dòng trong bảng", "[Liên kết](/playbooks)"],
            ["Dòng 2", "Giá trị y", "Ô trống ≠ 0", "—"],
          ],
        },
      ],
    },
    {
      id: "hinh-va-accordion",
      kicker: "MEDIA · Hình và accordion",
      title: "Hình phóng to và accordion lồng khối",
      highlight: "accordion",
      blocks: [
        { type: "figure", figure: { ...hero, alt: "Hình thử: cây cầu nối hai hình người, dùng ảnh có sẵn của site để thử lightbox.", caption: "Hình 1 · Hình thử, bấm để phóng to." } },
        { type: "figure", figure: { ...hero, alt: "Hình thử thứ hai dùng cùng ảnh, để thử nút Ảnh trước, Ảnh sau.", caption: "Hình 2 · Cùng ảnh, chú thích khác — thử chuyển trước/sau." } },
        {
          type: "accordion",
          expandFirst: true,
          items: [
            {
              number: "1",
              title: "Product Strategy",
              gloss: "chiến lược sản phẩm",
              question: "Vì sao?",
              blocks: [
                { type: "subheading", text: "Định nghĩa" },
                { type: "paragraph", text: "Chọn khách hàng, vấn đề, vị thế và khác biệt." },
                { type: "list", items: ["ICP là ai?", "Vấn đề gì, khi nào?"] },
                { type: "callout", label: "Tránh", paragraphs: ["“Dành cho mọi người.”"] },
                { type: "output", text: "1–2 câu định vị + ICP." },
              ],
            },
            {
              number: "2",
              title: "MVP Scope",
              gloss: "phạm vi bản tối thiểu",
              question: "Làm ít tới đâu?",
              blocks: [
                { type: "cards", columns: 3, items: [{ title: "Must Have", text: "Ba tính năng cốt lõi" }, { title: "Later", text: "Để sau" }, { title: "Không làm ở v1", text: "Mạng xã hội" }] },
                { type: "figure", figure: { ...hero, alt: "Hình thử nằm trong accordion.", caption: "Hình 3 · Hình trong accordion." } },
              ],
            },
            {
              title: "Mục không đánh số",
              blocks: [
                { type: "table", head: ["Tên", "Giá trị"], rows: [["Một", "1"], ["Hai", "2"]] },
                { type: "quote", text: "Accordion chỉ lồng sâu một cấp." },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "prompt-case",
      kicker: "PROMPT · Mẫu và case",
      title: "Prompt có chỗ điền và case thật",
      highlight: "chỗ điền",
      blocks: [
        {
          type: "prompt",
          title: "Prompt 1 · Từ chủ đề đến danh sách vấn đề",
          when: "Bạn có một chủ đề hoặc một nhóm người muốn phục vụ.",
          text: "Hãy giúp tôi tìm ý tưởng mobile app từ bối cảnh sau.\n\n- Chủ đề: {{ví dụ: theo dõi ăn uống}}\n- Thị trường: {{ví dụ: Việt Nam, tiếng Việt}}\n\nViết mỗi vấn đề dạng “Khi {{tình huống}}, {{nhóm người}} muốn {{kết quả}}, nhưng {{trở ngại}}”.",
          hint: "Thay phần trong [ ] bằng thông tin của bạn. Chưa biết thì ghi “chưa biết”.",
          output: "Hai câu mô tả vấn đề và nhóm người cụ thể.",
        },
        {
          type: "case",
          case: {
            title: "Case thử — không phải case thật",
            tag: "Dữ liệu thử",
            columns: [
              { label: "Bối cảnh", text: "Founder giả định, dùng để thử khung case." },
              { label: "Cách làm", text: "Thiết kế trước, **code sau**." },
              { label: "Kết quả tự công bố", text: "Một con số thử. Chưa kiểm chứng độc lập." },
            ],
            source: "Nguồn: dữ liệu thử của fixture. Số liệu tự công bố, chưa được kiểm chứng độc lập.",
          },
        },
      ],
    },
    {
      id: "phieu-cong",
      kicker: "PRACTICE · Phiếu và cổng",
      title: "Phiếu ghi kết quả và cổng quyết định",
      highlight: "cổng quyết định",
      lead: "Phiếu tự lưu trên trình duyệt; cổng có thanh tiến độ. Khoá lưu: `tony-pb-fixture-<id>`.",
      blocks: [
        {
          type: "worksheet",
          id: "phieu-thu",
          title: "Phiếu ghi kết quả sau mỗi bước",
          note: "Phiếu tự lưu trên trình duyệt này, không gửi đi đâu.",
          fields: ["Bước vừa hoàn thành", "Quyết định tôi chốt", "Bằng chứng hoặc lý do", "Giả thuyết còn mở", "Đầu ra cần chuyển sang bước tiếp theo"],
        },
        {
          type: "checklist",
          id: "kiem-tra-nhanh",
          title: "Checklist thường (không phải cổng)",
          intro: "Checklist có id khác `gate` hiện nền sáng.",
          items: [{ title: "Mục một", text: "Mô tả ngắn của mục một." }, { title: "Mục hai" }, { title: "Mục ba", text: "Mục này có **chữ đậm**." }],
        },
        {
          type: "checklist",
          id: "gate",
          title: "Cổng G0 · Fixture Ready",
          intro: "Chỉ đi tiếp khi tick đủ các mục dưới đây.",
          items: [
            { title: "Product Brief", text: "Bản mô tả sản phẩm cô đọng." },
            { title: "Screen Map", text: "Hành trình và danh sách màn hình." },
            { title: "Design System", text: "Màu, chữ, thành phần dùng chung." },
            { title: "Bộ ảnh UI", text: "Toàn bộ màn hình MVP, cùng một phong cách." },
          ],
          riskNote: "**Rủi ro còn mở vẫn được chấp nhận** — nếu được ghi rõ và không làm hỏng trải nghiệm chính.",
        },
      ],
    },
  ],
}

export default fixture
