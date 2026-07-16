import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import type { Project } from '#/features/content/seed-data'
import { PortfolioLayout } from '#/features/layout/portfolio-layout'
import { SectionHeader } from '#/features/ui/section-header'
import { ProjectCard } from '#/features/work/project-card'

type WorkPageProps = {
  projects: Project[]
}

export function WorkPage({ projects }: WorkPageProps) {
  return (
    <PortfolioLayout activeItem="work">
      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
        <SectionHeader
          eyebrow="Selected Work"
          title={
            <>
              Portfolio <span className="neon-text">projects</span>
            </>
          }
          description="TokenCast, ForgeKit MCP, MCP Atlas — tools and platforms at the intersection of design systems and AI-native development."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={project.slug} className={`stagger-${Math.min(index + 1, 6)}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-6 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
          >
            Discuss a project
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    </PortfolioLayout>
  )
}
