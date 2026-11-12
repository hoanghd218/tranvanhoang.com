import type { AccordionItem } from "@/lib/course-playbook/types"

/** Nguồn: bộ prompt mẫu "Quy trình tìm ý tưởng mobile app" của Module 04 — prompt 1 đến 4 (nguyên văn, chỗ trống đổi sang dạng {{…}}). */
export const ideaPromptsA: AccordionItem[] = [
  {
    number: "1",
    title: "Từ chủ đề đến danh sách vấn đề",
    blocks: [
      {
        type: "prompt",
        title: "Prompt 1 · Từ chủ đề đến danh sách vấn đề",
        when: "Bạn có một chủ đề, một nhóm người hoặc một vấn đề của chính mình.",
        hint: "Thay phần được tô màu bằng thông tin của bạn. Chưa biết thì ghi “chưa biết”.",
        text: `Hãy giúp tôi tìm ý tưởng mobile app từ bối cảnh sau.

- Chủ đề hoặc ý tưởng thô: {{ví dụ: theo dõi ăn uống, cân nặng và tăng cơ}}
- Thị trường, ngôn ngữ: {{ví dụ: Việt Nam, tiếng Việt}}
- Người tôi dễ tiếp cận: {{ví dụ: người tập gym, PT, dân văn phòng}}
- Nguồn lực hoặc thời gian tôi có: {{ví dụ: 2 tuần làm demo}}
- Điều tôi từng gặp hoặc quan sát: {{mô tả tình huống thực tế nếu có}}

Đề xuất 5 vấn đề cụ thể. Với mỗi vấn đề, nêu nhóm người gặp vấn đề, khoảnh khắc nó xảy ra, họ đang xử lý bằng cách gì, điều gây mất thời gian hoặc khó chịu, và hành vi nào có thể cho thấy họ sẵn sàng thử hoặc trả tiền.

Viết mỗi vấn đề dưới dạng “Khi {{tình huống}}, {{nhóm người}} muốn {{kết quả}}, nhưng {{trở ngại}}”. Đánh dấu rõ phần nào do tôi cung cấp và phần nào là giả thuyết. Chọn 2 vấn đề đáng khảo sát trước dựa trên tần suất, mức độ bức thiết và khả năng tôi tiếp cận người dùng. Nêu điều có thể khiến lựa chọn của bạn thay đổi.`,
        output:
          "Hai câu mô tả vấn đề và nhóm người cụ thể. Ví dụ, người tập gym ăn ngoài muốn biết mình đã ăn đủ protein nhưng mất công quy đổi khẩu phần món Việt.",
      },
    ],
  },
  {
    number: "2",
    title: "Tìm app mẫu và kiểm tra tín hiệu thị trường",
    blocks: [
      {
        type: "prompt",
        title: "Prompt 2 · Tìm app mẫu và kiểm tra tín hiệu thị trường",
        when: "Bạn đã chọn một hoặc hai vấn đề và muốn biết người khác đã giải chúng ra sao.",
        hint: "Đến bước nghiên cứu này, bật tìm kiếm web và gửi link hoặc ảnh màn hình bạn có.",
        text: `Hãy tìm kiếm web để nghiên cứu mobile app giải quyết vấn đề {{dán vấn đề đã chọn}} cho {{nhóm người}} tại {{thị trường}}. App hoặc link tôi đã có: {{dán tên, App Store, Google Play, Paywall Screens hoặc nguồn khác}}.

Tìm khoảng 8–12 app, gồm đối thủ trực tiếp, app giải một phần vấn đề rất tốt và đối thủ trong thị trường mục tiêu. Với từng app, lập bảng: nhóm người dùng, công việc chính app giải quyết, tính năng nổi bật, cách kiếm tiền nếu xác minh được, tín hiệu sức hút, link và thời điểm của bằng chứng.

Ưu tiên nguồn chính thức như App Store, Google Play, website hãng. Ghi rõ lượt tải, lượt đánh giá, thứ hạng và doanh thu là các loại tín hiệu riêng. Gắn nhãn ước tính khi cần. Nếu không xác minh được, ghi “chưa xác minh”. Nếu link Paywall Screens lọc nhầm danh mục, tìm danh mục phù hợp. Nếu bạn không truy cập được nguồn, ghi rõ và cho tôi từ khóa để tự kiểm tra.

Chọn 3–5 app đáng nghiên cứu sâu. Với mỗi app, nêu đúng một luồng mà tôi nên tự thử hoặc tìm ảnh để phân tích.`,
        output:
          "Danh sách app kèm nguồn và luồng cần xem. Ví dụ, thử ghi bằng ảnh ở Cal AI, ghi buổi tập ở Hevy, xem xu hướng ở MacroFactor, rồi thử ghi món Việt ở Eatsy.",
      },
    ],
  },
  {
    number: "3",
    title: "Học cơ chế từ app mẫu và áp dụng vào ý tưởng của mình",
    blocks: [
      {
        type: "prompt",
        title: "Prompt 3 · Học cơ chế từ app mẫu và áp dụng vào ý tưởng của mình",
        when: "Bạn đã có ảnh chụp, video trải nghiệm, link hoặc ghi chú khi tự thử app. Chụp theo chuỗi màn hình sẽ hữu ích hơn một ảnh rời.",
        text: `Hãy phân tích những app mẫu và tư liệu tôi gửi. Vấn đề của app tôi là {{dán câu mô tả vấn đề}}. Người dùng là {{nhóm người}}. Tôi muốn học cách họ giải quyết vấn đề và áp dụng vào bối cảnh của mình.

Với mỗi app, hãy dựng lại luồng quan sát được: người dùng bắt đầu ở đâu, làm gì, lúc nào nhận giá trị đầu tiên, điểm nào gây mất công, lý do để quay lại, paywall xuất hiện khi nào nếu quan sát được.

Lập bảng với các cột: App và màn hình | Chi tiết quan sát được | Nhu cầu nó giải quyết | Cách điều chỉnh cho app tôi | Cách kiểm tra. Phân biệt thứ bạn thấy trong tư liệu với giả thuyết về lý do thiết kế. Nếu ảnh không đủ để biết luồng hoặc thời điểm thu phí, chỉ rõ ảnh nào cần bổ sung.

Cuối cùng, chọn 3 cơ chế đáng học nhất. Mô tả cách kết hợp chúng thành một trải nghiệm riêng, dùng nội dung, hình ảnh và nhận diện của sản phẩm tôi.`,
        output:
          "Ba cơ chế kèm cách áp dụng. Ví dụ, học thao tác chụp món từ app A, nhập set từ app B và xem xu hướng từ app C. Thử kết hợp thành luồng ghi bữa cơm Việt → ghi buổi tập → xem báo cáo ăn, tập và số đo.",
      },
    ],
  },
  {
    number: "4",
    title: "Chọn phân khúc và định vị app",
    blocks: [
      {
        type: "prompt",
        title: "Prompt 4 · Chọn phân khúc và định vị app",
        text: `Dựa trên {{dán hai vấn đề, kết quả nghiên cứu và ba cơ chế đã chọn}}, đề xuất 3 hướng sản phẩm cho {{thị trường}}. Mỗi hướng cần có nhóm khách hàng đầu tiên, tình huống sử dụng, kết quả họ muốn, lựa chọn hiện tại, điểm khác biệt có thể trình diễn và lý do họ có thể trả tiền.

Chấm từng hướng từ 1–5 về tần suất, mức độ bức thiết, khả năng tiếp cận người dùng, tín hiệu chi trả, độ khác biệt và khả năng làm demo trong {{thời gian}}. Với mỗi điểm quan trọng, nêu bằng chứng hoặc giả thuyết làm căn cứ. Đề xuất một hướng ưu tiên và nêu giả thuyết cần kiểm chứng trước.

Viết định vị thành một câu: “App giúp {{ai}} đạt {{kết quả cụ thể}} khi {{tình huống}}, bằng {{cơ chế dễ trình diễn}}.” Sau đó viết một ví dụ dùng app trong đời thực, từ lúc nhu cầu xuất hiện đến lúc người dùng nhận kết quả.`,
        output:
          "Một phân khúc, một lời hứa, một tình huống demo. Ví dụ, người Việt tập gym đều muốn biết ăn và tập đang hỗ trợ mục tiêu tăng cơ ra sao, qua một báo cáo kết nối món đã ăn, mức tạ và số đo.",
      },
    ],
  },
]
