import { Link } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight, MousePointerClick } from 'lucide-react'
import { METRICS } from '#/features/content/seed-data'
import { PortfolioLayout } from '#/features/layout/portfolio-layout'
import { GlassPanel } from '#/features/ui/glass-panel'

export function HomePage() {
  return (
    <PortfolioLayout activeItem="home" showTicker>
      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-32 pb-24">
        <div className="pointer-events-auto max-w-4xl space-y-8">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="glass-panel flex items-center gap-2 rounded-full px-3 py-1.5 text-white/70 transition-colors hover:bg-white/5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Remote
            </span>
            <span className="glass-panel rounded-full px-3 py-1.5 text-white/70 transition-colors hover:bg-white/5">
              React + TypeScript
            </span>
            <span className="glass-panel rounded-full px-3 py-1.5 text-white/70 transition-colors hover:bg-white/5">
              Storybook • Chromatic
            </span>
            <span className="glass-panel rounded-full px-3 py-1.5 text-white/70 transition-colors hover:bg-white/5">
              Nx monorepos at scale
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tighter text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl">
            Building the bridge between design{' '}
            <span className="neon-text">systems</span> and AI-native developer tooling.
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed font-normal text-white/60 md:text-xl">
            I&apos;m <span className="font-medium text-white">Rich Tillman</span> — Principal
            Frontend Engineer. I architect{' '}
            <span className="font-medium text-white">enterprise-scale</span> React platforms, Nx
            monorepos, and 0→1 SaaS products — and the design systems (Storybook + React + Figma)
            that keep design, product, and engineering shipping in lockstep.
          </p>

          <div className="flex flex-col flex-wrap items-start gap-4 pt-4 sm:flex-row sm:items-center">
            <Link
              to="/work"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-black shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-500 hover:scale-105 hover:bg-[#ffe54c] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] sm:w-auto"
            >
              See selected work
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              to="/contact"
              className="glass-panel flex w-full items-center justify-center rounded-full px-6 py-3 font-medium text-white transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] sm:w-auto"
            >
              Get in touch
            </Link>
            <a
              href="https://forgekit.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-lg px-4 py-3 text-sm font-medium text-white/50 transition-colors hover:text-white"
            >
              forgekit.cloud
              <ArrowUpRight className="h-3 w-3" aria-hidden />
            </a>
          </div>
        </div>

        <div className="absolute top-1/2 right-8 hidden -translate-y-1/2 animate-pulse flex-col items-center gap-3 text-white/30 lg:flex">
          <MousePointerClick className="h-6 w-6" aria-hidden />
          <span className="vertical-text font-mono text-[10px] uppercase tracking-widest">
            Click bg to randomize
          </span>
        </div>
      </main>

      <div className="pointer-events-auto relative z-10 mx-auto w-full max-w-7xl px-6 pb-12">
        <GlassPanel className="grid grid-cols-1 gap-8 rounded-2xl p-8 md:grid-cols-3 md:gap-12 md:p-10">
          {METRICS.map((metric, index) => (
            <div
              key={metric.label}
              className={`flex flex-col gap-2 ${index > 0 ? 'md:border-l md:border-white/10 md:pl-12' : ''}`}
              style={{ animation: `fade-in-up 0.6s ease-out ${0.1 + index * 0.15}s backwards` }}
            >
              <h3 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                {metric.value}
              </h3>
              <p className="font-mono text-sm text-white/50">{metric.label}</p>
            </div>
          ))}
        </GlassPanel>
      </div>
    </PortfolioLayout>
  )
}
