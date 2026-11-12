import type { Section } from "@/lib/course-playbook/types"

// Nguồn: Phần I — WHY, mục 1.1 (vấn đề lớn nhất không còn chỉ là lập trình) và 1.2 (bốn giả định sai lầm).

export const section: Section = {
  id: "why-vi-sao",
  kicker: "WHY · Phần I · 1.1–1.2",
  title: "Tạo ra app không đồng nghĩa với tạo ra doanh thu",
  highlight: "doanh thu",
  tocLabel: "WHY · Vì sao phải kiểm chứng",
  lead: "AI đã giảm đáng kể rào cản kỹ thuật khi xây app. Nhưng khả năng tạo ra phần mềm không đồng nghĩa với khả năng tạo ra một doanh nghiệp có doanh thu.",
  blocks: [
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-03/bia-dung-xay-app-khi-chua-co-bang-chung.webp",
        width: 1536,
        height: 1024,
        alt: "Infographic bìa và phần WHY của Module 03: so sánh Product Creation với Business Validation, bốn giả định sai, ba mức tín hiệu Attention, Intent, Commitment, ba case Once, Algrow, Fastlane và năm câu hỏi Validation phải trả lời.",
        caption: "Hình 1 · Bìa Module 03 và phần WHY — bốn giả định sai, ba case, năm câu hỏi.",
      },
    },
    {
      type: "paragraph",
      text: "Trước đây, xây một mobile app đòi hỏi kiến thức lập trình, thiết kế, quản lý dữ liệu, triển khai máy chủ và nhiều kỹ năng kỹ thuật khác. Ngày nay, một người không có nhiều kinh nghiệm lập trình có thể dùng ChatGPT để viết bản mô tả sản phẩm, thiết kế giao diện và hỗ trợ viết code.",
    },
    {
      type: "paragraph",
      text: "Một ứng dụng có thể hoạt động hoàn hảo về mặt kỹ thuật nhưng không có khách hàng: nó không giải quyết vấn đề đủ quan trọng, không khác biệt với giải pháp hiện có, hoặc không có cách phân phối hiệu quả. Đây là sự khác biệt giữa hai khái niệm.",
    },
    {
      type: "cards",
      columns: 2,
      items: [
        {
          title: "Product Creation",
          meta: "Tạo sản phẩm",
          text: "Quá trình biến ý tưởng thành một sản phẩm có thể sử dụng.",
        },
        {
          title: "Business Validation",
          meta: "Kiểm chứng cơ hội kinh doanh",
          text: "Quá trình thu thập bằng chứng để đánh giá liệu có một nhóm khách hàng đủ quan tâm, sẵn sàng sử dụng và có khả năng tạo ra doanh thu cho sản phẩm hay không.",
        },
      ],
    },
    {
      type: "callout",
      label: "Một app hoàn thiện chứng minh được gì?",
      paragraphs: [
        "Một ứng dụng hoàn thiện chỉ chứng minh rằng người xây có khả năng phát triển phần mềm. **Nó chưa chứng minh rằng khách hàng cần ứng dụng đó.**",
      ],
    },
    { type: "subheading", text: "Bốn giả định sai lầm thường gặp" },
    {
      type: "accordion",
      expandFirst: true,
      items: [
        {
          number: "1",
          title: "Tôi thấy ý tưởng hay thì khách hàng cũng sẽ thấy hay",
          question: "Giá trị nào cần kiểm chứng?",
          blocks: [
            {
              type: "paragraph",
              text: "Người phát triển thường đánh giá ý tưởng dựa trên sở thích, kinh nghiệm và nhu cầu cá nhân. Nhưng người xây ứng dụng và người mua ứng dụng có thể có động cơ hoàn toàn khác nhau.",
            },
            {
              type: "paragraph",
              text: "Ví dụ: bạn muốn xây một app dùng AI để phân tích thực đơn ăn uống vì thấy công nghệ nhận diện hình ảnh rất thú vị. Khách hàng không nhất thiết quan tâm đến nhận diện hình ảnh. Họ có thể chỉ muốn biết hôm nay mình đã ăn bao nhiêu calo, hoặc có đang tiến gần mục tiêu giảm cân hay không.",
            },
            {
              type: "callout",
              label: "Nhìn đúng",
              paragraphs: [
                "Công nghệ là phương tiện. **Kết quả mà khách hàng muốn đạt được** mới là giá trị cần kiểm chứng.",
              ],
            },
          ],
        },
        {
          number: "2",
          title: "Có nhiều người quan tâm nghĩa là sẽ có nhiều người mua",
          question: "Sự quan tâm có phải là hành vi mua không?",
          blocks: [
            {
              type: "paragraph",
              text: "Sự quan tâm không tương đương với hành vi mua hàng. Một video giới thiệu app có thể nhận hàng trăm nghìn lượt xem, nhưng phần lớn người xem chỉ thấy nội dung thú vị. Một landing page (trang giới thiệu sản phẩm) có thể thu hút rất nhiều email, nhưng chưa chắc người đăng ký sẵn sàng trả phí.",
            },
            { type: "paragraph", text: "Vì vậy cần phân biệt ba dạng tín hiệu:" },
            {
              type: "cards",
              columns: 3,
              items: [
                { title: "Attention", meta: "Chú ý", text: "Người dùng chú ý đến ý tưởng." },
                {
                  title: "Intent",
                  meta: "Ý định",
                  text: "Người dùng thực hiện hành động thể hiện ý định tìm hiểu hoặc sử dụng.",
                },
                {
                  title: "Commitment",
                  meta: "Cam kết",
                  text: "Người dùng bỏ ra thời gian, công sức hoặc tiền bạc để tiến gần việc sử dụng giải pháp.",
                },
              ],
            },
            {
              type: "callout",
              label: "Nhìn đúng",
              paragraphs: ["Mức độ cam kết càng cao, bằng chứng càng có ý nghĩa đối với quyết định đầu tư."],
            },
          ],
        },
        {
          number: "3",
          title: "Cứ xây sản phẩm thật tốt rồi khách hàng sẽ tự đến",
          question: "Sản phẩm tốt có tự tiếp cận được khách hàng không?",
          blocks: [
            {
              type: "paragraph",
              text: "Trong thực tế, một sản phẩm tốt vẫn có thể thất bại nếu không tiếp cận đúng khách hàng. Một case cho thấy điều này:",
            },
            {
              type: "case",
              case: {
                title: "Money AI — tự quảng bá khó, hợp tác với creator thì khác",
                tag: "Case",
                columns: [
                  { label: "Bối cảnh", text: "Flo xây Money AI, một ứng dụng theo dõi chi tiêu." },
                  {
                    label: "Cách làm",
                    text: "Tự phát triển và quảng bá trong thời gian dài, sau đó hợp tác với một creator có khán giả phù hợp.",
                  },
                  {
                    label: "Kết quả tự công bố",
                    text: "Khoảng $300 MRR (doanh thu định kỳ hằng tháng) khi tự làm; sau khi hợp tác với creator, doanh thu tăng đáng kể.",
                  },
                ],
                source:
                  "Nguồn: phỏng vấn founder trên kênh Starter Story. Số liệu do founder tự công bố, chưa được kiểm chứng độc lập.",
              },
            },
            { type: "paragraph", text: "Từ đây cần tách hai loại rủi ro:" },
            {
              type: "cards",
              columns: 2,
              items: [
                {
                  title: "Product Risk",
                  meta: "Rủi ro sản phẩm",
                  text: "Sản phẩm không đủ giá trị để người dùng sử dụng hoặc mua.",
                },
                {
                  title: "Distribution Risk",
                  meta: "Rủi ro phân phối",
                  text: "Sản phẩm có giá trị nhưng không tiếp cận được đủ khách hàng phù hợp.",
                },
              ],
            },
            {
              type: "callout",
              label: "Nhìn đúng",
              paragraphs: [
                "Nếu chỉ kiểm chứng nhu cầu mà bỏ qua kênh phân phối, bạn chưa kiểm chứng đầy đủ cơ hội kinh doanh.",
              ],
            },
          ],
        },
        {
          number: "4",
          title: "Phải xây xong toàn bộ app mới có thể kiểm chứng",
          question: "Có cách kiểm chứng rẻ hơn việc xây xong không?",
          blocks: [
            { type: "paragraph", text: "Không phải lúc nào cũng cần xây ứng dụng hoàn chỉnh." },
            {
              type: "list",
              items: [
                "Với một số ý tưởng, khách hàng có thể cam kết thử nghiệm chỉ dựa trên bản mô tả và nguyên mẫu.",
                "Với ý tưởng khác, đặc biệt là sản phẩm có trải nghiệm mới, cần một bản thử nghiệm nhỏ để khách hàng hiểu giá trị.",
              ],
            },
            {
              type: "callout",
              label: "Nhìn đúng",
              paragraphs: [
                "Mục tiêu không phải là tuyệt đối tránh viết code trước Validation, mà là **tìm phương pháp ít tốn kém nhất để kiểm chứng giả thuyết quan trọng nhất**.",
              ],
            },
          ],
        },
      ],
    },
  ],
}
