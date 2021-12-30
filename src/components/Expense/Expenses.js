import "./Expenses.css";
import React, { useState } from "react";
import ExpenseItem from "../Expense/ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChanged={filterChangedHandler}
        />

        {props.items.map((expens) => (
          <ExpenseItem
            key={expens.id}
            title={expens.title}
            amount={expens.amount}
            date={expens.date}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
