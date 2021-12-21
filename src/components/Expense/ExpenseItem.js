import "./ExpenseItem.css";
import React, {useState} from "react";
import ExpenseDate from "../Expense/ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title,setTitle] = useState(props.title)
  const clickHandler =()=>{
    setTitle('updated..!!');
    alert(title)
  }
  return (
  
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>click me..!!</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
