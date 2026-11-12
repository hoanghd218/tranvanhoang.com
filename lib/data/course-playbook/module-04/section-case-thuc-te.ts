import type { Section } from "@/lib/course-playbook/types"

/**
 * Nguồn: giáo trình Module 04 — mục "Tài liệu tham khảo và case study ứng dụng", ghi chú về số liệu case,
 * và ba infographic case (Frederick James, Snag, Symmetry). Số liệu là founder tự công bố trong video phỏng vấn.
 */
export const section: Section = {
  id: "case-thuc-te",
  kicker: "WHAT IF · Case thật",
  title: "Ba case thật: thiết kế trước, rồi mới code",
  highlight: "thiết kế trước",
  tocLabel: "Ba case thật",
  lead: "Ba founder kể lại cách họ làm app trong video phỏng vấn của Starter Story. Đây là kinh nghiệm tham khảo từ người được phỏng vấn, không phải lời đảm bảo kết quả hay công thức chuyển đổi áp dụng giống nhau cho mọi sản phẩm. Mọi số liệu là **tự công bố, chưa kiểm chứng độc lập**.",
  blocks: [
    {
      type: "case",
      case: {
        title: "Frederick James — “I Built a $10K/Month App in 88 Days”",
        tag: "Bài 4.4–4.8 · Thiết kế trước khi code",
        columns: [
          {
            label: "Bối cảnh",
            text: "Founder là developer 5 năm ở một công ty công nghệ lớn tại London, xây công khai (build in public) trên X. Anh thấy một bài trên X mổ xẻ onboarding của một app khác. Sản phẩm là app iOS theo dõi thói quen, mảng sức khỏe, tập trung thiết kế cao cấp; tên app không được công bố.",
          },
          {
            label: "Cách làm",
            text: "Lấy một app đã có, làm thiết kế cao cấp hơn, thêm vài tính năng. Vẽ toàn bộ UI trong Figma trước, rồi sơ đồ dữ liệu và hạ tầng cơ bản; làm lại ảnh tham khảo bằng GPT image cho onboarding; đưa mock-up (bản giao diện mẫu) cho ChatGPT dựng luồng và UI; sau ra mắt A/B test paywall và giá. Backend Cloudflare Workers, D1, R2; paywall RevenueCat; quảng cáo Apple Ads rồi TikTok Ads. Khóa học này thay bước Figma bằng ChatGPT Web.",
          },
          {
            label: "Kết quả tự công bố",
            text: "Tiêu đề video ghi “$10K/tháng”. Founder nói đỉnh khoảng $13K/tháng, nay khoảng $10K (0:57); khoảng $25K trong 90 ngày; MRR (doanh thu định kỳ hằng tháng) trên dashboard khoảng $8K; 7% lượt tải thành người trả tiền (1:31).",
          },
        ],
        source:
          "Nguồn: Starter Story (YouTube), video của Frederick James, đoạn 04:28–06:40 — [xem video](https://www.youtube.com/watch?v=g9J_-5w9Nrs). Số liệu do founder tự công bố, chưa kiểm chứng độc lập.",
      },
    },
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-04/case-frederick-james.webp",
        width: 1536,
        height: 1024,
        alt: "Slide case Frederick James: vẽ giao diện trước, code sau, khoảng $10.000 mỗi tháng. Tám mục gồm founder và sản phẩm, bối cảnh, điểm xuất phát thiết kế, quy trình thiết kế, công cụ và thu tiền, kết quả công bố, bài học thiết kế và câu hỏi phản biện.",
        caption: "Hình 15 · Case Frederick James — số liệu founder tự công bố, chưa kiểm chứng độc lập.",
      },
    },
    {
      type: "quote",
      text: "Stage one is to make the mock UI in Figma first. I think this always leads to a way better final product.",
      by: "Frederick James, Starter Story, 4:28 · Dịch: Bước một là vẽ giao diện mẫu trong Figma trước. Cách này luôn cho ra sản phẩm cuối tốt hơn nhiều.",
    },
    {
      type: "cards",
      columns: 2,
      items: [
        {
          title: "Bài học thiết kế",
          text: "Mock-up đủ trước thì AI code “một lần ra đúng”. Trang App Store chính là quảng cáo.",
        },
        {
          title: "Câu hỏi phản biện",
          text: "Tên app được giấu, không có con số nào gắn với việc thay đổi thiết kế. Tỷ lệ 7% khách trả tiền đến từ thiết kế hay từ quảng cáo trả phí?",
        },
      ],
    },
    {
      type: "case",
      case: {
        title: "Benjamin Chen — Snag, “I Built A $30K/Month App: Here's My Exact Process”",
        tag: "Bài 4.1–4.5 · Lời hứa giá trị trước",
        columns: [
          {
            label: "Bối cảnh",
            text: "Benjamin Chen đã bán công ty media đầu tiên, làm 45+ app trong một năm (Pillar: 11.000 user) và tự nhận mắc “hội chứng đồ mới”. Snag là app iOS tìm đồ được cho miễn phí gần bạn (tìm kiếm, bộ lọc, yêu thích), làm cùng team 10X Studio.",
          },
          {
            label: "Cách làm",
            text: "Bắt đầu từ marketing: viết lời hứa giá trị muốn khách thấy (“trả vài đô mỗi tháng để nhận đồ trị giá hàng trăm đô”), tự hỏi app phải trông thế nào để hút khách trong 3 giây, rồi Figma wireframe (khung phác thảo) và thiết kế. Đưa thiết kế cho Claude Code dựng app trong 4–5 giờ, chưa có backend. Thuê bao tuần, tháng, năm hoặc một lần; Superwall A/B test paywall; Mixpanel đo onboarding; Supabase; quảng cáo Meta và video UGC (nội dung do người dùng tạo).",
          },
          {
            label: "Kết quả tự công bố",
            text: "Khoảng $30K MRR; 100.000+ user đăng nhập; 9.000 chuyển đổi; $80K+ tổng doanh thu (1:35); khoảng 3.300 đánh giá. Giá cụ thể không được nêu (“vài đô mỗi tháng”).",
          },
        ],
        source:
          "Nguồn: Starter Story (YouTube), video của Benjamin Chen, đoạn 03:46–06:09 — [xem video](https://www.youtube.com/watch?v=P4QodeA_lQ0). Số liệu do founder tự công bố, chưa kiểm chứng độc lập. Lưu ý: phần playbook từng bước trong video nhảy thẳng vào code, không nhắc lại Figma.",
      },
    },
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-04/case-snag.webp",
        width: 1536,
        height: 1024,
        alt: "Slide case Snag của Benjamin Chen: bắt đầu từ lời hứa giá trị, khoảng $30.000 MRR sau 4 tháng. Tám mục gồm founder và sản phẩm, bối cảnh, điểm xuất phát thiết kế, quy trình thiết kế, công cụ và thu tiền, kết quả công bố, bài học thiết kế và câu hỏi phản biện.",
        caption: "Hình 16 · Case Snag — số liệu founder tự công bố, chưa kiểm chứng độc lập.",
      },
    },
    {
      type: "quote",
      text: "You start from the marketing. So you reverse engineer the value proposition that you want to show in your app first.",
      by: "Benjamin Chen, Starter Story, 3:46 · Dịch: Bạn bắt đầu từ marketing — đi ngược từ lời hứa giá trị muốn thể hiện trong app.",
    },
    {
      type: "cards",
      columns: 2,
      items: [
        {
          title: "Bài học thiết kế",
          text: "App sao chép vẫn thắng nhờ giao diện, marketing và phễu tốt hơn. Ý tưởng ít giá trị nếu không trao sản phẩm tốt hơn.",
        },
        {
          title: "Câu hỏi phản biện",
          text: "Đây là 1 trong 45+ app, có team, kinh nghiệm và mạng lưới mentor. Bao nhiêu kết quả nhờ thiết kế, bao nhiêu nhờ phân phối?",
        },
      ],
    },
    {
      type: "case",
      case: {
        title: "Symmetry (Mauro và co-founder) — “How I Built This $160K/Month Gym App”",
        tag: "Bài 4.9–4.11 · Thử nghiệm từng màn hình",
        columns: [
          {
            label: "Bối cảnh",
            text: "Các founder là YouTuber fitness; mùa hè đầu tiên chỉ khoảng 30.000 lượt tải. App ghi buổi tập, xếp hạng nhóm cơ, mạng xã hội kiểu Strava, streak (chuỗi ngày liên tiếp); có trên iOS và Android; thị trường Tây Ban Nha, Mexico.",
          },
          {
            label: "Cách làm",
            text: "Ba giai đoạn: làm thứ mình muốn thì “tệ”; làm theo lời user thì “tạm được”; giờ có phương pháp, có khoa học. Quy trình: vấn đề có thật không? → giả thuyết + mức tăng kỳ vọng + chỉ số bảo vệ → A/B test với bản gốc ít nhất 2 tuần → đo từng màn onboarding (số liệu cho biết rơi ở đâu, phỏng vấn cho biết vì sao). Ưu tiên màn chạm nhiều user như paywall, tìm bài tập (giao diện tối chỉ khoảng 2% user). Đo activation, retention tuần 1 và 30 ngày, ARPU (doanh thu trung bình mỗi người dùng); dùng PostHog, Superwall, RevenueCat.",
          },
          {
            label: "Kết quả tự công bố",
            text: "Thêm 1 màn cam kết cuối onboarding thì giữ chân tăng 3% (12:17); thử 2 phiên bản màn Home thì không đổi gì; khoảng $160K/tháng; khoảng 3 triệu lượt tải.",
          },
        ],
        source:
          "Nguồn: Starter Story (YouTube), video của Mauro và co-founder, đoạn 06:01–12:17 — [xem video](https://www.youtube.com/watch?v=OV09yPLf8BI). Số liệu do founder tự công bố, chưa kiểm chứng độc lập. Không rõ +3% là tuyệt đối hay tương đối, và đo giữ chân ở mốc nào; người dẫn nói lúc $160K, lúc $150K/tháng.",
      },
    },
    {
      type: "figure",
      figure: {
        src: "/images/course-playbook/module-04/case-symmetry.webp",
        width: 1536,
        height: 1024,
        alt: "Slide case Symmetry: thêm 1 màn hình, giữ chân tăng 3%. Tám mục gồm founder và sản phẩm, bối cảnh, điểm xuất phát thiết kế, quy trình thiết kế A/B test, công cụ và thu tiền, kết quả công bố khoảng $160K mỗi tháng, bài học thiết kế và câu hỏi phản biện.",
        caption: "Hình 17 · Case Symmetry — số liệu founder tự công bố, chưa kiểm chứng độc lập.",
      },
    },
    {
      type: "quote",
      text: "Adding one screen, it's increased 3% retention. That is why you have to AB test everything.",
      by: "Founder của Symmetry, Starter Story, 12:17 · Dịch: Thêm một màn hình, giữ chân tăng 3%. Vì vậy phải A/B test mọi thứ.",
    },
    {
      type: "cards",
      columns: 2,
      items: [
        {
          title: "Bài học thiết kế",
          text: "Thử nghiệm ở màn hình ảnh hưởng nhiều người. Tăng activation thì retention đi theo.",
        },
        {
          title: "Câu hỏi phản biện",
          text: "Phần lớn thử nghiệm không tạo khác biệt. $160K đến từ thiết kế hay từ 80.000 video UGC?",
        },
      ],
    },
  ],
}
