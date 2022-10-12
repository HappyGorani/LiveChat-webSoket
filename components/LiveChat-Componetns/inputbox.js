import { forwardRef } from "react";
import styles from "./inputbox.module.css";
import SendButton from "../../components/z-ui/sendButton";

function InputBox(props, ref) {
  return (
    <div className={styles.inputbox}>
      <form onSubmit={props.sendMessageHandler}>
        <input ref={ref} placeholder='전송할 메세지를 입력하세요...'/>
        <SendButton />
      </form>
    </div>
  );
}
export default forwardRef(InputBox);
