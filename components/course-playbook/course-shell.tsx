import type { ReactNode } from "react"
import { RoboShell } from "@/components/editorial/robo-shell"

/**
 * Vỏ chung của mọi trang playbook khoá học: header/footer của site (RoboShell, giống /playbooks)
 * bọc quanh vùng nội dung `.cpb` — nền sáng riêng, chữ Be Vietnam Pro, lang="vi" vì nội dung khoá học bằng tiếng Việt.
 * Header nổi của site nằm trên hero tối của module; chân trang site nằm ngay dưới thanh chuyển module.
 */
export function CourseShell({ locale, children }: { locale: string; children: ReactNode }) {
  return (
    <RoboShell locale={locale}>
      <div className="cpb" lang="vi">{children}</div>
    </RoboShell>
  )
}
