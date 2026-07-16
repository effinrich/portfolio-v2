import type { ReactNode } from "react"
import { cn } from "#/lib/cn"

type SectionHeaderProps = {
  eyebrow?: string
  title: ReactNode
  description?: string
  className?: string
}

export function SectionHeader({ eyebrow, title, description, className }: SectionHeaderProps) {
  return (
    <header className={cn("mb-16 md:mb-24", className)}>
      {eyebrow ? (
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-12 bg-gold/40" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</span>
        </div>
      ) : null}
      <h1 className="mb-8 text-5xl font-bold tracking-tighter md:text-7xl">{title}</h1>
      {description ? (
        <p className="max-w-2xl text-xl leading-relaxed text-white/50">{description}</p>
      ) : null}
    </header>
  )
}
