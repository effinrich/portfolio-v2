import { Link } from "@tanstack/react-router"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { PortfolioLayout } from "#/features/layout/portfolio-layout"
import { Badge } from "#/features/ui/badge"
import { GlassPanel } from "#/features/ui/glass-panel"

export function ForgekitMcpPage() {
  return (
    <PortfolioLayout activeItem="projects">
      <main className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-24">
        <Link
          to="/work"
          className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white/40 transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Work
        </Link>

        <header className="mb-12">
          <Badge variant="gold" className="mb-6">
            Open Source · MCP
          </Badge>
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            ForgeKit <span className="neon-text">MCP</span>
          </h1>
          <p className="text-xl leading-relaxed text-white/50">
            Model Context Protocol server integrating Figma designs as structured context for AI
            coding assistants.
          </p>
        </header>

        <div className="mb-12 grid grid-cols-3 gap-4">
          {[
            { value: "5,703+", label: "npm installs" },
            { value: "200+", label: "components mapped" },
            { value: "4", label: "IDE integrations" },
          ].map((metric) => (
            <GlassPanel key={metric.label} className="rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-gold">{metric.value}</p>
              <p className="font-mono text-[10px] text-white/40">{metric.label}</p>
            </GlassPanel>
          ))}
        </div>

        <article className="space-y-6">
          <p className="text-lg leading-relaxed text-white/70">
            ForgeKit MCP is a Model Context Protocol server that integrates directly with AI coding
            assistants like Cursor, Windsurf, and Claude Desktop. It exposes Figma designs as
            structured context — allowing AI agents to generate pixel-accurate React components from
            design files without manual screenshot interpretation.
          </p>
          <p className="text-lg leading-relaxed text-white/70">
            The server parses Figma component trees, resolves design tokens, and returns layout
            constraints that AI models can use to generate code matching your design system — not
            generic Tailwind output.
          </p>
        </article>

        <GlassPanel className="mt-12 rounded-2xl border-l-4 border-l-cyan p-8">
          <h3 className="mb-4 text-xl font-bold">Try it</h3>
          <a
            href="https://forgekit.cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan transition-colors hover:text-white"
          >
            forgekit.cloud
            <ExternalLink className="h-4 w-4" />
          </a>
        </GlassPanel>
      </main>
    </PortfolioLayout>
  )
}
