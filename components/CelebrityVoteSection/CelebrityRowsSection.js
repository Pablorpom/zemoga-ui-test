import CelebrityRow from "./CelebrityRow";
import styles from "./CelebrityRowsSection.module.scss";

export default function CelebrityRowsSection() {
  return (
    <div className={styles.cardsContainerList}>
      <CelebrityRow />
      <CelebrityRow />
      <CelebrityRow />
      <CelebrityRow />
      <CelebrityRow />
      <CelebrityRow />
    </div>
  );
}
