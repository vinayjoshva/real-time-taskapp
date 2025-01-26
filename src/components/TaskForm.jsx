import React, { useState } from "react";
import socket from "../utilities/socket";

const TaskForm = () => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      socket.emit("add-task", task);
      setTask("");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-4 bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto"
      >
        <input
          type="text"
          placeholder="Add a task..."
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-200"
        />
        <button
          type="submit"
          className="w-full bg-rose-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-rose-600 transition cursor-pointer"
        >
          ADD TASK
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
