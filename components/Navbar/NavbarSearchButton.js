import PropTypes from "prop-types";
import Image from "next/image";
import searchImage from "../../public/search.svg";
import styles from "./NavbarSearchButton.module.scss";

export default function NavbarButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={styles.searchButton}
      alt="Search"
      type="submit"
    >
      <Image src={searchImage} alt="search" />
    </button>
  );
}

NavbarButton.propTypes = {
  onClick: PropTypes.func,
};
