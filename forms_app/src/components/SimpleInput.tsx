import { useState, ChangeEvent, FormEvent, FocusEvent } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [nameInputTouched, setNameInputTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailInputTouched, setEmailInputTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";

  const enteredEmailIsValid = enteredEmail.includes("@");

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredName(e.target.value);
  };

  const emailInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(e.target.value);
  };

  const nameInputBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    setNameInputTouched(true);
  };

  const emailInputBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    setEmailInputTouched(true);
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    setNameInputTouched(true);
    setEmailInputTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }
    console.log(enteredName);

    setEnteredName("");
    setNameInputTouched(false);

    setEnteredEmail("");
    setEmailInputTouched(false);
  };

  const nameInputClasses =
    !enteredNameIsValid && nameInputTouched
      ? "form-control invalid"
      : "form-control";

  const emailInputClasses =
    !enteredEmailIsValid && emailInputTouched
      ? "form-control invalid"
      : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && nameInputTouched && (
          <p className="error-text">Name must not be Empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {!enteredEmailIsValid && emailInputTouched && (
          <p className="error-text">Please enter a valid email address</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
