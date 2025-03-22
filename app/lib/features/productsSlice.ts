import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../api';

import { IProduct } from '@/types/products';

interface ProductState {
  items: IProduct[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined | null;
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    // TODO
    return await getProducts();
  }
);

const initialState: ProductState = {
  // TODO - items to products
  items: [],
  status: 'idle',
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.data;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
