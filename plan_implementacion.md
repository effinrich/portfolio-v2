# 🚀 plan_implementacion.md — Roadmap: Storybook + Chromatic Coverage

**Project:** rich-tillman-portfolio
**Scenario:** B — Evolution
**Date:** 2026-08-15

## 1. Objective

Take Storybook + Chromatic coverage from **4 stories** (Badge, GlassPanel, NavigationBar, ProjectCard) to **full coverage**: the 3 UI components, 5 layout components, 3 cards, and 14 pages — with stable visual baselines and regression gating on PRs.

**Status:** ✅ coverage delivered (25 story files, all with interaction tests). Remaining: Vitest↔Storybook coverage wiring and the Chromatic CI baseline/gate.

## 2. Starting diagnosis (summary)

- Strict TypeScript ✅, clean build/typecheck ✅.
- Pages already receive data via props (server → client pattern): routes fetch via `src/features/content/queries.ts` and pass results into `*Page` components. This enabled stories with pure seed data (`#/features/content/seed-data`), with no network mocking.
- `preview.tsx` already provided QueryClientProvider, dark background, and `parameters.tanstack.router`.
- Main risk: `CanvasBackground` loads Three.js from a CDN at runtime and the animations (ticker, pulse, stagger) are non-deterministic — both mitigated in Phase 0.

## 3. Squad (skill registry mapping)

| Role | Skill | Responsibility |
|------|-------|----------------|
| Visual validator | `@ui-visual-validator` | Chromatic baselines, snapshot review, diff thresholds. |
| Design system | `@design-system` | Story organization, argTypes/controls, tokens, templates. |
| Design fidelity | `@superdesign` | 1:1 consistency with the `superdesign-export/` HTML sources. |
| Accessibility | `@ui-a11y` | `@storybook/addon-a11y` audit on every story. |
| QA / Tests | `@vitest-skill` | Play functions + `@storybook/addon-vitest` integration. |

## 4. Key technical decisions

1. **Page stories with seed props** — no fetch, no network, deterministic.
2. **`CanvasBackground` stub** — viteFinal alias swaps the CDN-backed component for a static stand-in in Storybook; the real component is documented in its own story (relative import) with `chromatic.disableSnapshot`.
3. **Visual determinism** — `chromatic: { pauseAnimationAtEnd: true }` + `diffThreshold: 0.2` for CSS animations.
4. **Title convention** — `UI/`, `Layout/`, `Cards/`, `Pages/`.
5. **Router in stories** — `parameters.tanstack.router` (already configured) makes `<Link>` and `params` work.
6. **a11y by default** — addon already installed; every new story runs the audit automatically.

## 5. Phases and exit criteria

| Phase | Deliverable | Exit criteria |
|-------|-------------|---------------|
| 0 — Harness | Canvas stub, viewports, paused animations, template | ✅ Storybook builds; pages render `<Link>` |
| 1 — UI | Badge, GlassPanel, SectionHeader | ✅ 3 components with variants and clean a11y |
| 2 — Layout | NavigationBar, SiteFooter, TechTicker, CanvasBackground, PortfolioLayout | ✅ 5 components, stable snapshots |
| 3 — Cards | ProjectCard, ArticleCard, SiteMapCard | ✅ 3 cards with state variants |
| 4 — Pages | 14 page stories | ✅ All pages render with seed data |
| 5 — A11y | Full audit | ✅ addon active on all stories |
| 6 — Chromatic | Baseline + CI | ⏳ pending token + CI workflow |
| 7 — Interaction | Play functions + Vitest | ✅ play functions done · ⏳ vitest wiring pending |

## 6. Risks and mitigations

| Risk | Mitigation |
|------|-----------|
| `CanvasBackground` non-deterministic (CDN Three.js) | Deterministic stub in page stories |
| Animations changing between snapshots | `pauseAnimationAtEnd` + `diffThreshold` |
| `<Link>` outside router context | `parameters.tanstack.router` in `preview.tsx` |
| Missing Chromatic token | Secret in env/CI; local fallback with `build-storybook` |
| Undetected visual regressions in PRs | Chromatic CI with approval gate |

## 7. Success metrics

- **Coverage:** 4 → 25 story files (100% UI components + 14 pages) ✅
- **Accessibility:** 0 critical findings in addon-a11y ✅
- **Visual regression:** baseline approved + per-PR approval ⏳
- **Quality:** `bun run lint`, `bun run typecheck`, `bun run test`, and `bun run build-storybook` green ✅

## 8. Global Definition of Done

Storybook builds with all stories green, Chromatic maintains a stable per-page/component baseline, play functions cover the critical interactions (contact, navigation, FAQ), and no UI-changing PR merges without visual approval.
