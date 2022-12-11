import { useState, ChangeEvent, FormEvent } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredName(e.target.value);
    setEnteredNameIsValid(true);
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    console.log(enteredName);

    setEnteredName("");
  };

  const nameInputClasses = enteredNameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={onChangeHandler}
          value={enteredName}
        />
        {!enteredNameIsValid && (
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
