import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";

export interface IRootState {
  count: number;
}

export default configureStore({ reducer: counterReducer });
