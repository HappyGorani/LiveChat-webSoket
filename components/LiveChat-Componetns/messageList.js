import { forwardRef } from "react";
import styles from "./messageList.module.css";
import LoadingSpinner from "../z-ui/loadingSpinner";

function MessageList(props, ref) {
  const connectingState = props.connectingState;
  return (
    <ul className={styles["message-list"]} ref={ref}>
      {!connectingState && <LoadingSpinner />}
      {connectingState &&
        props.messageData.map((data) => (
          <li key={data._id}>
            <p>{data.chat.sixIp}</p>
            <p>{data.chat.text}</p>
          </li>
        ))}
    </ul>
  );
}
export default forwardRef(MessageList);
