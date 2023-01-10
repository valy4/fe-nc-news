import "./App.css";
import { ArticleList } from "./components/ArticleList";
import { Header } from "./components/Header";
import {Routes, Route} from "react-router-dom"
import { SingleArticle } from "./components/SingleArticle";

function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path="/" element = {<ArticleList/>}/>
      <Route path="/articles/:article_id" element = {<SingleArticle/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
