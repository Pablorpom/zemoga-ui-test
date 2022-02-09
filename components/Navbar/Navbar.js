import { useState } from "react";
import styles from "./Navbar.module.scss";
import NavbarButton from "./NavbarButton";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  const [isMenuClosed, setIsMenuClosed] = useState(true);

  const onClick = () => {
    if (isMenuClosed) {
      setIsMenuClosed(false);
    } else {
      setIsMenuClosed(true);
    }
  };
  return (
    <nav role="navigation">
      <div className={styles.root}>
        <h1>Rule of thumb.</h1>
        <NavbarButton onClick={onClick} />
        <NavbarMenu isMenuClosed={isMenuClosed} />
      </div>
    </nav>
  );
}
