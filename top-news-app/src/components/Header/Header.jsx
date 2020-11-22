import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <nav>
        <ul>
          <div className={styles.left_nav_items}>
            <li>
              <Link to="/">Top News</Link>
            </li>
            <li>
              <Link to="/">Categories</Link>
            </li>
            <li>
              <Link to="/">Search</Link>
            </li>
          </div>

          <div className={styles.right_nav_items}>
            <li>
              <Link to="/">GB</Link>
            </li>
            <li>
              <Link to="/">US</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
