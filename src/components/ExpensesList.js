import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";

const ExpensesList = props => {
  if(props.filterResult.length === 0){
      return <h2 className="expenses-list__fallback">No items found</h2>
  }


  return (
      <ul className="expenses-list">

        {props.filterResult.map
        ((exp) => (
        <ExpenseItem 
            key={exp.id}
            title={exp.title} 
            amount={exp.amount} 
            date={exp.date}
        />))}

      </ul>
  )

}

export default ExpensesList;