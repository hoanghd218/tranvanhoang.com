import type { CourseModule } from "@/lib/course-playbook/types"
import { section as tongQuan } from "./section-tong-quan"
import { section as quyTrinh5Chang } from "./section-quy-trinh-5-chang"
import { section as bai41 } from "./section-bai-4-1"
import { section as bai42 } from "./section-bai-4-2"
import { section as bai43 } from "./section-bai-4-3"
import { section as bai44 } from "./section-bai-4-4"
import { section as bai45 } from "./section-bai-4-5"
import { section as bai46 } from "./section-bai-4-6"
import { section as bai47 } from "./section-bai-4-7"
import { section as bai48 } from "./section-bai-4-8"
import { section as bai49 } from "./section-bai-4-9"
import { section as bai410 } from "./section-bai-4-10"
import { section as bai411 } from "./section-bai-4-11"
import { section as bai412 } from "./section-bai-4-12"
import { section as boPromptThietKe } from "./section-bo-prompt-thiet-ke"
import { section as boPromptTimYTuong } from "./section-prompt-tim-y-tuong"
import { section as mauBaiTapRubric } from "./section-mau-bai-tap-rubric"
import { section as nguyenTacUngDung } from "./section-nguyen-tac"
import { section as caseThucTe } from "./section-case-thuc-te"
import { section as congG4 } from "./section-cong-g4"

/**
 * Module 04 — Design: bài 4.1–4.12 theo 4MAT (WHY → WHAT → HOW → WHAT IF),
 * hai bộ prompt, mẫu và rubric, ba case thật, cổng G4.
 */
const module04: CourseModule = {
  slug: "module-04",
  number: "04",
  title: "Design",
  headline: "Thiết kế trải nghiệm khiến khách hàng trả tiền",
  headlineHighlight: "trả tiền",
  intro:
    "Biến một ý tưởng mobile app đã có tín hiệu thị trường thành bộ thiết kế sản phẩm thống nhất, kiểm chứng được với người dùng, có trải nghiệm chuyển đổi trả phí và đủ rõ để AI lập trình thành MVP. Bạn làm toàn bộ bằng ChatGPT Web, trước khi viết một dòng code.",
  coreQuestion: "Trải nghiệm nào tạo giá trị và khiến khách hàng trả tiền?",
  output: "Product Blueprint",
  gate: { code: "G4", name: "Product Clarity" },
  facts: [
    { label: "Thời lượng", value: "12 bài · 360 phút" },
    { label: "Phương pháp", value: "4MAT: WHY → WHAT → HOW → WHAT IF" },
    { label: "Công cụ chính", value: "ChatGPT trên trình duyệt web, có tạo ảnh" },
    { label: "Bàn giao sang", value: "Module 05 — Build" },
  ],
  sections: [
    tongQuan,
    quyTrinh5Chang,
    bai41,
    bai42,
    bai43,
    bai44,
    bai45,
    bai46,
    bai47,
    bai48,
    bai49,
    bai410,
    bai411,
    bai412,
    boPromptThietKe,
    boPromptTimYTuong,
    mauBaiTapRubric,
    nguyenTacUngDung,
    caseThucTe,
    congG4,
  ],
}

export default module04
