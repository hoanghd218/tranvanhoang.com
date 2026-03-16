import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { Container, Section } from "@/components/custom/container"
import { GradientText } from "@/components/custom/gradient-text"
import { PersonSchema } from "@/components/seo/person-schema"
import { CheckCircle, Mail, MapPin, Calendar, Heart, BookOpen, Lightbulb } from "lucide-react"

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

  return (
    <>
      {/* JSON-LD Structured Data */}
      <PersonSchema />

      {/* Hero */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="text-center mb-12">
              <h1 className="heading-xl mb-6">
                {t("heroGreeting")} <GradientText>{t("heroName")}</GradientText>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                {t("heroIntro")}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-card border border-border rounded-xl">
                <p className="text-3xl font-bold text-coral mb-1">{t("stat1Value")}</p>
                <p className="text-sm text-muted-foreground">{t("stat1Label")}</p>
              </div>
              <div className="text-center p-6 bg-card border border-border rounded-xl">
                <p className="text-3xl font-bold text-coral mb-1">{t("stat2Value")}</p>
                <p className="text-sm text-muted-foreground">{t("stat2Label")}</p>
              </div>
              <div className="text-center p-6 bg-card border border-border rounded-xl">
                <p className="text-3xl font-bold text-coral mb-1">{t("stat3Value")}</p>
                <p className="text-sm text-muted-foreground">{t("stat3Label")}</p>
              </div>
              <div className="text-center p-6 bg-card border border-border rounded-xl">
                <p className="text-3xl font-bold text-coral mb-1">{t("stat4Value")}</p>
                <p className="text-sm text-muted-foreground">{t("stat4Label")}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Story */}
      <Section className="py-12 bg-card/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">{t("storyTitle")}</h2>
            <div className="prose prose-lg prose-invert">
              <p className="text-muted-foreground mb-6">{t("storyP1")}</p>
              <p className="text-muted-foreground mb-6">{t("storyP2")}</p>
              <p className="text-muted-foreground">{t("storyP3")}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">{t("valuesTitle")}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t("value1Title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("value1Desc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t("value2Title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("value2Desc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t("value3Title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("value3Desc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{t("value4Title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("value4Desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Info */}
      <Section className="py-12 bg-card/30">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">{t("infoTitle")}</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
                <MapPin className="w-5 h-5 text-coral" />
                <span>{t("infoLocation")}</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
                <Calendar className="w-5 h-5 text-coral" />
                <span>{t("infoTeachingSince")}</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
                <Mail className="w-5 h-5 text-coral" />
                <span>{t("infoCollaboration")}</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-br from-coral/10 to-bronze/10 border border-border">
            <h2 className="text-2xl font-semibold mb-4">{t("ctaTitle")}</h2>
            <p className="text-muted-foreground mb-6">{t("ctaSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/learn-ai"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-coral text-white font-medium hover:bg-coral-dark transition-colors"
              >
                {t("ctaLearnBtn")}
              </Link>
              <Link
                href="/qua"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-coral text-coral font-medium hover:bg-coral/10 transition-colors"
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
