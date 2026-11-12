import type { Block } from "@/lib/course-playbook/types"
import { UNVERIFIED, figureBlock } from "./helpers"

/**
 * Giáo trình Module 02 — 04 Opportunity Discovery Framework · METHOD 05 — Emerging Trend Discovery
 * (WHY · WHAT bốn loại xu hướng · case Pep AI và Postiz · HOW · bài thực hành Trend-to-Opportunity Report).
 */
export const blocks: Block[] = [
  { type: "subheading", text: "Cách 5 — Emerging Trend Discovery (bắt xu hướng mới)" },
  {
    type: "callout",
    label: "Big Idea",
    paragraphs: [
      "Một xu hướng mới có thể tạo ra vấn đề mới, hành vi mới hoặc một cách tốt hơn để giải quyết nhu cầu cũ.",
    ],
  },
  {
    type: "paragraph",
    text: "**Vì sao thời điểm tham gia thị trường quan trọng?** Khi hành vi khách hàng thay đổi nhanh, những sản phẩm đang tồn tại có thể chưa đáp ứng kịp nhu cầu. Một founder nhỏ có khả năng tập trung vào một trường hợp sử dụng cụ thể và thử nghiệm nhanh.",
  },
  {
    type: "callout",
    label: "Cẩn thận",
    paragraphs: [
      "Không phải xu hướng nào cũng trở thành thị trường lâu dài. Có những chủ đề viral rất mạnh nhưng không có nhu cầu trả tiền bền vững.",
    ],
  },
  { type: "subheading", text: "Bốn loại xu hướng" },
  {
    type: "cards",
    columns: 2,
    items: [
      {
        title: "Technology Shift",
        meta: "Thay đổi công nghệ",
        text: "AI, voice interfaces (giao diện giọng nói), computer vision (thị giác máy tính), automation (tự động hoá).",
      },
      {
        title: "Behavior Shift",
        meta: "Thay đổi hành vi",
        text: "Thay đổi cách người dùng làm việc hoặc sinh hoạt.",
      },
      {
        title: "Cultural / Social Trend",
        meta: "Xu hướng văn hoá, xã hội",
        text: "Một cộng đồng hoặc chủ đề tăng trưởng nhanh.",
      },
      {
        title: "Platform Shift",
        meta: "Thay đổi nền tảng",
        text: "Nền tảng mới, API mới hoặc thay đổi cách phân phối.",
      },
    ],
  },
  {
    type: "paragraph",
    text: "Chuỗi cần nhớ: **Trend** (xu hướng) → **New Behavior** (hành vi mới) → **New Problem** (vấn đề mới) → **App Opportunity** (cơ hội app).",
  },
  { type: "subheading", text: "Case thật: bắt một làn sóng đang lên" },
  {
    type: "case",
    case: {
      title: "Pep AI — Cedric Roberge",
      tag: "Cách 5 · Emerging Trend Discovery",
      columns: [
        {
          label: "Bối cảnh & cách tìm ra cơ hội",
          text: "**Sản phẩm:** app iOS theo dõi peptide — máy tính liều, nhật ký, quiz, thư viện nghiên cứu dẫn PubMed. **Bối cảnh:** sinh viên; app đầu tiên (chợ sinh viên) có ~800 user nhưng $0. **Tín hiệu:** bạn cùng phòng rủ thử peptide → một tuần sau TikTok đầy video peptide; vài app đã có nhưng chưa app nào thành công. **Cách làm:** đọc hết review của mọi app đã có; đưa điểm khen / chê / mong muốn cho Claude; code ~2 tuần (Replit + Claude); trước ra mắt: influencer, Reddit, waitlist (danh sách chờ) ~300 người.",
        },
        {
          label: "Thu tiền & kết quả tự công bố",
          text: "**Thu tiền:** $45/năm hoặc $10/tháng, dùng thử 3 ngày. **Tìm khách:** tìm kiếm App Store (hạng #3 cho “peptide tracker”); một story Instagram của influencer = $1.000. **Kết quả tự công bố:** ~$51.000 tổng doanh thu sau 7 tuần; ~2.000 thuê bao; MRR (doanh thu định kỳ hằng tháng) 11K (mốc 1:25).",
        },
        {
          label: "Bài học & câu hỏi phản biện",
          text: "**Bài học:** từ sự chú ý của thị trường, founder tìm ra một nhu cầu sản phẩm cụ thể — xem creator đang cùng nói về điều gì, rồi đọc review tìm khoảng trống; chưa có kế hoạch marketing thì đừng xây. **Founder nói (7:02):** “Có điều gì bạn chưa từng nghe mà ai cũng đang nói tới không?” **Phản biện:** xu hướng đã đạt đỉnh, đối thủ sao chép xuất hiện — phương pháp lặp lại được hay chỉ là một cú đúng thời điểm?",
        },
      ],
      source: `Nguồn: Starter Story — [I Built a $30K/Month App in 35 Days](https://www.youtube.com/watch?v=vbEKEWtnndU), đoạn 05:48–07:28. ${UNVERIFIED} Tiêu đề video nêu $30K/tháng; số founder đưa là MRR 11K và khoảng $51K tổng sau 7 tuần.`,
    },
  },
  {
    type: "callout",
    label: "Case cần phản biện",
    paragraphs: [
      "Peptide là lĩnh vực nhạy cảm về y tế và có thể liên quan đến các chất chưa được phê duyệt. Sự phổ biến trên TikTok không chứng minh tính an toàn hoặc tính hợp pháp; founder cho biết Apple từ chối app nhiều lần.",
      "Chỉ dùng case này để học cách phát hiện xu hướng và đánh giá rủi ro, không xem là khuyến nghị xây app hướng dẫn sử dụng chất rủi ro.",
    ],
  },
  figureBlock(
    "case-09-pep-ai",
    "Slide case Pep AI theo khung 8 câu: bắt chủ đề peptide đang nổi trên TikTok, đọc review các app đã có, code khoảng 2 tuần, khoảng $51.000 sau 7 tuần; kèm cảnh báo lĩnh vực y tế nhạy cảm.",
    "Hình 16 · Case Pep AI — số liệu founder tự công bố; case dùng để học cách bắt xu hướng và đánh giá rủi ro.",
  ),
  {
    type: "case",
    case: {
      title: "Postiz — Nevo",
      tag: "Cách 5 · Emerging Trend Discovery",
      columns: [
        {
          label: "Bối cảnh & cách tìm ra cơ hội",
          text: "**Sản phẩm:** web SaaS lên lịch đăng bài cho 30+ mạng xã hội, mã nguồn mở → thành “agentic” (làm việc được với AI agent): lên lịch qua Claude, OpenClaw, ChatGPT. **Bối cảnh:** mất 1,5 năm mới lên ~17–21K MRR. **Tín hiệu:** OpenClaw ra mắt → “tôi là người mê hype” → làm Postiz sẵn sàng cho AI agent. **Cách làm:** tích hợp OpenClaw; một bài trên X của người khác về tự động hoá TikTok bằng OpenClaw + Postiz đạt 7,2 triệu view, ~700 dùng thử/ngày; tự viết bài, mỗi bài ~500K view; trả creator $60–350 mỗi lượt đăng lại; đưa API lên marketplace AI.",
        },
        {
          label: "Thu tiền & kết quả tự công bố",
          text: "**Thu tiền:** thuê bao. **Tìm khách:** bài viết trên X; creator đăng lại; marketplace của Claude, ChatGPT. **Kết quả tự công bố:** MRR: T2 41K → T3 76K → T4 80K → T5 109K → cuối T6 140K; 4.271 người trả tiền; churn (tỷ lệ khách rời bỏ) giảm còn 13,7%.",
        },
        {
          label: "Bài học & câu hỏi phản biện",
          text: "**Bài học:** không nhất thiết phải tạo công ty mới để tận dụng xu hướng — một sản phẩm đang có người dùng cũng khai thác được cơ hội mới. Xây trước, rồi chờ xu hướng tới; đừng đợi xu hướng tới mới xây. **Founder nói (7:20):** “Xây trước, rồi chờ xu hướng tới.” **Phản biện:** ông đã có sản phẩm chạy sẵn — người mới chưa có sản phẩm có bắt được làn sóng?",
        },
      ],
      source: `Nguồn: Starter Story — [How Postiz Went From $17K to $143K/Month in 4 Months](https://www.youtube.com/watch?v=n7Obxh9-Rc8), đoạn 03:19–08:18. ${UNVERIFIED} Điểm xuất phát: tiêu đề video nêu 17K, trong video nêu ~21K — trang này ghi 17–21K. Nền tảng: web app, không phải mobile app.`,
    },
  },
  figureBlock(
    "case-10-postiz",
    "Slide case Postiz theo khung 8 câu: xây sẵn sản phẩm lên lịch đăng bài rồi tận dụng làn sóng AI agent và OpenClaw, MRR tăng từ khoảng 41K lên khoảng 140K trong các tháng 2 đến 6, 4.271 người trả tiền, churn 13,7%.",
    "Hình 17 · Case Postiz — số liệu founder tự công bố, chưa kiểm chứng độc lập.",
  ),
  { type: "subheading", text: "Áp dụng thế nào?" },
  {
    type: "steps",
    items: [
      {
        title: "Theo dõi chủ đề mới",
        text: "Theo dõi chủ đề mới được nhắc đến bởi nhiều nguồn độc lập.",
      },
      { title: "Tìm điều đang đổi", text: "Tìm xem hành vi hoặc vấn đề nào thay đổi." },
      { title: "Phân tích sản phẩm có sẵn", text: "Phân tích các sản phẩm hiện có." },
      { title: "Chọn một trường hợp dùng", text: "Xác định một trường hợp sử dụng rõ ràng." },
      {
        title: "Kiểm tra độ bền",
        text: "Kiểm tra tính bền vững của nhu cầu, khả năng trả tiền và rủi ro pháp lý/kỹ thuật.",
      },
    ],
  },
  {
    type: "worksheet",
    id: "trend-to-opportunity-report",
    title: "Bài thực hành · Trend-to-Opportunity Report (từ xu hướng đến cơ hội)",
    note: "Chọn ba xu hướng, xác định vấn đề thật phía sau, đánh giá độ bền vững và đề xuất một cơ hội sản phẩm.",
    fields: [
      "3 xu hướng đã chọn (kèm nguồn độc lập nhắc đến)",
      "Hành vi hoặc vấn đề thật đang thay đổi phía sau mỗi xu hướng",
      "Độ bền vững của nhu cầu và khả năng trả tiền",
      "Rủi ro pháp lý, kỹ thuật, chính sách nền tảng",
      "Một cơ hội sản phẩm đề xuất",
    ],
  },
]
