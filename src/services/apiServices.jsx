import Axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getTopHeadlines = async () => {
  try {
    const res = await Axios.get(
      `${BASE_URL}/top-headlines?category=general&lang=en&max=9&apikey=${API_KEY}`,
    );
    return res.data.articles;
  } catch (error) {
    console.log("Error in Fetching Top Headlines");
  }
};
