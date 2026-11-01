import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, BookOpen, Gift, NotebookPen, Sparkles } from "lucide-react"
import { editorialContent, localizedPath } from "@/lib/editorial-content"

/** Free resources grid + short "about me" block that close the homepage before the footer. */
export function HomeResourcesAndAbout({ locale }: { locale: string }) {
  const en = locale === "en"
  const path = (href: string) => localizedPath(href, locale)
  const resources = [
    { icon: Sparkles, tag: en ? "FREE AI SKILL" : "AI SKILL MIỄN PHÍ", title: "Coloring Book AI Skill", text: en ? "A Claude AI skill for creating coloring books to sell on Amazon KDP." : "Skill Claude AI tạo sách tô màu để bán trên Amazon KDP.", href: "/coloring-book-kdp" },
    { icon: BookOpen, tag: en ? "PLAYBOOK" : "SỔ TAY", title: en ? "The REA Process" : "Quy trình REA", text: en ? "From a reference app to a working version, in 10 illustrated pages." : "Từ app mẫu đến bản chạy được, gói gọn trong 10 trang minh hoạ.", href: "/playbooks/rea" },
    { icon: Gift, tag: en ? "GIFTS" : "QUÀ TẶNG", title: en ? "Free AI gifts" : "Quà tặng AI", text: en ? "Prompt packs, Claude skills and guides for marketing and content." : "Bộ prompt, Claude skill và tài liệu cho marketing, nội dung.", href: "/qua" },
    { icon: NotebookPen, tag: en ? "WRITING" : "BÀI VIẾT", title: en ? "Notes & articles" : "Ghi chép & bài viết", text: en ? "Practical lessons from building with AI every day." : "Bài học thực tế từ việc xây dựng cùng AI mỗi ngày.", href: "/blog" },
  ]
  return <>
    <section className="rl-section rl-container" id="resources" aria-labelledby="resources-title">
      <div className="rl-section-head" data-reveal>
        <div>
          <span className="rl-tag">{en ? "Free resources" : "Tài nguyên miễn phí"}</span>
          <h2 id="resources-title">{en ? "Learn and build, for free." : "Học và thực hành, miễn phí."}</h2>
        </div>
        <Link className="rl-card-link" href={path("/products")}>{en ? "All products" : "Tất cả sản phẩm"}<ArrowRight size={17} aria-hidden="true" /></Link>
      </div>
      <div className="hl-resources">
        {resources.map(({ icon: Icon, ...item }) => <Link className="rl-card hl-resource" href={path(item.href)} key={item.href}>
          <span className="hl-resource-icon" aria-hidden="true"><Icon size={22} strokeWidth={1.5} /></span>
          <span className="rl-tag">{item.tag}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <span className="rl-card-link">{en ? "Open" : "Mở ngay"}<ArrowRight size={16} aria-hidden="true" /></span>
        </Link>)}
      </div>
    </section>

    <section className="rl-section rl-container" id="about" aria-labelledby="about-title">
      <div className="hl-about" data-reveal>
        <div className="hl-about-photo"><Image src="/hoang-profile.webp" alt="Tony Hoang" width={640} height={640} sizes="(max-width: 760px) 100vw, 420px" /></div>
        <div>
          <span className="rl-tag">{en ? "About me" : "Về tôi"}</span>
          <h2 id="about-title">{en ? "Hi, I'm Tony Hoang." : "Xin chào, tôi là Tony Hoang."}</h2>
          <p>{en
            ? "I'm a systems architect. I start from where you are and where you want to be, then combine people, processes, technology and AI into a way of working that fits."
            : "Tôi là kiến trúc sư thiết kế hệ thống. Tôi bắt đầu từ hiện trạng và đích đến, kết hợp con người, quy trình, công nghệ và AI để xây dựng cách vận hành phù hợp."}</p>
          <div className="hl-about-actions">
            <Link className="rl-button" href={path("/about")}>{en ? "More about me" : "Tìm hiểu thêm về tôi"}<ArrowUpRight size={18} aria-hidden="true" /></Link>
            <Link className="rl-card-link" href={path("/life")}>{en ? "My journey" : "Hành trình của tôi"}<ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <nav className="hl-socials" aria-label={en ? "Social links" : "Mạng xã hội"}>
            {editorialContent.socialLinks.map(item => <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">{item.label}<ArrowUpRight size={14} aria-hidden="true" /></a>)}
          </nav>
        </div>
      </div>
    </section>
  </>
}
