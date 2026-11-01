import { ArrowDownRight, Sparkles } from "lucide-react"
import { homeContent } from "@/lib/home-content"
import { RoboHeader, RoboFooter } from "./robo-shell"
import { RoboMotion } from "./robo-motion"
import { HomeAiSolutions } from "./home-ai-solutions"
import { HomeSignup } from "./home-signup"
import { HomeResourcesAndAbout } from "./home-resources-and-about"

/** Simple homepage: hero → community / agency cards → email signup → free resources + about. */
export function EditorialHome({ locale }: { locale: string }) {
  const copy = homeContent[locale === "en" ? "en" : "vi"]
  return <div className="robolabs-home">
    <RoboHeader locale={locale} home />
    <section className="rl-hero hl-hero" aria-labelledby="rl-hero-title">
      <div className="rl-hero-dots" aria-hidden="true" />
      <div className="rl-hero-content rl-container">
        <p className="rl-status"><span />{copy.status}</p>
        <h1 id="rl-hero-title">{copy.title}<Sparkles className="rl-title-star" aria-hidden="true" /><span>{copy.accent}</span></h1>
        <p className="rl-hero-description">{copy.description}</p>
        <a className="rl-button" href="#solutions">{locale === "en" ? "Choose your path" : "Chọn con đường của bạn"}<ArrowDownRight size={18} aria-hidden="true" /></a>
      </div>
    </section>
    <HomeAiSolutions locale={locale} />
    <HomeSignup locale={locale} />
    <HomeResourcesAndAbout locale={locale} />
    <RoboFooter locale={locale} />
    <RoboMotion locale={locale} />
  </div>
}
