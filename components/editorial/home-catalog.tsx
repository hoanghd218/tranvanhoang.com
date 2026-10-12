import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Bot, Check, Sparkles, Workflow } from "lucide-react"
import { localizedPath } from "@/lib/editorial-content"
import { getLocalizedProducts } from "@/lib/products"
import { playbooks } from "@/lib/playbooks"

export function HomeCatalog({ locale }: { locale: string }) {
  const english = locale === "en"
  const products = getLocalizedProducts(locale)
  const skill = products.find(product => product.category === "skill")
  const apps = products.filter(product => product.category === "extension")

  return <>
    <section className="rl-section" id="skills" aria-labelledby="skills-title">
      <div className="rl-container">
        <div className="rl-section-head">
          <div>
            <span className="rl-tag">AI SKILLS</span>
            <h2 id="skills-title">{english ? "Give AI a new skill." : "Trao cho AI một kỹ năng mới."}</h2>
            <p>{english ? "Practical workflows. Ready to use with your AI agent." : "Workflow thực tế. Sẵn sàng dùng cùng AI agent của bạn."}</p>
          </div>
          <Link className="rl-card-link" href={localizedPath("/products?category=skill", locale)}>
            {english ? "Explore skills" : "Khám phá skills"}<ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        {skill && <article className="rl-card rl-skill-layout">
          <div className="rl-card-body">
            <span className="rl-tag"><Sparkles size={14} aria-hidden="true" />{english ? "FREE SKILL" : "SKILL MIỄN PHÍ"}</span>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
            <ul>{skill.features.map(feature => <li key={feature}><Check size={16} aria-hidden="true" />{feature}</li>)}</ul>
            <Link className="rl-card-link" href={localizedPath(skill.action?.href || `/products/${skill.slug}`, locale)}>
              {english ? "Get the free skill" : "Nhận skill miễn phí"}<ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="rl-skill-art" aria-hidden="true">
            <span className="rl-tag">COLORING BOOK WORKFLOW</span>
            <div><Bot size={36} /><span>Claude AI</span><ArrowRight size={20} /><Workflow size={36} /><span>AI Skill</span><ArrowRight size={20} /><BookOpen size={36} /></div>
            <p>IDEA → CREATE → COLORING BOOK</p>
          </div>
        </article>}
      </div>
    </section>

    <section className="rl-section" id="apps" aria-labelledby="apps-title">
      <div className="rl-container">
        <div className="rl-section-head">
          <div>
            <span className="rl-tag">APPS & EXTENSIONS</span>
            <h2 id="apps-title">{english ? "Less busywork. More building." : "Bớt thao tác. Thêm sáng tạo."}</h2>
            <p>{english ? "Tools built for the work you do every day." : "Những công cụ được xây từ công việc mỗi ngày."}</p>
          </div>
          <Link className="rl-card-link" href={localizedPath("/products", locale)}>
            {english ? "View all apps" : "Xem tất cả apps"}<ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="rl-grid">
          {apps.map(app => <article className="rl-card" key={app.slug}>
            <Link className="rl-card-image" href={localizedPath(`/products/${app.slug}`, locale)} tabIndex={-1} aria-hidden="true">
              {app.cover && <Image src={app.cover} alt="" width={768} height={512} sizes="(max-width: 700px) 100vw, 33vw" />}
            </Link>
            <div className="rl-card-body">
              <div className="rl-card-top">
                {app.icon && <Image src={app.icon} alt="" width={36} height={36} />}
                <span className="rl-tag">CHROME EXTENSION</span>
              </div>
              <h3>{app.name}</h3>
              <p>{app.description}</p>
              <Link className="rl-card-link" href={localizedPath(`/products/${app.slug}`, locale)}>
                {english ? "Explore app" : "Khám phá ứng dụng"}<ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="rl-section" id="books" aria-labelledby="books-title">
      <div className="rl-container">
        <div className="rl-section-head">
          <div>
            <span className="rl-tag">BOOKS & PLAYBOOKS</span>
            <h2 id="books-title">{english ? "Read. Build. Make it yours." : "Đọc. Thực hành. Biến thành của bạn."}</h2>
            <p>{english ? "Ideas become useful when you put them into practice." : "Kiến thức hữu ích nhất khi được đưa vào thực tế."}</p>
          </div>
          <Link className="rl-card-link" href={localizedPath("/playbooks", locale)}>
            {english ? "View books" : "Xem danh sách sách"}<ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        {playbooks.map(book => <article className="rl-card rl-book-layout" key={book.slug}>
          <Link className="rl-book-cover" href={localizedPath(`/playbooks/${book.slug}`, locale)} tabIndex={-1} aria-hidden="true">
            <Image src={book.pages[0].src} alt="" width={book.pages[0].width} height={book.pages[0].height} unoptimized sizes="(max-width: 700px) 70vw, 320px" />
          </Link>
          <div className="rl-card-body">
            <span className="rl-tag"><BookOpen size={14} aria-hidden="true" />{english ? "PRACTICAL PLAYBOOK" : "SỔ TAY THỰC HÀNH"}</span>
            <h3>{english && book.slug === "rea" ? "The REA Process" : book.title}</h3>
            <p>{english && book.slug === "rea" ? "From a reference app to a working version — a practical handbook in 6 steps and 10 pages." : book.description}</p>
            <p>{english ? `${book.pages.length} illustrated pages · Vietnamese edition` : `${book.pages.length} trang minh họa · Đọc trực tuyến`}</p>
            <Link className="rl-card-link" href={localizedPath(`/playbooks/${book.slug}`, locale)}>
              {english ? "Read the playbook" : "Mở sách và bắt đầu"}<ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </article>)}
      </div>
    </section>
  </>
}
