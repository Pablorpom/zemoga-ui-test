import styles from "./VoteNowButton.module.scss";

export default function VoteNowButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={styles.voteNowButton}
      aria-label="vote now"
      disabled={props.isActive}
    >
      {props.buttonText}
    </button>
  );
}
