import { getExtensionPlans, type ExtensionCode } from "./extension-checkout"

export const productCategories = [
  { id: "skill", name: "AI Skills", description: "Kỹ năng và workflow dành cho AI coding agents.", icon: "skill" },
  { id: "software", name: "Phần mềm", description: "Công cụ hỗ trợ công việc và sáng tạo.", icon: "software" },
  { id: "extension", name: "Chrome Extensions", description: "Tiện ích nhỏ, ngay trong trình duyệt.", icon: "extension" },
  { id: "mobile", name: "Ứng dụng di động", description: "Trải nghiệm tiện dụng trên điện thoại.", icon: "mobile" },
] as const

export type ProductCategory = typeof productCategories[number]["id"]
export type Product = {
  slug: string
  name: string
  category: ProductCategory
  description: string
  details: string
  features: string[]
  price?: number
  currency?: "VND" | "USD"
  action?: { label: string; href: string }
  videoUrl?: string
  status: "available" | "coming-soon"
  featured?: boolean
  extensionCode?: ExtensionCode
  icon?: string
  cover?: string
  screenshot?: string
  version?: string
  installation?: string[]
  releaseNote?: string
}

// Only publish verified products. Add future software, extensions and mobile apps here.
// A paid product can supply a price/currency and an external checkout URL in action.href.
const extensionInstallation = [
  "Liên hệ Tony để nhận bản cài extension.",
  "Giải nén bản cài, mở chrome://extensions và bật Chế độ nhà phát triển.",
  "Chọn Tải tiện ích đã giải nén (Load unpacked), rồi chọn thư mục chứa manifest.json.",
  "Ghim extension trên thanh công cụ Chrome và mở để bắt đầu sử dụng.",
]
const extensionReleaseNote = "Bản hiện tại hoạt động đến hết ngày 31/12/2026. Cần cập nhật phiên bản mới sau thời điểm này."

export const products: Product[] = [
  {
    slug: "rocketflow", name: "RocketFlow", category: "extension", extensionCode: "rocketflow",
    description: "Chạy hàng loạt prompt tạo ảnh và video trên Google Flow, ChatGPT, Grok và Gemini.",
    details: "Đưa danh sách prompt vào một hàng đợi, chọn nền tảng và theo dõi từng lượt tạo ngay trong trình duyệt. RocketFlow sử dụng tài khoản của bạn trên các nền tảng AI.",
    features: ["Google Flow, ChatGPT, Grok & Gemini", "Hàng đợi prompt ảnh và video", "Chạy song song và quản lý lịch sử", "Điều khiển qua MCP"],
    status: "available", featured: true, version: "1.0.3",
    icon: "/images/products/rocketflow-icon.png", screenshot: "/images/products/rocketflow-screenshot.png",
    cover: "/images/products/rocketflow-cover.webp",
    installation: extensionInstallation, releaseNote: extensionReleaseNote,
  },
  {
    slug: "rocketlisting", name: "RocketListing", category: "extension", extensionCode: "rocketlisting",
    description: "Thu thập listing Amazon, xuất CSV/JSON và tải ảnh sản phẩm theo lô.",
    details: "Lấy dữ liệu từ trang sản phẩm, kết quả tìm kiếm và Best Sellers trên Amazon. Tổ chức kết quả, xem thông tin từng sản phẩm và xuất dữ liệu để phục vụ nghiên cứu listing.",
    features: ["Thu thập sản phẩm, tìm kiếm & Best Sellers", "Xuất dữ liệu CSV và JSON", "Tải ảnh listing, biến thể và A+", "Hàng đợi chạy trong nền"],
    status: "available", version: "1.0.3",
    icon: "/images/products/rocketlisting-icon.png", screenshot: "/images/products/rocketlisting-screenshot.png",
    cover: "/images/products/rocketlisting-cover.webp",
    installation: extensionInstallation, releaseNote: extensionReleaseNote,
  },
  {
    slug: "rocketspy", name: "KDSPY AI", category: "extension", extensionCode: "rocketspy",
    description: "Nghiên cứu ngách sách Amazon qua BSR, doanh số ước tính và mức độ cạnh tranh.",
    details: "Phân tích sách Kindle, sách in và audiobook từ tìm kiếm, Best Sellers hoặc trang sách. So sánh dữ liệu để khám phá ngách; doanh số và doanh thu được ước tính từ BSR, không phải số bán được Amazon xác nhận.",
    features: ["Phân tích Kindle, sách in & audiobook", "Ước tính doanh số và doanh thu từ BSR", "Đánh giá tiềm năng & cạnh tranh", "Xuất CSV và điều khiển qua MCP"],
    status: "available", version: "1.0.4",
    icon: "/images/products/rocketspy-icon.png", screenshot: "/images/products/rocketspy-screenshot.png",
    cover: "/images/products/rocketspy-cover.webp",
    installation: extensionInstallation, releaseNote: extensionReleaseNote,
  },
  {
    slug: "coloring-book-skill",
    name: "Coloring Book AI Skill",
    category: "skill",
    description: "Skill Claude AI tạo sách coloring book để bán trên Amazon KDP.",
    details: "Tài nguyên dành cho người muốn dùng Claude AI để tạo sách tô màu. Xem video hướng dẫn và nhận skill qua trang tài nguyên hiện có của Tony.",
    features: ["Sử dụng cùng Claude AI", "Tạo sách coloring book", "Hướng dẫn qua video"],
    price: 0,
    currency: "VND",
    action: { label: "Nhận skill miễn phí", href: "/coloring-book-kdp" },
    videoUrl: "https://www.youtube.com/watch?v=gnzpnZ6zWqk",
    status: "available",
    featured: false,
  },
]

export function formatProductPrice(product: Product) {
  if (product.extensionCode) {
    const plans = getExtensionPlans(product.extensionCode)
    if (!plans.length) return "Xem gói sử dụng"
    const minimum = Math.min(...plans.map(plan => plan.listPrice))
    if (minimum === 0) return "Có gói miễn phí"
    return `Từ ${new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 0 }).format(minimum)}`
  }
  if (product.price === undefined) return "Xem thông tin"
  if (product.price === 0) return "Miễn phí"
  return new Intl.NumberFormat("vi-VN", { style: "currency", currency: product.currency || "VND", maximumFractionDigits: 0 }).format(product.price)
}
