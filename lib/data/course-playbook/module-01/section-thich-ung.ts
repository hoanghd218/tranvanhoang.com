import type { Section } from "@/lib/course-playbook/types"

/** Nguồn: giáo trình Module 01, Phần IV — WHAT IF, bài 4.2 (Market Adaptation Challenge — ba tình huống A, B, C). */
export const section: Section = {
  id: "thich-ung",
  kicker: "WHAT IF · Bài 4.2",
  title: "Thử thách thích ứng: ba tình huống, ba điểm xuất phát",
  highlight: "ba tình huống",
  tocLabel: "Thử thách thích ứng",
  lead: "Bạn nhận ba tình huống và áp dụng Market Fit Framework vào từng tình huống. Mục tiêu: hiểu rằng không có một điểm xuất phát đúng cho tất cả founder.",
  blocks: [
    {
      type: "callout",
      label: "Mục tiêu",
      paragraphs: ["Dùng framework linh hoạt nhưng vẫn dựa trên bằng chứng. Dải bài tập ở cuối Hình 15 gợi ý hướng đi cho từng tình huống."],
    },
    {
      type: "accordion",
      expandFirst: true,
      items: [
        {
          number: "A",
          title: "Có chuyên môn nhưng không có audience",
          gloss: "Hướng đi gợi ý: Founder-first (đi từ chính mình)",
          blocks: [
            {
              type: "paragraph",
              text: "Một người có nhiều năm kinh nghiệm làm huấn luyện viên gym, hiểu rõ người tập nhưng chưa có kênh social hoặc cộng đồng riêng.",
            },
            {
              type: "worksheet",
              id: "tinh-huong-a",
              title: "Nhiệm vụ · Tình huống A",
              fields: [
                "Xác định Founder Fit của người này.",
                "Chọn một niche phù hợp.",
                "Đề xuất các kênh có thể tiếp cận khách hàng.",
                "Chỉ ra những giả thuyết cần kiểm chứng.",
              ],
            },
          ],
        },
        {
          number: "B",
          title: "Có audience nhưng chưa biết bán gì",
          gloss: "Hướng đi: Distribution-first (đi từ khán giả)",
          blocks: [
            {
              type: "paragraph",
              text: "Một creator có cộng đồng lớn quan tâm đến học tiếng Anh, nhưng chưa rõ nhóm người theo dõi có những vấn đề nào đáng trả tiền.",
            },
            {
              type: "worksheet",
              id: "tinh-huong-b",
              title: "Nhiệm vụ · Tình huống B",
              fields: [
                "Phân nhóm audience.",
                "Nghiên cứu nhu cầu và hành vi mua của từng nhóm.",
                "Lựa chọn một micro-niche phù hợp.",
              ],
            },
          ],
        },
        {
          number: "C",
          title: "Thấy một app thành công ở nước ngoài",
          gloss: "Hướng đi: Market-first (đi từ nhu cầu có sẵn)",
          blocks: [
            {
              type: "paragraph",
              text: "Một founder tìm thấy ứng dụng được nhiều người sử dụng tại Mỹ, nhưng thị trường Việt Nam chưa có sản phẩm phù hợp bằng tiếng Việt.",
            },
            {
              type: "worksheet",
              id: "tinh-huong-c",
              title: "Nhiệm vụ · Tình huống C",
              fields: [
                "Phân tích nhu cầu tại Việt Nam.",
                "Đánh giá khả năng chi trả.",
                "Nghiên cứu đối thủ địa phương.",
                "Đề xuất một kênh phân phối ban đầu.",
              ],
            },
          ],
        },
      ],
    },
  ],
}
