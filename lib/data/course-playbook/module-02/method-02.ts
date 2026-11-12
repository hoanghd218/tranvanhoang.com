import type { Block } from "@/lib/course-playbook/types"
import { UNVERIFIED, figureBlock } from "./helpers"

/**
 * Giáo trình Module 02 — 04 Opportunity Discovery Framework · METHOD 02 — Proven App Reverse Engineering
 * (WHY · WHAT · case Prayer Lock và Shipper · HOW · bài thực hành Competitor Reverse Engineering).
 */
export const blocks: Block[] = [
  { type: "subheading", text: "Cách 2 — Proven App Reverse Engineering (mổ xẻ app đã có người mua)" },
  {
    type: "callout",
    label: "Big Idea",
    paragraphs: [
      "Không nhất thiết phải tạo ra một loại ứng dụng hoàn toàn mới. Ta có thể bắt đầu từ một thị trường đã tồn tại và tìm cách tạo ra một lựa chọn tốt hơn.",
    ],
  },
  {
    type: "paragraph",
    text: "**Vì sao có cơ hội trong thị trường nhiều đối thủ?** Sự tồn tại của các sản phẩm có người trả tiền là một dạng bằng chứng nhu cầu. Nhưng khách hàng có thể vẫn chưa hài lòng vì ứng dụng phức tạp, thiết kế yếu, giá không phù hợp hoặc chưa phục vụ tốt một nhóm cụ thể.",
  },
  {
    type: "callout",
    label: "Cẩn thận",
    paragraphs: [
      "Thành công của đối thủ chứng minh rằng nhu cầu có thể tồn tại, chứ không chứng minh rằng phiên bản của bạn sẽ bán được.",
    ],
  },
  { type: "subheading", text: "Sáu thứ cần reverse engineer (mổ xẻ ngược)" },
  {
    type: "list",
    items: [
      "Khách hàng mục tiêu và vấn đề chính.",
      "Giá trị cốt lõi của ứng dụng.",
      "Mô hình giá và phương pháp thanh toán.",
      "Onboarding (luồng làm quen), paywall (màn chặn trả phí) và trải nghiệm quan trọng.",
      "Review tiêu cực và các yêu cầu chưa được đáp ứng.",
      "Kênh phân phối và chiến lược marketing.",
    ],
  },
  { type: "subheading", text: "Case thật: cải thiện một ý tưởng đã tồn tại" },
  {
    type: "case",
    case: {
      title: "Prayer Lock — Mal",
      tag: "Cách 2 · Proven App Reverse Engineering",
      columns: [
        {
          label: "Bối cảnh & cách tìm ra cơ hội",
          text: "**Sản phẩm:** app iOS Kitô giáo khoá điện thoại đến khi bạn cầu nguyện — trả lời 2 câu hỏi, AI soạn lời cầu nguyện, đọc xong mới mở app. **Bối cảnh:** học tài chính, tự học AI và code; ~3 tháng làm những app không ai cần, đang hết tiền. **Tín hiệu:** thấy một app đã có cơ chế khoá máy tới khi cầu nguyện → “mình làm tốt hơn được”. **Cách làm:** nghiên cứu thiết kế, tính năng, phân phối của đối thủ; gom màn hình onboarding hay nhất vào Canva; code 3 ngày với Cursor + ChatGPT; Apple duyệt hơn 1 tuần.",
        },
        {
          label: "Thu tiền & kết quả tự công bố",
          text: "**Thu tiền:** $49,99/năm hoặc $9,99/tuần. **Tìm khách:** 40 bài/ngày trên 12 tài khoản TikTok → video UGC (nội dung do người dùng / creator tạo) → quảng cáo Spark Ads ~$1,88 mỗi lượt dùng thử. **Kết quả tự công bố:** tháng 12: $21.000 (T10: 10K · T11: 15K); ~58.000 lượt tải tích luỹ; 6.700 đánh giá 4,9 sao.",
        },
        {
          label: "Bài học & câu hỏi phản biện",
          text: "**Bài học:** điểm quan trọng không nằm ở việc ý tưởng chưa từng tồn tại, mà ở khả năng thực thi trải nghiệm, định vị và phân phối khác biệt. **Founder nói (11:46):** “Tìm một app bạn thích và cải tiến nó thật nhiều.” **Phản biện:** lợi thế nằm ở bản cải tiến, hay ở sức phân phối 12 tài khoản + quảng cáo trả phí?",
        },
      ],
      source: `Nguồn: Starter Story — [I Built a $20K/Month Mobile App — My Entire Playbook](https://www.youtube.com/watch?v=yBjcmMhXSDk), đoạn 03:03–04:33. ${UNVERIFIED} Công thức của founder: tìm ngách có app > $50K/tháng, cải tiến mạnh, code dưới 2 tuần.`,
    },
  },
  figureBlock(
    "case-03-prayer-lock",
    "Slide case Prayer Lock theo khung 8 câu: app khoá điện thoại đến khi cầu nguyện, làm tốt hơn một app đã có, code 3 ngày, tháng 12 doanh thu $21.000, khoảng 58.000 lượt tải.",
    "Hình 8 · Case Prayer Lock — số liệu founder tự công bố, chưa kiểm chứng độc lập.",
  ),
  {
    type: "case",
    case: {
      title: "Shipper — David & Daniel",
      tag: "Cách 2 · Proven App Reverse Engineering",
      columns: [
        {
          label: "Bối cảnh & cách tìm ra cơ hội",
          text: "**Sản phẩm:** web AI app builder — nói chuyện với AI là ra app (website, web app, mobile app, tiện ích Chrome, bot) cho người không biết kỹ thuật. **Bối cảnh:** hai anh em không biết code, làm SaaS từ 2019, đã xây – scale – bán vài công ty. **Tín hiệu:** Base44 đạt 3 triệu ARR (doanh thu định kỳ hằng năm) trong 6 tháng, Lovable 1 triệu ARR trong 1 tuần → “chỉ cần 1% thị trường là đổi đời”. **Cách làm:** đọc Trustpilot, roadmap, Discord của đối thủ; gom lời phàn nàn (như “biến website thành mobile app”); bỏ thuật ngữ kỹ thuật; 2 founder + 1 dev: tháng 3 chạy được, tháng 5–6 vượt đối thủ.",
        },
        {
          label: "Thu tiền & kết quả tự công bố",
          text: "**Thu tiền:** credits (điểm dùng), gói rẻ nhất $25/tháng; 90% thuê bao, 10% mua thêm credits. **Tìm khách:** Product Hunt → Reddit → SEO “alternatives to X” → build in public (làm công khai) trên X; không chạy quảng cáo. **Kết quả tự công bố:** MRR 25,6K; ARR 307K; ~690 người trả tiền (mốc 1:39–2:19).",
        },
        {
          label: "Bài học & câu hỏi phản biện",
          text: "**Bài học:** một thị trường lớn có những phần việc riêng mà đội nhỏ có thể phục vụ tốt — làm bản nhỏ, đơn giản hơn của sản phẩm đã chứng minh, sửa đúng điều user ghét ở “ông lớn”. **Founder nói (0:19):** “Tìm một nỗi đau phổ biến và dồn gấp ba sức vào nó.” **Phản biện:** họ có kinh nghiệm marketing, tiền từ lần bán công ty, dev thuê sẵn — người làm lần đầu có làm được?",
        },
      ],
      source: `Nguồn: Starter Story — [I Built A Micro-Version Of A $1B SaaS](https://www.youtube.com/watch?v=Nnpz1wsTjBI), đoạn 04:10–05:38. ${UNVERIFIED} Nền tảng: web app, không phải mobile app thuần.`,
    },
  },
  figureBlock(
    "case-04-shipper",
    "Slide case Shipper theo khung 8 câu: bản thu nhỏ của thị trường AI app builder, đọc review và roadmap đối thủ, MRR 25,6K, ARR 307K, khoảng 690 người trả tiền.",
    "Hình 9 · Case Shipper — số liệu founder tự công bố, chưa kiểm chứng độc lập.",
  ),
  { type: "subheading", text: "Áp dụng thế nào?" },
  {
    type: "steps",
    items: [
      { title: "Tìm 5–10 app", text: "Tìm 5–10 app đang phục vụ ICP đã chọn ở Module 01." },
      {
        title: "Phân tích",
        text: "Phân tích trải nghiệm, tính năng, mô hình giá và marketing.",
      },
      {
        title: "Đọc review",
        text: "Nghiên cứu review để tìm những vấn đề chưa được giải quyết.",
      },
      {
        title: "Chọn Differentiation Wedge",
        text: "Xác định một Differentiation Wedge (lợi thế khác biệt có ý nghĩa).",
      },
      {
        title: "Đề xuất bản nhỏ",
        text: "Đề xuất một phiên bản nhỏ, có giá trị rõ ràng hơn cho một nhóm người dùng.",
      },
    ],
  },
  {
    type: "paragraph",
    text: "**Các hướng khác biệt thường gặp:** đơn giản hơn, nhanh hơn, cá nhân hoá hơn, phục vụ một nhóm khách hàng cụ thể hơn hoặc có cách phân phối hiệu quả hơn. Điền chuỗi: **Existing Product** (app hiện có) → **Customer Gap** (khoảng trống của khách) → **Better Proposition** (đề xuất tốt hơn).",
  },
  {
    type: "callout",
    label: "Lưu ý bản quyền",
    paragraphs: [
      "Học mô hình kinh doanh và nguyên lý trải nghiệm không có nghĩa là sao chép mã nguồn, hình ảnh, thương hiệu hay nội dung được bảo hộ của đối thủ.",
    ],
  },
  {
    type: "worksheet",
    id: "competitor-reverse-engineering",
    title: "Bài thực hành · Competitor Reverse Engineering (mổ xẻ đối thủ)",
    note: "Chọn ba app, so sánh theo sáu tiêu chí và tìm năm khoảng trống có thể khai thác.",
    fields: [
      "3 app đã chọn (tên và liên kết)",
      "Khách hàng mục tiêu và vấn đề chính của từng app",
      "Giá trị cốt lõi và mô hình giá, cách thanh toán",
      "Onboarding, paywall và trải nghiệm quan trọng",
      "Review tiêu cực và yêu cầu chưa được đáp ứng",
      "Kênh phân phối và chiến lược marketing",
      "5 khoảng trống có thể khai thác",
      "Differentiation Wedge đề xuất",
    ],
  },
]
