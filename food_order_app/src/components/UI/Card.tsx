import { ReactNode } from "react";

import styles from "./Card.module.css";

const Card: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
