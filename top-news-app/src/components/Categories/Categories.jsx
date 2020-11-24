import React, { useContext } from "react";
import styles from "./Categories.module.scss";
import { CountryContext } from "../../context/CountryContext";
import CategoryType from "../CategoryType/CategoryType";

const Categories = () => {
  const [country] = useContext(CountryContext);

  return (
    <main className={styles.conatiner}>
      <h3>
        Top 5 news by categories from{" "}
        {country === "gb" ? "Great Britain" : "United States"}
      </h3>
      <section className={styles.categories}>
        <CategoryType category="Entertainment" country={country} />
        <CategoryType category="Health" country={country} />
        <CategoryType category="Science" country={country} />
        <CategoryType category="Sports" country={country} />
        <CategoryType category="Technology" country={country} />
        <CategoryType category="Business" country={country} />
      </section>
    </main>
  );
};

export default Categories;
