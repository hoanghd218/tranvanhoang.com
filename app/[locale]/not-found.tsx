import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { Home, ArrowLeft } from "lucide-react"

export default async function NotFound() {
  const t = await getTranslations("notFound")

  // Flat void black. No field, no glow — a quiet dead end.
  return (
    <main className="flex min-h-[60vh] items-center bg-surface px-[var(--space-5)] py-[var(--space-9)] sm:px-[var(--gutter-page)]">
      <div className="mx-auto w-full max-w-[var(--max-width-content)]">
        <p className="heading-lg text-text-tertiary">{t("title")}</p>
        <h1 className="heading-md mt-[var(--space-4)]">{t("heading")}</h1>
        <p className="body-serif mt-[var(--space-4)]">{t("description")}</p>

        <div className="mt-[var(--space-7)] flex flex-col items-start gap-[var(--space-4)] sm:flex-row sm:items-center">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-sm)] border border-hairline-strong px-[var(--space-5)] font-medium text-text-primary transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:border-hairline-accent hover:bg-surface-overlay active:scale-[var(--press-scale)]"
          >
            <Home size={16} strokeWidth={1.75} />
            <span>{t("backHome")}</span>
          </Link>
          <a
            href="javascript:history.back()"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-sm)] px-[var(--space-4)] text-[length:var(--size-body-s)] text-text-secondary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:bg-surface-overlay hover:text-text-primary"
          >
            <ArrowLeft size={16} strokeWidth={1.75} />
            <span>{t("goBack")}</span>
          </a>
        </div>
      </div>
    </main>
  )
}
