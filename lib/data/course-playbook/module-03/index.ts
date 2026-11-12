import type { CourseModule } from "@/lib/course-playbook/types"

import { section as tongQuan } from "./section-tong-quan"
import { section as whyViSao } from "./section-why-vi-sao"
import { section as whyCaseStudy } from "./section-why-case-study"
import { section as whatDinhNghia } from "./section-what-dinh-nghia"
import { section as whatBonGiaThuyet } from "./section-what-bon-gia-thuyet"
import { section as whatThangBangChung } from "./section-what-thang-bang-chung"
import { section as whatDiscoveryExperiment } from "./section-what-discovery-experiment"
import { section as whatCommitmentMetric } from "./section-what-commitment-metric"
import { section as howQuyTrinh } from "./section-how-quy-trinh"
import { section as howBuoc1 } from "./section-how-buoc-1"
import { section as howBuoc2 } from "./section-how-buoc-2"
import { section as howBuoc3 } from "./section-how-buoc-3"
import { section as howBuoc4 } from "./section-how-buoc-4"
import { section as howBuoc5 } from "./section-how-buoc-5"
import { section as howBuoc6 } from "./section-how-buoc-6"
import { section as howBuoc7 } from "./section-how-buoc-7"
import { section as whatIf } from "./section-what-if"
import { section as thucHanh } from "./section-thuc-hanh"
import { section as congCu } from "./section-cong-cu"
import { section as tieuChuan } from "./section-tieu-chuan"
import { section as congG3 } from "./section-cong-g3"

/**
 * Module 03 — Validate. Nội dung biên soạn từ giáo trình Module 03 (Phần I–VIII), giữ đúng thứ tự giáo trình.
 * Mỗi section một file; hình infographic ở public/images/course-playbook/module-03/.
 */
const module03: CourseModule = {
  slug: "module-03",
  number: "03",
  title: "Validate",
  headline: "Đừng xây app khi chưa có bằng chứng",
  headlineHighlight: "bằng chứng",
  intro:
    "Kiểm chứng nhu cầu thị trường và khả năng thương mại hoá một ý tưởng mobile app trước khi đầu tư phát triển sản phẩm. Bạn thu thập bằng chứng cho bốn giả thuyết — vấn đề, giải pháp, thanh toán, phân phối — rồi quyết định GO, PIVOT hay KILL.",
  coreQuestion: "Có đủ bằng chứng để đầu tư xây app không?",
  output: "Validation Report",
  gate: { code: "G3", name: "Evidence Fit" },
  facts: [
    { label: "Quy trình", value: "7 bước kiểm chứng" },
    { label: "Giả thuyết cần kiểm chứng", value: "4 giả thuyết" },
    { label: "Lịch thực hành mẫu", value: "14 ngày (đề xuất)" },
    { label: "Thang chấm", value: "100 điểm" },
  ],
  sections: [
    tongQuan,
    whyViSao,
    whyCaseStudy,
    whatDinhNghia,
    whatBonGiaThuyet,
    whatThangBangChung,
    whatDiscoveryExperiment,
    whatCommitmentMetric,
    howQuyTrinh,
    howBuoc1,
    howBuoc2,
    howBuoc3,
    howBuoc4,
    howBuoc5,
    howBuoc6,
    howBuoc7,
    whatIf,
    thucHanh,
    congCu,
    tieuChuan,
    congG3,
  ],
}

export default module03
