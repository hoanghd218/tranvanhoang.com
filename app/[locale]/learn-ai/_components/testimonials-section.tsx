"use client"

import { useTranslations } from "next-intl"
import { Container, Section } from "@/components/custom/container"
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
    <Section className="py-16 md:py-24">
      <Container>
        <ScrollReveal>
          <div className="max-w-2xl">
            <h2 className="heading-md">{t("testimonialsTitle")}</h2>
            <p className="mt-4 text-text-secondary">{t("testimonialsSubtitle")}</p>
          </div>
        </ScrollReveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 150} className="h-full">
              <TestimonialCard {...testimonial} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
