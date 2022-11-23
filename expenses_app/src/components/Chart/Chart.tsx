import ChartBar from "./ChartBar";
import { IExpenseItem } from "../Expenses/ExpenseItem";

import "./Chart.css";

interface Props {
  expenses: IExpenseItem[];
}

const Chart: React.FC<Props> = ({ expenses }) => {
  const dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth();
    dataPoints[expenseMonth].value += expense.amount;
  }

  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const maxAmount = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxAmount}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
