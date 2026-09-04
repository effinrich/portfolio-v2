import { Link } from "@tanstack/react-router"
import { ArrowRight } from "lucide-react"
import type { Project } from "#/features/content/seed-data"
import { PortfolioLayout } from "#/features/layout/portfolio-layout"
import { SectionHeader } from "#/features/ui/section-header"
import { ProjectsGrid } from "#/features/work/projects-grid"

type ProjectsPageProps = {
  projects: Project[]
}

export function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <PortfolioLayout activeItem="projects">
      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
        <SectionHeader
          eyebrow="Projects"
          title={
            <>
              Everything I've <span className="neon-text">built</span>
            </>
          }
          description="The complete catalog — products, design systems, case studies, and deep dives, in one place."
        />

        <ProjectsGrid projects={projects} />

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
