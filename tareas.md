# 📋 tareas.md — Backlog: Storybook + Chromatic Coverage

**Project:** rich-tillman-portfolio
**Goal:** Raise Storybook and Chromatic coverage to **every** page and UI component.
**Standard:** Diamond (scalable, secure, aesthetically superior).

## Coverage inventory

| Group | Components | Status |
|-------|-----------|--------|
| UI (`src/features/ui/`) | Badge, GlassPanel, SectionHeader | ✅ all |
| Layout (`src/features/layout/`) | NavigationBar, SiteFooter, TechTicker, CanvasBackground, PortfolioLayout | ✅ all |
| Cards | ProjectCard, ArticleCard, SiteMapCard | ✅ all |
| Pages (14) | Home, Work, ForgeKit MCP, Contact, Testimonials, Services, Resources, Case Studies (hub + detail), FAQ, Resume, Insights (feed + detail), Site Map | ✅ all |

**Result:** 4 → **25 story files** (100% of UI components + 14 pages), all with interaction tests.

---

## Phase 0 — Harness

- [x] **F0.1** Confirmed `parameters.tanstack.router` resolves `<Link>` in stories.
- [x] **F0.2** Deterministic `CanvasBackground` stub (viteFinal alias in `.storybook/main.ts`).
- [x] **F0.3** Viewports in `preview.tsx`: mobile 375, tablet 768, desktop 1280.
- [x] **F0.4** `chromatic: { pauseAnimationAtEnd: true }` + `diffThreshold` configured.
- [x] **F0.5** Story template + title convention: `UI/`, `Layout/`, `Cards/`, `Pages/`.
- [ ] **F0.6** Activate `@storybook/addon-vitest` (requires `@vitest/browser` + Playwright peer deps).

## Phase 1 — UI components

- [x] **Badge** — 4 variants + long content, with render assertions.
- [x] **GlassPanel** — default, neon border, hover glow.
- [x] **SectionHeader** — complete, title-only, description-only.

## Phase 2 — Layout

- [x] **NavigationBar** — active items, availability states, link assertions.
- [x] **SiteFooter** — nav + social link assertions.
- [x] **TechTicker** — duplicated-loop assertion.
- [x] **CanvasBackground** — real component story (relative import), `disableSnapshot` for Chromatic.
- [x] **PortfolioLayout** — with/without ticker.

## Phase 3 — Cards

- [x] **ProjectCard** — project/case-study/article/external/no-image variants.
- [x] **ArticleCard** — category variants + link assertions.
- [x] **SiteMapCard** — 3 accents + params variant.

## Phase 4 — Pages (14)

- [x] All 14 page stories created with seed data and interaction tests.
- [x] Contact form: initial, validation errors, invalid email, successful submit.
- [x] FAQ: accordion open/close interaction.

## Phase 5 — Accessibility

- [x] `@storybook/addon-a11y` active on all stories (registered in `.storybook/main.ts`).

## Phase 6 — Chromatic

- [ ] Publish the first baseline with `CHROMATIC_PROJECT_TOKEN` and approve it.
- [ ] CI (GitHub Actions) publishing per PR and blocking merge without visual approval.

## Phase 7 — Interaction (Diamond)

- [x] Play functions on every story (validation, accordion, links, states).
- [ ] Wire `bun run test` to run stories via `@storybook/addon-vitest` for coverage.

---

## Definition of Done (per story)

- Compiles clean and strict (no `any`).
- a11y with no critical findings.
- Accepted Chromatic snapshot.
- Conventions: kebab-case, one component per file, PascalCase export, data from `#/features/content/seed-data`.
