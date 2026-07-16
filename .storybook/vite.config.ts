import { defineConfig } from "vite"
import viteReact from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// Standalone Storybook Vite config — intentionally omits TanStack Start,
// Cloudflare, and Devtools plugins from the app vite.config.ts. Those plugins
// expect a single app client entry and break when Storybook injects
// vite-inject-mocker-entry.js (multiple-entries error).
export default defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [tailwindcss(), viteReact()],
})
