import PropTypes from "prop-types";
import styles from "./CelebrityVoteSection.module.scss";
import CelebrityCardsSection from "./CelebrityCardsSection";
import CelebrityRowsSection from "./CelebrityRowsSection";
import CelebrityCardRowDropDown from "../DropDowns/CelebrityCardRowDropDown";
import { useEffect, useState } from "react";

export default function CelebrityVoteSection(props) {
  const responsive = 768;
  const [dropDownDisplay, setDropDownDisplay] = useState("grid");
  const setGridOnResize = () => {
    if (window.innerWidth <= responsive) {
      setDropDownDisplay("grid");
    }
  };
  useEffect(() => {
    setDropDownDisplay("grid");
    window.addEventListener("resize", setGridOnResize);
    return () => {
      window.removeEventListener("resize", setGridOnResize);
    };
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
        <CelebrityCardRowDropDown onChange={onChange} value={dropDownDisplay} />
      </div>
      <div className={hideCardSection}>
        <CelebrityCardsSection data={props.data} />
      </div>
      <div className={hideRowsSection}>
        <CelebrityRowsSection data={props.data} />
      </div>
    </main>
  );
}

CelebrityVoteSection.propTypes = {
  data: PropTypes.array,
};
