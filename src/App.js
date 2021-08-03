import Expense from "./components/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 283.34, date: new Date(2021, 3, 23) },
    { title: "Groceries", amount: 23.45, date: new Date(2021, 3, 27) },
    { title: "Books", amount: 100.34, date: new Date(2021, 4, 2) },
    { title: "Utilities", amount: 70.34, date: new Date(2021, 3, 27) },
    { title: "Credit Card", amount: 230.34, date: new Date(2021, 5, 11) },
  ];

  return (
    <div>
      <NewExpense />
      <Expense expense={expenses}/>
    </div>
  );
}

export default App;
