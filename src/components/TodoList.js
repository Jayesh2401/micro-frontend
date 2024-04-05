export default function TodoList({ tasks }) {
  return (
    <div className="h-1/3 bg-slate-200 w-1/3">
      <p className="w-full bg-slate-400 p-2">Tasks</p>
      <ul className="text-cyan-700">
        {tasks?.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
