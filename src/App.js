import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div class='container'>
          <Route exact path='/' component={Home} />
          <Route exact path='/staff' component={Staff} />
        </div>
      </div>
    </Router>
  );
};

export default App;
