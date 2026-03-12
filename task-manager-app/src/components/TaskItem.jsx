function TaskItem({ task, onToggle, onDelete }) {

  return (
    <div className="border rounded p-4 flex justify-between items-center bg-white">

      <div>
        <h3
          className={`font-semibold ${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </h3>

        <p className="text-sm text-gray-500">
          Priority: {task.priority}
        </p>
      </div>

      <div className="flex gap-2">

        <button
          onClick={() => onToggle(task.id)}
          className="border px-3 py-1 rounded bg-green-500 text-white"
        >
          {task.completed ? "Undo" : "Done"}
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="border px-3 py-1 rounded bg-red-500 text-white"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskItem;