"use client"

import * as React from "react"
import { Award, Users, BookOpen, Star } from "lucide-react"

import { GradientText } from "@/components/custom/gradient-text"
import { Container, Section } from "@/components/custom/container"
import { ScrollReveal } from "@/components/custom/scroll-reveal"
import { AnimatedCounter } from "@/components/custom/animated-counter"

type StatItem = {
  icon: React.ComponentType<{ className?: string }>
  value: string
  label: string
  description: string
}

const statsData: StatItem[] = [
  {
    icon: Award,
    value: "5+",
    label: "Năm kinh nghiệm",
    description: "Trong lĩnh vực AI và công nghệ",
  },
  {
    icon: Users,
    value: "10K+",
    label: "Học viên",
    description: "Đã tham gia các khóa học",
  },
  {
    icon: BookOpen,
    value: "50+",
    label: "Bài viết",
    description: "Về AI cho người mới",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Đánh giá",
    description: "Từ học viên",
  },
]

const brandLogos = [
  "TechDaily",
  "AI Vietnam",
  "StartupHub",
  "Digital Marketing",
  "VnExpress",
  "TechInAsia",
]

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const Icon = stat.icon

  return (
    <ScrollReveal delay={index * 150} className="text-center">
      <div className="group cursor-pointer">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-coral/10 flex items-center justify-center icon-pop">
          <Icon className="w-8 h-8 text-coral transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="text-4xl font-bold mb-2">
          <GradientText>
            <AnimatedCounter value={stat.value} />
          </GradientText>
        </div>
        <p className="font-semibold text-foreground mb-1">{stat.label}</p>
        <p className="text-sm text-muted-foreground">{stat.description}</p>
      </div>
    </ScrollReveal>
  )
}

function LogoMarquee() {
  // Double the logos for seamless infinite scroll
  const doubledLogos = [...brandLogos, ...brandLogos]

  return (
    <div className="relative overflow-hidden">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-card/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-card/50 to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee">
        {doubledLogos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex-shrink-0 px-8 py-2 mx-4 rounded-lg bg-card/50 border border-border/50 text-lg font-semibold text-muted-foreground transition-all duration-300 hover:text-coral hover:border-coral/30 cursor-pointer"
          >
            {logo}
          </div>
        ))}
      </div>
    </div>
  )
}

export function TrustSection() {
  return (
    <Section className="bg-card/50">
      <Container>
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-md mb-4">
            Tại sao <GradientText>tin tôi?</GradientText>
          </h2>
          <p className="text-muted-foreground">
            Tôi không chỉ dạy lý thuyết - tôi đã áp dụng AI vào thực tế
            và giúp hàng ngàn người làm được điều tương tự.
          </p>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Social Proof with Marquee */}
        <div className="mt-12 pt-12 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Đã được đề cập trên / Hợp tác với
          </p>
          <LogoMarquee />
        </div>
      </Container>
    </Section>
  )
}

