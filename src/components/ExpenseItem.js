import React, { useState } from "react";
import "./ExpenseItem.css";
import "./Card.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";



function ExpenseItem(props) {

  // returns an array with the first value being the value itself and second a function which can used to change this value
  const [title, setTitle] = useState(props.title); 

  const clickHandler = () => {
    setTitle(props.title +" Updated!!")
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
