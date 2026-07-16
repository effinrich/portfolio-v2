import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { getCaseStudies } from '#/features/content/queries'
import { PortfolioLayout } from '#/features/layout/portfolio-layout'
import { GlassPanel } from '#/features/ui/glass-panel'
import { SectionHeader } from '#/features/ui/section-header'

export function CaseStudiesPage() {
  const caseStudies = getCaseStudies()

  return (
    <PortfolioLayout activeItem="case-studies">
      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
        <SectionHeader
          eyebrow="Case Studies"
          title={
            <>
              Deep dives into <span className="neon-text">impact</span>
            </>
          }
          description="Architecture decisions, metrics, and lessons from enterprise-scale frontend platform work."
        />

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <GlassPanel
              key={study.slug}
              className={`grid gap-8 rounded-3xl p-8 md:grid-cols-3 md:p-10 stagger-${index + 1}`}
            >
              <div className="md:col-span-2">
                <div className="mb-4 flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] text-white/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">{study.title}</h2>
                <p className="mb-4 text-white/40">{study.subtitle}</p>
                <p className="mb-6 leading-relaxed text-white/60">{study.summary}</p>
                <Link
                  to="/case-studies/$slug"
                  params={{ slug: study.slug }}
                  className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-[#ffe54c]"
                >
                  Read case study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col justify-center gap-6 border-t border-white/10 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8">
                {study.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="text-3xl font-bold text-white">{metric.value}</p>
                    <p className="font-mono text-xs text-white/40">{metric.label}</p>
                  </div>
                ))}
              </div>
            </GlassPanel>
          ))}
        </div>
      </main>
    </PortfolioLayout>
  )
}
