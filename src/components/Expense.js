import "./Expense.css"
import Card from "./Card";
import ExpensesFilter from "./NewExpense/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expense = (props) =>  {
  
  const [expenseFilterResult, setExpenseFilterResult] = useState([]);

  const pickDropDownHandler = (yearPicked) => {
    const expenseFilter = props.expense.filter(exp => exp.date.getFullYear() === Number(yearPicked))
    setExpenseFilterResult(expenseFilter); 
  }  


  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter onPickDropdown={pickDropDownHandler}/>
        <ExpensesList filterResult={expenseFilterResult} />
      </Card>
    </div>
  );
}

export default Expense;
