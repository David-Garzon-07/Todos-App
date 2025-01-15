import { useState } from "react";
import { type TodoTitle } from "../types";
interface Props {
  saveTodo: ({ title }: TodoTitle) => void;
}
export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      saveTodo({ title: inputValue });
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="New-Todo"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        onKeyDown={() => {}}
        placeholder="¿que quieres hacer?"
        autoFocus
      />
    </form>
  );
};
