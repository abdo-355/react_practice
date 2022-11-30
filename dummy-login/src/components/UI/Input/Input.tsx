import React, { ChangeEventHandler, useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";

interface Props {
  data: { value: string; isValid: boolean | null };
  id: string;
  label: string;
  type: string;
  ChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

interface Ref {
  focus: () => void;
}

const Input = React.forwardRef<Ref, Props>(
  ({ data, id, label, type, ChangeHandler }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => {
      return {
        focus() {
          inputRef.current?.focus();
        },
      };
    });

    return (
      <>
        <div
          className={`${classes.control} ${
            data.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor={id}>{label}</label>
          <input
            ref={inputRef}
            type={type}
            id={id}
            value={data.value}
            onChange={ChangeHandler}
          />
        </div>
      </>
    );
  }
);

export default Input;
