"use client"

import * as React from "react"
import Link from "next/link"

import { GradientText } from "@/components/custom/gradient-text"
import { Container, Section } from "@/components/custom/container"

export function CTASection() {
  return (
    <Section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral/10 via-transparent to-bronze/10 pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="text-6xl mb-6 animate-bounce">🎁</div>

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
            <span className="px-3 py-1 rounded-full bg-card border border-border text-sm">
              ✓ Checklist 10 bước
            </span>
            <span className="px-3 py-1 rounded-full bg-card border border-border text-sm">
              ✓ 50+ Prompt templates
            </span>
            <span className="px-3 py-1 rounded-full bg-card border border-border text-sm">
              ✓ Video hướng dẫn
            </span>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-gift"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-semibold transition-all h-12 px-8 bg-coral text-white hover:bg-coral-dark active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span>🎁</span> Nhận quà miễn phí ngay
            </Link>
          </div>

          {/* Trust signal */}
          <p className="text-xs text-muted-foreground mt-6">
            Đã có <span className="text-coral">2,500+</span> người nhận quà •
            Không cần thẻ tín dụng •
            Hủy đăng ký bất cứ lúc nào
          </p>
        </div>
      </Container>
    </Section>
  )
}
