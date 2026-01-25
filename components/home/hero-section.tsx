"use client"

import * as React from "react"
import Link from "next/link"

import { GradientText } from "@/components/custom/gradient-text"
import { Container, Section } from "@/components/custom/container"

export function HeroSection() {
  return (
    <Section className="min-h-[80vh] flex items-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-coral/5 to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h1 className="heading-xl mb-6 animate-fade-in">
              Hoàng chia sẻ cách dùng AI sao cho{" "}
              <GradientText>người chưa biết gì</GradientText> cũng làm được
            </h1>

            <p className="text-lg text-muted-foreground mb-8 animate-fade-in-delay-1">
              Không cần code. Không áp lực kỹ thuật. Chỉ giải thích từ bản chất
              để bạn hiểu và áp dụng được ngay.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-2">
              <Link
                href="/free-gift"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-semibold transition-all h-12 px-8 bg-coral text-white hover:bg-coral-dark active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span>🎁</span> Nhận bộ AI cho người mới
              </Link>

              <Link
                href="/learn"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-semibold transition-all h-12 px-8 border-2 border-coral bg-transparent text-coral hover:bg-coral/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span>🔍</span> Xem lộ trình học AI
              </Link>
            </div>
          </div>

          {/* Visual/Illustration */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-delay-3">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-coral/20 to-bronze/20 animate-pulse-slow" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-coral/10 to-bronze/10" />

              {/* AI Icon representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <div className="text-sm text-muted-foreground">
                    AI cho mọi người
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
