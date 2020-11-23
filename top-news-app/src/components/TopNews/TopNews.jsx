import React, { useContext, useState, useEffect } from "react";
import styles from "./TopNews.module.scss";
import News from "../News/News";
import { CountryContext } from "../../context/CountryContext";
import { fetchNewsByCountry } from "../../api";
const TopNews = () => {
  const [news, setNews] = useState([]);
  const [country] = useContext(CountryContext);

  const fetchApi = async () => {
    setNews(await fetchNewsByCountry(country));
  };

  useEffect(() => {
    fetchApi();
  }, [country]);

  const getSelectedCountry = () => {
    switch (country) {
      case "gb":
        return "Great Britain";
      case "us":
        return "United States";
      default:
        return "Great Britain";
    }
  };

  return (
    <main className={styles.container}>
      <h3>Top news from {getSelectedCountry()}:</h3>
      <News news={news} />
    </main>
  );
};

export default TopNews;
