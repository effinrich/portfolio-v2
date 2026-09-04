export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  metric?: string
  href: string
  image?: string
  featured: boolean
}

export type Article = {
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt: string
  readTime: string
  featured: boolean
  content: string[]
}

export type Testimonial = {
  id: string
  quote: string
  author: string
  role: string
  company: string
}

export type Service = {
  id: string
  title: string
  description: string
  icon: string
}

export type CaseStudy = {
  slug: string
  title: string
  subtitle: string
  tags: string[]
  summary: string
  metrics: { label: string; value: string }[]
  image?: string
  liveHref?: string
}

export type FaqItem = {
  id: string
  question: string
  answer: string
}

export type Resource = {
  id: string
  title: string
  description: string
  category: string
  href: string
}

export const METRICS = [
  { value: "5,703+", label: "npm installs · ForgeKit MCP" },
  { value: "200+", label: "component design system" },
  { value: "500K+", label: "users on shipped RN apps" },
] as const

export const PROJECTS: Project[] = [
  {
    slug: "tokencast",
    title: "TokenCast",
    description:
      "Paste design tokens — Figma variables, CSS custom properties, or a Tailwind config — get a live preview and exportable theme code (Tailwind, Chakra, shadcn/ui), with server-rendered Save & Share links.",
    tags: ["React Router", "Supabase", "Design Tokens"],
    metric: "Lighthouse 100/99",
    href: "https://tokencast.vercel.app",
    image: "/images/projects/tokencast.png",
    featured: true,
  },
  {
    slug: "mcp-atlas",
    title: "MCP Atlas",
    description:
      "A curated, link-verified directory of real Model Context Protocol servers — official and community — searchable and filterable, built with Astro islands.",
    tags: ["Astro", "MCP", "TypeScript"],
    metric: "18 verified servers",
    href: "https://mcp-atlas-orcin.vercel.app",
    image: "/images/projects/mcp-atlas.png",
    featured: true,
  },
  {
    slug: "forgekit-mcp",
    title: "ForgeKit MCP",
    description:
      "Model Context Protocol server integrating Figma designs as structured context for AI coding assistants like Cursor and Claude Desktop.",
    tags: ["MCP", "Figma", "Design Systems"],
    metric: "5,703+ first-week installs",
    href: "/projects/forgekit-mcp",
    image: "/images/projects/forgekit-mcp.png",
    featured: true,
  },
  {
    slug: "storybook-system",
    title: "Storybook System",
    description:
      "Enterprise design system with 200+ components, Chromatic visual regression, and Figma Code Connect across 8 consumer apps.",
    tags: ["Storybook", "Chromatic", "React"],
    metric: "200+ components",
    href: "/case-studies/design-system-scale",
    image: "/images/projects/storybook-system.svg",
    featured: true,
  },
  {
    slug: "flagship-mobile",
    title: "Flagship Mobile App",
    description:
      "React Native platform serving 500K+ users with shared design tokens, OTA updates, and monorepo parity with web.",
    tags: ["React Native", "Expo", "Mobile"],
    metric: "500K+ users",
    href: "/insights/shipping-react-native-at-scale",
    image: "/images/projects/flagship-mobile.svg",
    featured: false,
  },
  {
    slug: "nx-monorepo-scale",
    title: "Nx Monorepo Scale",
    description:
      "Scaled from 3 apps to 40+ packages across 12 product teams with shared design system, auth, and data layers.",
    tags: ["Nx", "Monorepo", "CI/CD"],
    metric: "65% faster CI",
    href: "/case-studies/nx-monorepo",
    image: "/images/projects/nx-monorepo-scale.svg",
    featured: true,
  },
  {
    slug: "tanstack-migration",
    title: "TanStack Migration",
    description:
      "Full-stack React migration to TanStack Start with file-based routing, SSR, and Cloudflare Workers deployment.",
    tags: ["TanStack Start", "SSR", "Cloudflare"],
    metric: "Framework",
    href: "/insights/mastering-tanstack-start",
    image: "/images/projects/tanstack-migration.svg",
    featured: false,
  },
  {
    slug: "figma-design-pipeline",
    title: "Figma Design Pipeline",
    description:
      "Automated Figma-to-code pipeline with token sync, component mapping, and MCP context for AI coding assistants.",
    tags: ["Figma", "MCP", "Tokens"],
    metric: "AI-native",
    href: "/projects/forgekit-mcp",
    image: "/images/projects/figma-design-pipeline.svg",
    featured: false,
  },
]

