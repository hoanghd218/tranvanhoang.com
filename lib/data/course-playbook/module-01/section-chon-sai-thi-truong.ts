import type { Section } from "@/lib/course-playbook/types"

/** Nguồn: giáo trình Module 01, Phần I — WHY, bài 1.3 (hậu quả chọn sai), 1.4 (vì sao thị trường đúng quan trọng), 1.5 (case mở đầu 3AK). */
export const section: Section = {
  id: "chon-sai-thi-truong",
  kicker: "WHY · Bài 1.3–1.5",
  title: "Chọn sai thị trường thì mất gì, chọn đúng thì được gì",
  highlight: "Chọn sai thị trường",
  tocLabel: "Chọn sai, chọn đúng thị trường",
  lead: "Có sáu rủi ro phổ biến khi chọn sai thị trường, và bảy lợi thế khi chọn đúng. Case mở đầu 3AK cho thấy một thị trường tốt có thể nằm rất gần bạn.",
  blocks: [
    { type: "subheading", text: "Sáu rủi ro phổ biến" },
    {
      type: "cards",
      columns: 3,
      items: [
        {
          title: "1 · No Real Demand — không có nhu cầu đủ mạnh",
          text: "Ứng dụng có thể giải quyết một vấn đề ít người quan tâm hoặc không đáng bỏ tiền.",
        },
        {
          title: "2 · Wrong Customer — chọn sai nhóm khách hàng",
          text: "Sản phẩm có thể hữu ích với nhóm khác nhưng lại được quảng bá đến những người không cần.",
        },
        {
          title: "3 · Weak Payment — thiếu động lực thanh toán",
          text: "Người dùng có thể yêu thích một sản phẩm miễn phí nhưng không muốn mua phiên bản trả phí.",
        },
        {
          title: "4 · No Distribution — không có con đường tiếp cận",
          text: "Founder không biết tìm khách hàng ở đâu, hoặc chi phí tiếp cận quá cao so với giá trị khách hàng.",
        },
        {
          title: "5 · Overcrowded Positioning — không có điểm đứng rõ ràng",
          text: "Thị trường có nhiều đối thủ mạnh, trong khi founder chưa xác định được nhóm khách hàng hoặc lợi thế khác biệt.",
        },
        {
          title: "6 · Poor Founder Fit — thiếu lợi thế hoặc động lực",
          text: "Founder không hiểu đủ sâu ngành nghề, không có nguồn lực bổ sung kiến thức hoặc khó duy trì sự tập trung.",
        },
      ],
    },
    {
      type: "callout",
      label: "Không phải lý do để bỏ ngay",
      paragraphs: ["Những rủi ro này không phải lý do để loại bỏ ngay một thị trường. Chúng là các vấn đề cần được nghiên cứu và đánh giá."],
    },
    { type: "subheading", text: "Chọn đúng thị trường mang lại gì" },
    {
      type: "table",
      head: ["Lợi thế", "Ý nghĩa"],
      rows: [
        ["Customer Clarity (rõ khách hàng)", "Hiểu rõ người cần phục vụ"],
        ["Problem Clarity (rõ vấn đề)", "Nhận biết nhu cầu có giá trị"],
        ["Better Positioning (định vị tốt hơn)", "Dễ tạo thông điệp đúng đối tượng"],
        ["Focused Product (sản phẩm tập trung)", "Giảm các tính năng không cần thiết"],
        ["Accessible Distribution (phân phối có đường đi)", "Có kế hoạch tìm khách hàng rõ ràng"],
        ["Better Resource Allocation (phân bổ nguồn lực tốt hơn)", "Đầu tư thời gian và ngân sách có cơ sở"],
        ["Compounding Expertise (chuyên môn tích luỹ)", "Hiểu thị trường sâu hơn sau mỗi lần tương tác"],
      ],
    },
    {
      type: "output",
      label: "Chuỗi lợi ích",
      text: "**Right Market → Better Customer Understanding → Better Product Decisions → More Relevant Distribution.** Đúng thị trường, hiểu khách tốt hơn, quyết định sản phẩm tốt hơn, phân phối sát hơn.",
    },
    {
      type: "case",
      case: {
        title: "3AK — hai founder là vận động viên điền kinh",
        tag: "Case mở đầu · Founder–Market Fit",
        columns: [
          { label: "Bối cảnh", text: "Hai founder là vận động viên điền kinh." },
          {
            label: "Lợi thế",
            text: "Hiểu môn thể thao mình tham gia, nhận ra nhu cầu của nhóm vận động viên và đã xây dựng sức ảnh hưởng trong cộng đồng này.",
          },
          {
            label: "Điều đáng chú ý",
            text: "Sản phẩm không bắt đầu từ một thị trường hoàn toàn xa lạ. Nó được phát triển trong lĩnh vực họ có cả kinh nghiệm lẫn khả năng tiếp cận người dùng.",
          },
        ],
        source:
          "Nguồn: video “How We Built This $20K/Month AI App” của kênh Starter Story. Founder tự kể; mọi con số doanh thu (kể cả con số trong tiêu đề video) là tự công bố, chưa kiểm chứng độc lập, không phải kết quả bảo đảm cho bạn.",
      },
    },
    {
      type: "callout",
      label: "Câu hỏi cho bạn",
      paragraphs: ["Thị trường tiềm năng của bạn có thể nằm ngay trong những công việc, cộng đồng hoặc hoạt động mà bạn đang hiểu rõ hay không?"],
    },
    {
      type: "output",
      label: "Chuyển tư duy sau phần WHY",
      text: "Từ “Tôi xây app gì?” sang “**Tôi muốn phục vụ ai và tại sao?**”",
    },
  ],
}
