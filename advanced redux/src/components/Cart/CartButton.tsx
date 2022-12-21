import { useDispatch } from "react-redux/es/exports";

import { toggleCart } from "../../store/slices/ui-slice";
import styles from "./CartButton.module.css";

const CartButton = () => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(toggleCart());
  };

  return (
    <button className={styles.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={styles.badge}>1</span>
    </button>
  );
};

export default CartButton;
