import React, { useState, useEffect, useRef } from "react";
import styles from "./CategoryType.module.scss";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { fetchNewsByCategory } from "../../api";
import { Link } from "react-router-dom";
import Loader from "../Common/Loader/Loader";

const CategoryType = ({ category, country }) => {
  const [news, setNews] = useState([]);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const slider = useRef();
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
            size="3em"
            onClick={() => {
              slideLeft();
            }}
          />
          <BsChevronRight
            size="3em"
            onClick={() => {
              slideRight();
            }}
          />
          <div ref={slider} className={styles.slider}>
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

export default CategoryType;
