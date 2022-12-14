import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/CartContext";
import { Item } from "../../../types/types";
import styles from "./MealItem.module.css";

const MealItem: React.FC<Partial<Item>> = ({
  id,
  name,
  description,
  price,
}) => {
  const cartCtx = useContext(CartContext);

  const thePrice = price!.toFixed(2);

  const addToCartHandler = (amount: number) => {
    cartCtx.addItem({
      id: id!,
      name: name!,
      amount: amount!,
      price: +thePrice,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>${price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
