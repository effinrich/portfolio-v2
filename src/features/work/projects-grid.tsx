import type { Project } from "#/features/content/seed-data"
import { ProjectCard } from "#/features/work/project-card"

type ProjectsGridProps = {
  projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div key={project.slug} className={`stagger-${Math.min(index + 1, 6)}`}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  )
}
