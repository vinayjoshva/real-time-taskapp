import React, { useState, useEffect } from "react";
import socket from "../utilities/socket";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  // Listen for task updates from the server
  useEffect(() => {
    socket.on("tasks-updated", (updatedTasks) => {
      console.log("Updated tasks from server:", updatedTasks); // Debugging
      setTasks(updatedTasks);
    });

    return () => {
      socket.off("tasks-updated");
    };
  }, []);

  const handleDelete = (task) => {
    socket.emit("delete-task", task.text);
  };

  const handleComplete = (task) => {
    socket.emit("complete-task", task.text);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-6 bg-gray-100 p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Task List</h2>
      {tasks.length > 0 ? (
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              onDelete={handleDelete}
              onComplete={handleComplete}
            />
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No tasks added yet.</p>
      )}
    </div>
  );
};

export default TaskList;
