/**
 * Squeeze Page Types
 *
 * Type definitions for the reusable SqueezePage component.
 * Inspired by mikefutia.com squeeze page layout.
 */

import type { ReactNode } from "react"

/**
 * Avatar configuration
 */
export interface SqueezePageAvatar {
  src: string
  alt: string
}

/**
 * Video embed configuration
 */
export interface SqueezePageVideo {
  /** Embed URL (Loom, YouTube, Vimeo) */
  embedUrl: string
  /** Accessible title for the iframe */
  title?: string
}

/**
 * Testimonial configuration
 */
export interface SqueezePageTestimonial {
  avatar: SqueezePageAvatar
  /** Supports ReactNode for <mark> highlights */
  quote: ReactNode
  name: string
  /** Role/company, e.g. "COO, Kitsch" */
  title: string
}

/**
 * Author profile section
 */
export interface SqueezePageProfile {
  avatar: SqueezePageAvatar
  name: string
  /** Role / tagline, e.g. "AI Educator & Content Creator" */
  tagline: string
  /** Short bio (supports ReactNode for formatting) */
  bio: ReactNode
}

/**
 * Form configuration
 */
export interface SqueezePageForm {
  /** Input placeholder (default: "Email address") */
  placeholder?: string
  /** CTA button text */
  buttonText: string
  /** n8n / webhook URL for form submission */
  webhookUrl: string
  /** Message shown after successful submission */
  successMessage?: string
  /** Accent color for border + button (default: "#FCDD8D") */
  accentColor?: string
}

/**
 * Full SqueezePage component props
 */
export interface SqueezePageProps {
  /** Circular avatar at the top */
  avatar?: SqueezePageAvatar
  /** Main heading (supports ReactNode for line breaks) */
  title: ReactNode
  /** Video embed section */
  video: SqueezePageVideo
  /** Email opt-in form */
  form: SqueezePageForm
  /** Optional testimonial card */
  testimonial?: SqueezePageTestimonial
  /** Optional author profile card */
  profile?: SqueezePageProfile
  /** Page background color (default: "#EDF0F5") */
  bgColor?: string
  /** Additional className for the root element */
  className?: string
}
