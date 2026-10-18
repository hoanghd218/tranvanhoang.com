"use client"

import { useEffect, useRef, useState } from "react"

type EduSdk = { mount: (element: HTMLElement, options: { form: string; style: string; onNavigate: (url: string) => boolean }) => { destroy: () => void } }
declare global { interface Window { EduForm?: EduSdk } }
let sdkPromise: Promise<void> | undefined
function loadSdk(origin: string) {
  if (window.EduForm) return Promise.resolve()
  if (!sdkPromise) sdkPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script")
    script.src = `${origin}/assets/edu_business/js/embed.v1.js?v=consent-required-20261018`
    script.onload = () => resolve()
    script.onerror = () => { script.remove(); sdkPromise = undefined; reject(new Error("SDK unavailable")) }
    document.head.appendChild(script)
  })
  return sdkPromise
}

export function VideoSkillForm() {
  const container = useRef<HTMLDivElement>(null)
  const [failed, setFailed] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null)
  const origin = process.env.NEXT_PUBLIC_VIDEO_SKILL_ERP_ORIGIN || "https://pay-staging.freedombuilders.vn"
  useEffect(() => {
    if (!origin || !container.current) return
    let active = true
    let handle: { destroy: () => void } | undefined
    try {
      const url = new URL(origin)
      if (url.origin !== origin || !["http:", "https:"].includes(url.protocol)) throw new Error("Invalid origin")
      loadSdk(origin).then(() => {
        if (!active || !container.current) return
        if (!window.EduForm) throw new Error("SDK unavailable")
        handle = window.EduForm.mount(container.current, {
          form: "skill_edit_video_free", style: "none",
          onNavigate: (destination) => {
            if (!active) return false
            try {
              const next = new URL(destination, origin)
              if (next.origin !== origin || next.username || next.password || !/^\/(checkout|order)\/[A-Za-z0-9_-]{43}$/.test(next.pathname) || next.search || next.hash) {
                setFailed(true)
                return false
              }
              setFailed(false)
              setCheckoutUrl(next.href)
            } catch { setFailed(true) }
            return false
          },
        })
        setMounted(true)
      }).catch(() => { if (active) setFailed(true) })
    } catch { setFailed(true) }
    return () => { active = false; handle?.destroy() }
  }, [origin])
  useEffect(() => {
    if (checkoutUrl) container.current?.parentElement?.scrollIntoView({ block: "start" })
  }, [checkoutUrl])
  return <div className={`vs-form-panel${checkoutUrl ? " vs-form-panel--checkout" : ""}`}>
    {origin === "https://pay-staging.freedombuilders.vn" && <p className="vs-staging-notice">Bản thử nghiệm: chọn 1 skill mẫu miễn phí hoặc bộ 10 skills mẫu giá 199.000đ. Gói cà phê mở bước thanh toán trên ERP staging; giao dịch SePay thật chưa được kiểm chứng.</p>}
    {(!mounted || failed) && <p role="status">{!origin || failed ? "Form đăng ký hiện chưa sẵn sàng. Vui lòng liên hệ Hoàng để được hỗ trợ." : "Đang tải form đăng ký…"}</p>}
    {(!origin || failed) && <a href="mailto:hoanghd218@gmail.com" className="rl-button">Liên hệ Hoàng</a>}
    <div ref={container} hidden={Boolean(checkoutUrl)} />
    {checkoutUrl && <section className="vs-inline-checkout" aria-label="Thanh toán và nhận skill">
      <h3>Thanh toán và nhận skill ngay tại đây</h3>
      <p>Trạng thái được cập nhật từ ERP. Khi đã nhận tiền, chọn “Xem đơn và quyền lợi” trong khung bên dưới.</p>
      <iframe src={checkoutUrl} title="Thanh toán và quyền lợi skill edit video" referrerPolicy="no-referrer"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads"
        allow="clipboard-write" />
      <p>Nếu khung không tải được: <a href={checkoutUrl} target="_blank" rel="noopener noreferrer">mở trang thanh toán và quyền lợi</a>.</p>
      <a href="https://zalo.me/g/v169jbjxeuhthgocvhgs" target="_blank" rel="noopener noreferrer">Vào nhóm Zalo</a>
    </section>}
  </div>
}
