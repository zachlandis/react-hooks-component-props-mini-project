import React from "react";
import blogData from "../data/blog";
import Header from "../data/blog";
import About from "../data/blog"
import ArticleList from "../data/blog"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ArticleList />
    </div>
  );
}

export default App;
