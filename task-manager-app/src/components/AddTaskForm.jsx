import { useState } from "react";

function AddTaskForm({ onAddTask }) {

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim().length < 3) {
      setError("Task must be at least 3 characters");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false
    };

    onAddTask(newTask);

    setTitle("");
    setPriority("Low");
    setError("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border p-4 rounded bg-gray-50 space-y-3"
    >

      <input
        type="text"
        placeholder="Enter Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full border p-2 rounded"
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Add Task
      </button>

      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}

    </form>
  );
}

export default AddTaskForm;