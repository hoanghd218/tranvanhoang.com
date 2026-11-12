import type { Section } from "@/lib/course-playbook/types"

/**
 * Giáo trình Module 02 — Phần 2 WHAT · 04 Opportunity Discovery Framework:
 * phần mở đầu — bảng sáu phương pháp (The 6 Opportunity Discovery Methods).
 */
export const section: Section = {
  id: "sau-phuong-phap",
  kicker: "WHAT · 04 Opportunity Discovery Framework",
  title: "6 phương pháp tìm cơ hội — sáu con đường, không phải sáu bước",
  highlight: "6 phương pháp",
  tocLabel: "6 phương pháp tìm cơ hội",
  lead: "Đây là phần trọng tâm của Module 02: The 6 Opportunity Discovery Methods (sáu phương pháp phát hiện cơ hội). Sáu phương pháp không phải sáu bước phải làm theo thứ tự. Chúng là sáu con đường khác nhau để phát hiện cơ hội kinh doanh.",
  blocks: [
    {
      type: "table",
      head: ["#", "Phương pháp", "Nguồn phát hiện cơ hội", "Case"],
      rows: [
        [
          "1",
          "**Solve Your Own Problem** (giải vấn đề của chính mình)",
          "Vấn đề trong đời sống, công việc hoặc của người thân",
          "BulkMockup · Voicy",
        ],
        [
          "2",
          "**Proven App Reverse Engineering** (mổ xẻ app đã có người mua)",
          "Ứng dụng đã có người mua hoặc thị trường rõ ràng",
          "Prayer Lock · Shipper",
        ],
        [
          "3",
          "**Localization & Verticalization** (bản địa hoá và chuyên biệt hoá)",
          "Mô hình thành công nhưng chưa phục vụ tốt một địa phương hoặc phân khúc",
          "Cal Buddy · Symmetry",
        ],
        [
          "4",
          "**Community Pain Mining** (đào nỗi đau trong cộng đồng)",
          "Những khó khăn và câu hỏi lặp lại trong cộng đồng",
          "Algrow · Elephas",
        ],
        [
          "5",
          "**Emerging Trend Discovery** (bắt xu hướng mới)",
          "Xu hướng, công nghệ hoặc hành vi mới tạo ra nhu cầu",
          "Pep AI · Postiz",
        ],
        [
          "6",
          "**Hidden & Underserved Niche** (ngách bị bỏ quên)",
          "Những thị trường ngách bị bỏ qua nhưng có vấn đề đáng trả tiền",
          "3AK · Hero Analytics · Savvy Nomad",
        ],
      ],
    },
    {
      type: "callout",
      label: "Cách đọc phần này",
      paragraphs: [
        "Mỗi phương pháp được trình bày theo cùng một khung: **WHY** (vì sao hiệu quả), **WHAT** (dấu hiệu cần tìm), **case thật** và **HOW** (áp dụng thế nào, kèm một bài thực hành).",
        "Mỗi case có một slide đọc theo khung 8 câu của khoá học. Số liệu doanh thu trong các case là số founder tự công bố tại thời điểm phỏng vấn, chưa kiểm chứng độc lập.",
      ],
    },
    {
      type: "callout",
      label: "Không phải case nào cũng là mobile app",
      paragraphs: [
        "BulkMockup (plugin Photoshop), Shipper, Algrow, Postiz, Hero Analytics (web app), Elephas (ứng dụng Mac) và Savvy Nomad (phần mềm kết hợp dịch vụ) không phải mobile app thuần. Chúng được dùng để học cách tìm cơ hội, không phải để sao chép mô hình.",
      ],
    },
  ],
}
