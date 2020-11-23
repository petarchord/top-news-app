import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { fetchNewsByCountry } from "../../api";
import News from "../News/News";

const Home = () => {
  return (
    <main className={styles.container}>
      <h3>Top news from Great Britain:</h3>
      <News />
    </main>
  );
};

export default Home;
