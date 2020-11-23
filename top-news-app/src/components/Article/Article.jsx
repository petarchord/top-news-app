import React from "react";
import styles from "./Article.module.scss";
import { Link } from "react-router-dom";

const Article = () => {
  return (
    <div className={styles.container}>
      <h2>Title</h2>
      <img src="" alt="" />
      <p>Content</p>
      <Link>{"< Back to list"}</Link>
    </div>
  );
};

export default Article;
