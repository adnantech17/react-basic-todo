import React, { useContext } from "react";
import { TodoContext } from "../state/TodoProvider";

const Todo = ({ todo }) => {
    const [todos, setTodos, edit, setEdit] = useContext(TodoContext);
    return (
        <div className="todo-class">
            <h2 className="todo-title">{todo.title}</h2>
            <div>
                <button
                    className="btn btn-success"
                    style={{ marginRight: "12px" }}
                    onClick={() => setEdit({ id: todo.id, value: todo.title })}
                >
                    Edit
                </button>
                <button
                    className="btn btn-danger"
                    onClick={() =>
                        setTodos(todos.filter((temp) => temp.id !== todo.id))
                    }
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Todo;
