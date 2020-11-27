import React, { useContext } from "react";
import styles from "./HamburgerButton.module.scss";

const HamburgerButton = ({ toggleSideDrawer }) => {
  return (
    <button
      className={styles.container}
      onClick={() => {
        toggleSideDrawer((prevState) => !prevState);
      }}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

export default HamburgerButton;
