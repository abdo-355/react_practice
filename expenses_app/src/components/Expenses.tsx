import { ExpenseItemProps } from "./ExpenseItem";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

interface Props {
  expenses: ExpenseItemProps[];
}

const Expenses: React.FC<Props> = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem {...expense} />
      ))}
    </Card>
  );
};

export default Expenses;
