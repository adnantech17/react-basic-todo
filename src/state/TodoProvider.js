import React, { createContext } from "react";
import { useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const [todos, setTodos] = useState([]);
    const [edit, setEdit] = useState({ id: null, value: "" });
    return (
        <TodoContext.Provider value={[todos, setTodos, edit, setEdit]}>
            {props.children}
        </TodoContext.Provider>
    );
};
