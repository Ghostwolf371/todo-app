import { TodoProps } from "../shared/types";

interface TabsProps {
  todos: TodoProps[];
  setSelectedTab: (newTab: string) => void;
  selectedTab: string;
}

const Tabs = ({ todos, setSelectedTab, selectedTab }: TabsProps) => {
  const tabs = ["All", "Open", "Completed"];

  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((value) => !value.complete).length
            : todos.filter((val) => val.complete).length;
        return (
          <button
            onClick={() => setSelectedTab(tab)}
            className={`tab-button ${tab == selectedTab ? "tab-selected" : ""}`}
            key={tabIndex}
          >
            <h4>
              {tab}
              <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}

      <hr />
    </nav>
  );
};
export default Tabs;
