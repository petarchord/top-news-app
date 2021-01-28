import React from "react";
import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h3>Page not found!</h3>
      <Link to="/"> {"< Go to Home"} </Link>
    </div>
  );
};

export default NotFound;
