import React from 'react';
import { Route } from "react-router-dom";
import Homepage from "./home/HomePage";
import AboutPage from "./about/AboutPage";

function App() {
  return (
    <div className="container-fluid">
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={AboutPage} />
    </div>
  )
}

export default App;