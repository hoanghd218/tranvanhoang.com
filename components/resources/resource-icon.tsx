/**
 * Resource Icon
 *
 * Displays an icon based on resource type (article, download, video)
 */
import { FileText, Download, Video, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { ResourceType } from "@/types/resource"

interface ResourceIconProps {
  type: ResourceType
  className?: string
}

const typeConfig: Record<
  ResourceType,
  { icon: LucideIcon; label: string; bgColor: string; iconColor: string }
> = {
  article: {
    icon: FileText,
    label: "Bài viết",
    bgColor: "bg-coral/10",
    iconColor: "text-coral",
  },
  download: {
    icon: Download,
    label: "Tải về",
    bgColor: "bg-bronze/10",
    iconColor: "text-bronze",
  },
  video: {
    icon: Video,
    label: "Video",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
}

export function ResourceIcon({ type, className }: ResourceIconProps) {
  const config = typeConfig[type]
  const Icon = config.icon

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-lg",
        config.bgColor,
        className
      )}
      title={config.label}
    >
      <Icon className={cn("w-4 h-4", config.iconColor)} />
    </div>
  )
}
