import SendIcon from "../z-icon/sendIcon";
function SendButton(props) {
  return (
    <button onClick={props.onClick}>
      <SendIcon />
      {props.children}
    </button>
  );
}
export default SendButton;
