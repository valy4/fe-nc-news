export const Header = ({ topicsList, topics, setTopics }) => {

  const handleChange = (e) => {
    setTopics(e.target.value);
  };

  return (
    <header className="App_header">
      <h1>News</h1>

      <select className="Topics" name="topics" value={topics} onChange={handleChange}>
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
    </header>
  );
};
