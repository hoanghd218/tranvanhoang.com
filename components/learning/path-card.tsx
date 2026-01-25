"use client";

import Link from "next/link";
import { Clock, Users, BookOpen, ArrowRight } from "lucide-react";
import { GradientText } from "@/components/custom/gradient-text";

export type LearningPath = {
  slug: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  duration: string;
  level: string;
  modules: number;
  students: string;
  color: string;
};

const paths: LearningPath[] = [
  {
    slug: "ai-for-beginners",
    title: "AI cho người mới bắt đầu",
    description: "Từ con số 0 đến tự tin sử dụng AI trong công việc hàng ngày. Không cần kiến thức trước.",
    icon: BrainIcon,
    duration: "2-4 tuần",
    level: "Cơ bản",
    modules: 6,
    students: "5,000+",
    color: "from-coral to-bronze",
  },
  {
    slug: "ai-for-marketing",
    title: "AI cho Marketing",
    description: "Áp dụng AI để tăng 10x hiệu quả content và marketing. Cho người đã có nền tảng cơ bản.",
    icon: MarketingIcon,
    duration: "3-5 tuần",
    level: "Trung cấp",
    modules: 8,
    students: "3,200+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    slug: "ai-for-work",
    title: "AI cho công việc",
    description: "Tăng năng suất và tự động hóa công việc với AI. Phù hợp cho doanh nhân và người đi làm.",
    icon: WorkIcon,
    duration: "4-6 tuần",
    level: "Trung cấp",
    modules: 7,
    students: "2,800+",
    color: "from-green-500 to-emerald-500",
  },
];

function BrainIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.854 1.591-2.16.61-.201 1.265-.303 1.95-.303.685 0 1.34.102 1.95.303.933.306 1.591 1.177 1.591 2.16V18" />
    </svg>
  );
}

function MarketingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.996.91 1.81 1.778 2.245 1.065.511 2.28.39 3.193-.26.986-.732 1.34-1.888 1.34-2.244 0-.396-.062-.779-.174-1.163m-8.18 0c.066.384.174.767.34 1.163M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function WorkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  );
}

export function PathCard({ path }: { path: LearningPath }) {
  const Icon = path.icon;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-300 hover:border-coral/50 hover:shadow-lg">
      {/* Gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${path.color}`} />

      <div className="p-6">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${path.color} flex items-center justify-center mb-5`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3">
          <GradientText>{path.title}</GradientText>
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          {path.description}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 mb-6 text-sm">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{path.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <BookOpen className="w-4 h-4" />
            <span>{path.modules} modules</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{path.students}</span>
          </div>
        </div>

        {/* Level badge */}
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
            {path.level}
          </span>

          <Link
            href={`/learn-ai/${path.slug}`}
            className="flex items-center gap-1.5 text-sm font-medium text-coral hover:text-coral-dark transition-colors"
          >
            Xem chi tiết
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function LearningPathCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {paths.map((path) => (
        <PathCard key={path.slug} path={path} />
      ))}
    </div>
  );
}
