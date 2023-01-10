import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://be-news.onrender.com",
});

export const getArticles = () => {
  return newsApi.get("/api/articles").then((response) => {
    return response.data;
  });
};

export const getArticlesById = (article_id) => {
  return newsApi.get(`/api/articles/${article_id}`).then((response) => {
    return response.data;
  });
};

export const getComments = (article_id) => {
return newsApi.get(`/api/articles/${article_id}/comments`).then((response) => {
  return response.data
})
}