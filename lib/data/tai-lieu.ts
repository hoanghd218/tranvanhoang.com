/**
 * Kho tài liệu / quà tặng trong video của Tony — trang tranvanhoang.com/tai-lieu.
 *
 * THÊM QUÀ MỚI: chép một mục có sẵn, dán lên ĐẦU mảng `taiLieu` (mới nhất ở trên), sửa nội dung.
 * - `slug` thành neo trang: tranvanhoang.com/tai-lieu#<slug> — gửi đúng link này trong tin nhắn tự động.
 * - Chỉ ghi link, lệnh, câu lệnh đã kiểm thật (repo GitHub: kiểm bằng `gh api repos/<chủ>/<repo>`).
 * - Nội dung lấy từ tin nhắn riêng đã gửi người bình luận (luật bình luận Rocket) hoặc mục "Tin nhắn riêng" trong Kịch bản.md.
 */

export type TaiLieuKind = "repo" | "skill" | "prompt" | "app" | "so-do"

export type TaiLieuLink = { label: string; url: string; note?: string }

export type TaiLieuBlock =
  | { type: "links"; title?: string; items: TaiLieuLink[] }
  | { type: "steps"; title?: string; items: string[] }
  | { type: "code"; title?: string; code: string }
  | { type: "prompt"; title: string; text: string }
  | { type: "branches"; title?: string; groups: { name?: string; items: { name: string; text: string }[] }[] }
  | { type: "note"; text: string }

export type TaiLieu = {
  slug: string
  /** Ngày làm video, YYYY-MM-DD */
  date: string
  title: string
  /** Chữ khoá bình luận đã nói trong video */
  keyword: string
  kinds: TaiLieuKind[]
  summary: string
  blocks: TaiLieuBlock[]
}

export const taiLieuKindLabels: Record<TaiLieuKind, string> = {
  repo: "Repo GitHub",
  skill: "Skill AI",
  prompt: "Câu lệnh mẫu",
  app: "App miễn phí",
  "so-do": "Sơ đồ",
}

const gh = (repo: string) => `https://github.com/${repo}`

