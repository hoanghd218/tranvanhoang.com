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
    <div className={cn("flex gap-1", className)}>
      <div className="w-8 h-8" />
      <div className="w-8 h-8" />
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

  return (
    <div
      className={cn(
        "flex items-center gap-1 p-1 bg-card border border-border rounded-lg",
        className
      )}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => handleViewChange("card")}
        className={cn(
          "w-8 h-8 rounded-md transition-all",
          view === "card"
            ? "bg-coral text-white hover:bg-coral-dark"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Card view"
        aria-pressed={view === "card"}
      >
        <Grid3X3 className="w-4 h-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => handleViewChange("grid")}
        className={cn(
          "w-8 h-8 rounded-md transition-all",
          view === "grid"
            ? "bg-coral text-white hover:bg-coral-dark"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="List view"
        aria-pressed={view === "grid"}
      >
        <List className="w-4 h-4" />
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
