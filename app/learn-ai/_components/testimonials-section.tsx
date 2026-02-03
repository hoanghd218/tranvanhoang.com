"use client"

import { Container, Section } from "@/components/custom/container"
import { SectionHeader } from "@/components/custom/section-header"
import { TestimonialCard } from "@/components/learning/testimonial-card"
import { ScrollReveal } from "@/components/custom/scroll-reveal"

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
    content: "Từ ngườii sợ công nghệ, giờ tôi tự tin dùng AI hàng ngày. Tiết kiệm được 2-3 giờ mỗi ngày.",
  },
]

export function TestimonialsSection() {
  return (
    <Section className="py-16">
      <Container>
        <ScrollReveal>
          <SectionHeader
            title="Học viên nói gì?"
            description="Những chia sẻ từ ngườii đã tham gia"
            centered
          />
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.name} delay={index * 150}>
              <TestimonialCard {...t} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
