import { useState } from "react";

export default function Form({addTask, heading }) {
  const [task, setTask] = useState("");
  return (
    <div>
      <h1>{heading}</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={() => addTask(task)}>Add Task</button>
    </div>
  );
}
