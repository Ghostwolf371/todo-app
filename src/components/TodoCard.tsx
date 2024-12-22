interface TodoCardProps {
  complete: boolean;
  input: string;
  handleDeleteTodo: (index: number) => void;
  handleCompleteTodo: (index: number) => void;
  index: number;
}

const TodoCard = ({
  complete,
  input,
  handleDeleteTodo,
  handleCompleteTodo,
  index,
}: TodoCardProps) => {
  return (
    <div className="card todo-item">
      <p>{input}</p>
      <div className="todo-buttons">
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
