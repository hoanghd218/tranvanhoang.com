import type { CourseModule } from "@/lib/course-playbook/types"
import { section as tongQuan } from "./section-tong-quan"
import { section as marketFirst } from "./section-market-first"
import { section as chonSaiThiTruong } from "./section-chon-sai-thi-truong"
import { section as dinhNghiaNenTang } from "./section-dinh-nghia-nen-tang"
import { section as bayNguyenTacBefore } from "./section-bay-nguyen-tac-before"
import { section as namYeuToMarketFit } from "./section-nam-yeu-to-market-fit"
import { section as baConDuong } from "./section-ba-con-duong"
import { section as phanKhucVaNoiDau } from "./section-phan-khuc-va-noi-dau"
import { section as kinhTeThiTruong } from "./section-kinh-te-thi-truong"
import { section as kenhTiepCan } from "./section-kenh-tiep-can"
import { section as baBoLoc } from "./section-ba-bo-loc"
import { section as playbook7Buoc } from "./section-playbook-7-buoc"
import { section as congCuVaBangChung } from "./section-cong-cu-va-bang-chung"
import { section as scorecard } from "./section-scorecard"
import { section as saiLamVaCachLamTot } from "./section-sai-lam-va-cach-lam-tot"
import { section as masterPrompt } from "./section-master-prompt"
import { section as caseStudy } from "./section-case-study"
import { section as thichUng } from "./section-thich-ung"
import { section as thuThachVaBaoCao } from "./section-thu-thach-va-bao-cao"
import { section as decisionGate } from "./section-decision-gate"
import { section as tongKet } from "./section-tong-ket"

/**
 * Module 01 — Market. Nguồn: giáo trình Module 01 bản hiện hành (WHY → WHAT → HOW → WHAT IF).
 * Thứ tự sections theo đúng thứ tự giáo trình.
 */
const module01: CourseModule = {
  slug: "module-01",
  number: "01",
  title: "Market",
  headline: "Chọn đúng khách hàng trước",
  headlineHighlight: "đúng khách hàng",
  intro:
    "Module 01 giúp bạn chọn thị trường trước khi xây app: ai là khách hàng, họ có đau đủ để trả tiền không, và bạn tiếp cận họ ở đâu. Bạn làm cùng ChatGPT, từng bước, và kết thúc bằng một Market Fit Report (báo cáo mức phù hợp của thị trường) cùng cổng quyết định G1.",
  coreQuestion: "Bán cho ai? Tiếp cận họ ở đâu?",
  output: "Market Opportunity Report",
  gate: { code: "G1", name: "Market Fit" },
  facts: [
    { label: "Cấu trúc", value: "4 phần: WHY · WHAT · HOW · WHAT IF" },
    { label: "Nền tảng tư duy", value: "7 nguyên tắc BEFORE" },
    { label: "Framework chính", value: "5-Factor Market Fit" },
    { label: "Quy trình", value: "7 bước dùng ChatGPT" },
    { label: "Chấm điểm", value: "Scorecard 100 điểm" },
  ],
  sections: [
    tongQuan,
    marketFirst,
    chonSaiThiTruong,
    dinhNghiaNenTang,
    bayNguyenTacBefore,
    namYeuToMarketFit,
    baConDuong,
    phanKhucVaNoiDau,
    kinhTeThiTruong,
    kenhTiepCan,
    baBoLoc,
    playbook7Buoc,
    congCuVaBangChung,
    scorecard,
    saiLamVaCachLamTot,
    masterPrompt,
    caseStudy,
    thichUng,
    thuThachVaBaoCao,
    decisionGate,
    tongKet,
  ],
}

export default module01
