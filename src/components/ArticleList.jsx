import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as Api from "../utils/newsApi";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    Api.getArticles().then(({ articles }) => {
      if (topic !== undefined) {
        setArticleList(articles.filter((article) => article.topic === topic));
      } else {
        setArticleList(articles);
      }

      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) return <h3 className="Loading_message">Loading...</h3>;

  return (
    <main className="Main">
      <h3 className="Votes">Votes</h3>
      <ul>
        {articleList.map((article) => {
          return (
            <li key={article.article_id} className="Article_card_list">
              <ArticleCard
                article_id={article.article_id}
                title={article.title}
                votes={article.votes}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
};
