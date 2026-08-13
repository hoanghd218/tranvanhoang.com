import { Clock } from "lucide-react"
import type { LucideIcon } from "lucide-react"

/** Pill chip — hairline, 12px, one Lucide icon at most. */
export function PathMetaChip({ icon: Icon, label }: { icon?: LucideIcon; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-hairline bg-surface-overlay px-3 py-1 text-xs text-text-secondary">
      {Icon ? <Icon size={16} strokeWidth={1.75} aria-hidden="true" /> : null}
      {label}
    </span>
  )
}

export type PathModule = {
  number: number
  title: string
  description: string
  duration: string
  topics: string[]
}

/** Curriculum row — --radius-md list row, number in the display face, purple hairline on hover. */
export function PathModuleRow({ module }: { module: PathModule }) {
  return (
    <div className="flex gap-4 rounded-[var(--radius-md)] border border-hairline bg-surface-card p-5 transition-colors duration-[var(--duration-base)] ease-[var(--ease-trajectory)] hover:border-hairline-accent">
      <span className="font-display shrink-0 pt-0.5 text-lg leading-none font-bold text-rocket">
        {String(module.number).padStart(2, "0")}
      </span>
      <div className="flex-1">
        <h3 className="font-display text-lg font-bold tracking-tight text-text-primary">
          {module.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{module.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {module.topics.map((topic) => (
            <PathMetaChip key={topic} label={topic} />
          ))}
          <PathMetaChip icon={Clock} label={module.duration} />
        </div>
      </div>
    </div>
  )
}
