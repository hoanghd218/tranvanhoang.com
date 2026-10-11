"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Brain, Briefcase, Clock, Megaphone, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type LearningPath = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  duration: string;
  level: string;
  modules: number;
  students: string;
};

const paths: LearningPath[] = [
  {
    slug: "ai-for-beginners",
    title: "AI cho người mới bắt đầu",
    description: "Từ con số 0 đến tự tin sử dụng AI trong công việc hàng ngày. Không cần kiến thức trước.",
    icon: Brain,
    duration: "2-4 tuần",
    level: "Cơ bản",
    modules: 6,
    students: "5,000+",
  },
  {
    slug: "ai-for-marketing",
    title: "AI cho Marketing",
    description: "Áp dụng AI để tăng 10x hiệu quả content và marketing. Cho người đã có nền tảng cơ bản.",
    icon: Megaphone,
    duration: "3-5 tuần",
    level: "Trung cấp",
    modules: 8,
    students: "3,200+",
  },
  {
    slug: "ai-for-work",
    title: "AI cho công việc",
    description: "Tăng năng suất và tự động hóa công việc với AI. Phù hợp cho doanh nhân và người đi làm.",
    icon: Briefcase,
    duration: "4-6 tuần",
    level: "Trung cấp",
    modules: 7,
    students: "2,800+",
  },
];

/** Meta chip — pill radius, hairline, one Lucide icon per label. */
function MetaChip({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-hairline bg-surface-overlay px-3 py-1 text-xs text-text-secondary">
      <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
      {label}
    </span>
  );
}

export function PathCard({ path }: { path: LearningPath }) {
  const Icon = path.icon;

  return (
    <div className="rk-card rk-card-interactive group flex h-full flex-col p-6">
      <Icon size={24} strokeWidth={1.75} className="text-rocket" aria-hidden="true" />

      <h3 className="font-display mt-5 text-xl font-bold tracking-tight text-text-primary">
        {path.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{path.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        <MetaChip icon={Clock} label={path.duration} />
        <MetaChip icon={BookOpen} label={`${path.modules} modules`} />
        <MetaChip icon={Users} label={path.students} />
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 pt-5 border-t border-hairline">
        <span className="rounded-[var(--radius-pill)] border border-hairline-accent bg-[var(--purple-a12)] px-3 py-1 text-xs font-medium text-text-accent">
          {path.level}
        </span>

        <Link
          href={`/learn-ai/${path.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-text-primary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:text-text-accent"
        >
          Xem chi tiết
          <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export function LearningPathCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {paths.map((path) => (
        <PathCard key={path.slug} path={path} />
      ))}
    </div>
  );
}
