import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Header = ({ topicsList, topics, userLogged, singleUser }) => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    if (e.target.value !== "none") {
      navigate(`/topics/${e.target.value}`);
    } else {
      navigate(`/`);
    }
  };
  const handleClick = (e) => {
    e.target.hidden = true;
  };

  return (
    <header className="App_header">
      <h1>News</h1>

      <select className="Topics" name="topics" onChange={handleChange}>
        <option value="none" defaultValue>
          Topics
        </option>
        {topicsList.map((topic) => {
          return (
            <option key={topic.slug} value={topic.slug}>
              {topic.slug}
            </option>
          );
        })}
      </select>
      {userLogged === false ? (
        <Link to="/users">
          <button onClick={handleClick}>LogIn</button>
        </Link>
      ) : (
        <div>
          <img
            style={{ width: "40px", height: "50px", marginTop: "20px" }}
            src={singleUser.avatar_url}
          ></img>
          <p>{singleUser.username}</p>
        </div>
      )}
    </header>
  );
};
