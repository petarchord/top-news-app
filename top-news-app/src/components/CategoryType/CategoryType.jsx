import React, { useState, useEffect } from "react";
import styles from "./CategoryType.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { fetchNewsByCategory } from "../../api";
import { Link } from "react-router-dom";

const CategoryType = ({ category, country }) => {
  const [news, setNews] = useState([]);
  const [categoryIndex, setCategoryIndex] = useState(0);

  const slideLeft = () => {
    if (categoryIndex === 0) setCategoryIndex(news.length - 1);
    else setCategoryIndex((prevIndex) => prevIndex - 1);
  };

  const slideRight = () => {
    if (categoryIndex === news.length - 1) setCategoryIndex(0);
    else setCategoryIndex((prevIndex) => prevIndex + 1);
  };

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
        <BsChevronLeft
          size="3em"
          color="white"
          onClick={() => {
            slideLeft();
          }}
        />
        <BsChevronRight
          size="3em"
          color="white"
          onClick={() => {
            slideRight();
          }}
        />
        <h5> {news.length && news[categoryIndex].title} </h5>
        <Link to={`/categories/${category.toLowerCase()}`}>
          <img
            src={news.length && news[categoryIndex].urlToImage}
            alt={news.length && news[categoryIndex].title + "_img"}
          />
        </Link>
      </div>
    </div>
  );
};

export default CategoryType;
