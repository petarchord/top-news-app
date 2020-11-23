import React, { useState, useEffect } from "react";
import styles from "./News.module.scss";
import { fetchNewsByCountry } from "../../api";
import NewsItem from "../NewsItem/NewsItem";
import Loader from "../Common/Loader/Loader";

const News = () => {
  const [news, setNews] = useState([]);

  const fetchApi = async () => {
    setNews(await fetchNewsByCountry("us"));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className={styles.container}>
      {news &&
        news.map((newsItem, index) => (
          <NewsItem
            key={index}
            title={newsItem.title}
            image={newsItem.urlToImage}
            description={newsItem.description}
          />
        ))}
    </div>
  );
};

export default News;
