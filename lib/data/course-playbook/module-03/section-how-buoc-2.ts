import type { Section } from "@/lib/course-playbook/types"

// Nguồn: Phần III — HOW, Bước 2 (3.2.1–3.2.6): Customer Discovery — đối tượng, tuyển chọn, nguyên tắc phỏng vấn, hệ câu hỏi, phân tích bằng ChatGPT, cách đọc kết quả.

export const section: Section = {
  id: "how-buoc-2",
  kicker: "HOW · Bước 2 · 3.2",
  title: "Customer Discovery: nghiên cứu và phỏng vấn khách hàng",
  highlight: "phỏng vấn khách hàng",
  tocLabel: "Bước 2 · Customer Discovery",
  lead: "Kết quả bước 2: Customer Discovery Report, gồm các phát hiện từ khách hàng, trích dẫn có nguồn, các nhóm pain point (nỗi đau) và những giả thuyết được cập nhật.",
  blocks: [
    { type: "subheading", text: "3.2.1 · Xác định đúng đối tượng nghiên cứu" },
    {
      type: "paragraph",
      text: "Một sai lầm phổ biến là phỏng vấn những người dễ tiếp cận nhất thay vì những người thực sự có khả năng trở thành khách hàng. Với app dành cho người sắp phỏng vấn bằng tiếng Anh, các đối tượng phù hợp là:",
    },
    {
      type: "list",
      items: [
        "Người có lịch phỏng vấn bằng tiếng Anh trong thời gian gần.",
        "Người từng thất bại hoặc gặp khó khăn trong những cuộc phỏng vấn tương tự.",
        "Người đang chủ động tìm giải pháp luyện phỏng vấn.",
        "Người đã trả tiền cho một công cụ hoặc dịch vụ luyện phỏng vấn.",
      ],
    },
    {
      type: "callout",
      label: "Người ngoài nhóm khách hàng",
      paragraphs: [
        "Một người không có nhu cầu tìm việc hoặc không cần phỏng vấn tiếng Anh có thể góp ý hữu ích về giao diện, nhưng không phải đối tượng tốt để đánh giá nhu cầu mua.",
      ],
    },
    { type: "subheading", text: "3.2.2 · Phương pháp tuyển chọn người phỏng vấn" },
    {
      type: "table",
      head: ["Nguồn", "Mô tả"],
      rows: [
        [
          "**Cộng đồng ngách**",
          "Facebook Group, Reddit, Discord, diễn đàn nghề nghiệp và các cộng đồng có cùng vấn đề",
        ],
        [
          "**Tìm kiếm theo hành vi**",
          "Người đặt câu hỏi, tìm lời khuyên hoặc chia sẻ trải nghiệm liên quan đến vấn đề",
        ],
        [
          "**Mạng lưới cá nhân**",
          "Những người thực sự thuộc phân khúc, không phải chỉ là bạn bè có thiện chí",
        ],
        [
          "**Khách hàng đối thủ**",
          "Người đã sử dụng hoặc đánh giá một giải pháp tương tự và sẵn sàng trao đổi",
        ],
        [
          "**Khách hàng tiếp cận trực tiếp**",
          "Những người có đặc điểm phù hợp được mời tham gia nghiên cứu minh bạch",
        ],
      ],
    },
    {
      type: "callout",
      label: "Cỡ mẫu đề xuất",
      paragraphs: [
        "Trong nghiên cứu sơ bộ, bạn có thể bắt đầu với khoảng **10–15 cuộc phỏng vấn phù hợp** để phát hiện những mẫu vấn đề lặp lại. Đây là mức thực hành đề xuất, không phải số lượng mẫu thống kê bảo đảm đại diện cho toàn bộ thị trường.",
        "Nếu kết quả quá phân tán, hãy mở rộng số cuộc phỏng vấn hoặc thu hẹp phân khúc.",
      ],
    },
    { type: "subheading", text: "3.2.3 · Nguyên tắc phỏng vấn" },
    {
      type: "paragraph",
      text: "Mục tiêu là tìm hiểu sự thật, không thuyết phục khách hàng rằng ý tưởng hay. Nên hỏi về **quá khứ và hành vi thực tế**:",
    },
    {
      type: "list",
      items: [
        "“Trong lần phỏng vấn tiếng Anh gần nhất, bạn gặp khó khăn gì?”",
        "“Bạn đã chuẩn bị bằng cách nào?”",
        "“Bạn đã dành bao nhiêu thời gian hoặc tiền bạc cho việc chuẩn bị?”",
        "“Điều gì chưa hiệu quả trong cách bạn đang sử dụng?”",
        "“Điều gì đã khiến bạn quyết định tìm một phương pháp khác?”",
      ],
    },
    { type: "paragraph", text: "Hạn chế những câu hỏi mang tính dẫn dắt. Ví dụ không tốt:" },
    {
      type: "list",
      items: [
        "“Bạn có thích một app AI thông minh giúp luyện phỏng vấn 24/7 không?”",
        "“Bạn có sẵn sàng trả 199.000đ mỗi tháng cho ứng dụng tuyệt vời này không?”",
      ],
    },
    {
      type: "callout",
      label: "Vì sao tránh",
      paragraphs: [
        "Những câu hỏi như vậy dễ tạo ra lời khen hoặc câu trả lời giả định mà không phản ánh hành vi mua.",
      ],
    },
    { type: "subheading", text: "3.2.4 · Hệ thống câu hỏi Customer Discovery" },
    {
      type: "table",
      head: ["Nhóm câu hỏi", "Mục tiêu"],
      rows: [
        ["**Context**", "Hiểu hoàn cảnh và mục tiêu của khách hàng"],
        ["**Problem**", "Xác định mức độ đau và tần suất"],
        ["**Behavior**", "Tìm hiểu cách giải quyết hiện tại"],
        ["**Spending**", "Xác định thời gian, công sức và tiền bạc đã chi"],
        ["**Switching**", "Khám phá điều kiện khiến khách hàng chuyển sang giải pháp mới"],
      ],
    },
    { type: "paragraph", text: "Một cuộc phỏng vấn có thể đi theo trình tự sau:" },
    {
      type: "steps",
      items: [
        { title: "Bối cảnh", text: "Khách hàng đang làm gì, muốn đạt kết quả gì?" },
        { title: "Sự kiện gần nhất", text: "Lần cuối họ gặp vấn đề là khi nào?" },
        { title: "Cách xử lý", text: "Họ đã sử dụng phương pháp nào?" },
        { title: "Kết quả", text: "Điều gì hiệu quả hoặc không hiệu quả?" },
        { title: "Chi phí", text: "Họ đã bỏ ra những nguồn lực nào?" },
        { title: "Tác động", text: "Nếu vấn đề không được giải quyết thì điều gì xảy ra?" },
        { title: "Thay đổi", text: "Những điều kiện nào khiến họ muốn thử phương pháp khác?" },
      ],
    },
    {
      type: "paragraph",
      text: "Không nhất thiết hỏi mọi câu một cách máy móc. Hãy khuyến khích người được phỏng vấn **kể lại tình huống cụ thể**.",
    },
    {
      type: "worksheet",
      id: "phieu-phong-van",
      title: "Ghi chú một cuộc phỏng vấn khách hàng",
      note: "Ghi lời khách nói thật và việc khách đã làm. Phần suy luận của bạn ghi riêng, đừng trộn vào.",
      fields: [
        "Bối cảnh — khách hàng đang làm gì, muốn đạt kết quả gì",
        "Sự kiện gần nhất — lần cuối họ gặp vấn đề là khi nào",
        "Cách xử lý — họ đã dùng phương pháp nào",
        "Kết quả — điều gì hiệu quả hoặc không hiệu quả",
        "Chi phí — họ đã bỏ ra nguồn lực nào (thời gian, công sức, tiền)",
        "Tác động — nếu vấn đề không được giải quyết thì điều gì xảy ra",
        "Thay đổi — điều kiện nào khiến họ muốn thử phương pháp khác",
      ],
    },
    { type: "subheading", text: "3.2.5 · Phân tích kết quả bằng ChatGPT" },
    {
      type: "paragraph",
      text: "Sau khi có dữ liệu phỏng vấn được phép sử dụng, bạn có thể dùng ChatGPT hỗ trợ sáu việc:",
    },
    {
      type: "table",
      head: ["Việc", "Mục đích"],
      rows: [
        ["**Pain Point Clustering**", "Gom các vấn đề giống nhau"],
        ["**Problem Frequency Analysis**", "Xác định vấn đề lặp lại bao nhiêu lần trong mẫu"],
        ["**Customer Language Extraction**", "Trích xuất cách khách hàng tự diễn đạt vấn đề của họ"],
        ["**Alternative Analysis**", "Tổng hợp các giải pháp họ đang sử dụng"],
        ["**Objection Analysis**", "Xác định rào cản khiến khách hàng ngại thử hoặc mua giải pháp mới"],
        ["**Opportunity Mapping**", "Đề xuất những vấn đề đáng ưu tiên nghiên cứu sâu hơn"],
      ],
    },
    {
      type: "callout",
      label: "Quy tắc khi dùng AI",
      paragraphs: [
        "ChatGPT phải **phân biệt lời nói thực tế của khách hàng với suy luận của AI**, và không được tự tạo thêm câu trả lời chưa xuất hiện trong dữ liệu.",
      ],
    },
    { type: "subheading", text: "3.2.6 · Cách đọc kết quả Customer Discovery" },
    {
      type: "paragraph",
      text: "Giả sử 12 cuộc phỏng vấn cho thấy (đây là số liệu giả định):",
    },
    {
      type: "list",
      items: [
        "9 người từng gặp khó khăn khi luyện phỏng vấn.",
        "7 người đang dùng YouTube hoặc ChatGPT để chuẩn bị.",
        "4 người từng trả tiền cho khoá học hoặc gia sư.",
        "6 người mong muốn có người hoặc công cụ phản hồi chất lượng câu trả lời.",
      ],
    },
    {
      type: "paragraph",
      text: "Từ kết quả đó, có thể hình thành một giả thuyết đáng kiểm chứng:",
    },
    {
      type: "quote",
      text: "Khách hàng có thể không thiếu tài liệu học. Họ thiếu trải nghiệm luyện tập và phản hồi phù hợp với công việc.",
    },
    {
      type: "callout",
      label: "Chưa được kết luận",
      paragraphs: [
        "Chưa được kết luận rằng 6/12 người muốn phản hồi sẽ mua SpeakReady AI. Cần tiếp tục kiểm chứng **Solution** và **Payment**.",
      ],
    },
  ],
}
