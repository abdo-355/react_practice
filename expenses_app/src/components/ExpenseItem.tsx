import "./ExpenceItem.css";

const ExpenseItem: React.FC = () => {
  return (
    <div className="expense-item">
      <div>November 19th 2022</div>
      <div className="expense-item__description">
        <h2>Internet subscription</h2>
        <div className="expense-item__price">$14,95</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
