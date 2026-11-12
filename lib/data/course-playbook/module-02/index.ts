import type { CourseModule } from "@/lib/course-playbook/types"
import { section as tongQuan } from "./section-tong-quan"
import { section as khaiNiem } from "./section-khai-niem"
import { section as nguyenLy } from "./section-nguyen-ly"
import { section as sauPhuongPhap } from "./section-sau-phuong-phap"
import { section as cach12 } from "./section-cach-1-2"
import { section as cach34 } from "./section-cach-3-4"
import { section as cach56 } from "./section-cach-5-6"
import { section as tongKet } from "./section-tong-ket"
import { section as canvas } from "./section-canvas"
import { section as saiLam } from "./section-sai-lam"
import { section as quyTrinh } from "./section-quy-trinh"
import { section as thuVienCase } from "./section-thu-vien-case"
import { section as aiMasterPrompt } from "./section-ai-master-prompt"
import { section as dauRaBrief } from "./section-dau-ra-brief"
import { section as congQuyetDinh } from "./section-cong-quyet-dinh"

/**
 * Module 02 — Opportunity. Nguồn: Giáo trình Module 02 "Opportunity Mastery" V1.0
 * (4MAT × 10-Point Content Standard) và bộ infographic của module.
 */
const module02: CourseModule = {
  slug: "module-02",
  number: "02",
  title: "Opportunity",
  headline: "Tìm cơ hội kinh doanh, không chỉ nghĩ ý tưởng",
  headlineHighlight: "cơ hội kinh doanh",
  intro:
    "Xây app nhanh không có nghĩa là app có người mua. Module 02 đi từ Market Fit Report của Module 01 qua sáu phương pháp tìm cơ hội có case thật, rồi dùng một Master Prompt để ChatGPT phỏng vấn và phản biện bạn, cho đến khi bạn chọn được một cơ hội và viết App Opportunity Brief.",
  coreQuestion: "Vấn đề nào đáng giải quyết và tại sao khách hàng chọn mình?",
  output: "App Opportunity Brief",
  gate: { code: "G2", name: "Opportunity Fit" },
  facts: [
    { label: "Phương pháp tìm cơ hội", value: "6" },
    { label: "Bước tìm, lọc, chọn", value: "7" },
    { label: "Case thật có infographic", value: "14" },
    { label: "Thang chấm Scorecard", value: "100 điểm" },
    { label: "Phiên thực hành", value: "5" },
  ],
  sections: [
    tongQuan,
    khaiNiem,
    nguyenLy,
    sauPhuongPhap,
    cach12,
    cach34,
    cach56,
    tongKet,
    canvas,
    saiLam,
    quyTrinh,
    thuVienCase,
    aiMasterPrompt,
    dauRaBrief,
    congQuyetDinh,
  ],
}

export default module02
