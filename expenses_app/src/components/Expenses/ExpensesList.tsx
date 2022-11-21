import ExpenseItem, { IExpenseItem } from "./ExpenseItem";

import "./ExpensesList.css";

interface Props {
  filteredExpenses: IExpenseItem[];
}

const ExpensesList: React.FC<Props> = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </ul>
  );
};

export default ExpensesList;
