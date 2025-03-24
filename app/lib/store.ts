import { configureStore } from '@reduxjs/toolkit';

import productReducer from './features/productsSlice';
import cartReducer from './features/cartSlice';

export type RootState = ReturnType<AppStore['getState']>;

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productReducer,
      cart: cartReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
