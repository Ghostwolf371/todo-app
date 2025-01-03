import { TodoProps } from "../shared/types";
import TodoCard from "./TodoCard";

interface TodoListProps {
  todos: TodoProps[];
  selectedTab: string;
  handleDeleteTodo: (index: number) => void;
  handleCompleteTodo: (index: number) => void;
  handleEditTodo: (index: number, newTodo: string) => void;
}

const TodoList = ({
  todos,
  selectedTab,
  handleDeleteTodo,
  handleCompleteTodo,
  handleEditTodo,
}: TodoListProps) => {
  const tab = selectedTab;
  const filterTodosList =
    tab === "All"
      ? todos
      : tab === "Completed"
      ? todos.filter((todo) => todo.complete)
      : todos.filter((todo) => !todo.complete);
  return (
    <>
      {filterTodosList.map((todo, index) => (
        <TodoCard
          key={index}
          complete={todo.complete}
          input={todo.input}
          index={todos.findIndex((val) => val.input == todo.input)}
          handleDeleteTodo={handleDeleteTodo}
          handleCompleteTodo={handleCompleteTodo}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </>
  );
};
export default TodoList;
