import { IExpenseItem } from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

interface Props {
  expenses: IExpenseItem[];
}

const Expenses: React.FC<Props> = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </Card>
  );
};

export default Expenses;
