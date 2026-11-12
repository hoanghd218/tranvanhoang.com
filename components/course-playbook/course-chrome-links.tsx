import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { localizedPath } from "@/lib/editorial-content"

/**
 * Hai mẩu "vỏ trang" song ngữ nằm trong vùng nội dung tiếng Việt (.cpb có lang="vi"):
 * liên kết về /playbooks và ghi chú ngôn ngữ cho bản English. Mỗi mẩu tự đặt lang riêng.
 */

export function BackToPlaybooks({ locale }: { locale: string }) {
  const en = locale === "en"
  return (
    <Link className="cpb-back" href={localizedPath("/playbooks", locale)} lang={en ? "en" : undefined}>
      <ArrowLeft size={18} aria-hidden="true" />{en ? "Books & Playbooks" : "Sách & Playbook"}
    </Link>
  )
}

/** Chỉ hiện ở bản English: nội dung khoá học vẫn là tiếng Việt. */
export function LanguageNote({ locale }: { locale: string }) {
  if (locale !== "en") return null
  return <p className="cpb-lang-note" lang="en">Course content is in Vietnamese.</p>
}
