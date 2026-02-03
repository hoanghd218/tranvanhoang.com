"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container, Section } from "@/components/custom/container"
import { GradientText } from "@/components/custom/gradient-text"
import { ScrollReveal } from "@/components/custom/scroll-reveal"

export function CTASection() {
  return (
    <Section className="py-16">
      <Container>
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-br from-coral/10 to-bronze/10 border border-border">
            <h2 className="text-2xl font-semibold mb-4">
              Sẵn sàng <GradientText>bắt đầu?</GradientText>
            </h2>
            <p className="text-muted-foreground mb-6">
              Chọn lộ trình phù hợp và bắt đầu hành trình AI ngay hôm nay.
            </p>
            <Link
              href="#learning-paths"
              className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white rounded-lg font-medium hover:bg-coral-dark transition-colors"
            >
              Xem lộ trình
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
