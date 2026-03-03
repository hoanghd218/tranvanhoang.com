import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { Home, ArrowLeft } from "lucide-react"

export default async function NotFound() {
  const t = await getTranslations("notFound")

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-coral mb-4">{t("title")}</h1>
        <h2 className="text-2xl font-semibold mb-4">{t("heading")}</h2>
        <p className="text-muted-foreground mb-8">{t("description")}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-coral text-white font-medium hover:bg-coral-dark transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>{t("backHome")}</span>
          </Link>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="javascript:history.back()"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border font-medium hover:bg-card transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("goBack")}</span>
          </a>
        </div>
      </div>
    </main>
  )
}
