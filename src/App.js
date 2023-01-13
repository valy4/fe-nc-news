import "./App.css";
import { ArticleList } from "./components/ArticleList";
import { Header } from "./components/Header";
import { Users } from "./components/Users";
import { Routes, Route } from "react-router-dom";
import { SingleArticle } from "./components/SingleArticle";
import { useEffect, useState } from "react";
import * as Api from "./utils/newsApi";

function App() {
  const [topicsList, setTopicsList] = useState([]);
  const [topics, setTopics] = useState("");

  const [usersList, setUsersList] = useState([]);
  const [userLogged, setUserLogged] = useState(false);
  const [singleUser, setSingleUser] = useState({});

  useEffect(() => {
    Api.getTopics().then(({ topics }) => {
      setTopicsList(topics);
    });
  }, []);
  useEffect(() => {
    Api.getUsers().then(({ users }) => {
      setUsersList(users);
    });
  }, []);

  return (
    <div className="App">
      <Header
        topicsList={topicsList}
        setTopics={setTopics}
        topics={topics}
        userLogged={userLogged}
        singleUser={singleUser}
      />
      <Routes>
        <Route path="/" element={<ArticleList topics={topics} />} />
        <Route
          path="/articles/:article_id"
          element={<SingleArticle singleUser={singleUser} />}
        />
        <Route path="/topics/:topic" element={<ArticleList />} />
        <Route
          path="/users"
          element={
            <Users
              setSingleUser={setSingleUser}
              usersList={usersList}
              setUsersList={setUsersList}
              userLogged={userLogged}
              setUserLogged={setUserLogged}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
