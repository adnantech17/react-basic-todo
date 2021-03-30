import React, { useContext } from "react";
import { TodoContext } from "../state/TodoProvider";
import Todo from "./Todo";

const TodoList = () => {
    const [todos] = useContext(TodoContext);
    return (
        <div className="todolist-class">
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
