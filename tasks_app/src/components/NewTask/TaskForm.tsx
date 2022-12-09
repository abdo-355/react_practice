import { useState, FormEvent } from "react";

import styles from "./TaskForm.module.css";

interface Props {
  loading: boolean;
  onEnterTask: (value: string) => void;
}

const TaskForm: React.FC<Props> = ({ loading, onEnterTask }) => {
  const [inputValue, setInputValue] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      onEnterTask(inputValue);
    }
    setInputValue("");
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button>{loading ? "Sending..." : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
