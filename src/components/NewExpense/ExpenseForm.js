import React, { useState } from "react";
import "./ExpenseForm.css"

const ExpenseForm = (props)=> {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [enteredForm, setEnteredForm] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // })

    const titleChangeHandler = (event) => {
        // setEnteredForm({
        //     ...enteredForm, 
        //     enteredTitle: event.nativeEvent.data
        //     })
        // console.log(enteredForm);
        // setEnteredForm((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value,
        //     }
        // })
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        // setEnteredForm({
        //     ...enteredForm, 
        //     enteredAmount: event.nativeEvent.data
        //     })
        //     console.log(enteredForm.enteredAmount);
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        // setEnteredForm({
        //     ...enteredForm, 
        //     enteredDate: event.target.value
        //     })
        //     console.log(enteredForm.enteredDate);
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.stopEdit()
    }

    const cancelHandler = (event) => {
        props.stopEdit()
    }

   return (
       <form onSubmit={submitHandler}>
           <div className='new-expense__controls'>
               <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
               </div>
               <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
               </div>
               <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2025-01-01' value={enteredDate} onChange={dateChangeHandler}/>
               </div>
           </div>
           <div className='new-expense__actions'>
                <button type='button' onClick={cancelHandler}>Cancel</button>
                <button type='submit'>Add expense</button>
           </div>
       </form>
   ) 
}

export default ExpenseForm;