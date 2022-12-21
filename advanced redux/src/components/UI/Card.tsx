import { ReactNode } from "react";

import styles from "./Card.module.css";

interface Props {
  className?: string;
  children: ReactNode;
}

const Card: React.FC<Props> = ({ className, children }) => {
  return (
    <section className={`${styles.card} ${className ? className : ""}`}>
      {children}
    </section>
  );
};

export default Card;
