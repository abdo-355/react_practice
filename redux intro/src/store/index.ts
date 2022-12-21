import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