export const ARTICLES: Article[] = [
  {
    slug: "the-model-context-protocol",
    title: "The Model Context Protocol: A Frontend Engineer's Guide",
    excerpt:
      "How MCP is reshaping the hand-off between design tools and AI-native development workflows.",
    category: "Featured Analysis",
    publishedAt: "2024-03-12",
    readTime: "12 min",
    featured: true,
    content: [
      "The Model Context Protocol (MCP) represents a fundamental shift in how frontend engineers interact with AI coding assistants. Instead of treating design assets as static screenshots, MCP exposes them as structured, queryable context.",
      "For years, the hand-off was the most friction-filled part of our work. With MCP, the hand-off disappears. Design tokens, components, and layout patterns are live nodes in a context graph that AI can traverse.",
      "MCP represents a shift from AI as an external generator to AI as an integrated team member with direct access to your design system truth.",
    ],
  },
  {
    slug: "architecting-for-100-on-lighthouse",
    title: "Architecting for 100 on Lighthouse: The Airbnb Playbook",
    excerpt:
      "Performance budgets, code splitting strategies, and the infrastructure decisions that keep Core Web Vitals green.",
    category: "Performance",
    publishedAt: "2024-02-28",
    readTime: "8 min",
    featured: false,
    content: [
      "Achieving consistent Lighthouse scores requires architectural decisions from day one — not performance audits after launch.",
      "At scale, the biggest wins come from reducing JavaScript shipped to the client, optimizing images at the CDN layer, and eliminating layout shift through disciplined component APIs.",
    ],
  },
  {
    slug: "storybook-to-next-js-playgrounds",
    title: "From Storybook to Next.js Playgrounds",
    excerpt:
      "Bridging isolated component development with full-page integration testing using composable playground patterns.",
    category: "Design Systems",
    publishedAt: "2024-02-14",
    readTime: "10 min",
    featured: false,
    content: [
      "Storybook excels at component isolation, but teams need full-page contexts to validate real integration behavior.",
      "Next.js playgrounds provide the missing layer — letting designers and engineers preview components in realistic page layouts without leaving the design system workflow.",
    ],
  },
  {
    slug: "the-case-for-the-t-shaped-principal-engineer",
    title: "The Case for the T-Shaped Principal Engineer in 2024",
    excerpt:
      "Why depth in frontend architecture plus breadth across design, product, and platform creates outsized impact.",
    category: "Leadership",
    publishedAt: "2024-01-22",
    readTime: "7 min",
    featured: false,
    content: [
      "The T-shaped principal engineer combines deep frontend expertise with enough breadth to connect design systems, platform engineering, and product strategy.",
      "In 2024, the most impactful principals are those who can ship design system infrastructure while also mentoring teams on AI-native development patterns.",
    ],
  },
  {
    slug: "llm-agents-in-the-monorepo",
    title: "LLM Agents in the Monorepo: A 48-Hour Migration Story",
    excerpt:
      "How we used AI agents to migrate 1,942 components across an Nx monorepo with 88% automated test pass rate.",
    category: "AI Engineering",
    publishedAt: "2023-12-18",
    readTime: "15 min",
    featured: false,
    content: [
      "The biggest hurdle was not the LLM logic — it was the context window. Providing the agent with entire component library docs was too heavy.",
      "We solved this with a RAG approach where the agent only retrieved documentation for the specific component being migrated.",
      "By the end of the 48-hour sprint, we generated 1,942 successful PRs. 88% passed automated testing without manual intervention.",
    ],
  },
  {
    slug: "mastering-tanstack-start",
    title: "Mastering TanStack Start: Full-Stack React Without the Framework Tax",
    excerpt:
      "File-based routing, server functions, and Cloudflare Workers deployment for modern portfolio and SaaS apps.",
    category: "Frameworks",
    publishedAt: "2023-12-10",
    readTime: "11 min",
    featured: false,
    content: [
      "TanStack Start brings together Router, Query, and server-side rendering in a composable package that avoids the lock-in of traditional meta-frameworks.",
      "File-based routing with type-safe params, combined with Cloudflare Workers deployment, makes it ideal for portfolio sites and SaaS MVPs.",
    ],
  },
  {
    slug: "shipping-react-native-at-scale",
    title: "Shipping React Native at Scale: Lessons from 500K+ Users",
    excerpt:
      "Monorepo strategies, OTA updates, and design system parity between web and mobile at enterprise scale.",
    category: "Mobile Development",
    publishedAt: "2023-12-05",
    readTime: "9 min",
    featured: false,
    content: [
      "Shipping React Native at scale requires treating mobile as a first-class platform in your monorepo — not a fork of your web codebase.",
      "Design system parity, shared token pipelines, and disciplined release trains are what separate prototypes from products serving 500K+ users.",
    ],
  },
]

