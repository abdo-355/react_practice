import { useSelector } from "react-redux";

import Card from "../UI/Card";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import { RootState } from "../../store";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <Card className={styles.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
