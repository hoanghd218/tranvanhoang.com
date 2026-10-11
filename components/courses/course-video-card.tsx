import { ExternalLink, Play, Video } from "lucide-react"

type CourseVideoCardProps = {
  number: number
  title: string
  description: string
  topics: string[]
  embedUrl: string | null
  shareUrl: string
  available: boolean
  watchLabel: string
  unavailableLabel: string
  unavailableDescription: string
  unavailableLinkLabel: string
  workshopLabel: string
}

const chipClass =
  "rounded-[var(--radius-pill)] border border-hairline bg-surface-overlay px-3 py-1 text-xs text-text-secondary"

const linkClass =
  "inline-flex min-h-11 items-center gap-2 text-sm font-medium text-text-accent transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:text-purple-300"

export function CourseVideoCard({
  number,
  title,
  description,
  topics,
  embedUrl,
  shareUrl,
  available,
  watchLabel,
  unavailableLabel,
  unavailableDescription,
  unavailableLinkLabel,
  workshopLabel,
}: CourseVideoCardProps) {
  return (
    <article className="rk-card p-5 md:p-7">
      <div className="flex items-start gap-4">
        <span className="font-display shrink-0 pt-1 text-xl leading-none font-bold text-rocket">
          {String(number).padStart(2, "0")}
        </span>
        <div>
          <p className="eyebrow mb-2">
            {workshopLabel} {number}
          </p>
          <h2 className="font-display text-xl font-bold tracking-tight text-text-primary md:text-2xl">
            {title}
          </h2>
          <p className="mt-2 max-w-[var(--max-width-prose)] text-sm leading-relaxed text-text-secondary">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {topics.map((topic) => (
          <span key={topic} className={chipClass}>
            {topic}
          </span>
        ))}
      </div>

      {available && embedUrl ? (
        <div className="mt-6">
          <div className="aspect-video overflow-hidden rounded-[var(--radius-lg)] border border-hairline bg-void">
            <iframe
              src={embedUrl}
              title={`${number}. ${title}`}
              className="h-full w-full border-0"
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mt-4 flex items-center justify-between gap-4 border-t border-hairline pt-3">
            <span className="flex items-center gap-2 text-sm text-text-tertiary">
              <Play size={16} strokeWidth={1.75} aria-hidden="true" /> Fathom video
            </span>
            <a href={shareUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {watchLabel} <ExternalLink size={16} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center justify-center rounded-[var(--radius-lg)] border border-hairline bg-surface-inset p-8 text-center">
          <Video size={24} strokeWidth={1.75} className="text-text-tertiary" aria-hidden="true" />
          <h3 className="font-display mt-4 text-lg font-bold tracking-tight text-text-primary">
            {unavailableLabel}
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-text-secondary">
            {unavailableDescription}
          </p>
          <a href={shareUrl} target="_blank" rel="noopener noreferrer" className={`${linkClass} mt-4`}>
            {unavailableLinkLabel} <ExternalLink size={16} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </div>
      )}
    </article>
  )
}
