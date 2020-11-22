import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <nav>
        <ul>
          <div className={styles.left_nav_items}>
            <Link to="/">
              <li>Top News</li>
            </Link>
            <Link to="/">
              <li>Categories</li>
            </Link>

            <Link to="/">
              <li>Search</li>
            </Link>
          </div>

          <div className={styles.right_nav_items}>
            <Link to="/">
              <li>GB</li>
            </Link>

            <Link to="/">
              <li>US</li>
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
