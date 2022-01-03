import "./Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filterdExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChanged={filterChangedHandler}
        />
        <ExpenseChart expenses ={filterdExpense}/>
        <ExpensesList items ={filterdExpense}/>
      </Card>
    </div>
  );
};
export default Expenses;
