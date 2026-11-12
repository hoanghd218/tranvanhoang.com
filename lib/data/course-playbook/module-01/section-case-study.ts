import type { Section } from "@/lib/course-playbook/types"
import { figures } from "./figures"

/**
 * Nguồn: giáo trình Module 01, Phần IV — WHAT IF, bài 4.1 (Case Study Comparison).
 * Cách đọc một case (chuỗi WHO → ... → LESSON) lấy từ bản giáo trình cũ, vì bản hiện hành không có.
 */
export const section: Section = {
  id: "case-study",
  kicker: "WHAT IF · Bài 4.1",
  title: "Năm founder thật, năm cách chọn thị trường",
  highlight: "năm cách chọn thị trường",
  tocLabel: "5 case study",
  lead: "Học cách họ nghĩ, không chỉ nhìn con số doanh thu. Phần này không chỉ kiểm tra bạn có nhớ định nghĩa: bạn phải vận dụng framework, phân tích cách founder thực tế chọn thị trường và bảo vệ quyết định của mình.",
  blocks: [
    {
      type: "callout",
      label: "Lưu ý về số liệu",
      paragraphs: [
        "Các con số doanh thu trong những case study là thông tin do founder công bố, không phải kết quả được bảo đảm cho học viên. Chưa kiểm chứng độc lập.",
      ],
    },
    { type: "figure", figure: figures.nam5Founder },
    {
      type: "table",
      head: ["Case study", "Điểm xuất phát", "Lợi thế chính", "Bài học"],
      rows: [
        ["**3AK**", "Vận động viên điền kinh", "Chuyên môn, sở thích, cộng đồng", "Founder–Market Fit"],
        ["**Voicy**", "Vấn đề của người thân", "Hiểu pain point (điểm đau)", "PROBLEM Before SOLUTION"],
        ["**Cal Buddy**", "Ứng dụng thành công ở thị trường khác", "Bản địa hoá", "DEMAND Before INNOVATION"],
        ["**LaunchFast**", "Kinh nghiệm vận hành Amazon", "Domain knowledge (kiến thức ngành) + Partnership (đối tác)", "DISTRIBUTION Before DEVELOPMENT"],
        ["**Hero Analytics**", "Kinh nghiệm ngành agency", "Chọn đúng nhóm buyer", "NICHE Before MASS MARKET"],
      ],
    },
    {
      type: "callout",
      label: "Cách đọc một case",
      paragraphs: [
        "Đi theo cùng một chuỗi: **WHO → PROBLEM → DEMAND → PAYMENT → DISTRIBUTION → FOUNDER ADVANTAGE → LESSON.** Nhờ vậy bạn học phương pháp phân tích, không chỉ bị thu hút bởi số doanh thu founder công bố.",
      ],
    },
    {
      type: "case",
      case: {
        title: "Case 1 — 3AK",
        tag: "Founder–Market Fit",
        columns: [
          { label: "Bối cảnh", text: "Hai founder hiểu thị trường điền kinh vì chính họ là vận động viên và đã có sự hiện diện trong cộng đồng." },
          { label: "Yếu tố nổi bật", text: "Expertise, Passion, Distribution." },
        ],
        source: "Nguồn: video “How We Built This $20K/Month AI App” (Starter Story). Founder tự kể; số doanh thu tự công bố, chưa kiểm chứng độc lập.",
      },
    },
    {
      type: "callout",
      label: "Câu hỏi phản biện",
      paragraphs: [
        "Nếu không có audience nhưng vẫn có kiến thức điền kinh, founder có nên chọn thị trường này không? Nếu có, cần xây lợi thế phân phối bằng cách nào?",
      ],
    },
    {
      type: "case",
      case: {
        title: "Case 2 — Voicy",
        tag: "PROBLEM Before SOLUTION",
        columns: [
          {
            label: "Bối cảnh",
            text: "Voicy bắt đầu từ nhu cầu giúp người thân nhập liệu bằng giọng nói dễ dàng hơn. Sau đó founder nhận ra giá trị đặc biệt với một số nhóm người gặp khó khăn khi dùng bàn phím.",
          },
          { label: "Yếu tố nổi bật", text: "Customer Pain, Demand, Customer Segmentation." },
        ],
        source: "Nguồn: video “I built this app for my dad. Now it makes $18K/month” (Starter Story). Founder tự kể; số doanh thu tự công bố, chưa kiểm chứng độc lập.",
      },
    },
    {
      type: "callout",
      label: "Câu hỏi phản biện",
      paragraphs: ["Nhóm khách hàng nào có thể đánh giá sản phẩm này là Painkiller thay vì Vitamin?"],
    },
    {
      type: "case",
      case: {
        title: "Case 3 — Cal Buddy",
        tag: "DEMAND Before INNOVATION",
        columns: [
          {
            label: "Bối cảnh",
            text: "Founder nhận thấy mô hình theo dõi calo bằng AI đã có thị trường. Anh phát triển phiên bản phù hợp hơn với người dùng tại Israel.",
          },
          { label: "Yếu tố nổi bật", text: "Proven Demand, Localization (bản địa hoá), Market Selection." },
        ],
        source: "Nguồn: video “I Copied A Huge App. Now I Make $80K/Month” (Starter Story). Founder tự kể; số doanh thu tự công bố, chưa kiểm chứng độc lập.",
      },
    },
    {
      type: "callout",
      label: "Câu hỏi phản biện",
      paragraphs: ["Khi chọn một thị trường địa phương nhỏ hơn, cần đánh giá thêm điều gì về quy mô, cạnh tranh và chi phí tiếp cận?"],
    },
    {
      type: "case",
      case: {
        title: "Case 4 — LaunchFast",
        tag: "DISTRIBUTION Before DEVELOPMENT",
        columns: [
          {
            label: "Bối cảnh",
            text: "Hassam hiểu rõ các vấn đề của Amazon sellers (người bán hàng trên Amazon) nhờ kinh nghiệm thực tế. Thay vì tự xây audience từ đầu, anh tìm một đối tác có sẵn tệp khách hàng phù hợp.",
          },
          { label: "Yếu tố nổi bật", text: "Expertise, Demand, Distribution Partnership." },
        ],
        source: "Tài liệu khoá học chưa ghi nguồn video cho case này. Xem như thông tin founder tự kể, chưa kiểm chứng độc lập.",
      },
    },
    {
      type: "callout",
      label: "Câu hỏi phản biện",
      paragraphs: ["Nếu không tìm được đối tác phù hợp, founder còn những cách nào để tiếp cận nhóm Amazon sellers?"],
    },
    {
      type: "case",
      case: {
        title: "Case 5 — Hero Analytics",
        tag: "NICHE Before MASS MARKET",
        columns: [
          {
            label: "Bối cảnh",
            text: "Hero Analytics tập trung vào các agency email và SMS marketing, thay vì xây sản phẩm analytics (phân tích số liệu) cho tất cả doanh nghiệp.",
          },
          { label: "Yếu tố nổi bật", text: "Niche Selection, Buyer Understanding, Distribution." },
        ],
        source: "Nguồn: video “I Built A $1M SaaS In A Hidden Niche” (Starter Story). Founder tự kể; số doanh thu tự công bố, chưa kiểm chứng độc lập.",
      },
    },
    {
      type: "callout",
      label: "Câu hỏi phản biện",
      paragraphs: ["Tại sao một agency có nhiều khách hàng có thể là nhóm buyer hấp dẫn hơn việc bán riêng lẻ cho từng thương hiệu?"],
    },
    {
      type: "callout",
      label: "Bài học rút ra",
      paragraphs: [
        "Năm case không đi theo một con đường giống hệt nhau. Nhưng tất cả đều cho thấy tầm quan trọng của việc xác định khách hàng, hiểu nhu cầu và có lợi thế cụ thể khi tiếp cận thị trường.",
      ],
    },
  ],
}
