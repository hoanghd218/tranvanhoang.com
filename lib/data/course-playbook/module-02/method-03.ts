import type { Block } from "@/lib/course-playbook/types"
import { UNVERIFIED, figureBlock } from "./helpers"

/**
 * Giáo trình Module 02 — 04 Opportunity Discovery Framework · METHOD 03 — Localization & Verticalization
 * (WHY · WHAT · case Cal Buddy và Symmetry · HOW · bài thực hành Localization Opportunity Map).
 */
export const blocks: Block[] = [
  { type: "subheading", text: "Cách 3 — Localization & Verticalization (bản địa hoá và chuyên biệt hoá)" },
  {
    type: "callout",
    label: "Big Idea",
    paragraphs: [
      "Một sản phẩm thành công ở quốc gia A không có nghĩa nó đã phục vụ tốt khách hàng tại quốc gia B. Tương tự, một app phục vụ nhóm đại chúng có thể chưa phù hợp với một nghề nghiệp hoặc cộng đồng cụ thể.",
    ],
  },
  {
    type: "paragraph",
    text: "**Vì sao thị trường địa phương có thể là cơ hội?** Các ứng dụng lớn có thể tối ưu cho nhóm khách hàng chính của họ, nhưng chưa phù hợp với ngôn ngữ, văn hoá, thói quen, mức giá hoặc kênh phân phối tại một thị trường khác. Một founder bản địa có thể hiểu những yếu tố đó tốt hơn.",
  },
  { type: "subheading", text: "Hai hướng chính" },
  {
    type: "cards",
    columns: 2,
    items: [
      {
        title: "Localization (bản địa hoá)",
        text: "Thay đổi ngôn ngữ, trải nghiệm, nội dung, giá và marketing cho một quốc gia hoặc nhóm văn hoá.",
      },
      {
        title: "Verticalization (chuyên biệt hoá theo ngành)",
        text: "Đưa một giải pháp phổ biến thành sản phẩm dành riêng cho một ngành nghề hoặc nhóm khách hàng hẹp.",
      },
    ],
  },
  {
    type: "paragraph",
    text: "Ví dụ giả định: thay vì ứng dụng quản lý công việc cho mọi người, có thể tạo ứng dụng dành riêng cho những người quản lý salon tóc, nếu nhóm đó có quy trình và nhu cầu đủ khác biệt.",
  },
  {
    type: "paragraph",
    text: "Chuỗi cần điền: **Global Winner** (sản phẩm thắng ở thị trường gốc) → **Local Gap** (khoảng trống ở địa phương) → **Localized Winner** (bản địa hoá thắng). Ví dụ: Cal AI → người dùng Israel, tiếng Hebrew, món ăn địa phương → Cal Buddy.",
  },
  { type: "subheading", text: "Case thật: mang mô hình đã thắng đến nơi chưa được phục vụ" },
  {
    type: "case",
    case: {
      title: "Cal Buddy — Tomer",
      tag: "Cách 3 · Localization & Verticalization",
      columns: [
        {
          label: "Bối cảnh & cách tìm ra cơ hội",
          text: "**Sản phẩm:** app iOS đếm calo bằng AI — chụp món ăn ra calo và macro trong vài giây; tiếng Hebrew, cho người Israel. **Bối cảnh:** làm marketing thuê thấy “cực kỳ chán”; không phải developer. **Tín hiệu:** nghe podcast founder Cal AI kể vượt $1 triệu/tháng → “app đã tồn tại không sao, nếu thị trường của tôi chưa ai biết nó”. **Cách làm:** lấy app đã thắng, là người đầu tiên bản địa hoá; thị trường nhỏ thì ngách phải lớn: dinh dưỡng; Cursor: 2 tuần có bản chạy, ~2 tháng lên App Store; sửa theo cách người Israel ăn và nói về món ăn.",
        },
        {
          label: "Thu tiền & kết quả tự công bố",
          text: "**Tìm khách:** quảng cáo trả phí (CPM — chi phí mỗi nghìn lượt hiển thị — ở Israel rẻ hơn Mỹ) → ~20K/tháng sau 4 tháng; influencer chia % doanh thu → từ 20K lên 80K. **Kết quả tự công bố:** ra mắt 6/2025; tháng đầu ~$1.000 → tháng gần nhất hơn $81.000 (mốc 1:44).",
        },
        {
          label: "Bài học & câu hỏi phản biện",
          text: "**Bài học:** bản địa hoá không đơn giản là dịch ngôn ngữ — nó là Customer Fit + Cultural Fit + Distribution Fit (hợp khách hàng, hợp văn hoá, hợp kênh phân phối): ngôn ngữ, món ăn, thương hiệu và kênh của người bản xứ. **Founder nói (2:23):** “App đã tồn tại cũng không sao, nếu ở thị trường của tôi chưa ai biết đến nó.” **Phản biện:** không có nền marketing, không quen influencer lớn — có làm lại được không?",
        },
      ],
      source: `Nguồn: Starter Story — [I Copied a Huge App. Now I Make $80K/Month](https://www.youtube.com/watch?v=GQ27QVp3SzQ), đoạn 04:09–06:22. ${UNVERIFIED}`,
    },
  },
  figureBlock(
    "case-05-cal-buddy",
    "Slide case Cal Buddy theo khung 8 câu: mang app đếm calo Cal AI về thị trường Israel bằng tiếng Hebrew, ra mắt 6/2025, tháng đầu khoảng $1.000 và tháng gần nhất hơn $81.000.",
    "Hình 11 · Case Cal Buddy — số liệu founder tự công bố, chưa kiểm chứng độc lập.",
  ),
  {
    type: "case",
    case: {
      title: "Symmetry — Mauro",
      tag: "Cách 3 · Localization & Verticalization",
      columns: [
        {
          label: "Bối cảnh & cách tìm ra cơ hội",
          text: "**Sản phẩm:** app ghi buổi tập (tạ, rep), xếp hạng nhóm cơ, mạng xã hội kiểu Strava, streak; iOS + Android; chủ yếu phục vụ Tây Ban Nha và Mexico. **Bối cảnh:** founder (22 tuổi) từng béo phì, gym thay đổi cuộc sống; các founder là YouTuber fitness. **Tín hiệu:** muốn giúp nhiều người hơn bằng thứ đã giúp mình. **Cách làm:** làm thứ mình muốn → “tệ”; làm theo lời user → “tạm được”; thử nghiệm A/B có hệ thống — thêm một màn hình cam kết tập giúp giữ chân thêm 3%.",
        },
        {
          label: "Thu tiền & kết quả tự công bố",
          text: "**Tìm khách:** thử rồi bỏ cộng đồng YouTube sẵn có và influencer. Thắng nhờ UGC (nội dung do creator tạo): ~80.000 video, 500+ tài khoản, ~8 tỷ lượt xem mỗi năm, creator nhận gần nửa doanh thu. **Kết quả tự công bố:** ~$160.000/tháng; ~3 triệu lượt tải (mốc 1:46).",
        },
        {
          label: "Bài học & câu hỏi phản biện",
          text: "**Bài học:** sản phẩm không giải quyết một nhu cầu hoàn toàn mới nhưng được xây cho một thị trường ngôn ngữ cụ thể; chỉ thử nghiệm chỗ ảnh hưởng nhiều user. **Founder nói (11:03):** “Bạn phải đi từ vấn đề, không đi từ giải pháp.” **Phản biện:** thắng nhờ bản địa hoá, hay nhờ cỗ máy 80.000 video UGC?",
        },
      ],
      source: `Nguồn: Starter Story — [How I Built This $160K/Month Gym App](https://www.youtube.com/watch?v=OV09yPLf8BI), đoạn 01:22–02:52 và 05:32–06:41. ${UNVERIFIED} Video không kể quá trình bản địa hoá — đây là cách Starter Story xếp case vào Cách 3.`,
    },
  },
  figureBlock(
    "case-06-symmetry",
    "Slide case Symmetry theo khung 8 câu: app tập gym cho thị trường nói tiếng Tây Ban Nha, thử nghiệm A/B, thắng nhờ UGC khoảng 80.000 video, kết quả tự công bố khoảng $160.000/tháng và 3 triệu lượt tải.",
    "Hình 12 · Case Symmetry — số liệu founder tự công bố, chưa kiểm chứng độc lập.",
  ),
  { type: "subheading", text: "Áp dụng thế nào?" },
  {
    type: "steps",
    items: [
      {
        title: "Tìm sản phẩm gốc",
        text: "Tìm sản phẩm có nhu cầu rõ ràng ở thị trường gốc.",
      },
      {
        title: "Chọn nơi khác biệt",
        text: "Chọn thị trường địa phương hoặc phân khúc có hành vi khác biệt.",
      },
      {
        title: "Kiểm sản phẩm hiện tại",
        text: "Kiểm tra các sản phẩm hiện tại đã phục vụ nhóm đó đến mức nào.",
      },
      {
        title: "Tìm lợi thế",
        text: "Xác định lợi thế về ngôn ngữ, dữ liệu, nội dung, giá hoặc phân phối.",
      },
      {
        title: "Ước lượng quy mô",
        text: "Ước lượng quy mô phân khúc có đủ để hỗ trợ mô hình kinh doanh hay không.",
      },
    ],
  },
  {
    type: "worksheet",
    id: "localization-opportunity-map",
    title: "Bài thực hành · Localization Opportunity Map (bản đồ cơ hội bản địa hoá)",
    note: "Phân tích ba sản phẩm quốc tế và đề xuất một cơ hội địa phương hoặc một phiên bản chuyên biệt.",
    fields: [
      "3 sản phẩm quốc tế đã chọn và nhu cầu rõ ràng ở thị trường gốc",
      "Thị trường địa phương hoặc phân khúc có hành vi khác biệt",
      "Các sản phẩm hiện tại đã phục vụ nhóm đó đến mức nào?",
      "Lợi thế về ngôn ngữ, dữ liệu, nội dung, giá hoặc phân phối",
      "Quy mô phân khúc có đủ hỗ trợ mô hình kinh doanh không?",
      "Cơ hội địa phương hoặc phiên bản chuyên biệt đề xuất",
    ],
  },
]
