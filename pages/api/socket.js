import { Server } from "Socket.IO";
import { getChat, saveChat } from "../../helper/chatData-API";

const dummyData = [];
const socketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log("연결되었습니다.");
  } else {
    console.log("연결중입니다.");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;
    io.on("connection", (socket) => {
      socket.on("newMessage", async (data) => {
        const chat = { sixIp: data.sixIp, text: data.text };
        await saveChat(chat);
        const newData = await getChat();
        socket.broadcast.emit("updateMessage", newData);
      });
      socket.on("loadingMessage", async () => {
        const newData = await getChat();
        socket.broadcast.emit("updateMessage", newData);
      });
    });
  }
  res.end();
};

export default socketHandler;
