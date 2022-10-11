import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

let socket;

function InputBox() {
  const userInput = useRef("");
  const [messageData, setMessageData] = useState([]);

  const socketInitializer = async () => {
    await fetch("/api/socket");
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
    socket.emit("newMessage", enteredUserInput);
  };

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
          <li key={data.createAt}>{data.text}</li>
        ))}
      </ul>
    </>
  );
}
export default InputBox;
