import React, { useEffect } from "react";
import styles from "./Home.module.scss";
import { fetchNewsByCountry } from "../../api";

const Home = () => {
  useEffect(() => {
    fetchNewsByCountry("us").then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <main className={styles.container}>
      <h3>Top news from Great Britain:</h3>
    </main>
  );
};

export default Home;
