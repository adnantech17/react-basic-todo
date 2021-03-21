import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, edit, setEdit }) => {
  return (
    <div className="todolist-class">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          setEdit={setEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
