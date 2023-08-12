import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  const expenses = [];

  props.items.forEach((expense) =>
    expenses.push(
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    )
  );

  return <Card className="expenses">{expenses}</Card>;
};

export default Expenses;
