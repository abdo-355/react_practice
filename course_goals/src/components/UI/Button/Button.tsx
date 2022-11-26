import { ReactNode } from "react";

import styles from "./Button.module.css";

interface Props {
  type: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button type={props.type} className={styles.button}>
      {props.children}
    </button>
  );
};

export default Button;
