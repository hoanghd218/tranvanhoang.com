import { COURSE_SLUG, moduleSummaries } from "@/lib/course-playbook/course"
import type { ModuleSummary } from "@/lib/course-playbook/types"
import { localizedPath } from "@/lib/editorial-content"

/** Đường dẫn (đã theo ngôn ngữ) của trang tổng hoặc một module: /playbooks/ai-mobile-app[/module-04] (+ /vi). */
export function coursePath(locale: string, moduleSlug?: string): string {
  return localizedPath(`/playbooks/${COURSE_SLUG}${moduleSlug ? `/${moduleSlug}` : ""}`, locale)
}

/** Module liền trước và liền sau trong 7 module. Slug lạ (ví dụ "fixture") thì không có. */
export function getNeighbours(slug: string): { prev?: ModuleSummary; next?: ModuleSummary } {
  const index = moduleSummaries.findIndex((module) => module.slug === slug)
  if (index < 0) return {}
  return { prev: moduleSummaries[index - 1], next: moduleSummaries[index + 1] }
}

/** Thông tin module kế tiếp mà ô "cổng quyết định" (checklist id "gate") cần để hiện nút đi tiếp. */
export type NextModuleLink = { number: string; title: string; href: string; ready: boolean }

/** Ngữ cảnh truyền xuống mọi khối: module nào (để đặt khoá lưu), module kế tiếp là gì. */
export type RenderContext = { moduleSlug: string; next?: NextModuleLink }

export function buildRenderContext(moduleSlug: string, locale: string): RenderContext {
  const next = getNeighbours(moduleSlug).next
  return {
    moduleSlug,
    next: next && { number: next.number, title: next.title, href: coursePath(locale, next.slug), ready: next.status === "ready" },
  }
}
