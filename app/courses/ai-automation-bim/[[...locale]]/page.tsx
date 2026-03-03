import { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import {
  Clock,
  Users,
  BookOpen,
  CheckCircle,
  Gift,
  Sparkles,
  Video,
  Calendar,
  ArrowRight,
  Bot,
} from "lucide-react";
import { Container, Section } from "@/components/custom/container";
import { GradientText } from "@/components/custom/gradient-text";
import { RegistrationForm } from "../registration-form";
import { CourseSchema } from "@/components/seo/course-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { LanguageSwitcher } from "../language-switcher";
import {
  locales,
  defaultLocale,
  getLocaleFromParams,
  getDictionary,
} from "../i18n";

/* ── Static params for both locales ── */

type PageParams = { locale?: string[] };

export function generateStaticParams() {
  return [
    {},                // /courses/ai-automation-bim       → vi (default)
    { locale: ["en"] }, // /courses/ai-automation-bim/en   → en
  ];
}

/* ── Dynamic metadata per locale ── */

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { locale: localeParts } = await params;

  // Reject invalid or deep locale segments
  if (localeParts && (
    localeParts.length > 1 ||
    (localeParts.length === 1 && !locales.includes(localeParts[0] as typeof locales[number]))
  )) {
    return {};
  }

  const t = getDictionary(getLocaleFromParams(localeParts));
  const isDefault = t.locale === defaultLocale;
  const canonical = isDefault
    ? "https://tranvanhoang.com/courses/ai-automation-bim"
    : `https://tranvanhoang.com/courses/ai-automation-bim/${t.locale}`;

  return {
    title: t.meta.title,
    description: t.meta.description,
    openGraph: {
      title: t.meta.ogTitle,
      description: t.meta.description,
      type: "website",
      locale: t.meta.ogLocale,
    },
    alternates: {
      canonical,
      languages: {
        "x-default": "https://tranvanhoang.com/courses/ai-automation-bim",
        vi: "https://tranvanhoang.com/courses/ai-automation-bim",
        en: "https://tranvanhoang.com/courses/ai-automation-bim/en",
      },
    },
  };
}

/* ── Module accent colors ── */

const moduleColors: Record<string, { bg: string; text: string; border: string }> = {
  purple: {
    bg: "bg-purple-100 dark:bg-purple-950",
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-300 dark:border-purple-800",
  },
  coral: {
    bg: "bg-coral/10",
    text: "text-coral",
    border: "border-coral/30",
  },
  green: {
    bg: "bg-green-100 dark:bg-green-950",
    text: "text-green-600 dark:text-green-400",
    border: "border-green-300 dark:border-green-800",
  },
};

/* ── Page component ── */

