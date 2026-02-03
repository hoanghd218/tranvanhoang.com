"use client"

import * as React from "react"

interface UseInViewOptions {
  once?: boolean
  margin?: string
}

export function useInView(
  ref: React.RefObject<Element | null>,
  options: UseInViewOptions = {}
): boolean {
  const { once = false, margin = "0px" } = options
  const [isInView, setIsInView] = React.useState(false)

  React.useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      {
        rootMargin: margin,
        threshold: 0.1,
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [ref, once, margin])

  return isInView
}
