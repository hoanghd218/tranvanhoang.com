import reaPages from "@/lib/data/playbooks/rea.json"
import type { ImageBookPage } from "@/components/image-book/image-book-viewer"

const reaTitles = ["Bìa — Quy trình REA", "Cách dùng và phân vai", "Chuẩn bị công cụ", "Chọn app và khoanh phạm vi", "Thu thập bằng chứng", "Phân biệt biết và chưa biết", "Xây bản nhỏ chạy được", "Chạy thử bằng thao tác thật", "Ví dụ xuyên suốt", "Kiểm tra đầu ra và đi tiếp"]
export type Playbook = { slug: string; title: string; description: string; pages: ImageBookPage[] }
export const playbooks: Playbook[] = [{
  slug: "rea",
  title: "Quy trình REA",
  description: "Từ app mẫu đến bản chạy được — sổ tay thực hành 6 bước, 10 trang.",
  pages: reaPages.map((page, index) => ({ ...page, alt: reaTitles[index] })),
}]
export function getPlaybook(slug: string) { return playbooks.find(book => book.slug === slug) }
