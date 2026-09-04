import { createFileRoute } from "@tanstack/react-router"
import { getProjects } from "#/features/content/queries"
import { WorkPage } from "#/features/work/work-page"

export const Route = createFileRoute("/work")({
  loader: async () => {
    const projects = await getProjects()
    return projects.filter((project) => project.featured)
  },
  component: WorkRoute,
})

function WorkRoute() {
  const projects = Route.useLoaderData()
  return <WorkPage projects={projects} />
}
