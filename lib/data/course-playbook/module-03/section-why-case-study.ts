import type { Section } from "@/lib/course-playbook/types"

// Nguồn: Phần I — WHY, mục 1.3 (ba case study minh hoạ) và 1.4 (mục tiêu cuối cùng của Validation).

const STARTER_STORY_SOURCE =
  "Nguồn: phỏng vấn founder trên kênh Starter Story. Số liệu do founder tự kể, chưa được kiểm chứng độc lập."

export const section: Section = {
  id: "why-case-study",
  kicker: "WHY · Phần I · 1.3–1.4",
  title: "Ba case thật và mục tiêu của Validation",
  highlight: "Ba case thật",
  tocLabel: "WHY · Ba case thật",
  lead: "Ba founder kiểm chứng theo ba cách khác nhau. Điểm chung: họ tìm một hành động thật của khách hàng, không dừng ở lời khen.",
  blocks: [
    {
      type: "case",
      case: {
        title: "Case A — Once: kiểm chứng bằng cam kết thực tế",
        tag: "Cam kết thực tế",
        columns: [
          {
            label: "Bối cảnh",
            text: "Brian Shin và cộng sự xây Once, một ứng dụng máy ảnh dùng chung trong các sự kiện như tiệc sinh nhật và đám cưới.",
          },
          {
            label: "Cách làm",
            text: "Thay vì đầu tư ngay vào bản mobile app hoàn chỉnh, họ xây một phiên bản web đơn giản để thử trong sự kiện thực tế. Brian tìm người đang chuẩn bị tổ chức sự kiện qua các mối quan hệ cá nhân và tiếp cận trực tiếp.",
          },
          {
            label: "Kết quả tự công bố",
            text: "Liên hệ khoảng 250–300 khách hàng tiềm năng, nhận phản hồi từ khoảng 15 người và có khoảng 12 sự kiện được sắp xếp để thử nghiệm trong tháng.",
          },
        ],
        source: STARTER_STORY_SOURCE,
      },
    },
    {
      type: "callout",
      label: "Bài học từ Once",
      paragraphs: [
        "Điểm quan trọng không phải là bao nhiêu người nói app thú vị, mà là có những người tổ chức sự kiện thực tế sẵn sàng đưa sản phẩm vào sự kiện của họ. Đó là một tín hiệu cam kết cụ thể.",
        "Hãy xác định hành động nào chứng minh khách hàng thực sự muốn dùng sản phẩm, rồi cố gắng thu được hành động đó **trước khi đầu tư lớn**.",
      ],
    },
    {
      type: "case",
      case: {
        title: "Case B — Algrow: phát hiện nhu cầu ngay trong cộng đồng",
        tag: "Cộng đồng",
        columns: [
          {
            label: "Bối cảnh",
            text: "Sam Adeniyi tìm đến các Discord server tập trung người sáng tạo nội dung. Anh thấy các thành viên thường xuyên hỏi về cách tìm niche (ngách) và những format nội dung đang hiệu quả.",
          },
          {
            label: "Cách làm",
            text: "Sam xây MVP và dùng chính sản phẩm trong cộng đồng để người khác thấy cách nó hoạt động. Sau đó anh tạo danh sách đăng ký dùng thử và thu hút những người dùng đầu tiên từ Discord.",
          },
        ],
        source: STARTER_STORY_SOURCE,
      },
    },
    {
      type: "callout",
      label: "Bài học từ Algrow",
      paragraphs: [
        "Một cộng đồng có thể đồng thời là nơi phát hiện vấn đề, kiểm chứng giải pháp, thu thập phản hồi và tìm những khách hàng đầu tiên.",
        "Nhưng thành công của một founder trong Discord không có nghĩa Discord phù hợp với mọi ứng dụng.",
      ],
    },
    {
      type: "case",
      case: {
        title: "Case C — Fastlane: xây sản phẩm từ phản hồi liên tục",
        tag: "Phản hồi liên tục",
        columns: [
          {
            label: "Bối cảnh",
            text: "Gaurav và cộng sự ban đầu phát triển một công cụ marketing AI có phạm vi khá rộng.",
          },
          {
            label: "Cách làm",
            text: "Sau nhiều lần trao đổi với khách hàng, họ nhận ra nhu cầu nổi bật nhất là tạo nội dung video ngắn phục vụ marketing, rồi chuyển hướng sang một sản phẩm tập trung hơn.",
          },
          {
            label: "Kết quả tự công bố",
            text: "Gaurav cho biết họ thực hiện khoảng 20 cuộc gọi với khách hàng mỗi tuần và tích lũy khoảng 2.000 cuộc gọi trong quá trình phát triển.",
          },
        ],
        source: STARTER_STORY_SOURCE,
      },
    },
    {
      type: "callout",
      label: "Bài học từ Fastlane",
      paragraphs: [
        "Validation không chỉ diễn ra một lần trước khi phát triển. **Nó phải tiếp tục trong suốt quá trình hoàn thiện sản phẩm.**",
      ],
    },
    { type: "subheading", text: "Mục tiêu cuối cùng của Validation" },
    {
      type: "paragraph",
      text: "Validation không nhằm chứng minh người sáng lập đúng. Nó nhằm giúp người sáng lập phát hiện sớm khi một giả thuyết sai, chưa có đủ bằng chứng hoặc cần điều chỉnh. Một quá trình Validation có giá trị phải giúp trả lời năm câu hỏi:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Vấn đề có thực sự tồn tại và quan trọng với nhóm khách hàng mục tiêu không?",
        "Giải pháp được đề xuất có đủ sức hấp dẫn để họ thử hoặc thay đổi hành vi không?",
        "Có tín hiệu hợp lý về khả năng thu tiền không?",
        "Có con đường khả thi để tiếp cận và chuyển đổi khách hàng không?",
        "Rủi ro lớn nhất còn lại trước khi đầu tư phát triển là gì?",
      ],
    },
    {
      type: "callout",
      label: "Vì sao cần trả lời bằng bằng chứng",
      paragraphs: ["Khi năm câu hỏi này được trả lời bằng bằng chứng, bạn có cơ sở tốt hơn để quyết định bước tiếp theo."],
    },
  ],
}
