import { useEffect } from "react";

export default function List({tasks}) {
  useEffect(() => {
    console.log("first");
  });
  return (
    <div>
      <h1 >List</h1>
      {tasks?.map((task) => (
        <div>{task}</div>
      ))}
    </div>
  );
}
