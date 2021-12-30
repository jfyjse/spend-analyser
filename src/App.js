import Expenses from "./components/Expense/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
];
const App = (props) => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const AddExpensehandler = (expense) => {
    setExpenses((previousExpense)=>{
      return [expense, ...previousExpense]
    }
    )};

  return (
    <div>
      <h1>Spend analyser</h1>
      <NewExpense onAddExpense={AddExpensehandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
