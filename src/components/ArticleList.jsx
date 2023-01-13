import { useEffect, useState } from "react";
import * as Api from "../utils/newsApi";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = ({topics}) => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
console.log(topics)

  useEffect(() => {
    setIsLoading(true)
    Api.getArticles().then(({ articles }) => {
      if(topics !== ""){
        setArticleList(articles.filter((article)=> article.topic === topics))
         }else{
          setArticleList(articles);
         }
      
      
      setIsLoading(false)
    });
  }, [topics]);
  

  if(isLoading)return <h3 className="Loading_message">Loading...</h3>
  
  return (
    <main className="Main">
      <h3 className="Votes">Votes</h3>
      <ul>
      {articleList.map((article) => {
        return (
          
            <li key={article.article_id} className="Article_card_list">
              <ArticleCard  article_id = {article.article_id} title={article.title} votes={article.votes} />
            </li>
          
        );
      })}
      </ul>
    </main>
  );
};
