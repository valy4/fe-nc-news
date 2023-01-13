import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as Api from "../utils/newsApi";
import { CommentCard } from "./CommentCard";
import { AddNewComment } from "./AddNewComment";
import { UpdateVotes } from "./UpdateVotes";

export const SingleArticle = ({ singleUser }) => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    Api.getArticlesById(article_id).then(({ article }) => {
      setSingleArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  useEffect(() => {
    Api.getComments(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [article_id]);

  if (isLoading) return <h3 className="Loading_message">Loading...</h3>;

  return (
    <main className="Article_main">
      <section className="Article_section">
        <h3> {singleArticle.title}</h3>
        <h3 className="Article_author"> {singleArticle.author}</h3>
        <article>{singleArticle.body}</article>
        <UpdateVotes singleArticle={singleArticle} article_id={article_id} />
      </section>

      {singleUser.username && (
        <section>
          <AddNewComment
            comments={comments}
            setComments={setComments}
            article_id={article_id}
            singleUser={singleUser}
          />
        </section>
      )}

      <section>
        <ul>
          {comments.map((comment) => {
            const newDate = comment.created_at.split("T")[0];
            return (
              <li key={comment.comment_id}>
                <CommentCard
                  author={comment.author}
                  body={comment.body}
                  votes={comment.votes}
                  created_at={newDate}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};
