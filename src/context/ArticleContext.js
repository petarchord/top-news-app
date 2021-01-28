import React, { useState, createContext } from "react";

export const ArticleContext = createContext();

export const ArticleProvider = (props) => {
  const [article, setArticle] = useState({});

  return (
    <ArticleContext.Provider value={[article, setArticle]}>
      {props.children}
    </ArticleContext.Provider>
  );
};
