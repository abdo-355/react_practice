import { configureStore, Reducer } from "@reduxjs/toolkit";

enum actionTypes {
  INCREMENT,
  DECREMENT,
}

interface IState {
  count: number;
}

interface IAction {
  type: actionTypes;
  payload: any;
}

const counterReducer: Reducer<IState> = (state = { count: 0 }, action) => {
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

export default configureStore<IState, IAction>({ reducer: counterReducer });
