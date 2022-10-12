import { forwardRef } from "react";
import styles from "./inputbox.module.css";
import SendButton from "../../components/z-ui/sendButton";

function InputBox(props, ref) {
  return (
    <div className={styles.inputbox}>
      <form onSubmit={props.sendMessageHandler}>
        <input ref={ref} />
        <SendButton />
      </form>
    </div>
  );
}
export default forwardRef(InputBox);
