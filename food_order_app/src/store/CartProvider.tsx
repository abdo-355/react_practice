import { useReducer, Reducer, ReactNode } from "react";

import CartContext from "./CartContext";
import { ICartState, Item } from "../types/types";

const initialCartState: ICartState = {
  items: [],
  totalAmount: 0,
};

enum actionTypes {
  ADD,
  REMOVE,
  CLEAR_CART,
}

interface CartActions {
  type: actionTypes;
  payload?: any;
}

interface Props {
  children: ReactNode;
}

const cartReducer: Reducer<ICartState, CartActions> = (
  state,
  action
): ICartState => {
  switch (action.type) {
    case actionTypes.ADD: {
      const updatedAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      // we get the index of the Item to update the items array with it later
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      const existingItem = state.items[itemIndex];

      let updatedItems: Item[];

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.payload.amount,
        };

        updatedItems = [...state.items];

        updatedItems[itemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, action.payload];
      }

      return {
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    }
    case actionTypes.REMOVE: {
      // we get the index of the Item to update the items array with it later
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.items[itemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;

      let updatedItems: Item[];
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount! - 1,
        };
        updatedItems = [...state.items];
        updatedItems[itemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case actionTypes.CLEAR_CART: {
      return { items: [], totalAmount: 0 };
    }
    default:
      return initialCartState;
  }
};

const CartProvider: React.FC<Props> = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const addItemToCartHandler = (item: Item) => {
    dispatchCartAction({ type: actionTypes.ADD, payload: item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: actionTypes.REMOVE, payload: { id } });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: actionTypes.CLEAR_CART });
  };

  const cartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
