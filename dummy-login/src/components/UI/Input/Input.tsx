import { ChangeEventHandler } from "react";

import classes from "./Input.module.css";

interface Props {
  data: { value: string; isValid: boolean | null };
  id: string;
  label: string;
  type: string;
  ChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<Props> = ({ data, id, label, type, ChangeHandler }) => {
  return (
    <>
      <div
        className={`${classes.control} ${
          data.isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          value={data.value}
          onChange={ChangeHandler}
        />
      </div>
    </>
  );
};

export default Input;
