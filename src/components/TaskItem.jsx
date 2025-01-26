import React, { useState } from "react";

const TaskItem = ({ task, onDelete, onComplete }) => {
  return (
    <li className="flex justify-between items-center bg-white p-3 rounded-lg shadow-md">
      <span
        className={`flex-1 ${
          task.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {task.text}
      </span>
      <div className="space-x-2">
        <button
          onClick={() => onComplete(task)}
          disabled={task.completed}
          className={`px-3 py-1 rounded-lg transition ${
            task.completed
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => onDelete(task)}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
