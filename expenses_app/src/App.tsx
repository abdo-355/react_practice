import ExpenseItem, { ExpenseItemProps } from "./components/ExpenseItem";

const App: React.FC = () => {
  const expenses: ExpenseItemProps[] = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="App">
      <h1>Hi there</h1>
      {expenses.map((expense) => (
        <ExpenseItem {...expense} />
      ))}
    </div>
  );
};

export default App;
