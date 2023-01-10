import icon from "../assets/like.jpg";
import iconDislike from "../assets/dislike.png";
import * as Api from "../utils/newsApi";
import { useState } from "react";

export const UpdateVotes = ({ singleArticle, article_id }) => {
  const [upVote, setUpVote] = useState(0);

  const handleLikeClickVote = () => {
    setUpVote((currVote) => currVote + 1);
    Api.patchVotes(article_id, 1).catch((err) => {
      if(err){
        setUpVote((currVote) => currVote - 1);
        return <p>Failed...</p>
      }
     
    });
  };

  const handleDislikeClickVote = () => {
    setUpVote((currVote) => currVote - 1);
    Api.patchVotes(article_id, 1).catch((err) => {
      if(err){
        setUpVote((currVote) => currVote + 1);
        return <p>Failed...</p>
      }
    });
  }

  return (
    <section className="Votes_container">
      <div className="Btn">
        <button className="Btn_like" onClick={handleLikeClickVote}>
          <img src={icon} style={{ width: "25px" }} alt={"Like"} />
        </button>
        <button className="Btn_dislike" onClick={handleDislikeClickVote}>
          <img src={iconDislike} style={{ width: "25px" }} alt={"Dislike"} />
        </button>
      </div>

      <p className="Article_votes">
        Votes: <b>{singleArticle.votes + upVote}</b>
      </p>
    </section>
  );
};
