import React, { useState, useEffect } from "react";
import styles from "./CategoryType.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { fetchNewsByCategory } from "../../api";

const CategoryType = ({ category, country }) => {
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    setNews(await fetchNewsByCategory(country, category.toLowerCase(), 5));
  };

  useEffect(() => {
    fetchData();
  }, [country]);

  return (
    <div className={styles.conatiner}>
      <h3>{category}</h3>
      <div className={styles.category_holder}>
        <BsChevronLeft />
        <div className={styles.content_holder}>
          <h5> {news && news[0].title} </h5>
          <img
            src={news && news[0].urlToImage}
            alt={news && news[0].title + "_img"}
          />
        </div>
        <BsChevronRight />
      </div>
    </div>
  );
};

export default CategoryType;
