import { Dispatch } from "@reduxjs/toolkit";

import { ICart } from "../slices/cart-slice";
import { showNotification } from "../slices/ui-slice";

const sendCartData = (cart: ICart) => async (dispatch: Dispatch) => {
  try {
    dispatch(
      showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const res = await fetch(`${import.meta.env.VITE_FIREBASE_URL}/cart.json`, {
      method: "PUT",
      body: JSON.stringify(cart),
    });

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
  } catch (err) {
    dispatch(
      showNotification({
        status: "error",
        title: "Error!",
        message: "Sending cart data failed",
      })
    );
  }
};

export default sendCartData;
