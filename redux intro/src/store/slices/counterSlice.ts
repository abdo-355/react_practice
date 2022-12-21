import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, isVisible: true },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    increase: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    toggle: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { increment, increase, decrement, toggle } = counterSlice.actions;

export default counterSlice.reducer;
