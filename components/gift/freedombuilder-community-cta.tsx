"use client"

import Image from "next/image"
import { ArrowRight, Sparkles, Users, Video } from "lucide-react"
import { Container, Section } from "@/components/custom/container"
import { GradientText } from "@/components/custom/gradient-text"

/**
 * Community CTA. Secondary action by design — the page keeps exactly one
 * purple-filled primary button, and that one lives in the hero form.
 */
export function FreedomBuilderCommunityCta() {
  return (
    <Section>
      <Container>
        <div className="rk-card mx-auto max-w-3xl p-[var(--space-6)] md:p-[var(--space-7)]">
          <p className="eyebrow mb-[var(--space-4)] flex items-center gap-2">
            <Video size={16} strokeWidth={1.75} className="text-rocket" />
            Khoá học AI miễn phí
          </p>

          <h2 className="heading-md mb-[var(--space-4)]">
            Muốn xem video các khoá học AI <GradientText>miễn phí</GradientText>?
          </h2>

          <p className="mb-[var(--space-5)] max-w-xl text-text-secondary">
            Tham gia cộng đồng{" "}
            <strong className="font-medium text-text-primary">FreedomBuilder</strong> — nơi bạn
            được học AI miễn phí qua các buổi Zoom hàng tuần cùng những người đam mê công nghệ.
          </p>

          <ul className="mb-[var(--space-6)] flex flex-col gap-3 text-[length:var(--size-body-s)] text-text-secondary sm:flex-row sm:gap-[var(--space-5)]">
            <li className="flex items-center gap-2">
              <Video size={20} strokeWidth={1.75} className="text-rocket" />
              Zoom hàng tuần
            </li>
            <li className="flex items-center gap-2">
              <Users size={20} strokeWidth={1.75} className="text-rocket" />
              Cộng đồng hỗ trợ
            </li>
            <li className="flex items-center gap-2">
              <Sparkles size={20} strokeWidth={1.75} className="text-rocket" />
              100% miễn phí
            </li>
          </ul>

          {/* FreedomBuilder courses preview */}
          <div className="mb-[var(--space-6)] overflow-hidden rounded-[var(--radius-lg)] border border-hairline">
            <Image
              src="/images/freedombuilder-courses.png"
              alt="Các khoá học AI trên FreedomBuilder"
              width={800}
              height={500}
              className="h-auto w-full"
            />
          </div>

          <a
            href="https://whop.com/freedombuilders/?a=hoangtranai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-[var(--radius-pill)] border border-hairline-strong px-[var(--space-6)] font-medium text-text-primary transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:border-hairline-accent hover:bg-surface-overlay active:scale-[var(--press-scale)]"
          >
            Tham gia FreedomBuilder
            <ArrowRight size={16} strokeWidth={1.75} />
          </a>

          <p className="mt-[var(--space-4)] text-[length:var(--size-caption)] text-text-tertiary">
            Đã có <span className="font-medium text-text-accent">2500+</span> thành viên tham gia
          </p>
        </div>
      </Container>
    </Section>
  )
}
