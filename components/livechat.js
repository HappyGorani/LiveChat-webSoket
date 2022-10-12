import io from "socket.io-client";
import { useEffect, useState, useRef } from "react";
import { getSixIp } from "../api-util/getSixIp";

import Background from "./LiveChat-Componetns/background";
import InputBox from "./LiveChat-Componetns/inputbox";
import MessageList from "./LiveChat-Componetns/messageList";

import styles from "./livechat.module.css";

let socket;

function LiveChat() {
  const [messageData, setMessageData] = useState([]);
  const [sixIp, setSixIp] = useState("");
  const userInputRef = useRef(null);
  const messageScrollRef = useRef();

  const socketInitializer = async () => {
    await fetch("/api/socket");
    const sixIp = await getSixIp();
    setSixIp(sixIp);
    socket = io();

    socket.on("connect", () => {
      console.log("연결됨");
      socket.emit("loadingMessage");
    });

    socket.on("updateMessage", (data) => {
      setMessageData(data);
    });
  };

  useEffect(() => {
    socketInitializer();
    autoScroll();
  }, []);
  useEffect(() => {
    autoScroll();
  }, [messageData]);
  const autoScroll = () => {
    messageScrollRef.current.scrollTop = messageScrollRef.current.scrollHeight;
  };
  const sendMessageHandler = (e) => {
    e.preventDefault();
    const enteredUserInput = userInputRef.current.value;
    socket.emit("newMessage", { text: enteredUserInput, sixIp: sixIp });
    userInputRef.current.value = "";
    autoScroll();
  };

  return (
    <>
      <Background />
      <div className={styles.components}>
        <h2>LiveChat</h2>
        <MessageList messageData={messageData} ref={messageScrollRef} />
        <InputBox sendMessageHandler={sendMessageHandler} ref={userInputRef} />
      </div>
    </>
  );
}
export default LiveChat;
