import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart";
import Layout from "./components/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { RootState } from "./store";
import { showNotification } from "./store/slices/ui-slice";

let isInitial = true;

const App = () => {
  const dispatch = useDispatch();

  const cartIsVisible = useSelector(
    (state: RootState) => state.ui.cartIsVisible
  );
  const cart = useSelector((state: RootState) => state.cart);
  const notification = useSelector((state: RootState) => state.ui.notification);

  console.log(notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data",
        })
      );

      const res = await fetch(
        `${import.meta.env.VITE_FIREBASE_URL}/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!res.ok) {
        throw new Error("Sending Failed!");
      }

      dispatch(
        showNotification({
          status: "success",
          title: "Success",
          message: "Cart data sent successfully",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((err) => {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed",
        })
      );
    });
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
