const { Server } = require("socket.io");

const PORT = process.env.PORT || 4000;

const io = new Server(PORT, {
  cors: {
    origin: "*",
  },
});

let tasks = [];

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("add-task", (task) => {
    tasks.push({ text: task, completed: false });
    console.log("Tasks after addition:", tasks); // Debugging
    io.emit("tasks-updated", tasks);
  });

  socket.on("delete-task", (taskText) => {
    tasks = tasks.filter((task) => task.text !== taskText);
    console.log("Tasks after deletion:", tasks); // Debugging
    io.emit("tasks-updated", tasks);
  });

  socket.on("complete-task", (taskText) => {
    tasks = tasks.map((task) =>
      task.text === taskText ? { ...task, completed: true } : task
    );
    console.log("Tasks after completion:", tasks); // Debugging
    io.emit("tasks-updated", tasks);
  });

  socket.emit("tasks-updated", tasks);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

console.log(`WebSocket server running on port ${PORT}`);
