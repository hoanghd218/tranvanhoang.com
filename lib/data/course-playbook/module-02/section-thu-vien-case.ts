import type { Section } from "@/lib/course-playbook/types"

/**
 * Giáo trình Module 02 — Phần 3/4 HOW / WHAT IF · 08 Case Study Library:
 * khung 8 câu đọc một case · bảng case theo phương pháp kèm đoạn video nên xem · lưu ý khi đọc số liệu.
 */
export const section: Section = {
  id: "thu-vien-case",
  kicker: "HOW / WHAT IF · 08 Case Study Library",
  title: "Thư viện case: đọc mỗi case theo 8 câu",
  highlight: "8 câu",
  tocLabel: "Thư viện case",
  lead: "Khoá học dùng 12 case chính cho phần phương pháp, cùng hai case bổ trợ để đối chiếu. Mọi case đọc theo cùng một khung 8 câu, để bạn học cách tìm ý tưởng chứ không chỉ nhìn con số doanh thu.",
  blocks: [
    { type: "subheading", text: "Khung 8 câu cho mỗi case" },
    {
      type: "table",
      head: ["#", "Mục", "Câu hỏi"],
      rows: [
        ["01", "**Founder & Product**", "Ai xây sản phẩm gì?"],
        ["02", "**Context**", "Trước khi có sản phẩm, hoàn cảnh như thế nào?"],
        ["03", "**Problem / Insight**", "Founder phát hiện tín hiệu nào?"],
        ["04", "**Discovery Process**", "Họ tìm ra cơ hội bằng cách nào?"],
        ["05", "**Business Model & Distribution**", "Họ thu tiền và tìm khách ra sao?"],
        ["06", "**Outcome & Evidence**", "Kết quả công bố, kèm ngày và nguồn"],
        ["07", "**Transferable Lesson**", "Bạn có thể áp dụng nguyên lý gì?"],
        [
          "08",
          "**Critical Question**",
          "Điều gì có thể khiến cách làm này không hiệu quả trong hoàn cảnh khác?",
        ],
      ],
    },
    {
      type: "callout",
      label: "Mỗi case gắn với một insight",
      paragraphs: [
        "Nếu chỉ nhìn tên founder và doanh thu, bạn dễ bị thu hút bởi kết quả mà không hiểu phương pháp tìm ý tưởng. Hãy luôn hỏi: case này dạy mình cách tìm cơ hội nào?",
        "Các con số trong case là số founder công bố tại thời điểm phỏng vấn, không đại diện cho kết quả thông thường của những người làm app.",
      ],
    },
    { type: "subheading", text: "12 case chính theo phương pháp, kèm đoạn nên xem" },
    {
      type: "table",
      head: ["Cách", "Case", "Đoạn video nên xem"],
      rows: [
        [
          "1",
          "[BulkMockup — Vikash](https://www.youtube.com/watch?v=W48emwbUlUE)",
          "02:13–04:18: công việc freelance → script → khách trả tiền",
        ],
        [
          "1",
          "[Voicy — Kourosh](https://www.youtube.com/watch?v=LrLDsvbdPr0)",
          "04:59–05:42: quan sát bố gặp khó khăn → ý tưởng",
        ],
        [
          "2",
          "[Prayer Lock — Mal](https://www.youtube.com/watch?v=yBjcmMhXSDk)",
          "03:03–03:53: phát hiện app tương tự và cải thiện",
        ],
        [
          "2",
          "[Shipper — David & Daniel](https://www.youtube.com/watch?v=Nnpz1wsTjBI)",
          "04:18–05:38: chọn một phần nhu cầu từ thị trường lớn",
        ],
        [
          "3",
          "[Cal Buddy — Tomer](https://www.youtube.com/watch?v=GQ27QVp3SzQ)",
          "04:09–06:22: Cal AI → thị trường Israel",
        ],
        [
          "3",
          "[Symmetry — Mauro](https://www.youtube.com/watch?v=OV09yPLf8BI)",
          "01:22–02:52: định vị thị trường nói tiếng Tây Ban Nha",
        ],
        [
          "4",
          "[Algrow — Sam](https://www.youtube.com/watch?v=9r0qPeSJGog)",
          "05:31–07:00: tìm câu hỏi lặp lại trong Discord",
        ],
        [
          "4",
          "[Elephas — Aayush](https://www.youtube.com/watch?v=R4BS_UiTBPw)",
          "03:48–05:31: Reddit → phản hồi → người dùng đầu tiên",
        ],
        [
          "5",
          "[Pep AI — Cedric](https://www.youtube.com/watch?v=vbEKEWtnndU)",
          "05:48–07:28: phát hiện xu hướng trên TikTok",
        ],
        [
          "5",
          "[Postiz — Nevo](https://www.youtube.com/watch?v=n7Obxh9-Rc8)",
          "03:19–08:18: thay đổi sản phẩm khi công nghệ mới xuất hiện",
        ],
        [
          "6",
          "[3AK — Christian & Braylin](https://www.youtube.com/watch?v=DiRxTfnHTaY)",
          "04:51–05:18: một niche thể thao cụ thể",
        ],
        [
          "6",
          "[Hero Analytics — Zac](https://www.youtube.com/watch?v=NPpky92ZfjA)",
          "04:58–08:27: chọn agency thay vì từng thương hiệu",
        ],
      ],
      caption: "Nguồn: các video của Starter Story trên YouTube. Marc Lou là case mở đầu ở phần Tổng quan.",
    },
    { type: "subheading", text: "Hai case bổ trợ cho phần thảo luận" },
    {
      type: "table",
      head: ["Case", "Tại sao nên xem thêm?"],
      rows: [
        [
          "[Savvy Nomad — Boring Niche](https://www.youtube.com/watch?v=BHhg-l9AZpM)",
          "Giải thích vì sao một vấn đề không hấp dẫn về mặt truyền thông vẫn có thể có giá trị kinh tế cao",
        ],
        [
          "[Snag — Benji](https://www.youtube.com/watch?v=P4QodeA_lQ0)",
          "So sánh tư duy chọn ý tưởng từ thị trường và chiến lược phân phối trước khi phát triển",
        ],
      ],
    },
    {
      type: "callout",
      label: "Cách đọc số liệu trong các case",
      paragraphs: [
        "Tiêu đề video thường nêu một con số làm tròn hoặc lớn hơn số founder nói trong video. Ở các case của module này, mỗi case ghi cả hai khi chúng khác nhau (ví dụ Voicy, Pep AI, Postiz, 3AK, Algrow) và dùng số founder nói làm số chính.",
        "Mọi con số đều do founder tự công bố, chưa kiểm chứng độc lập. Bảng trên chỉ để bạn biết nên xem đoạn nào, không phải để so sánh doanh thu.",
      ],
    },
  ],
}
