"use client"

import * as React from "react"
import { useInView } from "@/hooks/use-in-view"

interface AnimatedCounterProps {
  value: string
  className?: string
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = React.useState("0")
  const ref = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  React.useEffect(() => {
    if (!isInView) return

    // Parse the numeric part from strings like "5+", "10K+", "4.9/5"
    const numericMatch = value.match(/[\d.]+/)
    if (!numericMatch) {
      setDisplayValue(value)
      return
    }

    const targetNum = parseFloat(numericMatch[0])
    const hasDecimal = value.includes(".")
    const hasK = value.includes("K")
    const hasPlus = value.includes("+")
    const hasSlash = value.includes("/")
    const suffix = hasSlash ? value.split("/")[1] : ""

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentNum = targetNum * easeOutQuart

      let formatted = hasDecimal
        ? currentNum.toFixed(1)
        : Math.floor(currentNum).toString()

      if (hasK) formatted += "K"
      if (hasPlus && currentStep === steps) formatted += "+"
      if (hasSlash) formatted += "/" + suffix

      setDisplayValue(formatted)

      if (currentStep >= steps) {
        clearInterval(timer)
        setDisplayValue(value)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  )
}
