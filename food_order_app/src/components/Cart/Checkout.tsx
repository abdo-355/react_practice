import { MouseEventHandler } from "react";

import styles from "./Checkout.module.css";

interface Props {
  onCancel: MouseEventHandler<HTMLButtonElement>;
}

const Checkout: React.FC<Props> = ({ onCancel }) => {
  return (
    <form>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <div className={styles.control}>
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal" />
      </div>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
