import { type Todo as TodoType, type ListOfTodos } from "../types";
import { Todo } from "./Todo";

interface props {
  todos: ListOfTodos;
  onToggleCompleteTodo: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
  onRemoveTodo: (id: string) => void;
}

export const Todos: React.FC<props> = ({
  todos,
  onRemoveTodo,
  onToggleCompleteTodo,
}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id + todo.title}
          className={`${todo.completed ? "completed" : ""}`}
        >
          <Todo
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggleCompleteTodo={onToggleCompleteTodo}
            onRemoveTodo={onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  );
};
