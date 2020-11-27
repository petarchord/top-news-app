import React from "react";
import styles from "./Backdrop.module.scss";
import cx from "classnames";
import PropTypes from "prop-types";

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

Backdrop.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleSideDrawer: PropTypes.func.isRequired,
};

Backdrop.defaultProps = {
  open: false,
};

export default Backdrop;
