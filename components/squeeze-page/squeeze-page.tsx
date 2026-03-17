"use client"

import * as React from "react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2, CheckCircle } from "lucide-react"
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
export function SqueezePage({
  avatar,
  title,
  video,
  form,
  testimonial,
  profile,
  bgColor = "#EDF0F5",
  className,
}: SqueezePageProps) {
  const [submitted, setSubmitted] = React.useState(false)

  return (
    <div
      className={cn("min-h-screen", className)}
      style={{ backgroundColor: bgColor }}
    >
      <div className="mx-auto max-w-[900px] px-5 py-16 md:py-24">
        {/* ── Avatar ── */}
        {avatar && <SqueezeAvatar avatar={avatar} />}

        {/* ── Title ── */}
        <h1 className="mt-6 text-center text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-[#0C1115]">
          {title}
        </h1>

        {/* ── Video ── */}
        <div className="mt-10">
          <SqueezeVideoEmbed video={video} />
        </div>

        {/* ── Form ── */}
        <div className="mt-10">
          {!submitted ? (
            <SqueezeOptInForm
              form={form}
              onSuccess={() => setSubmitted(true)}
            />
          ) : (
            <SqueezeSuccess
              message={form.successMessage ?? "Check your inbox — it's on the way!"}
              accentColor={form.accentColor}
            />
          )}
        </div>

        {/* ── Testimonial ── */}
        {testimonial && (
          <div className="mt-12">
            <SqueezeTestimonialCard testimonial={testimonial} />
          </div>
        )}

        {/* ── Profile ── */}
        {profile && (
          <div className="mt-12">
            <SqueezeProfileCard profile={profile} />
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Sub-components ───

/** Small circular avatar above the title */
function SqueezeAvatar({ avatar }: { avatar: SqueezePageAvatar }) {
  return (
    <div className="flex justify-center">
      <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white shadow-lg">
        <Image
          src={avatar.src}
          alt={avatar.alt}
          fill
          className="object-cover"
          sizes="64px"
          priority
        />
      </div>
    </div>
  )
}

function SqueezeVideoEmbed({ video }: { video: SqueezePageVideo }) {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg">
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
  const accentColor = form.accentColor ?? "#FCDD8D"
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
    <div className="mx-auto max-w-xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className="flex items-center gap-3 rounded-lg border-2 p-2 transition-all focus-within:shadow-md"
          style={{
            borderColor: accentColor,
            backgroundColor: "#ffffff",
          }}
        >
          {/* Email input */}
          <input
            id="squeeze-email"
            type="email"
            placeholder={form.placeholder ?? "Email address"}
            className="flex-1 border-0 bg-transparent px-4 py-3 text-base text-[#0C1115] outline-none placeholder:text-gray-400"
            {...register("email")}
          />

          {/* CTA button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="shrink-0 rounded-md px-6 py-3 text-sm font-bold text-[#0C1115] transition-all hover:brightness-95 active:scale-[0.97] disabled:opacity-60 md:text-base"
            style={{ backgroundColor: accentColor }}
          >
            {isSubmitting ? (
              <Loader2 className="mx-auto h-5 w-5 animate-spin" />
            ) : (
              form.buttonText
            )}
          </button>
        </div>

        {errors.email && (
          <p className="mt-2 text-center text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
        {submitError && (
          <p className="mt-2 text-center text-sm text-red-500">
            {submitError}
          </p>
        )}
      </form>
    </div>
  )
}

function SqueezeSuccess({
  message,
  accentColor,
}: {
  message: string
  accentColor?: string
}) {
  return (
    <div className="mx-auto max-w-md animate-fade-in text-center">
      <div
        className="rounded-xl border p-6 shadow-sm"
        style={{
          borderColor: accentColor ?? "#FCDD8D",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full"
          style={{ backgroundColor: `${accentColor ?? "#FCDD8D"}33` }}
        >
          <CheckCircle className="h-7 w-7 text-green-600" />
        </div>
        <p className="text-lg font-semibold text-[#0C1115]">
          {message}
        </p>
      </div>
    </div>
  )
}

function SqueezeTestimonialCard({
  testimonial,
}: {
  testimonial: SqueezePageTestimonial
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
        {/* Avatar */}
        <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full md:h-44 md:w-44">
          <Image
            src={testimonial.avatar.src}
            alt={testimonial.avatar.alt}
            fill
            className="object-cover"
            sizes="176px"
          />
        </div>

        {/* Quote + attribution */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <blockquote className="text-base leading-relaxed text-gray-700 md:text-lg [&_mark]:bg-[#FCDD8D] [&_mark]:px-0.5 [&_mark]:text-inherit">
            {testimonial.quote}
          </blockquote>

          <div className="mt-5">
            <p className="text-xl font-bold text-[#0C1115] md:text-2xl">
              {testimonial.name}
            </p>
            <p className="mt-0.5 text-sm text-gray-500">
              {testimonial.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function SqueezeProfileCard({
  profile,
}: {
  profile: SqueezePageProfile
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
        {/* Avatar */}
        <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full md:h-44 md:w-44">
          <Image
            src={profile.avatar.src}
            alt={profile.avatar.alt}
            fill
            className="object-cover"
            sizes="176px"
          />
        </div>

        {/* Name + bio */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="text-xl font-bold text-[#0C1115] md:text-2xl">
            {profile.name}
          </p>
          <p className="mt-0.5 text-sm font-medium text-gray-500">
            {profile.tagline}
          </p>
          <div className="mt-4 text-base leading-relaxed text-gray-700">
            {profile.bio}
          </div>
        </div>
      </div>
    </div>
  )
}
