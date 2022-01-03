import React ,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing,setIsEditing]= useState(false);
  
  const saveExpenseDatahandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString,
    };
    props.onAddExpense(expenseData);
  };
  const startEditing =()=>{
    setIsEditing(true)
  }
  const stopEditing=()=>{
    setIsEditing(false)

  }
  return (
    <div className="new-expense">
     {!isEditing &&  <button type="button" onClick={startEditing}>Add Expense</button>} 
      {isEditing &&  <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} onCancelPress={stopEditing} />}
    </div>
  );
};
export default NewExpense;
