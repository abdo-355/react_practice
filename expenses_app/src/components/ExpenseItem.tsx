import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

export interface ExpenseItemProps {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ date, title, amount }) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
