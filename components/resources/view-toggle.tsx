/**
 * View Toggle Component
 *
 * Toggles between card and grid view with localStorage persistence
 */
"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Grid3X3, List } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type ViewMode = "card" | "grid"

interface ViewToggleProps {
  defaultView?: ViewMode
  className?: string
  onChange?: (view: ViewMode) => void
}

const VIEW_MODE_STORAGE_KEY = "resources-view-mode"

function getStoredViewMode(defaultView: ViewMode): ViewMode {
  if (typeof window === "undefined") return defaultView
  const stored = localStorage.getItem(VIEW_MODE_STORAGE_KEY) as ViewMode | null
  return stored && (stored === "card" || stored === "grid") ? stored : defaultView
}

// Loading placeholder for client-only rendering
function ViewToggleSkeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-[var(--radius-pill)] border border-hairline bg-surface-inset p-1",
        className
      )}
    >
      <div className="h-9 w-9" />
      <div className="h-9 w-9" />
    </div>
  )
}

// Client-only wrapper component
function ViewToggleInner({
  defaultView = "card",
  className,
  onChange,
}: ViewToggleProps) {
  const [view, setView] = useState<ViewMode>(() => getStoredViewMode(defaultView))

  // Save preference and notify on change
  const handleViewChange = (newView: ViewMode) => {
    setView(newView)
    localStorage.setItem(VIEW_MODE_STORAGE_KEY, newView)
    onChange?.(newView)
  }

  // Segmented control: hairline shell, pill radius. The selected segment takes a
  // purple tint plus a purple hairline — never a solid purple fill.
  const segment = (selected: boolean) =>
    cn(
      "h-9 w-9 rounded-[var(--radius-pill)] border",
      selected
        ? "border-hairline-accent bg-[var(--purple-a12)] text-text-accent"
        : "border-transparent text-text-secondary hover:bg-surface-overlay hover:text-text-primary"
    )

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-[var(--radius-pill)] border border-hairline bg-surface-inset p-1",
        className
      )}
      role="group"
    >
      <Button
        variant="ghost"
        size="icon-sm"
        shape="pill"
        onClick={() => handleViewChange("card")}
        className={segment(view === "card")}
        aria-label="Card view"
        aria-pressed={view === "card"}
      >
        <Grid3X3 size={16} strokeWidth={1.75} />
      </Button>

      <Button
        variant="ghost"
        size="icon-sm"
        shape="pill"
        onClick={() => handleViewChange("grid")}
        className={segment(view === "grid")}
        aria-label="List view"
        aria-pressed={view === "grid"}
      >
        <List size={16} strokeWidth={1.75} />
      </Button>
    </div>
  )
}

// Dynamically import with SSR disabled to avoid hydration issues
const ViewToggleComponent = dynamic(
  () => Promise.resolve(ViewToggleInner),
  { ssr: false, loading: () => <ViewToggleSkeleton /> }
)

export function ViewToggle(props: ViewToggleProps) {
  return <ViewToggleComponent {...props} />
}
