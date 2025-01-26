import { io } from "socket.io-client";

const socket = io("https://real-time-taskapp.onrender.com");

export default socket;
