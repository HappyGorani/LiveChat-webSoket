import styles from "./background.module.css";

function Background() {
  return (
    <div className={styles.background}>
      <div className={styles.background_1}>
        <div className={styles.background_2}>
          <div className={styles.moon}/>
        </div>
      </div>

      <div className={styles.sun_1} />
      <div className={styles.sun_2} />
      <div className={styles.cloud_4} />
      <div className={styles.cloud_2} />
      <div className={styles.cloud_3} />
      <div className={styles.cloud_1} />
    </div>
  );
}
export default Background;
