import { useState } from "react";
import * as Api from "../utils/newsApi";

export const AddNewComment = ({ article_id, comments, setComments }) => {
  const [addNewComment, setAddNewComment] = useState({
    username: "jessjelly",
    votes: 0,
    body: "",
    created_at: "just now",
  });
  const [textValue, setTextValue] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setAddNewComment({
      username: "jessjelly",
      body: textValue,
      votes: 0,
      created_at: "just now",
    });
    if (addNewComment.body === "") {
      return;
    }

    setComments([addNewComment, ...comments]);
    Api.postComment(article_id, addNewComment).then(() => {
     
      setTextValue("");
    });
  };

  return (
    <form onSubmit={handleCommentSubmit}>
      <p>Comment:</p>
      <div className="AddComment_container">
        <div className="Username_input">
          <label>UserName</label>
          <input name="username" defaultValue={addNewComment.username}></input>
        </div>
        <div className="Comment_input">
          <textarea
            name="body"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          ></textarea>
        </div>
        <button className="AddComment_btn">Add</button>
      </div>
    </form>
  );
};
