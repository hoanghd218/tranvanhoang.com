import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import NextLink from "next/link"
import { Container, Section } from "@/components/custom/container"
import { GradientText } from "@/components/custom/gradient-text"
import { Gift, ArrowRight, CheckCircle, BookOpen, Zap, Users } from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "freeGift" })
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  }
}

export default async function FreeGiftPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "freeGift" })

  const giftItems = [
    { icon: "📧", title: t("giftItem1Title"), desc: t("giftItem1Desc") },
    { icon: "📝", title: t("giftItem2Title"), desc: t("giftItem2Desc") },
    { icon: "📊", title: t("giftItem3Title"), desc: t("giftItem3Desc") },
    { icon: "🎯", title: t("giftItem4Title"), desc: t("giftItem4Desc") },
    { icon: "📅", title: t("giftItem5Title"), desc: t("giftItem5Desc") },
    { icon: "🔍", title: t("giftItem6Title"), desc: t("giftItem6Desc") },
    { icon: "💼", title: t("giftItem7Title"), desc: t("giftItem7Desc") },
    { icon: "📱", title: t("giftItem8Title"), desc: t("giftItem8Desc") },
  ]

  const includedItems = [
    { title: t("included1Title"), desc: t("included1Desc") },
    { title: t("included2Title"), desc: t("included2Desc") },
    { title: t("included3Title"), desc: t("included3Desc") },
    { title: t("included4Title"), desc: t("included4Desc") },
    { title: t("included5Title"), desc: t("included5Desc") },
  ]

  return (
    <>
      {/* Hero */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/10 text-coral text-sm font-medium mb-8">
              <Gift className="w-4 h-4" />
              <span>{t("heroBadge")}</span>
            </div>

            <h1 className="heading-xl mb-6">
              {t("heroTitle")} <GradientText>{t("heroTitleHighlight")}</GradientText> {t("heroTitleEnd")}
              <br />
              <span className="text-4xl">{t("heroTitleFree")}</span>
            </h1>

            <p
              className="text-lg text-muted-foreground mb-8"
              dangerouslySetInnerHTML={{ __html: t("heroSubtitle") }}
            />

            {/* Gift Preview */}
            <div className="bg-card border border-border rounded-2xl p-6 mb-8 max-w-lg mx-auto">
              <div className="grid grid-cols-2 gap-4">
                {giftItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div className="text-left">
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-8">
              {t.has("registeredCountPrefix") && <>{t("registeredCountPrefix")} </>}
              <span className="text-coral font-semibold">{t("registeredCountNumber")}</span>{" "}
              {t("registeredCountSuffix")}
            </p>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="py-12 bg-card/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-12">{t("benefitsTitle")}</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-coral/10 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-coral" />
                </div>
                <h3 className="font-semibold mb-2">{t("benefit1Title")}</h3>
                <p className="text-sm text-muted-foreground">{t("benefit1Desc")}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-coral/10 flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-coral" />
                </div>
                <h3 className="font-semibold mb-2">{t("benefit2Title")}</h3>
                <p className="text-sm text-muted-foreground">{t("benefit2Desc")}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-coral/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-coral" />
                </div>
                <h3 className="font-semibold mb-2">{t("benefit3Title")}</h3>
                <p className="text-sm text-muted-foreground">{t("benefit3Desc")}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What's Included */}
      <Section className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-8">{t("includedTitle")}</h2>

            <div className="bg-card border border-border rounded-2xl p-8">
              <ul className="space-y-4">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA with Email Form */}
      <Section className="py-16">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <div className="bg-gradient-to-br from-coral/5 to-bronze/5 border border-border rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-semibold mb-4">{t("ctaTitle")}</h2>
              <p className="text-muted-foreground mb-8">{t("ctaSubtitle")}</p>

              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-coral text-white font-medium hover:bg-coral-dark transition-colors"
                  >
                    <span>{t("ctaButton")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">
                  {t("privacyText")}{" "}
                  <NextLink href="/privacy" className="underline hover:text-coral">
                    {t("privacyLink")}
                  </NextLink>
                </p>
              </form>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{t("trustFree")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{t("trustNoCard")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{t("trustEmail")}</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Navigation */}
      <Section className="py-8">
        <Container>
          <div className="text-center">
            <Link
              href="/learn-ai"
              className="text-coral hover:text-coral-dark transition-colors"
            >
              {t("backToLearnAi")}
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
