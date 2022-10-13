import { forwardRef } from "react";
import styles from "./inputbox.module.css";
import SendButton from "../../components/z-ui/sendButton";

function InputBox(props, ref) {
  const { connectingState, isEmpty } = props;
  const isDisabled = connectingState ? styles.input : styles["input-disabled"];
  return (
    <div className={styles.inputbox}>
      <form onSubmit={props.sendMessageHandler}>
        {!connectingState && (
          <input
            className={isDisabled}
            disabled
            ref={ref}
            placeholder="전송할 메세지를 입력하세요(최대 64자)"
            maxLength="64"
          />
        )}
        {connectingState && (
          <input
            className={isDisabled}
            ref={ref}
            placeholder={isEmpty ? "메세지를 입력하세요" : "전송할 메세지를 입력하세요(최대 64자)"}
            maxLength="64"
          />
        )}
        <SendButton />
      </form>
    </div>
  );
}
export default forwardRef(InputBox);
