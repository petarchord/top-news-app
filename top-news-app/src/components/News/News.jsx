import React from "react";
import styles from "./News.module.scss";
import NewsItem from "../NewsItem/NewsItem";

const News = ({ news }) => {
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
