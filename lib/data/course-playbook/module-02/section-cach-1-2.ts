import type { Section } from "@/lib/course-playbook/types"
import { figureBlock } from "./helpers"
import { blocks as method01 } from "./method-01"
import { blocks as method02 } from "./method-02"

/**
 * Giáo trình Module 02 — 04 Opportunity Discovery Framework · METHOD 01 và METHOD 02
 * (Solve Your Own Problem · Proven App Reverse Engineering) kèm 4 case: BulkMockup, Voicy, Prayer Lock, Shipper.
 */
export const section: Section = {
  id: "cach-1-2",
  kicker: "WHAT · 04 Method 01–02",
  title: "Cách 1 & 2: vấn đề của chính mình · app đã có người mua",
  highlight: "Cách 1 & 2",
  tocLabel: "Cách 1 & 2",
  lead: "Bắt đầu từ nỗi khó bạn hiểu rõ, hoặc từ thị trường đã chứng minh có người trả tiền.",
  blocks: [
    figureBlock(
      "cach-1-2-van-de-cua-minh-app-co-nguoi-mua",
      "Infographic Cách 1 và Cách 2: giải vấn đề của chính mình (BulkMockup, Voicy) và mổ xẻ app đã có người mua (Prayer Lock, Shipper), kèm các bước áp dụng, bài thực hành, lợi thế và rủi ro; doanh thu là số founder tự công bố.",
      "Hình 5 · Cách 1 & 2 — vấn đề của chính mình và app đã có người mua.",
    ),
    ...method01,
    ...method02,
  ],
}
