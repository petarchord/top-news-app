import React from "react";
import styles from "./Backdrop.module.scss";
import cx from "classnames";

const Backdrop = ({ open, toggleSideDrawer }) => {
  return (
    <div
      className={cx(styles.container, open ? "" : styles.invisible)}
      onClick={() => toggleSideDrawer((prevState) => !prevState)}
    >
      <div className={styles.exit_btn}>x</div>
    </div>
  );
};

export default Backdrop;
