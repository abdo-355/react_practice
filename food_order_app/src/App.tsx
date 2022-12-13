import { useState } from "react";

import CartProvider from "./store/CartProvider";
import Header from "./components/layout/Header";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>{/* Meals component goes here */}</main>
    </CartProvider>
  );
};

export default App;
