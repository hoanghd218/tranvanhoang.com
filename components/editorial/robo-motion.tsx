"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"

/** Progressive enhancement: content remains visible without JS or animation support. */
export function RoboMotion() {
  const marker = useRef<HTMLSpanElement>(null)
  const pathname = usePathname()
  useEffect(() => {
    const root = marker.current?.closest(".robolabs-home")
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (!root || !window.IntersectionObserver) return
    const animations = new Set<Animation>()
    let observer: IntersectionObserver | undefined
    function setup() {
      observer?.disconnect()
      animations.forEach(animation => animation.cancel())
      animations.clear()
      if (preference.matches || !root) return
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          observer?.unobserve(entry.target)
          entry.target.classList.add("rl-visible")
          const animation = entry.target.animate([
            { opacity: 0, transform: "translateY(24px)", filter: "blur(4px)" },
            { opacity: 1, transform: "translateY(0)", filter: "blur(0)" },
          ], { duration: 650, easing: "cubic-bezier(.22,1,.36,1)", fill: "none" })
          animations.add(animation)
          animation.onfinish = () => animations.delete(animation)
        })
      }, { threshold: 0.08 })
      root.querySelectorAll("[data-reveal], .rl-section-head, .rl-benefit, .rl-card, .product-card, .product-tour-item").forEach(element => observer?.observe(element))
    }
    setup()
    preference.addEventListener("change", setup)
    return () => {
      observer?.disconnect()
      animations.forEach(animation => animation.cancel())
      preference.removeEventListener("change", setup)
    }
  }, [pathname])
  return <span ref={marker} hidden />
}
