import { forwardRef } from "react";
import styles from "./messageList.module.css";

function MessageList(props, ref) {
  return (
    <ul className={styles["message-list"]} ref={ref}>
      {props.messageData.map((data) => (
        <li key={data._id}>
          <p>{data.chat.sixIp}</p>
          <p>{data.chat.text}</p>
        </li>
      ))}
    </ul>
  );
}
export default forwardRef(MessageList);
