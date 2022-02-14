import styles from "./CelebrityCardRowDropDown.module.scss";
import { useRef } from "react";

export default function CelebrityCardRowDropDown(props) {
  const dropDownMenu = useRef();
  return (
    <select
      value={"grid"}
      ref={dropDownMenu}
      className={styles.dropDown}
      onChange={() => props.onChange(dropDownMenu.current.value)}
    >
      <option value="grid">Grid</option>
      <option value="list">List</option>
    </select>
  );
}
