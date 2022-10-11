import { Server } from "Socket.IO";
const dummyData = [];
const socketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log("연결되었습니다.");
  } else {
    console.log("연결중입니다.");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
    io.on("connection", (socket) => {
      socket.on("newMessage", (message) => {
        dummyData.push({ text: message, createAt: new Date() });
        socket.emit("updateMessage", dummyData);
      });
      socket.on("loadingMessage", () => {
        socket.emit("updateMessage", dummyData);
      });
    });
  }
  res.end();
};

export default socketHandler;
