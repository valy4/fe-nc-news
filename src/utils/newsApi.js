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
  return newsApi
    .get(`/api/articles/${article_id}/comments`)
    .then((response) => {
      return response.data;
    });
};
export const patchVotes = (article_id, increment) => {
  const patchBody = {
    inc_votes: increment,
  };
  return newsApi.patch(`/api/articles/${article_id}`, patchBody);
};
export const postComment = (article_id, addNewComment) => {
  const postBody = {
    username: "jessjelly",
    body: addNewComment.body,
  };

  return newsApi.post(`/api/articles/${article_id}/comments`, postBody);
};
