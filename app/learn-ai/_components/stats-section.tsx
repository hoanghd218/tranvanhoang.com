"use client"

import { StatsBanner } from "@/components/learning/stats-banner"

const stats = [
  { value: "5000", label: "Học viên" },
  { value: "3", label: "Lộ trình" },
  { value: "21", label: "Modules" },
  { value: "4.9", label: "Đánh giá" },
]

export function StatsSection() {
  return <StatsBanner stats={stats} />
}
