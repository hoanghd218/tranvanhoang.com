import type { Block } from "@/lib/course-playbook/types"
import { UNVERIFIED, figureBlock } from "./helpers"

/**
 * Giáo trình Module 02 — 04 Opportunity Discovery Framework · METHOD 06 — Hidden & Underserved Niche
 * (WHY · WHAT năm dấu hiệu · case 3AK, Hero Analytics, Savvy Nomad · HOW · bài thực hành Underserved Niche Map).
 */
export const blocks: Block[] = [
  { type: "subheading", text: "Cách 6 — Hidden & Underserved Niche (ngách bị bỏ quên)" },
  {
    type: "callout",
    label: "Big Idea",
    paragraphs: [
      "Không cần phục vụ một thị trường thật rộng. Đôi khi việc giải quyết tốt một vấn đề của một nhóm khách hàng cụ thể có thể tạo ra một doanh nghiệp đáng kể.",
    ],
  },
  {
    type: "paragraph",
    text: "**Vì sao thị trường nhỏ lại có thể hấp dẫn?** Nhiều founder tập trung vào fitness, AI, productivity hoặc những thị trường phổ biến. Trong khi đó, những nhóm người dùng ít được nhắc đến có thể vẫn đang dùng giải pháp thủ công, phần mềm cũ hoặc dịch vụ đắt đỏ.",
  },
  {
    type: "paragraph",
    text: "Điều quan trọng không phải thị trường “nhàm chán” hay hấp dẫn về mặt truyền thông. Điều quan trọng là mức độ đau của vấn đề, khả năng thanh toán, cạnh tranh và khả năng tiếp cận khách hàng.",
  },
  {
    type: "cards",
    columns: 2,
    items: [
      { title: "Build for Everyone", meta: "Xây cho tất cả mọi người", text: "Thị trường quá rộng, khó rõ khách chính." },
      {
        title: "Build for a Specific Customer",
        meta: "Xây cho một nhóm khách cụ thể",
        text: "Giải quyết tốt một vấn đề của một nhóm xác định.",
      },
    ],
  },
  { type: "subheading", text: "Năm dấu hiệu của một niche đáng nghiên cứu" },
  {
    type: "list",
    items: [
      "Nhóm khách hàng được xác định rất rõ.",
      "Có công việc hoặc nhu cầu chuyên biệt.",
      "Giải pháp hiện tại đắt, phức tạp hoặc chưa phù hợp.",
      "Có thể tìm thấy khách hàng trong cộng đồng, directory (danh bạ) hoặc nghề nghiệp cụ thể.",
      "Giá trị được tạo ra đủ rõ để xây mô hình kiếm tiền.",
    ],
  },
  { type: "subheading", text: "Case thật: đúng nhóm khách, đúng lớp khách" },
  {
    type: "case",
    case: {
      title: "3AK — Christian & Braylin",
      tag: "Cách 6 · Hidden & Underserved Niche",
      columns: [
        {
          label: "Bối cảnh & cách tìm ra cơ hội",
          text: "**Sản phẩm:** app iOS “tất cả trong một” cho dân chạy nước rút — giáo án, dinh dưỡng, AI phân tích dáng chạy từ video; user phần lớn là người trẻ. **Bối cảnh:** hai VĐV điền kinh đại học (19–20 tuổi); từng thử trading, mất ~$3.000. **Tín hiệu:** “rất nhiều người chạy điền kinh nhưng không có app nào dành riêng cho điền kinh”. **Cách làm:** có sẵn hàng trăm nghìn follower nhờ video điền kinh; nhắc “3AK” trong video, bio, shop trước khi có app; xây ~2 tuần bằng Claude Code, RevenueCat, Supabase, chi phí dưới $500; ra mắt 16/12.",
        },
        {
          label: "Thu tiền & kết quả tự công bố",
          text: "**Thu tiền:** $10/tháng hoặc $30/năm (giá năm thấp vì user trẻ). **Tìm khách:** khán giả video điền kinh của chính họ. **Kết quả tự công bố:** tháng đầu $10.000; ~$70.000 tổng đến nay; ~40.000 user; 4,7 sao (mốc 1:14).",
        },
        {
          label: "Bài học & câu hỏi phản biện",
          text: "**Bài học:** một niche hấp dẫn khi founder vừa hiểu khách hàng vừa có lợi thế phân phối — biến việc bạn làm hằng ngày thành tiền, ra mắt ở nơi bạn đã có ảnh hưởng. **Founder nói (4:59):** “Đặt app ở đúng nơi mình đã có ảnh hưởng trong ngách.” **Phản biện:** động cơ là khán giả hàng trăm nghìn — không có khán giả thì app ngách có bán được?",
        },
      ],
      source: `Nguồn: Starter Story — [How We Built This $20K/Month AI App](https://www.youtube.com/watch?v=DiRxTfnHTaY), đoạn 04:51–05:18. ${UNVERIFIED} $20K/tháng là lời người dẫn; founder nói tháng đầu $10K, tổng khoảng $70K.`,
    },
  },
  figureBlock(
    "case-11-3ak",
    "Slide case 3AK theo khung 8 câu: app riêng cho dân chạy điền kinh, founder có sẵn khán giả theo dõi, xây khoảng 2 tuần, tháng đầu $10.000, khoảng $70.000 tổng đến nay.",
    "Hình 18 · Case 3AK — số liệu founder tự công bố, chưa kiểm chứng độc lập.",
  ),
  {
    type: "case",
    case: {
      title: "Hero Analytics — Zac",
      tag: "Cách 6 · Hidden & Underserved Niche",
      columns: [
        {
          label: "Bối cảnh & cách tìm ra cơ hội",
          text: "**Sản phẩm:** web SaaS báo cáo số liệu cho agency email/SMS chạy Klaviyo — mọi khách hàng trên một màn hình, theo dõi tiến độ mục tiêu. **Bối cảnh:** Zac (cùng Brendan) tự vận hành agency email ~6 năm, ~30 khách; trước đó làm startup được Amazon mua lại. **Tín hiệu:** mọi tool phân tích e-commerce bán cho từng brand, trong khi một agency phục vụ 10–30 brand và khổ vì báo cáo thủ công. **Cách làm:** sống với nỗi đau trong chính agency mình; xây bằng Retool, AWS, Snowflake; tìm khách qua danh bạ đối tác Shopify, Klaviyo; bán bằng lời hứa nhận thêm khách mà không thuê thêm người.",
        },
        {
          label: "Thu tiền & kết quả tự công bố",
          text: "**Thu tiền:** thuê bao theo số khách của agency — ~$500 (10 khách), ~$600 (20 khách), vài nghìn đô (~200 khách); dùng thử 30 ngày. **Kết quả tự công bố:** ra mắt 10/2024 → hơn $1 triệu ARR (doanh thu định kỳ hằng năm) sau ~19 tháng; ~96,2K MRR, thêm ~10K MRR mỗi tháng.",
        },
        {
          label: "Bài học & câu hỏi phản biện",
          text: "**Bài học:** đôi khi cơ hội không nằm ở một vấn đề mới, mà ở việc chọn đúng lớp khách hàng đứng giữa thị trường. Hãy hỏi: “ngành mình có lớp agency nào không?” — ví dụ agency chạy quảng cáo giao đồ ăn cho nhà hàng. **Founder nói (5:28):** “Qua một agency, tôi đưa được 30 brand lên nền tảng.” **Phản biện:** lợi thế là 6 năm làm agency — người ngoài có thấy nỗi đau và được agency tin không?",
        },
      ],
      source: `Nguồn: Starter Story — [I Built A $1M SaaS In A Hidden Niche](https://www.youtube.com/watch?v=NPpky92ZfjA), đoạn 04:58–08:27. ${UNVERIFIED} Nền tảng: web app, không phải mobile app.`,
    },
  },
  figureBlock(
    "case-12-hero-analytics",
    "Slide case Hero Analytics theo khung 8 câu: bán cho agency thay vì từng brand, một agency mang theo 10–30 brand, ra mắt 10/2024, hơn $1 triệu ARR sau khoảng 19 tháng, khoảng 96,2K MRR hiện tại.",
    "Hình 19 · Case Hero Analytics — số liệu founder tự công bố, chưa kiểm chứng độc lập.",
  ),
  {
    type: "case",
    case: {
      title: "Savvy Nomad — Bo (case bổ trợ)",
      tag: "Cách 6 · Hidden & Underserved Niche",
      columns: [
        {
          label: "Bối cảnh & cách tìm ra cơ hội",
          text: "**Sản phẩm:** giúp người Mỹ sống ở nước ngoài giảm thuế tiểu bang bằng cách đổi bang cư trú; sản phẩm online + cuộc gọi tư vấn; 3 gói. **Bối cảnh:** chiến tranh Ukraine khiến Bo làm lại cuộc đời; startup trước về thuế cho dân du mục số đã đóng. **Tín hiệu:** người Mỹ ở nước ngoài là nhóm lớn nhất mà ít được phục vụ nhất — nhiều người sống ở nước ngoài nhiều năm vẫn đóng thuế bang California. **Cách làm:** co-founder làm bản đầu; tìm co-founder marketing; chỉ chọn một việc — đổi bang cư trú, đóng gói thành sản phẩm; onboarding: hỏi → hiện số tiền tiết kiệm → gợi ý gói, xong dưới 1 giờ.",
        },
        {
          label: "Thu tiền & kết quả tự công bố",
          text: "**Thu tiền:** thuê bao trả trước; giá không nêu trong video. **Tìm khách:** SEO, nội dung, email. **Kết quả tự công bố:** $1,7 triệu/năm; ~140.000 MRR; 1.400+ khách; thêm 120–150 khách/tháng; 6 nhân viên.",
        },
        {
          label: "Bài học & câu hỏi phản biện",
          text: "**Bài học:** càng ít người muốn tự xử lý vấn đề, giải nó càng đáng tiền — giải một việc thật tốt. Case này dạy cách phát hiện cơ hội trong ngành ngách, không phải để sao chép mô hình vận hành vào khoá mobile app. **Founder nói (10:56):** “Chúng tôi không cố giải hết thuế quốc tế — chỉ giải một việc thật tốt.” **Phản biện:** cần chuyên môn thuế và chịu trách nhiệm pháp lý — người không chuyên vào được không?",
        },
      ],
      source: `Nguồn: Starter Story — [I Make $1.7M/Year in the Most Boring Niche Imaginable](https://www.youtube.com/watch?v=BHhg-l9AZpM), đoạn 03:43–06:25. ${UNVERIFIED} Đây là mô hình phần mềm kết hợp dịch vụ, không phải mobile app thuần.`,
    },
  },
  figureBlock(
    "case-13-savvy-nomad",
    "Slide case Savvy Nomad theo khung 8 câu: ngách nhàm chán nhưng đáng tiền là thuế cho người Mỹ sống ở nước ngoài, chỉ giải một việc đổi bang cư trú, kết quả tự công bố $1,7 triệu/năm; phần mềm kết hợp dịch vụ, không phải mobile app thuần.",
    "Hình 20 · Case Savvy Nomad (case bổ trợ) — số liệu founder tự công bố, chưa kiểm chứng độc lập.",
  ),
  { type: "subheading", text: "Áp dụng thế nào?" },
  {
    type: "steps",
    items: [
      {
        title: "Liệt kê nhóm ít được phục vụ",
        text: "Liệt kê những nhóm nghề nghiệp, cộng đồng hoặc loại khách hàng ít được phục vụ.",
      },
      {
        title: "Nghiên cứu việc họ làm",
        text: "Nghiên cứu những công việc họ phải làm thường xuyên.",
      },
      { title: "Tìm chi phí rõ", text: "Xác định vấn đề có chi phí rõ ràng." },
      {
        title: "Xem họ đang trả tiền cho ai",
        text: "Tìm các nhà cung cấp, phần mềm hoặc dịch vụ họ đang trả tiền.",
      },
      {
        title: "Đánh giá sản phẩm chuyên biệt",
        text: "Đánh giá cơ hội xây một sản phẩm chuyên biệt và khả năng tiếp cận khách hàng.",
      },
    ],
  },
  {
    type: "worksheet",
    id: "underserved-niche-map",
    title: "Bài thực hành · Underserved Niche Map (bản đồ ngách ít được phục vụ)",
    note: "Tìm năm niche, xác định vấn đề, giải pháp hiện tại, khả năng trả tiền và kênh phân phối.",
    fields: [
      "5 niche ít được phục vụ (nhóm nghề, cộng đồng hoặc loại khách hàng)",
      "Vấn đề của từng niche",
      "Giải pháp hiện tại họ đang dùng và đang trả tiền",
      "Khả năng trả tiền",
      "Kênh phân phối có thể tiếp cận",
    ],
  },
]
