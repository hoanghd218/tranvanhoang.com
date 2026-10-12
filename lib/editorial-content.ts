export const editorialContent = {
  contactHref: "https://www.linkedin.com/in/hoanghd218/",
  navigation: [
    { label: "Sản phẩm", href: "/products" },
    { label: "Bài viết", href: "/blog" },
    { label: "Hoạt động", href: "/life" },
    { label: "Về Tony", href: "/about" },
  ],
  hero: {
    eyebrow: "Tony Hoang · Systems Architect",
    title: ["Kiến trúc sư", "thiết kế", "hệ thống."],
    description: "Tôi thiết kế hệ thống kết hợp con người, công nghệ và AI để nối hiện tại với trạng thái mong muốn.",
    artwork: {
      src: "/images/editorial/hero-bridge.webp",
      alt: "Hoàng hiện tại ở đầu cầu nhìn về chính Hoàng trong tương lai ở bờ bên kia. Cây cầu được xây từ các mô-đun hệ thống, kết nối công nghệ và mạng lưới AI.",
      start: "Hoàng hiện tại", method: "Hệ thống · Công nghệ · AI", destination: "Hoàng hướng đến",
    },
  },
  sections: {
    articlesEyebrow: "Góc chia sẻ", articlesTitle: "Ghi chép & công nghệ.",
    allArticles: "Tất cả bài viết", aboutEyebrow: "Về Tony Hoang",
    aboutTitle: "Thiết kế từ đích đến.",
    aboutDescription: "Tôi bắt đầu từ con người và trạng thái họ muốn hướng đến, rồi thiết kế hệ thống, quy trình và ứng dụng AI để kết nối với thực tế. Những sản phẩm và ghi chép ở đây là một phần của hành trình đó.",
    categoryLabel: "Khám phá", heroNote: "Con người · Hệ thống · Tự do", articleLink: "Đọc bài viết",
  },
  footer: {
    eyebrow: "Giữ kết nối", title: "Hẹn gặp ở ý tưởng tiếp theo.",
    description: "Theo dõi những sản phẩm, bài viết và hoạt động mới của Tony.",
    cta: "Kết nối với Tony", note: "Tony Hoang",
  },
  socialLinks: [
    { label: "Facebook", href: "https://www.facebook.com/hoanghd218/" },
    { label: "YouTube", href: "https://www.youtube.com/@tony-hoang-ai-automation" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/hoanghd218/" },
  ],
}
export type EditorialArticle = {
  id: string; category: string; title: string; excerpt: string; image: string;
  href: string; date?: string; readingTime?: string
}

export function localizedPath(path: string, locale = "en") {
  if (!path.startsWith("/") || path.startsWith("//")) return path
  const translated = locale === "en"
    ? path.replace(/^\/tai-nguyen(?=[?#/]|$)/, "/resources").replace(/^\/qua(?=[?#/]|$)/, "/gifts")
    : path.replace(/^\/resources(?=[?#/]|$)/, "/tai-nguyen").replace(/^\/gifts(?=[?#/]|$)/, "/qua")
  return locale === "vi" ? `/vi${translated === "/" ? "" : translated}` : translated
}
