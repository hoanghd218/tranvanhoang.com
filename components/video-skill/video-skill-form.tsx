"use client"

import { useEffect, useRef, useState } from "react"

type EduSdk = { mount: (element: HTMLElement, options: { form: string; style: string }) => { destroy: () => void } }
declare global { interface Window { EduForm?: EduSdk } }
let sdkPromise: Promise<void> | undefined
function loadSdk(origin: string) {
  if (window.EduForm) return Promise.resolve()
  if (!sdkPromise) sdkPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script")
    script.src = `${origin}/assets/edu_business/js/embed.v1.js`
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
  const origin = process.env.NEXT_PUBLIC_VIDEO_SKILL_ERP_ORIGIN
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
        handle = window.EduForm.mount(container.current, { form: "skill_edit_video_free", style: "none" })
        setMounted(true)
      }).catch(() => { if (active) setFailed(true) })
    } catch { setFailed(true) }
    return () => { active = false; handle?.destroy() }
  }, [origin])
  return <div className="vs-form-panel">
    {!mounted && <p role="status">{!origin || failed ? "Form đăng ký hiện chưa sẵn sàng. Vui lòng liên hệ Hoàng để được hỗ trợ." : "Đang tải form đăng ký…"}</p>}
    {(!origin || failed) && <a href="mailto:hoanghd218@gmail.com" className="rl-button">Liên hệ Hoàng</a>}
    <div ref={container} />
  </div>
}
