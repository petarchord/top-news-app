import axios from "axios";

const baseUrl = "http://newsapi.org/v2/top-headlines?";
const apiKey = process.env.REACT_APP_API_KEY;

export const fetchNewsByCountry = async (country) => {
  try {
    const {
      data: { articles },
    } = await axios.get(`${baseUrl}country=${country}&apiKey=${apiKey}`);
    console.log("articles:", articles);
    return articles;
  } catch (error) {
    console.log("error ocurred", error);
  }
};
