import React, { useContext } from "react";
import styles from "./Categories.module.scss";
import { CountryContext } from "../../context/CountryContext";

const Categories = () => {
  const [country] = useContext(CountryContext);

  return (
    <main className={styles.conatiner}>
      <h3>
        Top 5 news by categories from{" "}
        {country === "gb" ? "Great Britain" : "United States"}
      </h3>
    </main>
  );
};

export default Categories;
