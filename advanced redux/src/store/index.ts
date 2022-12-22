import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./slices/ui-slice";
import cartReducer from "./slices/cart-slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
