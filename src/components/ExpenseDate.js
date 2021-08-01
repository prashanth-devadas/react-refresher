import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div classname="expense-date__month">{month}</div>
      <div classname="expense-date__year">{year}</div>
      <div classname="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
