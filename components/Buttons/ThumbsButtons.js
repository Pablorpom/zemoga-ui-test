import PropTypes from "prop-types";
import Image from "next/image";
import thumbsUpImage from "../../public/thumbs-up.svg";
import thumbsDownImage from "../../public/thumbs-down.svg";
import styles from "./ThumbsButtons.module.scss";

export default function ThumbsButtons(props) {
  const thumbButtonClassName = props.small
    ? `${styles.thumbButton} ${styles.smallButton}`
    : `${styles.thumbButton}`;
  const thumbButtonContainerClassName = props.small
    ? `${styles.imageContainer} ${styles.smallButtonContainer}`
    : `${styles.imageContainer}`;
  const mainContainerClassName = props.small
    ? `${styles.mainContainer} ${styles.smallMainContainer}`
    : `${styles.mainContainer}`;

  return (
    <div className={mainContainerClassName}>
      <button
        className={thumbButtonClassName}
        aria-label="thumbs up"
        onClick={() => props.onClick("up")}
        onBlur={() => props.onClick("")}
      >
        <div className={thumbButtonContainerClassName}>
          <Image
            src={thumbsUpImage}
            alt="thumbs up"
            objectFit="fill"
            width={50}
            height={35}
          />
        </div>
      </button>
      <button
        className={thumbButtonClassName}
        aria-label="thumbs down"
        onClick={() => props.onClick("down")}
        onBlur={() => props.onClick("")}
      >
        <div className={thumbButtonContainerClassName}>
          <Image
            src={thumbsDownImage}
            alt="thumbs down"
            objectFit="fill"
            width={50}
            height={35}
          />
        </div>
      </button>
    </div>
  );
}

ThumbsButtons.propTypes = {
  small: PropTypes.bool,
  onClick: PropTypes.func,
};
