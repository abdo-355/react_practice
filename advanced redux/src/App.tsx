import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart";
import Layout from "./components/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { RootState, AppDispatch } from "./store";
import { sendCartData, fetchCart } from "./store/actions/cart-actions";

let isInitial = true;

const App = () => {
  const dispatch: AppDispatch = useDispatch();

  const cartIsVisible = useSelector(
    (state: RootState) => state.ui.cartIsVisible
  );
  const cart = useSelector((state: RootState) => state.cart);
  const notification = useSelector((state: RootState) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification {...notification} />}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
};

export default App;
