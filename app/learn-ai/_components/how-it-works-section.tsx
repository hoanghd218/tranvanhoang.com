"use client"

import { Map, BookOpen, Target, Award } from "lucide-react"
import { Container, Section } from "@/components/custom/container"
import { SectionHeader } from "@/components/custom/section-header"
import { StepCard } from "@/components/learning/step-card"
import { ScrollReveal } from "@/components/custom/scroll-reveal"

const steps = [
  {
    number: 1,
    title: "Chọn lộ trình",
    description: "Xác định mục tiêu và chọn lộ trình phù hợp với bạn",
    icon: Map,
  },
  {
    number: 2,
    title: "Học theo module",
    description: "Tiếp cận kiến thức từ cơ bản đến nâng cao",
    icon: BookOpen,
  },
  {
    number: 3,
    title: "Thực hành",
    description: "Áp dụng ngay vào công việc thực tế",
    icon: Target,
  },
  {
    number: 4,
    title: "Nhận certificate",
    description: "Hoàn thành và nhận chứng nhận",
    icon: Award,
  },
]

export function HowItWorksSection() {
  return (
    <Section className="py-16 bg-card/30">
      <Container>
        <ScrollReveal>
          <SectionHeader
            title="Cách thức học"
            description="Quy trình đơn giản, hiệu quả"
            centered
          />
        </ScrollReveal>
        <div className="grid md:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 150}>
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isLast={index === steps.length - 1}
              />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
