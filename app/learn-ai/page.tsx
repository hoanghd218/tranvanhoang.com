import { Metadata } from "next";
import { LearningPathCards } from "@/components/learning/path-card";
import { Container, Section } from "@/components/custom/container";
import { GradientText } from "@/components/custom/gradient-text";

export const metadata: Metadata = {
  title: "Học AI | Hoàng - AI Educator",
  description: "Các lộ trình học AI được thiết kế cho người mới. Từ cơ bản đến ứng dụng thực tế.",
};

export default function LearnAIPage() {
  return (
    <>
      {/* Hero */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">
              Lộ trình <GradientText>học AI</GradientText> cho mọi người
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Dù bạn ở đâu, mức độ nào, tôi đều có lộ trình phù hợp để bạn
              bắt đầu với AI một cách tự tin. Không cần kiến thức trước.
            </p>
          </div>
        </Container>
      </Section>

      {/* Learning Paths */}
      <Section className="py-12">
        <Container>
          <LearningPathCards />
        </Container>
      </Section>

      {/* How it works */}
      <Section className="py-16 bg-card/30">
        <Container>
          <h2 className="text-2xl font-semibold text-center mb-12">
            Cách thức học
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-coral/10 flex items-center justify-center text-coral font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="py-16">
        <Container>
          <h2 className="text-2xl font-semibold text-center mb-12">
            Học viên nói gì?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="p-6 bg-card border border-border rounded-xl">
                <p className="text-muted-foreground mb-4 italic">&quot;{testimonial.content}&quot;</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
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
              Chọn lộ trình phù hợp với bạn và bắt đầu hành trình AI ngay hôm nay.
            </p>
            <LearningPathCards />
          </div>
        </Container>
      </Section>
    </>
  );
}

const steps = [
  {
    title: "Chọn lộ trình",
    description: "Xác định mục tiêu và chọn lộ trình phù hợp với bạn",
  },
  {
    title: "Học theo module",
    description: "Tiếp cận kiến thức từ cơ bản đến nâng cao",
  },
  {
    title: "Thực hành",
    description: "Áp dụng ngay vào công việc thực tế",
  },
  {
    title: "Nhận certificate",
    description: "Hoàn thành và nhận chứng nhận",
  },
];

const testimonials = [
  {
    name: "Nguyễn Minh",
    role: "Marketing Manager",
    content: "Tưởng AI phức tạp lắm, ai ngờ học với Hoàng dễ hiểu đến vậy. Giờ tôi viết content nhanh hơn 5x.",
  },
  {
    name: "Trần Thị Hà",
    role: "Founder SME",
    content: "Không có nhân sự kỹ thuật, nhưng với AI tôi tự làm được mọi việc. ROI thấy rõ ràng sau 1 tháng.",
  },
  {
    name: "Lê Đức",
    role: "Nhân viên văn phòng",
    content: "Từ người sợ công nghệ, giờ tôi tự tin dùng AI hàng ngày. Tiết kiệm được 2-3 giờ mỗi ngày.",
  },
];
