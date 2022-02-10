import styles from "./HeroClosingGauge.module.scss";

export default function HeroClosingGauge() {
  return (
    <div className={styles.heroClosingGauge}>
      <div className={styles.left}>
        <span className={styles.title}>closing in</span>
      </div>
      <div className={styles.right}>
        <span className={styles.number}>22</span>
        <span className={styles.time}>days</span>
      </div>
    </div>
  );
}
