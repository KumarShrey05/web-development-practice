import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, { text: todo, completed: false }]); setTodo("");
  };
  const handleKeyUp = (e) => { if (e.key === "Enter") { addTodo(); } };

  return <div>
    <h1>Todo App</h1>

    <input type="text"
      placeholder="Enter a Todo"
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      onKeyUp={handleKeyUp} />

    <button onClick={addTodo}>Add Todo</button>
    <ul>
      {todos.map((item, index) => (
        <li key={index}>
          <span
            onClick={() =>
              setTodos(todos.map((item, i) => i === index ? { ...item, completed: !item.completed } : item))
            }
            style={{
              textDecoration: item.completed ? "line-through" : "none"
            }}
          >
            {item.text}
          </span>
          <button onClick={() => setTodos(todos.filter((_, i) => i !== index))}>Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
}
export default App;