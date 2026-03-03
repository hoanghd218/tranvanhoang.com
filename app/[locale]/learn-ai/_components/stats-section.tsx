"use client"

import { useTranslations } from "next-intl"
import { StatsBanner } from "@/components/learning/stats-banner"

export function StatsSection() {
  const t = useTranslations("learnAi")

  const stats = [
    { value: "5000", label: t("statStudents") },
    { value: "3", label: t("statPaths") },
    { value: "21", label: t("statModules") },
    { value: "4.9", label: t("statRating") },
  ]

  return <StatsBanner stats={stats} />
}
