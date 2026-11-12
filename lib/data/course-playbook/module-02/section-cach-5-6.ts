import type { Section } from "@/lib/course-playbook/types"
import { figureBlock } from "./helpers"
import { blocks as method05 } from "./method-05"
import { blocks as method06 } from "./method-06"

/**
 * Giáo trình Module 02 — 04 Opportunity Discovery Framework · METHOD 05 và METHOD 06
 * (Emerging Trend Discovery · Hidden & Underserved Niche) kèm 5 case: Pep AI, Postiz, 3AK, Hero Analytics, Savvy Nomad.
 */
export const section: Section = {
  id: "cach-5-6",
  kicker: "WHAT · 04 Method 05–06",
  title: "Cách 5 & 6: bắt xu hướng mới · tìm ngách bị bỏ quên",
  highlight: "Cách 5 & 6",
  tocLabel: "Cách 5 & 6",
  lead: "Thời điểm đúng và nhóm khách đúng — hai nơi cơ hội hay ẩn mình.",
  blocks: [
    figureBlock(
      "cach-5-6-xu-huong-moi-ngach-bi-bo-quen",
      "Infographic Cách 5 và Cách 6: bắt xu hướng mới với bốn loại xu hướng (Pep AI, Postiz) và ngách bị bỏ quên với năm dấu hiệu (3AK, Hero Analytics, Savvy Nomad), kèm các bước áp dụng, bài thực hành, lợi thế và rủi ro.",
      "Hình 15 · Cách 5 & 6 — xu hướng mới và ngách bị bỏ quên.",
    ),
    ...method05,
    ...method06,
  ],
}
