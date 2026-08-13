"use client"

import * as React from "react"
import { Brain, Sparkles, Lightbulb, Zap, Target, Wand2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface FloatingIconProps {
    icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
    className?: string
    animationClass?: string
    size?: "sm" | "md" | "lg"
    tone?: "accent" | "silver"
}

/** Icon sizes are 16 / 20 / 24 only. */
const iconPx = { sm: 16, md: 20, lg: 24 } as const

const toneClasses = {
    accent: "text-rocket/70",
    silver: "text-silver/45",
} as const

/**
 * A bare glyph drifting on the void — no box, no blur, no gradient chrome.
 * Motion is a short vertical float; there is no rotation and no parallax.
 */
function FloatingIcon({
    icon: Icon,
    className,
    animationClass = "animate-float-1",
    size = "md",
    tone = "accent",
}: FloatingIconProps) {
    return (
        <span
            className={cn("absolute", animationClass, toneClasses[tone], className)}
            aria-hidden="true"
        >
            <Icon size={iconPx[size]} strokeWidth={1.75} />
        </span>
    )
}

export function FloatingIcons() {
    return (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {/* Top left area */}
            <FloatingIcon
                icon={Brain}
                className="top-[10%] left-[10%]"
                animationClass="animate-float-1"
                size="md"
            />

            {/* Top right area */}
            <FloatingIcon
                icon={Sparkles}
                className="top-[15%] right-[15%]"
                animationClass="animate-float-2"
                size="sm"
                tone="silver"
            />

            {/* Middle left */}
            <FloatingIcon
                icon={Lightbulb}
                className="top-[45%] left-[5%]"
                animationClass="animate-float-3"
                size="lg"
            />

            {/* Middle right */}
            <FloatingIcon
                icon={Zap}
                className="top-[40%] right-[8%]"
                animationClass="animate-float-1 delay-300"
                size="md"
                tone="silver"
            />

            {/* Bottom left */}
            <FloatingIcon
                icon={Target}
                className="bottom-[20%] left-[12%]"
                animationClass="animate-float-2 delay-200"
                size="sm"
                tone="silver"
            />

            {/* Bottom right */}
            <FloatingIcon
                icon={Wand2}
                className="bottom-[25%] right-[10%]"
                animationClass="animate-float-3 delay-100"
                size="md"
            />
        </div>
    )
}
