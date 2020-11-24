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

  return (
    <main className={styles.container}>
      <h3>
        Top news from {country === "gb" ? "Great Britain" : "United States"}:
      </h3>
      <News news={news} />
    </main>
  );
};

export default TopNews;
