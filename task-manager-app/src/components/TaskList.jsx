import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onDelete }) {

  if (tasks.length === 0) {
    return (
      <div className="border p-4 mt-4 rounded text-center text-gray-500">
        No tasks added yet
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;