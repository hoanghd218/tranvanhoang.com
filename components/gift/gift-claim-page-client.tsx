"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Check, Gift, Loader2, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Container, Section } from "@/components/custom/container"
import { GradientText } from "@/components/custom/gradient-text"
import { cn } from "@/lib/utils"
import { GiftDownloadCard } from "./gift-download-card"
import { FreedomBuilderCommunityCta } from "./freedombuilder-community-cta"
import type { Gift as GiftType } from "@/types/gift"

// -- Validation schema --
const claimSchema = z.object({
  fullName: z.string().min(1, "Vui lòng nhập họ tên"),
  phone: z.string().min(1, "Vui lòng nhập số điện thoại"),
  email: z
    .string()
    .min(1, "Vui lòng nhập email")
    .email("Email không hợp lệ"),
})

type ClaimFormData = z.infer<typeof claimSchema>

interface GiftClaimPageClientProps {
  gifts: GiftType[]
}

const trustSignals = ["Miễn phí 100%", "Không spam", "Nhận ngay lập tức"]

export function GiftClaimPageClient({ gifts }: GiftClaimPageClientProps) {
  const [claimed, setClaimed] = React.useState(false)
  const [submitError, setSubmitError] = React.useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimFormData>({
    resolver: zodResolver(claimSchema),
    defaultValues: { fullName: "", phone: "", email: "" },
  })

  const onSubmit = async (data: ClaimFormData) => {
    setSubmitError(null)
    try {
      const res = await fetch(
        "https://n8n.bimspeed.net/webhook/6135553c-02ef-4ad6-b05a-c1b431c4f182",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: data.email,
            submittedAt: new Date().toISOString(),
          }),
        }
      )
      if (!res.ok) {
        setSubmitError("Có lỗi xảy ra, vui lòng thử lại.")
        return
      }
      setClaimed(true)
    } catch {
      setSubmitError("Không thể kết nối, vui lòng thử lại sau.")
    }
  }

  return (
    <>
      {/* ── Hero + Form — carries the one 42° field on this page ── */}
      <Section className="rk-field">
        <Container>
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="animate-fade-in mb-[var(--space-6)] inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-hairline-accent bg-[var(--purple-a12)] px-4 py-1.5 text-[length:var(--size-caption)] font-medium text-text-accent">
              <Gift size={16} strokeWidth={1.75} />
              <span>Quà tặng miễn phí</span>
            </div>

            <h1 className="heading-xl animate-fade-in mb-[var(--space-4)]">
              Nhận <GradientText>quà tặng AI</GradientText> hoàn toàn miễn phí.
            </h1>

            <p className="body-serif animate-fade-in-delay-1 mb-[var(--space-7)]">
              Nhập email để nhận ngay bộ tài nguyên AI giá trị — gồm templates, prompts, checklist
              và nhiều hơn nữa.
            </p>

            {/* ── Claim Form ── */}
            {!claimed ? (
              <div className="animate-fade-in-delay-2 max-w-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <div className="relative flex-1">
                      <Mail
                        size={16}
                        strokeWidth={1.75}
                        className="absolute top-1/2 left-3 -translate-y-1/2 text-text-tertiary"
                      />
                      <Input
                        id="claim-email"
                        type="email"
                        placeholder="Email của bạn"
                        aria-label="Email"
                        aria-invalid={!!errors.email}
                        className="pl-9"
                        {...register("email")}
                      />
                    </div>
                    {/* The one primary button on this page */}
                    <Button type="submit" shape="pill" className="shrink-0" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <Loader2 size={16} strokeWidth={1.75} className="animate-spin" />
                      ) : (
                        "Nhận quà ngay"
                      )}
                    </Button>
                  </div>

                  {errors.email && (
                    <p className="mt-2 text-[length:var(--size-body-s)] text-status-critical">
                      {errors.email.message}
                    </p>
                  )}
                  {submitError && (
                    <p className="mt-2 text-[length:var(--size-body-s)] text-status-critical">
                      {submitError}
                    </p>
                  )}
                </form>

                {/* Trust signals */}
                <ul className="mt-[var(--space-4)] flex flex-wrap gap-x-[var(--space-5)] gap-y-2 text-[length:var(--size-caption)] text-text-secondary">
                  {trustSignals.map((signal) => (
                    <li key={signal} className="flex items-center gap-1.5">
                      <Check size={16} strokeWidth={1.75} className="text-rocket" />
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              /* ── Success message ── */
              <div className="rk-card animate-fade-in max-w-md p-[var(--space-5)]">
                <div className="mb-[var(--space-4)] flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-surface-inset">
                  <Check size={24} strokeWidth={1.75} className="text-status-positive" />
                </div>
                <h2 className="mb-2 text-[length:var(--size-h4)] font-semibold">
                  Đăng ký thành công.
                </h2>
                <p className="text-[length:var(--size-body-s)] text-text-secondary">
                  Cảm ơn bạn. Hãy chọn quà bên dưới để tải về ngay.
                </p>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* ── Gift grid — 3-up, never 5 ── */}
      <Section
        padding="12"
        className={cn(
          "border-t border-hairline",
          !claimed && "pointer-events-none opacity-60 select-none"
        )}
      >
        <Container>
          <div className="mb-[var(--space-7)]">
            <h2 className="heading-md mb-3">
              {claimed ? "Chọn quà để tải về" : "Quà tặng đang chờ bạn"}
            </h2>
            {!claimed && (
              <p className="text-[length:var(--size-body-s)] text-text-secondary">
                Điền thông tin ở trên để mở khoá danh sách quà tặng
              </p>
            )}
          </div>

          <div className="grid gap-[var(--space-5)] sm:grid-cols-2 lg:grid-cols-3">
            {gifts.map((gift) => (
              <GiftDownloadCard key={gift.id} gift={gift} unlocked={claimed} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── FreedomBuilder community CTA ── */}
      <FreedomBuilderCommunityCta />
    </>
  )
}
