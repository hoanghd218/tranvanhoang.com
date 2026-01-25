import { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/custom/container";
import { GradientText } from "@/components/custom/gradient-text";
import { Gift, ArrowRight, CheckCircle, BookOpen, Zap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Gift | Hoàng - AI Educator",
  description: "Nhận free gift miễn phí để bắt đầu hành trình AI của bạn ngay hôm nay.",
};

export default function FreeGiftPage() {
  return (
    <>
      {/* Hero */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/10 text-coral text-sm font-medium mb-8">
              <Gift className="w-4 h-4" />
              <span>Free Gift</span>
            </div>

            <h1 className="heading-xl mb-6">
              Bắt đầu hành trình <GradientText>AI</GradientText> của bạn
              <br />
              <span className="text-4xl">hoàn toàn miễn phí</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              Nhận ngay bộ <strong>10 Prompt Templates</strong> đã được test
              và tối ưu để bạn có thể áp dụng ngay vào công việc hàng ngày.
            </p>

            {/* Gift Preview */}
            <div className="bg-card border border-border rounded-2xl p-6 mb-8 max-w-lg mx-auto">
              <div className="grid grid-cols-2 gap-4">
                {giftItems.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div className="text-left">
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-8">
              Đã có <span className="text-coral font-semibold">2,847+</span> người
              đăng ký nhận
            </p>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="py-12 bg-card/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-12">
              Tại sao bạn nên nhận Free Gift này?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-coral/10 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-coral" />
                </div>
                <h3 className="font-semibold mb-2">Tiết kiệm thời gian</h3>
                <p className="text-sm text-muted-foreground">
                  Không cần tự viết prompt từ đầu. Sử dụng ngay những template đã
                  được tối ưu.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-coral/10 flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-coral" />
                </div>
                <h3 className="font-semibold mb-2">Học nhanh hơn</h3>
                <p className="text-sm text-muted-foreground">
                  Mỗi template đi kèm hướng dẫn chi tiết và ví dụ cụ thể.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-coral/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-coral" />
                </div>
                <h3 className="font-semibold mb-2">Áp dụng ngay</h3>
                <p className="text-sm text-muted-foreground">
                  Template phù hợp với nhiều ngành nghề, từ marketing đến văn
                  phòng.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What's Included */}
      <Section className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-8">
              Bạn sẽ nhận được gì?
            </h2>

            <div className="bg-card border border-border rounded-2xl p-8">
              <ul className="space-y-4">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA with Email Form */}
      <Section className="py-16">
        <Container>
          <div className="max-w-xl mx-auto text-center">
            <div className="bg-gradient-to-br from-coral/5 to-bronze/5 border border-border rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-semibold mb-4">
                Sẵn sàng nhận Free Gift?
              </h2>
              <p className="text-muted-foreground mb-8">
                Nhập email của bạn để nhận ngay 10 Prompt Templates.
                Không spam, không quảng cáo.
              </p>

              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Nhập email của bạn..."
                    className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-coral text-white font-medium hover:bg-coral-dark transition-colors"
                  >
                    <span>Nhận ngay</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Bằng việc đăng ký, bạn đồng ý với{" "}
                  <Link href="/privacy" className="underline hover:text-coral">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </div>

            {/* Trust Signals */}
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Hoàn toàn miễn phí</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Không cần credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Gửi qua email</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Navigation */}
      <Section className="py-8">
        <Container>
          <div className="text-center">
            <Link
              href="/learn-ai"
              className="text-coral hover:text-coral-dark transition-colors"
            >
              ← Quay lại trang học AI
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}

const giftItems = [
  { icon: "📧", title: "Email Writer", desc: "Viết email chuyên nghiệp" },
  { icon: "📝", title: "Content Gen", desc: "Tạo content nhanh" },
  { icon: "📊", title: "Data Analysis", desc: "Phân tích dữ liệu" },
  { icon: "🎯", title: "Brainstorm", desc: "Sinh ý tưởng" },
  { icon: "📅", title: "Scheduler", desc: "Lên lịch thông minh" },
  { icon: "🔍", title: "Research", desc: "Nghiên cứu nhanh" },
  { icon: "💼", title: "Resume", desc: "CV xin việc" },
  { icon: "📱", title: "Social Post", desc: "Post social media" },
];

const includedItems = [
  {
    title: "10 Prompt Templates đã được test",
    desc: "Áp dụng ngay cho công việc hàng ngày",
  },
  {
    title: "Hướng dẫn chi tiết cách sử dụng",
    desc: "Giải thích từng phần của prompt và cách tùy chỉnh",
  },
  {
    title: "Ví dụ thực tế cho từng ngành nghề",
    desc: "Marketing, Sales, HR, Admin, và nhiều lĩnh vực khác",
  },
  {
    title: "Checklist tối ưu prompt",
    desc: "Để bạn tự tạo prompt hiệu quả hơn",
  },
  {
    title: "Cập nhật miễn phí",
    desc: "Nhận thêm templates mới qua email",
  },
];
