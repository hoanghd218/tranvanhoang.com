import type { Section } from "@/lib/course-playbook/types"
import { figures } from "./figures"

/** Nguồn: giáo trình Module 01, Phần II — WHAT, bài 2.2 (7 BEFORE Principles). */
export const section: Section = {
  id: "bay-nguyen-tac-before",
  kicker: "WHAT · Bài 2.2",
  title: "Bảy nguyên tắc BEFORE: việc nào làm trước, việc nào để sau",
  highlight: "BEFORE",
  tocLabel: "7 nguyên tắc BEFORE",
  lead: "Đây là hệ thống tư duy trung tâm của Module 01. Mỗi nguyên tắc nói việc nào phải làm trước và việc nào để sau.",
  blocks: [
    {
      type: "table",
      head: ["Nguyên tắc", "Thông điệp"],
      rows: [
        ["**WHO** Before **WHAT**", "Khách hàng trước sản phẩm"],
        ["**PROBLEM** Before **SOLUTION**", "Vấn đề trước giải pháp"],
        ["**DEMAND** Before **INNOVATION**", "Nhu cầu trước sự mới lạ"],
        ["**PAYMENT** Before **POPULARITY**", "Người mua trước sự nổi tiếng"],
        ["**DISTRIBUTION** Before **DEVELOPMENT**", "Phân phối trước khi đầu tư phát triển"],
        ["**NICHE** Before **MASS MARKET**", "Phân khúc cụ thể trước thị trường đại chúng"],
        ["**EVIDENCE** Before **COMMITMENT**", "Bằng chứng trước cam kết đầu tư"],
      ],
    },
    { type: "figure", figure: figures.baNguyenTac },
    {
      type: "callout",
      label: "Hai nguyên tắc dẫn dắt quan trọng nhất",
      paragraphs: [
        "**WHO Before WHAT · PROBLEM Before SOLUTION.** Chuỗi dẫn đường: **Customer → Problem → Value → Opportunity** (khách hàng, vấn đề, giá trị, cơ hội).",
        "Đây là nền tảng để bạn không bị cuốn vào việc tạo app trước khi hiểu khách hàng.",
      ],
    },
    { type: "subheading", text: "Đọc từng nguyên tắc" },
    {
      type: "accordion",
      expandFirst: true,
      items: [
        {
          number: "1",
          title: "WHO Before WHAT",
          gloss: "Khách hàng trước sản phẩm",
          question: "Họ là ai, ai là người chi tiền?",
          blocks: [
            { type: "paragraph", text: "Trước khi nghĩ đến sản phẩm, hãy xác định khách hàng bạn muốn phục vụ. Câu hỏi cần trả lời:" },
            {
              type: "list",
              items: [
                "Họ là ai?",
                "Họ đang làm công việc gì?",
                "Họ có mục tiêu gì?",
                "Họ gặp khó khăn trong hoàn cảnh nào?",
                "Họ thường tìm kiếm giải pháp ở đâu?",
                "Ai quyết định việc chi tiền?",
              ],
            },
            {
              type: "paragraph",
              text: "Ví dụ: “người muốn học ngoại ngữ” là nhóm rất rộng. “Kỹ sư phần mềm chuẩn bị phỏng vấn bằng tiếng Anh” là nhóm rõ ràng hơn để nghiên cứu.",
            },
            { type: "callout", label: "Bài học", paragraphs: ["**Customer Clarity Before Product Complexity** — rõ khách hàng trước khi sản phẩm phức tạp."] },
          ],
        },
        {
          number: "2",
          title: "PROBLEM Before SOLUTION",
          gloss: "Vấn đề trước giải pháp",
          question: "Điều gì làm họ khó chịu nhất? Bỏ qua thì mất gì?",
          blocks: [
            { type: "paragraph", text: "Trước khi chọn công nghệ hoặc tính năng, hãy hiểu vấn đề khách hàng đang gặp. Tìm hiểu:" },
            {
              type: "list",
              items: [
                "Vấn đề nào gây phiền toái nhất?",
                "Hậu quả nếu không giải quyết?",
                "Họ đã thử phương pháp nào?",
                "Tại sao giải pháp hiện tại chưa đáp ứng tốt?",
                "Kết quả thực sự họ mong muốn là gì?",
              ],
            },
            { type: "paragraph", text: "Đừng mặc định khách hàng cần AI chỉ vì AI đang phổ biến." },
            { type: "callout", label: "Bài học", paragraphs: ["**Solve What Matters, Not Just What Is Possible** — giải điều quan trọng, không chỉ điều làm được."] },
          ],
        },
        {
          number: "3",
          title: "DEMAND Before INNOVATION",
          gloss: "Nhu cầu trước sự mới lạ",
          question: "Đã có ai trả tiền cho nhu cầu này chưa?",
          blocks: [
            { type: "paragraph", text: "Không nhất thiết phải phát minh một thị trường mới để tạo ra cơ hội kinh doanh. Bạn có thể chọn:" },
            {
              type: "list",
              items: [
                "Thị trường đã có người trả tiền.",
                "Nhu cầu đã tồn tại nhưng trải nghiệm chưa tốt.",
                "Phân khúc chưa được phục vụ phù hợp.",
                "Địa phương có nhu cầu nhưng thiếu sản phẩm bản địa hoá.",
                "Nhóm người dùng đang phải dùng công cụ bất tiện.",
              ],
            },
            { type: "paragraph", text: "Ví dụ: Cal Buddy phục vụ một thị trường địa phương bằng mô hình sản phẩm đã có nhu cầu ở thị trường khác (xem Bài 4.1)." },
            { type: "callout", label: "Bài học", paragraphs: ["**Proven Demand Can Be a Better Starting Point Than Novelty** — nhu cầu đã được chứng minh có thể là điểm xuất phát tốt hơn sự mới lạ."] },
          ],
        },
        {
          number: "4",
          title: "PAYMENT Before POPULARITY",
          gloss: "Người mua trước sự nổi tiếng",
          question: "Họ đã từng chi tiền cho thứ tương tự chưa?",
          blocks: [
            { type: "paragraph", text: "Nhiều người thích một sản phẩm chưa chắc tạo ra một doanh nghiệp tốt. Cần phân biệt năm mức:" },
            {
              type: "list",
              items: [
                "**Attention** — sự chú ý.",
                "**Interest** — sự quan tâm.",
                "**Usage** — hành vi sử dụng.",
                "**Purchase** — hành vi thanh toán.",
                "**Repeat Purchase** — hành vi mua lại hoặc gia hạn.",
              ],
            },
            { type: "paragraph", text: "Khách hàng có tiền chưa chắc muốn mua. Khách hàng thích sản phẩm chưa chắc sẵn sàng trả tiền." },
            { type: "callout", label: "Bài học", paragraphs: ["**Willing Buyers Matter More Than Vanity Metrics** — người sẵn sàng mua quan trọng hơn các con số làm đẹp."] },
          ],
        },
        {
          number: "5",
          title: "DISTRIBUTION Before DEVELOPMENT",
          gloss: "Phân phối trước khi đầu tư phát triển",
          question: "100 khách đầu tiên ở đâu?",
          blocks: [
            { type: "paragraph", text: "Hãy có giả thuyết về khả năng tiếp cận khách hàng trước khi đầu tư nghiêm túc vào phát triển sản phẩm. Founder có thể:" },
            {
              type: "list",
              items: [
                "Sở hữu sẵn cộng đồng.",
                "Xây nội dung thu hút người dùng.",
                "Tiếp cận những cộng đồng đang tồn tại.",
                "Tìm khách hàng qua search (tìm kiếm).",
                "Hợp tác với creator (người sáng tạo nội dung) hoặc agency (công ty dịch vụ).",
                "Thử nghiệm quảng cáo trả phí.",
              ],
            },
            { type: "paragraph", text: "Không có audience (khán giả) sẵn không đồng nghĩa không có cơ hội." },
            { type: "callout", label: "Bài học", paragraphs: ["**A Great Product Needs a Path to Customers** — sản phẩm tốt cần có đường đến khách hàng."] },
          ],
        },
        {
          number: "6",
          title: "NICHE Before MASS MARKET",
          gloss: "Phân khúc cụ thể trước thị trường đại chúng",
          question: "Mình đã là số 1 với nhóm nhỏ nào chưa?",
          blocks: [
            { type: "paragraph", text: "Không cần phục vụ tất cả mọi người ngay từ đầu. Tập trung vào một nhóm khách hàng giúp founder:" },
            {
              type: "list",
              items: [
                "Hiểu nhu cầu sâu hơn.",
                "Nghiên cứu đối thủ chính xác hơn.",
                "Đưa ra thông điệp cụ thể.",
                "Kiểm chứng bằng một nhóm người dùng rõ ràng.",
                "Phát triển lợi thế trong một phân khúc trước khi mở rộng.",
              ],
            },
            { type: "callout", label: "Bài học", paragraphs: ["**Win a Small, Clear Segment Before Expanding** — thắng một nhóm nhỏ, rõ trước khi mở rộng."] },
          ],
        },
        {
          number: "7",
          title: "EVIDENCE Before COMMITMENT",
          gloss: "Bằng chứng trước cam kết đầu tư",
          question: "Bằng chứng nào cho thấy họ sẽ mua?",
          blocks: [
            { type: "paragraph", text: "Đừng đầu tư lớn chỉ vì một ý tưởng nghe hấp dẫn hoặc một founder khác từng thành công. Cần tìm bằng chứng về:" },
            {
              type: "list",
              items: [
                "Nhu cầu.",
                "Những giải pháp đang được sử dụng.",
                "Hành vi trả tiền.",
                "Đối thủ.",
                "Khả năng tiếp cận khách hàng.",
                "Quy mô và triển vọng thị trường.",
              ],
            },
            { type: "paragraph", text: "Điểm số nghiên cứu cao không thay thế việc kiểm chứng hành vi khách hàng thực tế." },
            { type: "callout", label: "Bài học", paragraphs: ["**Strong Evidence Before Major Investment** — bằng chứng mạnh trước khi đầu tư lớn."] },
          ],
        },
      ],
    },
  ],
}
