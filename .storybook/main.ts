import type { StorybookConfig } from "@storybook/tanstack-react"

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/tanstack-react",
    options: {
      builder: {
        // Do not merge root vite.config.ts (TanStack Start / Cloudflare).
        viteConfigPath: ".storybook/vite.config.ts",
      },
    },
  },
  viteFinal: async (cfg) => {
    cfg.resolve = cfg.resolve ?? {}
    const srcPath = new URL("../src", import.meta.url).pathname
    const canvasStubPath = new URL("./stubs/canvas-background.tsx", import.meta.url).pathname
    // More specific alias first: stub the animated Three.js canvas (loaded from
    // a CDN at runtime) so page snapshots in Chromatic stay deterministic.
    cfg.resolve.alias = [
      { find: "#/features/layout/canvas-background", replacement: canvasStubPath },
      { find: "#", replacement: srcPath },
    ]
    return cfg
  },
}

export default config
