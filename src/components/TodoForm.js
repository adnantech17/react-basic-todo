import React, { useState, useEffect } from "react";

function TodoForm({ todos, setTodos, edit, setEdit }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit.id !== null) {
      updateTodo(e);
      return;
    }

    if (!input) return;
    const newTodo = {
      id: Date.now().toPrecision(),
      title: input,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  };

  const updateTodo = (e) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => {
        if (todo.id === edit.id) {
          return {
            id: todo.id,
            title: input,
          };
        } else return todo;
      })
    );
    setEdit({ id: null, value: "" });
    setInput("");
  };

  useEffect(() => {
    if (edit.id) {
      setInput(edit.value);
    }
  }, [edit]);

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btn btn-success">
        {edit.id !== null ? "Change" : "Add to list"}
      </button>
    </form>
  );
}

export default TodoForm;
