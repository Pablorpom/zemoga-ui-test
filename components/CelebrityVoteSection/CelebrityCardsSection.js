import PropTypes from "prop-types";
import CelebrityCard from "./CelebrityCard";
import styles from "./CelebrityCardsSection.module.scss";

export default function CelebrityCardsSection(props) {
  return (
    <div className={styles.cardsContainer}>
      {props.data.map((celebrity) => {
        return (
          <CelebrityCard
            key={celebrity.id}
            id={celebrity.id}
            name={celebrity.name}
            description={celebrity.description}
            category={celebrity.category}
            picture={celebrity.picture}
            lastUpdated={celebrity.lastUpdated}
          />
        );
      })}
    </div>
  );
}

CelebrityCardsSection.propTypes = {
  data: PropTypes.array,
};
