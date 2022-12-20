import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import togglerReducer from "./togglerSlice";

const store = configureStore({
  reducer: { counter: counterReducer, toggler: togglerReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
