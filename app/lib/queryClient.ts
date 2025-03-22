import { QueryClient } from '@tanstack/react-query';

export const getQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minuto
        gcTime: 60 * 60 * 1000, // 1 hora
      },
    },
  });
