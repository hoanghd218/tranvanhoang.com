import type { Metadata } from "next"
import { RoboShell } from "@/components/editorial/robo-shell"
import { VideoSkillForm } from "@/components/video-skill/video-skill-form"
import { ArrowDownRight, Check, Clapperboard, Coffee, Scissors, Layers, Play } from "lucide-react"
import "./video-skill.css"

export const metadata: Metadata = {
  title: "Skill edit video miễn phí — Tony Hoang",
  description: "Bắt đầu với 1 skill edit video miễn phí. Mời Hoàng cà phê 199.000đ để nhận bộ 10 skills edit video đa ngành nghề.",
  alternates: { canonical: "https://tranvanhoang.com/skill-edit-video-free", languages: {} },
}

export default async function VideoSkillPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <RoboShell locale={locale}><div className="vs-page rl-container" lang="vi">
    <section className="vs-hero">
      <div><p className="vs-eyebrow">TONY HOANG / AI SKILLS / VIDEO</p>
        <h1>Ý tưởng của bạn.<br />Video mang <span>dấu ấn bạn.</span></h1>
        <p className="vs-lead">Bắt đầu với 1 skill edit video miễn phí. Khi muốn mở rộng cách làm nội dung, mời Hoàng một ly cà phê để nhận bộ 10 skills đa ngành nghề.</p>
        <a className="rl-button" href="#nhan-skill">Nhận skill miễn phí <ArrowDownRight size={18} /></a>
        <p className="vs-micro">Gói free 0đ · Gói cà phê 199.000đ · Chọn theo nhu cầu của bạn</p>
      </div>
      <div className="vs-editor" aria-label="Minh hoạ quy trình dựng video">
        <div className="vs-editor-top"><span><i /> CREATIVE WORKSPACE</span><Scissors size={16} /></div>
        <div className="vs-preview"><span className="vs-frame">YOUR NEXT<br /><strong>GREAT STORY.</strong></span><Play size={42} aria-hidden="true" /><span className="vs-time">Ý TƯỞNG → VIDEO</span></div>
        <div className="vs-timeline" aria-hidden="true"><div><span>01</span><b>Ý tưởng & kịch bản</b></div><div><span>02</span><b>Nhịp dựng & hình ảnh</b></div><div><span>03</span><b>Âm thanh & hoàn thiện</b></div></div>
        <p className="vs-editor-caption">Từ câu chuyện đến từng khung hình · Minh hoạ quy trình</p>
      </div>
    </section>
    <section className="vs-how" aria-labelledby="vs-how-title"><p className="vs-eyebrow">BẮT ĐẦU NHỎ. SÁNG TẠO NHIỀU HƠN.</p><h2 id="vs-how-title">Một điểm bắt đầu cho video tiếp theo.</h2><div className="vs-steps">
      {[{ icon: Clapperboard, title: "01 / Chọn gói", text: "Thử 1 skill miễn phí hoặc chọn bộ 10 skills đa ngành nghề." }, { icon: Scissors, title: "02 / Đăng ký nhận skill", text: "Điền thông tin và làm theo hướng dẫn sau khi đăng ký." }, { icon: Layers, title: "03 / Đưa vào công việc", text: "Dùng skill làm điểm xuất phát, điều chỉnh theo nội dung và phong cách của bạn." }].map(({ icon: Icon, title, text }) => <article key={title}><Icon size={26} aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>)}
    </div></section>
    <section className="vs-plans" aria-labelledby="vs-plans-title"><p className="vs-eyebrow">CHỌN CÁCH BẠN MUỐN BẮT ĐẦU</p><h2 id="vs-plans-title">Thử trước. Thích thì mời cà phê.</h2><div className="vs-plan-grid">
      <article className="vs-plan"><Clapperboard size={28} aria-hidden="true" /><h3>Làm quen với skill</h3><p className="vs-price">Miễn phí <small>/ 0đ</small></p><ul><li><Check size={18} />1 skill edit video miễn phí</li><li><Check size={18} />Bắt đầu trải nghiệm trước khi chọn bộ đầy đủ</li></ul><a href="#nhan-skill" className="rl-button">Bắt đầu miễn phí <ArrowDownRight size={18} /></a></article>
      <article className="vs-plan vs-plan-featured"><p className="vs-badge">MỘT LY CÀ PHÊ CHO HOÀNG</p><Coffee size={28} aria-hidden="true" /><h3>Thêm góc nhìn sáng tạo</h3><p className="vs-price">199.000đ <small>/ một lần</small></p><ul><li><Check size={18} />Tặng bộ 10 skills edit video</li><li><Check size={18} />Đa ngành nghề, nhiều hướng làm nội dung</li></ul><a href="#nhan-skill" className="rl-button">Chọn gói cà phê trong form <ArrowDownRight size={18} /></a></article>
    </div></section>
    <section id="nhan-skill" className="vs-register"><div><p className="vs-eyebrow">TỪ Ý TƯỞNG ĐẾN HÀNH ĐỘNG</p><h2>Video tiếp theo<br />bắt đầu từ đây.</h2><p>Chọn gói và để lại thông tin nhận skill. Với gói cà phê, bạn sẽ được chuyển đến bước thanh toán; quyền lợi được cấp sau khi hệ thống xác nhận.</p><p>Cần hỗ trợ? <a href="mailto:hoanghd218@gmail.com">hoanghd218@gmail.com</a></p></div><VideoSkillForm /></section>
    <section className="vs-faq"><h2>Bạn có thể đang thắc mắc</h2>{[
      ["Gói miễn phí có gì?", "Bạn nhận 1 skill edit video để bắt đầu trải nghiệm. Không cần thanh toán cho gói này."],
      ["199.000đ là khoản gì?", "Đây là gói mời Hoàng cà phê một lần, kèm bộ quà tặng 10 skills edit video đa ngành nghề."],
      ["Skill có phải một phần mềm edit video không?", "Skill là bộ chỉ dẫn cho trợ lý AI, giúp định hướng cách xử lý công việc. Bạn cần công cụ AI và công cụ dựng video phù hợp; các gói trên không bao gồm phí của công cụ bên thứ ba."],
      ["Nếu chưa nhận được hướng dẫn thì sao?", "Kiểm tra email, bao gồm thư rác. Nếu cần hỗ trợ đăng ký hoặc thanh toán, gửi email cho Hoàng tại hoanghd218@gmail.com."],
    ].map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
  </div></RoboShell>
}
