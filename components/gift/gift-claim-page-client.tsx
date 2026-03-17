"use client"

import * as React from "react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Gift,
  ArrowRight,
  CheckCircle,
  Download,
  ExternalLink,
  Mail,
  Video,
  Users,
  Loader2,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Container, Section } from "@/components/custom/container"
import { GradientText } from "@/components/custom/gradient-text"
import { cn } from "@/lib/utils"
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
      {/* ── Hero + Form ── */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/10 text-coral text-sm font-medium mb-8 animate-fade-in">
              <Gift className="w-4 h-4" />
              <span>Quà tặng miễn phí</span>
            </div>

            <h1 className="heading-xl mb-4 animate-fade-in">
              Nhận <GradientText>Quà Tặng AI</GradientText>
              <br />
              <span className="text-3xl md:text-4xl">hoàn toàn miễn phí</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-10 animate-fade-in-delay-1">
              Nhập email để nhận ngay bộ tài nguyên AI giá trị — gồm templates, prompts, checklist và nhiều hơn nữa.
            </p>

            {/* ── Claim Form (inline email + button) ── */}
            {!claimed ? (
              <div className="max-w-lg mx-auto animate-fade-in-delay-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex items-center gap-0 rounded-full border-2 border-coral/30 bg-card p-1.5 shadow-lg shadow-coral/5 transition-all focus-within:border-coral/60 focus-within:shadow-coral/10">
                    <div className="relative flex-1">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="claim-email"
                        type="email"
                        placeholder="Email address"
                        className="border-0 bg-transparent pl-11 pr-2 py-3 text-base shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/60"
                        {...register("email")}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="rounded-full bg-coral hover:bg-coral-dark text-white font-semibold px-6 py-3 text-sm md:text-base whitespace-nowrap transition-all active:scale-95"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        "Nhận quà ngay"
                      )}
                    </Button>
                  </div>

                  {errors.email && (
                    <p className="text-sm text-destructive mt-2">{errors.email.message}</p>
                  )}
                  {submitError && (
                    <p className="text-sm text-destructive mt-2">{submitError}</p>
                  )}
                </form>

                {/* Trust signals */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                    Miễn phí 100%
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                    Không spam
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                    Nhận ngay lập tức
                  </span>
                </div>
              </div>
            ) : (
              /* ── Success message ── */
              <div className="max-w-md mx-auto animate-fade-in">
                <div className="bg-card border border-green-500/30 rounded-2xl p-6 md:p-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Đăng ký thành công! 🎉</h3>
                  <p className="text-muted-foreground text-sm">
                    Cảm ơn bạn! Hãy chọn quà bên dưới để tải về ngay.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* ── Gift Grid (always visible after claim, or show preview) ── */}
      <Section className={cn("py-12 bg-card/30", !claimed && "opacity-60 pointer-events-none select-none")}>
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {claimed ? "Chọn quà để tải về" : "Quà tặng đang chờ bạn"}
            </h2>
            {!claimed && (
              <p className="text-muted-foreground text-sm">
                Điền thông tin ở trên để mở khoá danh sách quà tặng
              </p>
            )}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {gifts.map((gift, index) => (
              <GiftCard
                key={gift.id}
                gift={gift}
                unlocked={claimed}
                index={index}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ── FreedomBuilder Community CTA ── */}
      <Section className="py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-coral/10 via-bronze/5 to-coral/10 border border-border p-8 md:p-12">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-coral/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-bronze/5 rounded-full blur-3xl" />

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/10 text-coral text-sm font-medium mb-6">
                  <Video className="w-4 h-4" />
                  <span>Khoá học AI miễn phí</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Muốn xem video các khoá học AI{" "}
                  <GradientText>miễn phí</GradientText>?
                </h2>

                <p className="text-muted-foreground mb-3 max-w-xl mx-auto">
                  Tham gia cộng đồng <strong className="text-foreground">FreedomBuilder</strong> — nơi bạn được học AI miễn phí qua các buổi Zoom hàng tuần cùng những người đam mê công nghệ.
                </p>

                <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
                  <li className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-coral" />
                    Zoom hàng tuần
                  </li>
                  <li className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-coral" />
                    Cộng đồng hỗ trợ
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-coral" />
                    100% miễn phí
                  </li>
                </ul>

                {/* FreedomBuilder courses preview */}
                <div className="mb-8 rounded-xl overflow-hidden border border-border/50 shadow-md">
                  <Image
                    src="/images/freedombuilder-courses.png"
                    alt="Các khoá học AI trên FreedomBuilder"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />
                </div>

                <a
                  href="https://whop.com/freedombuilders/?a=hoangtranai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-coral text-white font-semibold hover:bg-coral-dark transition-all active:scale-[0.98] shadow-lg shadow-coral/20"
                >
                  Tham gia FreedomBuilder
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="mt-4 text-xs text-muted-foreground">
                  Đã có <span className="text-coral font-semibold">2500+</span> thành viên tham gia
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

// ── Gift Card sub-component ──

function GiftCard({
  gift,
  unlocked,
  index,
}: {
  gift: GiftType
  unlocked: boolean
  index: number
}) {
  return (
    <div
      className={cn(
        "group relative flex flex-col bg-card border border-border rounded-xl p-5 transition-all duration-300",
        unlocked
          ? "hover:border-coral/50 hover:shadow-lg hover:shadow-coral/5 hover:-translate-y-1 cursor-pointer"
          : "cursor-default"
      )}
      style={{ animationDelay: unlocked ? `${index * 100}ms` : undefined }}
    >
      {/* Icon */}
      <div className="text-4xl mb-3">{gift.icon}</div>

      {/* Content */}
      <h3 className="font-semibold text-base mb-1.5 group-hover:text-coral transition-colors">
        {gift.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 flex-1">
        {gift.description}
      </p>

      {/* Action */}
      {unlocked ? (
        <a
          href={gift.driveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-coral/10 text-coral text-sm font-medium hover:bg-coral/20 transition-colors"
        >
          <Download className="w-4 h-4" />
          Tải về
          <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
        </a>
      ) : (
        <div className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-muted text-muted-foreground text-sm">
          <Gift className="w-4 h-4" />
          Đăng ký để mở khoá
        </div>
      )}
    </div>
  )
}
