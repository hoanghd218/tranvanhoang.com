import Link from "next/link";
import type { Locale } from "./i18n";

const basePath = "/courses/ai-automation-bim";

/** Simple VI / EN toggle for the course page */
export function LanguageSwitcher({ current }: { current: Locale }) {
  return (
    <div className="inline-flex items-center gap-1 text-sm border border-border rounded-lg overflow-hidden">
      <Link
        href={basePath}
        className={`px-2.5 py-1 transition-colors ${
          current === "vi"
            ? "bg-coral text-white font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        VI
      </Link>
      <Link
        href={`${basePath}/en`}
        className={`px-2.5 py-1 transition-colors ${
          current === "en"
            ? "bg-coral text-white font-medium"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