export default async function AIAutomationBIMPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { locale: localeParts } = await params;

  // Reject deep paths (e.g. /en/foo) or invalid locales (e.g. /fr)
  if (localeParts && (
    localeParts.length > 1 ||
    (localeParts.length === 1 && !locales.includes(localeParts[0] as typeof locales[number]))
  )) {
    notFound();
  }

  // Redirect /vi to canonical / to avoid duplicate content
  if (localeParts?.[0] === defaultLocale) {
    redirect("/courses/ai-automation-bim");
  }

  const locale = getLocaleFromParams(localeParts);
  const t = getDictionary(locale);
  const { courseInfo, modules } = t;

  return (
    <>
      {/* JSON-LD Structured Data */}
      <CourseSchema
        name={t.meta.ogTitle}
        description={t.meta.description}
        url={
          locale === defaultLocale
            ? "https://tranvanhoang.com/courses/ai-automation-bim"
            : `https://tranvanhoang.com/courses/ai-automation-bim/${locale}`
        }
        language={locale}
      />
      <BreadcrumbSchema
        items={[
          { name: t.nav.home, url: "https://tranvanhoang.com" },
          {
            name: t.nav.course,
            url:
              locale === defaultLocale
                ? "https://tranvanhoang.com/courses/ai-automation-bim"
                : `https://tranvanhoang.com/courses/ai-automation-bim/${locale}`,
          },
        ]}
      />

      {/* Hero */}
      <Section className="py-12 md:py-20">
        <Container>
          <nav className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-coral transition-colors">
                {t.nav.home}
              </Link>
              <span>/</span>
              <span className="text-foreground">{t.nav.course}</span>
            </div>
            <LanguageSwitcher current={locale} />
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-coral/10 text-coral text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              {courseInfo.saleBadge}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
              <GradientText>{courseInfo.title}</GradientText>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              {courseInfo.subtitle}
            </p>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              {courseInfo.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-coral" />
                <span>{courseInfo.sessions} {t.hero.sessionsUnit}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Video className="w-4 h-4 text-coral" />
                <span>{courseInfo.format}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-coral" />
                <span>{courseInfo.schedule}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-coral" />
                <span>{courseInfo.totalLessons}+ {t.hero.lessonsUnit}</span>
              </div>
            </div>

            {/* Price highlight */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-lg text-muted-foreground line-through">
                {courseInfo.originalPrice}
              </span>
              <span className="text-3xl font-bold text-coral">
                {courseInfo.salePrice}
              </span>
            </div>

            <a
              href="#register"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-coral text-white font-medium hover:bg-coral-dark transition-colors text-lg"
            >
              {t.hero.registerNow} <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </Container>
      </Section>

      {/* Pain Points & Solution */}
      <Section className="py-12 bg-card/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              {t.painPoints.title}
            </h2>

            <div className="space-y-4 mb-10">
              {t.painPoints.items.map((item) => (
                <div
                  key={item.pain}
                  className="flex items-start gap-4 p-4 rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-950/20"
                >
                  <span className="text-red-500 text-xl shrink-0 mt-0.5">✕</span>
                  <div>
                    <p className="font-semibold text-foreground">{item.pain}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Solution */}
            <div className="p-6 rounded-2xl border-2 border-green-300 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
              <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-3">
                {t.solution.title}
              </h3>
              <p
                className="text-muted-foreground mb-4"
                dangerouslySetInnerHTML={{ __html: t.solution.description }}
              />
              <div className="grid sm:grid-cols-2 gap-3">
                {t.solution.points.map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                    <span className="text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Tech Stack */}
      <Section className="py-12 bg-card/30">
        <Container>
          <h2 className="text-2xl font-semibold mb-2 text-center">
            {t.techStack.title}
          </h2>
          <p className="text-muted-foreground mb-8 text-center">
            {t.techStack.subtitle}
          </p>

          {/* AI Tools row */}
          <div className="max-w-4xl mx-auto mb-6">
            <h3 className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3">
              {t.techStack.aiTools.label}
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {t.techStack.aiTools.tools.map((tool) => (
                <div key={tool.name} className="p-4 bg-card border border-border rounded-xl">
                  <Bot className="w-6 h-6 text-purple-500 mb-2" />
                  <h4 className="font-semibold text-sm mb-1">{tool.name}</h4>
                  <p className="text-xs text-muted-foreground">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dev Stack row */}
          <div className="max-w-4xl mx-auto mb-6">
            <h3 className="text-sm font-semibold text-coral uppercase tracking-wider mb-3">
              {t.techStack.devStack.label}
            </h3>
            <div className="grid sm:grid-cols-4 gap-4">
              {t.techStack.devStack.tools.map((tech) => (
                <div key={tech.name} className="p-4 bg-card border border-border rounded-xl text-center">
                  <h4 className="font-semibold text-sm mb-1">{tech.name}</h4>
                  <p className="text-xs text-muted-foreground">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Payment row */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-sm font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider mb-3">
              {t.techStack.payment.label}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {t.techStack.payment.tools.map((tool) => (
                <div key={tool.name} className="p-4 bg-card border border-border rounded-xl text-center">
                  <h4 className="font-semibold text-sm mb-1">{tool.name}</h4>
                  <p className="text-xs text-muted-foreground">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Outcomes */}
      <Section className="py-12">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">{t.outcomes.title}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {t.outcomes.items.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Curriculum — 3 Modules */}
      <Section className="py-12 bg-card/30">
        <Container>
          <h2 className="text-2xl font-semibold mb-2">{t.curriculum.title}</h2>
          <p className="text-muted-foreground mb-10">
            {modules.length} modules · {courseInfo.totalLessons}+ {t.curriculum.lessonUnit} · {courseInfo.totalDuration}
          </p>

          <div className="space-y-10 max-w-3xl">
            {modules.map((mod) => {
              const colors = moduleColors[mod.color] || moduleColors.coral;
              const totalLessons = mod.parts.reduce((sum, p) => sum + p.lessons, 0);

              return (
                <div key={mod.number}>
                  <div className={`flex items-center gap-3 mb-4 pb-3 border-b-2 ${colors.border}`}>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${colors.bg} ${colors.text}`}>
                      {mod.number}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${colors.text}`}>
                        {t.curriculum.moduleLabel} {mod.number}: {mod.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {mod.description} · {totalLessons} {t.curriculum.lessonUnit}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 pl-2">
                    {mod.parts.map((part, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-card border border-border rounded-xl hover:border-coral/50 transition-colors"
                      >
                        <h4 className="font-semibold mb-2">{part.title}</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {part.topics.map((topic) => (
                            <span
                              key={topic}
                              className={`px-2.5 py-1 text-xs rounded-full font-medium ${colors.bg} ${colors.text}`}
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Schedule */}
      <Section className="py-12">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">{t.schedule.title}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-card border border-border rounded-xl">
                <Video className="w-6 h-6 text-coral mb-3" />
                <h3 className="font-semibold mb-2">{t.schedule.items[0].title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.schedule.items[0].description}
                </p>
              </div>
              <div className="p-5 bg-card border border-border rounded-xl">
                <Users className="w-6 h-6 text-coral mb-3" />
                <h3 className="font-semibold mb-2">{t.schedule.items[1].title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.schedule.items[1].description}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing + Gifts */}
      <Section className="py-12 bg-card/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Pricing card */}
              <div className="p-6 bg-card border-2 border-coral rounded-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral/10 text-coral text-xs font-medium mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t.pricing.badge}
                </div>
                <div className="mb-4">
                  <span className="text-lg text-muted-foreground line-through block">
                    {courseInfo.originalPrice}
                  </span>
                  <span className="text-4xl font-bold text-coral">
                    {courseInfo.salePrice}
                  </span>
                </div>
                <ul className="space-y-2 mb-6 text-sm">
                  {t.pricing.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#register"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-coral text-white font-medium hover:bg-coral-dark transition-colors"
                >
                  {t.pricing.registerNow} <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Gifts card */}
              <div className="p-6 bg-card border border-border rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <Gift className="w-5 h-5 text-coral" />
                  <h3 className="text-lg font-semibold">{t.gifts.title}</h3>
                </div>
                <ul className="space-y-3">
                  {t.gifts.items.map((gift) => (
                    <li key={gift} className="flex items-start gap-3">
                      <span className="text-lg">🎁</span>
                      <span className="text-sm">{gift}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="py-12">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-8">{t.faq.title}</h2>
            <div className="space-y-4">
              {t.faq.items.map((faq) => (
                <details
                  key={faq.q}
                  className="group p-4 bg-card border border-border rounded-xl"
                >
                  <summary className="flex items-center justify-between cursor-pointer font-semibold list-none">
                    {faq.q}
                    <span className="text-coral ml-2 shrink-0 group-open:rotate-45 transition-transform text-xl leading-none">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Registration Form */}
      <Section className="py-16" id="register">
        <Container>
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              {t.registration.title}
            </h2>
            <p className="text-muted-foreground mb-8 text-center">
              {t.registration.subtitle}
            </p>
            <RegistrationForm
              texts={t.form}
              contactName={courseInfo.contactName}
              contactPhone={courseInfo.contactPhone}
              zaloLink={courseInfo.zaloLink}
              facebookLink={courseInfo.facebookLink}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}
