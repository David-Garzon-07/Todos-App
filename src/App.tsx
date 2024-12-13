import { useState } from "react";
import { Todos } from "./components/Todos";
import { type Todo as TodoType } from "./types";

const aTodos = [
  {
    id: "1",
    title: "todo 1",
    completed: true,
  },
  {
    id: "2",
    title: "todo 2",
    completed: false,
  },
  {
    id: "3",
    title: "todo 3",
    completed: false,
  },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(aTodos);
  const handleremove = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
  };
  const handleCompleted = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <div className="contenedor">
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleremove}
        todos={todos}
      />
    </div>
  );
};

export default App;
