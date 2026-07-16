# Rich Tillman Portfolio

Neon portfolio site for Rich Tillman — Principal Frontend Engineer. Built from SuperDesign HTML exports using TanStack Start, Tailwind CSS v4, Supabase, and Cloudflare Workers.

## Stack

- **Framework:** TanStack Start (React 19, file-based routing, SSR)
- **Styling:** Tailwind CSS v4 with design tokens from HTML exports
- **Data:** Supabase (Postgres, RLS, Realtime) with local seed fallback
- **Deploy:** Cloudflare Workers via Wrangler
- **Tooling:** Bun, oxlint, oxfmt, lefthook
- **Design QA:** Storybook 10+ with Chromatic config

## Route Map

| Route | Page | Source Design |
|-------|------|---------------|
| `/` | Home / Hero | `01-interactive-neon-portfolio-hero` |
| `/work` | Portfolio projects | `04-portfolio-projects` |
| `/projects/forgekit-mcp` | ForgeKit MCP detail | `02-forgekit-mcp` |
| `/contact` | Contact form | `03-contact` |
| `/testimonials` | Testimonials | `05-testimonials` |
| `/services` | Services & expertise | `06-services` |
| `/resources` | Stack & tools | `07-resources` |
| `/case-studies` | Case studies hub | `08-case-studies` |
| `/case-studies/$slug` | Case study detail | `10-nx-monorepo` |
| `/faq` | FAQ | `09-faq` |
| `/resume` | Resume | `12-resume` |
| `/insights` | Articles feed | `13-insights` |
| `/insights/$slug` | Article detail | `14`–`20` articles |
| `/site-map` | Route atlas grid | `21`–`22` site map |

Skipped: `23` migration guide (meta doc, not a public page). HTML `11` was a nav wiring draft absorbed into shared layout.

## Getting Started

```bash
# Install dependencies
bun install

# Copy environment template
cp .env.example .env.local
# Add your Supabase URL and anon key (optional — app falls back to seed data)

# Start dev server
bun run dev
# → http://localhost:3000
```

## Scripts

| Script | Command |
|--------|---------|
| Dev | `bun run dev` |
| Build | `bun run build` |
| Preview (Vite) | `bun run preview` |
| Preview (Workers) | `bun run preview:worker` |
| Lint | `bun run lint` |
| Format | `bun run format` |
| Typecheck | `bun run typecheck` |
| Storybook | `bun run storybook` |
| Chromatic | `bun run chromatic` |
| Deploy | `bun run deploy` |

## Supabase Setup

```bash
# Install Supabase CLI, then link your project and:
supabase db push       # apply migrations in supabase/migrations/
supabase db seed       # load seed data from supabase/seed.sql
```

Tables: `projects`, `articles`, `testimonials`, `contact_messages` (RLS enabled; public read on content, insert-only on contact). Articles publish to Realtime.

Env placeholders in `.env.example`:

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
CHROMATIC_PROJECT_TOKEN=
```

## Storybook

```bash
bun run storybook          # dev on :6006
bun run build-storybook    # static build
bun run chromatic          # visual regression (needs CHROMATIC_PROJECT_TOKEN)
```

## Deploy to Cloudflare Workers

```bash
bun run build
bun run deploy
# or local worker preview:
bun run preview:worker
```

## Project Structure

```
src/
├── features/           # Feature-based modules (kebab-case files)
│   ├── content/        # Seed data + Supabase queries
│   ├── home/ contact/ work/ insights/ …
│   ├── layout/         # Nav, footer, canvas bg, ticker
│   ├── site-map/
│   ├── supabase/       # Client + Database types
│   └── ui/             # GlassPanel, Badge, SectionHeader
├── routes/             # TanStack Start file-based routes
├── stories/            # Storybook stories
└── styles/app.css      # Tailwind v4 tokens + neon utilities
supabase/
├── migrations/         # Schema + RLS
└── seed.sql
```

## Design Fidelity

Converted from SuperDesign HTML exports with:
- Neon color tokens (`gold` `#ffd700`, `cyan` `#00f0ff`, `magenta` `#ff007f`)
- Glass panel aesthetic with backdrop blur
- Interactive canvas background (Three.js tubes cursor; click to randomize)
- Tech stack ticker on home page
- Fade-in stagger animations + neon text shine

## Blockers / Notes

- **Supabase:** Works offline with seed data; connect `.env.local` for live DB + contact persistence
- **Canvas background:** Loads Three.js from CDN at runtime; degrades gracefully if WebGL unavailable
- **Chromatic:** Requires `CHROMATIC_PROJECT_TOKEN`
- **Git hooks:** `lefthook` installs on `postinstall` (no-ops if not a git repo)
- **Cloudflare:** Build first, then `wrangler deploy`; `nodejs_compat` enabled in `wrangler.jsonc`
