import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import "./App.css";
import TodoItem from "./components/TodoItem";

type TodoData = {
  id: string;
  title: string;
  description: string;
};

function App() {
  const [todos, setTodos] = useState<TodoData[]>([
    {
      id: uuidv4(),
      title: "todo 1",
      description: "description 1",
    },
    {
      id: uuidv4(),
      title: "todo 2",
      description: "description 2",
    },
  ]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const addTodo = () => {
    if (todoTitle === "") {
      alert("Please enter a title for your todo.");
      return;
    }
    if (todoDescription === "") {
      alert("Please enter a description for your todo.");
      return;
    }
    setTodos([
      ...todos,
      { id: uuidv4(), title: todoTitle, description: todoDescription },
    ]);
    setTodoTitle("");
    setTodoDescription("");
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>todo list</h1>
      <div id="todo-input-container">
        <input
          type="text"
          id="todo-input"
          placeholder="new todo"
          tabIndex={1}
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button id="todo-add" tabIndex={3} onClick={addTodo}>
          add
        </button>
      </div>
      <textarea
        id="todo-description-input"
        placeholder="description"
        tabIndex={2}
        value={todoDescription}
        onChange={(e) => setTodoDescription(e.target.value)}
      ></textarea>
      <section id="todos">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            description={todo.description}
            onDelete={() => deleteTodo(todo.id)}
          />
        ))}
      </section>
    </>
  );
}

export default App;
