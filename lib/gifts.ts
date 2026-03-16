import { Gift } from "@/types/gift"

/**
 * Gift data for the /qua claim page
 * Replace driveUrl values with actual Google Drive links
 */
export const gifts: Gift[] = [
  {
    id: "ai-marketing",
    title: "AI Marketing Automation",
    description: "Bộ tài liệu AI Marketing: chiến lược, content, ads, email — giúp bạn tự động hoá marketing hiệu quả.",
    icon: "📈",
    driveUrl: "https://drive.google.com/drive/folders/placeholder-ai-marketing",
    category: "marketing",
  },
  {
    id: "ai-landing-page",
    title: "AI Tạo Landing Page Chuẩn Sale",
    description: "Hướng dẫn dùng AI để tạo landing page chuyển đổi cao — từ copywriting đến layout chuẩn sale.",
    icon: "🚀",
    driveUrl: "https://drive.google.com/drive/folders/placeholder-ai-landing-page",
    category: "marketing",
  },
  {
    id: "ai-openclaw",
    title: "AI OpenClaw",
    description: "Tài liệu hướng dẫn sử dụng OpenClaw — công cụ AI mạnh mẽ cho tự động hoá công việc.",
    icon: "🤖",
    driveUrl: "https://drive.google.com/drive/folders/placeholder-ai-openclaw",
    category: "ai-tools",
  },
  {
    id: "ai-claude-code",
    title: "AI Claude Code",
    description: "Prompts và workflow dùng Claude Code để viết code, debug, và xây dựng sản phẩm nhanh chóng.",
    icon: "💻",
    driveUrl: "https://drive.google.com/drive/folders/placeholder-ai-claude-code",
    category: "coding",
  },
  {
    id: "claude-marketing-skill",
    title: "Bộ Claude Skill Tự Vận Hành Marketing",
    description: "Bộ skill giúp Claude tự động vận hành marketing: lên kế hoạch, viết content, phân tích và tối ưu chiến dịch.",
    icon: "⚡",
    driveUrl: "https://github.com/zubair-trabzada/ai-marketing-claude",
    category: "marketing",
  },
  {
    id: "kdp-coloring-book-prompts",
    title: "342 Prompts Tạo Sách Tô Màu Amazon KDP",
    description: "Bộ 342 super prompts dùng ngay để tạo sách tô màu cho người lớn trên Amazon KDP — chỉ cần paste prompt và nhận đầy đủ tiêu đề, mô tả, keywords, cover và các trang minh hoạ.",
    icon: "🎨",
    driveUrl: "https://docs.google.com/spreadsheets/d/1DTEd-AGaovyxlAHmVT7AfnpqqclLmiTwxnAZNnw2Ls4/edit?gid=0#gid=0",
    category: "ai-tools",
  },
]

/**
 * Get all gifts
 */
export function getAllGifts(): Gift[] {
  return gifts
}
