import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { ArrowRight, BookOpen, Check, CheckCircle, Clock, Users } from "lucide-react"
import { Container, Section } from "@/components/custom/container"
import { PathMetaChip, PathModuleRow, type PathModule } from "../_components/path-page-parts"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "learnAiPaths" })
  return {
    title: t("aiForBeginners.metaTitle"),
    description: t("aiForBeginners.metaDescription"),
  }
}

const modules: PathModule[] = [
  {
    number: 1,
    title: "AI là gì? / What is AI?",
    description: "Hiểu bản chất của AI và các khái niệm cơ bản",
    duration: "3-4 days",
    topics: ["Machine Learning cơ bản", "Các loại AI phổ biến", "AI vs Human"],
  },
  {
    number: 2,
    title: "ChatGPT cơ bản / ChatGPT Basics",
    description: "Sử dụng ChatGPT hiệu quả từ đầu",
    duration: "4-5 days",
    topics: ["Tạo tài khoản", "Giao diện và tính năng", "Các lệnh cơ bản"],
  },
  {
    number: 3,
    title: "Viết Prompt hiệu quả / Effective Prompts",
    description: "Nghệ thuật giao tiếp với AI",
    duration: "5-6 days",
    topics: ["Cấu trúc Prompt", "Roleplay với AI", "Iterate và cải thiện"],
  },
  {
    number: 4,
    title: "AI cho công việc hàng ngày / AI for Daily Work",
    description: "Ứng dụng AI vào các công việc thường ngày",
    duration: "5-6 days",
    topics: ["Viết email", "Tóm tắt văn bản", "Brainstorm ý tưởng"],
  },
  {
    number: 5,
    title: "AI cho sáng tạo / AI for Creativity",
    description: "Khám phá khả năng sáng tạo của AI",
    duration: "4-5 days",
    topics: ["Tạo hình ảnh", "Viết content", "Ideation với AI"],
  },
  {
    number: 6,
    title: "Dự án thực tế / Real Project",
    description: "Áp dụng kiến thức vào dự án thực tế",
    duration: "5-7 days",
    topics: ["Xây dựng workflow", "Tối ưu hóa", "Đo lường kết quả"],
  },
]

export default async function BeginnerPathPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "learnAiPaths" })

  const outcomes = [
    t("aiForBeginners.outcome1"),
    t("aiForBeginners.outcome2"),
    t("aiForBeginners.outcome3"),
    t("aiForBeginners.outcome4"),
    t("aiForBeginners.outcome5"),
    t("aiForBeginners.outcome6"),
  ]

  const prerequisites = [
    t("aiForBeginners.prereq1"),
    t("aiForBeginners.prereq2"),
    t("aiForBeginners.prereq3"),
    t("aiForBeginners.prereq4"),
    t("aiForBeginners.prereq5"),
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
              {t("aiForBeginners.breadcrumbLearnAi")}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-text-primary">{t("aiForBeginners.breadcrumbCurrent")}</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="heading-xl">
              {t("aiForBeginners.heroTitle")}{" "}
              <span className="text-gradient">{t("aiForBeginners.heroTitleHighlight")}</span>
            </h1>
            <p className="body-serif mt-6">{t("aiForBeginners.heroSubtitle")}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              <PathMetaChip icon={Clock} label={t("aiForBeginners.statDuration")} />
              <PathMetaChip icon={BookOpen} label={t("aiForBeginners.statModules")} />
              <PathMetaChip icon={Users} label={t("aiForBeginners.statStudents")} />
            </div>
          </div>
        </Container>
      </Section>

      {/* What you'll learn */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 className="heading-md mb-8">{t("aiForBeginners.whatYoullLearnTitle")}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3">
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
          <h2 className="heading-md mb-8">{t("aiForBeginners.curriculumTitle")}</h2>
          <div className="max-w-3xl space-y-3">
            {modules.map((module) => (
              <PathModuleRow key={module.number} module={module} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Prerequisites */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 className="heading-md mb-8">{t("aiForBeginners.prerequisitesTitle")}</h2>
            <ul className="rk-card space-y-3 p-6">
              {prerequisites.map((item) => (
                <li key={item} className="flex items-center gap-3 text-text-secondary">
                  <CheckCircle
                    size={16}
                    strokeWidth={1.75}
                    className="shrink-0 text-rocket"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Closing */}
      <Section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-md">{t("aiForBeginners.ctaTitle")}</h2>
            <p className="mt-5 text-text-secondary">{t("aiForBeginners.ctaSubtitle")}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/qua"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-rocket px-[var(--space-5)] font-medium text-stone transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:bg-rocket-hover hover:shadow-glow-sm active:scale-[var(--press-scale)] active:bg-rocket-press"
              >
                {t("aiForBeginners.ctaRegisterBtn")}
              </Link>
              <Link
                href={{ pathname: "/learn-ai/[path]/[module]", params: { path: "ai-for-beginners", module: "module-1" } }}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-pill)] border border-hairline-strong px-[var(--space-5)] font-medium text-text-primary transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:border-hairline-accent hover:bg-surface-overlay active:scale-[var(--press-scale)]"
              >
                {t("aiForBeginners.ctaModule1Btn")}
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
