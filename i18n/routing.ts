import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["vi", "en"],
  defaultLocale: "vi",
  localePrefix: "as-needed",
  localeDetection: false,
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

    "/qua": {
      vi: "/qua",
      en: "/gifts",
    },
    "/life": "/life",
    "/life/[slug]": "/life/[slug]",
    "/zalo-agents": "/zalo-agents",
  },
})

export type Locale = (typeof routing.locales)[number]
export type Pathnames = keyof typeof routing.pathnames
