import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://be-news.onrender.com",
});

export const getArticles = () => {
  return newsApi.get("/api/articles").then((response) => {
    return response.data;
  });
};
