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
    title: `Module ${module}: ${pathName} | Hoàng`,
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
      <Section className="py-6 bg-card/30">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/learn-ai" className="hover:text-coral transition-colors">
              Học AI
            </Link>
            <span>/</span>
            <Link
              href={`/learn-ai/${path}`}
              className="hover:text-coral transition-colors"
            >
              {pathNames[path]}
            </Link>
            <span>/</span>
            <span className="text-foreground">Module {moduleNumber}</span>
          </nav>
        </Container>
      </Section>

      {/* Hero */}
      <Section className="py-12">
        <Container>
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-4">Module {moduleNumber}</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Nội dung module đang được phát triển. Hãy quay lại sau để xem chi tiết.
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-coral" />
                <span>3-5 ngày học</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-coral" />
                <span>5 bài học</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Coming Soon Content */}
      <Section className="py-12">
        <Container>
          <div className="max-w-3xl">
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-muted-foreground" />
              </div>

              <h2 className="text-2xl font-semibold mb-4">
                Nội dung đang được phát triển 🚧
              </h2>

              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Module này đang trong quá trình hoàn thiện. Đăng ký email để
                nhận thông báo khi có更新.
              </p>

              <Link
                href="/free-gift"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-coral text-white font-medium hover:bg-coral-dark transition-colors"
              >
                <span>Đăng ký nhận thông báo</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Navigation */}
      <Section className="py-12">
        <Container>
          <div className="flex items-center justify-between max-w-3xl">
            <Link
              href={`/learn-ai/${path}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-coral transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Quay lại lộ trình</span>
            </Link>

            <Link
              href={`/learn-ai/${path}/module-${moduleNumber + 1}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-coral transition-colors"
            >
              <span>Module tiếp theo</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
