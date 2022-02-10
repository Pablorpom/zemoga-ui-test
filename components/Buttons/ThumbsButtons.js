import Image from "next/image";
import thumbsUpImage from "../../public/thumbs-up.svg";
import thumbsDownImage from "../../public/thumbs-down.svg";
import styles from "./ThumbsButtons.module.scss";

export default function ThumbsButtons() {
  return (
    <div className={styles.thumbButtonContainer}>
      <button className={styles.thumbButton} aria-label="thumbs up">
        <div className={styles.imageContainer}>
          <Image
            src={thumbsUpImage}
            alt="thumbs up"
            objectFit="fill"
            width={50}
            height={35}
          />
        </div>
      </button>
      <button className={styles.thumbButton} aria-label="thumbs down">
        <div className={styles.imageContainer}>
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
