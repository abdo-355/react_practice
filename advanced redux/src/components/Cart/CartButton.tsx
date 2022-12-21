import { useDispatch, useSelector } from "react-redux/es/exports";

import { toggleCart } from "../../store/slices/ui-slice";
import styles from "./CartButton.module.css";
import { RootState } from "../../store";

const CartButton = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state: RootState) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(toggleCart());
  };

  return (
    <button className={styles.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={styles.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
