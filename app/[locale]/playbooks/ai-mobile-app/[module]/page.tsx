import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { ComingSoonView } from "@/components/course-playbook/coming-soon-view"
import { coursePath } from "@/components/course-playbook/course-nav"
import { ModuleView } from "@/components/course-playbook/module-view"
import { COURSE_INDEXABLE, courseMeta, getAllModuleSlugs, getCourseModule, getModuleSummary } from "@/lib/course-playbook/course"
import { routing } from "@/i18n/routing"

type Props = { params: Promise<{ locale: string; module: string }> }

/** Chỉ 7 slug chính thức (kể cả module "Đang soạn"). Slug "fixture" của môi trường dev không nằm ở đây. */
export function generateStaticParams() {
  return routing.locales.flatMap((locale) => getAllModuleSlugs().map((module) => ({ locale, module })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, module: slug } = await params
  const data = getCourseModule(slug)
  const summary = getModuleSummary(slug)
  if (!data && !summary) notFound()
  const label = `Module ${data?.number ?? summary?.number} — ${data?.title ?? summary?.title}`
  const description = data?.intro ?? summary?.question ?? courseMeta.description
  return {
    title: `${label} · ${courseMeta.title}`,
    description,
    alternates: { canonical: `https://www.tranvanhoang.com${coursePath(locale, slug)}` },
    robots: COURSE_INDEXABLE && summary ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: { title: `${label} · ${courseMeta.title}`, description, type: "article" },
  }
}

export default async function CourseModulePage({ params }: Props) {
  const { locale, module: slug } = await params
  setRequestLocale(locale)
  const data = getCourseModule(slug)
  const summary = getModuleSummary(slug)
  if (!data && !summary) notFound()
  // Module chưa soạn (status "soon") hoặc chưa có dữ liệu → trang "Đang soạn". Slug dev "fixture" không có summary nên vẫn vào trang đầy đủ.
  if (!data || summary?.status === "soon") {
    if (!summary) notFound()
    return <ComingSoonView summary={summary} locale={locale} />
  }
  return <ModuleView module={data} locale={locale} />
}
