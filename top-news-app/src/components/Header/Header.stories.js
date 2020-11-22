import React from "react";
import Header from "./Header";
import App from "../../App";

export default {
  title: "Header",
  component: Header,
};

export const Primary = () => (
  <App>
    <Header />
  </App>
);
