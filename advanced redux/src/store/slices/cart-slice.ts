import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartItem {
  id: string;
  title: string;
  price: number;
  amount: number;
  total: number;
}

interface INewItem {
  id: string;
  title: string;
  price: number;
  description: string;
}

const cartInitialState = {
  items: [] as ICartItem[],
  // for the cart button
  totalQuantity: 0,
  //--------------------
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
          amount: 1,
          price: newItem.price,
          title: newItem.title,
          total: newItem.price,
        });
      } else {
        existingItem.amount++;
        existingItem.total += newItem.price;
      }
    },

    removeItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      if (!existingItem) {
        return;
      } else if (existingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.amount--;
        existingItem.total -= existingItem.price;
      }
    },
  },
});

export const { addItem, removeItem } = CartSlice.actions;

export default CartSlice.reducer;
