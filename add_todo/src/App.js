"use client";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import "./index.scss";
import Form from "./component/form";
import { useTaskList } from "./custom-hooks/useTaskList";
import List from "./component/List";

const App = () => {
  const { tasks, addTask } = useTaskList();
  useEffect(() => {}, [tasks]);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Form tasks={tasks} addTask={addTask} />
      <List tasks={tasks} />
    </div>
  );
};
const root = createRoot(document.getElementById("app"));
root.render(<App />);