// Real testimonials pending: Matt, Adam, Clayton, Kurt, Anthony — add with their
// actual quotes when supplied. Do not fabricate quotes for real named people.
export const TESTIMONIALS: Testimonial[] = []

export const SERVICES: Service[] = [
  {
    id: "design-systems",
    title: "Design Systems Consulting",
    description:
      "End-to-end design system delivery — Figma tokens, React components, Storybook documentation, and Chromatic visual regression.",
    icon: "layers",
  },
  {
    id: "react-architecture",
    title: "React Architecture & Code Review",
    description:
      "Principal-level architecture reviews, performance audits, and migration plans for enterprise React codebases.",
    icon: "zap",
  },
  {
    id: "product-0-1",
    title: "0→1 Product Development",
    description:
      "Ship SaaS MVPs with TanStack Start, Supabase, and Cloudflare Workers — from design system to production deploy.",
    icon: "cpu",
  },
  {
    id: "monorepo",
    title: "Monorepo Architecture & Infrastructure",
    description:
      "Enterprise-scale monorepo architecture with Nx, shared libraries, CI optimization, and developer experience tooling.",
    icon: "git-branch",
  },
  {
    id: "mentoring",
    title: "Team Leadership & Technical Mentoring",
    description:
      "Staff/principal-level mentoring for frontend teams — design system governance, AI-native workflows, and career growth.",
    icon: "layers",
  },
  {
    id: "mcp",
    title: "MCP & AI-Native Tooling",
    description:
      "Model Context Protocol servers and AI integration layers that connect design tools to coding assistants.",
    icon: "cpu",
  },
]

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "nx-monorepo",
    title: "Redesign Health Platform Portal",
    subtitle: "Staff Frontend Engineer → Tech Lead, ~1y11mo",
    tags: ["Nx", "Monorepo", "React 19", "Chakra UI v3"],
    summary:
      "Led frontend strategy for an Nx monorepo running the Platform Portal, a mock API server, and a shared design system — mentoring engineers across 15+ person cross-functional teams.",
    metrics: [
      { label: "Nx projects", value: "38" },
      { label: "Cross-functional team", value: "15+" },
      { label: "Files migrated to Chakra v3", value: "180+" },
    ],
    image: "/images/case-studies/nx-monorepo.png",
  },
  {
    slug: "forgekit-mcp",
    title: "ForgeKit MCP",
    subtitle: "Design-to-code via Model Context Protocol",
    tags: ["MCP", "Figma", "AI"],
    summary:
      "Built an MCP server exposing Figma designs as structured context for AI coding assistants, reaching 5,703+ installs in its first week.",
    metrics: [
      { label: "First-week installs", value: "5,703+" },
      { label: "Components mapped", value: "200+" },
      { label: "IDE integrations", value: "4" },
    ],
    image: "/images/projects/forgekit-mcp.png",
    liveHref: "https://forgekit.cloud",
  },
  {
    slug: "tokencast",
    title: "TokenCast",
    subtitle: "Design tokens in, live theme preview and export out",
    tags: ["React Router", "Supabase", "Security"],
    summary:
      "A design-token pipeline built on React Router in framework mode (SSR, loaders, actions) — paste Figma variables or a Tailwind config, get a live preview, export to Tailwind/Chakra/shadcn, and save a server-rendered shareable link.",
    metrics: [
      { label: "Lighthouse accessibility", value: "100" },
      { label: "Lighthouse performance", value: "99" },
      { label: "Export targets", value: "3" },
    ],
    image: "/images/projects/tokencast.png",
    liveHref: "https://tokencast.vercel.app",
  },
  {
    slug: "mcp-atlas",
    title: "MCP Atlas",
    subtitle: "A verified directory for the MCP ecosystem",
    tags: ["Astro", "MCP", "Islands Architecture"],
    summary:
      "Every MCP server directory listing gets sourced and link-checked before it ships — official and community servers, searchable and filterable, built on Astro's islands architecture to ship JS only where the page needs it.",
    metrics: [
      { label: "Verified servers", value: "18" },
      { label: "Lighthouse accessibility", value: "100" },
      { label: "Lighthouse performance", value: "97" },
    ],
    image: "/images/projects/mcp-atlas.png",
    liveHref: "https://mcp-atlas-orcin.vercel.app",
  },
  {
    slug: "design-system-scale",
    title: "Design System at Scale",
    subtitle: "200+ components, zero breaking changes",
    tags: ["Storybook", "Chromatic", "Figma"],
    summary:
      "Delivered a production design system with Storybook 10+, Chromatic visual regression, and Figma Code Connect integration.",
    metrics: [
      { label: "Components", value: "200+" },
      { label: "Consumer apps", value: "8" },
      { label: "Visual test coverage", value: "98%" },
    ],
    image: "/images/case-studies/design-system-scale.svg",
  },
]

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "1",
    question: "What's your background and experience?",
    answer:
      "Principal Frontend Engineer with 10+ years shipping React at scale — design systems, Nx monorepos, React Native platforms serving 500K+ users, and AI-native developer tooling like ForgeKit MCP.",
  },
  {
    id: "2",
    question: "What makes you different from other React engineers?",
    answer:
      "I operate at the intersection of design systems, platform engineering, and AI tooling. Most engineers specialize in one — I architect systems that keep design, product, and engineering shipping in lockstep.",
  },
  {
    id: "3",
    question: "What types of projects do you take on?",
    answer:
      "Frontend platform engineering, design systems, Nx monorepos, and AI-native developer tooling. Ideal engagements include 0→1 SaaS products, design system builds, and MCP server development.",
  },
  {
    id: "4",
    question: "What's your current availability?",
    answer:
      "I'm currently available for senior contract engagements (3-6 months) and advisory roles. Full-time principal/staff positions are considered for the right opportunity.",
  },
  {
    id: "5",
    question: "Do you do fractional or part-time roles?",
    answer:
      "Yes — fractional principal engagements (1-2 days/week) work well for design system governance, architecture advisory, and team mentoring.",
  },
  {
    id: "6",
    question: "What tech stack do you specialize in?",
    answer:
      "React 19, TypeScript, TanStack Start/Router/Query, Tailwind CSS, Storybook, Nx, Supabase, and Cloudflare Workers. I also work extensively with React Native, Expo, and Figma MCP integrations.",
  },
  {
    id: "7",
    question: "How do you approach design system projects?",
    answer:
      "Design systems start with token architecture in Figma, flow through automated pipelines (TokenCast), and land in Storybook with Chromatic visual regression. Every component ships with accessibility tests and usage documentation.",
  },
  {
    id: "8",
    question: "Can you help with AI/LLM integration in our codebase?",
    answer:
      "Yes — I build MCP servers, RAG pipelines for monorepo context, and AI agent workflows for automated migrations and code generation. See ForgeKit MCP and my LLM Agents case study.",
  },
]

