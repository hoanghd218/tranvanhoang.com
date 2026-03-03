"use client"

import { useTranslations } from "next-intl"
import { Container, Section } from "@/components/custom/container"
import { SectionHeader } from "@/components/custom/section-header"
import { TestimonialCard } from "@/components/learning/testimonial-card"
import { ScrollReveal } from "@/components/custom/scroll-reveal"

export function TestimonialsSection() {
  const t = useTranslations("learnAi")

  const testimonials = [
    {
      name: t("testimonial1Name"),
      role: t("testimonial1Role"),
      content: t("testimonial1Content"),
    },
    {
      name: t("testimonial2Name"),
      role: t("testimonial2Role"),
      content: t("testimonial2Content"),
    },
    {
      name: t("testimonial3Name"),
      role: t("testimonial3Role"),
      content: t("testimonial3Content"),
    },
  ]

  return (
    <Section className="py-16">
      <Container>
        <ScrollReveal>
          <SectionHeader
            title={t("testimonialsTitle")}
            description={t("testimonialsSubtitle")}
            centered
          />
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 150}>
              <TestimonialCard {...testimonial} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
