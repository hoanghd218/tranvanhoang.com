import type { Section } from "@/lib/course-playbook/types"

// Nguồn: Phần IV — WHAT IF (4.1–4.7): mười tình huống thường gặp và sáu tình huống khó (khen suông, chưa thể bán trước, đã có app lớn, trả tiền muộn, ngân sách nhỏ, lĩnh vực nhạy cảm).

const STARTER_STORY_SOURCE =
  "Nguồn: phỏng vấn founder trên kênh Starter Story. Điều founder chia sẻ là lời tự kể, chưa được kiểm chứng độc lập."

export const section: Section = {
  id: "what-if",
  kicker: "WHAT IF · Phần IV · 4.1–4.7",
  title: "Kết quả hiếm khi rõ ràng — hãy biết cách đọc nó",
  highlight: "biết cách đọc",
  tocLabel: "WHAT IF · Kết quả không rõ",
  lead: "Thử nghiệm hiếm khi cho câu trả lời hoàn toàn rõ ràng: nhiều lượt xem nhưng ít người mua, có người muốn mua nhưng khó tiếp cận, hoặc có khách trả tiền nhưng trải nghiệm chưa đủ tốt. Phần này giúp bạn tự ra quyết định thay vì chỉ làm theo checklist.",
  blocks: [
    { type: "subheading", text: "4.1 · Mười tình huống thường gặp" },
    {
      type: "table",
      head: ["Tình huống", "Điều có thể xảy ra", "Hướng xử lý"],
      rows: [
        [
          "**1.** Nhiều lượt xem, ít đăng ký",
          "Nội dung thu hút sai người hoặc CTA chưa phù hợp",
          "Kiểm tra đối tượng, thông điệp và hành trình chuyển đổi",
        ],
        [
          "**2.** Nhiều đăng ký, không ai muốn demo",
          "Lời hứa hấp dẫn nhưng mức cam kết thấp",
          "Kiểm chứng sâu hơn nhu cầu và sự phù hợp của giải pháp",
        ],
        [
          "**3.** Khách hàng thích nhưng không trả tiền",
          "Giá trị chưa đủ, mức giá chưa phù hợp hoặc thiếu niềm tin",
          "Nghiên cứu rào cản và thử nghiệm lời đề nghị khác",
        ],
        [
          "**4.** Khách hàng có nhu cầu nhưng không tìm được kênh tiếp cận",
          "Distribution Risk cao",
          "Thử đối tác, cộng đồng, search hoặc phân khúc hẹp hơn",
        ],
        [
          "**5.** Có người trả tiền nhưng không sử dụng",
          "Giá trị thực tế chưa đạt kỳ vọng",
          "Kiểm chứng Core Experience (trải nghiệm cốt lõi) trước khi mở rộng",
        ],
        [
          "**6.** Đối thủ quá lớn",
          "Sản phẩm thiếu lợi thế cạnh tranh",
          "Tìm một nhóm khách hàng hoặc vấn đề cụ thể chưa được phục vụ tốt",
        ],
        [
          "**7.** Không có đối thủ rõ ràng",
          "Có thể là thị trường mới hoặc chưa có nhu cầu thương mại",
          "Tăng cường Customer Discovery và Commitment Test",
        ],
        [
          "**8.** Kết quả các thử nghiệm mâu thuẫn",
          "Có thể sai lệch mẫu, kênh hoặc thông điệp",
          "Tách nhóm khách hàng và kiểm chứng từng nguyên nhân",
        ],
        [
          "**9.** Không thể kiểm chứng nếu chưa có app",
          "Giá trị phụ thuộc trải nghiệm thực tế",
          "Xây prototype nhỏ để kiểm chứng, chưa xây cả sản phẩm",
        ],
        [
          "**10.** Có nhu cầu nhưng sản phẩm tốn quá nhiều chi phí phục vụ",
          "Rủi ro Unit Economics (kinh tế trên mỗi khách hàng)",
          "Điều chỉnh mô hình giá, phạm vi dịch vụ hoặc chi phí trước khi đầu tư tiếp",
        ],
      ],
    },
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-03/khi-ket-qua-khong-ro-rang.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic Kết quả hiếm khi rõ ràng: sáu tình huống khó (ai cũng khen, chưa thể có khách trả tiền trước khi xây, đã có app tương tự thành công, khách trả tiền sau khi dùng lâu, ngân sách rất nhỏ, lĩnh vực nhạy cảm), sáu tiêu chí độ tin cậy của bằng chứng và bảng chuyển kết quả Validation sang Module 04 — Design.",
        caption:
          "Hình 8 · Sáu tình huống khó, sáu tiêu chí độ tin cậy của bằng chứng và cách nối sang Module 04.",
      },
    },
    { type: "subheading", text: "Sáu tình huống khó cần tự phán đoán" },
    {
      type: "accordion",
      expandFirst: true,
      items: [
        {
          title: "4.2 · Nếu mọi người đều nói rằng ý tưởng rất hay?",
          question: "Lời khen có đủ để quyết định không?",
          blocks: [
            { type: "paragraph", text: "Đây là một tín hiệu chưa đủ mạnh." },
            {
              type: "paragraph",
              text: "Khách hàng có thể khen vì lịch sự, vì ý tưởng thú vị hoặc vì họ không phải đánh đổi điều gì khi trả lời.",
            },
            {
              type: "callout",
              label: "Cần làm",
              paragraphs: [
                "Chuyển từ lời nói sang hành động. Thay vì chỉ hỏi có thích không, hãy quan sát liệu họ có sẵn sàng hoàn thành demo, dành thời gian thử nghiệm hoặc thực hiện một cam kết thực tế.",
              ],
            },
          ],
        },
        {
          title: "4.3 · Nếu không thể có khách hàng trả tiền trước khi xây?",
          question: "Xây tới mức nào là đủ?",
          blocks: [
            {
              type: "paragraph",
              text: "Có những loại sản phẩm mà khách hàng phải trải nghiệm mới hiểu giá trị.",
            },
            {
              type: "case",
              case: {
                title: "Jordan Rejaud — Validation và MVP gần như đi cùng nhau",
                tag: "Case",
                columns: [
                  { label: "Bối cảnh", text: "Jordan Rejaud xây một sản phẩm cho một thị trường rất đặc thù." },
                  {
                    label: "Điều founder chia sẻ",
                    text: "Trong trường hợp của anh, Validation và việc tạo MVP gần như diễn ra cùng nhau.",
                  },
                ],
                source: STARTER_STORY_SOURCE,
              },
            },
            {
              type: "callout",
              label: "Lưu ý",
              paragraphs: [
                "Không dùng điều này làm lý do xây đầy đủ mọi tính năng. Khi cần xây trước, chỉ xây **phần nhỏ nhất đủ để kiểm chứng giả thuyết chưa rõ**.",
              ],
            },
          ],
        },
        {
          title: "4.4 · Nếu đã có một app tương tự rất thành công?",
          question: "Vì sao khách chọn app của mình?",
          blocks: [
            {
              type: "paragraph",
              text: "Đây là tình huống có hai mặt. Một sản phẩm thành công có thể cung cấp bằng chứng rằng khách hàng sẵn sàng trả tiền cho loại giải pháp đó. Nhưng nó cũng tạo áp lực cạnh tranh.",
            },
            {
              type: "case",
              case: {
                title: "Cal Buddy — bản địa hoá một mô hình đã nổi tiếng",
                tag: "Case",
                columns: [
                  {
                    label: "Cách làm",
                    text: "Tomer chọn bản địa hoá mô hình calorie tracker (app theo dõi lượng calo) nổi tiếng sang thị trường Israel.",
                  },
                  { label: "Trọng tâm", text: "Tập trung mạnh vào thương hiệu cùng phân phối." },
                ],
                source: STARTER_STORY_SOURCE,
              },
            },
            {
              type: "callout",
              label: "Câu hỏi cần trả lời",
              paragraphs: [
                "**Tại sao một nhóm khách hàng đủ cụ thể sẽ chọn app của mình thay vì đối thủ?** Lợi thế có thể là ngôn ngữ, trải nghiệm đơn giản hơn, giá bán, tính năng chuyên biệt hoặc khả năng tiếp cận khách hàng tốt hơn. Không chỉ sao chép sản phẩm rồi mặc định sẽ có kết quả tương tự.",
              ],
            },
          ],
        },
        {
          title: "4.5 · Nếu khách hàng chỉ trả tiền sau khi sử dụng lâu dài?",
          question: "Commitment Test cần dài bao lâu?",
          blocks: [
            {
              type: "paragraph",
              text: "Không phải mọi ứng dụng đều phù hợp với việc bán ngay trong lần mở đầu tiên.",
            },
            {
              type: "case",
              case: {
                title: "Voltaire — khách mua sau một thời gian dùng",
                tag: "Case",
                columns: [
                  {
                    label: "Bối cảnh",
                    text: "Rasty, founder của Voltaire, chia sẻ về thời điểm khách hàng quyết định mua.",
                  },
                  {
                    label: "Điều founder chia sẻ",
                    text: "Nhiều khách hàng mua gói trả phí sau một thời gian sử dụng, trong khi tỷ lệ mua ngay ngày đầu thấp hơn đáng kể.",
                  },
                ],
                source: STARTER_STORY_SOURCE,
              },
            },
            {
              type: "paragraph",
              text: "Nếu app có loại giá trị tăng dần theo thời gian, cần thiết kế Commitment Test đủ dài để quan sát hành vi. Với app lưu trữ dữ liệu, quản lý công việc hoặc những công cụ cần tạo sự tin tưởng, ép người dùng quyết định mua quá sớm có thể làm sai lệch kết quả kiểm chứng.",
            },
          ],
        },
        {
          title: "4.6 · Nếu bạn chỉ có ngân sách rất nhỏ?",
          question: "Bắt đầu từ đâu khi không có tiền chạy ads?",
          blocks: [
            {
              type: "paragraph",
              text: "Không nhất thiết bắt đầu bằng paid ads (quảng cáo trả phí). Có thể ưu tiên phỏng vấn khách hàng, nghiên cứu cộng đồng, tiếp cận trực tiếp, prototype nhỏ và các thử nghiệm phân phối hữu cơ.",
            },
            {
              type: "callout",
              label: "Ngân sách nhỏ vẫn có chi phí",
              paragraphs: [
                "Bạn vẫn phải tính thời gian của mình, chi phí công cụ, số giờ thực hiện và cơ hội bỏ lỡ khi theo đuổi một ý tưởng. **Đặt giới hạn nguồn lực trước khi bắt đầu** và xác định khi nào cần dừng thử nghiệm.",
              ],
            },
          ],
        },
        {
          title: "4.7 · Nếu ứng dụng thuộc lĩnh vực nhạy cảm?",
          question: "Cần xét thêm điều gì?",
          blocks: [
            {
              type: "paragraph",
              text: "Với các lĩnh vực như sức khoẻ, tài chính, giáo dục trẻ em hoặc dịch vụ liên quan dữ liệu riêng tư, Validation phải xem xét thêm:",
            },
            {
              type: "list",
              items: [
                "Sản phẩm có tạo ra nguy cơ cho người dùng không?",
                "Những lời hứa giá trị có cơ sở không?",
                "Có yêu cầu chuyên môn, pháp lý hoặc quy định nền tảng đặc biệt không?",
                "Có cần sự đồng ý hoặc cơ chế bảo vệ dữ liệu bổ sung không?",
                "Một bản prototype chưa hoàn chỉnh có thể gây hiểu nhầm hoặc hậu quả thực tế không?",
              ],
            },
            {
              type: "callout",
              label: "Quan tâm chưa phải an toàn",
              paragraphs: [
                "Một app sức khoẻ có nhiều người quan tâm chưa đủ để kết luận rằng nó an toàn hoặc phù hợp để phát hành.",
              ],
            },
          ],
        },
      ],
    },
  ],
}
