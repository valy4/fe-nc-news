import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Header = ({ topicsList, topics }) => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    navigate(`/topics/${e.target.value}`);
  };

  return (
    <header className="App_header">
      <h1>News</h1>

      <select
        className="Topics"
        name="topics"
        value={topics}
        onChange={handleChange}
      >
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
      <Link to="/users">
        <button>LogIn</button>
      </Link>
    </header>
  );
};
