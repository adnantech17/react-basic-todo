import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({ id: null, value: "" });

  return (
    <div className="container">
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        edit={edit}
        setEdit={setEdit}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        edit={edit}
        setEdit={setEdit}
      />
    </div>
  );
}

export default App;
