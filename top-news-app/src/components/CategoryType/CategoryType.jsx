import React, { useState, useEffect } from "react";
import styles from "./CategoryType.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { fetchNewsByCategory } from "../../api";
import { Link } from "react-router-dom";

const CategoryType = ({ category, country }) => {
  const [news, setNews] = useState([]);
  const fetchCategory = async () => {
    setNews(await fetchNewsByCategory(country, category.toLowerCase(), 5));
  };

  useEffect(() => {
    fetchCategory();
  }, [country]);

  return (
    <div className={styles.container}>
      <h3>{category}</h3>
      <div className={styles.content_holder}>
        <BsChevronLeft size="3em" color="white" />
        <BsChevronRight size="3em" color="white" />
        <h5> {news.length && news[0].title} </h5>
        <Link to={`/categories/${category.toLowerCase()}`}>
          <img
            src={news.length && news[0].urlToImage}
            alt={news.length && news[0].title + "_img"}
          />
        </Link>
      </div>
    </div>
  );
};

export default CategoryType;
