import { useState, ChangeEvent, FocusEvent } from "react";

const useInput = (validateValue: (value: string) => boolean) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const ChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  const BlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    ChangeHandler,
    BlurHandler,
    reset,
  };
};

export default useInput;
