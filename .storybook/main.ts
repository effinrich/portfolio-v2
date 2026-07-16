import type { StorybookConfig } from "@storybook/tanstack-react"

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y", "@chromatic-com/storybook"],
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
    cfg.resolve.alias = {
      ...cfg.resolve.alias,
      "#": new URL("../src", import.meta.url).pathname,
    }
    return cfg
  },
}

export default config
