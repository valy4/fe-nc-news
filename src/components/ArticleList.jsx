import { useEffect, useState } from "react";
import * as Api from "../utils/newsApi";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    Api.getArticles().then(({ articles }) => {
      setArticleList(articles);
      setIsLoading(false)
    });
  }, []);

  if(isLoading)return <h3 className="Loading_message">Loading...</h3>
  
  return (
    <main className="Main">
      <h3 className="Votes">Votes</h3>
      {articleList.map((article) => {
        return (
          <ul>
            <li className="Article_card_list">
              <ArticleCard title={article.title} votes={article.votes} />
            </li>
          </ul>
        );
      })}
    </main>
  );
};
