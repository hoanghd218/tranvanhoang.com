/**
 * Resource Card Component
 *
 * Displays a resource in either card view (full) or grid view (compact).
 * Rocket AI: carbon card, one hairline, purple hairline + small glow on hover.
 */
"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Resource, ResourceType } from "@/types/resource"
import { ResourceIcon, resourceTypeIcons } from "./resource-icon"
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
 * Card View — full metadata.
 */
function CardViewCard({ resource, className }: { resource: Resource; className?: string }) {
  const TypeIcon = resourceTypeIcons[resource.type]

  return (
    <article className={cn("group h-full", className)}>
      <Link
        href={getResourceUrl(resource)}
        className="rk-card rk-card-interactive flex h-full flex-col p-[var(--space-5)]"
        target={resource.type === "article" ? "_self" : "_blank"}
        rel={resource.type !== "article" ? "noopener noreferrer" : undefined}
      >
        {/* Icon tile + type badge */}
        <div className="mb-[var(--space-5)] flex items-start justify-between gap-3">
          <ResourceIcon type={resource.type} />
          <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-hairline bg-surface-overlay px-2.5 py-1 text-[length:var(--size-caption)] text-text-secondary">
            <TypeIcon size={16} strokeWidth={1.75} />
            {getTypeLabel(resource.type)}
          </span>
        </div>

        {/* Category */}
        <p className="eyebrow mb-2">{getCategoryLabel(resource.category)}</p>

        {/* Title */}
        <h3 className="mb-2 line-clamp-2 text-[length:var(--size-h4)] font-semibold text-text-primary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] group-hover:text-text-accent">
          {resource.title}
        </h3>

        {/* Description */}
        <p className="mb-[var(--space-4)] line-clamp-2 flex-1 text-[length:var(--size-body-s)] text-text-secondary">
          {resource.description}
        </p>

        {/* Meta Info */}
        <div className="mb-3 flex items-center justify-between text-[length:var(--size-caption)] text-text-tertiary">
          <span>{resource.date}</span>
          <span>{getMetaInfo(resource)}</span>
        </div>

        {/* Tags */}
        {resource.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {resource.tags.slice(0, 3).map((tag) => (
              <span key={tag} className={tagClass}>
                {tag}
              </span>
            ))}
            {resource.tags.length > 3 && (
              <span className={tagClass}>+{resource.tags.length - 3}</span>
            )}
          </div>
        )}

        {/* Action */}
        <div className="mt-[var(--space-4)] border-t border-hairline pt-[var(--space-4)]">
          <Button variant="ghost" size="sm" className="w-full justify-between" asChild>
            <span>
              {getActionLabel(resource.type)}
              <ArrowRight size={16} strokeWidth={1.75} />
            </span>
          </Button>
        </div>
      </Link>
    </article>
  )
}

const tagClass =
  "rounded-[var(--radius-pill)] border border-hairline bg-surface-overlay px-2 py-0.5 text-[length:var(--size-caption)] text-text-secondary"

/**
 * Grid View — compact list row.
 */
function GridViewCard({ resource, className }: { resource: Resource; className?: string }) {
  const ActionIcon =
    resource.type === "download" ? Download : resource.type === "video" ? Play : ArrowRight

  return (
    <article className={cn("group h-full", className)}>
      <Link
        href={getResourceUrl(resource)}
        className="flex items-center gap-3 rounded-[var(--radius-md)] border border-hairline bg-surface-card p-3 transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:border-hairline-accent"
        target={resource.type === "article" ? "_self" : "_blank"}
        rel={resource.type !== "article" ? "noopener noreferrer" : undefined}
      >
        <ResourceIcon type={resource.type} size={20} className="h-10 w-10 shrink-0" />

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-2 text-[length:var(--size-caption)] text-text-tertiary">
            <span className="text-text-accent">{getCategoryLabel(resource.category)}</span>
            <span>·</span>
            <span>{resource.date}</span>
          </div>

          <h3 className="line-clamp-1 text-[length:var(--size-body-s)] font-medium text-text-primary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] group-hover:text-text-accent">
            {resource.title}
          </h3>

          <p className="mt-0.5 line-clamp-1 text-[length:var(--size-caption)] text-text-secondary">
            {resource.description}
          </p>
        </div>

        <ActionIcon
          size={16}
          strokeWidth={1.75}
          className="shrink-0 text-text-tertiary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] group-hover:text-text-accent"
        />
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
