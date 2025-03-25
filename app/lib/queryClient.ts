import { QueryClient } from '@tanstack/react-query';

export const getQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
        // staleTime: 60 * 1000 * 30, // 30 minutos
      },
    },
  });
