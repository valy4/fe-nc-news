export const ArticleCard = ({ title, votes }) => {
  return (
    <div className="Article_card">
      <h2>{title}</h2>
      <p>{votes}</p>
    </div>
  );
};
