export type NavItem = {
  title: string
  href: string
  description?: string
  children?: NavItem[]
}

export const mainNavItems: NavItem[] = [
  {
    title: "Về tôi",
    href: "/about",
  },
  {
    title: "Học AI",
    href: "/learn-ai",
    children: [
      { title: "AI cho người mới", href: "/learn-ai/ai-for-beginners", description: "Bắt đầu từ con số 0" },
      { title: "AI cho Marketing", href: "/learn-ai/ai-for-marketing", description: "Áp dụng AI vào marketing" },
      { title: "AI cho công việc", href: "/learn-ai/ai-for-work", description: "Tăng năng suất công việc" },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Tài nguyên",
    href: "/tai-nguyen",
  },
  {
    title: "Cuộc sống",
    href: "/life",
  },
]

export const ctaItem: NavItem = {
  title: "Nhận quà miễn phí",
  href: "/free-gift",
}

export const footerNavItems: {
  brand: NavItem
  quickLinks: NavItem[]
  resources: NavItem[]
  connect: NavItem[]
} = {
  brand: {
    title: "Hoàng",
    href: "/",
    description: "Dạy AI cho người mới bắt đầu",
  },
  quickLinks: [
    { title: "Về tôi", href: "/about" },
    { title: "Học AI", href: "/learn-ai" },
    { title: "Blog", href: "/blog" },
    { title: "Tài nguyên", href: "/tai-nguyen" },
  ],
  resources: [
    { title: "Free Gift", href: "/free-gift" },
    { title: "Cuộc sống", href: "/life" },
    { title: "Newsletter", href: "/newsletter" },
    { title: "Liên hệ", href: "/contact" },
  ],
  connect: [
    { title: "Email", href: "mailto:hoang@example.com" },
    { title: "Facebook", href: "https://www.facebook.com/hoanghd218/" },
    { title: "LinkedIn", href: "https://www.linkedin.com/in/hoanghd218/" },
    { title: "YouTube", href: "https://www.youtube.com/@tony-hoang-ai-automation" },
  ],
}
