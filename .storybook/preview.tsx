import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import type { Preview } from "@storybook/tanstack-react"
import "#/styles/app.css"

// 👇 Create a new QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity,
    },
  },
})

const preview: Preview = {
  beforeEach: () => {
    // 👇 Clear the cache between stories so each story starts fresh
    queryClient.clear()
  },
  parameters: {
    tanstack: {
      router: {
        // 👇 Make queryClient available in stories' beforeEach via ctx.context.queryClient
        context: { queryClient },
      },
    },
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#000000" }],
    },
    layout: "centered",
  },
  decorators: [
    (Story) => (
      // 👇 Provide the QueryClient to all stories
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
}

export default preview
