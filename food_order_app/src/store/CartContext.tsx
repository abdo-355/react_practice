import { createContext } from "react";

import { ICartContext } from "../types/types";

const CartContext = createContext<ICartContext>({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
