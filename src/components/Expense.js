import ExpenseItem from "./ExpenseItem";
import "./Expense.css"
import Card from "./Card";

function Expense(props) {

  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expense[0].title}
        amount={props.expense[0].amount}
        date={props.expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expense[1].title}
        amount={props.expense[1].amount}
        date={props.expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expense[2].title}
        amount={props.expense[2].amount}
        date={props.expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expense[3].title}
        amount={props.expense[3].amount}
        date={props.expense[3].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expense[4].title}
        amount={props.expense[4].amount}
        date={props.expense[4].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expense;
