import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-slate-900 p-4">
        <h1 className="text-2xl text-rose-500 font-bold mb-6">
          Real-Time Task Collaboration App
        </h1>
        <TaskForm />
        <TaskList />
      </div>
    </>
  );
}

export default App;
