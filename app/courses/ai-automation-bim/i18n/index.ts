/* Course i18n — dictionary-based, scoped to this page only */

export type Locale = "vi" | "en";
export const defaultLocale: Locale = "vi";
export const locales: Locale[] = ["vi", "en"];

/* ── Shared types ── */

export type CurriculumPart = {
  title: string;
  lessons: number;
  duration: string;
  topics: string[];
};

export type CourseModule = {
  number: number;
  title: string;
  description: string;
  color: string;
  parts: CurriculumPart[];
};

export type FormTexts = {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  phoneLabel: string;
  phonePlaceholder: string;
  noteLabel: string;
  notePlaceholder: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successMessage: string;
  contactDirect: string;
};

export type CourseDictionary = {
  locale: Locale;
  meta: { title: string; description: string; ogTitle: string; ogLocale: string };
  nav: { home: string; course: string };
  hero: { registerNow: string; sessionsUnit: string; lessonsUnit: string };
  painPoints: { title: string; items: Array<{ pain: string; detail: string }> };
  solution: { title: string; description: string; points: string[] };
  techStack: {
    title: string;
    subtitle: string;
    aiTools: { label: string; tools: Array<{ name: string; desc: string }> };
    devStack: { label: string; tools: Array<{ name: string; desc: string }> };
    payment: { label: string; tools: Array<{ name: string; desc: string }> };
  };
  outcomes: { title: string; items: string[] };
  curriculum: { title: string; lessonUnit: string; moduleLabel: string };
  schedule: { title: string; items: Array<{ title: string; description: string }> };
  pricing: { badge: string; features: string[]; registerNow: string };
  gifts: { title: string; items: string[] };
  faq: { title: string; items: Array<{ q: string; a: string }> };
  registration: { title: string; subtitle: string };
  form: FormTexts;
  courseInfo: {
    title: string;
    subtitle: string;
    description: string;
    format: string;
    schedule: string;
    originalPrice: string;
    salePrice: string;
    saleBadge: string;
    totalDuration: string;
    sessions: number;
    totalLessons: number;
    instructor: string;
    contactName: string;
    contactPhone: string;
    zaloLink: string;
    facebookLink: string;
  };
  modules: CourseModule[];
};

/* ── Helpers ── */

import vi from "./vi";
import en from "./en";

const dictionaries: Record<Locale, CourseDictionary> = { vi, en };

/** Extract locale from optional catch-all params, default to Vietnamese */
export function getLocaleFromParams(localeParts?: string[]): Locale {
  const raw = localeParts?.[0];
  if (raw && locales.includes(raw as Locale)) return raw as Locale;
  return defaultLocale;
}

export function getDictionary(locale: Locale): CourseDictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
