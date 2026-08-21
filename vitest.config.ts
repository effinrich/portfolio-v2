import { defineConfig } from "vitest/config"
import path from "node:path"
import { fileURLToPath } from "node:url"
import viteReact from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin"
import { playwright } from "@vitest/browser-playwright"

const dirname = path.dirname(fileURLToPath(import.meta.url))

// Standalone Vitest config — intentionally omits @cloudflare/vite-plugin
// (and TanStack Start) which break Vitest with "depsOptimizer is required".
//
// Two projects:
// - "unit": classic jsdom tests (src/**/*.{test,spec}.{ts,tsx})
// - "storybook": @storybook/addon-vitest turns every story into a test that
//   runs its play function in a real Chromium browser (Playwright) and
//   collects v8 coverage, so `bun run test` = stories + coverage.
export default defineConfig({
  resolve: { tsconfigPaths: true },
  test: {
    globals: false,
    // Coverage is a root-level option in Vitest 4: it applies to every
    // project and is merged into a single report.
    coverage: {
      enabled: true,
      provider: "v8",
      reporter: ["text", "json-summary"],
      include: ["src/**/*.{ts,tsx}"],
      // Routes are thin fetch wrappers around the page screens — they are not
      // exercised by stories (screens get seed props directly) and would
      // otherwise show as permanently-uncovered plumbing.
      exclude: ["src/**/*.stories.{ts,tsx}", "src/**/*.test.{ts,tsx}", "src/routes/**"],
    },
    projects: [
      {
        extends: true,
        plugins: [tailwindcss(), viteReact()],
        test: {
          name: "unit",
          environment: "jsdom",
          include: ["src/**/*.{test,spec}.{ts,tsx}"],
        },
      },
      {
        extends: true,
        plugins: [
          storybookTest({
            // The location of your Storybook config (main.ts).
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
})
