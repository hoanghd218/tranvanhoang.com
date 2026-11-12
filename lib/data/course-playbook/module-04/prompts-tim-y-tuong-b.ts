import type { AccordionItem } from "@/lib/course-playbook/types"

/**
 * Nguồn: bộ prompt mẫu "Quy trình tìm ý tưởng mobile app" của Module 04 — prompt 5 đến 8
 * và "prompt sau khi có dữ liệu thật" (nguyên văn, chỗ trống đổi sang dạng {{…}}).
 */
export const ideaPromptsB: AccordionItem[] = [
  {
    number: "5",
    title: "Kiểm chứng nhu cầu trước khi xây",
    blocks: [
      {
        type: "prompt",
        title: "Prompt 5 · Kiểm chứng nhu cầu trước khi xây",
        hint: "Đến bước kiểm chứng, mang kết quả từ người dùng thật quay lại chat bằng prompt “sau khi có dữ liệu thật” ngay bên dưới.",
        text: `Ý tưởng tôi muốn kiểm chứng: {{dán định vị và tình huống demo}}. Tôi có {{số ngày, ngân sách và kênh tuyển người}}.

Hãy lập kế hoạch thử trong {{7–14 ngày hoặc thời gian phù hợp}}. Viết 6 câu phỏng vấn về hành vi đã xảy ra, gồm lần gần nhất gặp vấn đề, cách họ xử lý, thời gian hoặc tiền đã bỏ ra và điều khiến họ bỏ công cụ cũ.

Đề xuất một thử nghiệm nhỏ dùng landing page, video demo hoặc prototype. Viết câu mở đầu, lời hứa, CTA và một hành động đủ rõ để đo mức quan tâm, ví dụ đăng ký dùng thử, gửi dữ liệu mẫu, quay lại sử dụng hoặc chọn gói có giá. Nếu đề xuất test giao dịch, ghi rõ cách thông báo tình trạng sản phẩm cho người tham gia.

Lập bảng: giả thuyết | hành vi cần quan sát | cách đo | ngưỡng tạm đặt theo cỡ mẫu | quyết định nếu đạt hoặc không đạt. Phân biệt lời khen, đăng ký, sử dụng lại và trả tiền. Cho tôi mẫu ghi kết quả để dán lại sau thử nghiệm.`,
        output:
          "Kịch bản thử nghiệm và tiêu chí quyết định. Ví dụ, cho người tập thử ghi một bữa thật, kiểm tra họ có tự quay lại ghi bữa khác và có chọn mua báo cáo tuần hay không.",
      },
      {
        type: "prompt",
        title: "Prompt sau khi có dữ liệu thật",
        when: "Bạn đã chạy thử nghiệm và có kết quả thật cùng phản hồi nguyên văn.",
        text: `Đây là tiêu chí tôi đặt trước: {{dán tiêu chí}}. Đây là kết quả thật và phản hồi nguyên văn: {{dán kết quả, số người tham gia và cách tuyển}}. Hãy đối chiếu từng giả thuyết với bằng chứng, chỉ rõ điều còn thiếu, rồi đề xuất một quyết định: tiếp tục, thu hẹp, đổi hướng hoặc dừng. Nếu cần một thử nghiệm nữa, chọn đúng một thử nghiệm có thể thay đổi quyết định.`,
      },
    ],
  },
  {
    number: "6",
    title: "Chốt MVP và luồng màn hình",
    blocks: [
      {
        type: "prompt",
        title: "Prompt 6 · Chốt MVP và luồng màn hình",
        text: `Đây là ý tưởng đã chọn: {{định vị}}. Đây là kết quả thử nghiệm hoặc giả thuyết còn mở: {{dán kết quả}}. Tôi có {{nguồn lực, thời gian}}.

Hãy thiết kế MVP quanh một hành trình chính từ lúc người dùng có nhu cầu đến lúc nhận giá trị đầu tiên. Đề xuất tính năng cần cho hành trình đó, tính năng cần để họ quay lại, và tính năng có thể để sau. Với mỗi tính năng MVP, ghi hành vi cần đo và lý do nó có mặt.

Lập bảng màn hình theo thứ tự: màn hình | người dùng đến từ đâu | việc chính cần làm | dữ liệu cần hiện | nút chính | đi đâu tiếp. Bổ sung trạng thái trống, đang xử lý, lỗi và sửa kết quả khi ảnh hưởng đến hành trình. Chỉ đưa vào đăng nhập, paywall hoặc quyền truy cập nếu luồng cần đến. Kết thúc bằng kịch bản demo 60 giây.`,
        output:
          "Danh sách màn hình, luồng chính và phạm vi MVP. Ví dụ, chụp món → xác nhận khẩu phần → lưu bữa → ghi set tập → mở báo cáo. Nếu ước tính từ ảnh, cho sửa khẩu phần. Nếu theo dõi cơ xương, hiển thị nguồn số đo và phân biệt với tiến bộ về mức tạ.",
      },
    ],
  },
  {
    number: "7",
    title: "Tạo mẫu UI để chọn hướng thiết kế",
    blocks: [
      {
        type: "prompt",
        title: "Prompt 7 · Tạo mẫu UI để chọn hướng thiết kế",
        text: `Hãy dùng {{định vị, luồng MVP và ảnh UI tham chiếu đính kèm}} để đề xuất 5 phong cách giao diện mobile khác nhau. Các yêu cầu cố định của tôi là {{ví dụ: dark mode, tiếng Việt, nhiều ảnh thật, dễ nhìn khi tập}}. Giữ cùng nội dung, dữ liệu mẫu và hai màn hình trong cả 5 phong cách để tôi so sánh. Hai màn là {{màn vào app}} và {{màn nhận giá trị đầu tiên}}.

Với mỗi phong cách, mô tả bảng màu, kiểu chữ, bố cục, cách dùng ảnh, cách trình bày số liệu, cảm giác khi sử dụng và một đánh đổi về khả năng đọc hoặc thao tác. Giải thích chi tiết nào học từ ảnh tham chiếu và cách chuyển thành thiết kế riêng.

Tạo 5 ảnh mockup, mỗi ảnh có đúng 2 màn hình đặt cạnh nhau, nhìn thẳng, chữ rõ, cùng kích thước. Sau khi đưa đủ 5 phương án, dừng để tôi chọn hoặc yêu cầu chỉnh.`,
        output:
          "Một phong cách đã chốt và ghi chú những gì muốn giữ. Ví dụ, nền đen than, xanh lime cho nút chính, ảnh món Việt, vòng tiến độ calo và chữ số lớn.",
      },
    ],
  },
  {
    number: "8",
    title: "Mở rộng bộ màn hình và đóng gói ý tưởng",
    blocks: [
      {
        type: "prompt",
        title: "Prompt 8 · Mở rộng bộ màn hình và đóng gói ý tưởng",
        text: `Tôi chọn phong cách {{tên hoặc số phương án}}. Đây là ảnh UI đã duyệt {{đính kèm}}, định vị {{dán}}, danh sách màn hình và trạng thái MVP {{dán}}.

Hãy thiết kế toàn bộ màn hình trong phạm vi đã chốt. Giữ thống nhất màu, typography, thanh điều hướng, nút và thẻ từ mẫu đã duyệt. Tạo ảnh theo từng nhóm luồng, tối đa 3 màn hình mỗi ảnh để đọc rõ. Đặt mã cho từng màn hình và ghi chú màn nào nối đến màn nào. Đối chiếu danh sách đã chốt và liệt kê màn hình hoặc trạng thái còn thiếu.

Cuối cùng, tạo bản tóm tắt một trang gồm: người dùng đầu tiên, vấn đề, lời hứa, bằng chứng đã có, giả thuyết còn mở, hành trình chính, phạm vi MVP, tiêu chí thành công, liên kết đến ảnh thiết kế và quyết định tiếp theo. Khi tôi đưa bản này sang chat mới, AI phải hiểu sản phẩm và tiếp tục công việc.`,
        output:
          "Bộ ảnh UI theo luồng và bản tóm tắt sản phẩm để chuyển sang prototype hoặc phát triển.",
      },
    ],
  },
]
