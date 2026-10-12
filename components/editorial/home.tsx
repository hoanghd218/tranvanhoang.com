import { ArrowDownRight, Sparkles } from "lucide-react"
import { homeContent } from "@/lib/home-content"
import { HomeCatalog } from "./home-catalog"
import { RoboHeader, RoboFooter } from "./robo-shell"
import { RoboMotion } from "./robo-motion"
import { HomeServices, HomeSolutions } from "./home-services"
import { HomeProcess } from "./home-process"

export function EditorialHome({ locale }: { locale: string }) {
  const copy = homeContent[locale === "en" ? "en" : "vi"]
  return <div className="robolabs-home">
    <RoboHeader locale={locale} home />
    <section className="rl-hero" aria-labelledby="rl-hero-title">
      <div className="rl-hero-dots" aria-hidden="true" />
      <div className="rl-hero-content rl-container">
        <p className="rl-status"><span />{copy.status}</p>
        <h1 id="rl-hero-title">{copy.title}<Sparkles className="rl-title-star" aria-hidden="true" /><span>{copy.accent}</span></h1>
        <p className="rl-hero-description">{copy.description}</p>
        <a className="rl-button" href="#skills">{copy.explore}<ArrowDownRight size={18} aria-hidden="true" /></a>
        <div className="rl-technologies"><p>{copy.technology}</p><div><span>✳ Claude</span><span>OpenAI</span><span className="rl-tech-flow">n8n</span><span>Gemini</span><span>Next.js</span></div></div>
      </div>
    </section>
    <HomeServices locale={locale} />
    <HomeProcess locale={locale} />
    <HomeCatalog locale={locale} />
    <HomeSolutions locale={locale} />
    <section className="rl-section rl-container rl-faq" aria-labelledby="rl-faq-title">
      <div className="rl-section-head"><span className="rl-tag">{copy.faqTag}</span><h2 id="rl-faq-title">{copy.faqTitle}</h2></div>
      <div>{copy.faqs.map(item => <details key={item.q}><summary>{item.q}<span aria-hidden="true">+</span></summary><p>{item.a}</p></details>)}</div>
    </section>
    <RoboFooter locale={locale} />
    <RoboMotion />
  </div>
}
