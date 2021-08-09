import ExpenseItem from "./ExpenseItem";
import "./Expense.css"
import Card from "./Card";
import ExpensesFilter from "./NewExpense/ExpensesFilter";

function Expense(props) {

  const pickDropDownHandler = (yearPicked) => {
    console.log(yearPicked);
  }


  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter onPickDropdown={pickDropDownHandler}/>
        {props.expense.map
        (exp => <ExpenseItem 
          key={exp.id}
          title={exp.title} 
          amount={exp.amount} 
          date={exp.date}
        />)}
      </Card>
    </div>
  );
}

export default Expense;
