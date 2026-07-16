import { Link } from "@tanstack/react-router"
import { ArrowLeft } from "lucide-react"
import type { CaseStudy } from "#/features/content/seed-data"
import { PortfolioLayout } from "#/features/layout/portfolio-layout"
import { GlassPanel } from "#/features/ui/glass-panel"

type CaseStudyDetailPageProps = {
  caseStudy: CaseStudy
}

const DETAIL_CONTENT: Record<string, string[]> = {
  "nx-monorepo": [
    "When I joined, three React apps shared no code. Twelve months later, 40+ packages powered every product team with a shared design system, auth layer, and data fetching utilities.",
    "The key architectural decision was treating the monorepo as a product — with its own CI pipeline, documentation site, and developer onboarding. Nx affected graph optimization reduced CI build times by 65%.",
    "Each team owned their app but consumed shared libraries through strict API boundaries. Breaking changes required migration guides and codemods — never silent failures.",
  ],
  "forgekit-mcp": [
    "ForgeKit MCP exposes Figma designs as structured context for AI coding assistants. Instead of screenshot interpretation, the MCP server returns component trees, design tokens, and layout constraints.",
    "The server architecture uses Figma REST API for file metadata and a custom parser for component instance resolution. Results are cached with Supabase Realtime for collaborative sessions.",
    "Reaching 5,700+ npm installs validated the thesis: developers want AI tools that understand their design system, not generic code generators.",
  ],
  "design-system-scale": [
    "Building a 200+ component design system requires more than Storybook stories — it requires governance, visual regression, and token pipelines that keep Figma and code in sync.",
    "Chromatic integration caught 98% of visual regressions before they reached consumer apps. Figma Code Connect mapped 150+ components to their React implementations.",
    "The system served 8 product teams with zero breaking changes over 18 months — achieved through semver discipline and automated migration tooling.",
  ],
}

export function CaseStudyDetailPage({ caseStudy }: CaseStudyDetailPageProps) {
  const content = DETAIL_CONTENT[caseStudy.slug] ?? [caseStudy.summary]

  return (
    <PortfolioLayout activeItem="case-studies">
      <main className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-24">
        <Link
          to="/case-studies"
          className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/40 transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Case Studies
        </Link>

        <header className="mb-12">
          <div className="mb-4 flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] text-white/40"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">{caseStudy.title}</h1>
          <p className="text-xl text-white/40">{caseStudy.subtitle}</p>
        </header>

        <div className="mb-12 grid grid-cols-3 gap-6">
          {caseStudy.metrics.map((metric) => (
            <GlassPanel key={metric.label} className="rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-gold">{metric.value}</p>
              <p className="font-mono text-[10px] text-white/40">{metric.label}</p>
            </GlassPanel>
          ))}
        </div>

        <article>
          {content.map((paragraph, index) => (
            <p key={index} className="mb-6 text-lg leading-relaxed text-white/70">
              {paragraph}
            </p>
          ))}
        </article>
      </main>
    </PortfolioLayout>
  )
}
