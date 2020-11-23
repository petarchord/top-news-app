import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { CountryContext } from "../../context/CountryContext";

const Header = () => {
  const [selected, setSelected] = useState(0); //0-Top News 1-Categories 2-Search
  const [country, setCountry] = useContext(CountryContext);
  return (
    <header className={styles.container}>
      <nav>
        <ul>
          <div className={styles.left_nav_items}>
            <Link
              to="/"
              onClick={() => {
                setSelected(0);
              }}
            >
              <li className={selected === 0 ? styles.active : ""}>Top News</li>
            </Link>
            <Link
              to="/categories"
              onClick={() => {
                setSelected(1);
              }}
            >
              <li className={selected === 1 ? styles.active : ""}>
                Categories
              </li>
            </Link>

            <Link
              to="/"
              onClick={() => {
                setSelected(2);
              }}
            >
              <li className={selected === 2 ? styles.active : ""}>Search</li>
            </Link>
          </div>

          <div className={styles.right_nav_items}>
            <Link to="/" onClick={() => setCountry(0)}>
              <li className={country === 0 ? styles.active : ""}>GB</li>
            </Link>

            <Link to="/" onClick={() => setCountry(1)}>
              <li className={country === 1 ? styles.active : ""}>US</li>
            </Link>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
