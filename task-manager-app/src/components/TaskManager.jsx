import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function toggleTask(id) {
    const updated = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    setTasks(updated);
  }

  function deleteTask(id) {
    const filtered = tasks.filter((task) => task.id !== id);
    setTasks(filtered);
  }

  const completed = tasks.filter((t) => t.completed).length;

  return (
    <div>

      <AddTaskForm onAddTask={addTask} />

      <div className="flex justify-between  p-3 mt-4 rounded bg-gray-50">
        <p>Total Tasks: {tasks.length}</p>
        <p>Completed: {completed}</p>
      </div>

      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />

    </div>
  );
}

export default TaskManager;