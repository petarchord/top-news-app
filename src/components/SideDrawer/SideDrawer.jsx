import React from "react";
import styles from "./SideDrawer.module.scss";
import { Link } from "react-router-dom";
import cx from "classnames";
import PropTypes from "prop-types";

const SideDrawer = ({ open, toggleSideDrawer }) => {
  return (
    <nav className={cx(styles.container, open ? "" : styles.invisible)}>
      <ul>
        <li>
          <Link
            to="/"
            onClick={() => {
              toggleSideDrawer((prevState) => !prevState);
            }}
          >
            Top News
          </Link>
        </li>
        <li>
          <Link
            to="/categories"
            onClick={() => {
              toggleSideDrawer((prevState) => !prevState);
            }}
          >
            Categories
          </Link>
        </li>
        <li>
          <Link
            to="/search"
            onClick={() => {
              toggleSideDrawer((prevState) => !prevState);
            }}
          >
            Search
          </Link>
        </li>
      </ul>
    </nav>
  );
};

SideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleSideDrawer: PropTypes.func.isRequired,
};

SideDrawer.defaultProps = {
  open: false,
};

export default SideDrawer;
