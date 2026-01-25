import { Resource, ResourceCategory } from "@/types/resource"

/**
 * Sample resource data for demonstration
 * In production, this could come from MDX files, database, or CMS
 */
const sampleResources: Resource[] = [
  {
    type: "article",
    title: "Hướng dẫn sử dụng ChatGPT cho người mới",
    description: "Bắt đầu hành trình AI của bạn với những tips cơ bản về ChatGPT.",
    category: "ai-cho-nguoi-moi",
    tags: ["chatgpt", " beginners", "hướng dẫn"],
    date: "2026-01-15",
    readingTime: "5 phút",
    url: "/blog/ai-cho-nguoi-moi/huong-dan-su-dung-chatgpt",
  },
  {
    type: "article",
    title: "10 Prompts hiệu quả cho Marketing",
    description: "Khám phá những prompt mạnh mẽ để tăng năng suất marketing.",
    category: "marketing",
    tags: ["prompt", "marketing", "ai"],
    date: "2026-01-10",
    readingTime: "8 phút",
    url: "/blog/marketing/10-prompts-hieu-qua",
  },
  {
    type: "download",
    title: "AI Marketing Checklist 2026",
    description: "Download checklist đầy đủ để áp dụng AI vào marketing.",
    category: "marketing",
    tags: ["checklist", "marketing", "download"],
    date: "2026-01-08",
    fileSize: "2.1 MB",
    fileFormat: "PDF",
    downloadUrl: "/downloads/ai-marketing-checklist-2026.pdf",
  },
  {
    type: "video",
    title: "Workshop: AI Tools cho Content Creator",
    description: "Video recording của workshop về AI tools cho người tạo nội dung.",
    category: "content-creation",
    tags: ["workshop", "video", "content"],
    date: "2026-01-05",
    duration: "45:30",
    videoUrl: "/videos/ai-tools-content-creator",
  },
  {
    type: "article",
    title: "Tự động hóa công việc với AI",
    description: "Cách sử dụng AI để tự động hóa những công việc lặp đi lặp lại.",
    category: "nang-cao-hieu-suat",
    tags: ["automation", "productivity", "advanced"],
    date: "2026-01-03",
    readingTime: "12 phút",
    url: "/blog/nang-cao-hieu-suat/automation-voi-ai",
  },
  {
    type: "download",
    title: "Prompt Templates Bundle",
    description: "Bộ template prompts cho nhiều mục đích khác nhau.",
    category: "ai-cho-nguoi-moi",
    tags: ["prompt", "template", "download"],
    date: "2025-12-28",
    fileSize: "1.5 MB",
    fileFormat: "ZIP",
    downloadUrl: "/downloads/prompt-templates-bundle.zip",
  },
  {
    type: "video",
    title: "Review: Các AI Tools mới nhất 2025",
    description: "Đánh giá chi tiết những AI tools mới ra mắt năm 2025.",
    category: "ai-cho-nguoi-moi",
    tags: ["review", "tools", "2025"],
    date: "2025-12-25",
    duration: "32:15",
    videoUrl: "/videos/ai-tools-review-2025",
  },
  {
    type: "article",
    title: "AI trong phân tích dữ liệu",
    description: "Ứng dụng AI để phân tích và可视化 dữ liệu hiệu quả.",
    category: "nang-cao-hieu-suat",
    tags: ["data", "analysis", "advanced"],
    date: "2025-12-20",
    readingTime: "15 phút",
    url: "/blog/nang-cao-hieu-suat/ai-trong-phan-tich-du-lieu",
  },
  {
    type: "download",
    title: "AI Glossary - Thuật ngữ AI",
    description: "Từ điển thuật ngữ AI thông dụng cho người mới.",
    category: "ai-cho-nguoi-moi",
    tags: ["glossary", "terms", "download"],
    date: "2025-12-15",
    fileSize: "800 KB",
    fileFormat: "PDF",
    downloadUrl: "/downloads/ai-glossary.pdf",
  },
  {
    type: "article",
    title: "Xây dựng AI Assistant cá nhân",
    description: "Hướng dẫn tạo AI assistant phục vụ nhu cầu riêng của bạn.",
    category: "nang-cao-hieu-suat",
    tags: ["assistant", "custom", "advanced"],
    date: "2025-12-10",
    readingTime: "20 phút",
    url: "/blog/nang-cao-hieu-suat/ai-assistant-ca-nhan",
  },
]

/**
 * Get all resources
 */
export function getAllResources(): Resource[] {
  return sampleResources
}

/**
 * Get resources filtered by category
 */
export function getResourcesByCategory(category: string): Resource[] {
  if (category === "all" || !category) {
    return sampleResources
  }
  return sampleResources.filter((r) => r.category === category)
}

/**
 * Get all unique categories with counts
 */
export function getResourceCategories(): ResourceCategory[] {
  const categoryCounts: Record<string, number> = {}

  sampleResources.forEach((resource) => {
    categoryCounts[resource.category] = (categoryCounts[resource.category] || 0) + 1
  })

  return Object.entries(categoryCounts)
    .map(([slug, count]) => ({
      name: formatCategoryName(slug),
      slug,
      count,
    }))
    .sort((a, b) => b.count - a.count)
}

/**
 * Get all unique tags with counts
 */
export function getTagCounts(): Record<string, number> {
  const tagCounts: Record<string, number> = {}

  sampleResources.forEach((resource) => {
    resource.tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })

  return tagCounts
}

/**
 * Format category slug to display name
 */
function formatCategoryName(slug: string): string {
  const categoryNames: Record<string, string> = {
    "ai-cho-nguoi-moi": "AI cho người mới",
    marketing: "Marketing",
    "content-creation": "Content Creation",
    "nang-cao-hieu-suat": "Nâng cao hiệu suất",
  }

  return categoryNames[slug] || slug
}

/**
 * Get popular tags (top 10)
 */
export function getPopularTags(): { tag: string; count: number }[] {
  const tagCounts = getTagCounts()
  return Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([tag, count]) => ({ tag, count }))
}
