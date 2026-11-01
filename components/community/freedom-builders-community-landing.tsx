import { ArrowUpRight, CalendarDays, Check, Coins, Compass, Crown, Plus, Star, Users } from "lucide-react"
import { communityJoinHref, getCommunityContent, type CommunityBenefitIcon } from "@/lib/freedom-builders-community-content"
import { CommunityFeatureVisual } from "./community-feature-visuals"

const benefitIcons: Record<CommunityBenefitIcon, typeof Compass> = { compass: Compass, coins: Coins, calendar: CalendarDays, crown: Crown }

/** External join button (Whop). Every section ends with the same single action, like the reference page. */
function JoinButton({ label }: { label: string }) {
  return <a className="rl-button cm-join" href={communityJoinHref} target="_blank" rel="sponsored noopener noreferrer">{label}<ArrowUpRight size={18} aria-hidden="true" /></a>
}

/**
 * Freedom Builders landing page: hero → 4 alternating feature blocks → "everything you need"
 * benefit grid → summary band → final call to action. Styled with the site's RoboLabs theme.
 */
export function FreedomBuildersCommunityLanding({ locale }: { locale: string }) {
  const english = locale === "en"
  const copy = getCommunityContent(locale)
  return <>
    <section className="rl-hero cm-hero" aria-labelledby="community-title">
      <div className="rl-hero-dots" aria-hidden="true" />
      <div className="rl-hero-content rl-container">
        <p className="rl-status"><span />{copy.hero.tag}</p>
        <h1 id="community-title">{copy.hero.title}<span>{copy.hero.accent}</span></h1>
        <p className="rl-hero-description">{copy.hero.description}</p>
        <p className="cm-proof"><Users size={16} aria-hidden="true" />{copy.hero.proof}<span aria-hidden="true">·</span><Star size={15} aria-hidden="true" />{copy.rating}</p>
        <JoinButton label={copy.join} />
        <p className="cm-note">{copy.hero.note}</p>
      </div>
    </section>

    <section className="rl-container cm-features" aria-label={english ? "What's inside" : "Bên trong cộng đồng"}>
      {copy.features.map((feature, index) => <article className={`cm-feature ${index % 2 ? "cm-feature--reverse" : ""}`} key={feature.visual} data-reveal>
        <div className="cm-feature-copy">
          <span className="rl-tag">{feature.tag}</span>
          <h2>{feature.title}</h2>
          <p>{feature.text}</p>
          <ul>{feature.bullets.map(bullet => <li key={bullet}><Check size={17} aria-hidden="true" />{bullet}</li>)}</ul>
          <JoinButton label={copy.join} />
        </div>
        <CommunityFeatureVisual visual={feature.visual} english={english} />
      </article>)}
    </section>

    <section className="rl-section rl-container" aria-labelledby="community-everything">
      <h2 className="cm-everything" id="community-everything" data-reveal><Plus size={30} aria-hidden="true" />{copy.everythingTitle}</h2>
      <div className="cm-benefits">
        {copy.benefits.map(benefit => {
          const Icon = benefitIcons[benefit.icon]
          return <article className="rl-card cm-benefit" key={benefit.title}>
            <div className="rl-card-body">
              <div className="rl-benefit-icon cm-benefit-icon" aria-hidden="true"><Icon size={34} strokeWidth={1.4} /></div>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
              <ul>{benefit.bullets.map(bullet => <li key={bullet}><Check size={16} aria-hidden="true" />{bullet}</li>)}</ul>
              <JoinButton label={copy.join} />
            </div>
          </article>
        })}
      </div>
    </section>

    <section className="rl-container cm-summary" aria-labelledby="community-summary" data-reveal>
      <h2 id="community-summary">{copy.summary.title}</h2>
      <ul>{copy.summary.items.map(item => <li key={item}><Check size={18} aria-hidden="true" />{item}</li>)}</ul>
      <p className="cm-proof"><Star size={15} aria-hidden="true" />{copy.rating}</p>
      <JoinButton label={copy.join} />
    </section>

    <section className="rl-section rl-container cm-final" aria-labelledby="community-final" data-reveal>
      <h2 id="community-final">{copy.final.title}<br /><span className="rl-orange">{copy.final.accent}</span></h2>
      <p>{copy.final.text}</p>
      <JoinButton label={copy.join} />
    </section>
  </>
}
