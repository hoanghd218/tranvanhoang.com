"use client"

import * as React from "react"
import { Brain, Megaphone, Briefcase, Check } from "lucide-react"

import { GradientText } from "@/components/custom/gradient-text"
import { BrandCard } from "@/components/custom/brand-card"
import { Container, Section } from "@/components/custom/container"
import { ScrollReveal } from "@/components/custom/scroll-reveal"

type AudienceCard = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  painPoints: string[]
  benefits: string[]
}

const audienceData: AudienceCard[] = [
  {
    icon: Brain,
    title: "Người chưa biết gì về AI",
    painPoints: [
      "Sợ công nghệ phức tạp",
      "Ngại thuật ngữ chuyên môn",
      "Không biết bắt đầu từ đâu",
    ],
    benefits: [
      "Giải thích từ bản chất, dễ hiểu",
      "Không cần kiến thức trước",
      "Áp dụng được ngay lập tức",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketer & Content Creator",
    painPoints: [
      "Tốn nhiều thời gian viết content",
      "Thiếu ý tưởng mới",
      "Cạnh tranh khốc liệt",
    ],
    benefits: [
      "Làm việc nhanh hơn 10x",
      "Có ý tưởng không ngừng",
      "Content chất lượng hơn",
    ],
  },
  {
    icon: Briefcase,
    title: "Chủ doanh nghiệp nhỏ",
    painPoints: [
      "Ngân sách hạn chế",
      "Thiếu nhân sự kỹ thuật",
      "Cần hiệu quả tức thì",
    ],
    benefits: [
      "Tối ưu chi phí với AI",
      "Tự làm được mọi việc",
      "ROI rõ ràng, đo lường được",
    ],
  },
]

function AudienceCard({ data, index }: { data: AudienceCard; index: number }) {
  const Icon = data.icon

  return (
    <ScrollReveal delay={index * 150}>
      <BrandCard
        hoverBorder
        padding="lg"
        className="h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-coral/5 shimmer-border card-tilt"
      >
        <div className="flex flex-col gap-6">
          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center">
            <Icon className="w-7 h-7 text-coral" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold">
            <GradientText>{data.title}</GradientText>
          </h3>

          {/* Pain Points */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Vấn đề gặp phải
            </p>
            <ul className="space-y-2">
              {data.painPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral/60 mt-1.5 shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="space-y-3 pt-2">
            <p className="text-sm font-medium text-bronze uppercase tracking-wider">
              Lợi ích khi học
            </p>
            <ul className="space-y-2">
              {data.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="w-3.5 h-3.5 text-bronze mt-0.5 shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </BrandCard>
    </ScrollReveal>
  )
}

export function AudienceSection() {
  return (
    <Section className="bg-card/30">
      <Container>
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-md mb-4">
            Tôi <GradientText>giúp ai?</GradientText>
          </h2>
          <p className="text-muted-foreground">
            Dù bạn ở đâu, ở mức độ nào, tôi đều có lộ trình phù hợp để bạn
            bắt đầu với AI một cách tự tin.
          </p>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {audienceData.map((card, index) => (
            <AudienceCard key={card.title} data={card} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
