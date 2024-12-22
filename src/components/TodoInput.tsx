import { useState } from "react";

interface TodoInputProps {
  handleAddTodo: (newTodo: string) => void;
}

const TodoInput = ({ handleAddTodo }: TodoInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (!inputValue) return;

    handleAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>
        <i className="fa-solid fa-plus" />
      </button>
    </div>
  );
};
export default TodoInput;
