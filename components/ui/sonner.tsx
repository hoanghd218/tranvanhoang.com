"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

/**
 * Rocket AI toast: raised surface, one hairline, shadow for depth (no glow).
 * Status hues come from the --status-* tokens, applied to the icon only.
 */
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" strokeWidth={1.75} />,
        info: <InfoIcon className="size-4" strokeWidth={1.75} />,
        warning: <TriangleAlertIcon className="size-4" strokeWidth={1.75} />,
        error: <OctagonXIcon className="size-4" strokeWidth={1.75} />,
        loading: (
          <Loader2Icon className="size-4 animate-spin" strokeWidth={1.75} />
        ),
      }}
      toastOptions={{
        classNames: {
          toast:
            "bg-surface-raised! text-text-primary! border-hairline! shadow-md!",
          description: "text-text-secondary!",
          actionButton: "bg-rocket! text-stone!",
          cancelButton: "bg-surface-inset! text-text-secondary!",
          success: "[&_[data-icon]]:text-status-positive",
          info: "[&_[data-icon]]:text-status-info",
          warning: "[&_[data-icon]]:text-status-warning",
          error: "[&_[data-icon]]:text-status-critical",
        },
      }}
      style={
        {
          "--normal-bg": "var(--surface-raised)",
          "--normal-text": "var(--text-primary)",
          "--normal-border": "var(--border-subtle)",
          "--border-radius": "var(--radius-lg)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
