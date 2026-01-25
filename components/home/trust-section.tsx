"use client"

import * as React from "react"
import { Award, Users, BookOpen, Star } from "lucide-react"

import { GradientText } from "@/components/custom/gradient-text"
import { Container, Section } from "@/components/custom/container"

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

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const Icon = stat.icon

  return (
    <div
      className="text-center animate-fade-in"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-coral/10 flex items-center justify-center">
        <Icon className="w-8 h-8 text-coral" />
      </div>
      <div className="text-4xl font-bold mb-2">
        <GradientText>{stat.value}</GradientText>
      </div>
      <p className="font-semibold text-foreground mb-1">{stat.label}</p>
      <p className="text-sm text-muted-foreground">{stat.description}</p>
    </div>
  )
}

export function TrustSection() {
  return (
    <Section className="bg-card/50">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-md mb-4">
            Tại sao <GradientText>tin tôi?</GradientText>
          </h2>
          <p className="text-muted-foreground">
            Tôi không chỉ dạy lý thuyết - tôi đã áp dụng AI vào thực tế
            và giúp hàng ngàn người làm được điều tương tự.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-12 pt-12 border-t border-border">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Đã được đề cập trên / Hợp tác với
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {/* Placeholder logos - replace with actual logos */}
            <div className="text-lg font-bold text-muted-foreground">TechDaily</div>
            <div className="text-lg font-bold text-muted-foreground">AI Vietnam</div>
            <div className="text-lg font-bold text-muted-foreground">StartupHub</div>
            <div className="text-lg font-bold text-muted-foreground">Digital Marketing</div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
