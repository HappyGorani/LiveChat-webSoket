import styles from "./messageList.module.css";

function MessageList(props) {
  return (
    <ul className={styles["message-list"]}>
      {props.messageData.map((data) => (
        <li key={data._id}>
          {data.chat.sixIp}
          {data.chat.text}
        </li>
      ))}
    </ul>
  );
}
export default MessageList;
