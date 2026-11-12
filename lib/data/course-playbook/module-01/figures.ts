import type { Figure } from "@/lib/course-playbook/types"

/**
 * 16 infographic của Module 01. Số "Hình N" đánh theo thứ tự xuất hiện trên trang.
 * File ảnh: public/images/course-playbook/module-01/*.webp
 */
const dir = "/images/course-playbook/module-01/"

export const figures = {
  bia: {
    src: dir + "bia-chon-dung-khach-hang-truoc.webp",
    width: 1536,
    height: 864,
    alt: "Infographic bìa Module 01 với tiêu đề “Chọn đúng khách hàng trước, rồi mới xây app” và hành trình năm bước: Hiểu mình, Tìm thị trường (khoảng 10 thị trường), Thu hẹp khách hàng, Kiểm tra bằng chứng, Chốt thị trường (Market Fit Report). Dòng cuối nhắc module này chưa làm ý tưởng app, tính năng, giao diện và lập trình.",
    caption: "Hình 1 · Bản đồ Module 01: năm bước từ hiểu mình đến chốt thị trường.",
  },
  dungBatDau: {
    src: dir + "dung-bat-dau-tu-y-tuong-app.webp",
    width: 1254,
    height: 1254,
    alt: "Infographic “Đừng bắt đầu từ ý tưởng app. Hãy bắt đầu từ người sẽ trả tiền”: khách hàng là cơ hội, app là giải pháp, kênh tiếp cận là cây cầu; so sánh Founder A làm app trước với Founder B tìm khách trước; sáu rủi ro khi chọn sai thị trường.",
    caption: "Hình 2 · Thị trường, app và kênh tiếp cận; hai founder; sáu rủi ro khi chọn sai.",
  },
  thuHep: {
    src: dir + "thu-hep-nhom-khach-hang.webp",
    width: 1024,
    height: 1536,
    alt: "Infographic thu hẹp từ ngành rộng đến đúng một nhóm khách: năm cấp Market, Niche, Micro-niche, ICP, bức tranh vấn đề (ví dụ Giáo dục, Học tiếng Anh, Tiếng Anh cho dân IT), thẻ “Người dùng khác người trả tiền” và bảy cách chia nhóm khách.",
    caption: "Hình 3 · Từ thị trường rộng đến một nhóm khách: năm cấp, người dùng khác người trả tiền, bảy cách chia nhóm.",
  },
  baNguyenTac: {
    src: dir + "7-nguyen-tac-lam-truoc-lam-sau.webp",
    width: 1024,
    height: 1536,
    alt: "Infographic bảy nguyên tắc BEFORE: WHO before WHAT, PROBLEM before SOLUTION, DEMAND before INNOVATION, PAYMENT before POPULARITY, DISTRIBUTION before DEVELOPMENT, NICHE before MASS MARKET, EVIDENCE before COMMITMENT. Mỗi nguyên tắc có câu hỏi, cách sai và cách đúng; hai nguyên tắc đầu dẫn dắt chuỗi Khách hàng, Vấn đề, Giá trị, Cơ hội.",
    caption: "Hình 4 · Bảy nguyên tắc BEFORE: việc nào làm trước, việc nào để sau.",
  },
  namYeuTo: {
    src: dir + "5-yeu-to-chon-thi-truong.webp",
    width: 1536,
    height: 864,
    alt: "Infographic 5-Factor Market Fit: Lợi thế của bạn (Chuyên môn, Đam mê) giao với Thị trường trả được tiền (Nhu cầu, Khả năng trả tiền, Kênh tiếp cận) tạo ra Thị trường đáng kiểm chứng, kèm ví dụ minh hoạ và ba bộ lọc kiểm tra thêm.",
    caption: "Hình 5 · 5-Factor Market Fit: lợi thế của bạn gặp thị trường trả được tiền.",
  },
  baCach: {
    src: dir + "3-cach-tim-thi-truong.webp",
    width: 1254,
    height: 1254,
    alt: "Infographic ba cách tìm thị trường: A đi từ chính mình (Founder-first, ví dụ CardStock), B đi từ nhu cầu có sẵn (Market-first, ví dụ Cal Buddy), C đi từ khán giả hoặc đối tác (Distribution-first, ví dụ Hero Analytics). Đi cách nào cũng phải qua bài kiểm tra 5 yếu tố.",
    caption: "Hình 6 · Ba cách bắt đầu: từ chính mình, từ nhu cầu có sẵn, từ khán giả hoặc đối tác.",
  },
  noiDau: {
    src: dir + "khach-co-dau-du-tra-tien.webp",
    width: 1254,
    height: 1254,
    alt: "Infographic “Khách có đau đủ để trả tiền không?”: sáu loại nỗi đau (Time, Money, Productivity, Emotional, Convenience, Outcome), so sánh Vitamin với Painkiller và ví dụ Voicy: người gõ phím bình thường thấy Vitamin, người khó gõ phím thấy Painkiller.",
    caption: "Hình 7 · Sáu loại nỗi đau, và khác biệt giữa Vitamin với Painkiller.",
  },
  kinhTe: {
    src: dir + "thi-truong-co-ra-tien-khong.webp",
    width: 1536,
    height: 864,
    alt: "Infographic kinh tế thị trường: bảy câu hỏi về tiền (quy mô, mức chi tiêu, tần suất, độ nhạy giá, khả năng quay lại, cách thu tiền, chi phí có khách) và ba vòng TAM, SAM, SOM; nhắc người mới không cần tính TAM thật to.",
    caption: "Hình 8 · Bảy câu hỏi về tiền và ba vòng TAM, SAM, SOM.",
  },
  kenh: {
    src: dir + "7-kenh-tiep-can.webp",
    width: 1536,
    height: 864,
    alt: "Infographic bảy kênh tiếp cận khách hàng: video ngắn, tìm kiếm, cộng đồng, người có ảnh hưởng, đối tác, quảng cáo trả tiền, khán giả sẵn có; cùng hai mức lợi thế là kênh của mình (Owned) và kênh mình chen vào được (Accessible).",
    caption: "Hình 9 · Bảy kênh tiếp cận và hai mức lợi thế phân phối.",
  },
  baBoLoc: {
    src: dir + "3-bo-loc-truoc-khi-chot.webp",
    width: 1536,
    height: 864,
    alt: "Infographic ba bộ lọc trước khi chốt thị trường: Đối thủ và khoảng trống, Quy mô và xu hướng, Khả thi và rủi ro. Mỗi bộ lọc có các câu hỏi cần trả lời và một ví dụ minh hoạ cần kiểm chứng.",
    caption: "Hình 10 · Ba bộ lọc đi sau 5 yếu tố và trước bước chấm điểm.",
  },
  bayBuoc: {
    src: dir + "7-buoc-dung-chatgpt.webp",
    width: 1536,
    height: 864,
    alt: "Infographic bảy bước dùng ChatGPT để chọn thị trường, mỗi bước ra một kết quả: Hồ sơ founder, khoảng 10 thị trường, nhóm khách và chân dung, bằng chứng, bản đồ kênh, Top 3 thị trường, Market Fit Report. Kèm ba mức bằng chứng và cảnh báo đừng để AI bịa số.",
    caption: "Hình 11 · Bảy bước, bảy kết quả; ba mức bằng chứng; phân biệt sự thật, ước tính, giả thuyết.",
  },
  congCu: {
    src: dir + "8-cong-cu-nghien-cuu.webp",
    width: 1254,
    height: 1254,
    alt: "Infographic tám công cụ nghiên cứu thị trường: App Store / Google Play, Appfigures / Sensor Tower, Google Search / Google Trends, Reddit / Discord, YouTube / TikTok, website đối thủ, báo cáo ngành, ChatGPT. Mỗi công cụ ghi rõ dùng để tìm gì.",
    caption: "Hình 12 · Bộ công cụ nghiên cứu: mỗi công cụ tìm một thứ.",
  },
  chamDiem: {
    src: dir + "cham-diem-thi-truong.webp",
    width: 1536,
    height: 864,
    alt: "Infographic Market Fit Scorecard 100 điểm: bảng tám tiêu chí với trọng số 20, 20, 20, 15, 10, 5, 5, 5; cách quy điểm bằng điểm chia 5 nhân trọng số; ba mức diễn giải 80–100, 65–79, dưới 65; và mười sai lầm hay gặp cùng cách làm đúng.",
    caption: "Hình 13 · Bảng chấm 100 điểm (ví dụ minh hoạ), ba mức diễn giải và mười sai lầm hay gặp.",
  },
  phieu10: {
    src: dir + "phieu-10-thong-tin.webp",
    width: 1024,
    height: 1536,
    alt: "Infographic phiếu 10 thông tin điền trước khi hỏi ChatGPT (Phần A của Master Prompt): chuyên môn, ngành từng làm, vấn đề từng giải quyết, sở thích, nhóm khách hiểu, lợi thế tiếp cận, quốc gia và ngôn ngữ, thời gian và ngân sách, mục tiêu, giới hạn cá nhân. Mục chưa biết có thể để trống.",
    caption: "Hình 14 · Phiếu 10 thông tin (Phần A của Master Prompt) kèm ví dụ điền mẫu.",
  },
  nam5Founder: {
    src: dir + "5-founder-5-cach-chon.webp",
    width: 1536,
    height: 864,
    alt: "Infographic năm founder thật, năm cách chọn thị trường: 3AK, Voicy, Cal Buddy, LaunchFast, Hero Analytics; mỗi case có cách chọn, lợi thế, bài học và một câu hỏi phản biện. Phía dưới là ba tình huống bài tập A, B, C và ghi chú doanh thu là số founder tự công bố.",
    caption: "Hình 15 · Năm case và ba tình huống bài tập; doanh thu là số founder tự công bố.",
  },
  chot: {
    src: dir + "chot-thi-truong-decision-gate.webp",
    width: 1254,
    height: 1254,
    alt: "Infographic chốt thị trường cuối module: Market Fit Report gồm 14 phần, tám câu phải trả lời được và ba quyết định Select, Refine, Research again. Kết luận: kết quả là một thị trường đáng kiểm chứng, chưa phải thị trường đã chắc thắng.",
    caption: "Hình 16 · Market Fit Report, tám câu hỏi của cổng G1 và ba quyết định.",
  },
} satisfies Record<string, Figure>
