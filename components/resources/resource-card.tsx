/**
 * Resource Card Component
 *
 * Displays a resource in either card view (full) or grid view (compact)
 */
"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Resource, ResourceType } from "@/types/resource"
import { ResourceIcon } from "./resource-icon"
import { GradientText } from "@/components/custom/gradient-text"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Play } from "lucide-react"

interface ResourceCardProps {
  resource: Resource
  viewMode: "card" | "grid"
  className?: string
}

export function ResourceCard({ resource, viewMode, className }: ResourceCardProps) {
  if (viewMode === "grid") {
    return <GridViewCard resource={resource} className={className} />
  }

  return <CardViewCard resource={resource} className={className} />
}

/**
 * Card View - Full metadata with hover effects
 */
function CardViewCard({ resource, className }: { resource: Resource; className?: string }) {
  return (
    <article className={cn("group h-full", className)}>
      <Link
        href={getResourceUrl(resource)}
        className="flex flex-col h-full bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-coral/50 hover:shadow-lg"
        target={resource.type === "article" ? "_self" : "_blank"}
        rel={resource.type !== "article" ? "noopener noreferrer" : undefined}
      >
        {/* Thumbnail */}
        <div className="aspect-video bg-gradient-to-br from-coral/10 to-bronze/10 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <ResourceIcon type={resource.type} className="w-12 h-12" />
          </div>

          {/* Type Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center gap-1.5">
              <ResourceIcon type={resource.type} className="w-3 h-3" />
              {getTypeLabel(resource.type)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          {/* Category */}
          <p className="text-xs text-coral font-medium mb-2">{getCategoryLabel(resource.category)}</p>

          {/* Title */}
          <h3 className="text-lg font-semibold mb-2 group-hover:text-coral transition-colors line-clamp-2">
            <GradientText>{resource.title}</GradientText>
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
            {resource.description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
            <span>{resource.date}</span>
            <span>{getMetaInfo(resource)}</span>
          </div>

          {/* Tags */}
          {resource.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {resource.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
              {resource.tags.length > 3 && (
                <span className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                  +{resource.tags.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Action Button */}
          <div className="mt-4 pt-4 border-t border-border/50">
            <Button
              variant="ghost"
              size="sm"
              className="w-full group-hover:bg-coral/10 group-hover:text-coral transition-colors"
            >
              {getActionLabel(resource.type)}
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </Link>
    </article>
  )
}

/**
 * Grid View - Compact card with essential info only
 */
function GridViewCard({ resource, className }: { resource: Resource; className?: string }) {
  return (
    <article className={cn("group h-full", className)}>
      <Link
        href={getResourceUrl(resource)}
        className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg transition-all duration-200 hover:border-coral hover:bg-card/80"
        target={resource.type === "article" ? "_self" : "_blank"}
        rel={resource.type !== "article" ? "noopener noreferrer" : undefined}
      >
        {/* Icon */}
        <ResourceIcon type={resource.type} className="w-10 h-10 shrink-0" />

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs text-coral font-medium">{getCategoryLabel(resource.category)}</span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">{resource.date}</span>
          </div>

          <h3 className="font-medium text-sm line-clamp-1 group-hover:text-coral transition-colors">
            {resource.title}
          </h3>

          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
            {resource.description}
          </p>
        </div>

        {/* Action Icon */}
        <div className="shrink-0">
          {resource.type === "download" ? (
            <Download className="w-4 h-4 text-muted-foreground group-hover:text-coral transition-colors" />
          ) : resource.type === "video" ? (
            <Play className="w-4 h-4 text-muted-foreground group-hover:text-coral transition-colors" />
          ) : (
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-coral transition-colors" />
          )}
        </div>
      </Link>
    </article>
  )
}

// Helper functions

function getResourceUrl(resource: Resource): string {
  switch (resource.type) {
    case "article":
      return resource.url
    case "download":
      return resource.downloadUrl
    case "video":
      return resource.videoUrl
  }
}

function getTypeLabel(type: ResourceType): string {
  const labels: Record<ResourceType, string> = {
    article: "Bài viết",
    download: "Tải về",
    video: "Video",
  }
  return labels[type]
}

function getActionLabel(type: ResourceType): string {
  const labels: Record<ResourceType, string> = {
    article: "Đọc bài viết",
    download: "Tải về",
    video: "Xem video",
  }
  return labels[type]
}

function getCategoryLabel(slug: string): string {
  const labels: Record<string, string> = {
    "ai-cho-nguoi-moi": "AI cho người mới",
    marketing: "Marketing",
    "content-creation": "Content Creation",
    "nang-cao-hieu-suat": "Nâng cao hiệu suất",
  }
  return labels[slug] || slug
}

function getMetaInfo(resource: Resource): string {
  switch (resource.type) {
    case "article":
      return resource.readingTime
    case "download":
      return `${resource.fileSize} • ${resource.fileFormat}`
    case "video":
      return resource.duration
  }
}
