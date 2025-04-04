'use client';

import { useRef } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';

import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '@/lib/registry';
import { AppStore, makeStore } from '@/lib/store';

import GlobalStyles from '@/styles/global';
import theme from '@/styles/theme';
import { getQueryClient } from './lib/queryClient';

const Providers = (props: React.PropsWithChildren) => {
  const storeRef = useRef<AppStore | null>(null);
  const queryClient = getQueryClient();

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <ReduxProvider store={storeRef.current}>
      <QueryClientProvider client={queryClient}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {props.children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </QueryClientProvider>
    </ReduxProvider>
  );
};

export default Providers;
