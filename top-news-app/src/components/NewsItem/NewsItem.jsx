import React, { useContext } from "react";
import styles from "./NewsItem.module.scss";
import { ArticleContext } from "../../context/ArticleContext";
import { Link } from "react-router-dom";

const NewsItem = ({ title, image, description, content }) => {
  const [, setArticle] = useContext(ArticleContext);
  return (
    <article className={styles.container}>
      <h5>{title}</h5>
      <img src={image} alt={title + "_img"} />
      <p>{description}</p>
      <Link
        to="/article"
        onClick={() => {
          setArticle({
            title,
            image,
            content,
          });
        }}
      >
        {"More >"}
      </Link>
    </article>
  );
};

export default NewsItem;
