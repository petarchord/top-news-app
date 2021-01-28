import React from "react";
import styles from "./HamburgerButton.module.scss";
import PropTypes from "prop-types";

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

HamburgerButton.propTypes = {
  toggleSideDrawer: PropTypes.func.isRequired,
};

export default HamburgerButton;
