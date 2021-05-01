import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import ContactMe from "./components/ContactMe";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="projects">
          <Projects />
        </Route>
        <Route path="blog">
          <Blog />
        </Route>
        <Route path="contact">
          <ContactMe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
