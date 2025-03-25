import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getProducts } from '../api';

import { IProduct, Metadata } from '@/types/products';

interface ProductState {
  items: IProduct[];
  productsPerPage: number;
  metadata: Metadata;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined | null;
}

const initialState: ProductState = {
  items: [],
  productsPerPage: 12,
  metadata: {} as Metadata,
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => await getProducts(initialState.productsPerPage) // initial products
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    replaceProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.items = action.payload;
    },

    setMetadata: (state, action: PayloadAction<Metadata>) => {
      state.metadata = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.data;
        state.metadata = action.payload.metadata;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { replaceProducts, setMetadata } = productsSlice.actions;

export default productsSlice.reducer;
