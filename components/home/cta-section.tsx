"use client"

import * as React from "react"
import Link from "next/link"
import { Gift, Check, Sparkles } from "lucide-react"

import { GradientText } from "@/components/custom/gradient-text"
import { Container, Section } from "@/components/custom/container"

export function CTASection() {
  return (
    <Section className="relative overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral/10 via-transparent to-bronze/10 pointer-events-none animate-gradient-mesh" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-coral/30 animate-float-1" />
        <div className="absolute top-[40%] right-[15%] w-3 h-3 rounded-full bg-bronze/20 animate-float-2" />
        <div className="absolute bottom-[30%] left-[20%] w-2 h-2 rounded-full bg-coral/20 animate-float-3" />
        <div className="absolute top-[60%] right-[25%] w-1.5 h-1.5 rounded-full bg-bronze/30 animate-float-1 delay-200" />
        <div className="absolute bottom-[20%] right-[10%] w-2 h-2 rounded-full bg-coral/25 animate-float-2 delay-300" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon with glow */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-coral/20 to-bronze/20 flex items-center justify-center animate-glow-pulse">
            <Gift className="w-10 h-10 text-coral" />
          </div>

          {/* Headline */}
          <h2 className="heading-lg mb-4">
            Sẵn sàng để bắt đầu <GradientText>hành trình AI</GradientText> của bạn?
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground mb-8">
            Nhận ngay bộ quà tặng miễn phí dành cho người mới bắt đầu:
            checklist, prompt templates, và video hướng dẫn chi tiết.
          </p>

          {/* What's included */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-border text-sm shimmer-border cursor-default">
              <Check className="w-3.5 h-3.5 text-coral" /> Checklist 10 bước
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-border text-sm shimmer-border cursor-default">
              <Check className="w-3.5 h-3.5 text-coral" /> 50+ Prompt templates
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-border text-sm shimmer-border cursor-default">
              <Check className="w-3.5 h-3.5 text-coral" /> Video hướng dẫn
            </span>
          </div>

          {/* CTA Button with glow and ripple */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-gift"
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-semibold transition-all h-12 px-8 bg-coral text-white hover:bg-coral-dark active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background btn-ripple animate-glow-pulse"
            >
              <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
              Nhận quà miễn phí ngay
            </Link>
          </div>

          {/* Trust signal */}
          <p className="text-xs text-muted-foreground mt-6">
            Đã có <span className="text-coral font-semibold">2,500+</span> người nhận quà •
            Không cần thẻ tín dụng •
            Hủy đăng ký bất cứ lúc nào
          </p>
        </div>
      </Container>
    </Section>
  )
}

