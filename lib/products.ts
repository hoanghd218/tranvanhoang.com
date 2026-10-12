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
    cover: "/images/products/rocketflow-robotic-cover.webp",
    installation: extensionInstallation, releaseNote: extensionReleaseNote,
  },
  {
    slug: "rocketlisting", name: "RocketListing", category: "extension", extensionCode: "rocketlisting",
    description: "Thu thập listing Amazon, xuất CSV/JSON và tải ảnh sản phẩm theo lô.",
    details: "Lấy dữ liệu từ trang sản phẩm, kết quả tìm kiếm và Best Sellers trên Amazon. Tổ chức kết quả, xem thông tin từng sản phẩm và xuất dữ liệu để phục vụ nghiên cứu listing.",
    features: ["Thu thập sản phẩm, tìm kiếm & Best Sellers", "Xuất dữ liệu CSV và JSON", "Tải ảnh listing, biến thể và A+", "Hàng đợi chạy trong nền"],
    status: "available", version: "1.0.3",
    icon: "/images/products/rocketlisting-icon.png", screenshot: "/images/products/rocketlisting-screenshot.png",
    cover: "/images/products/rocketlisting-robotic-cover.webp",
    installation: extensionInstallation, releaseNote: extensionReleaseNote,
  },
  {
    slug: "rocketspy", name: "KDSPY AI", category: "extension", extensionCode: "rocketspy",
    description: "Nghiên cứu ngách sách Amazon qua BSR, doanh số ước tính và mức độ cạnh tranh.",
    details: "Phân tích sách Kindle, sách in và audiobook từ tìm kiếm, Best Sellers hoặc trang sách. So sánh dữ liệu để khám phá ngách; doanh số và doanh thu được ước tính từ BSR, không phải số bán được Amazon xác nhận.",
    features: ["Phân tích Kindle, sách in & audiobook", "Ước tính doanh số và doanh thu từ BSR", "Đánh giá tiềm năng & cạnh tranh", "Xuất CSV và điều khiển qua MCP"],
    status: "available", version: "1.0.4",
    icon: "/images/products/rocketspy-icon.png", screenshot: "/images/products/rocketspy-screenshot.png",
    cover: "/images/products/rocketspy-robotic-cover.webp",
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

const englishCopy: Record<string, Pick<Product, "description" | "details" | "features">> = {
  rocketflow: {
    description: "Run batches of image and video prompts on Google Flow, ChatGPT, Grok and Gemini.",
    details: "Add prompts to a queue, choose a platform and follow each generation in your browser. RocketFlow uses your own accounts on the AI platforms.",
    features: ["Google Flow, ChatGPT, Grok & Gemini", "Image and video prompt queues", "Parallel runs and history management", "MCP control"],
  },
  rocketlisting: {
    description: "Collect Amazon listings, export CSV/JSON and download product images in batches.",
    details: "Collect data from Amazon product pages, search results and Best Sellers. Organize results, inspect individual products and export data for listing research.",
    features: ["Collect products, search results & Best Sellers", "Export CSV and JSON", "Download listing, variation and A+ images", "Background queue"],
  },
  rocketspy: {
    description: "Research Amazon book niches with BSR, estimated sales and competition data.",
    details: "Analyze Kindle, print books and audiobooks from search results, Best Sellers or book pages. Compare data to explore niches; sales and revenue are estimates based on BSR, not Amazon-confirmed sales.",
    features: ["Analyze Kindle, print books & audiobooks", "Estimate sales and revenue from BSR", "Evaluate potential & competition", "CSV export and MCP control"],
  },
  "coloring-book-skill": {
    description: "A Claude AI skill for creating coloring books to sell on Amazon KDP.",
    details: "A resource for people who want to create coloring books with Claude AI. Watch the tutorial and get the skill through Tony’s existing resource page.",
    features: ["Use with Claude AI", "Create coloring books", "Video tutorial"],
  },
}

export function getLocalizedProducts(locale = "en"): Product[] {
  if (locale !== "en") return products
  return products.map(product => ({ ...product, ...englishCopy[product.slug],
    ...(product.action && { action: { ...product.action, label: "Get the free skill" } }),
    ...(product.installation && { installation: [
      "Contact Tony to receive the extension package.",
      "Extract the package, open chrome://extensions and enable Developer mode.",
      "Choose Load unpacked, then select the folder containing manifest.json.",
      "Pin the extension to the Chrome toolbar and open it to get started.",
    ], releaseNote: "The current version works through December 31, 2026. Update to a new version after this date." }),
  }))
}

export function getLocalizedCategories(locale = "en") {
  const names = { skill: "AI Skills", software: "Software", extension: "Chrome Extensions", mobile: "Mobile Apps" }
  return productCategories.map(category => ({ ...category, name: locale === "en" ? names[category.id] : category.name }))
}

export function formatProductPrice(product: Product, locale = "en") {
  const english = locale === "en"
  if (product.extensionCode) {
    const plans = getExtensionPlans(product.extensionCode)
    if (!plans.length) return english ? "View plans" : "Xem gói sử dụng"
    const minimum = Math.min(...plans.map(plan => plan.listPrice))
    if (minimum === 0) return english ? "Free plan available" : "Có gói miễn phí"
    return `${english ? "From" : "Từ"} ${new Intl.NumberFormat(english ? "en-US" : "vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 0 }).format(minimum)}`
  }
  if (product.price === undefined) return english ? "View details" : "Xem thông tin"
  if (product.price === 0) return english ? "Free" : "Miễn phí"
  return new Intl.NumberFormat(english ? "en-US" : "vi-VN", { style: "currency", currency: product.currency || "VND", maximumFractionDigits: 0 }).format(product.price)
}
