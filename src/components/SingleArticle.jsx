import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as Api from "../utils/newsApi";

export const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    Api.getArticlesById(article_id).then(({ article }) => {
      setSingleArticle(article);
      setIsLoading(false)
    });
  }, [article_id]);

  if(isLoading) return <h3 className="Loading_message">Loading...</h3>

  return (
    <main className="Article_main">
      <h3> {singleArticle.title}</h3>
      <h3 className="Article_author"> {singleArticle.author}</h3>
      <article>{singleArticle.body}</article>
      <p className="Article_votes">
        Votes: <b>{singleArticle.votes}</b>
      </p>
    </main>
  );
};
