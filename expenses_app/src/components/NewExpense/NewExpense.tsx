import { useState } from "react";

import { IExpenseItem } from "../Expenses/ExpenseItem";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

interface Props {
  onNewExpense: (newExpense: IExpenseItem) => void;
}

const NewExpense: React.FC<Props> = ({ onNewExpense }) => {
  const [inputMode, setinputMode] = useState(false);

  const switchInputMode = () => {
    setinputMode((prev) => !prev);
  };

  return (
    <div className="new-expense">
      {inputMode ? (
        <ExpenseForm onNewExpense={onNewExpense} onCancel={switchInputMode} />
      ) : (
        <button onClick={switchInputMode}>Add new expense</button>
      )}
    </div>
  );
};

export default NewExpense;
