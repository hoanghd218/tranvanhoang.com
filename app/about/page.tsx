import { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/custom/container";
import { GradientText } from "@/components/custom/gradient-text";
import { CheckCircle, Mail, MapPin, Calendar, Heart, BookOpen, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Về tôi | Hoàng - AI Educator",
  description: "Tìm hiểu về Hoàng - người dạy AI cho người mới bắt đầu, giúp hàng nghìn người tiếp cận công nghệ một cách đơn giản.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Intro */}
            <div className="text-center mb-12">
              <h1 className="heading-xl mb-6">
                Xin chào, tôi là <GradientText>Hoàng</GradientText>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Tôi dành sức mình để giúp những người chưa biết gì về AI có thể
                bắt đầu và ứng dụng AI vào công việc, cuộc sống một cách tự tin.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-card border border-border rounded-xl">
                <p className="text-3xl font-bold text-coral mb-1">10,000+</p>
                <p className="text-sm text-muted-foreground">Học viên</p>
              </div>
              <div className="text-center p-6 bg-card border border-border rounded-xl">
                <p className="text-3xl font-bold text-coral mb-1">50+</p>
                <p className="text-sm text-muted-foreground">Khóa học</p>
              </div>
              <div className="text-center p-6 bg-card border border-border rounded-xl">
                <p className="text-3xl font-bold text-coral mb-1">5 năm</p>
                <p className="text-sm text-muted-foreground">Kinh nghiệm</p>
              </div>
              <div className="text-center p-6 bg-card border border-border rounded-xl">
                <p className="text-3xl font-bold text-coral mb-1">100%</p>
                <p className="text-sm text-muted-foreground">Tận tâm</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Story */}
      <Section className="py-12 bg-card/30">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Câu chuyện của tôi</h2>
            <div className="prose prose-lg prose-invert">
              <p className="text-muted-foreground mb-6">
                Tôi bắt đầu hành trình với AI vào năm 2020, khi ChatGPT vừa ra mắt.
                Như nhiều người khác, tôi cũng hoang mang và không biết bắt đầu từ đâu.
              </p>
              <p className="text-muted-foreground mb-6">
                Sau nhiều năm học hỏi, thử nghiệm, và có những thành công (thất bại),
                tôi nhận ra rằng AI không phải là thứ gì đó xa vời. Nó có thể giúp
                mọi người tiết kiệm hàng giờ mỗi ngày, nếu biết cách sử dụng đúng.
              </p>
              <p className="text-muted-foreground">
                Từ đó, tôi quyết định biến những gì mình học được thành các khóa học,
                chia sẻ miễn phí để giúp nhiều người tiếp cận AI hơn. Không phức tạp.
                Không áp lực. Chỉ đơn giản và thực tế.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Giá trị tôi theo đuổi
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Đơn giản hóa</h3>
                  <p className="text-sm text-muted-foreground">
                    Mọi thứ phức tạp đều có thể giải thích đơn giản.
                    Tôi tin rằng ai cũng có thể học được.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Học suốt đời</h3>
                  <p className="text-sm text-muted-foreground">
                    Công nghệ thay đổi nhanh, nên tôi luôn học hỏi để
                    mang đến kiến thức mới nhất.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Thực tế</h3>
                  <p className="text-sm text-muted-foreground">
                    Không lý thuyết suông. Mọi kiến thức đều gắn với
                    ứng dụng thực tế ngay lập tức.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-coral" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tôn trọng</h3>
                  <p className="text-sm text-muted-foreground">
                    Mỗi người có nhịp độ học riêng. Tôi không vội vàng,
                    chỉ cần bạn sẵn sàng bắt đầu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Info */}
      <Section className="py-12 bg-card/30">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Một vài điều về tôi
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
                <MapPin className="w-5 h-5 text-coral" />
                <span>Based in Vietnam</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
                <Calendar className="w-5 h-5 text-coral" />
                <span>Teaching since 2020</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
                <Mail className="w-5 h-5 text-coral" />
                <span>Open for collaboration and teaching opportunities</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-br from-coral/10 to-bronze/10 border border-border">
            <h2 className="text-2xl font-semibold mb-4">
              Cùng nhau học AI
            </h2>
            <p className="text-muted-foreground mb-6">
              Sẵn sàng bắt đầu hành trình với AI? Tôi sẽ đồng hành cùng bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/learn-ai"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-coral text-white font-medium hover:bg-coral-dark transition-colors"
              >
                Khám phá lộ trình học
              </Link>
              <Link
                href="/free-gift"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-coral text-coral font-medium hover:bg-coral/10 transition-colors"
              >
                Nhận Free Gift
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
