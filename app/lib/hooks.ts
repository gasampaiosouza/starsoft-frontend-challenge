import React from 'react';
import debounce from 'lodash.debounce';

import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppDispatch, AppStore, RootState } from './store';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getProducts } from './api';

// redux
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

// debounce function. It prevents re-renders and using it as a hook prevents it from being recreated every time
export function useDebounce<T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number
) {
  const callbackRef = React.useRef(callback);

  React.useLayoutEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return React.useMemo(
    () =>
      debounce((...args: Parameters<T>) => callbackRef.current(...args), delay),
    [delay]
  );
}

// react query
export const useClientFetch = (productsPerPage: number) => {
  const query = useQuery({
    queryKey: ['products', productsPerPage],
    queryFn: () => getProducts(productsPerPage).then((res) => res),
    placeholderData: keepPreviousData,
  });

  return query;
};
