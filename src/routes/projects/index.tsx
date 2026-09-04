import { createFileRoute } from "@tanstack/react-router"
import { getProjects } from "#/features/content/queries"
import { ProjectsPage } from "#/features/projects/projects-page"

export const Route = createFileRoute("/projects/")({
  loader: () => getProjects(),
  component: ProjectsRoute,
})

function ProjectsRoute() {
  const projects = Route.useLoaderData()
  return <ProjectsPage projects={projects} />
}
