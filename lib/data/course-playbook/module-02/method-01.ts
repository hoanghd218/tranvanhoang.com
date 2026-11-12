import type { Block } from "@/lib/course-playbook/types"
import { UNVERIFIED, figureBlock } from "./helpers"

/**
 * Giáo trình Module 02 — 04 Opportunity Discovery Framework · METHOD 01 — Solve Your Own Problem
 * (WHY · WHAT · case BulkMockup và Voicy · HOW · bài thực hành Personal Problem Inventory).
 */
export const blocks: Block[] = [
  { type: "subheading", text: "Cách 1 — Solve Your Own Problem (giải vấn đề của chính mình)" },
  {
    type: "callout",
    label: "Big Idea",
    paragraphs: [
      "Một trong những nguồn ý tưởng tốt nhất là công việc khó chịu, tốn thời gian hoặc tốn tiền mà bạn hiểu rất rõ.",
    ],
  },
  {
    type: "paragraph",
    text: "**Vì sao hiệu quả?** Người sáng lập có lợi thế hiểu hoàn cảnh sử dụng, nguyên nhân của vấn đề và các giải pháp hiện tại. Họ không cần tưởng tượng khách hàng gặp khó khăn gì; họ đã trực tiếp trải nghiệm hoặc quan sát vấn đề.",
  },
  {
    type: "callout",
    label: "Cẩn thận",
    paragraphs: [
      "Vấn đề của bản thân chỉ là điểm khởi đầu. Không thể suy ra rằng vì mình cần thì người khác sẽ trả tiền.",
    ],
  },
  { type: "subheading", text: "Những dấu hiệu cần tìm" },
  {
    type: "list",
    items: [
      "Công việc thủ công phải thực hiện lặp lại.",
      "Thao tác mất quá nhiều thời gian.",
      "Phải dùng nhiều công cụ mới hoàn thành một việc.",
      "Phần mềm hiện tại khó dùng hoặc gây khó chịu.",
      "Phải thuê người thực hiện một công việc có thể đơn giản hoá.",
      "Người thân gặp khó khăn mà các sản phẩm hiện có giải quyết chưa tốt.",
    ],
  },
  { type: "subheading", text: "Case thật: từ việc của mình, của người thân" },
  {
    type: "case",
    case: {
      title: "BulkMockup — Vikash",
      tag: "Cách 1 · Solve Your Own Problem",
      columns: [
        {
          label: "Bối cảnh & cách tìm ra cơ hội",
          text: "**Sản phẩm:** plugin Photoshop ghép thiết kế lên mockup hàng loạt cho chủ shop in theo yêu cầu và người bán Etsy — việc 30 phút–1 giờ còn khoảng 2 phút. **Bối cảnh:** freelancer Photoshop trên Upwork, không có nền kỹ thuật. **Tín hiệu:** khách muốn tự động hoá Photoshop; nhiều người thuê trợ lý ảo chỉ để làm mockup. **Cách làm:** học JavaScript một ngày, viết script; job ~1.800 mockup khách dự kiến 3–4 ngày, script làm xong ~30 phút; khách trả $300; ~2 tháng sau script thành sản phẩm.",
        },
        {
          label: "Thu tiền & kết quả tự công bố",
          text: "**Thu tiền:** thuê bao ~$15/tháng. **Tìm khách:** video YouTube giải từng vấn đề nhỏ; 22% lượt xem đến từ Google. **Kết quả tự công bố:** $12.000–13.000/tháng (mốc 1:53); 100+ đánh giá 5 sao.",
        },
        {
          label: "Bài học & câu hỏi phản biện",
          text: "**Bài học:** khách đang thuê người làm thủ công có thể chính là nguồn phát hiện cơ hội phần mềm; khách trả tiền ngay là bằng chứng đầu tiên. **Founder nói (3:44):** “Ban đầu nó hoàn toàn không phải là một SaaS (phần mềm bán theo thuê bao).” **Phản biện:** không làm nghề Photoshop thuê, bạn có thấy được nỗi đau này?",
        },
      ],
      source: `Nguồn: Starter Story — [How I Built a $12K/Month Micro-SaaS](https://www.youtube.com/watch?v=W48emwbUlUE), đoạn 02:13–04:18. ${UNVERIFIED} Theo transcript, khách trả $300 cho job này; video không nói rõ đó là tiền mua công cụ. Nền tảng: plugin Photoshop, không phải mobile app.`,
    },
  },
  figureBlock(
    "case-01-bulkmockup",
    "Slide case BulkMockup theo khung 8 câu: job khoảng 1.800 mockup, khách dự kiến 3–4 ngày, script xong khoảng 30 phút, khách trả $300, thuê bao khoảng $15/tháng, kết quả tự công bố $12.000–13.000/tháng.",
    "Hình 6 · Case BulkMockup — số liệu founder tự công bố, chưa kiểm chứng độc lập.",
  ),
  {
    type: "case",
    case: {
      title: "Voicy — Kourosh",
      tag: "Cách 1 · Solve Your Own Problem",
      columns: [
        {
          label: "Bối cảnh & cách tìm ra cơ hội",
          text: "**Sản phẩm:** công cụ nhập liệu bằng giọng nói (dùng Whisper API) chạy trên nhiều ứng dụng, máy tính và điện thoại; bắt đầu là tiện ích Chrome. **Bối cảnh:** lớn lên ở Tehran, sang London năm 18 tuổi; app đầu đạt 5K MRR nhưng không làm marketing; làm Voicy song song việc 9–5. **Tín hiệu:** ốm nằm 2 tuần, nhìn bố gõ một email rất chậm — đúng lúc đang thử tính năng giọng nói của ChatGPT. **Cách làm:** làm cho bố → MVP (bản sản phẩm tối thiểu) tiện ích Chrome trong 2 tuần nhờ ChatGPT viết code → người lạ tự tải, chưa cần marketing → gọi điện cho user: 20–30% là người cao tuổi, người khuyết tật.",
        },
        {
          label: "Thu tiền & kết quả tự công bố",
          text: "**Thu tiền:** $8,49/tháng hoặc trọn đời ~$260; giảm 20% cho người khuyết tật. **Tìm khách:** Chrome Web Store → Reddit → SEO (~200 bài) → YouTube “AI cho người cao tuổi”. **Kết quả tự công bố:** MRR (doanh thu định kỳ hằng tháng) 11K; thu thực tế $16.000–20.000/tháng nhờ gói trọn đời; 1.400 thuê bao; ~10.000 người dùng/tháng (mốc 2:35).",
        },
        {
          label: "Bài học & câu hỏi phản biện",
          text: "**Bài học:** một tính năng thông thường với người này có thể giải quyết vấn đề rất quan trọng với một nhóm khác — Painkiller vs Vitamin (thuốc giảm đau và vitamin). **Founder nói (10:32):** “Với bạn và tôi là vitamin… với những người tôi phục vụ, đó là thuốc giảm đau.” **Phản biện:** không gọi điện cho user, liệu có tìm ra ngách người cao tuổi — hay chỉ là thêm một app nhập liệu bằng giọng nói?",
        },
      ],
      source: `Nguồn: Starter Story — [I Built This App for My Dad. Now It Makes $18K/Month](https://www.youtube.com/watch?v=LrLDsvbdPr0), đoạn 04:59–05:42 và 02:05–03:11. ${UNVERIFIED} Con số $16.000–20.000/tháng là thu thực tế gồm cả gói trả một lần.`,
    },
  },
  figureBlock(
    "case-02-voicy",
    "Slide case Voicy theo khung 8 câu: làm app nhập liệu bằng giọng nói cho bố, MVP tiện ích Chrome trong 2 tuần, MRR 11K, thu thực tế $16.000–20.000/tháng nhờ gói trọn đời, 1.400 thuê bao.",
    "Hình 7 · Case Voicy — số liệu founder tự công bố, chưa kiểm chứng độc lập.",
  ),
  { type: "subheading", text: "Áp dụng thế nào?" },
  {
    type: "steps",
    items: [
      { title: "Liệt kê vấn đề", text: "Ghi ít nhất 10 vấn đề thực tế trong cuộc sống hoặc công việc." },
      {
        title: "Chấm từng vấn đề",
        text: "Xác định tần suất, mức độ khó chịu và chi phí thời gian/tiền bạc.",
      },
      { title: "Tìm người cùng hoàn cảnh", text: "Tìm những người có hoàn cảnh tương tự." },
      { title: "Xem họ đang giải ra sao", text: "Kiểm tra họ đang giải quyết vấn đề bằng cách nào." },
      {
        title: "Chuyển thành giả thuyết",
        text: "Chuyển vấn đề thành một hoặc nhiều giả thuyết sản phẩm.",
      },
    ],
  },
  {
    type: "worksheet",
    id: "personal-problem-inventory",
    title: "Bài thực hành · Personal Problem Inventory (kiểm kê vấn đề cá nhân)",
    note: "Ghi lại 10 vấn đề, chọn ba vấn đề đáng nghiên cứu và mô tả ai khác cũng đang gặp chúng.",
    fields: [
      "10 vấn đề thực tế trong đời sống hoặc công việc (mỗi dòng một vấn đề)",
      "Tần suất, mức độ khó chịu, chi phí thời gian/tiền bạc của từng vấn đề",
      "3 vấn đề đáng nghiên cứu nhất",
      "Ai khác cũng đang gặp 3 vấn đề đó?",
      "Họ đang giải quyết bằng cách nào?",
    ],
  },
]
