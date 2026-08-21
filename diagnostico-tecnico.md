# 🔍 Technical Diagnosis — Rich Tillman Portfolio

**Date:** 2026-08-15
**Detected scenario:** B — Existing Project (Evolution Consultant)

## 1. Technical scan

- **Project:** Neon portfolio for Rich Tillman (Principal Frontend Engineer), a faithful conversion of the HTML under `superdesign-export/`.
- **Stack:** TanStack Start (React 19, Router + Query, SSR) · Tailwind CSS v4 · Supabase (Postgres/RLS/Realtime) · Cloudflare Workers (Wrangler) · Bun · oxlint/oxfmt/lefthook · Storybook 10 + Chromatic · Vitest.
- **Architecture:** feature-based (`src/features/`, kebab-case, one component per file) + file-based routes (`src/routes/`). 47 `.tsx`/`.ts` files across routes+features, ~13 public pages.
- **Health:** `bun run typecheck` ✅ clean; git clean (only `.freebuff/` untracked).

## 2. Observed technical debt (with evidence)

1. **Low QA coverage:** only 4 Storybook stories (`project-card`, `glass-panel`, `navigation-bar`, `badge`). No stories for `section-header.tsx`, the footer, the ticker, or the ~13 pages. Chromatic configured but underused.
2. **Almost no tests:** single unit test visible (`src/lib/cn.test.ts`); no component or page render tests.
3. **Immature Supabase layer:** 1 migration (`20240715000000_initial_schema.sql`); hand-written `database.types.ts`; the client (`src/features/supabase/client.ts`) returns `null` without `.env.local` and depends on local seed data.
4. **Unversioned CDN dependency:** `src/features/layout/canvas-background.tsx` injects a runtime `<script type="module">` importing `threejs-components@0.0.19` from jsDelivr (no SRI, no local fallback) and polls with `requestAnimationFrame`.
5. **Duplicate aliases:** both `#/*` and `@/*` exist — friction and potentially ambiguous imports.
6. **Abuse surface on contact:** the `contact_messages` policy allows anonymous INSERT with no email validation and no rate limit → spam risk.
7. **Devtools in production:** `__root.tsx` mounts `TanStackDevtools` and `TanStackRouterDevtoolsPanel` without an environment gate.
8. **Workspace noise:** multiple agent/IDE folders (`.claude`, `.cursor`, `.defract`, `.qodo`, `.omc`, `.omx`, …) left unnormalized.

## 3. Technical prescription (summary)

The project is healthy and well structured: strict TypeScript with no `any`, solid conventions, and the premium neon aesthetic already implemented. The quality leap is in **QA and observability**: Storybook per page/component, Vitest tests (unit + render), generated Supabase types, and runtime hardening (local, versioned Three.js, environment-gated devtools, unified aliases, contact rate-limiting/validation, CI running lint/typecheck/test/build).

## 4. Prescription interview

1. WHAT do we want to improve or add on top of what's built?
2. WHAT is the biggest pain point or current technical limitation?
3. TO WHAT quality standard do we want to elevate the project?
