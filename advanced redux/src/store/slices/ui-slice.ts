import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface INotification {
  status: string;
  title: string;
  message: string;
}

const initialState = {
  cartIsVisible: false,
  notification: null as INotification | null,
};

const UISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification: (state, action: PayloadAction<INotification>) => {
      state.notification = action.payload;
    },
  },
});

export const { toggleCart, showNotification } = UISlice.actions;

export default UISlice.reducer;
