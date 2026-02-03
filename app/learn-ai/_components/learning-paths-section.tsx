"use client"

import { LearningPathCards } from "@/components/learning/path-card"
import { Container, Section } from "@/components/custom/container"
import { SectionHeader } from "@/components/custom/section-header"
import { ScrollReveal } from "@/components/custom/scroll-reveal"

export function LearningPathsSection() {
  return (
    <Section id="learning-paths" className="py-12">
      <Container>
        <ScrollReveal>
          <SectionHeader
            title="Chọn lộ trình phù hợp"
            description="Mỗi lộ trình được thiết kế cho mục tiêu và trình độ khác nhau"
            centered
          />
        </ScrollReveal>
        <div className="mt-12">
          <LearningPathCards />
        </div>
      </Container>
    </Section>
  )
}
