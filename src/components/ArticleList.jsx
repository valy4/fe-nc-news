import { useEffect, useState } from "react";
import * as Api from "../utils/newsApi";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    Api.getArticles().then(({ articles }) => {
      setArticleList(articles);
    });
  }, []);
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
