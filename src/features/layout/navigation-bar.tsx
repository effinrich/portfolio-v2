import { Link } from "@tanstack/react-router"
import { PRIMARY_NAV } from "#/features/layout/types"
import type { NavItem } from "#/features/layout/types"
import { cn } from "#/lib/cn"

type NavigationBarProps = {
  activeItem?: NavItem
  isAvailable?: boolean
}

export function NavigationBar({ activeItem = "home", isAvailable = true }: NavigationBarProps) {
  return (
    <nav className="fixed top-0 left-0 z-40 w-full border-b border-white/10 px-6 py-4 glass-panel">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded border border-white/20 bg-zinc-900 font-mono text-sm font-bold text-gold">
            R
          </div>
          <span className="hidden font-medium tracking-tight text-white/90 sm:inline-block">
            Rich Tillman{" "}
            <span className="font-normal text-white/40">/ Principal Frontend Engineer</span>
          </span>
        </Link>

        <div className="hidden items-center gap-12 text-sm font-medium md:flex">
          {PRIMARY_NAV.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "transition-colors",
                activeItem === link.item ? "text-white" : "text-white/60 hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {isAvailable ? (
          <div className="flex items-center gap-3 rounded-full border border-gold/30 bg-gold/5 px-3 py-1.5 glass-panel">
            <div className="h-2 w-2 animate-pulse rounded-full bg-gold" />
            <span className="text-xs font-medium text-gold">Available</span>
          </div>
        ) : null}
      </div>
    </nav>
  )
}
