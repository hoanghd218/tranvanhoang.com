import type { Section } from "@/lib/course-playbook/types"

// Nguồn: Phần II — WHAT, mục 2.3 (bốn giả thuyết quan trọng nhất) và 2.4 (phân biệt Customer, User, Buyer).

export const section: Section = {
  id: "what-bon-gia-thuyet",
  kicker: "WHAT · Phần II · 2.3–2.4",
  title: "Bốn giả thuyết quan trọng nhất",
  highlight: "Bốn giả thuyết",
  tocLabel: "WHAT · Bốn giả thuyết",
  lead: "Đây là cấu trúc được dùng thống nhất trong toàn bộ Module 03: Problem, Solution, Payment, Distribution. Mỗi giả thuyết cần bằng chứng riêng.",
  blocks: [
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-03/bon-gia-thuyet-phai-kiem-chung.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic Kiểm chứng 4 giả thuyết: chuỗi Customer, Problem, Solution, Business Model; bốn giả thuyết Problem, Solution, Payment, Distribution kèm ví dụ SpeakReady AI; bảng User, Buyer, Customer, Influencer; ma trận mức bất định và ảnh hưởng kinh doanh; so sánh Validation với PMF.",
        caption: "Hình 2 · Bốn giả thuyết, vai trò người dùng và người mua, cách chọn giả thuyết cần test trước.",
      },
    },
    {
      type: "paragraph",
      text: "Các ví dụ bên dưới dùng một ứng dụng luyện phỏng vấn tiếng Anh làm ví dụ xuyên suốt module (giới thiệu đầy đủ ở Bước 1 — Define Hypotheses).",
    },
    {
      type: "accordion",
      expandFirst: true,
      items: [
        {
          number: "A",
          title: "Problem Hypothesis",
          gloss: "giả thuyết về vấn đề",
          question: "Khách hàng có vấn đề đủ quan trọng không?",
          blocks: [
            {
              type: "paragraph",
              text: "Là nhận định chưa được kiểm chứng rằng **một nhóm khách hàng cụ thể** đang gặp một vấn đề đủ quan trọng để tìm giải pháp. Một giả thuyết tốt phải có khách hàng, vấn đề và bối cảnh rõ ràng.",
            },
            {
              type: "quote",
              text: "Những người Việt đi làm thường xuyên phải phỏng vấn bằng tiếng Anh gặp khó khăn trong việc luyện phản xạ trả lời câu hỏi chuyên môn.",
              by: "Ví dụ giả thuyết Problem",
            },
            {
              type: "paragraph",
              text: "Để kiểm chứng, cần xác định liệu tình trạng này có thực sự xảy ra, xảy ra bao lâu một lần, gây hậu quả gì và khách hàng đang xử lý bằng cách nào.",
            },
            {
              type: "callout",
              label: "Không phải vấn đề nào cũng đủ lớn",
              paragraphs: [
                "Vấn đề đáng giải quyết thường tạo ra ít nhất một loại chi phí: thời gian, tiền bạc, công sức, rủi ro, cơ hội bị bỏ lỡ hoặc sự khó chịu đáng kể. Tuy nhiên, không phải mọi vấn đề khó chịu đều đủ lớn để tạo thành thị trường trả phí.",
              ],
            },
          ],
        },
        {
          number: "B",
          title: "Solution Hypothesis",
          gloss: "giả thuyết về giải pháp",
          question: "Giải pháp có giúp đạt kết quả tốt hơn cách đang làm không?",
          blocks: [
            {
              type: "paragraph",
              text: "Là nhận định rằng giải pháp dự kiến sẽ giúp khách hàng đạt kết quả tốt hơn so với phương pháp hiện tại.",
            },
            {
              type: "quote",
              text: "Người dùng sẽ thấy việc luyện tập với AI theo tình huống công việc hữu ích hơn việc chỉ học các bài tiếng Anh giao tiếp chung.",
              by: "Ví dụ giả thuyết Solution",
            },
            {
              type: "paragraph",
              text: "Giả thuyết này cần được kiểm chứng bằng **trải nghiệm hoặc hành vi**, không chỉ bằng việc hỏi người dùng có thích ý tưởng hay không.",
            },
          ],
        },
        {
          number: "C",
          title: "Payment Hypothesis",
          gloss: "giả thuyết về khả năng thanh toán",
          question: "Khách có trả tiền ở mức giá này không?",
          blocks: [
            {
              type: "paragraph",
              text: "Là nhận định rằng nhóm khách hàng mục tiêu nhận thấy giá trị đủ lớn để chấp nhận một mức giá và cách thanh toán cụ thể. Cần phân biệt hai khái niệm:",
            },
            {
              type: "cards",
              columns: 2,
              items: [
                {
                  title: "Willingness to Pay (WTP)",
                  meta: "Mức độ sẵn sàng trả tiền",
                  text: "Mức độ sẵn sàng trả tiền cho một giá trị được đề xuất.",
                },
                {
                  title: "Ability to Pay",
                  meta: "Khả năng chi trả",
                  text: "Khả năng tài chính để thanh toán.",
                },
              ],
            },
            {
              type: "paragraph",
              text: "Một người có thể muốn dùng app nhưng không có khả năng chi trả. Ngược lại, một người có đủ tiền nhưng không thấy giá trị tương xứng sẽ không mua.",
            },
            {
              type: "callout",
              label: "Bằng chứng mạnh nhất",
              paragraphs: ["Bằng chứng Payment mạnh nhất thường đến từ **hành vi thanh toán thật** trong điều kiện minh bạch."],
            },
          ],
        },
        {
          number: "D",
          title: "Distribution Hypothesis",
          gloss: "giả thuyết về phân phối",
          question: "Có kênh khả thi để tiếp cận đúng khách không?",
          blocks: [
            {
              type: "paragraph",
              text: "Là nhận định rằng có thể tiếp cận và thu hút đúng nhóm khách hàng bằng một kênh hoặc phương pháp khả thi.",
            },
            {
              type: "quote",
              text: "Có thể tiếp cận những người đang chuẩn bị phỏng vấn việc làm bằng tiếng Anh thông qua cộng đồng tìm việc, nội dung giải quyết tình huống phỏng vấn và các kênh tìm kiếm.",
              by: "Ví dụ giả thuyết Distribution",
            },
            {
              type: "paragraph",
              text: "Giả thuyết này không chỉ cần chứng minh khách hàng xuất hiện trên một nền tảng. Nó cần đánh giá liệu thông điệp có tiếp cận được họ, có tạo hành động và có tiềm năng chuyển thành khách hàng với nguồn lực hợp lý hay không.",
            },
          ],
        },
      ],
    },
    { type: "subheading", text: "Ai dùng, ai quyết định mua, ai trả tiền?" },
    {
      type: "paragraph",
      text: "Trong một số loại ứng dụng, người sử dụng và người thanh toán là cùng một người — ví dụ app quản lý thói quen cá nhân thường do người dùng tự mua. Nhưng điều này không đúng với mọi mô hình.",
    },
    {
      type: "table",
      head: ["Vai trò", "Định nghĩa", "Ví dụ"],
      rows: [
        ["**User**", "Người trực tiếp sử dụng sản phẩm", "Học sinh sử dụng app học tiếng Anh"],
        ["**Buyer**", "Người ra quyết định mua hoặc thanh toán", "Phụ huynh trả tiền"],
        [
          "**Customer**",
          "Cá nhân hoặc tổ chức có quan hệ mua và sử dụng sản phẩm",
          "Gia đình đăng ký gói học",
        ],
        [
          "**Influencer / Recommender**",
          "Người ảnh hưởng đến quyết định lựa chọn",
          "Giáo viên giới thiệu ứng dụng",
        ],
      ],
    },
    {
      type: "callout",
      label: "Với app B2B (doanh nghiệp mua cho doanh nghiệp)",
      paragraphs: [
        "Người dùng có thể là nhân viên, người duyệt mua là trưởng bộ phận, còn người thanh toán là doanh nghiệp. Nếu chỉ phỏng vấn người sử dụng mà không tìm hiểu **người quyết định mua**, kết quả Validation có thể chưa đầy đủ.",
      ],
    },
  ],
}
