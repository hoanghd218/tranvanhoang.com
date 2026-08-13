import Image from "next/image"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { Container, Section } from "@/components/custom/container"
import { GradientText } from "@/components/custom/gradient-text"
import { PersonSchema } from "@/components/seo/person-schema"
import {
  Check,
  Mail,
  MapPin,
  Calendar,
  Heart,
  BookOpen,
  Lightbulb,
  type LucideIcon,
} from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "about" })
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  }
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "about" })

  const stats = [
    { value: t("stat1Value"), label: t("stat1Label") },
    { value: t("stat2Value"), label: t("stat2Label") },
    { value: t("stat3Value"), label: t("stat3Label") },
    { value: t("stat4Value"), label: t("stat4Label") },
  ]

  const values: { icon: LucideIcon; title: string; desc: string }[] = [
    { icon: Heart, title: t("value1Title"), desc: t("value1Desc") },
    { icon: BookOpen, title: t("value2Title"), desc: t("value2Desc") },
    { icon: Lightbulb, title: t("value3Title"), desc: t("value3Desc") },
    { icon: Check, title: t("value4Title"), desc: t("value4Desc") },
  ]

  const info: { icon: LucideIcon; label: string }[] = [
    { icon: MapPin, label: t("infoLocation") },
    { icon: Calendar, label: t("infoTeachingSince") },
    { icon: Mail, label: t("infoCollaboration") },
  ]

  return (
    <>
      {/* JSON-LD Structured Data */}
      <PersonSchema />

      {/* Hero — the one 42° field on this screen */}
      <Section className="rk-field rk-field-soft">
        <Container>
          <div className="max-w-4xl">
            {/* Portrait at --radius-lg with a hairline */}
            <div className="relative mb-[var(--space-6)] h-32 w-32 overflow-hidden rounded-[var(--radius-lg)] border border-hairline">
              <Image
                src="/hoang-profile.webp"
                alt="Tony Hoang"
                fill
                priority
                className="object-cover"
                sizes="128px"
              />
            </div>

            <h1 className="heading-xl mb-[var(--space-5)]">
              {t("heroGreeting")} <GradientText>{t("heroName")}</GradientText>
            </h1>
            <p className="body-serif">{t("heroIntro")}</p>

            {/* Stats — 4-up */}
            <div className="mt-[var(--space-8)] grid grid-cols-2 gap-[var(--space-4)] md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rk-card p-[var(--space-5)]">
                  <p className="mb-1 text-[length:var(--size-h2)] font-bold text-text-primary">
                    {stat.value}
                  </p>
                  <p className="text-[length:var(--size-body-s)] text-text-secondary">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Story — prose column at --max-width-prose */}
      <Section padding="12" className="border-y border-hairline">
        <Container>
          <div className="max-w-3xl">
            <h2 className="heading-md mb-[var(--space-5)]">{t("storyTitle")}</h2>
            <div className="space-y-[var(--space-5)]">
              <p className="body-serif">{t("storyP1")}</p>
              <p className="body-serif">{t("storyP2")}</p>
              <p className="body-serif">{t("storyP3")}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section padding="12">
        <Container>
          <div className="max-w-3xl">
            <h2 className="heading-md mb-[var(--space-6)]">{t("valuesTitle")}</h2>
            <div className="grid gap-[var(--space-4)] md:grid-cols-2">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rk-card flex items-start gap-4 p-[var(--space-5)]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-surface-inset">
                    <Icon size={20} strokeWidth={1.75} className="text-rocket" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-text-primary">{title}</h3>
                    <p className="text-[length:var(--size-body-s)] text-text-secondary">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Info */}
      <Section padding="12" className="border-t border-hairline">
        <Container>
          <div className="max-w-2xl">
            <h2 className="heading-md mb-[var(--space-6)]">{t("infoTitle")}</h2>
            <div className="space-y-3">
              {info.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-[var(--radius-md)] border border-hairline bg-surface-card p-[var(--space-4)]"
                >
                  <Icon size={20} strokeWidth={1.75} className="shrink-0 text-rocket" />
                  <span className="text-text-primary">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section padding="16">
        <Container>
          <div className="rk-card mx-auto max-w-2xl p-[var(--space-7)]">
            <h2 className="heading-md mb-[var(--space-4)]">{t("ctaTitle")}</h2>
            <p className="mb-[var(--space-5)] text-text-secondary">{t("ctaSubtitle")}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              {/* The one primary button on this page */}
              <Link
                href="/learn-ai"
                className="inline-flex h-11 items-center justify-center rounded-[var(--radius-pill)] bg-rocket px-[var(--space-6)] font-medium text-stone transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:bg-rocket-hover hover:shadow-glow-sm active:scale-[var(--press-scale)] active:bg-rocket-press"
              >
                {t("ctaLearnBtn")}
              </Link>
              <Link
                href="/qua"
                className="inline-flex h-11 items-center justify-center rounded-[var(--radius-pill)] border border-hairline-strong px-[var(--space-6)] font-medium text-text-primary transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:border-hairline-accent hover:bg-surface-overlay active:scale-[var(--press-scale)]"
              >
                {t("ctaGiftBtn")}
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
