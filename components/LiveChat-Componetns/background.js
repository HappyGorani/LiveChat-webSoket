import styles from "./background.module.css";

function Background() {
  return (
    <div className={styles.background}>
      <div className={styles.background_1}>
        <div className={styles.background_2}></div>
      </div>

      <div className={styles.sun_1}></div>
      <div className={styles.sun_2}></div>
      <div className={styles.cloud_4}></div>
      <div className={styles.cloud_2}></div>
      <div className={styles.cloud_3}></div>
      <div className={styles.cloud_1}></div>
    </div>
  );
}
export default Background;
