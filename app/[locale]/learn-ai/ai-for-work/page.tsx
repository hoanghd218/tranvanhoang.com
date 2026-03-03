import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { Clock, Users, BookOpen, CheckCircle, ArrowRight } from "lucide-react"
import { Container, Section } from "@/components/custom/container"
import { GradientText } from "@/components/custom/gradient-text"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "learnAiPaths" })
  return {
    title: t("aiForWork.metaTitle"),
    description: t("aiForWork.metaDescription"),
  }
}

const modules = [
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
      {/* Hero */}
      <Section className="py-12 md:py-16">
        <Container>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/learn-ai" className="hover:text-coral transition-colors">
              {t("aiForWork.breadcrumbLearnAi")}
            </Link>
            <span>/</span>
            <span className="text-foreground">{t("aiForWork.breadcrumbCurrent")}</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="heading-xl mb-4">
              {t("aiForWork.heroTitle")} <GradientText>{t("aiForWork.heroTitleHighlight")}</GradientText>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {t("aiForWork.heroSubtitle")}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-green-500" />
                <span>{t("aiForWork.statDuration")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-green-500" />
                <span>{t("aiForWork.statModules")}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-green-500" />
                <span>{t("aiForWork.statStudents")}</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What you'll learn */}
      <Section className="py-8 bg-card/30">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">{t("aiForWork.whatYoullLearnTitle")}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
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
          <h2 className="text-2xl font-semibold mb-8">{t("aiForWork.curriculumTitle")}</h2>
          <div className="space-y-4 max-w-3xl">
            {modules.map((module) => (
              <div
                key={module.number}
                className="p-5 bg-card border border-border rounded-xl hover:border-green-500/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 font-bold shrink-0">
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

      {/* ROI */}
      <Section className="py-12 bg-card/30">
        <Container>
          <h2 className="text-2xl font-semibold mb-8">{t("aiForWork.roiTitle")}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {roiMetrics.map((metric, index) => (
              <div key={index} className="p-6 bg-card border border-border rounded-xl text-center">
                <p className="text-3xl font-bold text-green-500 mb-2">{metric.value}</p>
                <p className="font-semibold">{metric.label}</p>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-border">
            <h2 className="text-2xl font-semibold mb-4">{t("aiForWork.ctaTitle")}</h2>
            <p className="text-muted-foreground mb-6">{t("aiForWork.ctaSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-gift"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition-colors"
              >
                {t("aiForWork.ctaRegisterBtn")}
              </Link>
              <Link
                href={{ pathname: "/learn-ai/[path]/[module]", params: { path: "ai-for-work", module: "module-1" } }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-green-500 text-green-500 font-medium hover:bg-green-500/10 transition-colors"
              >
                {t("aiForWork.ctaModule1Btn")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
