"use client"

import { useState, type FormEvent } from "react"
import { ArrowUpRight, CheckCircle2, Gift, Loader2 } from "lucide-react"

export function HomeSignup({ locale }: { locale: string }) {
  const en = locale === "en"
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === "sending") return
    const data = new FormData(event.currentTarget)
    setStatus("sending")
    try {
      const response = await fetch("https://n8n.bimspeed.net/webhook/6135553c-02ef-4ad6-b05a-c1b431c4f182", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: String(data.get("email")).trim(), submittedAt: new Date().toISOString() }),
        signal: AbortSignal.timeout(15000),
      })
      if (!response.ok) throw new Error("Signup failed")
      setStatus("success")
    } catch { setStatus("error") }
  }
  return <section className="rl-section rl-container" id="free-resources" aria-labelledby="signup-title">
    <div className="rl-signup" data-reveal>
      <div className="rl-section-head"><span className="rl-tag"><Gift size={14} aria-hidden="true" />{en ? "A gift for your next idea" : "Quà tặng cho ý tưởng tiếp theo"}</span>
        <h2 id="signup-title">{en ? "Useful AI resources." : "Tài nguyên AI hữu ích."}<br /><span className="rl-orange">{en ? "Straight to your inbox." : "Gửi thẳng vào hộp thư."}</span></h2>
        <p>{en ? "Leave your email to receive free AI resources and put your next idea into practice." : "Để lại email để nhận tài nguyên AI miễn phí và bắt tay thực hiện ý tưởng của bạn."}</p>
      </div>
      <div className="rl-signup-form">
        {status === "success" ? <div role="status" className="rl-signup-success"><CheckCircle2 size={28} aria-hidden="true" /><h3>{en ? "Request received." : "Đã nhận đăng ký của bạn."}</h3><p>{en ? "Your request was received. Please check your inbox and spam folder for your gift." : "Yêu cầu đã được tiếp nhận. Kiểm tra hộp thư đến và thư rác để nhận quà nhé."}</p></div> : <form onSubmit={submit} aria-busy={status === "sending"}>
          <label htmlFor="signup-email">{en ? "Your email address" : "Địa chỉ email của bạn"}</label>
          <input id="signup-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} disabled={status === "sending"} aria-describedby="signup-note signup-status" />
          <button className="rl-button" type="submit" disabled={status === "sending"}>{status === "sending" ? <><Loader2 size={18} aria-hidden="true" />{en ? "Sending…" : "Đang gửi…"}</> : <>{en ? "Send me the free resources" : "Gửi tôi tài nguyên miễn phí"}<ArrowUpRight size={18} aria-hidden="true" /></>}</button>
          <p id="signup-note" className="rl-signup-note">{en ? "By submitting, you agree to receive the requested gift by email." : "Khi gửi, bạn đồng ý nhận quà tặng đã yêu cầu qua email."}</p>
          <p id="signup-status" role="status" className="rl-signup-error">{status === "error" ? (en ? "We couldn't confirm your request. Please try again." : "Chưa xác nhận được yêu cầu. Vui lòng thử lại.") : ""}</p>
        </form>}
      </div>
    </div>
  </section>
}
