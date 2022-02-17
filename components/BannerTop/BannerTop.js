import { useState } from "react";
import styles from "./BannerTop.module.scss";

export default function BannerTop() {
  const [isBannerOpen, setIsBannerOpen] = useState(true);
  const onClick = () => {
    if (isBannerOpen) {
      setIsBannerOpen(false);
    }
  };
  const bannerClass = isBannerOpen
    ? styles.bannerTop
    : `${styles.bannerTop} ${styles.hide}`;
  return (
    <aside
      data-testid={"banner top"}
      className={bannerClass}
      role="doc-tip"
      aria-label="Speak Out"
    >
      <div className={styles.left}>
        <span className={styles.hairline}>Speak out. Be heard.</span>
        <span className={styles.baseline}>Be counted</span>
      </div>
      <div className={styles.right}>
        <p className={styles.text}>
          Rule of Thumb is a crowd sourced court of public opinion where anyone
          and everyone can speak out and speak freely. It’s easy: You share your
          opinion, we analyze and put the data in a public report.
        </p>
      </div>
      <button
        data-testid={"banner top button"}
        onClick={onClick}
        aria-label="close"
        className={styles.closeButton}
      >
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#000" strokeWidth="2" fill="none" fillRule="evenodd">
            <path d="M1 19L19 1M1 1l18 18" />
          </g>
        </svg>
      </button>
    </aside>
  );
}
