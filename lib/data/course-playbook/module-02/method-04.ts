import type { Block } from "@/lib/course-playbook/types"
import { UNVERIFIED, figureBlock } from "./helpers"

/**
 * Giáo trình Module 02 — 04 Opportunity Discovery Framework · METHOD 04 — Community Pain Mining
 * (WHY · WHAT năm tín hiệu · case Algrow và Elephas · HOW · bài thực hành Community Pain Mining Report).
 */
export const blocks: Block[] = [
  { type: "subheading", text: "Cách 4 — Community Pain Mining (đào nỗi đau trong cộng đồng)" },
  {
    type: "callout",
    label: "Big Idea",
    paragraphs: [
      "Một cộng đồng thường chứa rất nhiều vấn đề mà khách hàng đã mô tả bằng chính ngôn ngữ của họ. Founder cần học cách nhận ra những mẫu nhu cầu lặp lại đó.",
    ],
  },
  {
    type: "paragraph",
    text: "**Vì sao đáng học?** Phương pháp này giúp bạn không phải tự tưởng tượng vấn đề. Trong Reddit, Discord, Facebook Groups, các diễn đàn chuyên môn và phần review sản phẩm, người dùng thường chia sẻ những khó khăn rất cụ thể. Đặc biệt, có thể phát hiện những vấn đề mà khách hàng đã chủ động tìm giải pháp nhưng chưa hài lòng với những lựa chọn hiện tại.",
  },
  { type: "subheading", text: "Năm tín hiệu cần tìm" },
  {
    type: "table",
    head: ["Tín hiệu", "Ví dụ câu nói của khách hàng"],
    rows: [
      ["**Repeated Questions** (câu hỏi lặp lại)", "“Có công cụ nào giúp tôi làm việc này không?”"],
      ["**Frustration** (bực bội)", "“Tôi rất khó chịu vì phải làm thủ công.”"],
      ["**Workarounds** (cách xoay xở tạm)", "“Hiện tôi phải dùng Excel và ba công cụ khác.”"],
      [
        "**Paid Alternatives** (lựa chọn đang trả phí)",
        "“Có lựa chọn nào tốt hơn phần mềm tôi đang trả phí không?”",
      ],
      ["**Unmet Requests** (yêu cầu chưa được đáp ứng)", "“Giá như ứng dụng này có thêm cách thực hiện X.”"],
    ],
    caption: "Những câu trên là ví dụ minh hoạ cách phân loại, không phải trích dẫn nguyên văn từ một cộng đồng cụ thể.",
  },
  {
    type: "paragraph",
    text: "Chuỗi cần nhớ: **Real Conversations** (cuộc trò chuyện thật) → **Repeated Pain** (nỗi đau lặp lại) → **Product Opportunity** (cơ hội sản phẩm).",
  },
  { type: "subheading", text: "Case thật: nghe cộng đồng trước, xây sau" },
  {
    type: "case",
    case: {
      title: "Algrow — Sam Adeniyi",
      tag: "Cách 4 · Community Pain Mining",
      columns: [
        {
          label: "Bối cảnh & cách tìm ra cơ hội",
          text: "**Sản phẩm:** web SaaS giúp creator tìm và làm lại format video viral, có tạo video AI; ban đầu cho YouTuber giấu mặt. **Bối cảnh:** sinh viên, không biết code; từng làm affiliate (tiếp thị liên kết) video giấu mặt kiếm hơn $10.000 nhưng không bền. **Tín hiệu:** cần tool tìm kênh Shorts → tìm chữ “niches” trong server cộng đồng → câu hỏi lặp đi lặp lại: “làm sao tìm niche?”. **Cách làm:** MVP ~1 tuần (ChatGPT → Cursor); ra mắt dù còn lỗi; tìm server qua disboard.org; vào voice chat, tắt mic, chia sẻ màn hình dùng tool ~1 tuần.",
        },
        {
          label: "Thu tiền & kết quả tự công bố",
          text: "**Thu tiền:** $25 / $45 / $80 mỗi tháng. **Tìm khách:** Discord, truyền miệng, tặng dùng miễn phí cho user sớm để họ giới thiệu. **Kết quả tự công bố:** 400 user đầu tiên đều từ Discord; hơn 10.000 user; hơn $14.000 trong 30 ngày (mốc 1:09).",
        },
        {
          label: "Bài học & câu hỏi phản biện",
          text: "**Bài học:** cộng đồng vừa giúp khám phá vấn đề, vừa có thể trở thành kênh phân phối đầu tiên. Nghe trước khi xây: dán lịch sử chat vào ChatGPT, bảo liệt kê nỗi đau lặp lại; cho xem tool, đừng mời mua. **Founder nói (9:24):** “Bạn cần lắng nghe trước khi xây bất cứ thứ gì.” **Phản biện:** chỉ chạy khi bạn là người trong cộng đồng — khách không dùng Discord thì sao?",
        },
      ],
      source: `Nguồn: Starter Story — [I Built a $14K/Month SaaS Using Discord](https://www.youtube.com/watch?v=9r0qPeSJGog), đoạn 05:31–07:00. ${UNVERIFIED} Phần giới thiệu video nêu $40K, founder nói hơn $14K trong 30 ngày — trang này dùng số founder nói. Nền tảng: web app, không phải mobile app.`,
    },
  },
  figureBlock(
    "case-07-algrow",
    "Slide case Algrow theo khung 8 câu: tìm câu hỏi lặp lại trong Discord, MVP khoảng 1 tuần, chia sẻ màn hình trong cộng đồng, 400 user đầu tiên đến từ Discord, hơn $14.000 trong 30 ngày.",
    "Hình 13 · Case Algrow — số liệu founder tự công bố, chưa kiểm chứng độc lập.",
  ),
  {
    type: "case",
    case: {
      title: "Elephas — Aayush",
      tag: "Cách 4 · Community Pain Mining",
      columns: [
        {
          label: "Bối cảnh & cách tìm ra cơ hội",
          text: "**Sản phẩm:** trợ lý AI trên Mac — biến PDF, ghi chú thành “super brain” rồi chat với chúng, có chế độ offline. **Bối cảnh:** founder vừa nghỉ việc văn phòng 11 năm, vào làm tư vấn rồi thành co-founder; hai người đã có 30+ dự án thất bại. **Tín hiệu:** bài demo trên Reddit nhận nhiều yêu cầu tính năng → “super brain” thành tính năng chính. **Cách làm:** lập ít nhất 15 subreddit, mỗi cái trên 5.000 thành viên; mỗi nỗi đau một video demo ngắn + dùng thử 30 ngày; mỗi ngày đăng một subreddit, gắn link theo dõi; sau đó mở rộng sang SEO: từ khoá độ khó dưới 20, lượng tìm trên 500.",
        },
        {
          label: "Thu tiền & kết quả tự công bố",
          text: "**Thu tiền:** gói tháng, năm, trọn đời; bán qua website, Setapp, Mac App Store, iOS. **Kết quả tự công bố:** 0 → ~$3.000 MRR (doanh thu định kỳ hằng tháng) trong 6 tháng đầu nhờ Reddit; ~12K/tháng ở thời điểm phỏng vấn; 150K ARR sau 3 năm.",
        },
        {
          label: "Bài học & câu hỏi phản biện",
          text: "**Bài học:** cộng đồng ghét bị chào bán — “show, don’t tell” (cho xem, đừng chào bán); Reddit cho phản hồi nhanh, SEO cho khách có ý định mua. **Founder nói (3:48):** “Reddit về cơ bản là mỏ vàng của những nhóm khách ngách có ý định mua cao.” **Phản biện:** mod Reddit gỡ bài nhiều hơn — playbook này còn chạy được không?",
        },
      ],
      source: `Nguồn: Starter Story — [How I Built a $13K/Month SaaS](https://www.youtube.com/watch?v=R4BS_UiTBPw), đoạn 03:48–05:31. ${UNVERIFIED} Sản phẩm có trước — Reddit dùng để demo và lấy phản hồi, nên case chỉ khớp một phần với Cách 4. Nền tảng: ứng dụng Mac, không phải mobile app.`,
    },
  },
  figureBlock(
    "case-08-elephas",
    "Slide case Elephas theo khung 8 câu: trợ lý AI trên Mac, đăng demo trên Reddit để lấy phản hồi, sau đó mở rộng sang SEO, tăng lên khoảng $3.000 MRR trong 6 tháng đầu.",
    "Hình 14 · Case Elephas — số liệu founder tự công bố, chưa kiểm chứng độc lập.",
  ),
  {
    type: "callout",
    label: "Cẩn thận với vài bình luận",
    paragraphs: [
      "ChatGPT có thể hỗ trợ phân loại phản hồi và tìm mẫu chung, nhưng không được biến những bình luận ít ỏi thành kết luận rằng cả thị trường đều có nhu cầu.",
    ],
  },
  { type: "subheading", text: "Áp dụng thế nào?" },
  {
    type: "steps",
    items: [
      { title: "Tìm 3–5 cộng đồng", text: "Tìm 3–5 cộng đồng có ICP của mình." },
      {
        title: "Gom câu hỏi lặp lại",
        text: "Thu thập những câu hỏi và vấn đề lặp lại.",
      },
      {
        title: "Nhóm Problem Clusters",
        text: "Nhóm chúng thành các Problem Clusters (cụm vấn đề).",
      },
      {
        title: "Tìm dấu hiệu đã tự khắc phục",
        text: "Tìm dấu hiệu người dùng đã thử cách khắc phục hoặc đã trả tiền.",
      },
      {
        title: "Chọn nhóm cấp thiết",
        text: "Chọn những nhóm vấn đề có mức độ cấp thiết và khả năng giải quyết tốt.",
      },
    ],
  },
  {
    type: "worksheet",
    id: "community-pain-mining-report",
    title: "Bài thực hành · Community Pain Mining Report (báo cáo đào nỗi đau cộng đồng)",
    note: "Thu thập 30 phát biểu có nguồn, phân thành ít nhất năm nhóm vấn đề và chọn ba nhóm đáng nghiên cứu.",
    fields: [
      "3–5 cộng đồng có ICP của bạn (tên và liên kết)",
      "30 phát biểu có nguồn (ghi rõ cộng đồng, ngày, liên kết)",
      "Ít nhất 5 nhóm vấn đề (Problem Clusters) bạn rút ra",
      "Dấu hiệu người dùng đã tự khắc phục hoặc đã trả tiền",
      "3 nhóm đáng nghiên cứu nhất và lý do",
    ],
  },
]
