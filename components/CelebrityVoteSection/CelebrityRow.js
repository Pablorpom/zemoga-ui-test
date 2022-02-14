import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./CelebrityRow.module.scss";
import picture from "../../public/kanye.png";
import ThumbsButton from "../Buttons/ThumbsButtons";
import thumbsUpImage from "../../public/thumbs-up.svg";
import thumbsDownImage from "../../public/thumbs-down.svg";
import VoteNowButton from "../Buttons/VoteNowButton";

export default function CelebrityRow() {
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
  return (
    <div className={styles.container}>
      <div className={styles.backgroundColor}></div>
      <div className={styles.imageContainer}>
        <Image src={picture} alt="Kanye West" width={500} height={500} />
      </div>
      <div className={styles.featuredCard}>
        <div className={styles.cardListSections}>
          <div className={styles.leftSection}>
            <h3>Kanye West</h3>
            <div className={styles.voteStatus}>
              <div className={styles.voteStatusImageContainerThumbsUp}>
                <Image src={thumbsUpImage} alt="thumbs up" />
              </div>
              <div className={voteStatusClassName}>
                <Image src={thumbsDownImage} alt="thumbs down" />
              </div>
            </div>
            <p className={styles.description}>
              Born in Atlanta and raised in Chicago, West was first known as a
              producer for Roc-A-Fella Records in the early 2000s, producing
              singles for several mainstream artists.
            </p>
          </div>
          <div className={styles.rightSection}>
            <h5 className={styles.lastUpdate}>1 month ago in Enterteiment</h5>
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
