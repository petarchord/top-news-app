import React, { useContext, useState, useEffect } from "react";
import styles from "./SearchNews.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { CountryContext } from "../../context/CountryContext";
import { fetchNewsByTerm } from "../../api";
import News from "../News/News";
import Loader from "../Common/Loader/Loader";
const SearchNews = () => {
  const [term, setTerm] = useState("");
  const [news, setNews] = useState([]);
  const [country] = useContext(CountryContext);

  useEffect(() => {
    const fetchNews = async () => {
      setNews(await fetchNewsByTerm(country, term));
    };
    fetchNews();
  }, [country, term]);

  return (
    <main className={styles.container}>
      <h3>
        Search top news from{" "}
        {country === "gb" ? "Great Britain" : "United States"} by term:
      </h3>
      <div className={styles.search_input_holder}>
        <input
          type="text"
          name="search"
          placeholder="Search term..."
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <AiOutlineSearch size="1.5em" />
      </div>
      {news.length ? <News news={news} /> : <Loader />}
    </main>
  );
};

export default SearchNews;