export const RESOURCES: Resource[] = [
  {
    id: "design-system-starter",
    title: "Design System Starter Kit",
    description: "Token architecture, Storybook setup, and Chromatic config for new systems",
    category: "Design Systems",
    href: "/case-studies/design-system-scale",
  },
  {
    id: "nx-guide",
    title: "Nx Monorepo Architecture Guide",
    description: "Patterns for scaling from 3 apps to 40+ packages with Nx",
    category: "Platform",
    href: "/case-studies/nx-monorepo",
  },
  {
    id: "react-checklist",
    title: "React Architecture Checklist",
    description: "Principal-level checklist for React platform reviews",
    category: "Tooling",
    href: "/insights/architecting-for-100-on-lighthouse",
  },
  {
    id: "forgekit",
    title: "ForgeKit MCP",
    description: "Figma-to-code MCP server for AI coding assistants",
    category: "Open Source",
    href: "https://forgekit.cloud",
  },
  {
    id: "tokencast",
    title: "TokenCast",
    description: "Design token pipeline from Figma to code",
    category: "Tooling",
    href: "/work",
  },
  {
    id: "performance-audit",
    title: "Performance Audit Framework",
    description: "Lighthouse budgets, CWV monitoring, and regression gates",
    category: "Testing",
    href: "/insights/architecting-for-100-on-lighthouse",
  },
  {
    id: "storybook",
    title: "Storybook 10+",
    description: "Component development and visual testing",
    category: "Design Systems",
    href: "https://storybook.js.org",
  },
  {
    id: "tanstack",
    title: "TanStack Start",
    description: "Full-stack React framework with file-based routing",
    category: "Frameworks",
    href: "https://tanstack.com/start",
  },
]

