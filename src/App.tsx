import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { TodoProps } from "./shared/types";

const App = () => {
  // const todos = [
  //   { input: "Hello! Add your first todo!", complete: true },
  //   { input: "Get the groceries!", complete: false },
  //   { input: "Learn how to web design", complete: false },
  //   { input: "Say h1 to gran gran", complete: true },
  // ];

  const [todos, setTodos] = useState<TodoProps[]>([
    { input: "Hello! Add your first todo!", complete: true },
  ]);

  const [selectedTab, setSelectedTab] = useState("All");

  const handleAddTodo = (newTodo: string) => {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };
  const handleCompleteTodo = (index: number) => {
    // update/edit/modify

    // const newTodoList = [...todos];
    // const completedTodo = todos[index];
    // completedTodo["complete"] = true;
    // newTodoList[index] = completedTodo;
    // setTodos(newTodoList);
    // handleSaveData(newTodoList);

    const newTodoList = todos.map((todo, i) =>
      i === index ? { ...todo, complete: true } : todo
    );

    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };
  const handleDeleteTodo = (index: number) => {
    const newTodoList = todos.filter((_, valIndex) => valIndex !== index);
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  const handleSaveData = (currTodos: TodoProps[]) => {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  };

  const handleEditTodo = (index: number, newTodo: string) => {
    // Create a new array by mapping over the todos and modifying the one at the specified index
    const newTodoList = todos.map((todo, i) =>
      i === index ? { ...todo, input: newTodo } : todo
    );

    // Update the state with the new todo list
    setTodos(newTodoList);

    // Save the updated todo list to localStorage
    handleSaveData(newTodoList);
  };

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) return;
    const storedTodos = localStorage.getItem("todo-app");
    if (storedTodos) {
      const db = JSON.parse(storedTodos);
      setTodos(db.todos);
    }
  }, []);

  return (
    <>
      <Header todoNumber={todos.length} />
      <Tabs
        setSelectedTab={setSelectedTab}
        selectedTab={selectedTab}
        todos={todos}
      />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
        todos={todos}
        selectedTab={selectedTab}
        handleEditTodo={handleEditTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
};
export default App;
