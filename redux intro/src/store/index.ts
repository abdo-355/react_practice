import { configureStore, Reducer } from "@reduxjs/toolkit";

export enum actionTypes {
  INCREMENT,
  DECREMENT,
}

export interface IRootState {
  count: number;
}

export interface IAction {
  type: actionTypes;
  payload: any;
}

const counterReducer: Reducer<IRootState> = (state = { count: 0 }, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        count: state.count + 1,
      };

    case actionTypes.DECREMENT:
      return {
        count: state.count - 1,
      };
  }
  return state;
};

export default configureStore<IRootState, IAction>({ reducer: counterReducer });
