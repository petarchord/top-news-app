import axios from "axios";

const baseUrl = "http://newsapi.org/v2/top-headlines?";
const apiKey = process.env.REACT_APP_API_KEY;

export const fetchNewsByCountry = async (country) => {
  try {
    const {
      data: { articles },
    } = await axios.get(`${baseUrl}country=${country}&apiKey=${apiKey}`);
    return articles;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewsByTerm = async (country, term) => {
  try {
    const {
      data: { articles },
    } = await axios.get(
      `${baseUrl}country=${country}&q=${term}&apiKey=${apiKey}`
    );
    return articles;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewsByCategory = async (counrty, category, pageSize) => {
  try {
    const {
      data: { articles },
    } = await axios.get(
      `${baseUrl}country=${counrty}&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`
    );
    return articles;
  } catch (error) {
    console.log(error);
  }
};
