import React, { useState, useEffect, useContext } from "react";
import styles from "./Category.module.scss";
import News from "../News/News";
import { fetchNewsByCategory } from "../../api";
import { CountryContext } from "../../context/CountryContext";
import Loader from "../Common/Loader/Loader";
const Category = (props) => {
  const [news, setNews] = useState([]);
  const [country] = useContext(CountryContext);
  const category = props.match.params.id;

  useEffect(() => {
    const fetchCategoryNews = async () => {
      setNews(await fetchNewsByCategory(country, category, 20));
    };
    fetchCategoryNews();
  }, [country, category]);

  return (
    <main className={styles.container}>
      <h3>
        Top {category} news from{" "}
        {country === "gb" ? "Great Britain" : "United States"}{" "}
      </h3>
      {news.length ? <News news={news} /> : <Loader />}
    </main>
  );
};

export default Category;
