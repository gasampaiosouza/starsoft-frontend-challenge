import { IProduct } from '@/types/products';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem extends IProduct {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // receives entire product as payload
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const alreadyAddedToCart = state.items.find(
        (item) => item.id == action.payload.id
      );

      if (alreadyAddedToCart) {
        alreadyAddedToCart.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      // it's good to keep track of price & quantity this way so we prevent big calculations on f/e in the future
      state.totalQuantity += 1;
      state.totalAmount += action.payload.price;
    },

    // receives product ID as payload
    removeFromCart: (state, action: PayloadAction<number>) => {
      const alreadyAddedToCart = state.items.find(item => item.id == action.payload);

      if (!alreadyAddedToCart) return;

      state.totalQuantity -= alreadyAddedToCart.quantity;
      state.totalAmount -= alreadyAddedToCart.price * alreadyAddedToCart.quantity;
      state.items = state.items.filter(item => item.id != action.payload);
    },

    // receives product ID & quantity as payload
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const alreadyAddedToCart = state.items.find(item => item.id == id);

      if (!alreadyAddedToCart) return;

      state.totalQuantity -= alreadyAddedToCart.quantity + quantity;
      state.totalAmount = 
        state.totalAmount - 
        (alreadyAddedToCart.price * alreadyAddedToCart.quantity) + 
        (alreadyAddedToCart.price * quantity);

      alreadyAddedToCart.quantity = quantity;
    }
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
