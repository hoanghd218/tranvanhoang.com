import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { CourseHubView } from "@/components/course-playbook/course-hub-view"
import { coursePath } from "@/components/course-playbook/course-nav"
import { COURSE_INDEXABLE, courseMeta } from "@/lib/course-playbook/course"

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const en = locale === "en"
  const description = en ? "A 7-module hands-on playbook for building mobile apps with AI. Course content is in Vietnamese." : courseMeta.description
  return {
    title: courseMeta.title,
    description,
    alternates: { canonical: `https://www.tranvanhoang.com${coursePath(locale)}` },
    robots: COURSE_INDEXABLE ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: { title: courseMeta.title, description, type: "website" },
  }
}

export default async function CourseHubPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  return <CourseHubView locale={locale} />
}
