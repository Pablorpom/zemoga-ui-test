import styles from "./CelebrityVoteSection.module.scss";
import CelebrityCardsSection from "./CelebrityCardsSection";
import CelebrityRowsSection from "./CelebrityRowsSection";
import CelebrityCardRowDropDown from "../DropDowns/CelebrityCardRowDropDown";
import { useEffect, useState } from "react";

export default function CelebrityVoteSection() {
  const [dropDownDisplay, setDropDownDisplay] = useState("grid");
  useEffect(() => {
    setDropDownDisplay("grid");
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setDropDownDisplay("grid");
      }
    });
  }, []);
  const onChange = (value) => {
    if (value === "grid") {
      setDropDownDisplay(value);
    } else if (value === "list") {
      setDropDownDisplay(value);
    }
  };
  const hideCardSection =
    dropDownDisplay === "list"
      ? `${styles.cardSection} ${styles.hideGrid}`
      : `${styles.cardSection}`;

  const hideRowsSection =
    dropDownDisplay === "grid"
      ? `${styles.rowsSection} ${styles.hideRows}`
      : `${styles.rowsSection}`;
  return (
    <main role="main" className={styles.main}>
      <h2>Previous Rulings</h2>
      <div className={styles.dropDown}>
        <CelebrityCardRowDropDown onChange={onChange} />
      </div>
      <div className={hideCardSection}>
        <CelebrityCardsSection />
      </div>
      <div className={hideRowsSection}>
        <CelebrityRowsSection />
      </div>
    </main>
  );
}
