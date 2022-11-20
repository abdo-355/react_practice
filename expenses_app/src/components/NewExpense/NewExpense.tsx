import { useState, ChangeEvent, FormEvent } from "react";

import "./NewExpense.css";

import { IExpenseItem } from "../Expenses/ExpenseItem";

interface Props {
  onNewExpense: (newExpense: IExpenseItem) => void;
}

const NewExpense: React.FC<Props> = ({ onNewExpense }) => {
  const [titleValue, setTitleValue] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const titleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };
  const amountChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAmountValue(e.target.value);
  };
  const dateChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDateValue(e.target.value);
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const expenseData = {
      id: Math.random().toString(),
      title: titleValue,
      amount: +amountValue,
      date: new Date(dateValue),
    };

    setTitleValue("");
    setAmountValue("");
    setDateValue("");

    onNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              onChange={titleChangeHandler}
              type="text"
              value={titleValue}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              onChange={amountChangeHandler}
              type="number"
              min="0.01"
              step="0.01"
              value={amountValue}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            {/* we specify a max date so that we can filter it later */}
            <input
              onChange={dateChangeHandler}
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={dateValue}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;
