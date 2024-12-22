import { useState } from "react";

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
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedTodo, setEditedTodo] = useState<string>("");

  const handleStartEditing = (index: number, currentTodo: string) => {
    setEditingIndex(index);
    setEditedTodo(currentTodo);
  };

  const handleSaveEdit = () => {
    if (editingIndex !== null) {
      handleEditTodo(editingIndex, editedTodo);
      setEditingIndex(null);
      setEditedTodo("");
    }
  };

  return (
    <div className="card todo-item">
      <p>{input}</p>
      <div className="todo-buttons">
        {editingIndex === index ? (
          <>
            <input
              type="text"
              value={editedTodo}
              onChange={(e) => setEditedTodo(e.target.value)}
            />
            <button onClick={handleSaveEdit}>Save</button>
          </>
        ) : (
          <div>
            <button onClick={() => handleStartEditing(index, input)}>
              Edit
            </button>
          </div>
        )}
        <button disabled={complete} onClick={() => handleCompleteTodo(index)}>
          <h6>Done</h6>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
};
export default TodoCard;
