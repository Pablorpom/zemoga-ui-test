import NavbarSearchButton from "./NavbarSearchButton";
import styles from "./NavbarMenu.module.scss";
import { useState } from "react";

export default function NavbarMenu(props) {
  const [isInputClosed, setIsInputClosed] = useState(true);
  const onClick = (e) => {
    e.preventDefault();
    if (isInputClosed) {
      setIsInputClosed(false);
    } else {
      setIsInputClosed(true);
    }
  };
  const menuClassName = props.isMenuClosed
    ? `${styles.root} ${styles.hide}`
    : `${styles.root}`;

  const inputClassName = isInputClosed
    ? `${styles.input} ${styles.hideInput}`
    : `${styles.input}`;

  return (
    <ul className={menuClassName}>
      <li>
        <a href="#">Past Trials</a>
      </li>
      <li>
        <a href="#">How It Works</a>
      </li>
      <li>
        <a href="#">Login / Sign Up</a>
      </li>
      <li>
        <form>
          <input className={inputClassName} aria-label="search" type="text" />
          <NavbarSearchButton onClick={onClick} />
        </form>
      </li>
    </ul>
  );
}
