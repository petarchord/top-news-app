import React, { useContext, useState, useEffect, useRef } from "react";
import styles from "./TopNews.module.scss";
import News from "../News/News";
import { CountryContext } from "../../context/CountryContext";
import { fetchNewsByCountry } from "../../api";
import Loader from "../Common/Loader/Loader";
const TopNews = () => {
  const [news, setNews] = useState([]);
  const [country] = useContext(CountryContext);
  const isMountedRef = useRef(null);

  useEffect(() => {
    isMountedRef.current = true;
    const fetchNews = async () => {
      const fetchedNews = await fetchNewsByCountry(country);
      if (isMountedRef.current) {
        setNews(fetchedNews);
      }
    };

    fetchNews();

    return () => {
      isMountedRef.current = false;
    };
  }, [country]);

  return (
    <main className={styles.container}>
      <h3>
        Top news from {country === "gb" ? "Great Britain" : "United States"}:
      </h3>
      {news.length ? <News news={news} /> : <Loader />}
    </main>
  );
};

export default TopNews;
