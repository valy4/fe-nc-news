import "./App.css";
import { ArticleList } from "./components/ArticleList";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { SingleArticle } from "./components/SingleArticle";
import { useEffect, useState } from "react";
import * as Api from "./utils/newsApi";

function App() {
  const [topicsList, setTopicsList] = useState([]);
  const [topics, setTopics] = useState("");
  const [usersList, setUsersList] = useState([])

  useEffect(() => {
    Api.getTopics().then(({ topics }) => {
      setTopicsList(topics);
    });
  }, []);
    useEffect(()=>{
Api.getUsers().then(({users}) => {
 setUsersList(users)
})
  },[])
  return (
    <div className="App">
      <Header topicsList={topicsList} setTopics={setTopics} topics={topics} />
      <Routes>
        <Route path="/" element={<ArticleList topics={topics} />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="/topics/:topic" element={<ArticleList />} />
         <Route path="/users" element={<Users usersList={usersList} setUsersList = {setUsersList} />}/>
      </Routes>

  


     
    </div>
  );
}

export default App;
