"use client"

import * as React from "react"
import Link from "next/link"
import { Zap, Target, TrendingUp } from "lucide-react"

import { GradientText } from "@/components/custom/gradient-text"
import { Container, Section } from "@/components/custom/container"

type LearningPath = {
  icon: React.ComponentType<{ className?: string }>
  title: string
  slug: string
  description: string
  modules: string[]
  duration: string
}

const learningPaths: LearningPath[] = [
  {
    icon: Zap,
    title: "AI cho người mới bắt đầu",
    slug: "ai-cho-nguoi-moi",
    description: "Từ con số 0 đến tự tin sử dụng AI trong công việc hàng ngày",
    modules: ["AI là gì?", "ChatGPT cơ bản", "Prompt hiệu quả", "Thực hành ứng dụng"],
    duration: "2-4 tuần",
  },
  {
    icon: Target,
    title: "AI cho Marketing",
    slug: "ai-marketing",
    description: "Áp dụng AI để tăng 10x hiệu quả marketing và content",
    modules: ["AI viết content", "Email marketing", "Social media", "Quảng cáo thông minh"],
    duration: "3-5 tuần",
  },
  {
    icon: TrendingUp,
    title: "AI cho công việc",
    slug: "ai-cong-viec",
    description: "Tăng năng suất và tự động hóa công việc với AI",
    modules: ["Automation cơ bản", "Phân tích dữ liệu", "Trợ lý AI cá nhân", "Workflow tự động"],
    duration: "4-6 tuần",
  },
]

function LearningPathCard({ path, index }: { path: LearningPath; index: number }) {
  const Icon = path.icon

  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-card border border-border p-6 transition-all duration-300 hover:border-coral/50 animate-fade-in"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-coral/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-coral" />
            </div>
            <h3 className="text-lg font-semibold">{path.title}</h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4">{path.description}</p>

        {/* Modules */}
        <div className="space-y-2 mb-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Nội dung chính
          </p>
          <ul className="space-y-1">
            {path.modules.map((module, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-coral/60" />
                <span>{module}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs px-2 py-1 rounded-full bg-bronze/10 text-bronze">
            ⏱ {path.duration}
          </span>
        </div>

        {/* CTA */}
        <Link
          href={`/learn/${path.slug}`}
          className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold transition-all border-2 border-coral rounded-lg text-coral bg-transparent hover:bg-coral/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Xem chi tiết
        </Link>
      </div>
    </div>
  )
}

export function TeachingSection() {
  return (
    <Section>
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-md mb-4">
            Tôi <GradientText>dạy gì?</GradientText>
          </h2>
          <p className="text-muted-foreground">
            Các lộ trình học được thiết kế practical, có thể áp dụng ngay
            vào công việc thực tế.
          </p>
        </div>

        {/* Learning Paths Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {learningPaths.map((path, index) => (
            <LearningPathCard key={path.slug} path={path} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <Link
            href="/learn"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Xem tất cả lộ trình →
          </Link>
        </div>
      </Container>
    </Section>
  )
}
