import { Metadata } from "next";
import Link from "next/link";
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
import { modules, outcomes, gifts, courseInfo } from "./course-data";
import { RegistrationForm } from "./registration-form";
import { CourseSchema } from "@/components/seo/course-schema";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";

export const metadata: Metadata = {
  title: "AI Automation Cho BIM — Lập trình Revit API và Web với AI | Hoàng",
  description: courseInfo.description,
  openGraph: {
    title: "AI Automation Cho BIM — Lập trình Revit API và Web với AI",
    description: courseInfo.description,
    type: "website",
    locale: "vi_VN",
  },
  alternates: {
    canonical: "https://tranvanhoang.com/courses/ai-automation-bim",
  },
};

/* Module accent colors */
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

export default function AIAutomationBIMPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <CourseSchema
        name="AI Automation Cho BIM — Lập trình Revit API và Web với AI"
        description={courseInfo.description}
        url="https://tranvanhoang.com/courses/ai-automation-bim"
      />
      <BreadcrumbSchema
        items={[
          { name: "Trang chủ", url: "https://tranvanhoang.com" },
          { name: "Khóa học", url: "https://tranvanhoang.com/courses/ai-automation-bim" },
        ]}
      />

      {/* Hero */}
      <Section className="py-12 md:py-20">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-coral transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <span className="text-foreground">Khoá học</span>
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
                <span>{courseInfo.sessions} buổi</span>
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
                <span>{courseInfo.totalLessons}+ bài học</span>
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
              Đăng ký ngay <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </Container>
      </Section>

      {/* Pain Points & Solution */}
      <Section className="py-12 bg-card/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Bạn có đang gặp phải những vấn đề này?
            </h2>

            {/* Pain points */}
            <div className="space-y-4 mb-10">
              {[
                {
                  pain: "Mất vài tháng trời chỉ để học một ngôn ngữ lập trình",
                  detail: "Đọc docs, xem tutorial, viết code lỗi liên tục... rồi vẫn chưa làm được gì ra hồn.",
                },
                {
                  pain: "Công việc lặp đi lặp lại nhưng toàn phải làm bằng tay",
                  detail: "Tạo bản vẽ, đánh số sheet, dựng thép cột dầm — mỗi dự án lại ngồi click từ đầu.",
                },
                {
                  pain: "Muốn tạo Add-in Revit nhưng không biết bắt đầu từ đâu",
                  detail: "C# API khó, tài liệu ít, không ai hướng dẫn, tự mò mất thời gian.",
                },
                {
                  pain: "Có ý tưởng phần mềm BIM nhưng không biết cách bán",
                  detail: "Code xong rồi — nhưng license, landing page, thanh toán, marketing thì hoàn toàn mù mờ.",
                },
              ].map((item) => (
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
                Giải pháp: Để AI làm thay bạn
              </h3>
              <p className="text-muted-foreground mb-4">
                Thay vì mất vài tháng tự học, bạn chỉ cần <strong className="text-foreground">mô tả ý tưởng bằng tiếng Việt</strong> — AI sẽ viết code, tạo giao diện, build ứng dụng cho bạn. Khoá học này dạy bạn cách <strong className="text-foreground">điều khiển AI</strong> để:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Code Revit API nhanh gấp 10x với AI",
                  "Tự động hoá công việc BIM lặp đi lặp lại",
                  "Tạo web bán hàng mà không cần là web developer",
                  "Từ ý tưởng → sản phẩm → thu nhập chỉ trong vài tuần",
                ].map((point) => (
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
            Công nghệ sử dụng trong khoá học
          </h2>
          <p className="text-muted-foreground mb-8 text-center">
            AI Tools + Lập trình + Deploy — tất cả trong một khoá học
          </p>

          {/* AI Tools row */}
          <div className="max-w-4xl mx-auto mb-6">
            <h3 className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3">
              AI Tools
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { name: "Antigravity", desc: "AI automation cho BIM — tự động hoá quy trình thiết kế" },
                { name: "Claude Code", desc: "AI coding assistant — tạo logic, debug, refactor với AI" },
                { name: "Vibe Coding", desc: "Code bằng ngôn ngữ tự nhiên — mô tả ý tưởng, AI viết code" },
              ].map((tool) => (
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
              Lập trình & Deploy
            </h3>
            <div className="grid sm:grid-cols-4 gap-4">
              {[
                { name: "C#", desc: "Ngôn ngữ chính cho Revit API" },
                { name: "Node.js", desc: "Backend web & license server" },
                { name: "React", desc: "Frontend web quản lý & landing page" },
                { name: "Vercel", desc: "Deploy web nhanh chóng, miễn phí" },
              ].map((tech) => (
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
              Thanh toán tự động
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-card border border-border rounded-xl text-center">
                <h4 className="font-semibold text-sm mb-1">SePay</h4>
                <p className="text-xs text-muted-foreground">Cổng thanh toán VietQR — nhận tiền tự động qua webhook</p>
              </div>
              <div className="p-4 bg-card border border-border rounded-xl text-center">
                <h4 className="font-semibold text-sm mb-1">VietQR</h4>
                <p className="text-xs text-muted-foreground">Mã QR thanh toán — khách scan & trả tiền trong 5 giây</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Outcomes */}
      <Section className="py-12">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">Bạn sẽ đạt được gì?</h2>
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

      {/* Curriculum — 3 Modules */}
      <Section className="py-12 bg-card/30">
        <Container>
          <h2 className="text-2xl font-semibold mb-2">Nội dung khoá học</h2>
          <p className="text-muted-foreground mb-10">
            {modules.length} modules · {courseInfo.totalLessons}+ bài học · {courseInfo.totalDuration}
          </p>

          <div className="space-y-10 max-w-3xl">
            {modules.map((mod) => {
              const colors = moduleColors[mod.color] || moduleColors.coral;
              const totalLessons = mod.parts.reduce((sum, p) => sum + p.lessons, 0);

              return (
                <div key={mod.number}>
                  {/* Module header */}
                  <div className={`flex items-center gap-3 mb-4 pb-3 border-b-2 ${colors.border}`}>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${colors.bg} ${colors.text}`}>
                      {mod.number}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${colors.text}`}>
                        Module {mod.number}: {mod.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {mod.description} · {totalLessons} bài
                      </p>
                    </div>
                  </div>

                  {/* Parts */}
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
            <h2 className="text-2xl font-semibold mb-6">Hình thức học</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-card border border-border rounded-xl">
                <Video className="w-6 h-6 text-coral mb-3" />
                <h3 className="font-semibold mb-2">Học qua Video</h3>
                <p className="text-sm text-muted-foreground">
                  Video bài giảng chi tiết, xem lại không giới hạn. Thực hành theo từng bước.
                </p>
              </div>
              <div className="p-5 bg-card border border-border rounded-xl">
                <Users className="w-6 h-6 text-coral mb-3" />
                <h3 className="font-semibold mb-2">Chữa bài qua Zoom</h3>
                <p className="text-sm text-muted-foreground">
                  2 buổi/tuần trên Zoom. Giải đáp thắc mắc, review code, hướng dẫn trực tiếp.
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
                  Ưu đãi tháng 3
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
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {courseInfo.sessions} buổi học trực tiếp
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {courseInfo.totalLessons}+ video bài giảng
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Chữa bài qua Zoom 2 buổi/tuần
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Source code & tài liệu đầy đủ
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Hỗ trợ sau khoá học
                  </li>
                </ul>
                <a
                  href="#register"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-coral text-white font-medium hover:bg-coral-dark transition-colors"
                >
                  Đăng ký ngay <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Gifts card */}
              <div className="p-6 bg-card border border-border rounded-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <Gift className="w-5 h-5 text-coral" />
                  <h3 className="text-lg font-semibold">Quà tặng kèm</h3>
                </div>
                <ul className="space-y-3">
                  {gifts.map((gift) => (
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
            <h2 className="text-2xl font-semibold mb-8">Câu hỏi thường gặp</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Tôi chưa biết lập trình, có học được không?",
                  a: "Được! Khoá học bắt đầu từ kiến thức C# cơ bản và hướng dẫn từng bước. Với AI tools hỗ trợ, bạn sẽ code nhanh hơn rất nhiều ngay cả khi mới bắt đầu.",
                },
                {
                  q: "Khoá học phù hợp với ai?",
                  a: "Kỹ sư BIM, kiến trúc sư, kỹ sư kết cấu muốn tự tạo Add-in Revit. Người muốn thương mại hoá plugin Revit. Developer muốn học AI-powered development.",
                },
                {
                  q: "Cần chuẩn bị gì trước khi học?",
                  a: "Máy tính cài Revit (version 2020 trở lên), Visual Studio, và kết nối internet. Mọi phần mềm khác sẽ được hướng dẫn cài đặt trong khoá học.",
                },
                {
                  q: "Học xong có làm được phần mềm bán được không?",
                  a: "Có! Module 3 dạy từ A-Z: tạo hệ thống license, xây landing page, tích hợp thanh toán, và chiến lược marketing cho sản phẩm BIM.",
                },
                {
                  q: "Hình thức học như thế nào?",
                  a: "Học qua video (xem lại không giới hạn) + chữa bài trực tiếp qua Zoom 2 buổi/tuần. Tổng 15 buổi, có group hỗ trợ riêng.",
                },
                {
                  q: "Sau khoá học có được hỗ trợ tiếp không?",
                  a: "Có! Bạn được tham gia group hỗ trợ lâu dài, nhận bộ skills/agents AI và thư viện Revit API để tiếp tục phát triển.",
                },
                {
                  q: "Giá 5 triệu có bao gồm tất cả module không?",
                  a: "Đúng! Bao gồm cả 3 modules (AI Tools + Revit API + Web & Thương mại hoá), tất cả quà tặng, và hỗ trợ sau khoá học. Giá gốc 8 triệu, giảm còn 5 triệu chỉ trong tháng 3.",
                },
              ].map((faq) => (
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
              Đăng ký khoá học
            </h2>
            <p className="text-muted-foreground mb-8 text-center">
              Điền thông tin bên dưới, mình sẽ liên hệ xác nhận qua Zalo/Facebook.
            </p>
            <RegistrationForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
