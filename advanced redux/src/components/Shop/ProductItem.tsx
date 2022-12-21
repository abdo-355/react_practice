import { useDispatch } from "react-redux";

import Card from "../UI/Card";
import styles from "./ProductItem.module.css";
import { addItem } from "../../store/slices/cart-slice";

interface Props {
  id: string;
  title: string;
  price: number;
  description: string;
}

const ProductItem: React.FC<Props> = ({ id, title, price, description }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addItem({ id, title, price, description }));
  };

  return (
    <li className={styles.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={styles.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={styles.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
