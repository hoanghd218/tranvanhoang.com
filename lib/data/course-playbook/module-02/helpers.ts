import type { Block } from "@/lib/course-playbook/types"

/** Thư mục ảnh công khai của Module 02 */
export const IMG = "/images/course-playbook/module-02"

/** Câu cảnh báo số liệu dùng chung cho mọi case có số của bên thứ ba */
export const UNVERIFIED =
  "Số liệu do founder tự công bố tại thời điểm phỏng vấn, chưa kiểm chứng độc lập, không đại diện cho kết quả thông thường của người làm app."

/** Khối hình infographic 1536×1024 (WebP) của Module 02 */
export function figureBlock(slug: string, alt: string, caption: string): Block {
  return {
    type: "figure",
    figure: { src: `${IMG}/${slug}.webp`, width: 1536, height: 1024, alt, caption },
  }
}
