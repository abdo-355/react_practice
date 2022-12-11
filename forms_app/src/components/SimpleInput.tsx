import { useState, ChangeEvent, FormEvent } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredName(e.target.value);
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (enteredName.trim() === "") {
      return;
    }

    console.log(enteredName);

    setEnteredName("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={onChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
