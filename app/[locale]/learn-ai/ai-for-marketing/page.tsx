import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { Clock, Users, BookOpen, CheckCircle, ArrowRight } from "lucide-react"
import { Container, Section } from "@/components/custom/container"
import { GradientText } from "@/components/custom/gradient-text"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "learnAiPaths" })
  return {
    title: t("aiForMarketing.metaTitle"),
    description: t("aiForMarketing.metaDescription"),
  }
}

const modules = [
  {
    number: 1,
    title: "AI Content Strategy",
    description: "Xây dựng chiến lược content với sự hỗ trợ của AI",
    duration: "4-5 days",
    topics: ["Content calendar", "Trend analysis", "Audience research"],
  },
  {
    number: 2,
    title: "AI viết Content / AI Content Writing",
    description: "Viết content nhanh hơn, chất lượng hơn với AI",
    duration: "5-6 days",
    topics: ["Blog posts", "Social media", "Email content"],
  },
  {
    number: 3,
    title: "AI cho Social Media",
    description: "Tự động hóa và tối ưu social media marketing",
    duration: "4-5 days",
    topics: ["Post scheduling", "Engagement", "Analytics"],
  },
  {
    number: 4,
    title: "AI Email Marketing",
    description: "Tạo email campaigns hiệu quả với AI",
    duration: "4-5 days",
    topics: ["Subject lines", "A/B testing", "Segmentation"],
  },
  {
    number: 5,
    title: "AI cho Quảng cáo / AI for Ads",
    description: "Tối ưu quảng cáo với AI",
    duration: "5-6 days",
    topics: ["Ad copy", "Targeting", "ROI optimization"],
  },
  {
    number: 6,
    title: "AI Analytics & Reporting",
    description: "Phân tích và báo cáo với AI",
    duration: "3-4 days",
    topics: ["Data visualization", "Insights", "Reporting"],
  },
]

export default async function MarketingPathPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "learnAiPaths" })

  const outcomes = [
    t("aiForMarketing.outcome1"),
    t("aiForMarketing.outcome2"),
    t("aiForMarketing.outcome3"),
    t("aiForMarketing.outcome4"),
    t("aiForMarketing.outcome5"),
    t("aiForMarketing.outcome6"),
  ]

  const caseStudies = [
    { icon: "📝", title: t("aiForMarketing.caseStudy1Title"), result: t("aiForMarketing.caseStudy1Result") },
    { icon: "📧", title: t("aiForMarketing.caseStudy2Title"), result: t("aiForMarketing.caseStudy2Result") },
    { icon: "📊", title: t("aiForMarketing.caseStudy3Title"), result: t("aiForMarketing.caseStudy3Result") },
  ]

  return (
    <>
      {/* Hero */}
      <Section className="py-12 md:py-16">
        <Container>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/learn-ai" className="hover:text-coral transition-colors">
              {t("aiForMarketing.breadcrumbLearnAi")}
            </Link>
            <span>/</span>
            <span className="text-foreground">{t("aiForMarketing.breadcrumbCurrent")}</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="heading-xl mb-4">
              {t("aiForMarketing.heroTitle")} <GradientText>{t("aiForMarketing.heroTitleHighlight")}</GradientText>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {t("aiForMarketing.heroSubtitle")}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>{t("aiForMarketing.statDuration")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-blue-500" />
                <span>{t("aiForMarketing.statModules")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-blue-500" />
                <span>{t("aiForMarketing.statStudents")}</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What you'll learn */}
      <Section className="py-8 bg-card/30">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">{t("aiForMarketing.whatYoullLearnTitle")}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Curriculum */}
      <Section className="py-12">
        <Container>
          <h2 className="text-2xl font-semibold mb-8">{t("aiForMarketing.curriculumTitle")}</h2>
          <div className="space-y-4 max-w-3xl">
            {modules.map((module) => (
              <div
                key={module.number}
                className="p-5 bg-card border border-border rounded-xl hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold shrink-0">
                    {module.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{module.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{module.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {module.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">⏱ {module.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case studies */}
      <Section className="py-12 bg-card/30">
        <Container>
          <h2 className="text-2xl font-semibold mb-8">{t("aiForMarketing.caseStudiesTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="p-6 bg-card border border-border rounded-xl">
                <div className="text-3xl mb-3">{study.icon}</div>
                <p className="font-semibold mb-2">{study.title}</p>
                <p className="text-sm text-muted-foreground">{study.result}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-border">
            <h2 className="text-2xl font-semibold mb-4">{t("aiForMarketing.ctaTitle")}</h2>
            <p className="text-muted-foreground mb-6">{t("aiForMarketing.ctaSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/qua"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
              >
                {t("aiForMarketing.ctaRegisterBtn")}
              </Link>
              <Link
                href={{ pathname: "/learn-ai/[path]/[module]", params: { path: "ai-for-marketing", module: "module-1" } }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-500 font-medium hover:bg-blue-500/10 transition-colors"
              >
                {t("aiForMarketing.ctaModule1Btn")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
