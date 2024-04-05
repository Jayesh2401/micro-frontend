import { useState } from "react";

export function useTaskList() {
  const [tasks, setTasks] = useState([]);

  const task = {
    tasks,
    addTask: (newTask) => {
      setTasks((prev) => [...prev, newTask]);
    },
  };
  return task;
}