export const taiLieu: TaiLieu[] = [
  {
    slug: "claude-skill",
    date: "2026-11-03",
    title: "Claude Skill — toàn bộ trong một sơ đồ",
    keyword: "SKILL",
    kinds: ["so-do"],
    summary: "Claude Skill là gì, vì sao quan trọng, dùng thật thế nào: 8 nhánh, chia 3 phần.",
    blocks: [
      {
        type: "branches",
        title: "Sơ đồ 8 nhánh",
        groups: [
          {
            name: "Skill là gì",
            items: [
              { name: "1 · Skill là gì", text: "Một thư mục có tệp SKILL.md — như cuốn sổ bàn giao anh chị viết cho nhân viên mới." },
              { name: "2 · Bên trong có gì", text: "Đầu tệp là tên + một dòng mô tả khi nào dùng. Bên dưới là các bước, kèm mẫu, tài liệu, code chạy sẵn." },
              { name: "3 · Cách Claude dùng", text: "Lúc đầu chỉ đọc tên và mô tả, gặp đúng việc mới mở sổ ra. Gọi thẳng được bằng dấu / và tên skill." },
            ],
          },
          {
            name: "Vì sao quan trọng",
            items: [
              { name: "4 · Dạy một lần, dùng mãi", text: "Câu lệnh chat lần nào cũng phải dặn lại; skill viết một lần, lần sau Claude tự lấy ra dùng." },
              { name: "5 · Đúng một kiểu", text: "Việc nhiều bước thành quy trình có thứ tự; phần cần chính xác để code chạy, không để AI đoán." },
              { name: "6 · Kiến thức ở lại công ty", text: "Để skill trong thư mục dự án, cả đội dùng chung một cách làm. Người nghỉ, cách làm vẫn còn." },
            ],
          },
          {
            name: "Ví dụ thật",
            items: [
              { name: "7 · Skill làm sẵn", text: "Anthropic làm sẵn 4 cái: Word, Excel, PowerPoint, PDF." },
              { name: "8 · Skill của riêng công ty", text: "Soạn báo giá theo mẫu, trả lời khách đúng giọng thương hiệu, làm báo cáo tuần." },
            ],
          },
        ],
      },
      {
        type: "steps",
        title: "3 bước bắt đầu",
        items: [
          "Chọn một việc anh chị đang dặn đi dặn lại.",
          "Làm cùng Claude một lần cho đúng.",
          "Bảo nó: lưu lại thành skill.",
        ],
      },
      { type: "note", text: "Chỉ cài skill tự viết hoặc từ nguồn tin được — skill có thể bảo Claude chạy code trên máy anh chị." },
    ],
  },
  {
    slug: "agent-la-gi",
    date: "2026-11-03",
    title: "Agent là gì — dùng vào kinh doanh thế nào",
    keyword: "AGENT",
    kinds: ["so-do"],
    summary: "Khung chat thì trả lời. Agent thì làm việc. 8 nhánh, ví dụ với Claude và GPT.",
    blocks: [
      {
        type: "branches",
        title: "Sơ đồ 8 nhánh",
        groups: [
          {
            name: "Agent là gì",
            items: [
              { name: "1 · Agent là gì", text: "Tự hoàn thành một việc thay anh chị. Khung chat chỉ hỏi đáp thì chưa phải agent." },
              { name: "2 · Ba thành phần", text: "Bộ não (mô hình AI) · công cụ để tra cứu và hành động · bản hướng dẫn ghi rõ việc gì được làm, việc gì không." },
              { name: "3 · Vòng lặp", text: "Lên kế hoạch → dùng công cụ → xem kết quả → làm bước tiếp. Gặp chỗ khó thì dừng lại hỏi người." },
            ],
          },
          {
            name: "Dùng vào kinh doanh",
            items: [
              { name: "4 · Chăm khách", text: "Khách nhắn nửa đêm, agent tra đơn, trả lời ngay. Việc cần duyệt như hoàn tiền thì chuyển cho anh chị." },
              { name: "5 · Báo cáo tự lên", text: "Mỗi sáng tóm tắt tin nhắn của đội, mỗi tuần cập nhật số liệu chính." },
              { name: "6 · Chuẩn bị gặp khách", text: "4 giờ chiều, agent xem lịch hẹn ngày mai, đọc ghi chú về khách, tìm tin tức của họ, gửi anh chị bản tóm tắt." },
            ],
          },
          {
            name: "Claude và GPT",
            items: [
              { name: "7 · Agent của Claude", text: "Claude Code làm ngay trên máy: đọc, sửa tệp, chạy lệnh. Claude trong Chrome tự mở trang, điền biểu mẫu." },
              { name: "8 · Agent của ChatGPT", text: "ChatGPT Work nhận cả một việc: slide, bảng so sánh nhà cung cấp, báo cáo định kỳ. Gói doanh nghiệp có agent dùng chung cả đội." },
            ],
          },
        ],
      },
      {
        type: "steps",
        title: "3 bước bắt đầu",
        items: [
          "Chọn một việc lặp lại mà phải suy nghĩ.",
          "Viết rõ việc nào nó tự làm, việc nào phải hỏi anh chị.",
          "Chạy thử nhỏ, có người duyệt, rồi mới cho nó tự chạy.",
        ],
      },
    ],
  },
  {
    slug: "grok-bot",
    date: "2026-11-02",
    title: "Toàn bộ Grok Bot — 8 thành phần",
    keyword: "BOT",
    kinds: ["so-do"],
    summary: "Grok Bot là đồng đội AI của xAI. 8 thành phần chính và 6 bước bắt đầu.",
    blocks: [
      {
        type: "branches",
        title: "Sơ đồ 8 thành phần",
        groups: [
          {
            items: [
              { name: "1 · Đồng đội Bot", text: "Mỗi Bot có tên, có việc riêng như một nhân viên. Nhắn cho nó như nhắn đồng nghiệp." },
              { name: "2 · Máy tính mây", text: "Mỗi Bot làm trên một máy tính thật có trình duyệt, chỗ chứa tài liệu, dòng lệnh. Anh chị ngủ, nó vẫn làm." },
              { name: "3 · Nhắn mọi nơi", text: "Gõ chữ, nói bằng giọng, gọi trực tiếp — trên máy tính, điện thoại, cả trong ứng dụng X." },
              { name: "4 · Nối ứng dụng", text: "Gmail, lịch, Google Drive, Notion, Slack; có email riêng để nhận việc. Trang không có kết nối thì tự mở trình duyệt." },
              { name: "5 · Trí nhớ", text: "Nhớ anh chị thích gì, việc cũ tới đâu. Số liệu quan trọng vẫn bảo nó xem lại nguồn." },
              { name: "6 · Dạy một lần", text: "Làm mẫu một lần, nó lưu thành kỹ năng; hẹn giờ hoặc chạy khi có tin Slack, email mới." },
              { name: "7 · Đội Bot", text: "Một Bot làm trưởng nhóm, mỗi Bot khác lo một mảng: bán hàng, tuyển người, chi phí." },
              { name: "8 · An toàn", text: "Mật khẩu, thẻ thanh toán cất trong két, Bot dùng được mà không nhìn thấy. Việc rủi ro thì hỏi trước." },
            ],
          },
        ],
      },
      {
        type: "steps",
        title: "6 bước bắt đầu",
        items: ["Tạo 1 Bot.", "Giao một việc thật.", "Nối ứng dụng.", "Lưu thành kỹ năng.", "Hẹn giờ.", "Rồi mới thêm Bot thứ hai."],
      },
      { type: "note", text: "Grok Bot đi kèm gói Premium trở lên của X (gói Plus chưa có) — theo thông tin lúc làm video 02/11/2026." },
    ],
  },
  {
    slug: "chatgpt",
    date: "2026-11-02",
    title: "Toàn bộ ChatGPT — 10 thành phần",
    keyword: "BẢN ĐỒ",
    kinds: ["so-do"],
    summary: "ChatGPT hay trả lời chung chung? Xem số 6 trước. 10 thành phần và 6 bậc dùng ChatGPT.",
    blocks: [
      {
        type: "branches",
        title: "Sơ đồ 10 thành phần",
        groups: [
          {
            items: [
              { name: "1 · Trò chuyện", text: "Ô chat ai cũng biết. Trả lời bằng chữ, hình, có khi làm luôn công cụ bấm được." },
              { name: "2 · Tìm kiếm", text: "Hỏi chuyện mới, nó lên mạng tìm, có ghi nguồn. Có cả Thử đồ bằng ảnh tự chụp." },
              { name: "3 · Đọc tài liệu", text: "PDF, Excel, ảnh chụp, ghi âm cuộc họp: gõ lại, tóm tắt, soạn sẵn email gửi khách." },
              { name: "4 · Giọng nói", text: "Bấm micro là nói chuyện như gọi điện thoại." },
              { name: "5 · Sáng tạo", text: "Vẽ, sửa ảnh; soạn tài liệu, bảng tính, slide, xuất ra PowerPoint." },
              { name: "6 · Trí nhớ", text: "Bật Memory, tạo Project gom tài liệu và hướng dẫn. Kể càng nhiều, trả lời càng sát." },
              { name: "7 · ChatGPT Work", text: "Không hỏi nữa mà giao việc: nó tự chia bước, lên mạng, dùng máy tính, trả về bảng tính." },
              { name: "8 · Plugin", text: "Nối Gmail, Slack, lịch để làm trên dữ liệu thật của anh chị." },
              { name: "9 · Tự động", text: "Hẹn giờ, hoặc có email mới là chạy. Dot: trợ lý chạy suốt trên máy tính mây." },
              { name: "10 · Tự xây", text: "Tả bằng lời, nó làm ra trang web có dữ liệu, có đăng nhập. Codex viết code, Space để cả đội sửa chung." },
            ],
          },
        ],
      },
      {
        type: "steps",
        title: "6 bậc dùng ChatGPT",
        items: ["Hỏi.", "Đọc, nói, tạo.", "Hiểu anh chị.", "Làm thay.", "Tự chạy.", "Tự xây."],
      },
      { type: "note", text: "Nhiều mục cần gói trả phí và đang mở dần theo từng nước — theo thông tin lúc làm video 02/11/2026." },
    ],
  },
  {
    slug: "cho-dang-app",
    date: "2026-11-01",
    title: "5 chỗ đăng app để có người dùng đầu tiên",
    keyword: "REPO",
    kinds: ["repo"],
    summary: "5 chỗ đăng app trong video, kèm kho GitHub gom 101 chỗ đăng app.",
    blocks: [
      {
        type: "links",
        title: "5 chỗ trong video",
        items: [
          { label: "Reddit r/SideProject", url: "https://www.reddit.com/r/SideProject/" },
          { label: "Hacker News — Show HN", url: "https://news.ycombinator.com/showhn.html", note: "Đọc luật Show HN trước khi đăng." },
          { label: "Product Hunt", url: "https://www.producthunt.com/" },
          { label: "Indie Hackers", url: "https://www.indiehackers.com/products" },
          { label: "Uneed", url: "https://www.uneed.best/", note: "Bản miễn phí phải xếp hàng khoảng 30 ngày — đăng ký sớm." },
        ],
      },
      { type: "links", title: "Kho GitHub", items: [{ label: "PlacesToPostYourStartup — 101 chỗ đăng app", url: gh("mmccaff/PlacesToPostYourStartup") }] },
    ],
  },
  {
    slug: "famiu",
    date: "2026-11-01",
    title: "Famiu — app chơi cùng con",
    keyword: "APP",
    kinds: ["app"],
    summary: "App Famiu miễn phí, không quảng cáo, kèm quy trình học vibe coding Tony gửi trong nhóm Zalo.",
    blocks: [
      {
        type: "links",
        items: [
          { label: "Tải app Famiu", url: "https://famiu.app/", note: "Miễn phí, không quảng cáo." },
          { label: "Nhóm Zalo — quy trình học vibe coding", url: "https://zalo.me/g/ag4ek2ej8asosfvs8ggh" },
        ],
      },
    ],
  },
  {
    slug: "5-viec-giao-agent",
    date: "2026-10-31",
    title: "5 việc lặp lại CEO nên giao cho agent",
    keyword: "AGENT",
    kinds: ["prompt"],
    summary: "5 câu lệnh mẫu. Dán vào trợ lý AI anh chị đang dùng (Grok Bot, ChatGPT, Claude…), thay chỗ trong ngoặc [ ] bằng thông tin công ty mình.",
    blocks: [
      {
        type: "prompt",
        title: "1 · Chăm sóc khách Zalo, Facebook",
        text: `Bạn là nhân viên chăm sóc khách của [tên công ty], bán [sản phẩm / dịch vụ].
Chỉ trả lời dựa trên tài liệu tôi đưa: [bảng giá] · [chính sách đổi trả, bảo hành] · [các câu khách hay hỏi].

Quy tắc:
- Xưng "em", gọi khách "anh / chị". Mỗi tin 1–3 câu, nói như người thật nhắn.
- Khách hỏi giá thì báo đúng giá trong bảng giá. Không tự giảm giá, không hứa điều không có trong tài liệu.
- Hỏi nhu cầu của khách trước khi gợi ý sản phẩm.
- Gặp một trong các trường hợp sau thì không tự xử lý: câu hỏi không có trong tài liệu · khách phàn nàn · khách đòi hoàn tiền · đơn trên [số tiền].
  Khi đó nhắn khách: "Em chuyển anh / chị sang bạn phụ trách ngay ạ" và gắn nhãn CẦN NGƯỜI.
- Cuối mỗi cuộc chat, ghi lại: tên khách · nhu cầu · đã báo giá chưa · bước tiếp theo.`,
      },
      {
        type: "prompt",
        title: "2 · Đo hiệu quả nhân viên chăm sóc khách",
        text: `Đây là toàn bộ đoạn chat chăm sóc khách hôm nay của đội tôi: [dán chat / đính kèm tệp xuất từ Zalo, Facebook].

Chấm từng nhân viên theo 5 tiêu chí:
1. Thời gian trả lời tin đầu tiên của khách.
2. Khách hỏi giá thì có báo giá không.
3. Có hỏi nhu cầu trước khi báo giá không.
4. Có hẹn bước tiếp theo (gọi lại, gửi mẫu, chốt đơn) không.
5. Có khách nào bị bỏ lơ quá [30] phút không.

Trả về:
- Bảng điểm: nhân viên · số cuộc chat · trả lời trung bình · số lần quên báo giá · số khách bị bỏ sót · điểm trên 10.
- 3 đoạn chat tệ nhất, kèm câu lẽ ra nên nói.
- Mỗi người 1 việc cần sửa ngày mai.
Thiếu dữ liệu thì ghi "chưa có", không đoán.`,
      },
      {
        type: "prompt",
        title: "3 · Đo quảng cáo tự động",
        text: `Mỗi sáng lúc 7:00, làm báo cáo quảng cáo của ngày hôm qua.

Dữ liệu:
- Số liệu quảng cáo: [tệp xuất từ Trình quản lý quảng cáo / công cụ anh chị dùng].
- Đơn thật: [tệp xuất từ phần mềm bán hàng], ghép với chiến dịch theo [mã chiến dịch / ghi chú nguồn đơn].

Trả về trong 5 dòng:
- Tổng tiền đã tiêu · số đơn thật · tiền mỗi đơn.
- Bảng từng chiến dịch: tiền tiêu · đơn thật · tiền mỗi đơn.
- Đánh dấu "ĐANG ĐỐT TIỀN" cho chiến dịch tiêu quá [số tiền] mà chưa có đơn, hoặc tiền mỗi đơn cao gấp đôi trung bình.
- Đề xuất tắt / giảm / tăng tiền cho từng chiến dịch.
Chỉ đề xuất. Không tự tắt hay sửa quảng cáo khi tôi chưa duyệt.`,
      },
      {
        type: "prompt",
        title: "4 · Nội dung thương hiệu mỗi ngày",
        text: `Bạn là người viết nội dung cho thương hiệu [tên].
Khách của tôi là: [ai, đang gặp vấn đề gì].
Giọng của tôi: xưng [ ], gọi khách [ ], nói chuyện [3 tính từ, ví dụ: thẳng, gần gũi, thực chiến].

Mỗi sáng:
1. Đọc [ghi chú của tôi hôm qua / 3 nguồn tin tôi theo dõi], chọn 1 ý đáng nói nhất với khách.
2. Viết 1 kịch bản video ngắn 45 giây: câu đầu là một vấn đề của khách · 6–10 câu ngắn · kết bằng một việc khách làm được ngay.
3. Viết 1 caption dưới 120 chữ và 3 ý tưởng hình.
Không bịa số; số nào cũng ghi nguồn. Gửi tôi duyệt trước, không tự đăng.`,
      },
      {
        type: "prompt",
        title: "5 · Nhân bản chính anh chị — nhân viên hỏi bản sao trước",
        text: `Bạn là bản sao AI của tôi, [tên], giám đốc [công ty].
Đọc kỹ tài liệu của tôi: [quy trình] · [chính sách giá, giảm giá] · [các quyết định cũ] · [những câu tôi từng trả lời nhân viên].

Khi nhân viên hỏi:
1. Trả lời đúng theo nguyên tắc tôi đã ghi, và nói rõ đó là nguyên tắc nào.
2. Không tự quyết các việc: tiền vượt [số tiền] · tuyển, cho nghỉ, tăng lương · hợp đồng, pháp lý · khách lớn · việc không có trong tài liệu.
   Với các việc đó, trả lời: "Việc này sếp quyết, em đã chuyển sếp" và gửi tôi tóm tắt 3 dòng.
3. Cuối ngày gửi tôi: số câu đã trả lời · số câu đã chuyển · câu hỏi lặp lại nhiều nhất (để tôi viết thành quy trình).`,
      },
      { type: "note", text: "Tuần đầu cho agent chạy song song với người. Đọc lại kết quả mỗi ngày, thấy đúng rồi mới giao hẳn. Tối nay chọn đúng 1 việc, giao cho agent trước." },
    ],
  },
  {
    slug: "11-skill-dung-video",
    date: "2026-10-31",
    title: "Không cần CapCut — 11 skill dựng video",
    keyword: "SKILL EDIT",
    kinds: ["skill", "repo"],
    summary: "Bộ 11 skill dựng video miễn phí cho Claude Code: quay một đoạn, gõ một lệnh, AI tự dựng Reel.",
    blocks: [
      { type: "links", items: [{ label: "claude-editing-skills", url: gh("artemnovitckii/claude-editing-skills") }] },
      { type: "steps", title: "Cài đặt (Mac hoặc Linux)", items: ["Cài ffmpeg, Node.js 22+ và Python 3.9+ (Mac: brew install ffmpeg node).", "Tải bộ skill và chạy tệp cài đặt (2 lệnh bên dưới)."] },
      {
        type: "code",
        code: `git clone https://github.com/artemnovitckii/claude-editing-skills.git ~/claude-editing-skills
cd ~/claude-editing-skills && ./install.sh`,
      },
      { type: "code", title: "Dùng trong Claude Code", code: `/explainer <đường dẫn video>.mp4` },
      { type: "note", text: "Có thêm /trial-reels, /split-screen, /ranking-list… 6 skill dựng theo lời nói cần khoá GROQ_API_KEY miễn phí (console.groq.com/keys) để tách lời; 5 kiểu hiệu ứng điện ảnh không cần khoá. Clip quay rõ mặt, nền gọn thì phần tách người đẹp nhất." },
    ],
  },
  {
    slug: "autoshorts",
    date: "2026-10-31",
    title: "AutoShorts — cắt video dài thành clip ngắn miễn phí",
    keyword: "CLIP",
    kinds: ["app", "repo"],
    summary: "App cắt video dài thành clip ngắn, miễn phí, chạy được hoàn toàn trên máy.",
    blocks: [
      { type: "links", items: [{ label: "Tải AutoShorts bản mới nhất", url: "https://github.com/JayWebtech/autoshorts/releases/latest" }] },
      {
        type: "steps",
        title: "Bước 1 — Tải app + FFmpeg",
        items: [
          "Mac chip M: tệp .dmg · Windows: .exe hoặc .msi · Linux: .deb / .AppImage.",
          "Cài FFmpeg: Mac gõ brew install ffmpeg · Windows gõ winget install Gyan.FFmpeg.",
          "Mac báo app chưa xác minh: chuột phải vào app → Open. Windows hiện SmartScreen: More info → Run anyway (hướng dẫn của tác giả).",
        ],
      },
      {
        type: "steps",
        title: "Bước 2 — Chọn AI",
        items: [
          "0 đồng: chọn chạy trên máy (Ollama + Whisper), app tự tải mô hình.",
          "Chọn đoạn tinh hơn: lấy khoá DeepSeek ở platform.deepseek.com rồi dán vào API Settings.",
          "Video tiếng Việt: chép lời bằng Whisper trên máy.",
        ],
      },
      { type: "steps", title: "Bước 3 — Thả video", items: ["Bấm Import recording → Transcript → Moments → Cut → Captions → Export."] },
      { type: "note", text: "App cắt dọc ở giữa khung, hợp nhất với video người nói ngồi giữa hình." },
    ],
  },
  {
    slug: "claudex-loop",
    date: "2026-10-31",
    title: "Claudex Loop — Claude và Codex thành cặp bài trùng",
    keyword: "LOOP",
    kinds: ["skill", "repo"],
    summary: "Skill cho Claude Code và Codex làm việc cùng nhau trên một việc.",
    blocks: [
      { type: "links", items: [{ label: "claudex-loop", url: gh("chaseai-yt/claudex-loop") }] },
      {
        type: "code",
        title: "Cài trong Claude Code (2 lệnh)",
        code: `/plugin marketplace add chaseai-yt/claudex-loop
/plugin install claudex-loop@claudex-loop`,
      },
      { type: "code", title: "Chạy — gõ lệnh rồi mô tả việc anh chị muốn làm", code: `/claudex-loop:claudex-loop` },
      { type: "note", text: "Cần có sẵn: Claude Code và Codex đã cài, đã đăng nhập; Python 3.10 trở lên. Không cần khoá API riêng." },
    ],
  },
  {
    slug: "openjarvis",
    date: "2026-10-30",
    title: "OpenJarvis — trợ lý AI giữ bí mật",
    keyword: "JARVIS",
    kinds: ["repo", "prompt"],
    summary: "Trợ lý AI chạy trên máy của anh chị: đường dẫn, lệnh cài và 4 câu lệnh mẫu.",
    blocks: [
      { type: "links", items: [{ label: "OpenJarvis", url: gh("open-jarvis/OpenJarvis") }] },
      { type: "code", title: "Cài trên macOS, Linux", code: `curl -fsSL https://open-jarvis.github.io/OpenJarvis/install.sh | bash` },
      { type: "code", title: "Cài trên Windows (PowerShell)", code: `irm https://open-jarvis.github.io/OpenJarvis/install.ps1 | iex` },
      {
        type: "code",
        title: "Mẫu 1 — Bản tin sáng (xong thì nói \"Good morning\")",
        code: `jarvis init --preset morning-digest-mac --force
jarvis connect gdrive`,
      },
      {
        type: "code",
        title: "Mẫu 2 — Hỏi kho ghi chú",
        code: `jarvis memory index <thư mục kho ghi chú>
jarvis ask "Tháng này mình đã ghi gì về khách hàng A?"`,
      },
      {
        type: "code",
        title: "Mẫu 3 — Nhật ký 10 giờ tối",
        code: `jarvis scheduler create "Tổng kết hôm nay thành một trang nhật ký" --type cron --value "0 22 * * *" --agent orchestrator --tools digest_collect,file_write
jarvis scheduler start`,
      },
      {
        type: "links",
        title: "Mẫu 4 — Trả lời khách Messenger",
        items: [{ label: "Làm theo mục Channels trong tài liệu OpenJarvis", url: "https://open-jarvis.github.io/OpenJarvis/user-guide/channels/", note: "Cần trang Facebook và máy chủ nhận tin." }],
      },
      { type: "note", text: "Bản tin đọc thành tiếng cần chọn giọng đọc — Kokoro chạy ngay trên máy, hoặc dùng khoá Cartesia / OpenAI." },
    ],
  },
  {
    slug: "he-sinh-thai-openai",
    date: "2026-10-30",
    title: "Hệ sinh thái OpenAI — ChatGPT chỉ là cái ngọn",
    keyword: "SƠ ĐỒ",
    kinds: ["so-do"],
    summary: "Bản đồ 10 nhánh: 3 nhánh nổi, 7 rễ bên dưới, và thang 6 bậc AI.",
    blocks: [
      {
        type: "branches",
        title: "Bản đồ 10 nhánh",
        groups: [
          {
            name: "3 nhánh nổi",
            items: [
              { name: "ChatGPT", text: "Cánh cửa để người nói chuyện với AI: hỏi đáp, tìm trên mạng, đọc PDF, vẽ ảnh, nhớ chuyện cũ." },
              { name: "ChatGPT Work", text: "Thôi hỏi, giao việc: đưa mục tiêu, nó tự đọc email, lấy tệp, trả về báo cáo, bảng tính, slide." },
              { name: "Codex", text: "AI làm việc ngay trên máy tính: đọc code, sửa, chạy thử, mở trình duyệt xem, sai thì tự sửa." },
            ],
          },
          {
            name: "7 rễ bên dưới",
            items: [
              { name: "Model", text: "Bộ não: hiểu chữ, suy luận, viết code, đọc hình." },
              { name: "Tools", text: "Công cụ: tìm trên mạng, tìm trong tệp, gọi phần mềm khác, chạy lệnh, tự dùng máy tính." },
              { name: "MCP", text: "Chuẩn ổ cắm chung để nối kho dữ liệu, CRM, Google Drive, hệ thống nội bộ." },
              { name: "Skills", text: "Tay nghề: biết làm bước nào trước. Công cụ là đôi tay, skill là tay nghề." },
              { name: "Agent", text: "Tự lên kế hoạch, tự làm, tự xem kết quả, thấy lỗi thì làm lại." },
              { name: "Multi-Agent", text: "Nhiều agent chia việc tìm, viết code, kiểm tra; agent chính gom kết quả." },
              { name: "OpenAI Platform", text: "Linh kiện cho đội lập trình tự lắp AI riêng: model, API, bộ công cụ làm agent, máy ảo." },
            ],
          },
        ],
      },
      {
        type: "steps",
        title: "Thang 6 bậc AI — công ty anh chị đang ở bậc mấy?",
        items: ["Bộ não.", "Chatbot.", "Công cụ.", "Agent.", "Nhiều agent.", "Nền tảng làm việc bằng AI."],
      },
    ],
  },
  {
    slug: "artemis",
    date: "2026-10-30",
    title: "Artemis — Claude Code dùng điện thoại thật",
    keyword: "PHONE",
    kinds: ["repo"],
    summary: "Công cụ mã nguồn mở của Google cho Claude Code điều khiển điện thoại Android thật.",
    blocks: [
      { type: "links", items: [{ label: "google/artemis", url: gh("google/artemis") }] },
      { type: "steps", title: "Cách cài (theo README chính chủ, mục Quick Start)", items: ["Cắm điện thoại Android đã bật USB Debugging (hoặc mở máy ảo Android).", "Tải mã và chạy script — script tự cài ADB, scrcpy, FFmpeg và hỏi cài MCP cho Claude Code / Codex / Cursor."] },
      {
        type: "code",
        code: `git clone https://github.com/google/artemis.git && cd artemis
./start.sh`,
      },
      { type: "code", title: "Windows", code: `.\\start.bat` },
      { type: "code", title: "Cắm riêng vào Claude Code", code: `uv run artemis mcp --install claude` },
      { type: "note", text: "Điền khoá API của một mô hình vào tệp .env (mặc định Gemini: GEMINI_API_KEY). Lần chạy đầu, Artemis cài ứng dụng hỗ trợ lên điện thoại — README ghi nó chỉ chạy trên máy; gỡ bằng lệnh uv run artemis helper uninstall." },
    ],
  },
  {
    slug: "don-tv-android",
    date: "2026-10-30",
    title: "Dọn màn hình TV Android bằng Claude Code",
    keyword: "TV",
    kinds: ["repo", "prompt"],
    summary: "Câu lệnh gốc và bộ mã để dọn TV Android / Google TV chậm như mới, kèm tệp khôi phục.",
    blocks: [
      {
        type: "links",
        items: [
          { label: "Câu lệnh gốc cho Claude Code (PROMPT.md)", url: "https://github.com/mihirgupta0900/tv-home/blob/main/PROMPT.md" },
          { label: "Bộ mã tv-home — launcher gọn + script", url: gh("mihirgupta0900/tv-home"), note: "Tải về rồi mở Claude Code trong thư mục này." },
          { label: "Tệp khôi phục — bật lại mọi app, trả màn hình cũ", url: "https://github.com/mihirgupta0900/tv-home/blob/main/tools/restore.sh" },
          { label: "Tài liệu Android — bật Tuỳ chọn cho nhà phát triển", url: "https://developer.android.com/studio/debug/dev-options" },
          { label: "Tài liệu Google — đường dẫn Android TV OS build", url: "https://developers.google.com/cast/docs/registration#android_tv_software_serial_number" },
          { label: "Bài gốc của tác giả Mihir Gupta (trước / sau)", url: "https://x.com/0900mihir/status/2111746030228455883" },
        ],
      },
      {
        type: "steps",
        title: "Các bước trên TV (theo README của tv-home)",
        items: [
          "Cài đặt → Hệ thống → Giới thiệu → bấm \"Bản dựng\" (Build) 7 lần.",
          "Quay lại → Tuỳ chọn nhà phát triển → bật Gỡ lỗi USB.",
          "Để TV bật và chung Wi-Fi với máy tính. Tải bộ mã về, mở Claude Code trong thư mục đó, dán câu lệnh.",
          "Làm xong nên tắt Gỡ lỗi USB.",
        ],
      },
      { type: "note", text: "Chỉ áp dụng Android TV / Google TV (không phải Samsung, LG, Fire TV). Tên mục có thể khác một chút tuỳ đời TV." },
    ],
  },
  {
    slug: "283-nhan-vien-ai",
    date: "2026-10-29",
    title: "Tuyển 283 nhân viên AI",
    keyword: "AGENTS",
    kinds: ["repo", "skill"],
    summary: "Đội 283 nhân viên AI (Agency Agents) cài thẳng vào Claude Code.",
    blocks: [
      {
        type: "links",
        items: [
          { label: "Kho mã Agency Agents", url: gh("msitarzewski/agency-agents") },
          { label: "Ứng dụng cài bằng một cú bấm (macOS · Linux · Windows)", url: "https://agencyagents.app" },
        ],
      },
      {
        type: "code",
        title: "Cài vào Claude Code",
        code: `git clone https://github.com/msitarzewski/agency-agents.git
cd agency-agents
./scripts/install.sh --tool claude-code`,
      },
      { type: "note", text: "Bắt đầu với 1 agent cho 1 việc nhỏ (ví dụ Discovery Coach bên bán hàng), chấm kết quả rồi mới thêm người." },
    ],
  },
  {
    slug: "9-repo-thay-phan-mem",
    date: "2026-10-29",
    title: "9 repo GitHub thay phần mềm trả phí",
    keyword: "REPO",
    kinds: ["repo"],
    summary: "9 repo làm được việc tương tự phần mềm trả phí hằng tháng — miễn phí hoặc rẻ hơn nhiều.",
    blocks: [
      {
        type: "links",
        items: [
          { label: "Open Higgsfield — thay Higgsfield", url: gh("wide-trace/open-higgsfield"), note: "Xưởng tạo ảnh và video AI, chỉ trả theo khoá của mình." },
          { label: "VoiceStudio — thay ElevenLabs", url: gh("debpalash/VoiceStudio"), note: "Nhân bản giọng nói, chạy trên máy." },
          { label: "OpenSEO — thay Semrush", url: gh("every-app/open-seo"), note: "Nghiên cứu từ khoá, dữ liệu trả theo lượt dùng." },
          { label: "AppFlowy — thay Notion", url: gh("AppFlowy-IO/AppFlowy"), note: "Dữ liệu nằm trong tay anh chị." },
          { label: "OpenWhispr — nói thành chữ", url: gh("OpenWhispr/openwhispr"), note: "Chữ hiện ngay tại con trỏ, chạy được khi không có mạng." },
          { label: "OpenProject — thay Asana", url: gh("opf/openproject"), note: "Quản lý dự án, biểu đồ Gantt, chấm giờ." },
          { label: "Cal.diy — thay Calendly", url: gh("calcom/cal.diy"), note: "Bản cộng đồng của Cal.com, tự dựng trang đặt lịch." },
          { label: "Chatwoot — thay Intercom", url: gh("chatwoot/chatwoot"), note: "Gom chat và email của khách về một chỗ." },
          { label: "Cap — thay Loom", url: gh("CapSoftware/Cap"), note: "Quay màn hình rồi gửi link ngay." },
        ],
      },
    ],
  },
  {
    slug: "7-skill-chong-ai-slop",
    date: "2026-10-29",
    title: "7 skill chống AI slop khi làm web",
    keyword: "SKILLS",
    kinds: ["skill", "repo"],
    summary: "7 skill và công cụ giúp web làm bằng AI có gu hơn, bớt nhàm.",
    blocks: [
      {
        type: "links",
        items: [
          { label: "Taste Skill", url: gh("Leonxlnx/taste-skill") },
          { label: "designlang (design-extract)", url: gh("Manavarya09/design-extract") },
          { label: "React Bits", url: gh("DavidHDev/react-bits") },
          { label: "GSAP Skills", url: gh("greensock/gsap-skills") },
          { label: "Playwright CLI", url: gh("microsoft/playwright-cli") },
          { label: "Impeccable", url: gh("pbakaus/impeccable") },
          { label: "Transitions.dev", url: gh("Jakubantalik/transitions.dev") },
        ],
      },
    ],
  },
  {
    slug: "18-repo-lam-video",
    date: "2026-10-29",
    title: "18 repo cho AI làm video",
    keyword: "REPO",
    kinds: ["repo"],
    summary: "Đủ 18 repo GitHub trong video \"Đoàn phim của Opus\", chia theo 6 vai trong đoàn phim.",
    blocks: [
      { type: "links", title: "① Thầy dạy nghề", items: [{ label: "Remotion Skills", url: gh("remotion-dev/skills") }, { label: "GSAP Skills", url: gh("greensock/gsap-skills") }] },
      { type: "links", title: "② Hoạ sĩ", items: [{ label: "SVGO", url: gh("svg/svgo") }, { label: "Satori", url: gh("vercel/satori") }] },
      {
        type: "links",
        title: "③ Diễn hoạt",
        items: [
          { label: "GSAP", url: gh("greensock/GSAP") },
          { label: "Anime.js", url: gh("juliangarnier/anime") },
          { label: "Motion", url: gh("motiondivision/motion") },
          { label: "dotLottie", url: gh("LottieFiles/dotlottie-web") },
        ],
      },
      { type: "links", title: "④ Phòng dựng", items: [{ label: "Remotion", url: gh("remotion-dev/remotion") }, { label: "Motion Canvas", url: gh("motion-canvas/motion-canvas") }] },
      {
        type: "links",
        title: "⑤ Quay 3D",
        items: [
          { label: "Three.js", url: gh("mrdoob/three.js") },
          { label: "React Three Fiber", url: gh("pmndrs/react-three-fiber") },
          { label: "Drei", url: gh("pmndrs/drei") },
          { label: "Rapier", url: gh("dimforge/rapier") },
          { label: "Postprocessing", url: gh("pmndrs/postprocessing") },
        ],
      },
      {
        type: "links",
        title: "⑥ Âm thanh & hậu kỳ",
        items: [
          { label: "Howler.js", url: gh("goldfire/howler.js") },
          { label: "Mediabunny", url: gh("Vanilagy/mediabunny") },
          { label: "FFmpeg", url: gh("FFmpeg/FFmpeg") },
        ],
      },
    ],
  },
]

/** Số repo GitHub khác nhau trong cả kho (đếm từ dữ liệu, không gõ tay). */
export function countGithubRepos(items: TaiLieu[] = taiLieu) {
  const repos = new Set<string>()
  for (const item of items) {
    for (const block of item.blocks) {
      if (block.type !== "links") continue
      for (const link of block.items) {
        const match = link.url.match(/^https:\/\/github\.com\/([^/]+\/[^/#?]+)/)
        if (match) repos.add(match[1].toLowerCase())
      }
    }
  }
  return repos.size
}
