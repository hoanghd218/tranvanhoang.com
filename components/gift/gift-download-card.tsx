"use client"

import {
  Bot,
  Code,
  Download,
  ExternalLink,
  Gift as GiftIcon,
  Lock,
  Palette,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import type { Gift as GiftType } from "@/types/gift"

/**
 * Gift id → Lucide glyph. The data layer still carries an emoji field; the DS
 * forbids emoji, so the icon is resolved here and the emoji is never rendered.
 */
const giftIcons: Record<string, LucideIcon> = {
  "ai-marketing": TrendingUp,
  "ai-landing-page": Zap,
  "ai-openclaw": Bot,
  "ai-claude-code": Code,
  "claude-marketing-skill": Zap,
  "kdp-coloring-book-prompts": Palette,
}

const categoryIcons: Record<string, LucideIcon> = {
  marketing: TrendingUp,
  "ai-tools": Bot,
  coding: Code,
}

interface GiftDownloadCardProps {
  gift: GiftType
  unlocked: boolean
}

export function GiftDownloadCard({ gift, unlocked }: GiftDownloadCardProps) {
  const Icon = giftIcons[gift.id] ?? categoryIcons[gift.category] ?? GiftIcon

  return (
    <div
      className={cn(
        "rk-card group flex flex-col p-[var(--space-5)]",
        unlocked && "rk-card-interactive"
      )}
    >
      {/* Icon tile */}
      <div className="mb-[var(--space-4)] flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-surface-inset">
        <Icon size={24} strokeWidth={1.75} className="text-rocket" />
      </div>

      <h3 className="mb-1.5 font-semibold text-text-primary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] group-hover:text-text-accent">
        {gift.title}
      </h3>
      <p className="mb-[var(--space-4)] flex-1 text-[length:var(--size-body-s)] text-text-secondary">
        {gift.description}
      </p>

      {unlocked ? (
        <a
          href={gift.driveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-[var(--radius-sm)] border border-hairline-strong px-4 text-[length:var(--size-body-s)] font-medium text-text-primary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:border-hairline-accent hover:bg-surface-overlay"
        >
          <Download size={16} strokeWidth={1.75} />
          Tải về
          <ExternalLink size={16} strokeWidth={1.75} className="ml-auto opacity-50" />
        </a>
      ) : (
        <div className="flex h-11 w-full items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-surface-inset px-4 text-[length:var(--size-body-s)] text-text-tertiary">
          <Lock size={16} strokeWidth={1.75} />
          Đăng ký để mở khoá
        </div>
      )}
    </div>
  )
}
