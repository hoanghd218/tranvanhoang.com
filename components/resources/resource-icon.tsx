/**
 * Resource Icon
 *
 * Rocket AI recipe: a Lucide glyph in rocket purple on a neutral inset tile.
 * No emoji, no filled icon sets, no coloured tiles.
 */
import { FileText, Download, Video, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { ResourceType } from "@/types/resource"

/** Shared type → glyph map so callers can render a bare icon without a tile. */
export const resourceTypeIcons: Record<ResourceType, LucideIcon> = {
  article: FileText,
  download: Download,
  video: Video,
}

const resourceTypeLabels: Record<ResourceType, string> = {
  article: "Bài viết",
  download: "Tải về",
  video: "Video",
}

interface ResourceIconProps {
  type: ResourceType
  /** Tile size utilities (w-/h-). Defaults to a 48px tile. */
  className?: string
  /** Glyph size — DS allows 16 / 20 / 24 only. */
  size?: 16 | 20 | 24
}

export function ResourceIcon({ type, className, size = 24 }: ResourceIconProps) {
  const Icon = resourceTypeIcons[type]

  return (
    <div
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-surface-inset",
        className
      )}
      title={resourceTypeLabels[type]}
    >
      <Icon size={size} strokeWidth={1.75} className="text-rocket" />
    </div>
  )
}
