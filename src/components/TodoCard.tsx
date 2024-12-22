import { useState, useEffect } from "react";

interface TodoCardProps {
  complete: boolean;
  input: string;
  handleDeleteTodo: (index: number) => void;
  handleCompleteTodo: (index: number) => void;
  handleEditTodo: (index: number, newTodo: string) => void;
  index: number;
}

const TodoCard = ({
  complete,
  input,
  handleDeleteTodo,
  handleCompleteTodo,
  handleEditTodo,
  index,
}: TodoCardProps) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Effect to reset input value when editing is canceled or saved
  useEffect(() => {
    if (!showInput) {
      setInputValue("");
    }
  }, [showInput]);

  const handleStartEditing = () => {
    console.log("object");
    setShowInput(true);
    setInputValue(input);
  };

  const handleSaveEdit = () => {
    if (inputValue.trim()) {
      handleEditTodo(index, inputValue);
      setShowInput(false);
    }
  };

  const handleComplete = () => {
    handleCompleteTodo(index);
  };

  const handleDelete = () => {
    handleDeleteTodo(index);
  };

  return (
    <div className="card todo-item">
      {showInput ? (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Edit your todo"
          />
          <button onClick={handleSaveEdit}>Save</button>
        </>
      ) : (
        <p>{input}</p>
      )}

      <div className="todo-buttons">
        {!showInput && (
          <button onClick={handleStartEditing} disabled={complete}>
            Edit
          </button>
        )}
        <button onClick={handleComplete} disabled={complete}>
          Done
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoCard;
