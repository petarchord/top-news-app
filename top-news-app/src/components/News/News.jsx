import React from "react";
import styles from "./News.module.scss";
import NewsItem from "../NewsItem/NewsItem";
import PropTypes from "prop-types";

const News = ({ news }) => {
  return (
    <section className={styles.container}>
      {news &&
        news.map((newsItem, index) => (
          <NewsItem
            key={index}
            title={newsItem.title}
            image={newsItem.urlToImage}
            description={newsItem.description}
            content={newsItem.content}
          />
        ))}
    </section>
  );
};

News.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default News;
