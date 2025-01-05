import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // Number of retries if a query fails
      staleTime: 60 * 1000, // 1 minute; Time before data is considered stale
    },
  },
});