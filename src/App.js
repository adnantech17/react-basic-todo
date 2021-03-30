import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { TodoProvider } from "./state/TodoProvider";

function App() {
    return (
        <div className="container">
            <TodoProvider>
                <TodoForm />
                <TodoList />
            </TodoProvider>
        </div>
    );
}

export default App;
