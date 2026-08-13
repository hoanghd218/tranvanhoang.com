import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { ArrowRight, BarChart3, BookOpen, Check, Clock, FileText, Mail, Users } from "lucide-react"
import { Container, Section } from "@/components/custom/container"
import { PathMetaChip, PathModuleRow, type PathModule } from "../_components/path-page-parts"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "learnAiPaths" })
  return {
    title: t("aiForMarketing.metaTitle"),
    description: t("aiForMarketing.metaDescription"),
  }
}

const modules: PathModule[] = [
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
    { icon: FileText, title: t("aiForMarketing.caseStudy1Title"), result: t("aiForMarketing.caseStudy1Result") },
    { icon: Mail, title: t("aiForMarketing.caseStudy2Title"), result: t("aiForMarketing.caseStudy2Result") },
    { icon: BarChart3, title: t("aiForMarketing.caseStudy3Title"), result: t("aiForMarketing.caseStudy3Result") },
  ]

  return (
    <>
      {/* Hero — the one field on this route */}
      <Section className="rk-field py-14 md:py-20">
        <Container>
          <nav className="mb-8 flex items-center gap-2 text-sm text-text-tertiary">
            <Link
              href="/learn-ai"
              className="transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:text-text-primary"
            >
              {t("aiForMarketing.breadcrumbLearnAi")}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-text-primary">{t("aiForMarketing.breadcrumbCurrent")}</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="heading-xl">
              {t("aiForMarketing.heroTitle")}{" "}
              <span className="text-gradient">{t("aiForMarketing.heroTitleHighlight")}</span>
            </h1>
            <p className="body-serif mt-6">{t("aiForMarketing.heroSubtitle")}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              <PathMetaChip icon={Clock} label={t("aiForMarketing.statDuration")} />
              <PathMetaChip icon={BookOpen} label={t("aiForMarketing.statModules")} />
              <PathMetaChip icon={Users} label={t("aiForMarketing.statStudents")} />
            </div>
          </div>
        </Container>
      </Section>

      {/* What you'll learn */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 className="heading-md mb-8">{t("aiForMarketing.whatYoullLearnTitle")}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check
                    size={20}
                    strokeWidth={1.75}
                    className="mt-0.5 shrink-0 text-status-positive"
                    aria-hidden="true"
                  />
                  <span className="text-text-secondary">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Curriculum */}
      <Section className="py-12 md:py-16">
        <Container>
          <h2 className="heading-md mb-8">{t("aiForMarketing.curriculumTitle")}</h2>
          <div className="max-w-3xl space-y-3">
            {modules.map((module) => (
              <PathModuleRow key={module.number} module={module} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Case studies */}
      <Section className="py-12 md:py-16">
        <Container>
          <h2 className="heading-md mb-8">{t("aiForMarketing.caseStudiesTitle")}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map(({ icon: Icon, title, result }) => (
              <div key={title} className="rk-card flex h-full flex-col p-6">
                <Icon size={24} strokeWidth={1.75} className="text-rocket" aria-hidden="true" />
                <p className="font-display mt-5 text-lg font-bold tracking-tight text-text-primary">
                  {title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">{result}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Closing */}
      <Section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-md">{t("aiForMarketing.ctaTitle")}</h2>
            <p className="mt-5 text-text-secondary">{t("aiForMarketing.ctaSubtitle")}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/qua"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-rocket px-[var(--space-5)] font-medium text-stone transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:bg-rocket-hover hover:shadow-glow-sm active:scale-[var(--press-scale)] active:bg-rocket-press"
              >
                {t("aiForMarketing.ctaRegisterBtn")}
              </Link>
              <Link
                href={{ pathname: "/learn-ai/[path]/[module]", params: { path: "ai-for-marketing", module: "module-1" } }}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-pill)] border border-hairline-strong px-[var(--space-5)] font-medium text-text-primary transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:border-hairline-accent hover:bg-surface-overlay active:scale-[var(--press-scale)]"
              >
                {t("aiForMarketing.ctaModule1Btn")}
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
