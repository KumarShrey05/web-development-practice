import { useState } from "react";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [editingExpenseId, setEditingExpenseId] = useState(null);

  const addExpense = () => {
    if (title.trim() === "") return;
    if (amount === "") return;

    const newExpense = {
      id: Date.now(),
      Title: title,
      Amount: Number(amount),
    };

    setExpenses([...expenses, newExpense]);
    setTitle("");
    setAmount("");
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== id
    );

    setExpenses(updatedExpenses);
  };

  const updateExpense = () => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === editingExpenseId
        ? {
          ...expense,
          Title: title,
          Amount: Number(amount),
        }
        : expense
    );

    setExpenses(updatedExpenses);
    setEditingExpenseId(null);
    setTitle("");
    setAmount("");
  };

  const cancelEdit = () => {
    setEditingExpenseId(null);
    setTitle("");
    setAmount("");
  };

  const total = expenses.reduce(
    (sum, expense) => sum + Number(expense.Amount),
    0
  );

  return (
    <div>
      <h1>Expense Tracker</h1>

      <input
        type="text"
        value={title}
        placeholder="Expense Name"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <input
        type="number"
        value={amount}
        placeholder="Amount"
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />

      {editingExpenseId === null ? (
        <button type="button" onClick={addExpense}>
          Add Expense
        </button>
      ) : (
        <>
          <button type="button" onClick={updateExpense}>
            Update Expense
          </button>

          <button type="button" onClick={cancelEdit}>
            Cancel
          </button>
        </>
      )}

      {expenses.map((expense) => (
        <div key={expense.id}>
          <span>{expense.Title}</span>
          <span>₹{expense.Amount}</span>

          <button
            type="button"
            onClick={() => {
              setEditingExpenseId(expense.id);
              setTitle(expense.Title);
              setAmount(expense.Amount);
            }}
          >
            Edit
          </button>

          <button
            type="button"
            onClick={() => deleteExpense(expense.id)}
          >
            Delete
          </button>
        </div>
      ))}

      <h2>Total Expense: ₹{total}</h2>
    </div>
  );
}

export default App;