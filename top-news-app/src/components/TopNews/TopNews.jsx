import React, { useEffect } from "react";
import styles from "./TopNews.module.scss";
import News from "../News/News";

const TopNews = () => {
  return (
    <main className={styles.container}>
      <h3>Top news from Great Britain:</h3>
      <News />
    </main>
  );
};

export default TopNews;
