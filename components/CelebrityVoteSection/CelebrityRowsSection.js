import PropTypes from "prop-types";
import CelebrityRow from "./CelebrityRow";
import styles from "./CelebrityRowsSection.module.scss";

export default function CelebrityRowsSection(props) {
  return (
    <div className={styles.cardsContainerList}>
      {props.data.map((celebrity) => {
        return (
          <CelebrityRow
            key={celebrity.name}
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

CelebrityRowsSection.propTypes = {
  data: PropTypes.array,
};
