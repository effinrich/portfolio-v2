import { Link } from '@tanstack/react-router'
import { Box } from 'lucide-react'
import type { Project } from '#/features/content/seed-data'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const className =
    'project-card group glass-panel block overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-gold/40 hover:shadow-[0_0_20px_rgba(255,215,0,0.1)]'

  const cardContent = (
    <>
      <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-white/5 to-transparent">
        <Box className="project-icon h-12 w-12 text-white/30 transition-all duration-500 group-hover:scale-110 group-hover:text-gold" />
        <div className="project-img-overlay absolute inset-0 bg-gold/10 opacity-0 transition-opacity duration-500" />
      </div>
      <div className="p-6">
        {project.metric ? (
          <span className="mb-3 inline-block font-mono text-[10px] uppercase tracking-widest text-gold">
            {project.metric}
          </span>
        ) : null}
        <h3 className="mb-2 text-xl font-bold tracking-tight text-white">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-white/50">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  )

  if (project.href.startsWith('http')) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer" className={className}>
        {cardContent}
      </a>
    )
  }

  if (project.href === '/projects/forgekit-mcp') {
    return (
      <Link to="/projects/forgekit-mcp" className={className}>
        {cardContent}
      </Link>
    )
  }

  if (project.href.startsWith('/case-studies/')) {
    const slug = project.href.replace('/case-studies/', '')
    return (
      <Link to="/case-studies/$slug" params={{ slug }} className={className}>
        {cardContent}
      </Link>
    )
  }

  if (project.href.startsWith('/insights/')) {
    const slug = project.href.replace('/insights/', '')
    return (
      <Link to="/insights/$slug" params={{ slug }} className={className}>
        {cardContent}
      </Link>
    )
  }

  return (
    <Link to="/work" className={className}>
      {cardContent}
    </Link>
  )
}
