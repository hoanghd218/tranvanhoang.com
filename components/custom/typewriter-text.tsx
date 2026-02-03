"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TypewriterTextProps {
    text: string
    className?: string
    speed?: number
    delay?: number
    loop?: boolean
    pauseOnComplete?: number
}

export function TypewriterText({
    text,
    className,
    speed = 60,
    delay = 0,
    loop = false,
    pauseOnComplete = 2000,
}: TypewriterTextProps) {
    const [displayedText, setDisplayedText] = React.useState("")
    const [isTyping, setIsTyping] = React.useState(false)

    React.useEffect(() => {
        let timeout: NodeJS.Timeout
        let charIndex = 0
        let isDeleting = false

        const startTyping = () => {
            timeout = setTimeout(() => {
                setIsTyping(true)
                typeNextChar()
            }, delay)
        }

        const typeNextChar = () => {
            if (!isDeleting) {
                // Typing forward
                if (charIndex <= text.length) {
                    setDisplayedText(text.slice(0, charIndex))
                    charIndex++
                    timeout = setTimeout(typeNextChar, speed)
                } else {
                    // Finished typing
                    if (loop) {
                        timeout = setTimeout(() => {
                            isDeleting = true
                            typeNextChar()
                        }, pauseOnComplete)
                    } else {
                        setIsTyping(false)
                    }
                }
            } else {
                // Deleting (for loop mode)
                if (charIndex > 0) {
                    charIndex--
                    setDisplayedText(text.slice(0, charIndex))
                    timeout = setTimeout(typeNextChar, speed / 2)
                } else {
                    isDeleting = false
                    timeout = setTimeout(typeNextChar, 500)
                }
            }
        }

        startTyping()

        return () => clearTimeout(timeout)
    }, [text, speed, delay, loop, pauseOnComplete])

    return (
        <span className={cn("inline-flex", className)}>
            <span>{displayedText}</span>
            <span
                className={cn(
                    "inline-block w-[2px] h-[1em] bg-coral ml-1 translate-y-[0.1em]",
                    isTyping || loop ? "animate-blink" : "opacity-0"
                )}
                aria-hidden="true"
            />
        </span>
    )
}
