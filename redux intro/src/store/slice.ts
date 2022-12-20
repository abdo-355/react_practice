import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRootState } from ".";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 } as IRootState,
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
  },
});

export const { increment, increase, decrement } = counterSlice.actions;

export default counterSlice.reducer;
