import React, { useContext } from "react";
import styles from "./Article.module.scss";
import { ArticleContext } from "../../context/ArticleContext";
import { Link } from "react-router-dom";

const Article = (props) => {
  const [article] = useContext(ArticleContext);
  return (
    <main className={styles.container}>
      <h3>{article.title}</h3>
      <img src={article.image} alt="" />
      <p> {article.content} </p>
      <Link
        to=""
        onClick={() => {
          props.history.goBack();
        }}
      >
        {"< Back to list"}
      </Link>
    </main>
  );
};

export default Article;
