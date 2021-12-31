import Expenses from "./components/Expense/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "dummy 2021",
    amount: 94.12,
    date: new Date(2021, 8, 16),
  },
  {
    id: "e2",
    title: "dummy 2021",
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  {
    id: "e3",
    title: "dummy 2022",
    amount: 94.12,
    date: new Date(2022, 1, 4),
  },
  {
    id: "e4",
    title: "dummy 2019",
    amount: 94.12,
    date: new Date(2019, 10, 1),
  },
];
const App = (props) => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const AddExpensehandler = (expense) => {
    setExpenses((previousExpense) => {
      return [expense, ...previousExpense];
    });
  };

  return (
    <div>
      <h1>Spend analyser</h1>
      <NewExpense onAddExpense={AddExpensehandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
