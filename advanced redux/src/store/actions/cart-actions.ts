import { Dispatch } from "@reduxjs/toolkit";

import { ICart, replaceCart, ICartItem } from "../slices/cart-slice";
import { showNotification } from "../slices/ui-slice";

export interface IFetchedCart {
  items: ICartItem[];
  totalQuantity: number;
}

export const sendCartData = (cart: ICart) => async (dispatch: Dispatch) => {
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
      body: JSON.stringify({
        items: cart.items,
        totalQuantity: cart.totalQuantity,
      }),
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

export const fetchCart = () => async (dispatch: Dispatch) => {
  const fetchData = async () => {
    const res = await fetch(`${import.meta.env.VITE_FIREBASE_URL}/cart.json`);

    if (!res.ok) {
      throw new Error("Could not fetch cart data");
    }

    const data: IFetchedCart = await res.json();

    return data;
  };

  try {
    const cartData = await fetchData();

    dispatch(
      replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity,
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
