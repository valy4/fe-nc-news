export const CommentCard = ({ author, body, votes, created_at }) => {
 
  return (
    <div className="Comment_card">
      <p className="Comment_date">{created_at}</p>
      <article>{body}</article>
      <div className="Comment_author_votes"> 
      <p><b>{author}</b></p>
      <p>Votes: <b>{votes}</b> </p>
      </div>
     
    </div>
  );
};
