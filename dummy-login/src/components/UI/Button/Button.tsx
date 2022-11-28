import { MouseEventHandler, ReactNode } from "react";

import classes from "./Button.module.css";

interface Props {
  type?: "submit";
  className: string;
  onClick?: MouseEventHandler;
  disabled: boolean;
  children: ReactNode;
}

const Button: React.FC<Props> = ({
  type,
  className,
  onClick,
  disabled,
  children,
}) => {
  return (
    <button
      type={type || "button"}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
