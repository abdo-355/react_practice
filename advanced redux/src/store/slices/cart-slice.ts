import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  total: number;
}

interface INewItem {
  id: string;
  title: string;
  price: number;
  description?: string;
}

export interface ICart {
  items: ICartItem[];
  totalQuantity: number;
}

const cartInitialState: ICart = {
  items: [],
  totalQuantity: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addItem: (state, action: PayloadAction<INewItem>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          quantity: 1,
          price: newItem.price,
          title: newItem.title,
          total: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.total += newItem.price;
      }
    },

    removeItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      if (!existingItem) {
        return;
      } else if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }
    },
  },
});

export const { addItem, removeItem } = CartSlice.actions;

export default CartSlice.reducer;
