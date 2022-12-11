import { useState, ChangeEvent, FormEvent, FocusEvent } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [nameInputTouched, setNameInputTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredName(e.target.value);
  };

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    setNameInputTouched(true);
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    setNameInputTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);

    setEnteredName("");
    setNameInputTouched(false);
  };

  const nameInputClasses =
    !enteredNameIsValid && nameInputTouched
      ? "form-control invalid"
      : "form-control";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && nameInputTouched && (
          <p className="error-text">Name must not be Empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
