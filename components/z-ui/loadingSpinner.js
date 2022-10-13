import styles from "./loadingSpinner.module.css";
function LoadingSpinner() {
  return (
    <div className={styles.spinner}>
      <div className={styles.ground}>
        <div className={styles.ball}></div>
      </div>
    </div>
  );
}
export default LoadingSpinner;
