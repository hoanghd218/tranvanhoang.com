"use client"

import { GradientText } from "@/components/custom/gradient-text"
import { Container, Section } from "@/components/custom/container"
import { ScrollReveal } from "@/components/custom/scroll-reveal"

export function HeroSection() {
  return (
    <Section className="py-16 md:py-24">
      <Container>
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-6">
            Lộ trình <GradientText>học AI</GradientText> cho mọi người
          </h1>
          <p className="text-lg text-muted-foreground">
            Dù bạn ở đâu, mức độ nào, tôi đều có lộ trình phù hợp để bạn
            bắt đầu với AI một cách tự tin. Không cần kiến thức trước.
          </p>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
