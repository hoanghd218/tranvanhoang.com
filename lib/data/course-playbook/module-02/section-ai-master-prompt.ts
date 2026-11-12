import type { Section } from "@/lib/course-playbook/types"
import { figureBlock } from "./helpers"
import { masterPrompt } from "./master-prompt"

/**
 * Giáo trình Module 02 — Phần 3 HOW · 09 AI Guided Practice — Master Prompt & phỏng vấn phản biện:
 * 9.1 bốn vai trò của AI · 9.2 cơ chế phỏng vấn 5 vòng · 9.3 Master Prompt AI Opportunity Advisor V1.0 ·
 * 9.4 mô phỏng cách Master Prompt hoạt động.
 */
export const section: Section = {
  id: "ai-phong-van-phan-bien",
  kicker: "HOW · 09 AI Guided Practice",
  title: "AI phỏng vấn và phản biện — bạn là người quyết định",
  highlight: "bạn là người quyết định",
  tocLabel: "AI phỏng vấn & Master Prompt",
  lead: "Thay vì tự đọc hết tài liệu, mở nhiều cuộc hội thoại và tự tổ chức nghiên cứu, bạn dùng một Master Prompt (prompt chủ) để ChatGPT tiếp nhận kết quả Module 01, khai thác cơ hội, phỏng vấn bạn, phản biện các giả định và hỗ trợ bạn chọn ý tưởng.",
  blocks: [
    figureBlock(
      "ai-phong-van-phan-bien-decision-gate",
      "Infographic AI phỏng vấn và phản biện: bốn vai trò của AI, năm vòng phỏng vấn, đoạn chat mẫu về app luyện phỏng vấn tiếng Anh, bảy lệnh người dùng, ba sản phẩm đầu ra, 12 mục của App Opportunity Brief và Decision Gate tám mục.",
      "Hình 24 · AI phỏng vấn, phản biện và Decision Gate — quyết định cuối cùng thuộc về bạn.",
    ),
    { type: "subheading", text: "Master Prompt làm được bốn việc" },
    {
      type: "list",
      ordered: true,
      items: [
        "Tiếp nhận kết quả Module 01 — không bắt đầu lại từ số không.",
        "Khám phá cơ hội theo sáu phương pháp, dựa trên thị trường và khách hàng đã chọn.",
        "Phỏng vấn và phản biện bạn để sửa những giả định sai, khai thác kiến thức thực tế mà AI chưa biết.",
        "Cùng bạn lựa chọn cơ hội và tạo App Opportunity Brief chuẩn để chuyển sang Module 03.",
      ],
    },
    { type: "subheading", text: "9.1 · AI không chỉ là người tạo ý tưởng" },
    {
      type: "cards",
      columns: 2,
      items: [
        {
          title: "Opportunity Researcher",
          meta: "Nhà nghiên cứu cơ hội",
          text: "Tìm vấn đề, đối thủ, tín hiệu nhu cầu và khoảng trống.",
        },
        {
          title: "Business Strategist",
          meta: "Nhà chiến lược kinh doanh",
          text: "Đề xuất các mô hình kinh doanh và lợi thế khác biệt.",
        },
        {
          title: "Socratic Interviewer",
          meta: "Người phỏng vấn kiểu Socrates",
          text: "Phỏng vấn, hỏi sâu và khai thác kinh nghiệm của bạn.",
        },
        {
          title: "Devil's Advocate",
          meta: "Người phản biện",
          text: "Phản biện giả định, phân tích rủi ro và tìm lý do ý tưởng có thể thất bại.",
        },
      ],
    },
    {
      type: "callout",
      label: "AI không phải người quyết định cuối cùng",
      paragraphs: [
        "Bạn có quyền đồng ý, bác bỏ, sửa và yêu cầu AI chứng minh nhận định.",
        "Khi có thông tin mới, AI phải cập nhật phân tích và chấm điểm lại chứ không bảo vệ câu trả lời trước đó.",
      ],
    },
    { type: "subheading", text: "9.2 · Cơ chế phỏng vấn: các vòng hội thoại ngắn" },
    {
      type: "paragraph",
      text: "Không để ChatGPT đưa ra 20 câu hỏi cùng lúc. Quy trình chia thành năm vòng hội thoại ngắn:",
    },
    {
      type: "steps",
      items: [
        {
          title: "Market & Founder Review",
          text: "AI đọc Market Fit Report, tóm tắt điều đã biết và hỏi tối đa hai câu về những khoảng trống quan trọng.",
        },
        {
          title: "Problem Discovery",
          text: "AI tìm vấn đề theo sáu phương pháp, rồi hỏi bạn đã thực sự chứng kiến vấn đề nào.",
        },
        {
          title: "Opportunity Exploration",
          text: "AI đưa ra các cơ hội ban đầu và yêu cầu bạn nhận xét, sửa hoặc bác bỏ.",
        },
        {
          title: "Commercial Challenge",
          text: "AI phản biện về khách hàng trả tiền, giải pháp thay thế, cạnh tranh và khả năng phân phối.",
        },
        {
          title: "Opportunity Selection",
          text: "AI và bạn chọn ba phương án, xác định cơ hội ưu tiên và lập các giả thuyết kiểm chứng.",
        },
      ],
    },
    {
      type: "output",
      label: "Mỗi vòng cần có ba yếu tố",
      text: "Phát hiện của AI → câu hỏi phản biện → cập nhật kết luận dựa trên câu trả lời của bạn.",
    },
    { type: "subheading", text: "9.3 · Master Prompt — AI Opportunity Advisor V1.0" },
    {
      type: "paragraph",
      text: "Đây là prompt bạn dùng trực tiếp. Bạn chỉ cần dán kết quả Market Fit Report từ Module 01 vào phần cuối prompt.",
    },
    {
      type: "prompt",
      title: "Master Prompt — AI Opportunity Advisor V1.0",
      when: "Bạn đã có Market Fit Report từ Module 01 và muốn tìm, chấm điểm, phản biện và chọn cơ hội app.",
      text: masterPrompt,
      hint: "Dán toàn bộ Market Fit Report vào chỗ được tô màu ở cuối prompt, rồi gửi cho ChatGPT. Ở câu trả lời đầu tiên, AI chỉ tóm tắt bối cảnh, nêu khoảng trống quan trọng và hỏi bạn tối đa hai câu — chưa tạo danh sách ý tưởng.",
      output:
        "Opportunity Map, danh sách cơ hội có chấm điểm và Evidence Log, rồi App Opportunity Brief cùng danh sách giả thuyết cần kiểm chứng ở Module 03.",
    },
    { type: "subheading", text: "Lệnh bạn dùng trong khi làm việc" },
    {
      type: "table",
      head: ["Lệnh", "Ý nghĩa"],
      rows: [
        ["**PHẢN BIỆN**", "Hãy tìm các lý do khiến ý tưởng này không khả thi."],
        ["**CHẤM LẠI**", "Cập nhật điểm khi có dữ liệu hoặc nhận định mới."],
        ["**TÌM THÊM**", "Tìm cơ hội theo một hoặc nhiều phương pháp khác."],
        ["**ĐỔI PHÂN KHÚC**", "Phân tích lại khi thay đổi ICP."],
        ["**SO SÁNH**", "So sánh các lựa chọn hiện có."],
        ["**CHỐT**", "Xác nhận cơ hội ưu tiên."],
        ["**XUẤT BRIEF**", "Tạo App Opportunity Brief từ quyết định đã xác nhận."],
      ],
    },
    { type: "subheading", text: "9.4 · Mô phỏng cách Master Prompt hoạt động" },
    {
      type: "paragraph",
      text: "**Tình huống minh hoạ giả định, không phải dữ liệu của một học viên có thật.** Đầu vào: học viên chọn thị trường Mỹ, phân khúc người nhập cư cần luyện giao tiếp tiếng Anh trong công việc; kênh phân phối dự kiến là YouTube và các cộng đồng học tiếng Anh.",
    },
    {
      type: "table",
      head: ["Lượt", "Nội dung"],
      rows: [
        [
          "**AI — phỏng vấn ban đầu**",
          "Tôi thấy bạn chọn nhóm người cần tiếng Anh để cải thiện công việc. Nhưng báo cáo chưa cho biết tình huống nào gây khó khăn lớn nhất: phỏng vấn xin việc, họp với đồng nghiệp hay trao đổi với khách hàng. Trong ba tình huống đó, bạn đã trực tiếp quan sát vấn đề nào nhiều nhất?",
        ],
        [
          "**Học viên**",
          "Tôi thấy nhiều người ngại phỏng vấn tiếng Anh. Họ học từ vựng khá nhiều nhưng không trả lời được khi nhà tuyển dụng hỏi.",
        ],
        [
          "**AI — phản biện**",
          "Đây là một tín hiệu đáng nghiên cứu. Tuy nhiên, người học đã có nhiều lựa chọn như YouTube, khoá học và ChatGPT. Chúng ta cần xác định tại sao một mobile app chuyên dụng có thể tạo giá trị tốt hơn. Người bạn quan sát đang thiếu nội dung học, thiếu môi trường thực hành hay thiếu phản hồi về câu trả lời?",
        ],
        [
          "**Học viên**",
          "Chủ yếu là thiếu người thực hành cùng và không biết câu trả lời của mình có tốt hay không.",
        ],
        [
          "**AI — cập nhật Opportunity Hypothesis**",
          "Vậy thay vì một app học tiếng Anh tổng quát, chúng ta có một giả thuyết hẹp hơn: ứng dụng luyện phỏng vấn bằng hội thoại AI, phản hồi theo từng câu trả lời và tình huống nghề nghiệp. Nhưng chưa thể kết luận có người trả tiền. Bước tiếp theo cần tìm ứng dụng tương tự, mức giá, phản hồi người dùng và thử kiểm chứng nhu cầu.",
        ],
      ],
    },
    {
      type: "callout",
      label: "Điều bạn nhận được",
      paragraphs: [
        "Bạn không chỉ nhận một đáp án của AI, mà học cách suy nghĩ, phản biện và cải thiện chất lượng quyết định kinh doanh.",
      ],
    },
  ],
}
