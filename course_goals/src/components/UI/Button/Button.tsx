import { ReactNode } from "react";

import "./Button.css";

interface Props {
  type: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button type={props.type} className="button">
      {props.children}
    </button>
  );
};

export default Button;
