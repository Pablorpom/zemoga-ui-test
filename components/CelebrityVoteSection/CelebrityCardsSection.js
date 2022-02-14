import CelebrityCard from "./CelebrityCard";
import styles from "./CelebrityCardsSection.module.scss";

export default function CelebrityCardsSection() {
  return (
    <div className={styles.cardsContainer}>
      <CelebrityCard />
      <CelebrityCard />
      <CelebrityCard />
      <CelebrityCard />
      <CelebrityCard />
      <CelebrityCard />
    </div>
  );
}
