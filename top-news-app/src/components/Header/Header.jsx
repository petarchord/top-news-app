import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { CountryContext } from "../../context/CountryContext";
import cx from "classnames";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [selected, setSelected] = useState(0); //0-Top News 1-Categories 2-Search
  const [countryDisabled, setCountryDisabled] = useState(false);
  const [country, setCountry] = useContext(CountryContext);
  const history = useHistory();
  console.log("history", history);

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
              to="/search"
              onClick={() => {
                setSelected(2);
              }}
            >
              <li className={selected === 2 ? styles.active : ""}>Search</li>
            </Link>
          </div>

          <div className={styles.right_nav_items}>
            <li
              className={cx(
                country === "gb" ? styles.active : "",
                countryDisabled ? styles.disabled : ""
              )}
              onClick={() => setCountry("gb")}
            >
              GB
            </li>

            <li
              className={cx(
                country === "us" ? styles.active : "",
                countryDisabled ? styles.disabled : ""
              )}
              onClick={() => setCountry("us")}
            >
              US
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
