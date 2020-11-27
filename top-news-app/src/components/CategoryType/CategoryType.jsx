import React, { useState, useEffect } from "react";
import styles from "./CategoryType.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { fetchNewsByCategory } from "../../api";
import { Link } from "react-router-dom";
import Loader from "../Common/Loader/Loader";
import PropTypes from "prop-types";

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

      {news.length ? (
        <div className={styles.content_holder}>
          <BsChevronLeft
            onClick={() => {
              slideLeft();
            }}
          />
          <BsChevronRight
            onClick={() => {
              slideRight();
            }}
          />
          <div className={styles.slider}>
            <h5> {news[categoryIndex].title} </h5>
            <Link to={`/categories/${category.toLowerCase()}`}>
              <img
                src={news[categoryIndex].urlToImage}
                alt={news[categoryIndex].title + "_img"}
              />
            </Link>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

CategoryType.propTypes = {
  category: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

CategoryType.defaultProps = {
  country: "gb",
};

export default CategoryType;
