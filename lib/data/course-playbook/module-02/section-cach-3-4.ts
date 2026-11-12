import type { Section } from "@/lib/course-playbook/types"
import { figureBlock } from "./helpers"
import { blocks as method03 } from "./method-03"
import { blocks as method04 } from "./method-04"

/**
 * Giáo trình Module 02 — 04 Opportunity Discovery Framework · METHOD 03 và METHOD 04
 * (Localization & Verticalization · Community Pain Mining) kèm 4 case: Cal Buddy, Symmetry, Algrow, Elephas.
 */
export const section: Section = {
  id: "cach-3-4",
  kicker: "WHAT · 04 Method 03–04",
  title: "Cách 3 & 4: bản địa hoá · nghe nỗi đau của cộng đồng",
  highlight: "Cách 3 & 4",
  tocLabel: "Cách 3 & 4",
  lead: "Mang mô hình đã có nhu cầu tới đúng nơi, và tìm những vấn đề khách hàng đã tự nói ra.",
  blocks: [
    figureBlock(
      "cach-3-4-ban-dia-hoa-noi-dau-cong-dong",
      "Infographic Cách 3 và Cách 4: bản địa hoá và chuyên biệt hoá (Cal Buddy, Symmetry) và đào nỗi đau cộng đồng với năm tín hiệu (Algrow, Elephas), kèm các bước áp dụng, bài thực hành, lợi thế và rủi ro.",
      "Hình 10 · Cách 3 & 4 — bản địa hoá và nỗi đau cộng đồng.",
    ),
    ...method03,
    ...method04,
  ],
}
