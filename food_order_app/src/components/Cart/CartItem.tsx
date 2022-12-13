import { MouseEventHandler } from "react";

import styles from "./CartItem.module.css";

interface Props {
  name: string;
  price: number;
  amount: number;
  onRemove: MouseEventHandler;
  onAdd: MouseEventHandler;
}

const CartItem: React.FC<Props> = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={styles["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>{price}</span>
          <span className={styles.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
