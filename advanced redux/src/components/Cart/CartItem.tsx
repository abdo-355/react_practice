import { useDispatch } from "react-redux";

import { addItem, removeItem, ICartItem } from "../../store/slices/cart-slice";
import styles from "./CartItem.module.css";

interface Props {
  item: ICartItem;
}

const CartItem: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  const { id, title, quantity, total, price } = props.item;

  const addHandler = () => {
    dispatch(addItem({ id, title, price }));
  };

  const removeHandler = () => {
    dispatch(removeItem(id));
  };

  return (
    <li className={styles.item}>
      <header>
        <h3>{title}</h3>
        <div className={styles.price}>
          ${total.toFixed(2)}{" "}
          <span className={styles.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={styles.details}>
        <div className={styles.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={styles.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
