import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { ArrowRight, BookOpen, Check, Clock, Users } from "lucide-react"
import { Container, Section } from "@/components/custom/container"
import { PathMetaChip, PathModuleRow, type PathModule } from "../_components/path-page-parts"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "learnAiPaths" })
  return {
    title: t("aiForWork.metaTitle"),
    description: t("aiForWork.metaDescription"),
  }
}

const modules: PathModule[] = [
  {
    number: 1,
    title: "AI Personal Assistant",
    description: "Biến AI thành trợ lý cá nhân hiệu quả",
    duration: "4-5 days",
    topics: ["Scheduling", "Research", "Task management"],
  },
  {
    number: 2,
    title: "Document Automation",
    description: "Tự động hóa xử lý văn bản và tài liệu",
    duration: "5-6 days",
    topics: ["Summarization", "Translation", "Formatting"],
  },
  {
    number: 3,
    title: "Meeting Efficiency",
    description: "Tối ưu hóa các cuộc họp với AI",
    duration: "4-5 days",
    topics: ["Note-taking", "Action items", "Follow-ups"],
  },
  {
    number: 4,
    title: "Data Analysis Basics",
    description: "Phân tích dữ liệu cơ bản với AI",
    duration: "5-6 days",
    topics: ["Excel/Sheets", "Visualization", "Insights"],
  },
  {
    number: 5,
    title: "Workflow Automation",
    description: "Xây dựng workflow tự động",
    duration: "5-7 days",
    topics: ["Zapier", "Notion", "Custom workflows"],
  },
  {
    number: 6,
    title: "Team Integration",
    description: "Đưa AI vào đội nhóm",
    duration: "4-5 days",
    topics: ["Adoption strategy", "Best practices", "ROI measurement"],
  },
]

export default async function WorkPathPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "learnAiPaths" })

  const outcomes = [
    t("aiForWork.outcome1"),
    t("aiForWork.outcome2"),
    t("aiForWork.outcome3"),
    t("aiForWork.outcome4"),
    t("aiForWork.outcome5"),
    t("aiForWork.outcome6"),
  ]

  const roiMetrics = [
    { value: t("aiForWork.roi1Value"), label: t("aiForWork.roi1Label"), description: t("aiForWork.roi1Desc") },
    { value: t("aiForWork.roi2Value"), label: t("aiForWork.roi2Label"), description: t("aiForWork.roi2Desc") },
    { value: t("aiForWork.roi3Value"), label: t("aiForWork.roi3Label"), description: t("aiForWork.roi3Desc") },
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
              {t("aiForWork.breadcrumbLearnAi")}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-text-primary">{t("aiForWork.breadcrumbCurrent")}</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="heading-xl">
              {t("aiForWork.heroTitle")}{" "}
              <span className="text-gradient">{t("aiForWork.heroTitleHighlight")}</span>
            </h1>
            <p className="body-serif mt-6">{t("aiForWork.heroSubtitle")}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              <PathMetaChip icon={Clock} label={t("aiForWork.statDuration")} />
              <PathMetaChip icon={BookOpen} label={t("aiForWork.statModules")} />
              <PathMetaChip icon={Users} label={t("aiForWork.statStudents")} />
            </div>
          </div>
        </Container>
      </Section>

      {/* What you'll learn */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 className="heading-md mb-8">{t("aiForWork.whatYoullLearnTitle")}</h2>
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
          <h2 className="heading-md mb-8">{t("aiForWork.curriculumTitle")}</h2>
          <div className="max-w-3xl space-y-3">
            {modules.map((module) => (
              <PathModuleRow key={module.number} module={module} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ROI */}
      <Section className="py-12 md:py-16">
        <Container>
          <h2 className="heading-md mb-8">{t("aiForWork.roiTitle")}</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {roiMetrics.map((metric) => (
              <div key={metric.label} className="rk-card flex h-full flex-col gap-3 p-6">
                <p className="eyebrow">{metric.label}</p>
                <p className="font-display text-4xl leading-none font-bold text-text-primary md:text-[length:var(--size-display-l)]">
                  {metric.value}
                </p>
                <p className="text-sm leading-relaxed text-text-secondary">{metric.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Closing */}
      <Section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-md">{t("aiForWork.ctaTitle")}</h2>
            <p className="mt-5 text-text-secondary">{t("aiForWork.ctaSubtitle")}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/qua"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-rocket px-[var(--space-5)] font-medium text-stone transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:bg-rocket-hover hover:shadow-glow-sm active:scale-[var(--press-scale)] active:bg-rocket-press"
              >
                {t("aiForWork.ctaRegisterBtn")}
              </Link>
              <Link
                href={{ pathname: "/learn-ai/[path]/[module]", params: { path: "ai-for-work", module: "module-1" } }}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-pill)] border border-hairline-strong px-[var(--space-5)] font-medium text-text-primary transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:border-hairline-accent hover:bg-surface-overlay active:scale-[var(--press-scale)]"
              >
                {t("aiForWork.ctaModule1Btn")}
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
