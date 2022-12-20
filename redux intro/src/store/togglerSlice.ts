import { createSlice } from "@reduxjs/toolkit";

const togglerSlice = createSlice({
  name: "toggler",
  initialState: { isVisible: true },
  reducers: {
    toggle: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggle } = togglerSlice.actions;

export default togglerSlice.reducer;
