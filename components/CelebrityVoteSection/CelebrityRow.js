import PropTypes from "prop-types";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./CelebrityRow.module.scss";
import ThumbsButton from "../Buttons/ThumbsButtons";
import thumbsUpImage from "../../public/thumbs-up.svg";
import thumbsDownImage from "../../public/thumbs-down.svg";
import VoteNowButton from "../Buttons/VoteNowButton";
import { formatDistance, subDays } from "date-fns";

export default function CelebrityRow(props) {
  const positive = 0;
  const negative = 0;
  const voteStatusClassName =
    positive > negative
      ? `${styles.voteStatusImageContainerThumbsDown} ${styles.hideStatus}`
      : `${styles.voteStatusImageContainerThumbsDown}`;
  const [isThumbsButtonActive, setIsThumbsButtonActive] = useState("");
  const [isVoteButtonActive, setIsVoteButtonActive] = useState(true);
  const [voteButtonText, setVoteButtonText] = useState("Vote Now");
  useEffect(() => {
    if (isThumbsButtonActive === "") {
      setIsVoteButtonActive(true);
    } else {
      setIsVoteButtonActive(false);
    }
  }, [isThumbsButtonActive]);
  const onThumbsButtonClick = (thums) => {
    if (thums === "up") {
      setIsThumbsButtonActive("up");
    } else if (thums === "down") {
      setIsThumbsButtonActive("down");
    }
  };
  const onVoteButtonClick = () => {
    if (isThumbsButtonActive === "up") {
      positive++;
    } else if (isThumbsButtonActive === "down") {
      negative++;
    }
    if (voteButtonText === "Vote Now") {
      setVoteButtonText("Vote Again");
    } else {
      setVoteButtonText("Vote Now");
    }
    setIsThumbsButtonActive("");
  };

  const eyebrowTextClassName =
    voteButtonText === "Vote Again"
      ? `${styles.voteNowEyebrow}`
      : `${styles.voteNowEyebrow} ${styles.hideEyebrow}`;

  const date = formatDistance(
    subDays(new Date(new Date(props.lastUpdated)), 3),
    new Date(),
    {
      addSuffix: true,
    }
  );

  return (
    <div className={styles.container}>
      <div className={styles.backgroundColor}></div>
      <div className={styles.imageContainer}>
        <Image
          src={`/${props.picture}`}
          alt="Kanye West"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.featuredCard}>
        <div className={styles.cardListSections}>
          <div className={styles.leftSection}>
            <h3>{props.name}</h3>
            <div className={styles.voteStatus}>
              <div className={styles.voteStatusImageContainerThumbsUp}>
                <Image src={thumbsUpImage} alt="thumbs up" />
              </div>
              <div className={voteStatusClassName}>
                <Image src={thumbsDownImage} alt="thumbs down" />
              </div>
            </div>
            <p className={styles.description}>{props.description}</p>
          </div>
          <div className={styles.rightSection}>
            <h5
              className={styles.lastUpdate}
            >{`${date} in ${props.category}`}</h5>
            <div className={styles.buttonsContainer}>
              <ThumbsButton small onClick={onThumbsButtonClick} />
              <VoteNowButton
                onClick={onVoteButtonClick}
                isActive={isVoteButtonActive}
                buttonText={voteButtonText}
              />
              <div className={eyebrowTextClassName}>Thanks for your vote!</div>
            </div>
          </div>
        </div>
        <div className={styles.voteCount}>
          <div className={styles.thumbsUp}>
            <div className={styles.thumbsUpImageContainer}>
              <Image src={thumbsUpImage} alt="thumbs up" />
            </div>
          </div>
          <div className={styles.percentageContainer}>
            <h4 className={styles.positivePercentage}>25.5%</h4>
            <h4 className={styles.negativePercentage}>74.5%</h4>
          </div>
          <div className={styles.thumbsDown}>
            <div className={styles.thumbsDownImageContainer}>
              <Image src={thumbsDownImage} alt="thumbs down" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CelebrityRow.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  picture: PropTypes.string,
  lastUpdated: PropTypes.string,
};
