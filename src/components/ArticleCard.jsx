import {Link} from 'react-router-dom'


export const ArticleCard = ({ title, votes, article_id }) => {
  return (
    <div className="Article_card">
      <Link to={`/articles/${article_id}`}><h2>{title}</h2></Link>
      <p>{votes}</p>
    </div>
  );
};
