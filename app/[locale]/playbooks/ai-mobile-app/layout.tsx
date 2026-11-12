import type { ReactNode } from "react"
import "./course-playbook.css"

/** Layout chung của playbook khoá học: chỉ nạp CSS (mọi selector nằm dưới `.cpb`) cho trang tổng và các trang module. */
export default function CoursePlaybookLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
