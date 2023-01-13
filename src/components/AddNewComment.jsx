import { useState } from "react";
import * as Api from "../utils/newsApi";

export const AddNewComment = ({
  article_id,
  comments,
  setComments,
  singleUser,
}) => {
  const [addNewComment, setAddNewComment] = useState("");
  const [error, setError] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (addNewComment === "") {
      return;
    }
    setComments([
      {
        author: singleUser?.username,
        votes: 0,
        body: addNewComment,
        created_at: "just now",
      },
      ...comments,
    ]);
    e.target.disabled = true;
    Api.postComment(article_id, addNewComment, singleUser?.username)
      .then(() => {
        setAddNewComment("");
        e.target.disabled = false;
      })
      .catch((err) => {
        if (err) {
          setComments(comments);
          setError(true);
        }
      });
  };

  if (error) return <p>Ooops something went wrong, please try again!</p>;
  return (
    <form>
      <p>Comment:</p>
      <div className="AddComment_container">
        <div className="Username_box">
          <p className="Username">UserName: </p>
          <b>
            <p>{singleUser?.username}</p>
          </b>
        </div>
        <div className="Comment_input">
          <textarea
            name="body"
            value={addNewComment}
            onChange={(e) => setAddNewComment(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="AddComment_btn"
          onClick={handleCommentSubmit}
        >
          Add
        </button>
      </div>
    </form>
  );
};
