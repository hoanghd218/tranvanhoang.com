import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["vi", "en"],
  defaultLocale: "vi",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/about": "/about",
    "/blog": "/blog",
    "/blog/[category]": "/blog/[category]",
    "/blog/[category]/[slug]": "/blog/[category]/[slug]",
    "/learn-ai": "/learn-ai",
    "/learn-ai/ai-for-beginners": "/learn-ai/ai-for-beginners",
    "/learn-ai/ai-for-marketing": "/learn-ai/ai-for-marketing",
    "/learn-ai/ai-for-work": "/learn-ai/ai-for-work",
    "/learn-ai/[path]/[module]": "/learn-ai/[path]/[module]",
    "/tai-nguyen": {
      vi: "/tai-nguyen",
      en: "/resources",
    },
    "/free-gift": "/free-gift",
    "/life": "/life",
    "/life/[slug]": "/life/[slug]",
  },
})

export type Locale = (typeof routing.locales)[number]
export type Pathnames = keyof typeof routing.pathnames
