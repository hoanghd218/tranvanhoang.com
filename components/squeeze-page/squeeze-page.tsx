"use client"

import * as React from "react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Check, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import type {
  SqueezePageProps,
  SqueezePageVideo,
  SqueezePageForm,
  SqueezePageTestimonial,
  SqueezePageProfile,
  SqueezePageAvatar,
} from "@/types/squeeze-page"

// ─── Validation ───
const emailSchema = z.object({
  email: z.string().min(1, "Please enter your email").email("Invalid email"),
})
type EmailFormData = z.infer<typeof emailSchema>

// ─── Main Component ───
/**
 * Conversion page shell. Void black ground, one 42° field on the hero,
 * left-aligned copy, exactly one primary pill CTA.
 * `bgColor` stays supported as an explicit override; unset means void black.
 */
export function SqueezePage({
  avatar,
  title,
  video,
  form,
  testimonial,
  profile,
  bgColor,
  className,
}: SqueezePageProps) {
  const [submitted, setSubmitted] = React.useState(false)

  return (
    <div
      className={cn("min-h-screen", !bgColor && "rk-field", className)}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
    >
      <div className="mx-auto max-w-[900px] px-[var(--space-5)] py-[var(--space-9)] sm:px-[var(--gutter-page)]">
        {/* ── Avatar ── */}
        {avatar && <SqueezeAvatar avatar={avatar} />}

        {/* ── Title ── */}
        <h1 className="heading-xl mt-[var(--space-5)]">{title}</h1>

        {/* ── Video ── */}
        <div className="mt-[var(--space-7)]">
          <SqueezeVideoEmbed video={video} />
        </div>

        {/* ── Form ── */}
        <div className="mt-[var(--space-7)]">
          {!submitted ? (
            <SqueezeOptInForm form={form} onSuccess={() => setSubmitted(true)} />
          ) : (
            <SqueezeSuccess
              message={form.successMessage ?? "Check your inbox — it's on the way."}
            />
          )}
        </div>

        {/* ── Testimonial ── */}
        {testimonial && (
          <div className="mt-[var(--space-8)]">
            <SqueezeTestimonialCard testimonial={testimonial} />
          </div>
        )}

        {/* ── Profile ── */}
        {profile && (
          <div className="mt-[var(--space-8)]">
            <SqueezeProfileCard profile={profile} />
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Sub-components ───

/** Small avatar above the title. */
function SqueezeAvatar({ avatar }: { avatar: SqueezePageAvatar }) {
  return (
    <div className="relative h-16 w-16 overflow-hidden rounded-[var(--radius-md)] border border-hairline">
      <Image
        src={avatar.src}
        alt={avatar.alt}
        fill
        className="object-cover"
        sizes="64px"
        priority
      />
    </div>
  )
}

function SqueezeVideoEmbed({ video }: { video: SqueezePageVideo }) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-lg)] border border-hairline bg-surface-card">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src={video.embedUrl}
          title={video.title ?? "Video"}
          className="absolute inset-0 h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  )
}

function SqueezeOptInForm({
  form,
  onSuccess,
}: {
  form: SqueezePageForm
  onSuccess: () => void
}) {
  const [submitError, setSubmitError] = React.useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: "" },
  })

  const onSubmit = async (data: EmailFormData) => {
    setSubmitError(null)
    try {
      const res = await fetch(form.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          submittedAt: new Date().toISOString(),
        }),
      })
      if (!res.ok) {
        setSubmitError("Something went wrong. Please try again.")
        return
      }
      onSuccess()
    } catch {
      setSubmitError("Unable to connect. Please try again later.")
    }
  }

  return (
    <div className="max-w-xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Input
            id="squeeze-email"
            type="email"
            placeholder={form.placeholder ?? "Email address"}
            aria-label={form.placeholder ?? "Email address"}
            aria-invalid={!!errors.email}
            className="flex-1"
            {...register("email")}
          />

          {/* The one primary CTA on this page */}
          <Button type="submit" shape="pill" className="shrink-0" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader2 size={16} strokeWidth={1.75} className="animate-spin" />
            ) : (
              form.buttonText
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
    </div>
  )
}

function SqueezeSuccess({ message }: { message: string }) {
  return (
    <div className="rk-card animate-fade-in max-w-md p-[var(--space-5)]">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)] bg-surface-inset">
        <Check size={24} strokeWidth={1.75} className="text-status-positive" />
      </div>
      <p className="text-[length:var(--size-body-l)] font-medium text-text-primary">{message}</p>
    </div>
  )
}

function SqueezeTestimonialCard({
  testimonial,
}: {
  testimonial: SqueezePageTestimonial
}) {
  return (
    <div className="rk-card overflow-hidden p-[var(--space-5)] md:p-[var(--space-7)]">
      <div className="flex flex-col gap-[var(--space-5)] md:flex-row md:items-start">
        {/* Avatar */}
        <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-[var(--radius-lg)] border border-hairline md:h-44 md:w-44">
          <Image
            src={testimonial.avatar.src}
            alt={testimonial.avatar.alt}
            fill
            className="object-cover"
            sizes="176px"
          />
        </div>

        {/* Quote + attribution */}
        <div className="flex flex-col justify-center">
          <blockquote className="text-[length:var(--size-body-l)] leading-[var(--leading-loose)] text-text-secondary [&_mark]:bg-[var(--purple-a24)] [&_mark]:px-0.5 [&_mark]:text-text-primary">
            {testimonial.quote}
          </blockquote>

          <div className="mt-[var(--space-5)]">
            <p className="text-[length:var(--size-h4)] font-bold text-text-primary">
              {testimonial.name}
            </p>
            <p className="mt-0.5 text-[length:var(--size-body-s)] text-text-tertiary">
              {testimonial.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SqueezeProfileCard({ profile }: { profile: SqueezePageProfile }) {
  return (
    <div className="rk-card overflow-hidden p-[var(--space-5)] md:p-[var(--space-7)]">
      <div className="flex flex-col gap-[var(--space-5)] md:flex-row md:items-start">
        {/* Avatar */}
        <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-[var(--radius-lg)] border border-hairline md:h-44 md:w-44">
          <Image
            src={profile.avatar.src}
            alt={profile.avatar.alt}
            fill
            className="object-cover"
            sizes="176px"
          />
        </div>

        {/* Name + bio */}
        <div className="flex flex-col justify-center">
          <p className="text-[length:var(--size-h4)] font-bold text-text-primary">
            {profile.name}
          </p>
          <p className="mt-0.5 text-[length:var(--size-body-s)] font-medium text-text-tertiary">
            {profile.tagline}
          </p>
          <div className="mt-[var(--space-4)] text-[length:var(--size-body-l)] leading-[var(--leading-loose)] text-text-secondary">
            {profile.bio}
          </div>
        </div>
      </div>
    </div>
  )
}
