import React from "react";
import { createRoot } from "react-dom/client";
import TodoList from "./components/TodoList";
import AddTask from "add_todo/Add-task";

import "./index.scss";
import { useTaskList } from "add_todo/useTaskList";

const App = () => {
  const { tasks, addTask } = useTaskList();
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <AddTask heading="Add Task" addTask={addTask} />
      <TodoList tasks={tasks} />
    </div>
  );
};
const root = createRoot(document.getElementById("app"));
root.render(<App />);