export const RESUME_SECTIONS = {
  summary:
    "Principal Frontend Engineer with 15+ years building enterprise-scale React platforms, design systems, and AI-native developer tooling. Architect of ForgeKit MCP (5,700+ npm installs) and production design systems serving 500K+ users.",
  experience: [
    {
      title: "Principal Frontend Engineer",
      company: "Independent / Contract",
      period: "2022 — Present",
      highlights: [
        "Built ForgeKit MCP — Figma-to-code MCP server with 5,700+ npm installs",
        "Architected Nx monorepos for 12 product teams with 40+ shared packages",
        "Delivered 200+ component design systems with Storybook + Chromatic",
      ],
    },
    {
      title: "Staff Frontend Engineer",
      company: "Enterprise SaaS Platform",
      period: "2019 — 2022",
      highlights: [
        "Led React Native platform serving 500K+ users",
        "Reduced CI build times by 65% through Nx caching and affected graph optimization",
        "Established design token pipeline from Figma to web and mobile",
      ],
    },
    {
      title: "Senior Frontend Engineer",
      company: "Design Tools Startup",
      period: "2016 — 2019",
      highlights: [
        "Built component library adopted across 8 product teams",
        "Introduced Storybook and visual regression testing to engineering workflow",
        "Mentored 6 engineers on React architecture and design system patterns",
      ],
    },
  ],
  skills: [
    "React 19 / TypeScript",
    "TanStack Start / Router / Query",
    "Nx / Turborepo",
    "Storybook 10+ / Chromatic",
    "Tailwind CSS / Design Tokens",
    "React Native / Expo",
    "Supabase / PostgreSQL",
    "Cloudflare Workers",
    "Figma MCP / AI Tooling",
  ],
}
