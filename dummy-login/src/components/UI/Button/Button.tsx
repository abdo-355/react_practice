import { MouseEventHandler, ReactNode } from "react";

import classes from "./Button.module.css";

interface Props {
  type?: "submit";
  className: string;
  onClick?: MouseEventHandler;
  children: ReactNode;
}

const Button: React.FC<Props> = ({ type, className, onClick, children }) => {
  return (
    <button
      type={type || "button"}
      className={`${classes.button} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
