import React, { useContext, useState, useEffect } from "react";
import styles from "./SearchNews.module.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { CountryContext } from "../../context/CountryContext";
import { fetchNewsByTerm } from "../../api";
import News from "../News/News";
const SearchNews = () => {
  const [term, setTerm] = useState("");
  const [news, setNews] = useState([]);
  const [country] = useContext(CountryContext);

  const fetchApi = async () => {
    setNews(await fetchNewsByTerm(country, term));
  };

  useEffect(() => {
    fetchApi();
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
      <News news={news} />
    </main>
  );
};

export default SearchNews;
