## Learned User Preferences

- Prefer feature-based layout under `src/features/`, one component per file, kebab-case filenames/dirs, and PascalCase exports.
- Prefer TypeScript strict mode with no `any`.
- Use Bun for install and scripts (`bun install`, `bun run …`).
- Prefer faithful conversion of `superdesign-export/` HTML (neon portfolio aesthetic); do not invent design or secrets.
- Prefer concise fix-and-verify responses for tooling/type errors; avoid long restatements.
- Prefer plain, non-AI-sounding copy when editing bio/cover text (often via no-ai-slop / avoid-ai-writing).

## Learned Workspace Facts

- This repo is Rich Tillman’s portfolio app (`rich-tillman-portfolio`), built from HTML in `superdesign-export/`.
- Read `superdesign-export/23-react-migration-guide-rich-tillman-portfolio.html` first when mapping design → React; skip `21`–`22` site-map HTML as product pages.
- Intended stack: TanStack Start (React 19, Router + Query), Tailwind CSS v4, Supabase (Postgres/RLS/Realtime), Cloudflare Workers via Wrangler, Storybook 10+, Chromatic, oxlint, oxfmt, lefthook.
- Vitest must not load the Cloudflare Vite plugin (separate vitest config); otherwise tests fail with `depsOptimizer is required`.
- Supabase client/env and Chromatic tokens are optional for local app smoke checks; missing env should not block basic build/dev verification.
- Storybook imports `src/styles/app.css`; CSS side-effect imports need proper ambient module declarations for TypeScript.
