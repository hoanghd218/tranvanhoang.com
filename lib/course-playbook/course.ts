import type { CourseModule, ModuleSummary } from "./types"
import module01 from "@/lib/data/course-playbook/module-01"
import module02 from "@/lib/data/course-playbook/module-02"
import module03 from "@/lib/data/course-playbook/module-03"
import module04 from "@/lib/data/course-playbook/module-04"

/** Đường dẫn gốc của playbook khoá học: /playbooks/ai-mobile-app (+ /vi) */
export const COURSE_SLUG = "ai-mobile-app"

/**
 * Chưa quyết bán có đăng nhập hay tặng miễn phí → mặc định KHÔNG cho công cụ tìm kiếm lập chỉ mục.
 * Đổi thành true khi chủ site quyết định công khai.
 */
export const COURSE_INDEXABLE = false

export const courseMeta = {
  title: "AI Mobile App Business OS",
  tagline: "Con đường từ cơ hội thị trường đến khách trả tiền đầu tiên. Làm cùng AI, từng bước, mỗi bước có một cổng quyết định.",
  description:
    "Playbook thực hành 7 module: tìm thị trường, chọn cơ hội, kiểm chứng, thiết kế, xây, ra mắt và bán, tăng trưởng app mobile bằng AI.",
}

/** Bảy module. Câu hỏi, đầu ra, cổng lấy từ Master Framework của khoá. Module chưa soạn để status "soon". */
export const moduleSummaries: ModuleSummary[] = [
  { slug: "module-01", number: "01", title: "Market", question: "Bán cho ai? Tiếp cận họ ở đâu?", output: "Market Opportunity Report", gate: "G1 · Market Fit", status: "ready" },
  { slug: "module-02", number: "02", title: "Opportunity", question: "Vấn đề nào đáng giải quyết và tại sao khách hàng chọn mình?", output: "App Opportunity Brief", gate: "G2 · Opportunity Fit", status: "ready" },
  { slug: "module-03", number: "03", title: "Validate", question: "Có đủ bằng chứng để đầu tư xây app không?", output: "Validation Report", gate: "G3 · Evidence Fit", status: "ready" },
  { slug: "module-04", number: "04", title: "Design", question: "Trải nghiệm nào tạo giá trị và khiến khách hàng trả tiền?", output: "Product Blueprint", gate: "G4 · Product Clarity", status: "ready" },
  { slug: "module-05", number: "05", title: "Build", question: "Làm sao tạo được ứng dụng hoạt động nhanh và tiết kiệm?", output: "Working Mobile App", gate: "G5 · Product Readiness", status: "soon" },
  { slug: "module-06", number: "06", title: "Launch & Sell", question: "Làm sao có khách hàng trả tiền đầu tiên?", output: "Launch & First Sales Report", gate: "G6 · Payment Evidence", status: "soon" },
  { slug: "module-07", number: "07", title: "Grow & Scale", question: "Làm sao có thêm khách hàng, giữ chân họ và tăng lợi nhuận?", output: "App Growth Operating System", gate: "G7 · Growth Readiness", status: "soon" },
]

const modules: Record<string, CourseModule> = {
  "module-01": module01,
  "module-02": module02,
  "module-03": module03,
  "module-04": module04,
}

// CHỈ môi trường dev: module "fixture" chứa mọi loại khối để thử giao diện (/playbooks/ai-mobile-app/fixture).
// Điều kiện NODE_ENV được thay bằng hằng số khi build nên nhánh này bị loại khỏi bản production;
// "fixture" cũng không có trong moduleSummaries nên không vào generateStaticParams, hub hay sitemap.
if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  modules.fixture = (require("@/lib/data/course-playbook/fixture-all-blocks") as { default: CourseModule }).default
}

export function getCourseModule(slug: string): CourseModule | undefined {
  return modules[slug]
}

export function getModuleSummary(slug: string): ModuleSummary | undefined {
  return moduleSummaries.find((m) => m.slug === slug)
}

/** Danh sách slug cho generateStaticParams: cả module chưa soạn (hiện trang "Đang soạn") */
export function getAllModuleSlugs(): string[] {
  return moduleSummaries.map((m) => m.slug)
}
