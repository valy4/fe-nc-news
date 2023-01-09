import "./App.css";
import { ArticleList } from "./components/ArticleList";
import { Header } from "./components/Header";
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
      <Route path="/" element = {<ArticleList/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
