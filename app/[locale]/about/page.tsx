import Image from "next/image"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Signature, ThemeLink } from "@/components/editorial/primitives"
import { localizedPath } from "@/lib/editorial-content"

export const metadata = { title: "Về Tony Hoang", description: "Tony Hoang — Kiến trúc sư thiết kế hệ thống, kết hợp con người, công nghệ và AI." }
export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "about" })
  return <div className="editorial-home about-page editorial-container">
    <section className="about-page-intro"><div><p className="eyebrow">{t("role")}</p><h1>{t("heroGreeting")}<br /><span className="accent-heading">Tony Hoang.</span></h1><p>{t("heroIntro")}</p><Signature /><div className="hero-actions"><ThemeLink href={localizedPath("/products", locale)} variant="primary">Khám phá sản phẩm</ThemeLink><ThemeLink href={localizedPath("/life", locale)}>Hành trình của tôi</ThemeLink></div></div><div className="portrait-frame"><Image src="/hoang-profile.webp" alt="Tony Hoang" fill priority sizes="(max-width: 760px) 100vw, 40vw" className="portrait-image" /></div></section>
    <section className="about-values"><div className="section-heading"><div><p className="eyebrow">Góc nhìn</p><h2>{t("valuesTitle")}</h2></div></div><div className="about-value-grid">{[1, 2, 3, 4].map(index => <div key={index}><span className="eyebrow">0{index}</span><h3>{t(`value${index}Title`)}</h3><p>{t(`value${index}Desc`)}</p></div>)}</div></section>
  </div>
}
