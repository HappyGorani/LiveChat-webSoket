import SendIcon from "../z-icon/sendIcon";
import styles from "./sendButton.module.css";
function SendButton(props) {
  return (
    <>
      <button onClick={props.onClick} className={styles.btn}>
        <SendIcon />
        <div className={styles.icon}></div>
        {props.children}
      </button>
    </>
  );
}
export default SendButton;
