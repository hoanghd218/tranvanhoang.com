"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { Pause, Play } from "lucide-react"

/** Content is visible before enhancement; ambient loops only run in view. */
export function RoboMotion({ locale = "en" }: { locale?: string }) {
  const marker = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    const root = marker.current?.closest<HTMLElement>(".robolabs-home")
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (!root) return
    const animations = new Set<Animation>()
    let reveal: IntersectionObserver | undefined
    let ambient: IntersectionObserver | undefined
    function syncPlayback() {
      if (root) root.dataset.motion = paused || preference.matches || document.hidden ? "paused" : "running"
    }
    function setup() {
      reveal?.disconnect()
      ambient?.disconnect()
      animations.forEach(animation => animation.cancel())
      animations.clear()
      syncPlayback()
      if (preference.matches || paused || !root || !window.IntersectionObserver) return
      reveal = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          reveal?.unobserve(entry.target)
          if (entry.target.classList.contains("rl-revealed")) return
          entry.target.classList.add("rl-revealed")
          if (!entry.target.animate) return
          const animation = entry.target.animate([
            { opacity: 0, transform: "translateY(24px)", filter: "blur(4px)" },
            { opacity: 1, transform: "translateY(0)", filter: "blur(0)" },
          ], { duration: 750, easing: "cubic-bezier(.22,1,.36,1)" })
          animations.add(animation)
          animation.onfinish = () => animations.delete(animation)
        })
      }, { threshold: 0.08 })
      ambient = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle("rl-in-view", entry.isIntersecting)), { threshold: 0.05 })
      root.querySelectorAll("[data-reveal], .rl-section-head, .rl-benefit, .rl-card, .product-card, .product-tour-item").forEach(element => reveal?.observe(element))
      root.querySelectorAll(".rl-process-card, .rl-service-card, .rl-technologies, .rl-skill-art").forEach(element => ambient?.observe(element))
    }
    setup()
    preference.addEventListener("change", setup)
    document.addEventListener("visibilitychange", syncPlayback)
    return () => {
      reveal?.disconnect()
      ambient?.disconnect()
      animations.forEach(animation => animation.cancel())
      preference.removeEventListener("change", setup)
      document.removeEventListener("visibilitychange", syncPlayback)
    }
  }, [pathname, paused])
  const en = locale === "en"
  return <div ref={marker} className="rl-motion-control"><button type="button" onClick={() => setPaused(value => !value)} aria-pressed={paused}>
    {paused ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}
    {paused ? (en ? "Resume animations" : "Tiếp tục chuyển động") : (en ? "Pause animations" : "Tạm dừng chuyển động")}
  </button></div>
}
