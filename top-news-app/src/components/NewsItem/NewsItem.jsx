import React from "react";
import styles from "./NewsItem.module.scss";
import { Link } from "react-router-dom";

const NewsItem = ({ title, image, description }) => {
  return (
    <div className={styles.container}>
      <h5>{title}</h5>
      <img src={image} alt={title + "_img"} />
      <p>{description}</p>
      <Link>{"More >"}</Link>
    </div>
  );
};

export default NewsItem;
