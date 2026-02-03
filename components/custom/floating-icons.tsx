"use client"

import * as React from "react"
import { Brain, Sparkles, Lightbulb, Zap, Target, Wand2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface FloatingIconProps {
    icon: React.ComponentType<{ className?: string }>
    className?: string
    animationClass?: string
    size?: "sm" | "md" | "lg"
}

function FloatingIcon({
    icon: Icon,
    className,
    animationClass = "animate-float-1",
    size = "md"
}: FloatingIconProps) {
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-16 h-16"
    }

    const iconSizes = {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8"
    }

    return (
        <div
            className={cn(
                "absolute rounded-xl bg-gradient-to-br from-coral/20 to-bronze/10 backdrop-blur-sm",
                "flex items-center justify-center border border-coral/20",
                sizeClasses[size],
                animationClass,
                className
            )}
        >
            <Icon className={cn("text-coral/80", iconSizes[size])} />
        </div>
    )
}

export function FloatingIcons() {
    return (
        <div className="absolute inset-0 pointer-events-none">
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
            />

            {/* Bottom left */}
            <FloatingIcon
                icon={Target}
                className="bottom-[20%] left-[12%]"
                animationClass="animate-float-2 delay-200"
                size="sm"
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
