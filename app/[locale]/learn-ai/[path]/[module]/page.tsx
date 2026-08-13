import { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/custom/container";
import { ChevronLeft, ChevronRight, Clock, BookOpen } from "lucide-react";

interface ModulePageProps {
  params: Promise<{
    path: string;
    module: string;
  }>;
}

export async function generateMetadata({ params }: ModulePageProps): Promise<Metadata> {
  const { path, module } = await params;
  const pathNames: Record<string, string> = {
    "ai-for-beginners": "AI cho người mới bắt đầu",
    "ai-for-marketing": "AI cho Marketing",
    "ai-for-work": "AI cho công việc",
  };
  const pathName = pathNames[path] || path;

  return {
    title: `Module ${module}: ${pathName} | Tony Hoang`,
    description: `Học Module ${module} trong khóa học ${pathName}`,
  };
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { path, module } = await params;
  const moduleNumber = parseInt(module.replace("module-", ""));

  const pathNames: Record<string, string> = {
    "ai-for-beginners": "AI cho người mới bắt đầu",
    "ai-for-marketing": "AI cho Marketing",
    "ai-for-work": "AI cho công việc",
  };

  return (
    <>
      {/* Breadcrumb */}
      <Section className="py-6">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-text-tertiary">
            <Link
              href="/learn-ai"
              className="transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:text-text-primary"
            >
              Học AI
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={`/learn-ai/${path}`}
              className="transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:text-text-primary"
            >
              {pathNames[path]}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-text-primary">Module {moduleNumber}</span>
          </nav>
        </Container>
      </Section>

      {/* Hero — reading column */}
      <Section className="py-10 md:py-14">
        <Container>
          <div className="max-w-[var(--max-width-prose)]">
            <p className="eyebrow mb-4">{pathNames[path]}</p>
            <h1 className="heading-lg">Module {moduleNumber}</h1>
            <p className="body-serif mt-5">
              Nội dung module đang được phát triển. Hãy quay lại sau để xem chi tiết.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-hairline bg-surface-overlay px-3 py-1 text-xs text-text-secondary">
                <Clock size={16} strokeWidth={1.75} aria-hidden="true" />
                3-5 ngày học
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-hairline bg-surface-overlay px-3 py-1 text-xs text-text-secondary">
                <BookOpen size={16} strokeWidth={1.75} aria-hidden="true" />
                5 bài học
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Coming soon */}
      <Section className="py-8 md:py-12">
        <Container>
          <div className="rk-card max-w-[var(--max-width-prose)] p-8">
            <BookOpen size={24} strokeWidth={1.75} className="text-rocket" aria-hidden="true" />

            <h2 className="font-display mt-5 text-2xl font-bold tracking-tight text-text-primary">
              Nội dung đang được phát triển.
            </h2>

            <p className="mt-3 text-text-secondary">
              Module này đang trong quá trình hoàn thiện. Đăng ký email để nhận thông báo khi có cập
              nhật.
            </p>

            <Link
              href="/qua"
              className="mt-7 inline-flex h-11 items-center gap-2 rounded-[var(--radius-sm)] bg-rocket px-[var(--space-5)] font-medium text-stone transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:bg-rocket-hover hover:shadow-glow-sm active:scale-[var(--press-scale)] active:bg-rocket-press"
            >
              Đăng ký nhận thông báo
            </Link>
          </div>
        </Container>
      </Section>

      {/* Navigation */}
      <Section className="py-12">
        <Container>
          <div className="flex max-w-[var(--max-width-prose)] items-center justify-between gap-6 border-t border-hairline pt-6">
            <Link
              href={`/learn-ai/${path}`}
              className="flex items-center gap-2 text-sm text-text-secondary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:text-text-primary"
            >
              <ChevronLeft size={16} strokeWidth={1.75} aria-hidden="true" />
              <span>Quay lại lộ trình</span>
            </Link>

            <Link
              href={`/learn-ai/${path}/module-${moduleNumber + 1}`}
              className="flex items-center gap-2 text-sm text-text-secondary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:text-text-primary"
            >
              <span>Module tiếp theo</span>
              <ChevronRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
