"use client"

import * as React from "react"
import { useInView } from "@/hooks/use-in-view"

interface AnimatedCounterProps {
  value: string
  className?: string
}

/** Count-up runs on the cinematic duration (900ms) from the motion tokens. */
const COUNT_DURATION = 900

/**
 * Decelerating curve matching the shape of `--ease-trajectory`
 * (cubic-bezier(.2, .8, .2, 1)) closely enough for a numeric ramp.
 */
function easeTrajectory(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = React.useState("0")
  const ref = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  React.useEffect(() => {
    if (!isInView) return

    // Parse the numeric part from strings like "5+", "10K+", "4.9/5"
    const numericMatch = value.match(/[\d.]+/)
    if (!numericMatch || prefersReducedMotion()) {
      setDisplayValue(value)
      return
    }

    const targetNum = parseFloat(numericMatch[0])
    const hasDecimal = value.includes(".")
    const hasK = value.includes("K")
    const hasSlash = value.includes("/")
    const suffix = hasSlash ? value.split("/")[1] : ""

    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / COUNT_DURATION, 1)
      const currentNum = targetNum * easeTrajectory(progress)

      let formatted = hasDecimal
        ? currentNum.toFixed(1)
        : Math.floor(currentNum).toString()

      if (hasK) formatted += "K"
      if (hasSlash) formatted += "/" + suffix

      if (progress >= 1) {
        setDisplayValue(value)
        return
      }

      setDisplayValue(formatted)
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(frame)
  }, [isInView, value])

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  )
}
