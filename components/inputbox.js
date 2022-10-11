import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

import { getSixIp } from "../api-util/getSixIp";

let socket;

function InputBox() {
  const userInput = useRef("");
  const [messageData, setMessageData] = useState([]);
  const [sixIp, setSixIp] = useState("");
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
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredUserInput = userInput.current.value;
    socket.emit("newMessage", { text: enteredUserInput, sixIp: sixIp });
  };
  console.log(messageData);
  return (
    <>
      <h1>라이브채팅</h1>
      <form onSubmit={submitHandler}>
        <input ref={userInput} />
        <button onClick={submitHandler}>go!</button>
      </form>
      <hr />
      <ul>
        {messageData.map((data) => (
          <li key={data.createAt}>
            {data.sixIp}
            {data.text}
          </li>
        ))}
      </ul>
    </>
  );
}
export default InputBox;
