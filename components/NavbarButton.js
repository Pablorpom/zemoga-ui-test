import styles from "./NavbarButton.module.scss";

export default function NavbarButton(props) {
  return (
    <div className={styles.root}>
      <button
        onClick={props.onClick}
        alt="Open Menu"
        className={styles.openMenu}
      >
        <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z"
            fill="#FFF"
            fillRule="nonzero"
          />
        </svg>
      </button>
    </div>
  );
}
