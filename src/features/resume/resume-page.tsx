import { getResumeSections } from "#/features/content/queries"
import { PortfolioLayout } from "#/features/layout/portfolio-layout"
import { GlassPanel } from "#/features/ui/glass-panel"
import { SectionHeader } from "#/features/ui/section-header"

export function ResumePage() {
  const resume = getResumeSections()

  return (
    <PortfolioLayout activeItem="resume">
      <main className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-24">
        <SectionHeader
          eyebrow="Resume"
          title={
            <>
              Rich <span className="neon-text">Tillman</span>
            </>
          }
          description="Principal Frontend Engineer · Design Systems · Nx Monorepos · AI-Native Tooling"
        />

        <GlassPanel className="mb-12 rounded-2xl p-8">
          <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-gold">Summary</h2>
          <p className="leading-relaxed text-white/70">{resume.summary}</p>
        </GlassPanel>

        <section className="mb-12">
          <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-white/30">
            Experience
          </h2>
          <div className="space-y-8">
            {resume.experience.map((job) => (
              <GlassPanel key={job.title + job.company} className="rounded-2xl p-8">
                <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{job.title}</h3>
                    <p className="text-white/40">{job.company}</p>
                  </div>
                  <span className="font-mono text-xs text-white/30">{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm text-white/60">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </GlassPanel>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-white/30">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {resume.skills.map((skill) => (
              <span
                key={skill}
                className="glass-panel rounded-full px-4 py-2 font-mono text-xs text-white/60"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </main>
    </PortfolioLayout>
  )
}
