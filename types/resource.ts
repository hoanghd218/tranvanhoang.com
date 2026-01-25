/**
 * Resource Types
 *
 * Type definitions for the resources page.
 * Supports three types: article, download, video
 */

export type ResourceType = "article" | "download" | "video"

export interface ResourceMetadata {
  title: string
  description: string
  category: string
  tags: string[]
  date: string
  thumbnail?: string
}

export interface ArticleResource extends ResourceMetadata {
  type: "article"
  readingTime: string
  url: string
}

export interface DownloadResource extends ResourceMetadata {
  type: "download"
  fileSize: string
  fileFormat: string
  downloadUrl: string
}

export interface VideoResource extends ResourceMetadata {
  type: "video"
  duration: string
  videoUrl: string
}

export type Resource = ArticleResource | DownloadResource | VideoResource

export interface ResourceCategory {
  name: string
  slug: string
  count: number
}
