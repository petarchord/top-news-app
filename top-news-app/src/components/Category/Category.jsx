import React, { useState, useEffect, useContext } from "react";
import styles from "./Category.module.scss";
import News from "../News/News";
import { fetchNewsByCategory } from "../../api";
import { CountryContext } from "../../context/CountryContext";

const Category = (props) => {
  const [news, setNews] = useState([]);
  const [country] = useContext(CountryContext);
  const category = props.match.params.id;
  const fetchCategory = async () => {
    setNews(await fetchNewsByCategory(country, category, 20));
  };

  useEffect(() => {
    fetchCategory();
  }, [country]);

  return (
    <main className={styles.container}>
      <h3>
        Top {category} news from{" "}
        {country === "gb" ? "Great Britain" : "United States"}{" "}
      </h3>
      <News news={news} />
    </main>
  );
};

export default Category;
