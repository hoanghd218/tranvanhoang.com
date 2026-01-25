import { Metadata } from "next";
import Link from "next/link";
import { Clock, Users, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/custom/container";
import { GradientText } from "@/components/custom/gradient-text";

export const metadata: Metadata = {
  title: "AI cho người mới bắt đầu | Hoàng",
  description: "Lộ trình học AI từ con số 0. Không cần kiến thức trước, không cần code.",
};

const modules = [
  {
    number: 1,
    title: "AI là gì?",
    description: "Hiểu bản chất của AI và các khái niệm cơ bản",
    duration: "3-4 ngày",
    topics: ["Machine Learning cơ bản", "Các loại AI phổ biến", "AI vs Human"],
  },
  {
    number: 2,
    title: "ChatGPT cơ bản",
    description: "Sử dụng ChatGPT hiệu quả từ đầu",
    duration: "4-5 ngày",
    topics: ["Tạo tài khoản", "Giao diện và tính năng", "Các lệnh cơ bản"],
  },
  {
    number: 3,
    title: "Viết Prompt hiệu quả",
    description: "Nghệ thuật giao tiếp với AI",
    duration: "5-6 ngày",
    topics: ["Cấu trúc Prompt", "Roleplay với AI", "Iterate và cải thiện"],
  },
  {
    number: 4,
    title: "AI cho công việc hàng ngày",
    description: "Ứng dụng AI vào các công việc thường ngày",
    duration: "5-6 ngày",
    topics: ["Viết email", "Tóm tắt văn bản", "Brainstorm ý tưởng"],
  },
  {
    number: 5,
    title: "AI cho sáng tạo",
    description: "Khám phá khả năng sáng tạo của AI",
    duration: "4-5 ngày",
    topics: ["Tạo hình ảnh", "Viết content", "Ideation với AI"],
  },
  {
    number: 6,
    title: "Dự án thực tế",
    description: "Áp dụng kiến thức vào dự án thực tế",
    duration: "5-7 ngày",
    topics: ["Xây dựng workflow", "Tối ưu hóa", "Đo lường kết quả"],
  },
];

export default function BeginnerPathPage() {
  return (
    <>
      {/* Hero */}
      <Section className="py-12 md:py-16">
        <Container>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/learn-ai" className="hover:text-coral transition-colors">
              Học AI
            </Link>
            <span>/</span>
            <span className="text-foreground">Người mới</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="heading-xl mb-4">
              AI cho <GradientText>người mới bắt đầu</GradientText>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Từ con số 0 đến tự tin sử dụng AI trong công việc hàng ngày.
              Không cần kiến thức trước. Không cần biết code.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-coral" />
                <span>2-4 tuần</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4 text-coral" />
                <span>6 modules</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-coral" />
                <span>5,000+ học viên</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What you'll learn */}
      <Section className="py-8 bg-card/30">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">Bạn sẽ học được gì?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Curriculum */}
      <Section className="py-12">
        <Container>
          <h2 className="text-2xl font-semibold mb-8">Nội dung khóa học</h2>
          <div className="space-y-4 max-w-3xl">
            {modules.map((module) => (
              <div
                key={module.number}
                className="p-5 bg-card border border-border rounded-xl hover:border-coral/50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center text-coral font-bold shrink-0">
                    {module.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{module.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {module.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {module.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ⏱ {module.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Prerequisites */}
      <Section className="py-12 bg-card/30">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">Yêu cầu</h2>
            <div className="p-6 bg-card border border-border rounded-xl">
              <ul className="space-y-3">
                {prerequisites.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-coral" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-br from-coral/10 to-bronze/10 border border-border">
            <h2 className="text-2xl font-semibold mb-4">
              Sẵn sàng bắt đầu?
            </h2>
            <p className="text-muted-foreground mb-6">
              Đăng ký ngay để nhận access vào tất cả modules miễn phí.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/free-gift"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-coral text-white font-medium hover:bg-coral-dark transition-colors"
              >
                <span>🎁</span> Đăng ký miễn phí
              </Link>
              <Link
                href="/learn-ai/ai-for-beginners/module-1"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-coral text-coral font-medium hover:bg-coral/10 transition-colors"
              >
                Xem module 1
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

const outcomes = [
  "Hiểu rõ AI là gì và hoạt động như thế nào",
  "Sử dụng thành thạo ChatGPT và các công cụ AI phổ biến",
  "Viết prompt hiệu quả để AI hiểu và thực hiện đúng yêu cầu",
  "Áp dụng AI vào công việc hàng ngày",
  "Tạo content, hình ảnh với sự hỗ trợ của AI",
  "Xây dựng workflow cá nhân với AI",
];

const prerequisites = [
  "Máy tính/laptop có kết nối internet",
  "Tài khoản email (để đăng ký ChatGPT)",
  "2-3 giờ mỗi tuần để học và thực hành",
  "Không cần kiến thức về lập trình hay AI trước đó",
  "Mong muốn học và áp dụng vào thực tế",
];
